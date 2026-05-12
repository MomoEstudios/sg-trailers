/*
  Netlify Function: submit-order.js
  Recibe la configuración del configurador, genera un order_code único,
  y crea un registro en la tabla "Solicitudes" de Airtable.

  Variables de entorno requeridas (mismas que inventory.js y track.js):
    AIRTABLE_TOKEN   → Personal Access Token
    AIRTABLE_BASE_ID → ID de la base (app...)

  Uso desde el frontend:
    POST /.netlify/functions/submit-order
    Body: JSON con los datos del pedido
*/

exports.handler = async (event) => {
  /* Solo acepta POST */
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const token  = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const table  = 'Solicitudes';

  if (!token || !baseId) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Missing Airtable config' }) };
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  /* Generar código de pedido único: SG-YYYYMMDD-XXX */
  const now   = new Date();
  const y     = now.getFullYear();
  const m     = String(now.getMonth() + 1).padStart(2, '0');
  const d     = String(now.getDate()).padStart(2, '0');
  const rand  = String(Math.floor(Math.random() * 900) + 100);
  const orderCode = `SG-${y}${m}${d}-${rand}`;

  /* Construir el resumen de configuración para uso interno */
  const configSummary = [
    `Model: ${body.model || '—'}`,
    `Size: ${body.size || '—'} ft`,
    `Axles: ${body.axles || '—'}`,
    `Floor: ${body.floor || '—'}`,
    `Hitch: ${body.hitch || '—'}`,
    `Electrical: ${body.electrical || '—'}`,
    `Storage: ${body.storage || '—'}`,
    body.notes ? `Notes: ${body.notes}` : null,
  ].filter(Boolean).join('\n');

  /* Campos a crear en Airtable */
  const fields = {
    order_code:       orderCode,
    customer_name:    (body.first_name || '').trim(),
    customer_email:   (body.email || '').trim(),
    customer_phone:   (body.phone || '').trim(),
    model:            body.model   || '',
    size:             body.size    ? `${body.size} ft` : '',
    year:             new Date().getFullYear(),
    status:           'Recibido',
    configuration:    configSummary,
    created_date:     now.toISOString().split('T')[0],
  };

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`,
      {
        method:  'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type':  'application/json',
        },
        body: JSON.stringify({ fields }),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      console.error('Airtable error:', err);
      return { statusCode: response.status, body: JSON.stringify({ error: 'Airtable error' }) };
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type':                'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ success: true, order_code: orderCode }),
    };

  } catch (err) {
    console.error('Function error:', err);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
