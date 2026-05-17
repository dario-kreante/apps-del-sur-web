/* Diagnóstico de Madurez en IA — Apps del Sur
   All UI content is from constants defined below. No external user input
   is ever inserted as HTML; form values use proper attribute escaping. */
(function() {
  'use strict';

  var STORAGE_KEY = 'apps-del-sur-madurez-ia-v1';
  var DIM_KEYS = ['liderazgo', 'procesos', 'datos', 'cultura', 'tecnologia', 'financiamiento'];

  var DIM_LABELS = {
    liderazgo: 'Liderazgo',
    procesos: 'Procesos',
    datos: 'Datos',
    cultura: 'Cultura y personas',
    tecnologia: 'Tecnología',
    financiamiento: 'Financiamiento y aliados'
  };

  var STAGES = ['Papel y WhatsApp', 'Digitalizado', 'Conectado', 'Aumentado por IA'];

  var QUESTIONS = [
    { dim: 'liderazgo', q: '¿Cómo se toman las decisiones importantes en tu empresa hoy?', a: [
      'El dueño decide solo, casi siempre por intuición o experiencia',
      'Hay un gerente o jefe que propone, pero el dueño valida todo',
      'Hay un equipo directivo que discute con datos y se alinea',
      'Las decisiones operativas se delegan apoyadas en datos e IA; el dueño solo ve excepciones'
    ]},
    { dim: 'liderazgo', q: '¿Qué tan presente está la digitalización y la IA en las conversaciones de tu empresa?', a: [
      'Nunca se habla, o se ve como "cosa de jóvenes" o moda pasajera',
      'Se menciona ocasionalmente, pero no se concreta nada formal',
      'Hay proyectos digitales activos con presupuesto y responsables nombrados',
      'La IA es parte explícita de la estrategia y todos los gerentes la usan a diario'
    ]},
    { dim: 'procesos', q: 'Si te pido que me muestres cómo se registra el trabajo diario (asistencia, ventas, atención), ¿qué me mostrarías?', a: [
      'Cuadernos, planillas de papel o un grupo de WhatsApp',
      'Un Excel o una app móvil, pero después alguien transcribe a otro sistema',
      'Un sistema digital que se conecta con la contabilidad sin re-tipear',
      'Un sistema donde la IA registra automáticamente y solo se revisan excepciones'
    ]},
    { dim: 'procesos', q: '¿Sabes cuánto te costó realmente un cliente, una actividad o un proceso específico este mes?', a: [
      'No, lo estimo o lo veo a fin de año en el balance',
      'Lo sé con Excel, pero me toma horas o días calcularlo',
      'Lo veo en un dashboard al día siguiente o en tiempo real',
      'El sistema me alerta antes de que pase porque predice desviaciones'
    ]},
    { dim: 'datos', q: 'Si quisieras saber ahora quiénes son tus 10 mejores clientes por monto facturado, ¿cuánto te toma?', a: [
      'Tendría que preguntar a varias personas y revisar cuadernos o papeles',
      'Lo saco con Excel filtrando facturación: unos 30 minutos a 1 hora',
      'Lo veo en un dashboard en menos de 1 minuto',
      'La IA ya me alertó la semana pasada cuáles son y por qué están bajando'
    ]},
    { dim: 'datos', q: 'Los datos del negocio (ventas, clientes, operaciones), ¿dónde viven hoy?', a: [
      'En cuadernos, planillas impresas y la cabeza de algunas personas',
      'En Excels separados — cada área tiene los suyos y no siempre coinciden',
      'En un sistema integrado donde todos consultamos la misma fuente',
      'En una plataforma con datos en tiempo real que la IA usa para predecir'
    ]},
    { dim: 'cultura', q: 'Si mañana presentas un proyecto de IA al equipo, ¿cómo reaccionarían?', a: [
      'Con resistencia o miedo a "que los reemplacen"',
      'Algunos curiosos pedirían probar; otros se mantendrían indiferentes',
      'El equipo participaría activamente y propondría mejoras',
      'El equipo ya está usando IA por su cuenta y pide más capacitación'
    ]},
    { dim: 'cultura', q: '¿Cómo se capacita tu equipo en habilidades digitales hoy?', a: [
      'No se capacita formalmente, se aprende sobre la marcha',
      'Capacitaciones puntuales cuando hay un problema o un cambio',
      'Plan anual de capacitación con presupuesto asignado',
      'Aprendizaje continuo: el equipo experimenta, comparte y mejora cada semana'
    ]},
    { dim: 'tecnologia', q: '¿Qué herramientas usa tu empresa para operar día a día?', a: [
      'Celular, WhatsApp y cuadernos. Punto.',
      'WhatsApp + Excel + alguna app móvil o nube básica',
      'Sistemas integrados por APIs con la contabilidad y otros sistemas',
      'Copilotos de IA (Claude, ChatGPT) y agentes que ejecutan tareas'
    ]},
    { dim: 'tecnologia', q: 'Cuando una nueva tecnología te interesa, ¿qué pasa en tu empresa?', a: [
      'Suelo decir "luego lo veo" y queda en nada',
      'Pregunto a 1 o 2 conocidos y compro si parece bueno',
      'Evaluamos con criterios (costo, retorno, integración) antes de comprar',
      'Hay un proceso de pilotos cortos antes de adoptar cualquier herramienta'
    ]},
    { dim: 'financiamiento', q: '¿Cómo financian los proyectos de digitalización o IA en tu empresa?', a: [
      'Con caja propia cuando sobra, sin plan formal',
      'He postulado a algún fondo (Kit Digital, SERCOTEC) o lo estoy explorando',
      'Tengo proyectos con cofinanciamiento CORFO o similar adjudicados',
      'Proyectos plurianuales con FIA, CORFO Crea y Valida, PATI o similares'
    ]},
    { dim: 'financiamiento', q: '¿Tienes aliados o asesores externos en transformación digital?', a: [
      'No, lo hacemos solos cuando se puede',
      'Tenemos un proveedor que viene a vender, no acompaña',
      'Tenemos un partner tecnológico que entiende nuestro negocio',
      'Trabajamos con una red de aliados: gremios, universidades, agtech, consultores'
    ]}
  ];

  var MATRIX = {
    liderazgo: ['El dueño decide solo', 'Gerente impulsa lo digital', 'Equipo directivo alineado', 'Liderazgo con visión IA'],
    procesos: ['Planillas y WhatsApp', 'Procesos digitalizados básicos', 'Procesos conectados entre áreas', 'IA decide tareas rutinarias'],
    datos: ['Datos en cuadernos y cabeza', 'Excel y registros digitales', 'Datos integrados y dashboards', 'Datos predictivos en tiempo real'],
    cultura: ['Resistencia al cambio', 'Equipo abierto a probar', 'Capacitación continua', 'Cultura de experimentación'],
    tecnologia: ['Solo celular y WhatsApp', 'App móvil y nube básica', 'Integración con contabilidad', 'Copilotos y agentes IA'],
    financiamiento: ['Inversión mínima sin plan', 'Kit Digital o SERCOTEC', 'CORFO Digitalización Agro', 'FIA, Crea y Valida, PATI']
  };

  var RECS = {
    liderazgo: {
      1: { now: 'Las decisiones dependen casi por completo del dueño. Sin un equipo que valide, el negocio se topa con el techo del fundador.', next: 'Identifica a UNA persona del equipo y delégale formalmente UNA decisión operativa este mes. Empezar pequeño es la clave.' },
      2: { now: 'Hay alguien empujando lo digital pero todavía depende mucho del dueño. La velocidad de cambio se traba en cada validación.', next: 'Define 3 decisiones que el gerente puede tomar sin pasar por el dueño. Documenta el criterio.' },
      3: { now: 'Hay un equipo directivo que toma decisiones con datos. Esto te ubica por encima del promedio pyme chileno.', next: 'Lleva a tu próximo comité una decisión donde la IA puede aportar: predicción de ventas, scoring de clientes, optimización de rutas.' },
      4: { now: 'Liderazgo maduro con visión IA. Tu empresa opera en una etapa donde la IA es un diferenciador real.', next: 'Comunica esta ventaja hacia afuera: caso de éxito, charlas, contenido. Atrae el talento y los clientes que valoran esa madurez.' }
    },
    procesos: {
      1: { now: 'Tu operación vive en papel y WhatsApp. Cada error de transcripción es plata que se pierde y nadie ve.', next: 'Elige UN proceso (el que más te duele) y digitalízalo con una app móvil este trimestre. No intentes todo a la vez.' },
      2: { now: 'Tienes procesos digitalizados pero todavía aislados. La doble digitación entre Excel y contabilidad te cuesta horas semanales.', next: 'Integra tu sistema operativo con la contabilidad vía API. Es la palanca de ROI más rápida.' },
      3: { now: 'Tus procesos están conectados entre áreas. Tienes la base perfecta para sumar IA encima.', next: 'Identifica el proceso más repetitivo y predecible (clasificar mensajes, agendar, generar reportes) y prototipa un agente IA para él.' },
      4: { now: 'IA aplicada en operaciones rutinarias. Estás en la frontera de las pymes chilenas — muy pocas llegan acá.', next: 'Documenta y mide el impacto en pesos. Ese dato te abre la siguiente ronda de fondos (FIA, Crea y Valida).' }
    },
    datos: {
      1: { now: 'Los datos viven en cabezas, cuadernos y planillas. La empresa no puede crecer porque la información no escala.', next: 'Empieza por UN dato crítico (clientes y montos facturados). Pásalo a una planilla compartida en la nube esta semana.' },
      2: { now: 'Tienes datos pero fragmentados en Excels distintos. Las diferencias entre áreas generan reuniones que no agregan valor.', next: 'Define una "fuente única de verdad" para cada dato crítico (clientes, ventas, costos). Documenta quién es dueño de cada una.' },
      3: { now: 'Tus datos están integrados y consultables. Esto es la materia prima de la IA — sin esto, ninguna IA funciona.', next: 'Empieza un piloto de análisis predictivo: predicción de churn, demanda, o desviaciones en costos. Con tus datos actuales ya alcanza.' },
      4: { now: 'Datos predictivos en tiempo real. Estás operando como las empresas más maduras del país.', next: 'Invierte en gobernanza y observabilidad de datos. Es lo que protege esta ventaja cuando creces.' }
    },
    cultura: {
      1: { now: 'El equipo percibe la IA como amenaza. Si no gestionas eso, cualquier proyecto fracasará — sin importar la tecnología.', next: 'Antes de implementar nada, conversa con 3 personas claves del equipo. Pregúntales qué les frustra hoy. La IA será su aliada, no su reemplazo.' },
      2: { now: 'Hay apertura inicial pero falta empuje cultural. La curiosidad existe pero no se traduce en práctica.', next: 'Elige a un "champion" interno (alguien que ya está curioso) y dale 2 horas semanales para experimentar. En 1 mes tendrás un caso interno.' },
      3: { now: 'Cultura abierta y con capacitación continua. Tu equipo está listo para el siguiente nivel.', next: 'Crea un espacio quincenal donde el equipo comparte qué probó con IA esta semana. La fluidez colectiva multiplica el ROI.' },
      4: { now: 'Cultura de experimentación. Tu empresa aprende más rápido que la competencia.', next: 'Codifica esta cultura en tu proceso de onboarding. Los próximos en entrar tienen que sumar, no diluir.' }
    },
    tecnologia: {
      1: { now: 'Tu stack actual no es base para nada digital. La IA no se puede aplicar sobre WhatsApp y cuadernos.', next: 'Define un stack mínimo: nube para archivos, una app móvil para tu proceso crítico, y un sistema contable digital. Punto de partida.' },
      2: { now: 'Tienes herramientas digitales pero aisladas. El problema no es comprar más herramientas, sino conectarlas.', next: 'Integra tu sistema operativo con la contabilidad vía API. Esa única conexión te ahorra horas semanales.' },
      3: { now: 'Stack integrado por APIs. Tu infraestructura está lista para IA aplicada.', next: 'Suma un copiloto (Claude o ChatGPT con tus datos) al equipo. Empieza por atención al cliente o generación de propuestas.' },
      4: { now: 'Copilotos y agentes IA operando. Estás en la frontera tecnológica de pymes chilenas.', next: 'Documenta los flujos de agentes y monetiza esa expertise: capacita a otras pymes de tu sector o asóciate con un agtech.' }
    },
    financiamiento: {
      1: { now: 'Sin plan ni fondos identificados. Estás dejando entre 60% y 98% de subsidio sobre la mesa.', next: 'Postula a Kit Digital ($1,2M cubre ~100%) este trimestre. Es el primer paso y se gana experiencia para fondos mayores.' },
      2: { now: 'Estás en el radar de fondos pero todavía no concretas. La barrera suele ser la formulación, no la elegibilidad.', next: 'Junta documentos base (RUT, balance, plan) y postula a SERCOTEC CRECE o CORFO Digitalización Agro. Tasa de éxito 15-30% con buen proyecto.' },
      3: { now: 'Proyectos cofinanciados adjudicados. Esto valida la viabilidad y abre fondos mayores.', next: 'Postula a FIA Interés Privado o CORFO Crea y Valida con un proveedor tecnológico. Apalanca tu próximo proyecto hasta $120M.' },
      4: { now: 'Acceso a fondos plurianuales. Tu empresa opera con horizonte de I+D real.', next: 'Conviértete en caso de éxito documentado: publica resultados, postula a premios. Eso atrae el siguiente nivel de financiamiento.' }
    }
  };

  var STAGE_NARRATIVE = {
    1: 'Etapa 1 — Papel y WhatsApp. Tu empresa opera con herramientas analógicas o digitales aisladas. La información vive en cabezas y cuadernos. No hay base para implementar IA todavía — pero hay enormes ahorros disponibles solo con digitalizar lo básico. Prioridad ahora: estructurar lo que ya existe.',
    2: 'Etapa 2 — Digitalizado. Ya digitalizaron procesos básicos y hay alguien empujando el cambio. La barrera principal: las herramientas viven aisladas y se duplica esfuerzo. Prioridad ahora: conectar los sistemas para que los datos fluyan sin re-tipear.',
    3: 'Etapa 3 — Conectado. Procesos digitalizados y conectados entre áreas, decisiones basadas en datos. Esta etapa es la antesala perfecta para sumar IA — la materia prima ya existe. Prioridad ahora: identificar 1 o 2 casos de uso de IA donde el ROI sea evidente.',
    4: 'Etapa 4 — Aumentado por IA. Copilotos y agentes asisten al equipo, decisiones se anticipan con datos predictivos. Estás en la frontera de las pymes chilenas. Prioridad ahora: documentar, medir y comunicar la ventaja — esa madurez es tu foso competitivo.'
  };

  // ---------- State management ----------
  var state = loadState();

  function loadState() {
    try { var raw = localStorage.getItem(STORAGE_KEY); if (raw) return JSON.parse(raw); } catch (e) {}
    return { screen: 'intro', idx: 0, answers: {}, started: null, finished: null };
  }
  function saveState() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {} }
  function resetState() { state = { screen: 'intro', idx: 0, answers: {}, started: null, finished: null }; saveState(); render(); }

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
    return { perDim: perDim, overallAvg: overallAvg, overallStage: stageFromAvg(overallAvg) };
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
      '<h1 class="text-3xl md:text-4xl font-bold text-emerald-900 mb-3 tracking-tight">¿En qué etapa de madurez en IA está tu pyme?</h1>' +
      '<p class="text-gray-600 text-lg leading-relaxed mb-6">Diagnóstico gratuito de 12 preguntas (~6 minutos). Mide tu empresa en 6 dimensiones, te ubica en una de 4 etapas y te entrega un plan de acción personalizado para avanzar. Sin pago. Sin tarjeta. Sin compromiso.</p>' +
      '<div class="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">' + dimChips + '</div>' +
      '<div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">' +
        '<div class="bg-emerald-50 rounded-lg p-3"><div class="text-emerald-900 font-bold text-sm">12 preguntas</div><div class="text-gray-600 text-xs">6 dimensiones × 2</div></div>' +
        '<div class="bg-emerald-50 rounded-lg p-3"><div class="text-emerald-900 font-bold text-sm">~6 minutos</div><div class="text-gray-600 text-xs">Escenarios reales</div></div>' +
        '<div class="bg-emerald-50 rounded-lg p-3"><div class="text-emerald-900 font-bold text-sm">Etapa 1 → 4</div><div class="text-gray-600 text-xs">Por dimensión + general</div></div>' +
        '<div class="bg-emerald-50 rounded-lg p-3"><div class="text-emerald-900 font-bold text-sm">Reporte gratis</div><div class="text-gray-600 text-xs">Plan de acción personalizado</div></div>' +
      '</div>' +
      '<div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-gray-700"><strong class="text-amber-900">Cómo responder:</strong> elige la opción que mejor describa lo que <em>realmente</em> pasa hoy en tu empresa — no lo que está en una presentación ni lo que te gustaría que fuera. El diagnóstico es útil solo cuando refleja la realidad observable.</div>' +
      '<div class="flex flex-wrap gap-3 items-center">' +
        '<button id="startBtn" class="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-sm">' + (hasAnswers ? 'Continuar diagnóstico' : 'Comenzar diagnóstico') + '</button>' +
        (hasAnswers ? '<button id="restartBtn" class="text-emerald-700 border border-gray-200 hover:bg-emerald-50 font-medium px-5 py-3 rounded-full transition-colors">Empezar de nuevo</button>' : '') +
      '</div>' +
      '<p class="text-xs text-gray-500 mt-6 leading-relaxed">Basado en el <strong>Índice de Transformación Digital (ITD)</strong> de la Cámara de Comercio de Santiago, CORFO y PMG Business Improvement, adaptado al contexto pyme chileno por <a href="/blog/framework-ia-pymes-chile/" class="text-emerald-700 underline">Apps del Sur</a>.</p>';
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
    var opts = q.a.map(function(opt, i) {
      var stageNum = i + 1; var isSel = selected === stageNum;
      return '<div class="opt-card ' + (isSel ? 'selected' : '') + ' flex items-start gap-3 p-4 rounded-xl cursor-pointer" data-val="' + stageNum + '">' +
        '<div class="num w-7 h-7 rounded-lg grid place-items-center font-bold text-xs flex-shrink-0">' + stageNum + '</div>' +
        '<div class="flex-1">' +
          '<span class="block text-xs font-bold tracking-wide uppercase text-emerald-700 mb-1">Etapa ' + stageNum + ' · ' + STAGES[i] + '</span>' +
          '<div class="text-sm text-gray-800">' + opt + '</div>' +
        '</div>' +
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
      '<h2 class="text-xl md:text-2xl font-bold text-emerald-900 leading-tight mb-6">' + q.q + '</h2>' +
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
    panel.innerHTML =
      '<div class="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white rounded-2xl p-6 md:p-7 mb-6">' +
        '<div class="flex flex-col md:flex-row gap-6 items-center">' +
          '<div class="bg-white/15 border border-white/25 rounded-2xl px-7 py-5 text-center min-w-[150px]">' +
            '<div class="text-5xl font-extrabold leading-none">' + r.overallStage + '</div>' +
            '<div class="text-xs uppercase tracking-wider opacity-80 mt-2">Etapa global</div>' +
          '</div>' +
          '<div class="flex-1">' +
            '<h2 class="text-2xl md:text-3xl font-bold mb-2">' + STAGES[r.overallStage - 1] + '</h2>' +
            '<p class="text-emerald-50 leading-relaxed">' + STAGE_NARRATIVE[r.overallStage] + '</p>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6 no-print">' +
        '<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">' +
          '<div>' +
            '<h3 class="text-emerald-900 font-bold mb-1">📩 Recibe tu reporte detallado en PDF</h3>' +
            '<p class="text-sm text-gray-700">Resultado completo + plan de acción + qué fondo público aplica a tu caso. Sin costo.</p>' +
          '</div>' +
          '<button id="leadBtn" class="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm whitespace-nowrap">Recibir reporte</button>' +
        '</div>' +
      '</div>' +
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
      'DIAGNÓSTICO DE MADUREZ EN IA — APPS DEL SUR',
      '',
      'Etapa global: ' + r.overallStage + ' — ' + STAGES[r.overallStage - 1],
      'Puntaje promedio: ' + r.overallAvg.toFixed(2) + ' / 4',
      '',
      'Por dimensión:'
    ];
    r.perDim.forEach(function(d) { lines.push('  • ' + d.label + ': Etapa ' + d.stage + ' (' + STAGES[d.stage - 1] + ') — ' + d.avg.toFixed(2) + '/4'); });
    lines.push(''); lines.push('Próximos pasos prioritarios:');
    r.perDim.forEach(function(d) { lines.push('  • ' + d.label + ': ' + RECS[d.key][d.stage].next); });
    lines.push(''); lines.push('Generado: ' + date + ' · https://appsdelsur.cl/diagnostico-madurez-ia/');
    return lines.join('\n');
  }

  // ---------- Screen: Lead capture ----------
  function renderLead() {
    var r = computeResults();
    var summary = buildSummary(r);
    var hiddenDims = r.perDim.map(function(d) {
      return '<input type="hidden" name="Etapa ' + esc(d.label) + '" value="' + d.stage + ' — ' + esc(STAGES[d.stage - 1]) + ' (avg ' + d.avg.toFixed(2) + ')" />';
    }).join('');
    panel.innerHTML =
      '<h2 class="text-2xl md:text-3xl font-bold text-emerald-900 mb-2">Recibe tu reporte detallado en PDF</h2>' +
      '<p class="text-gray-600 mb-6">Te enviamos por correo: <strong>(1)</strong> tu resultado completo con la matriz visual, <strong>(2)</strong> plan de acción por dimensión, <strong>(3)</strong> qué fondo público (Kit Digital, SERCOTEC, CORFO, FIA) aplica a tu caso, y <strong>(4)</strong> una propuesta de conversación de 30 minutos sin costo si quieres profundizar.</p>' +
      '<form id="leadForm" action="https://formsubmit.co/dramirez.gysactiva@gmail.com" method="POST" class="space-y-4">' +
        '<input type="hidden" name="_subject" value="Nuevo lead — Diagnóstico Madurez IA" />' +
        '<input type="hidden" name="_next" value="https://appsdelsur.cl/diagnostico-madurez-ia/?ok=1" />' +
        '<input type="hidden" name="_captcha" value="false" />' +
        '<input type="hidden" name="_template" value="table" />' +
        '<input type="text" name="_honey" style="display:none" />' +
        '<input type="hidden" name="Resumen del Diagnostico" value="' + esc(summary) + '" />' +
        '<input type="hidden" name="Etapa Global" value="' + r.overallStage + ' — ' + esc(STAGES[r.overallStage - 1]) + '" />' +
        '<input type="hidden" name="Puntaje Promedio" value="' + r.overallAvg.toFixed(2) + '" />' +
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
  }

  // ---------- Screen: Thanks ----------
  function renderThanks() {
    panel.innerHTML =
      '<div class="text-center py-8">' +
        '<div class="text-6xl mb-4">✓</div>' +
        '<h2 class="text-3xl font-bold text-emerald-900 mb-3">¡Gracias!</h2>' +
        '<p class="text-lg text-gray-600 mb-2">Recibimos tu solicitud. Te enviaremos el reporte completo a tu correo en las próximas 24 horas.</p>' +
        '<p class="text-sm text-gray-500 mb-8">Mientras tanto, puedes revisar nuestros recursos para pymes.</p>' +
        '<div class="flex flex-wrap gap-3 justify-center">' +
          '<a href="/blog/framework-ia-pymes-chile/" class="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm text-sm">Leer framework completo</a>' +
          '<a href="/blog/guia-financiamiento-corfo-fia-digitalizacion-agricola-2026/" class="text-emerald-700 border border-gray-200 hover:bg-emerald-50 font-medium px-5 py-2.5 rounded-full transition-colors text-sm">Ver fondos disponibles</a>' +
          '<a href="/" class="text-emerald-700 border border-gray-200 hover:bg-emerald-50 font-medium px-5 py-2.5 rounded-full transition-colors text-sm">Volver al inicio</a>' +
        '</div>' +
      '</div>';
  }

  // ---------- Bootstrap ----------
  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('ok') === '1') {
    state.screen = 'thanks'; saveState();
    window.history.replaceState({}, '', '/diagnostico-madurez-ia/');
  }
  render();
})();
