const DEFAULT_NOTIFY_EMAIL = 'dramirez.gysactiva@gmail.com';
const DEFAULT_TABLE_NAME = 'Assessment Leads';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return sendJson(res, 405, { ok: false, error: 'method_not_allowed' });
  }

  try {
    const payload = await readJson(req);
    const lead = normalizePayload(payload);
    const config = readConfig(req);

    if (!lead.email || !lead.nombre || !lead.empresa) {
      return sendJson(res, 400, { ok: false, error: 'missing_required_fields' });
    }

    let airtable = { configured: Boolean(config.airtableKey && config.airtableBaseId), recordId: null, reportUrl: null };
    let hubspot = { configured: Boolean(config.hubspotToken), contactId: null, companyId: null, dealId: null };
    const warnings = [];

    if (airtable.configured) {
      try {
        airtable = await createAirtableRecord(config, lead);
      } catch (error) {
        console.error('airtable sync failed', error);
        warnings.push('airtable_sync_failed');
      }
    } else {
      warnings.push('airtable_not_configured');
    }

    if (hubspot.configured) {
      try {
        hubspot = await syncHubSpot(config, lead, airtable.reportUrl);
        if (airtable.configured && airtable.recordId) {
          await updateAirtableRecord(config, airtable.recordId, {
            'HubSpot Contact ID': hubspot.contactId || '',
            'HubSpot Company ID': hubspot.companyId || '',
            'HubSpot Deal ID': hubspot.dealId || '',
            'Estado CRM': 'Sincronizado',
          });
        }
      } catch (error) {
        console.error('hubspot sync failed', error);
        warnings.push('hubspot_sync_failed');
      }
    } else {
      warnings.push('hubspot_not_configured');
    }

    const email = await sendNotification(config, lead, airtable.reportUrl);
    if (!email.sent && !email.skipped) warnings.push('email_notification_failed');

    return sendJson(res, 200, {
      ok: true,
      airtableRecordId: airtable.recordId,
      reportUrl: airtable.reportUrl,
      hubspotContactId: hubspot.contactId,
      hubspotCompanyId: hubspot.companyId,
      hubspotDealId: hubspot.dealId,
      emailSent: email.sent,
      warnings,
    });
  } catch (error) {
    console.error('assessment-submit failed', error);
    return sendJson(res, 500, { ok: false, error: 'assessment_submit_failed' });
  }
}

function normalizeEnv(value) {
  return String(value || '').trim().replace(/^['"]|['"]$/g, '');
}

function readConfig(req) {
  const siteUrl = process.env.PUBLIC_SITE_URL || getOrigin(req);
  return {
    siteUrl: siteUrl.replace(/\/$/, ''),
    notifyEmail: normalizeEnv(process.env.ASSESSMENT_NOTIFY_EMAIL) || DEFAULT_NOTIFY_EMAIL,
    airtableKey: normalizeEnv(process.env.AIRTABLE_API_KEY),
    airtableBaseId: normalizeEnv(process.env.AIRTABLE_BASE_ID),
    airtableTable: normalizeEnv(process.env.AIRTABLE_ASSESSMENT_TABLE) || DEFAULT_TABLE_NAME,
    hubspotToken: normalizeEnv(process.env.HUBSPOT_PRIVATE_APP_TOKEN),
    hubspotOwnerId: normalizeEnv(process.env.HUBSPOT_OWNER_ID),
    hubspotDealPipeline: process.env.HUBSPOT_DEAL_PIPELINE,
    hubspotDealStage: process.env.HUBSPOT_DEAL_STAGE,
  };
}

function getOrigin(req) {
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers.host || 'appsdelsur.cl';
  return `${proto}://${host}`;
}

async function readJson(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString('utf8');
  return raw ? JSON.parse(raw) : {};
}

function normalizePayload(payload) {
  const fields = payload.fields || payload;
  const answersJson = fields['Respuestas Detalladas'] || fields.answersDetail || '[]';
  let answers = [];
  try { answers = JSON.parse(answersJson); } catch (_error) {}

  return {
    leadId: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    submittedAt: new Date().toISOString(),
    nombre: clean(fields.Nombre || fields.name),
    email: clean(fields.Email || fields.email).toLowerCase(),
    empresa: clean(fields.Empresa || fields.company),
    telefono: clean(fields.Telefono || fields.phone),
    sector: clean(fields.Sector || fields.sector),
    tamano: clean(fields.Tamano || fields.size),
    region: clean(fields.Region || fields.region),
    fuente: clean(fields.Fuente || fields.source || 'diagnostico-madurez-ia'),
    etapaGlobal: clean(fields['Etapa Global']),
    puntajePromedio: clean(fields['Puntaje Promedio']),
    puntajeNormalizado: clean(fields['Puntaje Normalizado']),
    fortaleza: clean(fields.Fortaleza),
    prioridad: clean(fields.Prioridad),
    brechaInterna: clean(fields['Brecha Interna']),
    resumen: clean(fields['Resumen del Diagnostico']),
    answers,
    rawFields: fields,
  };
}

function clean(value) {
  return String(value || '').trim().slice(0, 15000);
}

function splitName(fullName) {
  const parts = fullName.split(/\s+/).filter(Boolean);
  return {
    firstname: parts.slice(0, 1).join(' '),
    lastname: parts.slice(1).join(' '),
  };
}

async function createAirtableRecord(config, lead) {
  const fields = airtableFields(lead, '');
  const created = await airtableRequest(config, 'POST', '', {
    records: [{ fields }],
    typecast: true,
  });

  const recordId = created.records?.[0]?.id;
  const reportUrl = recordId ? `${config.siteUrl}/api/assessment-report?id=${encodeURIComponent(recordId)}` : '';

  if (recordId && reportUrl) {
    await updateAirtableRecord(config, recordId, { 'Reporte URL': reportUrl });
  }

  return { configured: true, recordId, reportUrl };
}

async function updateAirtableRecord(config, recordId, fields) {
  await airtableRequest(config, 'PATCH', '', {
    records: [{ id: recordId, fields }],
    typecast: true,
  });
}

function airtableFields(lead, reportUrl) {
  return {
    'Lead ID': lead.leadId,
    'Fecha': lead.submittedAt,
    'Nombre': lead.nombre,
    'Email': lead.email,
    'Empresa': lead.empresa,
    'Telefono': lead.telefono,
    'Sector': lead.sector,
    'Tamano': lead.tamano,
    'Region': lead.region,
    'Fuente': lead.fuente,
    'Etapa Global': lead.etapaGlobal,
    'Puntaje Promedio': Number.parseFloat(lead.puntajePromedio) || null,
    'Puntaje Normalizado': lead.puntajeNormalizado,
    'Fortaleza': lead.fortaleza,
    'Prioridad': lead.prioridad,
    'Brecha Interna': Number.parseFloat(lead.brechaInterna) || null,
    'Reporte URL': reportUrl,
    'Respuestas JSON': JSON.stringify(lead.answers),
    'Resumen': lead.resumen,
    'Estado CRM': 'Nuevo',
    'Estrategia y liderazgo': clean(lead.rawFields['Etapa Estrategia y liderazgo']),
    'Personas y cultura': clean(lead.rawFields['Etapa Personas y cultura']),
    'Procesos y operación': clean(lead.rawFields['Etapa Procesos y operación']),
    'Datos y gobernanza': clean(lead.rawFields['Etapa Datos y gobernanza']),
    'Tecnología e integración': clean(lead.rawFields['Etapa Tecnología e integración']),
  };
}

async function airtableRequest(config, method, path, body) {
  const table = encodeURIComponent(config.airtableTable);
  const url = `https://api.airtable.com/v0/${config.airtableBaseId}/${table}${path}`;
  const response = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${config.airtableKey}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Airtable ${response.status}: ${text}`);
  }
  return response.json();
}

async function syncHubSpot(config, lead, reportUrl) {
  const name = splitName(lead.nombre);
  const contactId = await upsertHubSpotContact(config, lead, name);
  const companyId = await upsertHubSpotCompany(config, lead);
  const dealId = await maybeCreateHubSpotDeal(config, lead, reportUrl);
  return { configured: true, contactId, companyId, dealId };
}

async function upsertHubSpotContact(config, lead, name) {
  const existing = await hubspotSearch(config, 'contacts', 'email', lead.email, ['email']);
  const properties = {
    email: lead.email,
    firstname: name.firstname,
    lastname: name.lastname,
    phone: lead.telefono,
    company: lead.empresa,
  };
  if (config.hubspotOwnerId) properties.hubspot_owner_id = config.hubspotOwnerId;

  if (existing) {
    await hubspotRequest(config, 'PATCH', `/crm/v3/objects/contacts/${existing.id}`, { properties });
    return existing.id;
  }
  const created = await hubspotRequest(config, 'POST', '/crm/v3/objects/contacts', { properties });
  return created.id;
}

async function upsertHubSpotCompany(config, lead) {
  if (!lead.empresa) return null;
  const existing = await hubspotSearch(config, 'companies', 'name', lead.empresa, ['name']);
  const properties = {
    name: lead.empresa,
    phone: lead.telefono,
  };
  if (config.hubspotOwnerId) properties.hubspot_owner_id = config.hubspotOwnerId;

  if (existing) {
    await hubspotRequest(config, 'PATCH', `/crm/v3/objects/companies/${existing.id}`, { properties });
    return existing.id;
  }
  const created = await hubspotRequest(config, 'POST', '/crm/v3/objects/companies', { properties });
  return created.id;
}

async function maybeCreateHubSpotDeal(config, lead, reportUrl) {
  if (!config.hubspotDealPipeline || !config.hubspotDealStage) return null;
  const properties = {
    dealname: `Diagnóstico IA - ${lead.empresa}`,
    pipeline: config.hubspotDealPipeline,
    dealstage: config.hubspotDealStage,
    description: [
      `Lead magnet: Diagnóstico Madurez IA`,
      `Etapa: ${lead.etapaGlobal}`,
      `Puntaje: ${lead.puntajeNormalizado}`,
      `Prioridad: ${lead.prioridad}`,
      reportUrl ? `Reporte: ${reportUrl}` : '',
    ].filter(Boolean).join('\n'),
  };
  if (config.hubspotOwnerId) properties.hubspot_owner_id = config.hubspotOwnerId;
  const created = await hubspotRequest(config, 'POST', '/crm/v3/objects/deals', { properties });
  return created.id;
}

async function hubspotSearch(config, objectType, propertyName, value, properties) {
  const result = await hubspotRequest(config, 'POST', `/crm/v3/objects/${objectType}/search`, {
    filterGroups: [{ filters: [{ propertyName, operator: 'EQ', value }] }],
    properties,
    limit: 1,
  });
  return result.results?.[0] || null;
}

async function hubspotRequest(config, method, path, body) {
  const response = await fetch(`https://api.hubapi.com${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${config.hubspotToken}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`HubSpot ${response.status}: ${text}`);
  }
  return response.json();
}

async function sendNotification(_config, _lead, _reportUrl) {
  // FormSubmit validates browser-origin requests and rejects server-side calls from Vercel.
  // Email alerts are sent from the browser after a successful CRM sync in diagnostico-app.js.
  return { sent: false, skipped: true, reason: 'formsubmit_requires_browser' };
}

function sendJson(res, statusCode, body) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(body));
}
