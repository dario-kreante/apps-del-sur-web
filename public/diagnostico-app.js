/* Diagnóstico de Madurez en IA — Apps del Sur
   All UI content is from constants defined below. No external user input
   is ever inserted as HTML; form values use proper attribute escaping. */
(function() {
  'use strict';

  var STORAGE_KEY = 'apps-del-sur-madurez-ia-v2';
  var DIM_KEYS = ['estrategia', 'personas', 'procesos', 'datos', 'tecnologia'];
  var DEFAULT_SOURCE = 'diagnostico-madurez-ia';

  var DIM_LABELS = {
    estrategia: 'Estrategia y liderazgo',
    personas: 'Personas y cultura',
    procesos: 'Procesos y operación',
    datos: 'Datos y gobernanza',
    tecnologia: 'Tecnología e integración'
  };

  var STAGES = ['Analógica', 'Principiante', 'Intermedia', 'Líder en IA'];

  var QUESTIONS = [
    { dim: 'estrategia', q: '¿Cómo se define hoy una prioridad digital o de IA en tu empresa?', a: [
      'Aparece como idea puntual cuando hay un problema urgente',
      'Se conversa entre dueños o jefaturas, pero sin plan ni responsables claros',
      'Tiene objetivos, responsables, presupuesto y seguimiento mensual',
      'Forma parte de la estrategia del negocio, con metas medibles y revisión directiva'
    ]},
    { dim: 'estrategia', q: 'Cuando evalúan invertir en tecnología, ¿qué criterio pesa más?', a: [
      'El costo inicial o la urgencia del momento',
      'La recomendación de alguien cercano o del proveedor',
      'El retorno esperado, el impacto operacional y la capacidad de integración',
      'Un caso de negocio con impacto, riesgos, adopción y aprendizaje esperado'
    ]},
    { dim: 'estrategia', q: '¿Qué tan claro está el problema de negocio que la IA debería resolver?', a: [
      'No está claro; se habla de IA en general',
      'Hay ideas, pero todavía son amplias o poco priorizadas',
      'Hay 1 a 3 casos de uso priorizados por dolor, ahorro o venta potencial',
      'Existe un portafolio de casos de uso, con dueños, métricas y roadmap'
    ]},
    { dim: 'estrategia', q: '¿Quién lidera la adopción digital y de IA en la práctica?', a: [
      'Nadie formalmente; depende de quien tenga tiempo',
      'Una persona interesada empuja algunos cambios por iniciativa propia',
      'Un responsable definido coordina con operaciones, administración y gerencia',
      'Un equipo transversal lidera pilotos, adopción, medición y mejora continua'
    ]},
    { dim: 'personas', q: '¿Cómo reacciona el equipo cuando se propone automatizar una tarea repetitiva?', a: [
      'Con temor, resistencia o dudas sobre pérdida de trabajo',
      'Con curiosidad, pero esperando que otro lo pruebe primero',
      'Con disposición a participar si el beneficio es concreto',
      'Con propuestas activas de mejora y aprendizaje compartido'
    ]},
    { dim: 'personas', q: '¿Qué nivel de uso real tiene la IA generativa en el equipo?', a: [
      'Casi nadie la usa o se usa solo por curiosidad personal',
      'Algunas personas usan ChatGPT u otra herramienta para tareas simples',
      'Hay usos definidos para redactar, analizar, resumir o responder mejor',
      'Hay prácticas compartidas, controles y casos de uso integrados al trabajo diario'
    ]},
    { dim: 'personas', q: '¿Cómo se capacita el equipo en habilidades digitales y de IA?', a: [
      'No hay capacitación formal; se aprende sobre la marcha',
      'Hay capacitaciones puntuales cuando aparece una herramienta nueva',
      'Existe un plan anual o trimestral con tiempo y presupuesto asignado',
      'El aprendizaje es continuo: se prueban herramientas, se documenta y se comparte'
    ]},
    { dim: 'personas', q: '¿Qué tan preparados están los mandos medios para sostener el cambio?', a: [
      'No tienen tiempo ni herramientas para impulsar cambios',
      'Apoyan, pero dependen de instrucciones del dueño o gerencia',
      'Pueden priorizar mejoras y acompañar al equipo en la adopción',
      'Actúan como champions internos y convierten pilotos en hábitos operativos'
    ]},
    { dim: 'procesos', q: 'Si revisamos el trabajo diario de terreno, ventas o atención, ¿dónde queda registrado?', a: [
      'En papel, WhatsApp, llamadas o memoria de las personas',
      'En Excel o formularios digitales, pero luego alguien vuelve a transcribir',
      'En un sistema digital que ordena el flujo y reduce doble digitación',
      'En un flujo automatizado donde la IA ayuda a capturar, clasificar o alertar'
    ]},
    { dim: 'procesos', q: '¿Cuánto cuesta realmente una actividad, cliente, cuadrilla o servicio?', a: [
      'Se estima tarde, con información incompleta o a fin de mes',
      'Se calcula en planillas, con bastante trabajo manual',
      'Se obtiene desde registros digitales con poco esfuerzo',
      'Se monitorea casi en tiempo real y el sistema alerta desviaciones'
    ]},
    { dim: 'procesos', q: '¿Qué ocurre cuando un cliente, trabajador o proveedor entrega información por WhatsApp?', a: [
      'Queda en el chat y alguien debe acordarse de hacer seguimiento',
      'Se copia manualmente a una planilla o sistema',
      'Existe un proceso claro para registrar y asignar la solicitud',
      'La información se clasifica automáticamente y genera tareas o respuestas sugeridas'
    ]},
    { dim: 'procesos', q: '¿Cómo se gestionan las excepciones o errores operativos?', a: [
      'Se detectan tarde, cuando alguien reclama o falta información',
      'Se revisan en reuniones o planillas cuando hay tiempo',
      'El sistema muestra pendientes, atrasos o inconsistencias',
      'La IA anticipa riesgos y propone acciones antes de que escalen'
    ]},
    { dim: 'datos', q: '¿Dónde vive la información crítica del negocio?', a: [
      'En cuadernos, archivos sueltos, chats y conocimiento de personas clave',
      'En planillas separadas por área, no siempre consistentes',
      'En sistemas o bases compartidas con responsables definidos',
      'En una fuente integrada y gobernada que alimenta reportes e IA'
    ]},
    { dim: 'datos', q: 'Si necesitas saber tus 10 clientes, labores o actividades más rentables, ¿cuánto toma?', a: [
      'Días o varias consultas a distintas personas',
      'Entre 30 minutos y algunas horas usando planillas',
      'Minutos, desde un dashboard o reporte confiable',
      'El sistema lo muestra automáticamente y explica cambios relevantes'
    ]},
    { dim: 'datos', q: '¿Qué tan confiables son los datos para tomar decisiones?', a: [
      'Se discute cuál número es correcto antes de decidir',
      'Sirven, pero hay errores frecuentes de digitación o versiones distintas',
      'Son suficientemente confiables para decisiones operativas recurrentes',
      'Tienen controles, trazabilidad y reglas claras para uso con IA'
    ]},
    { dim: 'datos', q: '¿Qué datos sensibles o personales maneja la empresa?', a: [
      'No están identificados ni clasificados',
      'Se conocen de forma informal, pero sin reglas escritas',
      'Hay criterios básicos de acceso, respaldo y privacidad',
      'Existe gobernanza: permisos, trazabilidad, consentimiento y criterios para IA'
    ]},
    { dim: 'tecnologia', q: '¿Qué herramientas sostienen la operación diaria?', a: [
      'Celular, WhatsApp, papel y archivos locales',
      'WhatsApp, Excel, correo y alguna nube o app simple',
      'Sistemas digitales conectados con contabilidad, ventas u operación',
      'Sistemas integrados con copilotos o agentes que ejecutan tareas específicas'
    ]},
    { dim: 'tecnologia', q: '¿Qué tan conectados están los sistemas entre sí?', a: [
      'No se conectan; las personas mueven la información manualmente',
      'Hay exportaciones/importaciones o copias manuales entre sistemas',
      'Hay integraciones estables para los flujos principales',
      'Hay APIs, automatizaciones y monitoreo de calidad del flujo de datos'
    ]},
    { dim: 'tecnologia', q: '¿Cómo prueban una nueva herramienta digital o de IA?', a: [
      'Se compra o descarta sin piloto formal',
      'Se prueba informalmente con 1 o 2 personas',
      'Se hace un piloto corto con criterios de éxito definidos',
      'Existe un método de experimentación: hipótesis, métricas, seguridad y escalamiento'
    ]},
    { dim: 'tecnologia', q: '¿Qué tan viable es financiar la próxima mejora digital?', a: [
      'Depende de caja disponible y no hay ruta de financiamiento',
      'Se han mirado fondos como Kit Digital o SERCOTEC, pero sin plan cerrado',
      'Hay opciones identificadas como SERCOTEC, CORFO o FIA según el proyecto',
      'La empresa arma proyectos financiables con aliados, métricas y cofinanciamiento definido'
    ]}
  ];

  var MATRIX = {
    estrategia: ['Sin plan formal', 'Iniciativas aisladas', 'Roadmap con responsables', 'IA como estrategia medible'],
    personas: ['Resistencia o baja adopción', 'Curiosidad individual', 'Capacitación y champions', 'Cultura de experimentación'],
    procesos: ['Papel, chat y retrabajo', 'Digitalización parcial', 'Flujos conectados', 'IA asiste y anticipa'],
    datos: ['Datos dispersos', 'Planillas por área', 'Fuente confiable', 'Gobernanza para IA'],
    tecnologia: ['Herramientas básicas', 'Nube y apps simples', 'Sistemas integrados', 'Copilotos y agentes']
  };

  var RECS = {
    estrategia: {
      1: { now: 'La IA todavía aparece como reacción a problemas puntuales. Sin foco estratégico, se vuelve una compra de herramientas más que una mejora del negocio.', next: 'Define un dolor medible para los próximos 30 días: horas perdidas, errores, ventas no atendidas o costos sin visibilidad. Ese dolor debe guiar el primer caso de uso.' },
      2: { now: 'Existe interés, pero el avance depende de iniciativas aisladas. La empresa necesita convertir intención en responsables, presupuesto y criterio de éxito.', next: 'Elige un sponsor interno, un caso de uso y una métrica de ROI. Formalízalo en una hoja simple antes de comprar tecnología.' },
      3: { now: 'Hay una base directiva para decidir con criterios de impacto. Esta es una buena etapa para pilotos cortos de IA con aprendizaje controlado.', next: 'Ejecuta un piloto de 4 semanas con hipótesis clara: qué tarea se mejora, cuánto tiempo ahorra y qué riesgo se controla.' },
      4: { now: 'La IA ya está conectada a la estrategia y se mide como capacidad competitiva. La prioridad pasa a escalar sin perder control.', next: 'Arma un portafolio de casos de uso con gobierno, métricas y presupuesto. Documenta resultados para financiamiento CORFO/FIA o alianzas.' }
    },
    personas: {
      1: { now: 'La barrera principal no es técnica, sino cultural. Si el equipo percibe la IA como amenaza, cualquier piloto tendrá baja adopción.', next: 'Partir por tareas que alivien trabajo repetitivo, no por reemplazo. Levanta 3 frustraciones del equipo y conviértelas en casos de uso seguros.' },
      2: { now: 'Hay curiosidad, pero depende de usuarios individuales. Falta convertir la experimentación en práctica compartida.', next: 'Nombra 1 o 2 champions internos y dales tiempo explícito para probar, documentar y enseñar usos simples de IA.' },
      3: { now: 'El equipo tiene disposición y cierta capacidad de adopción. Esta base permite mover pilotos a hábitos operativos.', next: 'Crea una rutina quincenal de aprendizaje: qué se probó, qué funcionó, qué dato faltó y qué proceso conviene automatizar.' },
      4: { now: 'La cultura ya empuja la mejora continua. Ese aprendizaje colectivo es una ventaja difícil de copiar.', next: 'Estandariza buenas prácticas, prompts, criterios de privacidad y onboarding para que la madurez no dependa de personas puntuales.' }
    },
    procesos: {
      1: { now: 'La operación todavía depende de papel, chat o memoria. La IA no puede crear valor estable si primero no existe un registro confiable.', next: 'Digitaliza un flujo crítico completo, no todos a la vez. Prioriza el que genere más retrabajo o pérdida de información.' },
      2: { now: 'Hay digitalización parcial, pero la doble digitación sigue consumiendo tiempo y generando errores.', next: 'Elimina un traspaso manual entre WhatsApp, Excel, operación o contabilidad. Esa conexión suele ser el ROI más rápido.' },
      3: { now: 'Los flujos principales ya están ordenados. Esto permite aplicar IA en clasificación, alertas, respuestas o análisis.', next: 'Identifica una tarea repetitiva con volumen semanal y prueba un asistente o automatización con supervisión humana.' },
      4: { now: 'Los procesos están listos para IA aplicada. La empresa puede anticipar desviaciones y operar por excepción.', next: 'Mide ahorro, calidad y tiempo de respuesta. Esos datos alimentan el caso de negocio para escalar o postular a fondos.' }
    },
    datos: {
      1: { now: 'La información crítica está dispersa. Antes de IA, el riesgo es decidir con datos incompletos o versiones contradictorias.', next: 'Define una fuente única para clientes, costos o actividades. Parte con el dato que más afecta margen o servicio.' },
      2: { now: 'Los datos existen, pero se fragmentan entre áreas. El problema es consistencia, no falta de información.', next: 'Asigna dueño a cada dato crítico y acuerda reglas básicas: dónde se registra, quién corrige y cuándo se actualiza.' },
      3: { now: 'La empresa ya tiene datos suficientemente confiables para casos de uso de IA acotados.', next: 'Prueba análisis predictivo o generación de reportes con datos internos, cuidando permisos y trazabilidad.' },
      4: { now: 'La gobernanza de datos permite usar IA con menor riesgo. Esta es una posición avanzada para empresas chilenas.', next: 'Formaliza políticas de privacidad, consentimiento, acceso y monitoreo de calidad para sostener la ventaja.' }
    },
    tecnologia: {
      1: { now: 'El stack actual limita la escalabilidad. WhatsApp y Excel pueden ayudar, pero no bastan para IA operacional.', next: 'Define stack mínimo: nube, registro digital del proceso crítico y conexión con contabilidad o ventas.' },
      2: { now: 'La empresa tiene herramientas, pero aún no funcionan como sistema. Comprar más software sin integración puede aumentar la carga.', next: 'Conecta dos herramientas que hoy obligan a copiar datos. Prioriza integración antes que nuevas licencias.' },
      3: { now: 'La base tecnológica permite pilotos de IA con bajo riesgo. El foco debe estar en integración y seguridad.', next: 'Implementa un copiloto o agente para una tarea específica: responder, clasificar, resumir, generar reportes o alertar.' },
      4: { now: 'La empresa está cerca de un modelo aumentado por IA. La prioridad es gobernar, monitorear y financiar el escalamiento.', next: 'Arma una ruta financiable con aliados: SERCOTEC para primera digitalización, CORFO para integración o FIA para innovación aplicada.' }
    }
  };

  var STAGE_NARRATIVE = {
    1: 'Etapa 1 — Analógica. La empresa opera con información dispersa, decisiones reactivas y baja base de datos. La prioridad no es comprar IA todavía: es ordenar el proceso crítico, capturar datos confiables y reducir retrabajo.',
    2: 'Etapa 2 — Principiante. Ya hay herramientas digitales y curiosidad, pero la adopción es parcial. La prioridad es conectar sistemas, asignar responsables y elegir un primer caso de uso de IA con retorno visible.',
    3: 'Etapa 3 — Intermedia. La empresa cuenta con procesos y datos suficientes para pilotos de IA. La prioridad es experimentar de forma controlada, medir impacto y preparar una ruta financiable.',
    4: 'Etapa 4 — Líder en IA. La IA se integra a la estrategia, la operación y la cultura. La prioridad es gobernar datos, escalar casos de uso y convertir la madurez en ventaja comercial y acceso a fondos.'
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
      .replace('Estrategia y liderazgo', 'Estrategia')
      .replace('Personas y cultura', 'Personas')
      .replace('Procesos y operación', 'Procesos')
      .replace('Datos y gobernanza', 'Datos')
      .replace('Tecnología e integración', 'Tecnología');
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
      '<h1 class="text-3xl md:text-4xl font-bold text-emerald-900 mb-3 tracking-tight">¿En qué etapa de madurez en IA está tu empresa?</h1>' +
      '<p class="text-gray-600 text-lg leading-relaxed mb-6">Diagnóstico gratuito de 20 preguntas (~8 minutos). Mide tu empresa en 5 dimensiones inspiradas en el ITD chileno y adaptadas a IA, con reporte visual y plan de acción personalizado. Sin pago. Sin tarjeta. Sin compromiso.</p>' +
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
      '<p class="text-xs text-gray-500 mt-6 leading-relaxed">Inspirado en el <strong>Índice de Transformación Digital (ITD)</strong> de Cámara de Comercio de Santiago, CORFO y PMG Business Improvement, adaptado al contexto de empresas chilenas y a casos de uso de IA por <a href="/blog/framework-ia-pymes-chile/" class="text-emerald-700 underline">Apps del Sur</a>.</p>';
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
    var chartSection =
      '<div class="report-charts grid md:grid-cols-2 gap-4 mb-6">' +
        '<div class="chart-card">' +
          '<div class="chart-head"><span>Reporte automático</span><h3>Telaraña de madurez</h3></div>' +
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
      '<div class="grid md:grid-cols-3 gap-3 mb-6">' +
        '<div class="insight-card bg-emerald-50 border border-emerald-100 rounded-xl p-4"><span class="block text-emerald-700 text-[11px] font-extrabold tracking-wider uppercase mb-1">Fortaleza</span><strong class="block text-emerald-950 leading-tight">' + insights.strongest.label + '</strong><p class="text-gray-600 text-sm leading-snug mt-1">Etapa ' + insights.strongest.stage + ' · ' + STAGES[insights.strongest.stage - 1] + '</p></div>' +
        '<div class="insight-card bg-amber-50 border border-amber-200 rounded-xl p-4"><span class="block text-amber-700 text-[11px] font-extrabold tracking-wider uppercase mb-1">Prioridad</span><strong class="block text-emerald-950 leading-tight">' + insights.weakest.label + '</strong><p class="text-gray-600 text-sm leading-snug mt-1">Primer foco para subir el ROI de IA.</p></div>' +
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
        '<input type="hidden" name="_subject" value="Nuevo lead — Diagnóstico Madurez IA" />' +
        '<input type="hidden" name="_next" value="https://appsdelsur.cl/diagnostico-madurez-ia/?ok=1" />' +
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
      payload._subject = 'Nuevo lead — Diagnóstico Madurez IA — ' + (fields.Empresa || 'Sin empresa');
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
    window.history.replaceState({}, '', '/diagnostico-madurez-ia/');
  }
  render();
})();
