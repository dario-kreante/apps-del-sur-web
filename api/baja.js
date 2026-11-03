const INVITATIONS_TABLE = 'Invitaciones del estudio';
const OPT_OUT_TABLE = 'Bajas';
const TOKEN_PATTERN = /^[A-Za-z0-9_-]{16,128}$/;
const CONTACT_EMAIL = 'contacto@appsdelsur.cl';

export default async function handler(req, res) {
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.setHeader('Cache-Control', 'private, no-store');
  res.setHeader('Referrer-Policy', 'no-referrer');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  if (req.method !== 'GET' && req.method !== 'HEAD' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, HEAD, POST');
    return send(res, 405, 'Método no permitido', '');
  }

  const token = new URL(req.url, 'https://appsdelsur.cl').searchParams.get('t') || '';
  if (!TOKEN_PATTERN.test(token)) return send(res, 400, 'Enlace no válido', fallbackMessage());

  // Mail scanners follow links, so opening the link only asks for confirmation.
  if (req.method !== 'POST') {
    return send(res, 200, 'Dejar de recibir correos', `<p>Confirma para dejar de recibir invitaciones y correos de Apps del Sur.</p><form method="post" action="/api/baja/?t=${token}"><button type="submit">Confirmar baja</button></form>`);
  }

  const normalizeEnv = (value) => String(value || '').trim().replace(/^['"]|['"]$/g, '');
  const config = { key: normalizeEnv(process.env.AIRTABLE_API_KEY), baseId: normalizeEnv(process.env.AIRTABLE_BASE_ID) };
  if (!config.key || !config.baseId) return send(res, 503, 'No pudimos registrar tu baja', fallbackMessage());

  try {
    const invitation = await findInvitation(config, token);
    if (!invitation) return send(res, 404, 'Enlace no válido', fallbackMessage());
    if (invitation.fields.Estado !== 'Baja') {
      await airtable(config, OPT_OUT_TABLE, 'POST', '', {
        records: [{ fields: { Email: invitation.fields.Email, 'Fecha UTC': new Date().toISOString(), Origen: 'Enlace de baja', 'Invitación ID': invitation.fields['Invitación ID'] || '' } }],
      });
      await airtable(config, INVITATIONS_TABLE, 'PATCH', `/${invitation.id}`, { fields: { Estado: 'Baja' } });
    }
    return send(res, 200, 'Listo, ya no recibirás más correos', '<p>Registramos tu baja. Si quieres que eliminemos tus datos, responde a cualquiera de nuestros correos.</p>');
  } catch (error) {
    console.error('opt-out failed', error);
    return send(res, 502, 'No pudimos registrar tu baja', fallbackMessage());
  }
}

function fallbackMessage() {
  return `<p>Escríbenos a <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a> y te sacamos de la lista.</p>`;
}

async function findInvitation(config, token) {
  // The token is validated against TOKEN_PATTERN before it reaches this formula.
  const formula = encodeURIComponent(`{Token opaco}='${token}'`);
  const data = await airtable(config, INVITATIONS_TABLE, 'GET', `?maxRecords=1&filterByFormula=${formula}`);
  return data.records?.[0] || null;
}

async function airtable(config, table, method, suffix, body) {
  const response = await fetch(`https://api.airtable.com/v0/${config.baseId}/${encodeURIComponent(table)}${suffix}`, {
    method,
    headers: { Authorization: `Bearer ${config.key}`, 'Content-Type': 'application/json' },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  if (!response.ok) throw new Error(`Airtable ${response.status}`);
  return response.json();
}

function send(res, status, title, content) {
  res.statusCode = status;
  res.end(`<!doctype html><html lang="es-CL"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title} | Apps del Sur</title><style>body{margin:0;background:#f7faf7;color:#173a2e;font-family:Arial,Helvetica,sans-serif;padding:24px}main{max-width:520px;margin:48px auto;background:#fff;border:1px solid #dce8df;border-radius:12px;padding:28px}h1{font-size:24px;margin:0 0 12px}p{line-height:1.5}a{color:#176b4d}button{background:#176b4d;color:#fff;border:0;border-radius:999px;font-size:16px;font-weight:bold;padding:12px 20px;cursor:pointer}</style></head><body><main><h1>${title}</h1>${content}</main></body></html>`);
}
