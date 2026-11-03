// Genera las imágenes del clúster Ley 21.719. Las cifras y el estado de la prórroga
// viven aquí: si la Cámara vota o cambia la UTM, editar `datos` y volver a correr.
// Uso: node scripts/blog-images/ley-21719.mjs [parte-del-nombre]
import { chromium } from '@playwright/test';
import { resolve } from 'node:path';

const datos = {
  fechaEstado: '3 de noviembre de 2026',
  utm: 72440,
  mesUtm: 'noviembre de 2026',
};

const WIDTH = 1200;
const HEIGHT = 800;
const SCALE = 1.5;
const OUT = resolve('public/blog');

const millones = (utm) => Math.round((utm * datos.utm) / 1e6).toLocaleString('es-CL');

const pie = (texto) => `<footer><span>${texto}</span><b>appsdelsur.cl</b></footer>`;

const paginas = {
  'ley-21719-vigencia-linea-de-tiempo': `
    <h1>¿Cuándo entra en vigencia la Ley 21.719?</h1>
    <div class="timeline">
      <div class="hito"><i></i><div><small>13 dic 2024</small><strong>Publicación de la ley</strong></div></div>
      <div class="hito"><i></i><div><small>28 oct 2026</small><strong>Senado aprueba prórroga, 33 a 6</strong></div></div>
      <div class="hito vigente"><i></i><div><small>1 dic 2026</small><strong>Fecha vigente hoy</strong></div></div>
      <div class="hito propuesta"><i></i><div><small>15 oct 2027</small><strong>Propuesta, aún sin ser ley</strong></div></div>
    </div>
    ${pie(`Estado al ${datos.fechaEstado}`)}`,

  'ley-21719-vigencia-tramite-prorroga': `
    <h1>Qué falta para que la prórroga sea ley</h1>
    <div class="pasos">
      <div class="paso listo"><i>✓</i><div><strong>Senado</strong><span>Aprobada el 28 de octubre</span></div></div>
      <div class="paso actual"><i>2</i><div><strong>Cámara de Diputadas y Diputados</strong><span>Pendiente</span></div></div>
      <div class="paso"><i>3</i><div><strong>Tercer trámite o comisión mixta</strong><span>Solo si la Cámara cambia el texto</span></div></div>
      <div class="paso"><i>4</i><div><strong>Publicación en el Diario Oficial</strong><span>Recién aquí cambia la fecha</span></div></div>
    </div>
    ${pie(`Boletín 18.623-07 · Estado al ${datos.fechaEstado}`)}`,

  'ley-21719-multas-topes': `
    <h1>Multas máximas de la Ley 21.719</h1>
    <div class="barras">
      <div class="barra"><div class="tag"><strong>Leves</strong><span>5.000 UTM</span></div><div class="pista"><b style="width:25%"></b></div><em>$${millones(5000)} millones</em></div>
      <div class="barra"><div class="tag"><strong>Graves</strong><span>10.000 UTM</span></div><div class="pista"><b style="width:50%"></b></div><em>$${millones(10000)} millones</em></div>
      <div class="barra"><div class="tag"><strong>Gravísimas</strong><span>20.000 UTM</span></div><div class="pista"><b style="width:100%"></b></div><em>$${millones(20000)} millones</em></div>
    </div>
    <p class="nota">Son topes, no montos fijos. La Agencia los gradúa según la ley</p>
    ${pie(`Art. 35 · UTM de ${datos.mesUtm}: $${datos.utm.toLocaleString('es-CL')}`)}`,

  'ley-21719-multas-que-mueve-el-monto': `
    <h1>Qué mueve el monto de una multa</h1>
    <div class="columnas">
      <section class="baja"><h2>La baja</h2><ul>
        <li>Reparar el daño</li><li>Colaborar en la investigación</li><li>Sin sanciones previas</li><li>Autodenuncia</li><li>Modelo de prevención certificado</li>
      </ul></section>
      <section class="sube"><h2>La sube</h2><ul>
        <li>Reincidencia: hasta 3 veces</li><li>Infracción continuada</li><li>Riesgo para las personas</li><li>+50% si no corriges en 60 días</li><li>Datos sensibles o de menores</li>
      </ul></section>
    </div>
    ${pie('Ley 21.719, artículos 35, 36 y 37')}`,

  'ley-21719-politica-12-puntos': `
    <h1>Los 12 puntos que debes publicar</h1>
    <ol class="doce">
      <li><b>a</b>Política, fecha y versión</li><li><b>g</b>Derecho a recurrir a la Agencia</li>
      <li><b>b</b>Responsable y representante</li><li><b>h</b>Transferencias a otros países</li>
      <li><b>c</b>Canal de contacto</li><li><b>i</b>Plazo de conservación</li>
      <li><b>d</b>Datos, fines y base legal</li><li><b>j</b>Origen de los datos</li>
      <li><b>e</b>Medidas de seguridad</li><li><b>k</b>Retiro del consentimiento</li>
      <li><b>f</b>Derechos del titular</li><li><b>l</b>Decisiones automatizadas</li>
    </ol>
    ${pie('Ley 21.719, artículo 14 ter')}`,

  'ley-21719-politica-donde-va': `
    <h1>Dónde va cada cosa</h1>
    <div class="capas">
      <div class="capa"><i>1</i><div><strong>Aviso breve</strong><span>Junto a cada formulario: quién, para qué y enlace</span></div></div>
      <div class="capa"><i>2</i><div><strong>Política completa</strong><span>Enlazada en todo el sitio, con los 12 puntos</span></div></div>
      <div class="capa"><i>3</i><div><strong>Canal de solicitudes</strong><span>Respuesta en 30 días corridos</span></div></div>
    </div>
    <p class="nota">Las capas son una recomendación. Los 12 puntos y el plazo los fija la ley</p>
    ${pie('Ley 21.719, artículos 11 y 14 ter')}`,

  'ley-21719-guia-pymes-panorama': `
    <h1>Qué pide la Ley 21.719 a tu empresa</h1>
    <ol class="seis">
      <li><strong>Informar</strong><span>Art. 14 ter</span></li>
      <li><strong>Tener base legal</strong><span>Arts. 12 y 13</span></li>
      <li><strong>Responder en 30 días</strong><span>Art. 11</span></li>
      <li><strong>Proteger los datos</strong><span>Art. 14 quinquies</span></li>
      <li><strong>Reportar vulneraciones</strong><span>Art. 14 sexies</span></li>
      <li><strong>Contratos con encargados</strong><span>Art. 15 bis</span></li>
    </ol>
    ${pie('Fecha vigente: 1 de diciembre de 2026')}`,

  'ley-21719-ia-flujo-responsabilidad': `
    <h1>Si usas IA, tu empresa sigue respondiendo</h1>
    <div class="capas">
      <div class="capa"><i>1</i><div><strong>Tu empresa: responsable</strong><span>Base legal e información a las personas</span></div></div>
      <div class="capa"><i>2</i><div><strong>Proveedor de IA: suele ser encargado</strong><span>Contrato del art. 15 bis</span></div></div>
      <div class="capa"><i>3</i><div><strong>Datos fuera de Chile</strong><span>Respaldo legal del art. 27</span></div></div>
    </div>
    ${pie('Decisiones automatizadas: art. 8° bis')}`,

  'ley-21719-datos-sensibles-categorias': `
    <h1>Qué datos son sensibles</h1>
    <ul class="sensibles">
      <li>Origen étnico o racial</li><li>Salud</li>
      <li>Afiliación política, sindical o gremial</li><li>Perfil biológico humano</li>
      <li>Situación socioeconómica</li><li>Datos biométricos</li>
      <li>Convicciones ideológicas o filosóficas</li><li>Vida sexual</li>
      <li>Creencias religiosas</li><li>Orientación sexual e identidad de género</li>
    </ul>
    <p class="nota">Geolocalización y menores no están en esta lista: tienen reglas propias</p>
    ${pie('Ley 21.719, artículo 2°, letra g)')}`,

  'ley-21719-excel-planilla-ordenada': `
    <h1>Tu Excel puede seguir, con orden</h1>
    <div class="hoja" role="img">
      <div class="fila cab"><span>Dato</span><span>Para qué</span><span>Origen</span><span>Hasta cuándo</span></div>
      <div class="fila"><span>Teléfono</span><span>Despacho</span><span>Compra</span><span>Fin garantía</span></div>
      <div class="fila"><span>Correo</span><span>Boleta</span><span>Compra</span><span>Plazo legal</span></div>
      <div class="fila"><span>Correo</span><span>Promociones</span><span>Formulario</span><span>Hasta su baja</span></div>
    </div>
    <p class="nota">La ley no prohíbe Excel. Importa cómo tratas los datos</p>
    ${pie('Ejemplo ilustrativo. Plazos según tu caso')}`,

  'ley-21719-excel-cinco-riesgos': `
    <h1>Lo que te complica de la planilla</h1>
    <ol class="seis">
      <li><strong>Copias sueltas</strong><span>No borras en todas</span></li>
      <li><strong>Acceso abierto</strong><span>Ex trabajadores o enlaces</span></li>
      <li><strong>Columnas de más</strong><span>Datos que no necesitas</span></li>
      <li><strong>Sin fecha de salida</strong><span>Datos que nunca se van</span></li>
      <li><strong>Sin origen</strong><span>Nadie sabe de dónde salió</span></li>
      <li><strong>Sin dueño</strong><span>Nadie responde solicitudes</span></li>
    </ol>
    ${pie('Ley 21.719, artículos 3°, 7°, 11 y 14 quinquies')}`,

  'ley-21719-crm-que-revisar': `
    <h1>Qué revisar en tu CRM</h1>
    <ol class="seis">
      <li><strong>De dónde salió</strong><span>Listas e importaciones</span></li>
      <li><strong>Qué guardas</strong><span>Campos y notas libres</span></li>
      <li><strong>Para qué lo usas</strong><span>Ventas, marketing, perfiles</span></li>
      <li><strong>Quién entra</strong><span>Usuarios e integraciones</span></li>
      <li><strong>Dónde está</strong><span>Proveedor y país</span></li>
      <li><strong>Cuándo sale</strong><span>Bajas y contactos antiguos</span></li>
    </ol>
    ${pie('Tener CRM no equivale a cumplir la Ley 21.719')}`,

  'ley-21719-crm-ciclo-contacto': `
    <h1>La vida de un contacto en tu CRM</h1>
    <div class="pasos">
      <div class="paso"><i>1</i><div><strong>Entra</strong><span>¿Fuente lícita y base legal? Arts. 12, 13 y 14</span></div></div>
      <div class="paso"><i>2</i><div><strong>Se usa</strong><span>¿Es el mismo fin que informaste? Art. 3°</span></div></div>
      <div class="paso"><i>3</i><div><strong>Se comparte</strong><span>¿Hay contrato o cesión válida? Arts. 15 y 15 bis</span></div></div>
      <div class="paso"><i>4</i><div><strong>Sale</strong><span>¿Atiendes bajas y plazos? Arts. 3°, 7° y 8°</span></div></div>
    </div>
    ${pie('Ley 21.719')}`,

  'ley-21719-delegado-decision': `
    <h1>¿Necesitas delegado de datos?</h1>
    <div class="pregunta">¿Vas a adoptar un modelo de prevención de infracciones?</div>
    <div class="ramas">
      <section class="si"><h2>Sí</h2><strong>Es requisito</strong><span>Art. 49. En pymes, puede ser el dueño</span></section>
      <section class="no"><h2>No</h2><strong>Es voluntario</strong><span>Art. 50. Igual debes atender solicitudes</span></section>
    </div>
    ${pie('Ley 21.719, artículos 49 y 50')}`,
};

const css = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  :root { --ink:#1e2b25; --muted:#5e6d64; --rule:#d5ded8; --brand:#047857; --deep:#065f46; --tint:#ecf5f0; --ambar:#b45309; --ambar-t:#fdf3e4; }
  body { width:${WIDTH}px; height:${HEIGHT}px; padding:56px 64px 104px; background:#fff; color:var(--ink); font-family:'Source Sans 3',ui-sans-serif,system-ui,sans-serif; position:relative; overflow:hidden; }
  body::before { content:''; position:absolute; inset:0 0 auto 0; height:14px; background:var(--brand); }
  h1 { font-family:'Source Serif 4',Georgia,serif; font-size:62px; line-height:1.06; font-weight:600; letter-spacing:-.01em; margin-bottom:40px; }
  footer { position:absolute; left:64px; right:64px; bottom:36px; display:flex; justify-content:space-between; font-size:29px; color:var(--muted); border-top:2px solid var(--rule); padding-top:16px; }
  footer b { color:var(--deep); font-weight:700; }
  .nota { font-size:32px; color:var(--muted); margin-top:26px; line-height:1.15; }

  .timeline { display:grid; gap:24px; position:relative; }
  .timeline::before { content:''; position:absolute; left:21px; top:30px; bottom:40px; width:6px; background:var(--rule); }
  .hito { display:flex; align-items:center; gap:30px; position:relative; }
  .hito i { width:48px; height:48px; border-radius:50%; background:#fff; border:9px solid #9db0a6; flex:none; }
  .hito small { font-size:32px; color:var(--muted); display:block; font-weight:600; }
  .hito strong { font-size:44px; font-weight:600; line-height:1.12; }
  .hito.vigente i { background:var(--brand); border-color:var(--brand); }
  .hito.vigente strong, .hito.vigente small { color:var(--deep); font-weight:700; }
  .hito.propuesta i { border-color:var(--ambar); border-style:dashed; }
  .hito.propuesta small { color:var(--ambar); }

  .pasos, .capas { display:grid; gap:14px; }
  .pasos { margin-top:-10px; }
  .paso, .capa { display:flex; align-items:center; gap:26px; padding:15px 26px; border:2px solid var(--rule); border-radius:8px; }
  .paso i, .capa i { width:60px; height:60px; border-radius:50%; flex:none; display:grid; place-items:center; font-style:normal; font-size:34px; font-weight:700; background:#eef1ef; color:var(--muted); }
  .paso strong, .capa strong { display:block; font-size:40px; line-height:1.1; font-weight:700; }
  .paso span, .capa span { font-size:33px; color:var(--muted); line-height:1.15; }
  .paso.listo { background:var(--tint); border-color:var(--brand); }
  .paso.listo i { background:var(--brand); color:#fff; }
  .paso.actual { background:var(--ambar-t); border-color:var(--ambar); }
  .paso.actual i { background:var(--ambar); color:#fff; }
  .paso.actual span { color:var(--ambar); font-weight:600; }
  .capa { padding:24px 28px; }
  .capa i { background:var(--brand); color:#fff; }

  .barras { display:grid; gap:26px; }
  .barra { display:grid; grid-template-columns:1fr auto; gap:6px 24px; align-items:baseline; }
  .barra .tag { display:flex; gap:18px; align-items:baseline; }
  .barra strong { font-size:44px; font-weight:700; }
  .barra span { font-size:34px; color:var(--muted); }
  .barra em { grid-column:2; grid-row:1; font-style:normal; font-size:44px; font-weight:700; color:var(--deep); }
  .pista { grid-column:1 / -1; height:38px; background:#eef1ef; border-radius:4px; overflow:hidden; }
  .pista b { display:block; height:100%; background:var(--brand); }

  .columnas, .ramas { display:grid; grid-template-columns:1fr 1fr; gap:26px; }
  .columnas section { padding:26px 30px; border-radius:8px; }
  .columnas h2, .ramas h2 { font-family:'Source Serif 4',Georgia,serif; font-size:50px; font-weight:600; margin-bottom:14px; }
  .columnas ul { list-style:none; display:grid; gap:12px; }
  .columnas li { font-size:34px; line-height:1.13; }
  .baja { background:var(--tint); } .baja h2 { color:var(--deep); }
  .sube { background:var(--ambar-t); } .sube h2 { color:var(--ambar); }

  .doce { list-style:none; display:grid; grid-template-columns:1fr 1fr; gap:15px 26px; }
  .doce li { display:flex; align-items:center; gap:16px; font-size:32px; line-height:1.08; font-weight:500; min-height:70px; }
  .doce b { width:52px; height:52px; flex:none; border-radius:6px; background:var(--brand); color:#fff; display:grid; place-items:center; font-size:32px; }

  .seis { list-style:none; display:grid; grid-template-columns:1fr 1fr; gap:20px; counter-reset:n; }
  .seis li { padding:20px 24px; background:var(--tint); border-radius:8px; }
  .seis strong { display:block; font-size:40px; line-height:1.08; font-weight:700; color:var(--deep); }
  .seis span { display:block; font-size:31px; color:var(--muted); margin-top:6px; }
  .sensibles { list-style:none; display:grid; grid-template-columns:1fr 1fr; gap:16px 30px; }
  .sensibles li { font-size:33px; line-height:1.08; font-weight:500; padding-left:22px; border-left:7px solid var(--brand); min-height:60px; display:flex; align-items:center; }
  .hoja { border:3px solid var(--deep); border-radius:6px; overflow:hidden; }
  .fila { display:grid; grid-template-columns:.8fr 1.05fr .85fr 1.1fr; font-size:32px; }
  .fila span { padding:20px 16px; border-right:2px solid var(--rule); border-top:2px solid var(--rule); white-space:nowrap; }
  .fila span:last-child { border-right:0; }
  .fila.cab { background:var(--deep); color:#fff; font-weight:700; }
  .fila.cab span { border-color:transparent; }
  .pregunta { font-size:44px; line-height:1.15; font-weight:600; background:var(--tint); padding:24px 30px; border-radius:8px; margin-bottom:26px; }
  .ramas section { padding:24px 30px; border:3px solid var(--rule); border-radius:8px; }
  .ramas strong { display:block; font-size:46px; font-weight:700; line-height:1.1; margin-bottom:10px; }
  .ramas span { font-size:33px; line-height:1.17; color:var(--muted); display:block; }
  .si { border-color:var(--brand) !important; } .si h2, .si strong { color:var(--deep); }
  .no h2 { color:var(--muted); }
`;

const filtro = process.argv[2];
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: WIDTH, height: HEIGHT }, deviceScaleFactor: SCALE });
for (const [nombre, cuerpo] of Object.entries(paginas)) {
  if (filtro && !nombre.includes(filtro)) continue;
  await page.setContent(
    `<!doctype html><html lang="es"><head><meta charset="utf-8">
     <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,600&display=swap" rel="stylesheet">
     <style>${css}</style></head><body>${cuerpo}</body></html>`,
    { waitUntil: 'networkidle' },
  );
  await page.evaluate(() => document.fonts.ready);
  const desborde = await page.evaluate(() => {
    const limite = document.querySelector('footer').getBoundingClientRect().top;
    const fuera = [...document.body.querySelectorAll('*')].filter((el) => {
      if (el.closest('footer')) return false;
      const r = el.getBoundingClientRect();
      return r.bottom > limite + 1 || r.right > innerWidth - 40;
    });
    return fuera.map((el) => el.textContent.trim().slice(0, 50));
  });
  await page.screenshot({ path: `${OUT}/${nombre}.png` });
  if (desborde.length) throw new Error(`${nombre}: contenido desbordado: ${desborde.join(' | ')}`);
  console.log('OK', nombre);
}
await browser.close();
