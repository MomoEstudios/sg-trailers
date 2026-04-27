/*
  Netlify Function: track.js
  Busca un pedido en la tabla "Solicitudes" de Airtable por order_code.
  Solo devuelve campos públicos — nunca expone email, teléfono, ni datos sensibles.

  Variables de entorno requeridas (mismas que inventory.js):
    AIRTABLE_TOKEN   → Personal Access Token
    AIRTABLE_BASE_ID → ID de la base (app...)

  Uso desde el frontend:
    GET /.netlify/functions/track?code=SG-2026-031
*/

exports.handler = async (event) => {
  const { code } = event.queryStringParameters || {};

  if (!code) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing order code' }) };
  }

  const token  = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const table  = 'Solicitudes';

  if (!token || !baseId) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Missing Airtable config' }) };
  }

  /* Search by order_code field — exact match */
  const filter = `{order_code} = '${code.replace(/'/g, "\\'").toUpperCase()}'`;

  const url = new URL(`https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`);
  url.searchParams.set('filterByFormula', filter);
  url.searchParams.set('maxRecords', '1');

  /* Only return public-safe fields — NEVER email, phone, address */
  const publicFields = ['order_code','model','size','year','status','created_date','estimated_delivery','notes_for_customer','customer_name'];
  publicFields.forEach(f => url.searchParams.append('fields[]', f));

  try {
    const response = await fetch(url.toString(), {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    if (!response.ok) {
      return { statusCode: response.status, body: JSON.stringify({ error: 'Airtable error' }) };
    }

    const data = await response.json();

    if (!data.records || data.records.length === 0) {
      return {
        statusCode: 404,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: 'Order not found' })
      };
    }

    /* Return only the fields object — clean, no Airtable metadata */
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-store' /* always fresh for order status */
      },
      body: JSON.stringify(data.records[0].fields)
    };

  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
