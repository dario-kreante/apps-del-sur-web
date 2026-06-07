const DEFAULT_TABLE_NAME = 'Assessment Leads';

export default async function handler(req, res) {
  const id = new URL(req.url, 'https://appsdelsur.cl').searchParams.get('id');
  if (!id || !/^rec[a-zA-Z0-9]+$/.test(id)) {
    res.statusCode = 400;
    res.end('Reporte no encontrado');
    return;
  }

  const normalizeEnv = (value) => String(value || '').trim().replace(/^['"]|['"]$/g, '');
  const config = {
    airtableKey: normalizeEnv(process.env.AIRTABLE_API_KEY),
    airtableBaseId: normalizeEnv(process.env.AIRTABLE_BASE_ID),
    airtableTable: normalizeEnv(process.env.AIRTABLE_ASSESSMENT_TABLE) || DEFAULT_TABLE_NAME,
  };

  if (!config.airtableKey || !config.airtableBaseId) {
    res.statusCode = 503;
    res.end('Reporte no disponible: Airtable no esta configurado.');
    return;
  }

  try {
    const record = await fetchRecord(config, id);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(renderReport(record.fields || {}, id));
  } catch (error) {
    console.error('assessment-report failed', error);
    res.statusCode = 404;
    res.end('Reporte no encontrado');
  }
}

async function fetchRecord(config, id) {
  const table = encodeURIComponent(config.airtableTable);
  const response = await fetch(`https://api.airtable.com/v0/${config.airtableBaseId}/${table}/${id}`, {
    headers: { Authorization: `Bearer ${config.airtableKey}` },
  });
  if (!response.ok) throw new Error(`Airtable ${response.status}`);
  return response.json();
}

function renderReport(fields, id) {
  const answers = parseAnswers(fields['Respuestas JSON']);
  const rows = [
    ['Empresa', fields.Empresa],
    ['Contacto', fields.Nombre],
    ['Email', fields.Email],
    ['Sector', fields.Sector],
    ['Region', fields.Region],
    ['Etapa global', fields['Etapa Global']],
    ['Puntaje normalizado', fields['Puntaje Normalizado']],
    ['Fortaleza', fields.Fortaleza],
    ['Prioridad', fields.Prioridad],
  ];
  return `<!doctype html>
<html lang="es-CL">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Reporte Diagnóstico IA - ${esc(fields.Empresa || id)}</title>
  <style>
    body { font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; margin: 0; color: #111827; background: #f0fdf4; }
    main { max-width: 920px; margin: 0 auto; padding: 40px 20px; }
    section { background: white; border: 1px solid #d1fae5; border-radius: 16px; padding: 24px; margin-top: 18px; }
    h1 { color: #064e3b; font-size: clamp(28px, 5vw, 44px); line-height: 1; margin: 0 0 10px; }
    h2 { color: #065f46; font-size: 18px; margin: 0 0 14px; }
    table { border-collapse: collapse; width: 100%; }
    td, th { border-bottom: 1px solid #e5e7eb; padding: 10px 8px; text-align: left; vertical-align: top; }
    th { color: #047857; width: 210px; }
    .grid { display: grid; gap: 12px; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }
    .metric { background: #ecfdf5; border-radius: 12px; padding: 14px; }
    .metric span { color: #047857; display: block; font-size: 12px; font-weight: 800; text-transform: uppercase; }
    .metric strong { display: block; font-size: 20px; margin-top: 4px; }
    .answer { border-bottom: 1px solid #e5e7eb; padding: 12px 0; }
    .answer:last-child { border-bottom: 0; }
    .muted { color: #6b7280; }
    @media print { body { background: white; } main { padding: 0; } section { break-inside: avoid; } }
  </style>
</head>
<body>
  <main>
    <p class="muted">Apps del Sur - Diagnóstico de madurez en IA</p>
    <h1>Reporte automático</h1>
    <p class="muted">ID Airtable: ${esc(id)}</p>
    <section>
      <div class="grid">
        <div class="metric"><span>Etapa global</span><strong>${esc(fields['Etapa Global'] || '-')}</strong></div>
        <div class="metric"><span>Puntaje</span><strong>${esc(fields['Puntaje Normalizado'] || '-')}</strong></div>
        <div class="metric"><span>Prioridad</span><strong>${esc(fields.Prioridad || '-')}</strong></div>
      </div>
    </section>
    <section>
      <h2>Resumen del lead</h2>
      <table>${rows.map(([k, v]) => `<tr><th>${esc(k)}</th><td>${esc(v || '-')}</td></tr>`).join('')}</table>
    </section>
    <section>
      <h2>Resultado por dimensión</h2>
      <table>
        ${['Estrategia y liderazgo','Personas y cultura','Procesos y operación','Datos y gobernanza','Tecnología e integración']
          .map((field) => `<tr><th>${esc(field)}</th><td>${esc(fields[field] || '-')}</td></tr>`).join('')}
      </table>
    </section>
    <section>
      <h2>Respuestas</h2>
      ${answers.map((answer, index) => `<div class="answer"><strong>${index + 1}. ${esc(answer.dimension || answer.dim || '')}</strong><p>${esc(answer.question || '')}</p><p class="muted">Respuesta: ${esc(answer.stage || '-')} ${answer.stageName ? `- ${esc(answer.stageName)}` : ''}</p></div>`).join('') || '<p class="muted">Sin respuestas registradas.</p>'}
    </section>
  </main>
</body>
</html>`;
}

function parseAnswers(value) {
  try {
    return JSON.parse(value || '[]');
  } catch (_error) {
    return [];
  }
}

function esc(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
