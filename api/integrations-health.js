/**
 * Read-only integration health check for assessment CRM connectors.
 * Does not expose secrets — only connectivity and token validity signals.
 */
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return sendJson(res, 405, { ok: false, error: 'method_not_allowed' });
  }

  const airtableKey = process.env.AIRTABLE_API_KEY;
  const airtableBaseId = process.env.AIRTABLE_BASE_ID;
  const airtableTable = process.env.AIRTABLE_ASSESSMENT_TABLE || 'Assessment Leads';
  const hubspotToken = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  const hubspotOwnerId = process.env.HUBSPOT_OWNER_ID;

  const normalizedAirtableKey = normalizeSecret(airtableKey);
  const normalizedHubspotToken = normalizeSecret(hubspotToken);

  const [airtable, hubspot] = await Promise.all([
    checkAirtable(airtableKey, airtableBaseId, airtableTable, normalizedHubspotToken),
    checkHubSpot(hubspotToken, hubspotOwnerId),
  ]);

  return sendJson(res, 200, {
    ok: airtable.ok && hubspot.ok,
    airtable,
    hubspot,
    checkedAt: new Date().toISOString(),
  });
}

function normalizeSecret(value) {
  return String(value || '').trim().replace(/^['"]|['"]$/g, '');
}

async function checkAirtable(apiKey, baseId, tableName, hubspotTokenForCompare = '') {
  const trimmedKey = normalizeSecret(apiKey);
  const trimmedBaseId = normalizeSecret(baseId);
  const trimmedTable = normalizeSecret(tableName) || 'Assessment Leads';

  const meta = {
    keyLength: trimmedKey.length,
    keyPrefix: trimmedKey.slice(0, 7),
    looksLikeAirtablePat: /^pat[a-zA-Z0-9]/.test(trimmedKey) && !/^pat-(eu|na1?)-/i.test(trimmedKey),
    looksLikeHubSpotPat: /^pat-(eu|na1?)-/i.test(trimmedKey),
    looksLikeLegacyKey: /^key[a-zA-Z0-9]/.test(trimmedKey),
    sameTokenAsHubSpot: Boolean(trimmedKey && hubspotTokenForCompare && trimmedKey === hubspotTokenForCompare),
    hadWhitespace: trimmedKey.length !== String(apiKey || '').length,
    baseId: trimmedBaseId,
    table: trimmedTable,
  };

  if (!trimmedKey || !trimmedBaseId) {
    return {
      ok: false,
      configured: false,
      error: 'missing_env',
      missing: [!trimmedKey ? 'AIRTABLE_API_KEY' : null, !trimmedBaseId ? 'AIRTABLE_BASE_ID' : null].filter(Boolean),
      meta,
    };
  }

  try {
    const whoami = await fetch('https://api.airtable.com/v0/meta/whoami', {
      headers: { Authorization: `Bearer ${trimmedKey}` },
    });
    const whoamiBody = await whoami.text();
    let whoamiParsed = {};
    try {
      whoamiParsed = JSON.parse(whoamiBody);
    } catch (_error) {}

    if (!whoami.ok) {
      return {
        ok: false,
        configured: true,
        status: whoami.status,
        error: safeError(whoamiBody),
        step: 'whoami',
        meta,
      };
    }

    const table = encodeURIComponent(trimmedTable);
    const list = await fetch(
      `https://api.airtable.com/v0/${trimmedBaseId}/${table}?maxRecords=1`,
      { headers: { Authorization: `Bearer ${trimmedKey}` } },
    );
    const listBody = await list.text();
    if (!list.ok) {
      return {
        ok: false,
        configured: true,
        status: list.status,
        error: safeError(listBody),
        step: 'list-records',
        meta,
        whoami: { id: whoamiParsed.id, scopes: whoamiParsed.scopes },
      };
    }

    const create = await fetch(`https://api.airtable.com/v0/${trimmedBaseId}/${table}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${trimmedKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        records: [{
          fields: {
            'Lead ID': `healthcheck-${Date.now()}`,
            Nombre: 'Airtable Healthcheck',
            Email: `airtable.health.${Date.now()}@appsdelsur-test.cl`,
            Empresa: 'Apps del Sur Healthcheck',
            Fuente: 'integrations-health',
            'Estado CRM': 'Nuevo',
          },
        }],
        typecast: true,
      }),
    });
    const createBody = await create.text();
    if (!create.ok) {
      return {
        ok: false,
        configured: true,
        status: create.status,
        error: safeError(createBody),
        step: 'create-record',
        meta,
        whoami: { id: whoamiParsed.id, scopes: whoamiParsed.scopes },
      };
    }

    let created = {};
    try {
      created = JSON.parse(createBody);
    } catch (_error) {}

    return {
      ok: true,
      configured: true,
      status: create.status,
      step: 'create-record',
      table: trimmedTable,
      probeRecordId: created.records?.[0]?.id || null,
      meta,
      whoami: { id: whoamiParsed.id, scopes: whoamiParsed.scopes },
    };
  } catch (error) {
    return { ok: false, configured: true, error: error.message, meta };
  }
}

async function checkHubSpot(token, ownerId) {
  const trimmed = String(token || '').trim();
  if (!trimmed) {
    return { ok: false, configured: false, error: 'missing_env', missing: ['HUBSPOT_PRIVATE_APP_TOKEN'] };
  }

  const meta = {
    tokenLength: trimmed.length,
    tokenPrefix: trimmed.slice(0, 7),
    looksLikePrivateAppToken: /^pat-[a-z]{2}\d-/i.test(trimmed),
  };

  try {
    const tokenInfo = await fetch('https://api.hubapi.com/oauth/v2/private-apps/get/access-token-info', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${trimmed}`,
      },
      body: JSON.stringify({ tokenKey: trimmed }),
    });
    const tokenBody = await tokenInfo.text();
    let parsed = {};
    try {
      parsed = JSON.parse(tokenBody);
    } catch (_error) {}

    const search = await fetch('https://api.hubapi.com/crm/v3/objects/contacts/search', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${trimmed}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filterGroups: [{ filters: [{ propertyName: 'email', operator: 'HAS_PROPERTY' }] }],
        properties: ['email'],
        limit: 1,
      }),
    });
    const searchBody = await search.text();
    if (!search.ok) {
      return {
        ok: false,
        configured: true,
        status: search.status,
        error: safeError(searchBody),
        step: 'contacts-search',
        meta,
        tokenInfo: tokenInfo.ok
          ? { hubId: parsed.hub_id, scopes: parsed.scopes, userId: parsed.user_id }
          : { accessTokenInfoError: safeError(tokenBody) },
      };
    }

    const createProbe = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${trimmed}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties: {
          email: `healthcheck.${Date.now()}@appsdelsur-test.cl`,
          firstname: 'Health',
          lastname: 'Check',
          company: 'Apps del Sur Healthcheck',
          ...(ownerId && /^\d+$/.test(String(ownerId).trim()) ? { hubspot_owner_id: String(ownerId).trim() } : {}),
        },
      }),
    });
    const createBody = await createProbe.text();
    if (!createProbe.ok) {
      return {
        ok: false,
        configured: true,
        status: createProbe.status,
        error: safeError(createBody),
        step: 'contacts-create',
        meta,
        tokenInfo: tokenInfo.ok
          ? { hubId: parsed.hub_id, scopes: parsed.scopes, userId: parsed.user_id }
          : undefined,
        ownerIdConfigured: Boolean(ownerId),
        ownerIdLooksNumeric: ownerId ? /^\d+$/.test(String(ownerId).trim()) : false,
      };
    }

    let created = {};
    try {
      created = JSON.parse(createBody);
    } catch (_error) {}

    return {
      ok: true,
      configured: true,
      status: createProbe.status,
      step: 'contacts-create',
      meta,
      tokenInfo: tokenInfo.ok
        ? { hubId: parsed.hub_id, scopes: parsed.scopes, userId: parsed.user_id }
        : undefined,
      probeContactId: created.id || null,
      ownerIdConfigured: Boolean(ownerId),
      ownerIdLooksNumeric: ownerId ? /^\d+$/.test(String(ownerId).trim()) : false,
    };
  } catch (error) {
    return { ok: false, configured: true, error: error.message, meta };
  }
}

function safeError(body) {
  try {
    const parsed = JSON.parse(body);
    return parsed.message || parsed.error?.message || parsed.status || body.slice(0, 240);
  } catch (_error) {
    return String(body || '').slice(0, 240);
  }
}

function sendJson(res, statusCode, body) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}
