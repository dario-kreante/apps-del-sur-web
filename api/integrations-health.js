// Read-only Airtable connectivity check; never creates records or exposes lead data.
export default async function handler(req, res) {
  if (req.method !== 'GET') return sendJson(res, 405, { ok: false, error: 'method_not_allowed' });
  const clean = value => String(value || '').trim().replace(/^['"]|['"]$/g, '');
  const key = clean(process.env.AIRTABLE_API_KEY);
  const base = clean(process.env.AIRTABLE_BASE_ID);
  const table = clean(process.env.AIRTABLE_ASSESSMENT_TABLE) || 'Assessment Leads';
  let airtable = { ok: false, configured: Boolean(key && base) };
  if (airtable.configured) {
    try {
      const response = await fetch(`https://api.airtable.com/v0/${encodeURIComponent(base)}/${encodeURIComponent(table)}?maxRecords=1`, {
        method: 'GET', headers: { Authorization: `Bearer ${key}` },
      });
      airtable = { ok: response.ok, configured: true, status: response.status };
    } catch {
      airtable.error = 'connection_failed';
    }
  }
  return sendJson(res, 200, { ok: airtable.ok, airtable, checkedAt: new Date().toISOString() });
}

function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}
