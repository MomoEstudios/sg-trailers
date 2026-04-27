/*
  Netlify Function: inventory.js
  Proxies Airtable API → oculta el token, nunca expuesto al navegador.

  Variables de entorno requeridas en Netlify Dashboard:
    AIRTABLE_TOKEN   → Personal Access Token de Airtable (scope: data.records:read)
    AIRTABLE_BASE_ID → ID de la base (empieza con "app...")

  Uso desde el frontend:
    GET /.netlify/functions/inventory?dealer=southwest-auto-yuma
    GET /.netlify/functions/inventory?dealer=southwest-auto-yuma&status=Available
    GET /.netlify/functions/inventory (todos los dealers)
*/

exports.handler = async (event) => {
  const { dealer, status } = event.queryStringParameters || {};

  const token  = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const table  = 'Inventario';

  if (!token || !baseId) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Missing Airtable config. Set AIRTABLE_TOKEN and AIRTABLE_BASE_ID in Netlify environment variables.' })
    };
  }

  /* Build Airtable filter formula */
  const parts = ["NOT({status} = 'Hidden')"];
  if (dealer) parts.push(`{dealer_id} = '${dealer.replace(/'/g, "\\'")}'`);
  if (status) parts.push(`{status} = '${status.replace(/'/g, "\\'")}'`);
  const filter = parts.length > 1 ? `AND(${parts.join(',')})` : parts[0];

  /* Airtable API URL */
  const url = new URL(`https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`);
  url.searchParams.set('filterByFormula', filter);
  url.searchParams.set('sort[0][field]', 'created_date');
  url.searchParams.set('sort[0][direction]', 'desc');
  url.searchParams.set('fields[]', 'dealer_id');
  url.searchParams.append('fields[]', 'model');
  url.searchParams.append('fields[]', 'year');
  url.searchParams.append('fields[]', 'size');
  url.searchParams.append('fields[]', 'price');
  url.searchParams.append('fields[]', 'status');
  url.searchParams.append('fields[]', 'stock_number');
  url.searchParams.append('fields[]', 'gvwr');
  url.searchParams.append('fields[]', 'axles');
  url.searchParams.append('fields[]', 'color');
  url.searchParams.append('fields[]', 'photos');
  url.searchParams.append('fields[]', 'notes');
  url.searchParams.append('fields[]', 'created_date');

  try {
    const response = await fetch(url.toString(), {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errText = await response.text();
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'Airtable error', detail: errText })
      };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        /* Cache 60 seconds — actualiza rápido sin sobrecargar Airtable */
        'Cache-Control': 'public, max-age=60, stale-while-revalidate=300'
      },
      body: JSON.stringify(data)
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Fetch failed', detail: err.message })
    };
  }
};
