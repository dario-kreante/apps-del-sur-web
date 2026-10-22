(function () {
  'use strict';

  const app = document.getElementById('assessment-app');
  const dataNode = document.getElementById('assessment-data');
  if (!app || !dataNode) return;

  let data;
  try { data = JSON.parse(dataNode.textContent || '{}'); } catch (_) { return; }
  const type = data.type === 'digital' ? 'digital' : 'ia';
  const defaultSource = type === 'ia' ? 'diagnostico-madurez-ia' : 'diagnostico-madurez-digital';
  const storageKey = `apps-del-sur-assessment-v3-${type}`;
  const legacyKeys = type === 'ia'
    ? ['apps-del-sur-madurez-ia-v2']
    : ['apps-del-sur-madurez-digital-v1'];
  const $ = (selector, root) => (root || app).querySelector(selector);
  const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const blank = () => ({ screen: 'intro', idx: 0, answers: {}, milestones: [], planDone: {}, started: null, finished: null, source: defaultSource, reportUrl: null });
  const validAnswers = (answers) => {
    const clean = {};
    if (answers && typeof answers === 'object') {
      Object.entries(answers).forEach(([index, value]) => {
        const idx = Number(index), answer = Number(value);
        if (Number.isInteger(idx) && idx >= 0 && idx < data.questions.length && Number.isInteger(answer) && answer >= 1 && answer <= 4) clean[idx] = answer;
      });
    }
    return clean;
  };

  function readState() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
      if (saved && typeof saved === 'object') return normalize(saved);
    } catch (_) {}
    for (const key of legacyKeys) {
      try {
        const old = JSON.parse(localStorage.getItem(key) || 'null');
        if (old && typeof old === 'object') {
          const migrated = normalize(old);
          try { localStorage.setItem(storageKey, JSON.stringify(migrated)); } catch (_) {}
          return migrated;
        }
      } catch (_) {}
    }
    return blank();
  }
  function normalize(raw) {
    const state = blank();
    state.answers = validAnswers(raw.answers);
    state.idx = Math.max(0, Math.min(data.questions.length - 1, Math.floor(Number(raw.idx) || 0)));
    state.started = raw.started || null;
    state.finished = raw.finished || null;
    state.source = defaultSource;
    state.campaignSource = typeof raw.campaignSource === 'string' ? raw.campaignSource.slice(0,120) : null;
    state.milestones = Array.isArray(raw.milestones) ? raw.milestones.filter((key) => data.dimKeys.includes(key)) : [];
    if (data.dimKeys.includes(raw.pendingMilestone)) state.pendingMilestone = raw.pendingMilestone;
    state.planDone = raw.planDone && typeof raw.planDone === 'object' ? raw.planDone : {};
    state.reportUrl = typeof raw.reportUrl === 'string' ? raw.reportUrl : null;
    const answered = Object.keys(state.answers).length;
    if (raw.screen === 'results' || raw.screen === 'thanks' || raw.screen === 'lead') state.screen = answered === data.questions.length ? 'results' : 'quiz';
    else if (raw.screen === 'milestone' && answered > 0 && state.pendingMilestone) state.screen = 'milestone';
    else if (raw.screen === 'quiz' && answered) state.screen = 'quiz';
    return state;
  }
  let state = readState();
  let modalInertState = null;
  const save = () => { try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch (_) {} };
  const answeredCount = () => Object.keys(state.answers).length;
  const currentDim = (idx) => data.questions[idx]?.dim || data.dimKeys[0];
  const getDimIndex = (key) => Math.max(0, data.dimKeys.indexOf(key));
  const stages = data.stages;
  const icons = {
    estrategia: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
    personas: '<circle cx="9" cy="8" r="3"/><circle cx="16.5" cy="9" r="2.5"/><path d="M3.5 19a5.5 5.5 0 0111 0M14 19a4 4 0 017.5-1.5"/>',
    procesos: '<rect x="3" y="4" width="6" height="6" rx="1.5"/><rect x="15" y="14" width="6" height="6" rx="1.5"/><path d="M9 7h5a3 3 0 013 3v4M12 17H7a3 3 0 01-3-3v-1"/>',
    datos: '<ellipse cx="12" cy="6" rx="7" ry="2.8"/><path d="M5 6v6c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8V6M5 12v6c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-6"/>',
    tecnologia: '<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/>',
    clientes: '<path d="M4 5h16v10H9l-5 4z"/><path d="M8 9h8M8 12h5"/>',
    herramientas: '<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/>',
  };
  const medalTiers = [
    { fill: '#f3f4f6', stroke: '#9ca3af', ink: '#6b7280' },
    { fill: '#ecfdf5', stroke: '#10b981', ink: '#059669' },
    { fill: '#d1fae5', stroke: '#047857', ink: '#047857' },
    { fill: '#fef3c7', stroke: '#b45309', ink: '#b45309' },
  ];
  const exampleAnswers = type === 'ia'
    ? { estrategia: [3, 3, 4, 3], personas: [2, 2, 3, 2], procesos: [3, 2, 3, 3], datos: [2, 2, 2, 1], tecnologia: [3, 3, 2, 3] }
    : { estrategia: [2, 3, 2, 2], clientes: [3, 3, 2, 3], procesos: [2, 1, 2, 2], datos: [1, 2, 2, 1], herramientas: [2, 3, 2, 2] };

  function medal(key, stage, size, locked) {
    const tier = locked ? { fill: '#f3f4f6', stroke: '#d1d5db', ink: '#9ca3af' } : medalTiers[Math.max(0, Math.min(3, stage - 1))];
    const glyph = icons[key] || '';
    return `<svg class="assessment-medal-svg" width="${size}" height="${size}" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 4l24 14v28L32 60 8 46V18z" fill="${tier.fill}" stroke="${tier.stroke}" stroke-width="2.5"/><g transform="translate(20 20)" stroke="${tier.ink}" fill="none" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><svg width="24" height="24" viewBox="0 0 24 24">${glyph}</svg></g></svg>`;
  }
  function radarSVG(per, size, labels, ariaLabel) {
    const pad = labels ? 45 : 8, radius = (size - pad * 2) / 2, cx = size / 2, cy = size / 2;
    const point = (index, r) => { const angle = -Math.PI / 2 + index * 2 * Math.PI / per.length; return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)]; };
    const polygon = (fraction) => per.map((_, index) => point(index, radius * fraction).map((n) => n.toFixed(1)).join(',')).join(' ');
    const dots = per.map((dim, index) => point(index, radius * Math.max(.06, dim.pct / 100)).map((n) => n.toFixed(1)).join(','));
    let svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="${esc(ariaLabel || 'Vista de ejemplo del radar de madurez')}" style="max-width:100%;height:auto">`;
    [1, .75, .5, .25].forEach((fraction) => { svg += `<polygon points="${polygon(fraction)}" fill="none" stroke="#dce8df"/>`; });
    per.forEach((_, index) => { const [x, y] = point(index, radius); svg += `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#dce8df"/>`; });
    svg += `<polygon points="${dots.join(' ')}" fill="#67a77b" fill-opacity=".22" stroke="#176b4d" stroke-width="2.4" stroke-linejoin="round"/>`;
    per.forEach((dim, index) => { const [x, y] = point(index, radius * Math.max(.06, dim.pct / 100)); svg += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.4" fill="#176b4d" stroke="#fff" stroke-width="1.5"/><title>${esc(dim.label)} ${dim.pct}/100</title>`; });
    if (labels) per.forEach((dim, index) => { const [x, y] = point(index, radius + 13); const anchor = Math.abs(x - cx) < 4 ? 'middle' : x > cx ? 'start' : 'end'; svg += `<text x="${x.toFixed(1)}" y="${(y + 3).toFixed(1)}" text-anchor="${anchor}" fill="#526359" font-size="9">${esc(dim.label.split(' ')[0])}</text>`; });
    return `${svg}</svg>`;
  }
  function scoreRing(pct) {
    const radius = 74, angle = (-90 + 360 * Math.min(pct, 99.9) / 100) * Math.PI / 180;
    const x = (90 + radius * Math.cos(angle)).toFixed(1), y = (90 + radius * Math.sin(angle)).toFixed(1);
    const large = pct > 50 ? 1 : 0;
    return `<svg width="154" height="154" viewBox="0 0 180 180" role="img" aria-label="Puntaje estimado ${pct} de 100"><circle cx="90" cy="90" r="${radius}" stroke="#32674f" stroke-width="14" fill="none"/>${pct > 0 ? `<path d="M90 16 A${radius} ${radius} 0 ${large} 1 ${x} ${y}" stroke="#a7f3d0" stroke-width="14" fill="none" stroke-linecap="round"/>` : ''}<text x="90" y="99" text-anchor="middle" fill="#fff" style="font:700 42px system-ui">${pct}</text><text x="90" y="123" text-anchor="middle" fill="#cfe5d6" style="font:500 12px system-ui">de 100</text></svg>`;
  }
  function examplePreview() {
    const perDim = data.dimKeys.map((key) => {
      const values = exampleAnswers[key];
      const avg = values.reduce((sum, value) => sum + value, 0) / values.length;
      return { key, label: data.dimLabels[key], avg, stage: stageFromAvg(avg), pct: Math.round(((avg - 1) / 3) * 100) };
    });
    const avg = Object.values(exampleAnswers).flat().reduce((sum, value) => sum + value, 0) / 20;
    const stage = stageFromAvg(avg), pct = Math.round(((avg - 1) / 3) * 100);
    return { perDim, avg, stage, pct };
  }

  function stageFromAvg(avg) {
    if (avg < 1.6) return 1;
    if (avg < 2.4) return 2;
    if (avg < 3.3) return 3;
    return 4;
  }
  function computeResults() {
    const perDim = data.dimKeys.map((key) => {
      const rows = data.questions.map((question, index) => ({ question, answer: state.answers[index] })).filter((row) => row.question.dim === key && row.answer != null);
      const avg = rows.length ? rows.reduce((sum, row) => sum + row.answer, 0) / rows.length : 0;
      return { key, label: data.dimLabels[key], avg, stage: stageFromAvg(avg) };
    });
    const total = data.questions.reduce((sum, _, index) => sum + (Number(state.answers[index]) || 0), 0);
    const overallAvg = total / data.questions.length;
    const sorted = perDim.slice().sort((a, b) => a.avg - b.avg);
    const min = sorted[0].avg, max = sorted[sorted.length - 1].avg;
    const weakest = perDim.filter((dim) => dim.avg === min);
    const strongest = perDim.filter((dim) => dim.avg === max);
    return {
      perDim, overallAvg, overallStage: stageFromAvg(overallAvg),
      scorePercent: Math.round(((Math.max(1, Math.min(4, overallAvg)) - 1) / 3) * 100),
      spread: max - min, weakest, strongest, tied: weakest.length > 1 || strongest.length > 1,
    };
  }
  function buildSummary(result) {
    return [
      `DIAGNÓSTICO ${type === 'ia' ? 'DE MADUREZ EN IA' : 'DE MADUREZ DIGITAL'} — APPS DEL SUR`, '',
      `Etapa global: ${result.overallStage} — ${stages[result.overallStage - 1]}`,
      `Puntaje promedio: ${result.overallAvg.toFixed(2)} / 4`, '', 'Por dimensión:',
      ...result.perDim.map((dim) => `• ${dim.label}: Etapa ${dim.stage} (${stages[dim.stage - 1]}) — ${dim.avg.toFixed(2)}/4`), '',
      'Tu ruta de 90 días:',
      ...result.perDim.slice().sort((a,b)=>a.avg-b.avg).slice(0,3).map((dim,index) => `• Días ${index*30+1}–${(index+1)*30} · ${dim.label}: ${data.recommendations[dim.key][dim.stage].next}`), '',
      ...(state.campaignSource ? [`Fuente de campaña: ${state.campaignSource}`, ''] : []),
      `Generado: ${new Date().toLocaleDateString('es-CL')} · ${location.origin}/${defaultSource}/`,
    ].join('\n');
  }
  function render() {
    save();
    if (state.screen === 'intro') renderIntro();
    else if (state.screen === 'quiz') renderQuiz();
    else if (state.screen === 'milestone') renderMilestone();
    else renderResults();
  }
  function renderIntro() {
    const title = type === 'ia' ? '¿Qué tan preparada está tu empresa para incorporar IA?' : '¿Qué tan digital está la operación de tu empresa?';
    const description = type === 'ia'
      ? 'Descubre qué está funcionando, dónde conviene avanzar y por qué acción empezar. Completa cinco etapas y llévate una ruta de mejora para los próximos 90 días.'
      : 'Descubre dónde se pierde tiempo en tu operación y cuál es tu siguiente paso digital. Completa cinco etapas y llévate una ruta de mejora para los próximos 90 días.';
    const benefits = type === 'ia'
      ? ['Tu nivel entre 4 etapas, de Analógica a Líder en IA', 'Mapa de 5 dimensiones con fortalezas relativas y brechas', 'Tres acciones concretas para iniciar una mejora']
      : ['Tu nivel entre 4 etapas, de Papel y WhatsApp a Digital Optimizada', 'Mapa de 5 dimensiones de madurez digital', 'Tres acciones concretas para avanzar en tu operación'];
    const example = examplePreview();
    const route = data.dimKeys.map((key, index) => `<div class="assessment-route-node">${medal(key, 1, 44, true)}<b>${esc(data.dimLabels[key].split(' y ')[0])}</b></div>${index < data.dimKeys.length - 1 ? '<span class="assessment-route-link" aria-hidden="true"></span>' : ''}`).join('');
    const previewMedals = data.dimKeys.map((key, index) => medal(key, example.perDim[index].stage, 44, index > 2)).join('');
    app.innerHTML = `<section class="assessment-hero"><div>
        <span class="assessment-eyebrow">Diagnóstico gratuito · 20 preguntas · ~8 min</span>
        <h1 class="assessment-title">${title}</h1><p class="assessment-lede">${description}</p>
        <ul class="assessment-benefits">${benefits.map((benefit) => `<li><span aria-hidden="true">✓</span>${esc(benefit)}</li>`).join('')}</ul>
        <div class="assessment-actions"><button class="assessment-button" id="assessment-start">${answeredCount() ? 'Continuar mi diagnóstico' : 'Comenzar mi diagnóstico'} →</button><span class="assessment-small">Resultado inmediato · puedes verlo sin dejar tus datos</span></div>
        ${answeredCount() && answeredCount() < data.questions.length ? `<div class="assessment-note" role="status">Tienes ${answeredCount()} de 20 respuestas guardadas en este navegador. <button type="button" id="assessment-restart" class="assessment-inline-link">Empezar de cero</button></div>` : ''}
      </div><aside class="assessment-preview" aria-label="Vista de ejemplo del reporte"><div class="assessment-preview-top"><span>Esto te llevas al terminar</span><span class="assessment-example-tag">EJEMPLO</span></div><div class="assessment-preview-body">${radarSVG(example.perDim, 176, false)}<div><span class="assessment-eyebrow">Tu nivel</span><div class="assessment-preview-level">${esc(stages[example.stage - 1])}</div><div class="assessment-small">Nivel ${example.stage} de 4 · ${example.pct} / 100</div><div class="assessment-xp"><span style="width:${example.pct}%"></span></div><p class="assessment-small">La siguiente acción importa más que el puntaje.</p></div></div><div class="assessment-small" style="font-weight:700;margin:.7rem 0 .4rem">Insignias de ejemplo · 3 de 5</div><div class="assessment-medal-row">${previewMedals}</div></aside></section>
      <section class="assessment-route" aria-label="Tu ruta de cinco etapas"><h2 class="assessment-route-title">Tu ruta: 5 etapas cortas <span class="assessment-small" style="font-weight:400">· una medalla por cada etapa completada</span></h2><div class="assessment-route-track">${route}</div></section>
      <div class="assessment-note"><strong>Responde según la realidad actual.</strong> No hay respuestas buenas o malas. Este diagnóstico es una autoevaluación orientativa, útil para decidir qué mejorar primero.</div>`;
    $('#assessment-start').addEventListener('click', () => {
      if (!state.started) state.started = Date.now();
      state.screen = 'quiz';
      const next = data.questions.findIndex((_, index) => state.answers[index] == null);
      state.idx = next < 0 ? 0 : next;
      if (answeredCount() === data.questions.length) state.screen = 'results';
      render();
    });
    $('#assessment-restart')?.addEventListener('click', () => {
      if (!window.confirm('¿Borrar tus respuestas guardadas y empezar de nuevo?')) return;
      state = blank(); render();
    });
  }
  function renderSticky() {
    const q = data.questions[state.idx];
    const groupIndex = getDimIndex(q.dim);
    const questionInDimension = data.questions.slice(0, state.idx + 1).filter((item) => item.dim === q.dim).length;
    const totalInDimension = data.questions.filter((item) => item.dim === q.dim).length;
    const chips = data.dimKeys.map((key, index) => {
      const done = data.questions.filter((item, qi) => item.dim === key && state.answers[qi] != null).length === data.questions.filter((item) => item.dim === key).length;
      const classes = ['assessment-stage-chip', index === groupIndex ? 'is-current' : '', done ? 'is-earned' : ''].filter(Boolean).join(' ');
      return `<span class="${classes}" ${index === groupIndex ? 'aria-current="step"' : ''}>${medal(key, done ? stageFromAvg(data.questions.map((q,i)=>q.dim===key ? state.answers[i] : null).filter(v=>v!=null).reduce((a,b)=>a+b,0)/4) : 1, 24, !done)}<span>${esc(data.dimLabels[key])}</span></span>`;
    }).join('');
    const pct = Math.round((answeredCount() / data.questions.length) * 100);
    return `<div class="assessment-sticky"><div class="assessment-sticky-line"><strong>${answeredCount()} de ${data.questions.length}</strong><span>respondidas</span><span style="margin-left:auto">${questionInDimension} / ${totalInDimension} en esta dimensión</span></div><div class="assessment-progress" role="progressbar" aria-label="Progreso del diagnóstico" aria-valuemin="0" aria-valuemax="${data.questions.length}" aria-valuenow="${answeredCount()}"><div class="assessment-progress-fill" style="width:${pct}%"></div></div><div class="assessment-stage-map">${chips}</div></div>`;
  }
  function renderQuiz() {
    const question = data.questions[state.idx];
    const selected = Number(state.answers[state.idx]) || 0;
    const options = question.a.map((answer, index) => `<label class="assessment-option"><input type="radio" name="answer-${state.idx}" value="${index + 1}" ${selected === index + 1 ? 'checked' : ''}><span>${esc(answer)}</span></label>`).join('');
    app.innerHTML = `${renderSticky()}<p class="assessment-dimension">${esc(data.dimLabels[question.dim])}</p><h1 class="assessment-question" id="assessment-question" tabindex="-1">${esc(question.q)}</h1>
      <p class="assessment-small">Elige la opción que más se parece a lo que pasa hoy.</p><fieldset class="assessment-option-list" aria-labelledby="assessment-question"><legend class="sr-only">Elige una respuesta</legend>${options}</fieldset>
      <div class="assessment-nav"><button id="assessment-back" class="assessment-button-secondary" ${state.idx === 0 ? 'disabled aria-disabled="true"' : ''}>← Atrás</button><button id="assessment-next" class="assessment-button" ${selected ? '' : 'disabled aria-disabled="true"'}>${state.idx === data.questions.length - 1 ? 'Ver resultado' : 'Siguiente'} →</button></div>`;
    app.querySelectorAll('input[type=radio]').forEach((input) => input.addEventListener('change', (event) => {
      const value = Number(event.currentTarget.value);
      if (state.answers[state.idx] !== value) state.reportUrl = null;
      state.answers[state.idx] = value; save();
      const next = $('#assessment-next'); next.disabled = false; next.removeAttribute('aria-disabled');
      const progress = $('.assessment-progress-fill'); if (progress) progress.style.width = `${Math.round(answeredCount() / data.questions.length * 100)}%`;
      const bar = $('.assessment-progress'); if (bar) bar.setAttribute('aria-valuenow', String(answeredCount()));
      const line = $('.assessment-sticky-line strong'); if (line) line.textContent = `${answeredCount()} de ${data.questions.length}`;
    }));
    $('#assessment-back').addEventListener('click', () => { if (state.idx > 0) { state.idx -= 1; render(); focusQuestion(); } });
    $('#assessment-next').addEventListener('click', () => {
      if (state.answers[state.idx] == null) return;
      if (state.idx === data.questions.length - 1) {
        state.pendingMilestone = question.dim; state.screen = 'milestone'; save(); render(); return;
      }
      const key = question.dim;
      const nextQuestion = data.questions[state.idx + 1];
      const lastInDimension = nextQuestion && nextQuestion.dim !== key;
      if (lastInDimension && !state.milestones.includes(key)) {
        state.pendingMilestone = key; state.screen = 'milestone'; render(); return;
      }
      state.idx += 1; render(); focusQuestion();
    });
  }
  function focusQuestion() { const heading = $('#assessment-question'); if (heading) heading.focus({ preventScroll: true }); window.scrollTo({ top: app.getBoundingClientRect().top + window.scrollY - 82, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); }
  function renderMilestone() {
    const key = data.dimKeys.includes(state.pendingMilestone) ? state.pendingMilestone : currentDim(state.idx);
    const label = data.dimLabels[key], idx = getDimIndex(key), done = idx + 1, questions = data.questions.map((question, qIdx) => ({ question, answer: state.answers[qIdx] })).filter((row) => row.question.dim === key && row.answer != null);
    const avg = questions.length ? questions.reduce((sum, row) => sum + row.answer, 0) / questions.length : 1;
    const stage = stageFromAvg(avg), insight = data.recommendations[key][stage].now;
    const isLast = idx === data.dimKeys.length - 1;
    const nextLabel = isLast ? 'Ver mi resultado →' : `Seguir con ${data.dimLabels[data.dimKeys[idx + 1]]} →`;
    const overlay = document.createElement('div');
    overlay.className = 'assessment-overlay'; overlay.id = 'assessment-medal-dialog';
    overlay.setAttribute('role', 'dialog'); overlay.setAttribute('aria-modal', 'true'); overlay.setAttribute('aria-labelledby', 'assessment-milestone-title');
    overlay.innerHTML = `<section class="assessment-mcard"><div class="assessment-medal-big">${medal(key, stage, 120, false)}</div><div class="assessment-eyebrow">Etapa completada · ${done} de 5</div><h2 id="assessment-milestone-title">${esc(label)}</h2><span class="assessment-stage-pill">Tu punto de partida: ${esc(stages[stage - 1])}</span><div class="assessment-milestone-insight"><span class="assessment-eyebrow">Lo que muestran tus respuestas</span><p>${esc(insight)}</p></div><div class="assessment-milestone-progress" aria-label="${done} de 5 dimensiones completadas">${data.dimKeys.map((_, item) => `<i class="${item < done ? 'is-done' : ''}"></i>`).join('')}<span>${done * 20}%</span></div><button class="assessment-button" id="assessment-continue">${esc(nextLabel)}</button><span class="assessment-small">Enter para continuar · Esc para revisar esta respuesta</span></section>`;
    modalInertState = Array.from(document.body.children).filter((child) => child !== overlay).map((child) => ({ child, inert: child.inert }));
    modalInertState.forEach(({ child }) => { child.inert = true; });
    document.body.appendChild(overlay);
    const continueButton = $('#assessment-continue', overlay);
    const close = (continueForward) => {
      document.removeEventListener('keydown', onKey, true);
      overlay.remove();
      (modalInertState || []).forEach(({ child, inert }) => { child.inert = inert; });
      modalInertState = null;
      if (continueForward) {
        state.milestones = [...new Set([...state.milestones, key])]; delete state.pendingMilestone;
        if (isLast) { state.finished = Date.now(); state.screen = 'results'; render(); celebrate(); }
        else { state.idx += 1; state.screen = 'quiz'; render(); focusQuestion(); }
      } else {
        state.screen = 'quiz'; render(); focusQuestion();
      }
    };
    const onKey = (event) => {
      if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); close(false); return; }
      if (event.key === 'Enter') { event.preventDefault(); close(true); return; }
      if (event.key !== 'Tab') return;
      const focusable = Array.from(overlay.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'));
      if (!focusable.length) { event.preventDefault(); overlay.focus(); return; }
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey, true);
    continueButton.addEventListener('click', () => close(true));
    continueButton.focus();
  }
  function resultDimCard(dim) {
    const recommendation = data.recommendations[dim.key][dim.stage];
    return `<article class="assessment-result-dim"><h3>${esc(dim.label)}</h3><span class="assessment-small">Etapa ${dim.stage} · ${esc(stages[dim.stage - 1])} · ${dim.avg.toFixed(1)} / 4</span><div class="assessment-bar" aria-label="Nivel de ${esc(dim.label)}"><span style="width:${Math.round((dim.avg - 1) / 3 * 100)}%"></span></div><p>${esc(recommendation.now)}</p></article>`;
  }
  function renderResults() {
    if (answeredCount() !== data.questions.length) { state.screen = 'quiz'; state.idx = data.questions.findIndex((_, index) => state.answers[index] == null); render(); focusQuestion(); return; }
    const result = computeResults();
    const tieStrength = result.strongest.length > 1;
    const tieFocus = result.weakest.length > 1;
    const strongestLabel = tieStrength ? `Empate entre ${result.strongest.map((dim) => dim.label).join(', ')}` : result.strongest[0].label;
    const weakestLabel = tieFocus ? `Empate entre ${result.weakest.map((dim) => dim.label).join(', ')}` : result.weakest[0].label;
    const focusDim = result.weakest[0];
    const priority = data.recommendations[focusDim.key][focusDim.stage].next;
    const balanced = result.spread < 0.001;
    const tieText = !balanced && tieFocus ? ` Tus dimensiones prioritarias están empatadas (${result.weakest.map((dim) => dim.label).join(' y ')}); puedes comenzar por la acción sugerida y elegir según la urgencia de tu operación.` : '';
    const dimensions = result.perDim.map(resultDimCard).join('');
    const quests = result.perDim.slice().sort((a, b) => a.avg - b.avg).slice(0, 3);
    const tasks = quests.map((dim, index) => {
      const task = data.recommendations[dim.key][dim.stage].next;
      const key = `${dim.key}:${dim.stage}`;
      const dayRange = ['Días 1–30', 'Días 31–60', 'Días 61–90'][index];
      return `<label class="assessment-task"><input type="checkbox" data-plan-key="${esc(key)}" ${state.planDone[key] ? 'checked' : ''}><span><b>${dayRange} · ${esc(dim.label)}:</b> ${esc(task)}</span></label>`;
    }).join('');
    const insightsMarkup = balanced
      ? '<div class="assessment-result-dim" style="grid-column:1/-1"><span class="assessment-eyebrow">Lectura del perfil</span><h3 style="margin:.4rem 0">Perfil equilibrado</h3><p>Todas las dimensiones obtuvieron el mismo puntaje. No hay una fortaleza ni una brecha relativa clara; prioriza el proceso que hoy más tiempo, errores o trabajo duplicado genera.</p></div>'
      : `<div class="assessment-result-dim"><span class="assessment-eyebrow">Fortaleza relativa</span><h3 style="margin:.4rem 0">${esc(strongestLabel)}</h3><p>Etapa ${result.strongest[0].stage} · ${tieStrength ? 'Dimensiones con mayor puntaje' : esc(stages[result.strongest[0].stage - 1])}</p></div><div class="assessment-result-dim"><span class="assessment-eyebrow">Área a priorizar</span><h3 style="margin:.4rem 0">${esc(weakestLabel)}</h3><p>${result.spread.toFixed(1)} puntos de diferencia entre dimensiones. Aquí conviene iniciar la mejora.</p></div>`;
    const resultMedals = result.perDim.map((dim) => `<article class="assessment-result-medal ${!balanced && result.weakest.some((weak) => weak.key === dim.key) ? 'is-focus' : ''}">${medal(dim.key, dim.stage, 60, false)}<b>${esc(dim.label)}</b><span>${esc(stages[dim.stage - 1])} · ${dim.avg.toFixed(1)}/4</span></article>`).join('');
    const ladder = stages.map((stageName, index) => {
      const stageNum = index + 1;
      const className = stageNum < result.overallStage ? 'past' : stageNum === result.overallStage ? 'current' : stageNum === result.overallStage + 1 ? 'next' : 'future';
      const eyebrow = className === 'current' ? `Tu nivel · ${stageNum}` : className === 'next' ? `Siguiente · ${stageNum}` : `Etapa ${stageNum}`;
      return `<div class="assessment-rung ${className}"><small>${eyebrow}</small><b>${esc(stageName)}</b></div>`;
    }).join('');
    const crossLink = type === 'ia'
      ? '<a class="assessment-link-button" href="/diagnostico-madurez-digital/">Explorar madurez digital →</a>'
      : '<a class="assessment-link-button" href="/diagnostico-madurez-ia/">Explorar madurez en IA →</a>';
    app.innerHTML = `<div class="assessment-eyebrow">Recorrido completado · ${new Date().toLocaleDateString('es-CL')}</div>
      <section class="assessment-result-hero"><div class="assessment-result-top">${scoreRing(result.scorePercent)}<div><span class="assessment-small" style="color:#d8e9dc">RUTA COMPLETADA · 5 DE 5 ETAPAS</span><h1 class="assessment-title" style="color:white;margin:.25rem 0">${esc(stages[result.overallStage - 1])}</h1><p style="color:#e8f2eb;line-height:1.6;margin:.4rem 0 0">${esc(data.narrative[result.overallStage])}</p></div></div><div class="assessment-ladder">${ladder}</div><div class="assessment-next-hint">${result.overallStage < 4 ? `Tu siguiente etapa es <b>${esc(stages[result.overallStage])}</b>. Empieza por una mejora real en tu operación.` : 'Estás en la etapa más alta. Enfoca tu plan en sostener los avances.'}</div></section>
      <div class="assessment-result-grid">${insightsMarkup}</div>
      <section class="assessment-first-action"><strong>${balanced ? 'Un perfil equilibrado' : 'Tu siguiente movimiento'}</strong><h3>${balanced ? 'Elige dónde empezar' : `Empieza por ${esc(focusDim.label)}`}</h3><p style="margin:.4rem 0 0;color:#554a37;line-height:1.55">${balanced ? 'El puntaje quedó igual en todas las dimensiones. ' : 'Esta dimensión tuvo la puntuación más baja en tus respuestas. '}${esc(priority)}${esc(tieText)}</p></section>
      <div class="assessment-no-print" style="display:flex;flex-wrap:wrap;gap:.65rem;margin:1rem 0 1.4rem"><button class="assessment-button" id="assessment-print">Descargar resultado en PDF</button><button class="assessment-button-secondary" id="assessment-copy">Copiar resumen</button>${crossLink}</div>
      <h2 style="font-size:1.35rem;margin:1.5rem 0 .6rem">Tu mapa de avances</h2><p class="assessment-small">Cinco medallas · una lectura por dimensión. El borde ámbar señala las brechas con menor puntaje.</p><div class="assessment-result-medals">${resultMedals}</div>
      <section class="assessment-result-charts"><div class="assessment-chart-card"><span class="assessment-eyebrow">Mapa de madurez</span>${radarSVG(result.perDim.map((dim) => ({ ...dim, pct: Math.round((dim.avg - 1) / 3 * 100) })), 250, true, 'Radar de las cinco dimensiones de tu resultado')}</div><div class="assessment-chart-card"><span class="assessment-eyebrow">Puntaje por dimensión</span>${result.perDim.map((dim) => `<div class="assessment-chart-row"><div><span>${esc(dim.label)}</span><b>${Math.round((dim.avg - 1) / 3 * 100)}%</b></div><div class="assessment-bar"><span style="width:${Math.round((dim.avg - 1) / 3 * 100)}%"></span></div></div>`).join('')}</div></section>
      <section class="assessment-plan"><h2 style="font-size:1.25rem;margin:.1rem 0 .3rem">Tu ruta de 90 días</h2><p class="assessment-small">Tres acciones iniciales para los próximos meses. Marca las que completes; el avance queda guardado en este navegador.</p>${tasks}</section>
      ${state.reportUrl ? `<p class="assessment-success">El envío quedó registrado y el reporte está disponible aquí: <a href="${esc(state.reportUrl)}" target="_blank" rel="noopener noreferrer">abrir reporte</a>.</p>` : ''}
      <section class="assessment-form" aria-labelledby="assessment-form-title"><h2 id="assessment-form-title" style="font-size:1.25rem">¿Quieres dejar tus datos?</h2><p class="assessment-small">Puedes enviarnos tus resultados para registrarlos y conversar sobre próximos pasos. El resultado y el PDF siguen disponibles aunque no completes este formulario. No enviamos el informe por correo automáticamente.</p><form id="assessment-lead-form" novalidate><div class="assessment-form-grid">
        <div class="assessment-field"><label for="lead-name">Nombre completo *</label><input id="lead-name" name="Nombre" autocomplete="name" required></div>
        <div class="assessment-field"><label for="lead-email">Correo electrónico *</label><input id="lead-email" name="Email" type="email" autocomplete="email" required></div>
        <div class="assessment-field"><label for="lead-company">Empresa *</label><input id="lead-company" name="Empresa" autocomplete="organization" required></div>
        <div class="assessment-field"><label for="lead-phone">Teléfono / WhatsApp</label><input id="lead-phone" name="Telefono" type="tel" autocomplete="tel"></div>
        <div class="assessment-field"><label for="lead-sector">Sector *</label><select id="lead-sector" name="Sector" required><option value="">Selecciona…</option><option>Agrícola / Viticultura</option><option>Frutícola</option><option>Servicios</option><option>Comercio / Retail</option><option>Industrial / Manufactura</option><option>Construcción</option><option>Salud</option><option>Educación</option><option>Otro</option></select></div>
        <div class="assessment-field"><label for="lead-size">Tamaño de empresa *</label><select id="lead-size" name="Tamano" required><option value="">Selecciona…</option><option>Microempresa (1-9 personas)</option><option>Pequeña (10-49 personas)</option><option>Mediana (50-199 personas)</option><option>Grande (200+ personas)</option></select></div>
        <div class="assessment-field"><label for="lead-region">Región</label><select id="lead-region" name="Region"><option value="">Selecciona…</option><option>Metropolitana</option><option>Valparaíso</option><option>O'Higgins</option><option>Maule</option><option>Ñuble</option><option>Biobío</option><option>Araucanía</option><option>Los Ríos</option><option>Los Lagos</option><option>Otra</option></select></div>
      </div><label class="assessment-consent"><input name="Consentimiento" type="checkbox" required><span>Acepto que Apps del Sur procese estos datos para registrar mi diagnóstico y contactarme respecto de esta solicitud. Puedo pedir que eliminen mis datos.</span></label><p id="assessment-form-message" aria-live="polite" role="status"></p><div class="assessment-actions" style="margin-top:1rem"><button type="submit" class="assessment-button">Enviar mis datos</button></div></form></section>
      <div class="assessment-actions assessment-no-print" style="justify-content:flex-end;margin-top:1rem"><button id="assessment-review" class="assessment-button-secondary">← Revisar respuestas</button><button id="assessment-reset" class="assessment-button-secondary">Empezar de nuevo</button></div>`;

    app.querySelectorAll('[data-plan-key]').forEach((input) => input.addEventListener('change', (event) => { state.planDone[event.currentTarget.dataset.planKey] = event.currentTarget.checked; save(); }));
    $('#assessment-print').addEventListener('click', () => document.dispatchEvent(new CustomEvent('assessment:download-pdf', {detail:{summary:buildSummary(result),type}}))); 
    $('#assessment-copy').addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(buildSummary(result)); announce('Resumen copiado.'); }
      catch (_) { announce('No se pudo copiar automáticamente. Puedes seleccionar el resultado y copiarlo.'); }
    });
    $('#assessment-review').addEventListener('click', () => { state.screen = 'quiz'; state.idx = 0; render(); focusQuestion(); });
    $('#assessment-reset').addEventListener('click', () => {
      if (!window.confirm('¿Borrar las respuestas y el plan guardado en este navegador?')) return;
      state = blank(); render();
    });
    $('#assessment-lead-form').addEventListener('submit', (event) => submitLead(event, result));
    const heading = app.querySelector('h1');
    heading.tabIndex = -1; heading.focus({preventScroll:true});
    window.scrollTo({top: app.getBoundingClientRect().top + window.scrollY - 82, behavior:'auto'});
  }
  function announce(message) {
    let status = $('#assessment-announce');
    if (!status) { status = document.createElement('p'); status.id = 'assessment-announce'; status.className = 'assessment-success'; status.setAttribute('role', 'status'); status.setAttribute('aria-live', 'polite'); app.prepend(status); }
    status.textContent = message;
  }
  async function submitLead(event, result) {
    event.preventDefault();
    const form = event.currentTarget;
    const message = $('#assessment-form-message');
    const button = form.querySelector('[type="submit"]');
    message.className = ''; message.textContent = '';
    if (!form.reportValidity()) return;
    const formValues = Object.fromEntries(new FormData(form).entries());
    const insights = result;
    const answersDetail = data.questions.map((question, qIdx) => {
      const stage = Number(state.answers[qIdx]);
      return { qIdx, dim: question.dim, dimension: data.dimLabels[question.dim], question: question.q, stage, stageName: stages[stage - 1] };
    });
    const fields = {
      Nombre: formValues.Nombre, Email: formValues.Email, Empresa: formValues.Empresa,
      Telefono: formValues.Telefono || '', Sector: formValues.Sector, Tamano: formValues.Tamano,
      Region: formValues.Region || '', Fuente: defaultSource,
      'Etapa Global': `${result.overallStage} — ${stages[result.overallStage - 1]}`,
      'Puntaje Promedio': result.overallAvg.toFixed(2), 'Puntaje Normalizado': `${result.scorePercent}%`,
      Fortaleza: `${result.strongest.map((dim) => dim.label).join(', ')} — Etapa ${result.strongest[0].stage}`,
      Prioridad: `${result.weakest.map((dim) => dim.label).join(', ')} — Etapa ${result.weakest[0].stage}`,
      'Brecha Interna': result.spread.toFixed(2),
      'Resumen del Diagnostico': buildSummary(insights), 'Respuestas Detalladas': JSON.stringify(answersDetail),
      Consentimiento: 'Aceptado',
    };
    result.perDim.forEach((dim) => { fields[`Etapa ${dim.label}`] = `${dim.stage} — ${stages[dim.stage - 1]} (avg ${dim.avg.toFixed(2)})`; });
    button.disabled = true; button.textContent = 'Enviando…';
    try {
      const response = await fetch('/api/assessment-submit', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ fields }),
      });
      const responseData = await response.json().catch(() => ({}));
      if (!response.ok || responseData.ok !== true) throw new Error(responseData.error || 'submit_failed');
      if (!responseData.reportUrl) throw new Error('report_url_missing');
      state.reportUrl = responseData.reportUrl; save();
      message.className = 'assessment-success';
      message.innerHTML = `Tus datos quedaron registrados. El informe está disponible en <a href="${esc(responseData.reportUrl)}" target="_blank" rel="noopener noreferrer">este enlace</a>. No se envió correo automáticamente.`;
      button.textContent = 'Envío registrado';
    } catch (error) {
      console.error('Assessment submission failed', error);
      message.className = 'assessment-error';
      message.textContent = 'No pudimos guardar tus datos en este momento. Tus respuestas y el resultado siguen aquí; revisa tu conexión e inténtalo nuevamente.';
      button.disabled = false; button.textContent = 'Reintentar envío';
    }
  }
  function celebrate() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const colors = ['#176b4d', '#c48a2e', '#67a77b', '#e5b866'];
    for (let index = 0; index < 54; index += 1) {
      const piece = document.createElement('span'); piece.className = 'assessment-confetti';
      piece.style.left = `${Math.random() * 100}vw`; piece.style.backgroundColor = colors[index % colors.length];
      piece.style.animationDelay = `${Math.random() * .65}s`; document.body.appendChild(piece);
      window.setTimeout(() => piece.remove(), 3200);
    }
  }

  const params = new URLSearchParams(location.search);
  if (params.has('source') && params.get('source') !== defaultSource) {
    // Campaign attribution is deliberately not mixed with the assessment discriminator used by CRM.
    state.campaignSource = params.get('source').slice(0, 120); save();
  }
  if (state.screen === 'quiz' && answeredCount() === data.questions.length) state.screen = 'results';
  render();
})();
