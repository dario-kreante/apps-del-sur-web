/* Diagnóstico de Madurez Digital — Apps del Sur
   All UI content is from constants defined below. No external user input
   is ever inserted as HTML; form values use proper attribute escaping. */
(function() {
  'use strict';

  var STORAGE_KEY = 'apps-del-sur-madurez-digital-v1';
  var DIM_KEYS = ['estrategia', 'clientes', 'procesos', 'datos', 'herramientas'];
  var DEFAULT_SOURCE = 'diagnostico-madurez-digital';

  var DIM_LABELS = {
    estrategia: 'Estrategia y liderazgo digital',
    clientes: 'Clientes y ventas digitales',
    procesos: 'Procesos y operación',
    datos: 'Datos e información',
    herramientas: 'Herramientas y seguridad'
  };

  var STAGES = ['Papel y WhatsApp', 'Digital Básica', 'Digital Conectada', 'Digital Optimizada'];

  var QUESTIONS = [
    { dim: 'estrategia', q: 'Cuando algo se hace "a la antigua" en la empresa y alguien propone digitalizarlo, ¿qué pasa?', a: [
      'Se conversa, pero al final todo sigue igual porque "así ha funcionado siempre"',
      'Se hacen cambios puntuales cuando algo ya se volvió insostenible',
      'Hay una persona que empuja mejoras y logra concretar algunas al año',
      'Existe un plan: sabemos qué vamos a digitalizar este año, quién lo lidera y cuánto costará'
    ]},
    { dim: 'estrategia', q: '¿Cómo deciden si comprar o contratar una herramienta digital (app, sistema, página web)?', a: [
      'Casi no compramos herramientas digitales; nos arreglamos con lo que hay',
      'Por recomendación de un conocido o porque el proveedor insistió',
      'Comparamos 2 o 3 opciones y evaluamos precio versus lo que resuelve',
      'Calculamos cuánto tiempo o plata nos ahorra antes de decidir, y medimos después si se cumplió'
    ]},
    { dim: 'estrategia', q: '¿La empresa ha usado fondos públicos (SERCOTEC, CORFO, Kit Digital) para digitalizarse?', a: [
      'No sabíamos que existían fondos para esto',
      'Los conocemos, pero nunca hemos postulado — parece complicado',
      'Hemos postulado al menos una vez (con o sin éxito)',
      'Hemos usado fondos públicos y sabemos cuál corresponde a nuestro próximo paso'
    ]},
    { dim: 'estrategia', q: 'Si el dueño o administrador se enferma una semana, ¿qué pasa con la información del negocio?', a: [
      'Se complica todo: los números y contactos clave están en su cabeza o su teléfono',
      'Alguien más puede sacar adelante lo urgente, pero con llamadas y preguntas constantes',
      'La información principal está en sistemas o planillas que otros saben usar',
      'La operación sigue casi normal: la información vive en sistemas, no en personas'
    ]},
    { dim: 'clientes', q: 'Si un cliente nuevo busca tu empresa en Google, ¿qué encuentra?', a: [
      'Nada, o solo menciones sueltas (no tenemos presencia propia)',
      'Una página de Facebook o Instagram que actualizamos de vez en cuando',
      'Página web propia con información vigente de contacto y servicios',
      'Página web activa que genera consultas o ventas todos los meses'
    ]},
    { dim: 'clientes', q: '¿Cómo se hace una cotización o presupuesto para un cliente?', a: [
      'Se dice de palabra o se manda un mensaje de WhatsApp con el precio',
      'Alguien la arma a mano en Word o Excel cada vez, desde cero',
      'Usamos plantillas o un sistema que las genera con formato y numeración',
      'Se generan desde un sistema, quedan registradas y sabemos cuántas se convierten en venta'
    ]},
    { dim: 'clientes', q: 'Cuando un cliente escribe (WhatsApp, teléfono, correo), ¿cómo se maneja esa consulta?', a: [
      'La responde quien la vio, y si estaba ocupado, se puede perder',
      'Se responde casi siempre, pero no queda registro de qué se prometió',
      'Hay responsables definidos y las consultas importantes quedan anotadas en un sistema o planilla',
      'Toda consulta queda registrada, con seguimiento y tiempos de respuesta que medimos'
    ]},
    { dim: 'clientes', q: '¿Cómo pueden pagarte tus clientes?', a: [
      'Efectivo o transferencia que confirmamos mirando el banco',
      'Transferencia y tarjeta presencial (Redcompra / POS)',
      'Varias opciones (tarjeta, link de pago, transferencia) y cuadramos contra las ventas',
      'El pago queda amarrado automáticamente a la venta o factura, sin cuadraturas manuales'
    ]},
    { dim: 'procesos', q: 'El trabajo del día a día (ventas, terreno, servicios, producción), ¿dónde queda registrado?', a: [
      'En cuadernos, papeles o en la memoria del equipo',
      'En planillas Excel o notas del celular que alguien pasa en limpio después',
      'En un sistema o app donde se registra una sola vez',
      'En un sistema, y además nos avisa si falta algo o hay un error'
    ]},
    { dim: 'procesos', q: '¿Cuántas veces se escribe el mismo dato antes de llegar al contador o a la factura?', a: [
      'Varias: papel, luego planilla, luego otra planilla, luego contador',
      'Dos veces: se registra digital, pero después alguien lo vuelve a tipear en otro lado',
      'Una vez: el registro llega casi directo a facturación o contabilidad',
      'Cero retrabajo: los sistemas se pasan la información solos'
    ]},
    { dim: 'procesos', q: '¿Cómo se coordina el equipo para el trabajo de la semana?', a: [
      'De palabra o por grupos de WhatsApp que nadie ordena',
      'WhatsApp más alguna planilla o pizarra que se actualiza a mano',
      'Un calendario o sistema compartido donde todos ven tareas y responsables',
      'Un sistema que asigna, recuerda vencimientos y muestra qué está atrasado'
    ]},
    { dim: 'procesos', q: 'Si te preguntan cuánto costó un trabajo, servicio o cliente específico del mes pasado, ¿puedes saberlo?', a: [
      'No con precisión; se sabe "más o menos" o a fin de año con el contador',
      'Sí, pero tomaría días armar el número juntando papeles y planillas',
      'Sí, en menos de una hora, desde nuestras planillas o sistema',
      'Sí, al momento: el sistema muestra costos por trabajo o cliente actualizados'
    ]},
    { dim: 'datos', q: 'La información de tus clientes (contactos, historial, deudas), ¿dónde vive?', a: [
      'En el teléfono y la memoria de una o dos personas',
      'En una planilla que alguien mantiene cuando puede',
      'En una planilla compartida o sistema, con un responsable de mantenerla al día',
      'En un sistema que todo el equipo usa y que muestra el historial completo por cliente'
    ]},
    { dim: 'datos', q: 'Si se pierde o roban el computador (o teléfono) principal del negocio, ¿qué pierdes?', a: [
      'Muchísimo: archivos, contactos y números que no están en otra parte',
      'Algo se salva porque hay copias antiguas, pero perderíamos semanas de trabajo',
      'Poco: lo importante está en la nube (Drive, sistema) y se recupera',
      'Casi nada: todo está en la nube con respaldo automático y accesos por persona'
    ]},
    { dim: 'datos', q: 'Cuando necesitan un número para decidir (ventas del mes, deuda de clientes, stock), ¿qué pasa?', a: [
      'Se le pregunta a la persona que "sabe" y se confía en su respuesta',
      'Alguien lo arma en Excel y demora horas o días',
      'Se saca de un sistema o planilla confiable en minutos',
      'Está siempre disponible en un panel o reporte que se actualiza solo'
    ]},
    { dim: 'datos', q: 'Cuando dos fuentes muestran números distintos (la planilla dice una cosa y el banco otra), ¿qué pasa?', a: [
      'Pasa seguido y a veces nunca se sabe cuál era el correcto',
      'Se corrige a mano cuando alguien lo detecta',
      'Es poco frecuente: hay revisiones periódicas que lo detectan a tiempo',
      'Casi no ocurre: los sistemas están conectados y cuadran solos'
    ]},
    { dim: 'herramientas', q: '¿Cuáles son las herramientas principales con las que funciona el negocio hoy?', a: [
      'Teléfono, WhatsApp, papel y calculadora',
      'WhatsApp, Excel, correo y la factura electrónica del SII',
      'Sistemas digitales para las áreas principales (ventas, operación o inventario)',
      'Sistemas conectados entre sí que cubren casi toda la operación'
    ]},
    { dim: 'herramientas', q: '¿Tus herramientas digitales "conversan" entre sí?', a: [
      'No tenemos herramientas que conectar',
      'No: las personas copian la información de una a otra',
      'Algunas sí: las principales están conectadas o se traspasan con un clic',
      'Sí: la información fluye sola entre ventas, operación y contabilidad'
    ]},
    { dim: 'herramientas', q: '¿Quién puede entrar a la información del negocio y con qué claves?', a: [
      'Todos usan las mismas claves o las cuentas personales de alguien',
      'Hay claves distintas, pero anotadas en cualquier parte y nunca se cambian',
      'Cada persona tiene su acceso y se elimina cuando alguien se va',
      'Accesos por persona con permisos según rol, y revisamos quién tiene acceso a qué'
    ]},
    { dim: 'herramientas', q: 'Si mañana se corta internet en tu local u oficina, ¿qué pasa con la operación?', a: [
      'Nada cambia — casi todo es en papel (y eso es justamente el problema)',
      'Se complica: no podemos facturar ni responder, y no hay plan B',
      'Seguimos con el teléfono como respaldo y nos ponemos al día después',
      'Tenemos plan B definido (datos móviles, modo offline) y la operación casi no se detiene'
    ]}
  ];

  var MATRIX = {
    estrategia: ['Sin rumbo digital', 'Cambios reactivos', 'Responsable y plan anual', 'Digital en la estrategia'],
    clientes: ['Boca a boca y WhatsApp', 'Redes sociales básicas', 'Web + registro de clientes', 'Canales digitales que venden'],
    procesos: ['Papel y memoria', 'Excel y retrabajo', 'Registro único digital', 'Flujos automatizados'],
    datos: ['Datos en personas', 'Planillas dispersas', 'Fuente confiable en nube', 'Información en tiempo real'],
    herramientas: ['Teléfono y papel', 'Islas digitales', 'Sistemas conectados', 'Operación digital completa']
  };

  var RECS = {
    estrategia: {
      1: { now: 'La digitalización avanza solo cuando un problema explota. Así, cada peso invertido en tecnología es gasto reactivo, no mejora del negocio.', next: 'Anota los 3 dolores que más tiempo o plata cuestan al mes. Elige UNO y define qué te gustaría que pasara en 90 días. Kit Digital de SERCOTEC (~$1,2M, casi 100% subsidiado) puede financiar ese primer paso.' },
      2: { now: 'Hay voluntad de mejorar, pero sin responsable ni presupuesto los cambios dependen del entusiasmo del momento.', next: 'Nombra un responsable de digitalización (puede ser part-time) y fija un presupuesto anual aunque sea pequeño. Revisa SERCOTEC CRECE: financia hasta $5M con copago menor.' },
      3: { now: 'Existe liderazgo digital real: hay quien empuja, se evalúa antes de comprar y se han explorado fondos. Estás sobre el promedio de las pymes chilenas.', next: 'Formaliza un plan digital a 12 meses con máximo 3 iniciativas, cada una con métrica de éxito en pesos u horas. CORFO Digitalización cofinancia el salto.' },
      4: { now: 'Lo digital es parte de la estrategia y se decide con datos. El desafío ya no es digitalizar: es optimizar y prepararse para IA.', next: 'Documenta tus resultados (ahorros, tiempos): son la base para postular a fondos mayores (CORFO, FIA) y el insumo perfecto para el Diagnóstico de Madurez en IA.' }
    },
    clientes: {
      1: { now: 'Los clientes nuevos llegan solo por contactos y boca a boca. Cada consulta perdida en WhatsApp es una venta que nadie vio.', next: 'Parte simple: ficha de Google Business (gratis, 1 hora) para aparecer en búsquedas y mapas. Luego una página web básica con qué haces, dónde y cómo contactarte.' },
      2: { now: 'Hay presencia digital, pero el proceso comercial sigue siendo manual: cotizaciones desde cero, consultas sin registro, pagos que hay que cuadrar a mano.', next: 'Estandariza la cotización (plantilla con numeración) y registra cada consulta entrante en una planilla compartida: fecha, quién, qué pidió, en qué quedó. Con eso dejas de perder ventas por olvido.' },
      3: { now: 'El ciclo comercial está ordenado: los clientes te encuentran, las cotizaciones tienen formato y las consultas se registran. Lo que falta es medir y automatizar.', next: 'Mide 2 números al mes: cuántas cotizaciones envías y cuántas se cierran. Y automatiza el recordatorio de seguimiento — la mayoría de las ventas se pierde por no volver a escribir.' },
      4: { now: 'Tus canales digitales generan ventas y todo queda registrado. Este nivel comercial es exactamente donde un agente IA de atención o agendamiento rinde de inmediato.', next: 'Evalúa automatizar la primera respuesta por WhatsApp (calificación + agenda). Toma el Diagnóstico de Madurez en IA para dimensionarlo.' }
    },
    procesos: {
      1: { now: 'La operación vive en papel, chat y memoria. Cada traspaso manual agrega horas y errores, y nadie sabe el costo real de nada hasta fin de mes.', next: 'Elige UN proceso (el que más retrabajo genera) y digitalízalo completo: que se registre una sola vez, en el momento, desde el celular. No intentes digitalizar todo a la vez.' },
      2: { now: 'Hay registro digital, pero la doble digitación sigue: lo que se escribe en terreno o en ventas se vuelve a tipear después. Ese retrabajo es tu costo oculto más grande.', next: 'Identifica el traspaso manual más frecuente (planilla a factura, WhatsApp a Excel) y elimínalo conectando o reemplazando esas dos piezas. Suele ser el ROI más rápido de toda la digitalización.' },
      3: { now: 'El registro es único y el equipo se coordina con herramientas compartidas. La operación es visible: se puede saber qué pasó y cuánto costó sin arqueología de planillas.', next: 'Agrega alertas: que el sistema avise atrasos, faltantes o desviaciones de costo en vez de esperar a que alguien las descubra.' },
      4: { now: 'Los procesos están digitalizados de punta a punta con mínimo retrabajo. Tienes la materia prima que la IA necesita: procesos ordenados y datos al día.', next: 'Elige una tarea repetitiva con volumen semanal (clasificar, responder, resumir, cotizar) y pilotea su automatización con supervisión humana.' }
    },
    datos: {
      1: { now: 'La información crítica vive en personas, no en sistemas. Si alguien clave se va o pierde el teléfono, el negocio pierde memoria. Es el riesgo más silencioso de la etapa analógica.', next: 'Crea UNA fuente única en la nube (basta Google Drive y una planilla bien hecha) para el dato más crítico: clientes o costos. Define quién la mantiene.' },
      2: { now: 'Los datos existen pero están repartidos en planillas que no siempre calzan. El problema no es falta de información: es que no es confiable ni rápida de consultar.', next: 'Asigna un dueño a cada dato importante (clientes, ventas, inventario) y acuerda una regla simple: dónde se registra, quién corrige, cada cuánto se respalda.' },
      3: { now: 'Hay una fuente confiable y respaldada: las decisiones ya se pueden tomar con números y no con intuición. Estás sobre el promedio nacional.', next: 'Arma un panel simple con los 5 números que miras cada semana (ventas, caja, deuda de clientes, costos, pendientes), actualizado solo desde tus sistemas.' },
      4: { now: 'La información fluye en tiempo real y cuadra sola. Este es el activo que diferencia a las empresas listas para IA: datos limpios, conectados y accesibles.', next: 'Formaliza respaldos, permisos y privacidad (la Ley 21.719 ya aplica a pymes). Con esa base, la IA puede analizar y predecir sin riesgo.' }
    },
    herramientas: {
      1: { now: 'El stack actual (papel, WhatsApp, calculadora) pone techo al crecimiento: todo depende de personas presentes y de memoria.', next: 'Stack mínimo para partir: factura electrónica bien usada, una planilla en la nube y un sistema simple para tu proceso crítico. Kit Digital financia exactamente esto.' },
      2: { now: 'Hay herramientas digitales, pero funcionan como islas: las personas son el "cable" que mueve la información entre ellas. Comprar más software sin conectar lo existente solo agrega carga.', next: 'Antes de cualquier compra nueva, conecta las dos herramientas que más te obligan a copiar datos. Y ordena accesos: una clave por persona, nunca compartidas.' },
      3: { now: 'Los sistemas principales están conectados y los accesos son por persona. La operación digital es estable; el foco pasa a seguridad y continuidad.', next: 'Prueba tu plan B: qué pasa si se corta internet, falla el sistema o se va la persona que más sabe. Documenta la respuesta en una página.' },
      4: { now: 'La operación digital es completa, conectada y con seguridad básica resuelta. Pocas pymes chilenas llegan aquí.', next: 'El siguiente diferencial es la capa inteligente: copilotos y agentes sobre tus sistemas actuales. Toma el Diagnóstico de Madurez en IA y revisa la ruta CORFO/FIA para financiarlo.' }
    }
  };

  var STAGE_NARRATIVE = {
    1: 'Etapa 1 — Papel y WhatsApp. La operación vive en cuadernos, chats y en la memoria de personas clave. Cada dato se escribe varias veces y los errores se descubren tarde. La prioridad no es comprar tecnología cara: es digitalizar UN proceso crítico y dar el primer paso con fondos como Kit Digital (~100% subsidiado).',
    2: 'Etapa 2 — Digital Básica. Ya hay herramientas digitales (factura electrónica, Excel, alguna app), pero funcionan como islas: la información se copia a mano de un lado a otro. La prioridad es conectar lo que ya existe y eliminar la doble digitación — el ROI más rápido de toda la digitalización.',
    3: 'Etapa 3 — Digital Conectada. Los sistemas principales conversan entre sí y las decisiones se apoyan en datos. La empresa está sobre el promedio chileno. La prioridad es automatizar tareas repetitivas, profesionalizar la seguridad de la información y preparar el salto a IA.',
    4: 'Etapa 4 — Digital Optimizada. La operación es digital de punta a punta y el equipo mejora sus procesos continuamente. Esta base es exactamente lo que la IA necesita para generar valor real. El siguiente paso natural: el Diagnóstico de Madurez en IA y proyectos financiables CORFO/FIA.'
  };

  // ---------- State management ----------
  var state = loadState();

  function loadState() {
    try { var raw = localStorage.getItem(STORAGE_KEY); if (raw) return JSON.parse(raw); } catch (e) {}
    return { screen: 'intro', idx: 0, answers: {}, started: null, finished: null, source: DEFAULT_SOURCE };
  }
  function saveState() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {} }
  function resetState() {
    state = { screen: 'intro', idx: 0, answers: {}, started: null, finished: null, source: state.source || DEFAULT_SOURCE };
    saveState();
    render();
  }

  function stageFromAvg(avg) {
    if (avg < 1.6) return 1;
    if (avg < 2.4) return 2;
    if (avg < 3.3) return 3;
    return 4;
  }

  function computeResults() {
    var byDim = {};
    DIM_KEYS.forEach(function(k) { byDim[k] = { sum: 0, count: 0 }; });
    QUESTIONS.forEach(function(q, i) {
      var v = state.answers[i];
      if (typeof v === 'number') { byDim[q.dim].sum += v; byDim[q.dim].count += 1; }
    });
    var totalSum = 0, totalCount = 0;
    var perDim = DIM_KEYS.map(function(k) {
      var r = byDim[k]; var avg = r.count ? r.sum / r.count : 0;
      totalSum += r.sum; totalCount += r.count;
      return { key: k, label: DIM_LABELS[k], avg: avg, stage: stageFromAvg(avg) };
    });
    var overallAvg = totalCount ? totalSum / totalCount : 0;
    return { perDim: perDim, overallAvg: overallAvg, overallStage: stageFromAvg(overallAvg), scorePercent: scoreToPercent(overallAvg) };
  }

  function scoreToPercent(avg) {
    if (!Number.isFinite(avg)) return 0;
    var clamped = Math.max(1, Math.min(4, avg));
    return Math.round(((clamped - 1) / 3) * 100);
  }

  function pickInsights(perDim) {
    var sorted = perDim.slice().sort(function(a, b) { return b.avg - a.avg; });
    var strongest = sorted[0];
    var weakest = sorted[sorted.length - 1];
    return { strongest: strongest, weakest: weakest, spread: strongest.avg - weakest.avg };
  }

  function chartPercent(avg) {
    return scoreToPercent(avg);
  }

  function renderRadarChart(perDim) {
    var cx = 150, cy = 150, maxR = 104;
    var points = perDim.map(function(d, i) {
      var angle = (-90 + (360 / perDim.length) * i) * Math.PI / 180;
      var radius = (scoreToPercent(d.avg) / 100) * maxR;
      return {
        x: cx + Math.cos(angle) * radius,
        y: cy + Math.sin(angle) * radius,
        axisX: cx + Math.cos(angle) * maxR,
        axisY: cy + Math.sin(angle) * maxR,
        labelX: cx + Math.cos(angle) * 128,
        labelY: cy + Math.sin(angle) * 128,
        label: d.label,
        pct: chartPercent(d.avg)
      };
    });
    var rings = [1, 2, 3, 4].map(function(level) {
      var r = (level / 4) * maxR;
      var poly = perDim.map(function(_d, i) {
        var angle = (-90 + (360 / perDim.length) * i) * Math.PI / 180;
        return (cx + Math.cos(angle) * r).toFixed(1) + ',' + (cy + Math.sin(angle) * r).toFixed(1);
      }).join(' ');
      return '<polygon points="' + poly + '" fill="none" stroke="#d1fae5" stroke-width="1" />';
    }).join('');
    var axes = points.map(function(p) {
      return '<line x1="' + cx + '" y1="' + cy + '" x2="' + p.axisX.toFixed(1) + '" y2="' + p.axisY.toFixed(1) + '" stroke="#d1fae5" stroke-width="1" />';
    }).join('');
    var area = points.map(function(p) { return p.x.toFixed(1) + ',' + p.y.toFixed(1); }).join(' ');
    var dots = points.map(function(p) {
      return '<circle cx="' + p.x.toFixed(1) + '" cy="' + p.y.toFixed(1) + '" r="4" fill="#047857" stroke="white" stroke-width="2"><title>' + esc(p.label) + ': ' + p.pct + '%</title></circle>';
    }).join('');
    var labels = points.map(function(p) {
      var anchor = p.labelX < cx - 8 ? 'end' : (p.labelX > cx + 8 ? 'start' : 'middle');
      return '<text x="' + p.labelX.toFixed(1) + '" y="' + p.labelY.toFixed(1) + '" text-anchor="' + anchor + '" dominant-baseline="middle" fill="#064e3b" font-size="10" font-weight="700">' + esc(shortLabel(p.label)) + '</text>';
    }).join('');
    return '<svg viewBox="0 0 300 300" role="img" aria-label="Gráfico de telaraña por dimensión" class="w-full h-auto">' + rings + axes + '<polygon points="' + area + '" fill="rgba(4,120,87,0.18)" stroke="#047857" stroke-width="3" />' + dots + labels + '</svg>';
  }

  function shortLabel(label) {
    return label
      .replace('Estrategia y liderazgo digital', 'Estrategia')
      .replace('Clientes y ventas digitales', 'Clientes')
      .replace('Procesos y operación', 'Procesos')
      .replace('Datos e información', 'Datos')
      .replace('Herramientas y seguridad', 'Herramientas');
  }

  function renderBarsChart(perDim) {
    return perDim.map(function(d) {
      var pct = chartPercent(d.avg);
      return '<div class="bar-row">' +
        '<div class="bar-meta"><span>' + esc(d.label) + '</span><strong>' + pct + '%</strong></div>' +
        '<div class="bar-track"><div class="bar-fill" style="width:' + pct + '%"></div></div>' +
      '</div>';
    }).join('');
  }

  function buildAnswersDetail() {
    return QUESTIONS.map(function(q, i) {
      var stage = state.answers[i];
      return {
        qIdx: i,
        dim: q.dim,
        dimension: DIM_LABELS[q.dim],
        question: q.q,
        stage: stage || null,
        stageName: stage ? STAGES[stage - 1] : null
      };
    });
  }

  // ---------- DOM helpers (escape user-relevant text) ----------
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;'); }

  var panel = document.getElementById('panel');
  var toast = document.getElementById('toast');

  function showToast(msg) {
    toast.textContent = msg; toast.style.opacity = '1';
    setTimeout(function() { toast.style.opacity = '0'; }, 2200);
  }

  function render() {
    saveState();
    if (state.screen === 'intro') renderIntro();
    else if (state.screen === 'quiz') renderQuiz();
    else if (state.screen === 'results') renderResults();
    else if (state.screen === 'lead') renderLead();
    else if (state.screen === 'thanks') renderThanks();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ---------- Screen: Intro ----------
  function renderIntro() {
    var hasAnswers = Object.keys(state.answers).length > 0;
    var dimChips = DIM_KEYS.map(function(k) {
      return '<div class="bg-emerald-50 text-emerald-900 text-sm font-semibold text-center py-2.5 px-3 rounded-lg border border-emerald-100">' + DIM_LABELS[k] + '</div>';
    }).join('');
    panel.innerHTML =
      '<h1 class="text-3xl md:text-4xl font-bold text-emerald-900 mb-3 tracking-tight">¿Qué tan digitalizada está tu empresa?</h1>' +
      '<p class="text-gray-600 text-lg leading-relaxed mb-6">Diagnóstico gratuito de 20 preguntas (~8 minutos). Mide la madurez digital de tu empresa en 5 dimensiones inspiradas en el ITD chileno: del papel y WhatsApp a la operación digital completa. Reporte visual y plan de acción personalizado. Sin pago. Sin tarjeta. Sin compromiso.</p>' +
      '<div class="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">' + dimChips + '</div>' +
      '<div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">' +
        '<div class="bg-emerald-50 rounded-lg p-3"><div class="text-emerald-900 font-bold text-sm">20 preguntas</div><div class="text-gray-600 text-xs">5 dimensiones × 4</div></div>' +
        '<div class="bg-emerald-50 rounded-lg p-3"><div class="text-emerald-900 font-bold text-sm">~8 minutos</div><div class="text-gray-600 text-xs">Escenarios reales</div></div>' +
        '<div class="bg-emerald-50 rounded-lg p-3"><div class="text-emerald-900 font-bold text-sm">Etapa 1 → 4</div><div class="text-gray-600 text-xs">Por dimensión + general</div></div>' +
        '<div class="bg-emerald-50 rounded-lg p-3"><div class="text-emerald-900 font-bold text-sm">Reporte gratis</div><div class="text-gray-600 text-xs">Plan de acción personalizado</div></div>' +
      '</div>' +
      '<div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-gray-700"><strong class="text-amber-900">Cómo responder:</strong> elige la opción que mejor describa lo que <em>realmente</em> pasa hoy en tu empresa — no lo que está en una presentación ni lo que te gustaría que fuera. El diagnóstico es útil solo cuando refleja la realidad observable.</div>' +
      '<div class="flex flex-wrap gap-3 items-center">' +
        '<button id="startBtn" class="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-sm">' + (hasAnswers ? 'Continuar diagnóstico' : 'Comenzar diagnóstico') + '</button>' +
        (hasAnswers ? '<button id="restartBtn" class="text-emerald-700 border border-gray-200 hover:bg-emerald-50 font-medium px-5 py-3 rounded-full transition-colors">Empezar de nuevo</button>' : '') +
      '</div>' +
      '<p class="text-xs text-gray-500 mt-6 leading-relaxed">Inspirado en el <strong>Índice de Transformación Digital (ITD)</strong> de Cámara de Comercio de Santiago, CORFO y PMG Business Improvement, adaptado al contexto de empresas chilenas y a la digitalización de pymes por <a href="/blog/framework-ia-pymes-chile/" class="text-emerald-700 underline">Apps del Sur</a>.</p>';
    document.getElementById('startBtn').onclick = function() {
      if (state.started == null) state.started = Date.now();
      state.screen = 'quiz';
      var nextIdx = 0;
      for (var i = 0; i < QUESTIONS.length; i++) {
        if (state.answers[i] == null) { nextIdx = i; break; }
        if (i === QUESTIONS.length - 1) nextIdx = i;
      }
      state.idx = nextIdx; render();
    };
    var r = document.getElementById('restartBtn');
    if (r) r.onclick = function() { if (confirm('¿Borrar tus respuestas y empezar de nuevo?')) resetState(); };
  }

  // ---------- Screen: Quiz ----------
  function renderQuiz() {
    var q = QUESTIONS[state.idx];
    var total = QUESTIONS.length;
    var answered = Object.keys(state.answers).length;
    var pct = Math.round((state.idx / total) * 100);
    var selected = state.answers[state.idx];
    var dimQuestionNumber = QUESTIONS.slice(0, state.idx + 1).filter(function(item) { return item.dim === q.dim; }).length;
    var dimQuestionTotal = QUESTIONS.filter(function(item) { return item.dim === q.dim; }).length;
    var stageScale = STAGES.map(function(_stage, i) {
      var active = selected === i + 1;
      var label = i === 0 ? 'Menor madurez' : (i === 3 ? 'Mayor madurez' : 'Respuesta ' + (i + 1));
      return '<div class="stage-scale-item border rounded-xl px-3 py-2 text-[11px] font-bold uppercase tracking-wide leading-tight ' + (active ? 'bg-emerald-700 text-white border-emerald-700' : 'bg-emerald-50 text-emerald-800 border-emerald-100') + '"><span class="inline-grid place-items-center w-5 h-5 mr-1.5 rounded-md ' + (active ? 'bg-white text-emerald-700' : 'bg-white text-emerald-700 border border-emerald-200') + '">' + (i + 1) + '</span>' + label + '</div>';
    }).join('');
    var opts = q.a.map(function(opt, i) {
      var stageNum = i + 1; var isSel = selected === stageNum;
      return '<div class="opt-card ' + (isSel ? 'selected bg-emerald-100 border-emerald-700 shadow-sm' : 'bg-emerald-50 border-transparent hover:bg-emerald-100 hover:border-emerald-200') + ' border flex items-start gap-3 p-4 rounded-xl cursor-pointer transition-colors" data-val="' + stageNum + '">' +
        '<div class="num w-7 h-7 rounded-lg grid place-items-center font-bold text-xs flex-shrink-0 ' + (isSel ? 'bg-emerald-700 text-white border border-emerald-700' : 'bg-white text-emerald-700 border border-emerald-200') + '">' + stageNum + '</div>' +
        '<div class="flex-1 text-sm text-gray-800 leading-relaxed">' + opt + '</div>' +
      '</div>';
    }).join('');
    panel.innerHTML =
      '<div class="flex items-center gap-3 mb-6 text-sm text-gray-500">' +
        '<span class="font-semibold text-emerald-700">' + (state.idx + 1) + ' / ' + total + '</span>' +
        '<div class="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">' +
          '<div class="h-full bg-gradient-to-r from-emerald-500 to-emerald-700 transition-all duration-300" style="width: ' + pct + '%"></div>' +
        '</div>' +
        '<span>' + answered + ' respondidas</span>' +
      '</div>' +
      '<span class="inline-block text-xs font-bold tracking-wider uppercase text-emerald-700 mb-2">' + DIM_LABELS[q.dim] + '</span>' +
      '<div class="text-xs text-gray-500 mb-2">Pregunta ' + dimQuestionNumber + ' de ' + dimQuestionTotal + ' en esta dimensión</div>' +
      '<h2 class="text-xl md:text-2xl font-bold text-emerald-900 leading-tight mb-6">' + q.q + '</h2>' +
      '<div class="stage-scale grid grid-cols-2 md:grid-cols-4 gap-2 mb-5">' + stageScale + '</div>' +
      '<div class="grid gap-2.5">' + opts + '</div>' +
      '<div class="flex justify-between mt-7 gap-3">' +
        '<button id="backBtn" class="text-emerald-700 border border-gray-200 hover:bg-emerald-50 font-medium px-5 py-2.5 rounded-full transition-colors ' + (state.idx === 0 ? 'opacity-40 pointer-events-none' : '') + '">← Atrás</button>' +
        '<button id="nextBtn" class="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-2.5 rounded-full transition-colors shadow-sm ' + (selected == null ? 'opacity-40 pointer-events-none' : '') + '">' +
          (state.idx === total - 1 ? 'Ver resultados →' : 'Siguiente →') +
        '</button>' +
      '</div>';
    var cards = panel.querySelectorAll('.opt-card');
    cards.forEach(function(el) {
      el.onclick = function() {
        state.answers[state.idx] = parseInt(el.getAttribute('data-val'), 10);
        saveState(); renderQuiz();
        setTimeout(function() { if (state.idx < total - 1) { state.idx += 1; render(); } }, 250);
      };
    });
    document.getElementById('backBtn').onclick = function() { if (state.idx > 0) { state.idx -= 1; render(); } };
    document.getElementById('nextBtn').onclick = function() {
      if (state.answers[state.idx] == null) return;
      if (state.idx < total - 1) { state.idx += 1; render(); }
      else { state.finished = Date.now(); state.screen = 'results'; render(); }
    };
  }

  // ---------- Screen: Results ----------
  function renderResults() {
    var r = computeResults();
    var insights = pickInsights(r.perDim);
    var detailedLocked = state.reportUnlocked !== true;
    var derivCta = r.overallStage >= 3
      ? '<div class="bg-emerald-900 text-white rounded-xl p-5 mb-6 flex flex-col md:flex-row md:items-center gap-3 no-print">' +
          '<div class="flex-1"><strong class="block mb-1">Tu base digital está lista para el siguiente salto: IA.</strong><span class="text-emerald-100 text-sm">Empresas en tu etapa son las que más retorno obtienen de agentes y copilotos. Mide tu preparación específica para IA.</span></div>' +
          '<a href="/diagnostico-madurez-ia/" class="bg-white text-emerald-900 font-semibold px-5 py-2.5 rounded-full text-sm whitespace-nowrap hover:bg-emerald-50 transition-colors">Diagnóstico de Madurez en IA →</a>' +
        '</div>'
      : '';
    var chartSection =
      '<div class="report-charts grid md:grid-cols-2 gap-4 mb-6">' +
        '<div class="chart-card">' +
          '<div class="chart-head"><span>Reporte automático</span><h3>Telaraña de madurez digital</h3></div>' +
          renderRadarChart(r.perDim) +
        '</div>' +
        '<div class="chart-card">' +
          '<div class="chart-head"><span>Porcentaje por dimensión</span><h3>Brechas principales</h3></div>' +
          '<div class="grid gap-4">' + renderBarsChart(r.perDim) + '</div>' +
        '</div>' +
      '</div>';
    var dimRows = r.perDim.map(function(d) {
      var recs = RECS[d.key][d.stage];
      return '<div class="bg-white border border-gray-200 rounded-xl p-5">' +
        '<div class="flex items-baseline justify-between gap-3 mb-2">' +
          '<h4 class="text-base font-bold text-emerald-900">' + d.label + '</h4>' +
          '<span class="text-xs font-bold tracking-wide uppercase text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full whitespace-nowrap">Etapa ' + d.stage + ' · ' + STAGES[d.stage - 1] + '</span>' +
        '</div>' +
        '<p class="text-sm text-gray-600 leading-relaxed mb-3">' + recs.now + '</p>' +
        '<div class="bg-emerald-50 rounded-lg p-3 text-sm text-emerald-900"><strong class="text-emerald-700">Siguiente paso:</strong> ' + recs.next + '</div>' +
      '</div>';
    }).join('');
    var matrixRows = DIM_KEYS.map(function(k) {
      var dim = r.perDim.filter(function(d) { return d.key === k; })[0];
      var cells = [1,2,3,4].map(function(s) {
        var isActive = dim.stage === s;
        return '<td class="matrix-cell s' + s + ' ' + (isActive ? 'active' : '') + ' p-3 rounded-lg align-top text-xs leading-snug" style="min-width:130px;">' + MATRIX[k][s-1] + '</td>';
      }).join('');
      return '<tr><th class="text-right pr-3 text-emerald-700 font-bold text-sm" style="width:110px;">' + DIM_LABELS[k] + '</th>' + cells + '</tr>';
    }).join('');
    var stagesHeader = STAGES.map(function(s, i) {
      return '<th class="bg-emerald-700 text-white text-left p-3 rounded-lg text-sm font-bold"><span class="text-xs uppercase tracking-wide opacity-80 block">Etapa ' + (i+1) + '</span>' + s + '</th>';
    }).join('');
    var detailsClass = detailedLocked ? 'locked-content' : '';
    panel.innerHTML =
      '<div class="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white rounded-2xl p-6 md:p-7 mb-6">' +
        '<div class="flex flex-col md:flex-row gap-6 items-center">' +
          '<div class="bg-white/15 border border-white/25 rounded-2xl px-7 py-5 text-center min-w-[150px]">' +
            '<div class="text-5xl font-extrabold leading-none">' + r.overallStage + '</div>' +
            '<div class="text-xs uppercase tracking-wider opacity-80 mt-2">Etapa global</div>' +
          '</div>' +
          '<div class="flex-1">' +
            '<h2 class="text-2xl md:text-3xl font-bold mb-2">' + STAGES[r.overallStage - 1] + '</h2>' +
            '<p class="text-emerald-50 leading-relaxed mb-4">' + STAGE_NARRATIVE[r.overallStage] + '</p>' +
            '<div class="h-2 bg-white/15 rounded-full overflow-hidden" aria-label="Puntaje normalizado"><div class="h-full bg-amber-300 rounded-full" style="width: ' + r.scorePercent + '%"></div></div>' +
            '<div class="text-xs uppercase tracking-wider text-emerald-100 mt-2">' + r.scorePercent + '% de madurez estimada</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      derivCta +
      '<div class="grid md:grid-cols-3 gap-3 mb-6">' +
        '<div class="insight-card bg-emerald-50 border border-emerald-100 rounded-xl p-4"><span class="block text-emerald-700 text-[11px] font-extrabold tracking-wider uppercase mb-1">Fortaleza</span><strong class="block text-emerald-950 leading-tight">' + insights.strongest.label + '</strong><p class="text-gray-600 text-sm leading-snug mt-1">Etapa ' + insights.strongest.stage + ' · ' + STAGES[insights.strongest.stage - 1] + '</p></div>' +
        '<div class="insight-card bg-amber-50 border border-amber-200 rounded-xl p-4"><span class="block text-amber-700 text-[11px] font-extrabold tracking-wider uppercase mb-1">Prioridad</span><strong class="block text-emerald-950 leading-tight">' + insights.weakest.label + '</strong><p class="text-gray-600 text-sm leading-snug mt-1">Primer foco para avanzar en tu digitalización.</p></div>' +
        '<div class="insight-card bg-emerald-50 border border-emerald-100 rounded-xl p-4"><span class="block text-emerald-700 text-[11px] font-extrabold tracking-wider uppercase mb-1">Brecha interna</span><strong class="block text-emerald-950 leading-tight">' + insights.spread.toFixed(1) + ' pts</strong><p class="text-gray-600 text-sm leading-snug mt-1">' + (insights.spread >= 1 ? 'Hay diferencias relevantes entre áreas.' : 'Madurez pareja entre dimensiones.') + '</p></div>' +
      '</div>' +
      chartSection +
      '<div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6 no-print">' +
        '<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">' +
          '<div>' +
            '<h3 class="text-emerald-900 font-bold mb-1">Recibe el reporte completo y plan de acción</h3>' +
            '<p class="text-sm text-gray-700 mb-2">Incluye matriz completa, gráficos, foco prioritario, respuestas por pregunta y fondos públicos aplicables en Chile.</p>' +
            '<ul class="lead-gate-list text-sm text-gray-700 grid gap-1 list-none p-0 m-0"><li><span class="text-emerald-700 font-bold mr-2">✓</span>Telaraña y barras por dimensión</li><li><span class="text-emerald-700 font-bold mr-2">✓</span>Plan de 30 días</li><li><span class="text-emerald-700 font-bold mr-2">✓</span>Ruta Kit Digital, SERCOTEC, CORFO o FIA</li></ul>' +
          '</div>' +
          '<button id="leadBtn" class="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm whitespace-nowrap">Recibir reporte</button>' +
        '</div>' +
      '</div>' +
      (detailedLocked ? '<div class="locked-label no-print bg-gray-50 border border-dashed border-gray-300 rounded-xl text-gray-600 text-sm mb-4 px-4 py-3 text-center">Vista previa del reporte completo. Déjanos tus datos para recibirlo y activar seguimiento comercial.</div>' : '') +
      '<div class="' + detailsClass + '" style="' + (detailedLocked ? 'filter: blur(5px); max-height: 520px; overflow: hidden; pointer-events: none; user-select: none;' : '') + '">' +
      '<h3 class="text-xs uppercase tracking-wider text-emerald-700 font-bold mb-3 mt-8">Tu posición en la matriz</h3>' +
      '<div class="overflow-x-auto -mx-2 px-2 mb-2">' +
        '<table class="border-separate w-full" style="border-spacing: 6px; min-width: 720px;">' +
          '<thead>' +
            '<tr><th style="background: transparent;"></th>' + stagesHeader + '</tr>' +
            '<tr><td style="background:transparent;"></td><td colspan="4" class="bg-emerald-900 text-white text-center text-xs font-bold uppercase tracking-widest p-2 rounded-lg">Madurez creciente →</td></tr>' +
          '</thead>' +
          '<tbody>' + matrixRows + '</tbody>' +
        '</table>' +
      '</div>' +
      '<h3 class="text-xs uppercase tracking-wider text-emerald-700 font-bold mb-3 mt-8">Qué significa por dimensión</h3>' +
      '<div class="grid gap-3">' + dimRows + '</div>' +
      '</div>' +
      '<div class="flex flex-wrap gap-3 justify-end mt-7 no-print">' +
        '<button id="copyBtn" class="text-emerald-700 border border-gray-200 hover:bg-emerald-50 font-medium px-5 py-2.5 rounded-full transition-colors text-sm">📋 Copiar resumen</button>' +
        '<button id="printBtn" class="text-emerald-700 border border-gray-200 hover:bg-emerald-50 font-medium px-5 py-2.5 rounded-full transition-colors text-sm">🖨️ Guardar PDF</button>' +
        '<button id="reviewBtn" class="text-emerald-700 border border-gray-200 hover:bg-emerald-50 font-medium px-5 py-2.5 rounded-full transition-colors text-sm">↺ Revisar respuestas</button>' +
      '</div>';
    document.getElementById('leadBtn').onclick = function() { state.screen = 'lead'; render(); };
    document.getElementById('copyBtn').onclick = function() {
      var summary = buildSummary(r);
      navigator.clipboard.writeText(summary).then(function() { showToast('Resumen copiado al portapapeles'); });
    };
    document.getElementById('printBtn').onclick = function() { window.print(); };
    document.getElementById('reviewBtn').onclick = function() { state.screen = 'quiz'; state.idx = 0; render(); };
  }

  function buildSummary(r) {
    var date = new Date().toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' });
    var lines = [
      'DIAGNÓSTICO DE MADUREZ DIGITAL — APPS DEL SUR',
      '',
      'Etapa global: ' + r.overallStage + ' — ' + STAGES[r.overallStage - 1],
      'Puntaje promedio: ' + r.overallAvg.toFixed(2) + ' / 4',
      '',
      'Por dimensión:'
    ];
    r.perDim.forEach(function(d) { lines.push('  • ' + d.label + ': Etapa ' + d.stage + ' (' + STAGES[d.stage - 1] + ') — ' + d.avg.toFixed(2) + '/4'); });
    lines.push(''); lines.push('Próximos pasos prioritarios:');
    r.perDim.forEach(function(d) { lines.push('  • ' + d.label + ': ' + RECS[d.key][d.stage].next); });
    lines.push(''); lines.push('Generado: ' + date + ' · https://appsdelsur.cl/diagnostico-madurez-digital/');
    return lines.join('\n');
  }

  // ---------- Screen: Lead capture ----------
  function renderLead() {
    var r = computeResults();
    var insights = pickInsights(r.perDim);
    var summary = buildSummary(r);
    var answersDetail = JSON.stringify(buildAnswersDetail());
    var hiddenDims = r.perDim.map(function(d) {
      return '<input type="hidden" name="Etapa ' + esc(d.label) + '" value="' + d.stage + ' — ' + esc(STAGES[d.stage - 1]) + ' (avg ' + d.avg.toFixed(2) + ')" />';
    }).join('');
    panel.innerHTML =
      '<h2 class="text-2xl md:text-3xl font-bold text-emerald-900 mb-2">Recibe tu reporte detallado en PDF</h2>' +
      '<p class="text-gray-600 mb-6">Te enviamos por correo: <strong>(1)</strong> tu resultado completo con la matriz visual, <strong>(2)</strong> plan de acción por dimensión, <strong>(3)</strong> qué fondo público (Kit Digital, SERCOTEC, CORFO, FIA) aplica a tu caso, y <strong>(4)</strong> una propuesta de conversación de 30 minutos sin costo si quieres profundizar.</p>' +
      '<form id="leadForm" action="https://formsubmit.co/dramirez.gysactiva@gmail.com" method="POST" class="space-y-4">' +
        '<input type="hidden" name="_subject" value="Nuevo lead — Diagnóstico Madurez Digital" />' +
        '<input type="hidden" name="_next" value="https://appsdelsur.cl/diagnostico-madurez-digital/?ok=1" />' +
        '<input type="hidden" name="_captcha" value="false" />' +
        '<input type="hidden" name="_template" value="table" />' +
        '<input type="text" name="_honey" style="display:none" />' +
        '<input type="hidden" name="Fuente" value="' + esc(state.source || DEFAULT_SOURCE) + '" />' +
        '<input type="hidden" name="Resumen del Diagnostico" value="' + esc(summary) + '" />' +
        '<input type="hidden" name="Etapa Global" value="' + r.overallStage + ' — ' + esc(STAGES[r.overallStage - 1]) + '" />' +
        '<input type="hidden" name="Puntaje Promedio" value="' + r.overallAvg.toFixed(2) + '" />' +
        '<input type="hidden" name="Puntaje Normalizado" value="' + r.scorePercent + '%" />' +
        '<input type="hidden" name="Fortaleza" value="' + esc(insights.strongest.label) + ' — Etapa ' + insights.strongest.stage + '" />' +
        '<input type="hidden" name="Prioridad" value="' + esc(insights.weakest.label) + ' — Etapa ' + insights.weakest.stage + '" />' +
        '<input type="hidden" name="Brecha Interna" value="' + insights.spread.toFixed(2) + '" />' +
        '<input type="hidden" name="Respuestas Detalladas" value="' + esc(answersDetail) + '" />' +
        hiddenDims +
        '<div class="grid md:grid-cols-2 gap-4">' +
          '<div><label for="lead-name" class="block text-sm font-medium text-gray-700 mb-1.5">Nombre completo *</label><input type="text" id="lead-name" name="Nombre" required class="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="Juan Pérez" /></div>' +
          '<div><label for="lead-email" class="block text-sm font-medium text-gray-700 mb-1.5">Correo electrónico *</label><input type="email" id="lead-email" name="Email" required class="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="juan@empresa.cl" /></div>' +
        '</div>' +
        '<div class="grid md:grid-cols-2 gap-4">' +
          '<div><label for="lead-empresa" class="block text-sm font-medium text-gray-700 mb-1.5">Empresa *</label><input type="text" id="lead-empresa" name="Empresa" required class="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="Viña Ejemplo" /></div>' +
          '<div><label for="lead-fono" class="block text-sm font-medium text-gray-700 mb-1.5">Teléfono / WhatsApp</label><input type="tel" id="lead-fono" name="Telefono" class="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="+56 9 ..." /></div>' +
        '</div>' +
        '<div class="grid md:grid-cols-2 gap-4">' +
          '<div><label for="lead-sector" class="block text-sm font-medium text-gray-700 mb-1.5">Sector *</label><select id="lead-sector" name="Sector" required class="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-white"><option value="">Selecciona…</option><option>Agrícola / Viticultura</option><option>Frutícola</option><option>Servicios</option><option>Comercio / Retail</option><option>Industrial / Manufactura</option><option>Construcción</option><option>Salud</option><option>Educación</option><option>Otro</option></select></div>' +
          '<div><label for="lead-tam" class="block text-sm font-medium text-gray-700 mb-1.5">Tamaño de empresa *</label><select id="lead-tam" name="Tamano" required class="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-white"><option value="">Selecciona…</option><option>Microempresa (1-9 personas)</option><option>Pequeña (10-49 personas)</option><option>Mediana (50-199 personas)</option><option>Grande (200+ personas)</option></select></div>' +
        '</div>' +
        '<div><label for="lead-region" class="block text-sm font-medium text-gray-700 mb-1.5">Región</label><select id="lead-region" name="Region" class="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-white"><option value="">Selecciona…</option><option>Metropolitana</option><option>Valparaíso</option><option>O\'Higgins</option><option>Maule</option><option>Ñuble</option><option>Biobío</option><option>Araucanía</option><option>Los Ríos</option><option>Los Lagos</option><option>Otra</option></select></div>' +
        '<div class="flex items-start gap-2 text-xs text-gray-600 pt-2"><input type="checkbox" id="lead-consent" required class="mt-0.5" /><label for="lead-consent">Acepto recibir el reporte y comunicaciones de Apps del Sur. Mis datos no se compartirán con terceros. Puedo darme de baja en cualquier momento.</label></div>' +
        '<div class="flex flex-wrap gap-3 pt-2"><button type="submit" class="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-sm">Enviar y recibir reporte →</button><button type="button" id="cancelLead" class="text-emerald-700 border border-gray-200 hover:bg-emerald-50 font-medium px-5 py-3 rounded-full transition-colors">← Volver a resultados</button></div>' +
      '</form>';
    document.getElementById('cancelLead').onclick = function() { state.screen = 'results'; render(); };
    document.getElementById('leadForm').onsubmit = handleLeadSubmit;
  }

  async function notifyViaFormSubmit(fields, reportUrl) {
    try {
      var payload = {};
      Object.keys(fields).forEach(function(key) { payload[key] = fields[key]; });
      payload._subject = 'Nuevo lead — Diagnóstico Madurez Digital — ' + (fields.Empresa || 'Sin empresa');
      payload._template = 'table';
      payload._captcha = 'false';
      payload['Reporte URL'] = reportUrl || 'Pendiente';

      var response = await fetch('https://formsubmit.co/ajax/dramirez.gysactiva@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      });
      var result = await response.json().catch(function() { return {}; });
      return result.success === true || result.success === 'true';
    } catch (_error) {
      return false;
    }
  }

  async function handleLeadSubmit(event) {
    event.preventDefault();
    var form = event.currentTarget;
    var submitBtn = form.querySelector('button[type="submit"]');
    var originalLabel = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    try {
      var data = {};
      var formData = new FormData(form);
      formData.forEach(function(value, key) { data[key] = value; });

      var response = await fetch('/api/assessment-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields: data })
      });
      var result = await response.json().catch(function() { return {}; });
      if (!response.ok || !result.ok) throw new Error(result.error || 'submit_failed');

      notifyViaFormSubmit(data, result.reportUrl).catch(function(error) {
        console.warn('FormSubmit notification failed', error);
      });

      state.reportUnlocked = true;
      state.reportUrl = result.reportUrl || null;
      state.screen = 'thanks';
      saveState();
      render();
    } catch (error) {
      console.warn('Assessment CRM submit failed; falling back to FormSubmit', error);
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
      form.onsubmit = null;
      form.submit();
    }
  }

  // ---------- Screen: Thanks ----------
  function renderThanks() {
    var reportLink = state.reportUrl
      ? '<a href="' + esc(state.reportUrl) + '" class="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm text-sm">Ver reporte</a>'
      : '';
    panel.innerHTML =
      '<div class="text-center py-8">' +
        '<div class="text-6xl mb-4">✓</div>' +
        '<h2 class="text-3xl font-bold text-emerald-900 mb-3">¡Gracias!</h2>' +
        '<p class="text-lg text-gray-600 mb-2">Recibimos tu solicitud. El reporte quedó registrado y te contactaremos para revisar los siguientes pasos.</p>' +
        '<p class="text-sm text-gray-500 mb-8">Mientras tanto, puedes revisar nuestros recursos para empresas.</p>' +
        '<div class="flex flex-wrap gap-3 justify-center">' +
          reportLink +
          '<a href="/blog/framework-ia-pymes-chile/" class="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm text-sm">Leer framework completo</a>' +
          '<a href="/blog/guia-financiamiento-corfo-fia-digitalizacion-agricola-2026/" class="text-emerald-700 border border-gray-200 hover:bg-emerald-50 font-medium px-5 py-2.5 rounded-full transition-colors text-sm">Ver fondos disponibles</a>' +
          '<a href="/" class="text-emerald-700 border border-gray-200 hover:bg-emerald-50 font-medium px-5 py-2.5 rounded-full transition-colors text-sm">Volver al inicio</a>' +
        '</div>' +
      '</div>';
  }

  // ---------- Bootstrap ----------
  var urlParams = new URLSearchParams(window.location.search);
  var sourceParam = urlParams.get('source');
  if (sourceParam) {
    state.source = sourceParam.slice(0, 120);
    saveState();
  } else if (!state.source) {
    state.source = DEFAULT_SOURCE;
    saveState();
  }
  if (urlParams.get('ok') === '1') {
    state.screen = 'thanks'; saveState();
    window.history.replaceState({}, '', '/diagnostico-madurez-digital/');
  }
  render();
})();
