// ─── Hubs Sectoriales (Verticales) ─────────────────────────────
// Cada sector = una landing en /agentes/sectores/<slug>
// Reutiliza el interface AgentPage con kind: 'sector'.
// Apunta a los agentes funcionales (relatedAgents) para "qué agentes usa este rubro".

import type { AgentPage } from './agentes';
import { wa, diagnostico } from './agentes';

export const sectorPages: Record<string, AgentPage> = {
  // ─── 1. Viñas y agro ─────────────────────────────────────────
  vinas: {
    slug: 'vinas',
    url: '/agentes/sectores/vinas',
    name: 'Agentes IA para Viñas y Agro',
    emoji: '🍇',
    kind: 'sector',
    shortDescription:
      'Cuaderno de campo digital + agentes IA para registrar mano de obra, costos por hectárea y calidad de uva en tiempo real.',
    targetIndustries: ['Viñas vitivinícolas', 'Fundos frutícolas', 'Cooperativas agrícolas', 'Packings'],
    sectorVocab: ['cuartel', 'temporeros', 'jornadas', 'trato', 'vendimia', 'cuaderno de campo', 'kilos/jornal', '$/ha'],
    relatedAgents: ['compliance', 'sdr-leads', 'agendamiento'],
    regions: ['maule', 'ohiggins', 'nuble', 'biobio'],
    meta: {
      title: 'Software y Agentes IA para Viñas Chile | Cuaderno de Campo Digital | Apps del Sur',
      description:
        'Cuaderno de campo digital y agentes IA para viñas chilenas. Registre mano de obra, calcule costos por hectárea en tiempo real, controle calidad de uva. Para viñas en Maule, O\'Higgins, Ñuble y Biobío. Financiable con CORFO, FIA y SERCOTEC (60-98% del proyecto).',
      keywords:
        'software viñas Chile, cuaderno de campo digital, gestión mano obra viña, costo hectárea uva, software vitivinícola Maule, agente IA viña',
      ogTitle: 'Software para Viñas Chile — Cuaderno de Campo Digital',
      ogDescription:
        '-70% tiempo administrativo, 100% trazabilidad, costos por hectárea en tiempo real. Financiable hasta 98% con fondos públicos.',
    },
    hero: {
      badge: '🍇 Vitivinícola · Frutícola · Cooperativas',
      titleLine1: 'Del cuaderno de papel al',
      titleHighlight: 'costo por hectárea en tiempo real',
      description:
        '7am, jefe de campo, 80 temporeros y una planilla de papel. ¿Cuánto costó la poda del cuartel 12? No lo sabe hasta fin de mes. Nuestro cuaderno de campo digital + agentes IA registran mano de obra offline, calculan costos en tiempo real y se conectan con Rexmas, SAP o QAD — no reemplazan su contabilidad, la alimentan.',
      ctaPrimary: 'Hablar con un especialista por WhatsApp',
      ctaPrimaryHref: wa('vinas', 'Hola, tengo una viña y quiero ver Apps del Sur'),
      ctaSecondary: 'Diagnosticar mi madurez digital (gratis · 6 min)',
      ctaSecondaryHref: diagnostico('vinas'),
    },
    chatMock: {
      title: 'Cómo conversa el agente en terreno',
      contact: 'Viña Tipo · Cuaderno de Campo',
      messages: [
        { from: 'cliente', text: 'Werner, jefe de campo. Hoy 18 temporeros en cuartel 7, poda', time: '07:12' },
        {
          from: 'agente',
          text: '✅ Registrado. Cuartel 7 (Cabernet 2.4 ha), poda en seco, 18 jornales.\nA este ritmo el cuartel cierra el viernes. Costo proyectado: $1.42M ($592K/ha).',
          time: '07:12',
        },
        { from: 'cliente', text: 'Listo. Y 4 personas en riego cuartel 12', time: '07:13' },
        {
          from: 'agente',
          text: '✅ Anotado. Riego cuartel 12 (Carmenere 3.1 ha), 4 jornales.\n⚠️ Aviso: cuartel 12 lleva 22% sobre presupuesto del año. ¿Aviso a oficina?',
          time: '07:13',
        },
        { from: 'cliente', text: 'Sí avisa a Javier', time: '07:14' },
        {
          from: 'agente',
          text: 'Enviado a Javier (Export Manager) por correo y WhatsApp con el detalle. 📊',
          time: '07:14',
        },
      ],
    },
    painPoints: [
      {
        icon: 'clock',
        title: 'Planillas de papel → no se sabe el costo hasta fin de mes',
        description:
          'El jefe de campo anota a mano. Se digita 2-3 semanas después. Cuando aparece el costo del cuartel ya pasó la oportunidad de corregir.',
        metric: '+3 sem',
      },
      {
        icon: 'dollar-sign',
        title: 'Sobre-costos invisibles por cuartel',
        description:
          'No se ve qué labor o qué cuartel se está pasando del presupuesto hasta que es tarde. Pérdidas típicas: 8-15% del gasto MO/año.',
        metric: '8-15%',
      },
      {
        icon: 'smartphone',
        title: 'Sin señal en terreno → la app se traba',
        description:
          'Las herramientas genéricas no funcionan offline. El temporero está en el cuartel sin red — necesita una app que registre y sincronice después.',
        metric: 'offline',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Cargamos sus cuarteles, variedades y labores',
        description:
          'Mapeamos su operación real (no plantilla genérica). Sus cuarteles, variedades, formas de calcular tratos y sueldos.',
      },
      {
        step: 2,
        title: 'App móvil offline en manos del jefe de campo',
        description:
          'Registra temporeros, labor y avance desde el celular sin señal. Sincroniza cuando vuelve la red.',
      },
      {
        step: 3,
        title: 'Plataforma web calcula costos $/ha en tiempo real',
        description:
          'Gerencia ve costos por cuartel, labor y variedad al día. Alertas automáticas si una labor se pasa del presupuesto.',
      },
      {
        step: 4,
        title: 'Datos listos para Rexmas, SAP o QAD',
        description:
          'No reemplaza su contabilidad. Le envía los datos consolidados al sistema contable cada quincena.',
      },
    ],
    metrics: [
      { value: '-70%', label: 'Tiempo administrativo', sublabel: 'vs. planillas + Excel' },
      { value: '100%', label: 'Trazabilidad', sublabel: 'por cuartel y labor' },
      { value: '$/ha', label: 'En tiempo real', sublabel: 'no a fin de mes' },
      { value: '4-12 sem', label: 'Implementación', sublabel: 'según tamaño' },
    ],
    pricing: {
      intro:
        'Dos modalidades. Venta única (licencia + implementación) es el modelo principal — financiable hasta 98% con CORFO, FIA o SERCOTEC según tamaño de la viña.',
      ventaUnica: [
        {
          tier: 'Starter (20-30 ha)',
          price: '$3.500.000 CLP',
          copago: 'Copago $700K con SERCOTEC CRECE',
          fondo: 'SERCOTEC CRECE',
          features: [
            'Hasta 30 hectáreas, 1 fundo',
            'App móvil offline + plataforma web',
            'Cálculo de costos por cuartel y labor',
            'Capacitación 8h + soporte 12 meses',
          ],
        },
        {
          tier: 'Pyme (50-100 ha)',
          price: '$8.500.000 CLP',
          copago: 'Copago $3.4M con CORFO 60%',
          fondo: 'CORFO Digitalización Agro',
          highlight: true,
          features: [
            '50-100 ha, hasta 3 fundos',
            'Mapas con geocercas',
            'Integración con su sistema contable',
            'Reportes de sustentabilidad',
            'Soporte 18 meses',
          ],
        },
        {
          tier: 'Enterprise (100+ ha)',
          price: '$12.000.000+ CLP',
          copago: 'Copago $2.4M con FIA 80%',
          fondo: 'FIA Interés Privado',
          features: [
            '100+ ha, cooperativas',
            'Multi-fundo, multi-valle',
            'Módulos avanzados: cosecha, insumos, mapas con geocercas',
            'API para integración con cualquier ERP',
            'Soporte 24 meses + roadmap conjunto',
          ],
        },
      ],
      saas: [
        {
          tier: 'SaaS Starter',
          price: '$200.000 CLP/mes',
          features: ['Setup $1.5M', 'Hasta 30 ha', 'Soporte por email'],
        },
        {
          tier: 'SaaS Pyme',
          price: '$350.000 CLP/mes',
          highlight: true,
          features: ['Setup $2.5M', '50-100 ha', 'Soporte WhatsApp', 'Reportes avanzados'],
        },
        {
          tier: 'SaaS Enterprise',
          price: '$450.000 CLP/mes',
          features: ['Setup $3.5M', '100+ ha', 'Multi-fundo', 'Soporte prioritario'],
        },
      ],
    },
    financing: {
      instrumento: 'CORFO Digitalización Agro + FIA + SERCOTEC',
      monto: 'Hasta $50M CLP según instrumento',
      cofinanciamiento: '60-98% según perfil',
      descripcion:
        'Las viñas chilenas pueden financiar entre el 60% y el 98% del proyecto: SERCOTEC CRECE (98%) para microempresas hasta 50 ha, CORFO Digitalización Agro (60%) para pymes en O\'Higgins y Maule, FIA Interés Privado (80%) para proyectos de innovación en cooperativas y viñas premium. Apps del Sur acompaña sin costo en la postulación.',
      quienPostula: 'La viña, cooperativa o packing',
    },
    caseStudy: {
      negocio: 'Viña tipo (Maule, 75 ha)',
      perfil: 'Viña familiar, 75 ha plantadas (Cabernet, Carmenere, Sauvignon), Excel + planillas',
      antes: [
        'Costo por cuartel se conoce 3 semanas después del cierre',
        'Cuartel "estrella" según el gerente perdía $4.2M/año sin saberlo',
        'Jefe de campo dedica 2h/día a anotar y traspasar a Excel',
        'Pérdida estimada por sobre-costo invisible: $22M/año',
      ],
      despues: [
        'Costo por cuartel y labor visible al cierre del día',
        'Alertas automáticas cuando una labor se desvía >15% del presupuesto',
        'Jefe de campo registra en 30 segundos desde el celular (offline)',
        'Ahorro estimado año 1: $17M. ROI 4-7x sobre copago',
      ],
      roi: 'Ahorro estimado $17M/año. Copago $3.4M (CORFO 60%). ROI año 1: 5x',
    },
    faq: [
      {
        q: '¿Funciona sin señal en el cuartel?',
        a: 'Sí. La app móvil es offline-first. El temporero o jefe de campo registra todo desde el celular sin red. Cuando vuelve a tener señal, se sincroniza automáticamente.',
      },
      {
        q: '¿Reemplaza mi contabilidad (Rexmas, SAP, QAD)?',
        a: 'No. Apps del Sur es un cuaderno de campo digital — herramienta de TERRENO, no de oficina. Se conecta con su sistema contable y le envía los datos listos para procesar.',
      },
      {
        q: '¿Cuánto demora la implementación?',
        a: 'Plan Starter (20-30 ha): 4-6 semanas. Pyme (50-100 ha): 8-10 semanas. Enterprise (100+ ha o cooperativas): 10-12 semanas dependiendo de integraciones.',
      },
      {
        q: '¿Sirve para frutícolas y packings o solo viñas?',
        a: 'Sirve para vitivinícola, frutícola, agrícola general y packings. La lógica de cuarteles, labores y tratos aplica a todos los rubros agrícolas. Para detalles específicos por sector, vea /sectores/fruticola y /sectores/agricola.',
      },
      {
        q: '¿Qué pasa con la nueva Ley de Protección de Datos 21.719?',
        a: 'Cumple Ley 21.719 (entrada 2026). Datos de temporeros se almacenan con consentimiento explícito, no se comparten con terceros, y el trabajador puede pedir su eliminación.',
      },
    ],
    relatedBlogSlugs: [
      'cuanto-cuesta-sistema-gestion-vinas',
      'costo-mano-de-obra-por-hectarea-vinas-chile',
      'senales-digitalizar-gestion-mano-obra-vina',
      'guia-financiamiento-corfo-fia-digitalizacion-agricola-2026',
      'software-agricola-chile-comparativa-2026',
      'vendimia-2026-gestion-temporeros-costos',
    ],
  },

  // ─── 2. Clínicas (dental, médica, veterinaria) ──────────────
  clinicas: {
    slug: 'clinicas',
    url: '/agentes/sectores/clinicas',
    name: 'Agentes IA para Clínicas',
    emoji: '🦷',
    kind: 'sector',
    shortDescription:
      'Agendamiento 24/7 por WhatsApp, recordatorios, cumplimiento Ley 21.719 y retención de pacientes. Para clínicas dentales, médicas y veterinarias.',
    targetIndustries: ['Clínicas dentales', 'Centros médicos', 'Clínicas veterinarias', 'Consultas estéticas'],
    sectorVocab: ['ficha del paciente', 'no-show', 'box', 'profesional', 'tratamiento', 'presupuesto', 'consentimiento informado', 'agenda'],
    relatedAgents: ['agendamiento', 'compliance', 'retencion', 'whatsapp-atencion'],
    regions: ['maule', 'ohiggins', 'biobio', 'nuble', 'araucania'],
    meta: {
      title: 'Agentes IA para Clínicas Chile | Agendamiento, Ley 21.719, Retención | Apps del Sur',
      description:
        'Agentes de IA para clínicas dentales, médicas y veterinarias en Chile. Agendamiento por WhatsApp 24/7, recordatorios automáticos, cumplimiento Ley 21.719 de datos sensibles y retención de pacientes. Implementación 2-6 semanas. Financiable con Kit Digital y CRECE SERCOTEC.',
      keywords:
        'agente IA clínica dental Chile, agendamiento WhatsApp clínica, software clínica veterinaria, Ley 21.719 datos pacientes, no-show clínicas Chile, recordatorio cita médica',
      ogTitle: 'Agentes IA para Clínicas — Apps del Sur',
      ogDescription:
        '-60% no-shows. Agendamiento 24/7 por WhatsApp. Cumple Ley 21.719. Financiable con Kit Digital SERCOTEC.',
    },
    hero: {
      badge: '🦷 Clínicas dentales · médicas · veterinarias',
      titleLine1: 'Cero no-shows. Cero pacientes perdidos',
      titleHighlight: 'fuera de horario',
      description:
        'En clínicas, el 22% de las horas se pierden por no-shows y el 70% de las consultas para agendar llegan después del cierre. Nuestros agentes IA agendan, confirman y reagendan por WhatsApp 24/7, cumplen Ley 21.719 sobre datos sensibles y trabajan retención del paciente que dejó de venir.',
      ctaPrimary: 'Probar el agente por WhatsApp',
      ctaPrimaryHref: wa('clinicas', 'Hola, tengo una clínica y quiero ver los agentes IA de Apps del Sur'),
      ctaSecondary: 'Diagnosticar mi madurez IA (gratis · 6 min)',
      ctaSecondaryHref: diagnostico('clinicas'),
    },
    chatMock: {
      title: 'Cómo conversa el agente con un paciente',
      contact: 'Clínica Sonrisas · Agente IA',
      messages: [
        { from: 'cliente', text: 'Hola, necesito hora para limpieza, urgente', time: '22:18' },
        {
          from: 'agente',
          text: '¡Hola! 😊 Tengo:\n• Mañana 10:30 con Dra. Pérez\n• Mañana 16:00 con Dr. Soto\n• Pasado 09:00 con Dra. Pérez\n¿Cuál le acomoda?',
          time: '22:18',
        },
        { from: 'cliente', text: 'Mañana a las 10:30 está perfecto', time: '22:19' },
        {
          from: 'agente',
          text: 'Listo ✅ Mañana 10:30 con Dra. Pérez.\n¿Me confirma nombre y RUT para la ficha?\n(Sus datos se manejan según Ley 21.719: solo para uso clínico)',
          time: '22:19',
        },
        { from: 'cliente', text: 'María González, 15.234.567-8', time: '22:20' },
        {
          from: 'agente',
          text: 'Confirmado, María. Le enviaré recordatorio 24h y 2h antes. Si necesita reagendar, escríbame. 🎉',
          time: '22:20',
        },
      ],
    },
    painPoints: [
      {
        icon: 'clock',
        title: '70% de las consultas llegan fuera de horario',
        description:
          'La paciente pregunta por WhatsApp a las 22:00. Si nadie responde, mañana ya agendó en otra clínica.',
        metric: '70%',
      },
      {
        icon: 'dollar-sign',
        title: '22% no-shows en horas de profesional',
        description:
          'Sin recordatorios automáticos, 1 de cada 5 horas no llega. En una clínica con 2 dentistas: ~$1.4M/mes perdidos.',
        metric: '22%',
      },
      {
        icon: 'shield',
        title: 'Ley 21.719: datos de paciente son sensibles',
        description:
          'WhatsApp informal mezcla datos clínicos con consultas. Riesgo de multa por mal manejo de datos sensibles desde 2026.',
        metric: 'Ley',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Conectamos su WhatsApp Business',
        description: 'API oficial de Meta. Su número actual sigue funcionando; el agente atiende cuando usted no puede.',
      },
      {
        step: 2,
        title: 'Cargamos profesionales, boxes, servicios y precios',
        description: 'El agente aprende su clínica en 3 días: agenda, prestadores, tratamientos, valores y políticas.',
      },
      {
        step: 3,
        title: 'Agenda, confirma y reagenda 24/7',
        description: 'Integración con Reservo, Bsale, Defontana o Google Calendar. Recordatorios 24h y 2h antes.',
      },
      {
        step: 4,
        title: 'Datos del paciente conforme Ley 21.719',
        description: 'Consentimiento explícito, almacenamiento cifrado, derecho a eliminación. Cero riesgo regulatorio.',
      },
    ],
    metrics: [
      { value: '-60%', label: 'No-shows', sublabel: 'con recordatorios 24h+2h' },
      { value: '<10s', label: 'Respuesta', sublabel: '24/7 por WhatsApp' },
      { value: '+30%', label: 'Citas captadas', sublabel: 'fuera de horario' },
      { value: '2 sem', label: 'Implementación', sublabel: 'plan Starter' },
    ],
    pricing: {
      intro: 'Cada agente individual ($1.8M a $5M venta única). Combinación recomendada para clínicas: Agendamiento + Compliance + Retención. Financiable con Kit Digital SERCOTEC o CRECE.',
      ventaUnica: [
        {
          tier: 'Solo Agendamiento',
          price: '$1.800.000',
          copago: 'Copago $600K (Kit Digital)',
          fondo: 'Kit Digital SERCOTEC',
          features: ['Agente de Agendamiento', 'Hasta 500 conv/mes', 'Capacitación 4h'],
        },
        {
          tier: 'Combo Clínica',
          price: '$4.500.000',
          copago: 'Copago $1.5M con CRECE',
          fondo: 'SERCOTEC CRECE',
          highlight: true,
          features: [
            'Agendamiento + Compliance Ley 21.719',
            'Recordatorios 24h+2h',
            'Hasta 3 profesionales',
            'Integración Reservo/Bsale',
            'Capacitación 8h + soporte 12 meses',
          ],
        },
        {
          tier: 'Pro Multi-sucursal',
          price: '$7.000.000',
          copago: 'Copago $2.1M con CRECE',
          fondo: 'SERCOTEC CRECE',
          features: ['Multi-sucursal', '+ Agente de Retención', 'API con su sistema', 'Soporte 18m'],
        },
      ],
      saas: [
        { tier: 'SaaS Solo', price: '$80K CLP/mes', features: ['1 profesional', '300 conv/mes'] },
        { tier: 'SaaS Combo', price: '$180K CLP/mes', highlight: true, features: ['Hasta 3 prof.', 'Agendamiento + Compliance'] },
        { tier: 'SaaS Pro', price: '$280K CLP/mes', features: ['Multi-sucursal', '+ Retención'] },
      ],
    },
    financing: {
      instrumento: 'Kit Digital SERCOTEC / CRECE',
      monto: '$1.2M - $5M CLP',
      cofinanciamiento: '95-100% para microempresas',
      descripcion:
        'Una clínica dental o veterinaria pyme accede a Kit Digital ($1.2M, ~100% cubierto) o SERCOTEC CRECE ($5M, 95% cubierto). El copago real para la clínica queda entre $250K y $1.5M, lo que se recupera en 1-2 meses por reducción de no-shows.',
      quienPostula: 'La clínica beneficiaria',
    },
    caseStudy: {
      negocio: 'Clínica dental (Talca, 4 boxes)',
      perfil: '3 dentistas + 1 ortodoncista, ~220 pacientes/mes',
      antes: [
        'Recepcionista dedica 14h/sem a WhatsApp y agenda',
        '22% no-shows = $1.4M/mes en horas profesional perdidas',
        '~40 consultas/mes sin responder fuera de horario',
        'Sin manejo formal de consentimiento de datos del paciente',
      ],
      despues: [
        'Recepcionista dedica 3h/sem a WhatsApp (resto atención presencial)',
        '8% no-shows con recordatorios automáticos: $900K/mes recuperados',
        '0 consultas sin respuesta + 18 citas nuevas/mes captadas de noche',
        'Cumple Ley 21.719 con consentimiento documentado',
      ],
      roi: 'Ahorro estimado $2.3M/mes. Copago $1.5M (CRECE 70%). ROI mes 1.',
    },
    faq: [
      {
        q: '¿Cumple con la Ley 21.719 sobre datos sensibles de pacientes?',
        a: 'Sí. Datos clínicos se manejan como categoría sensible: consentimiento explícito al inicio de la conversación, almacenamiento cifrado, no compartidos con terceros, derecho a eliminación en cualquier momento. Le entregamos el documento de cumplimiento para auditoría.',
      },
      {
        q: '¿Se conecta con Reservo, Bsale, Defontana o mi sistema?',
        a: 'Sí, integraciones nativas con Reservo, Bsale, Defontana y Google Calendar. Para sistemas propios desarrollamos integración por API.',
      },
      {
        q: '¿Qué pasa si la consulta es clínica compleja?',
        a: 'El agente está configurado para NO dar consejos clínicos. Si el paciente describe síntomas o pide consejo médico, pasa la conversación al profesional con todo el contexto en segundos.',
      },
      {
        q: '¿El paciente sabe que está hablando con una IA?',
        a: 'Sí, transparencia desde el saludo inicial. La mayoría de pacientes lo prefiere: respuesta inmediata, sin filtros, sin presión.',
      },
      {
        q: '¿Funciona para clínicas veterinarias también?',
        a: 'Sí. Adaptamos el lenguaje (paciente → mascota, ficha clínica → ficha del paciente animal). Mismo flujo, vocabulario veterinario.',
      },
    ],
    relatedBlogSlugs: [
      'agente-ia-agendamiento-clinicas-dentales-chile',
      'ley-21719-datos-sensibles-sectores-chile-2026',
      'ley-21719-proteccion-datos-pymes-chile-2026',
      'como-crear-agente-ia-agendamiento-whatsapp-chile-2026',
      'cuanto-cuesta-automatizar-whatsapp-empresa',
      'calcular-roi-proyecto-ia-pyme-chile',
    ],
  },

  // ─── 3. Hoteles y Turismo ────────────────────────────────────
  'hoteles-turismo': {
    slug: 'hoteles-turismo',
    url: '/agentes/sectores/hoteles-turismo',
    name: 'Agentes IA para Hoteles y Turismo',
    emoji: '🏨',
    kind: 'sector',
    shortDescription:
      'Reservas directas por WhatsApp, atención multilingüe 24/7, gestión de reseñas y reducción de comisiones OTA. Para hoteles, cabañas, tour operadores y restaurantes.',
    targetIndustries: ['Hoteles boutique', 'Cabañas y lodges', 'Tour operadores', 'Restaurantes', 'Termas y spas'],
    sectorVocab: ['RevPAR', 'OTA', 'Booking', 'Expedia', 'check-in', 'check-out', 'no-show', 'reseña', 'comisión'],
    relatedAgents: ['agendamiento', 'whatsapp-atencion', 'retencion'],
    regions: ['araucania', 'biobio', 'maule', 'ohiggins'],
    meta: {
      title: 'Agentes IA para Hoteles, Cabañas y Tour Operadores Chile | Apps del Sur',
      description:
        'Agentes de IA por WhatsApp para hoteles, cabañas, tour operadores y restaurantes en Chile. Reservas directas, atención multilingüe 24/7, gestión de reseñas Google. Reduce comisiones Booking/Expedia hasta 30%. Ideal para Pucón, Valdivia, Pichilemu, Maule.',
      keywords:
        'agente IA hoteles Chile, reservas WhatsApp cabaña, software turismo Pucón, reducir comisión Booking, chatbot restaurante, tour operador IA Chile',
      ogTitle: 'Agentes IA para Hoteles y Turismo — Apps del Sur',
      ogDescription:
        '-30% comisión Booking. Reservas directas WhatsApp 24/7. Atención multilingüe. Financiable con SERCOTEC.',
    },
    hero: {
      badge: '🏨 Hoteles · Cabañas · Tour Operadores · Restaurantes',
      titleLine1: 'Reservas directas por WhatsApp,',
      titleHighlight: 'sin pagar 15-20% a Booking',
      description:
        'El 95% de turistas chilenos y latinoamericanos consulta por WhatsApp. Pero usted los manda a Booking porque "atender es mucho trabajo". El agente IA responde en segundos, en 4 idiomas, gestiona la reserva directa, pide la reseña y reduce comisiones OTA hasta 30%.',
      ctaPrimary: 'Probar el agente por WhatsApp',
      ctaPrimaryHref: wa('hoteles', 'Hola, tengo un hotel/cabaña y quiero ver el agente IA'),
      ctaSecondary: 'Diagnosticar mi madurez IA (gratis · 6 min)',
      ctaSecondaryHref: diagnostico('hoteles-turismo'),
    },
    chatMock: {
      title: 'Cómo conversa el agente con un huésped',
      contact: 'Cabañas del Sur · Agente IA',
      messages: [
        { from: 'cliente', text: 'Hi! Do you have a cabin for 4 ppl, dec 27-30?', time: '23:42' },
        {
          from: 'agente',
          text: 'Hi! Yes 🌲\n• Cabin Lenga (4 pax, lake view): $180/night\n• Cabin Coihue (4 pax, garden): $145/night\nBoth available Dec 27-30 (3 nights).\nWant to book?',
          time: '23:42',
        },
        { from: 'cliente', text: 'The Lenga one please', time: '23:43' },
        {
          from: 'agente',
          text: 'Great choice 🎉 Total $540 (3 nights, includes breakfast).\nPay $200 deposit now to confirm:\n💳 https://cabanas.cl/pay/8x2k\nFull refund if cancel 48h before.',
          time: '23:43',
        },
        { from: 'cliente', text: 'paid! ✅', time: '23:45' },
        {
          from: 'agente',
          text: 'Confirmed ✅\nCheck-in Dec 27 from 15:00. Address: [link]. WhatsApp Andrés (host) when you arrive.\nSee you soon! 🇨🇱',
          time: '23:45',
        },
      ],
    },
    painPoints: [
      {
        icon: 'dollar-sign',
        title: '15-20% de cada reserva se va en comisiones',
        description: 'Booking, Expedia y Despegar cobran 15-20% por canal. En temporada alta = decenas de millones de CLP que no quedan en el hotel.',
        metric: '15-20%',
      },
      {
        icon: 'clock',
        title: 'Reservas llegan en 4 idiomas a las 23:00',
        description: 'Turistas brasileños, argentinos, gringos y europeos consultan a toda hora. Si responde mañana, ya reservaron con la competencia.',
        metric: '24/7',
      },
      {
        icon: 'bar-chart',
        title: 'Pocas reseñas Google = baja conversión',
        description: 'Hoteles que no piden reseña activa quedan con 12-25 reseñas mientras la competencia llega a 200+. RevPAR se hunde.',
        metric: '+0.6★',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Cargamos disponibilidad y tarifas (PMS o Excel)',
        description: 'Conectamos su sistema de reservas (Cloudbeds, Little Hotelier, Octorate) o trabajamos directo con Excel/Google Sheets.',
      },
      {
        step: 2,
        title: 'Conectamos WhatsApp Business multilingüe',
        description: 'Español, inglés, portugués y alemán. El agente detecta el idioma del turista automáticamente.',
      },
      {
        step: 3,
        title: 'Reservas directas con link de pago',
        description: 'Cotiza, reserva, cobra depósito vía Webpay/MercadoPago/Flow, envía instrucciones de check-in.',
      },
      {
        step: 4,
        title: 'Pide reseña Google 24h después del check-out',
        description: 'En el momento óptimo (cuando aún recuerdan la experiencia). Hoteles aumentan +0.4-0.8 estrellas promedio.',
      },
    ],
    metrics: [
      { value: '-30%', label: 'Comisión OTA', sublabel: 'reservas directas' },
      { value: '4 idiomas', label: 'Atención', sublabel: 'es/en/pt/de' },
      { value: '+0.6★', label: 'Google Reviews', sublabel: 'promedio 6 meses' },
      { value: '<30s', label: 'Tiempo respuesta', sublabel: '24/7 incluso de madrugada' },
    ],
    pricing: {
      intro: 'Combo turismo: Atención multilingüe + Agendamiento (tours) + Reseñas. Financiable con CRECE SERCOTEC (Maule, La Araucanía) o Kit Digital.',
      ventaUnica: [
        {
          tier: 'Hotel pequeño',
          price: '$3.500.000',
          copago: 'Copago $800K con CRECE',
          fondo: 'SERCOTEC CRECE',
          features: ['Hasta 15 habitaciones', '4 idiomas', 'Pagos automáticos', 'Capacitación 6h'],
        },
        {
          tier: 'Hotel mediano',
          price: '$5.500.000',
          copago: 'Copago $1.4M con CRECE',
          fondo: 'SERCOTEC CRECE',
          highlight: true,
          features: [
            'Hasta 50 habitaciones',
            'Integración PMS (Cloudbeds)',
            'Pide reseñas Google',
            'Reportes RevPAR',
            'Soporte 12 meses',
          ],
        },
        {
          tier: 'Cadena / Tour Operador',
          price: '$9.000.000',
          copago: 'Copago $3.6M con CORFO 60%',
          fondo: 'CORFO Digitalización',
          features: ['Multi-propiedad', 'Tours + reservas hotel', 'API custom', 'Soporte 18m'],
        },
      ],
      saas: [
        { tier: 'SaaS Pequeño', price: '$150K CLP/mes', features: ['Hasta 15 hab.', '4 idiomas'] },
        { tier: 'SaaS Mediano', price: '$250K CLP/mes', highlight: true, features: ['Hasta 50 hab.', 'PMS integrado'] },
        { tier: 'SaaS Cadena', price: '$400K CLP/mes', features: ['Multi-propiedad', 'Soporte prioritario'] },
      ],
    },
    financing: {
      instrumento: 'SERCOTEC CRECE Regional + CORFO',
      monto: '$1.2M - $20M CLP',
      cofinanciamiento: '60-95% según instrumento',
      descripcion:
        'Hoteles boutique y cabañas en La Araucanía, Maule y Biobío acceden a SERCOTEC CRECE (95%). Cadenas y tour operadores grandes pueden postular CORFO Digitalización Pyme (60%). Apps del Sur acompaña sin costo.',
      quienPostula: 'El hotel, cabaña o tour operador',
    },
    caseStudy: {
      negocio: 'Cabañas en Pucón (12 unidades)',
      perfil: 'Cabañas familiares, 60% turistas extranjeros, depende de Booking',
      antes: [
        '78% de reservas vía Booking (paga 15-20% comisión = $18M/año en comisiones)',
        'Atención WhatsApp solo en horario administrativo',
        '32 reseñas Google (4.2★)',
        'Pierde reservas que llegan en inglés/portugués durante la noche',
      ],
      despues: [
        '52% reservas directas WhatsApp (ahorra $11M/año en comisiones)',
        'Atiende 24/7 en 4 idiomas',
        '187 reseñas Google (4.7★) — +0.5★ en 6 meses',
        'Captura reservas argentinas y brasileñas que antes se iban',
      ],
      roi: 'Ahorro estimado $11M/año. Copago $1.4M (CRECE). ROI año 1: 7.8x',
    },
    faq: [
      {
        q: '¿Reduce realmente comisiones de Booking/Expedia?',
        a: 'Sí. El agente no compite contra el canal OTA — convierte huéspedes que llegan por OTA en reservantes directos en visitas futuras. Promedio: 30-40% de reservas migran a directo en 12 meses.',
      },
      {
        q: '¿Se integra con mi PMS (Cloudbeds, Little Hotelier, Octorate)?',
        a: 'Sí, con Cloudbeds, Little Hotelier y Octorate nativamente. Para PMS chilenos (Hospedalia, Hotelaria) integramos por API.',
      },
      {
        q: '¿Cobra automáticamente el depósito?',
        a: 'Sí, genera link de pago Webpay/MercadoPago/Flow con monto preconfigurado. El huésped paga sin salir de WhatsApp.',
      },
      {
        q: '¿Habla en idioma del turista correctamente?',
        a: 'Sí. Modelos entrenados con español de Chile, portugués brasileño, inglés y alemán. Detecta el idioma automáticamente.',
      },
    ],
    relatedBlogSlugs: [
      'agente-ia-turismo-hoteles-restaurantes-tour-operadores-chile',
      'como-aparecer-chatgpt-gemini-turismo-chile-pucon',
      'agente-ia-whatsapp-ecommerce-retail-chile',
      'cuanto-cuesta-automatizar-whatsapp-empresa',
    ],
  },

  // ─── 4. Abogados y estudios jurídicos ────────────────────────
  abogados: {
    slug: 'abogados-sector',
    url: '/agentes/sectores/abogados',
    name: 'Agentes IA para Estudios Jurídicos',
    emoji: '⚖️',
    kind: 'sector',
    shortDescription:
      'Calificación de consultas, agendamiento de reuniones, seguimiento de causas y cumplimiento Ley 21.719. Para estudios jurídicos pyme.',
    targetIndustries: ['Estudios jurídicos', 'Abogados independientes', 'Notarías', 'Asesorías legales'],
    sectorVocab: ['causa', 'audiencia', 'diligencia', 'patrocinio', 'mandato', 'consulta gratuita', 'tribunales'],
    relatedAgents: ['sdr-leads', 'agendamiento', 'compliance', 'abogados'],
    regions: ['maule', 'ohiggins', 'biobio', 'nuble', 'araucania'],
    meta: {
      title: 'Agentes IA para Abogados y Estudios Jurídicos Chile | Apps del Sur',
      description:
        'Agente IA para estudios jurídicos: filtra consultas, agenda primera reunión, hace seguimiento de causas y cumple Ley 21.719. Califica leads B2B con criterios jurídicos. Implementación 3-4 semanas. Financiable con CRECE SERCOTEC.',
      keywords:
        'agente IA abogados Chile, software estudio jurídico, agendamiento abogado WhatsApp, seguimiento causa, calificación consulta legal',
      ogTitle: 'Agentes IA para Abogados — Apps del Sur',
      ogDescription:
        'Filtra consultas, agenda primera reunión, hace seguimiento de causas. Cumple Ley 21.719.',
    },
    hero: {
      badge: '⚖️ Estudios jurídicos · Abogados pyme',
      titleLine1: 'Filtre 100 consultas y atienda',
      titleHighlight: 'solo las 10 que valen la pena',
      description:
        'El 80% de consultas que llegan a un estudio jurídico pyme son fuera de su práctica, sin presupuesto o sin urgencia real. El agente IA hace la primera entrevista, califica con criterios jurídicos (rama, monto, plazos) y agenda solo las que califican.',
      ctaPrimary: 'Probar el agente por WhatsApp',
      ctaPrimaryHref: wa('abogados-sector', 'Hola, tengo un estudio jurídico y quiero ver el agente IA'),
      ctaSecondary: 'Diagnosticar mi madurez IA (gratis · 6 min)',
      ctaSecondaryHref: diagnostico('abogados-sector'),
    },
    chatMock: {
      title: 'Cómo califica el agente una consulta',
      contact: 'Estudio Jurídico · Agente IA',
      messages: [
        { from: 'cliente', text: 'Hola, necesito un abogado, mi exempleador no me pagó', time: '20:14' },
        {
          from: 'agente',
          text: 'Hola, lo ayudo. Para canalizar bien:\n1. ¿Es despido o renuncia?\n2. ¿Cuánto tiempo trabajó ahí?\n3. ¿Cuánto dinero estima que le adeudan?',
          time: '20:14',
        },
        { from: 'cliente', text: 'Despido. 4 años. ~$3.5M en finiquito mal pagado', time: '20:16' },
        {
          from: 'agente',
          text: 'Entiendo. Su caso califica para nuestra práctica laboral.\nDra. Soto puede atenderlo:\n• Mañana 11:00 presencial\n• Mañana 17:00 por Zoom\nPrimera reunión $0 (30 min). ¿Cuál prefiere?',
          time: '20:17',
        },
        { from: 'cliente', text: 'Mañana 17:00 Zoom', time: '20:18' },
        {
          from: 'agente',
          text: 'Confirmado ✅ Le envío link Zoom y le pido por favor que traiga finiquito, contrato y últimas 3 liquidaciones. (Datos manejados según Ley 21.719)',
          time: '20:18',
        },
      ],
    },
    painPoints: [
      {
        icon: 'clock',
        title: 'Abogado dedica 4-6h/sem a consultas que no califican',
        description: 'Llamadas, WhatsApp y reuniones de 30 min para clientes que no son target. Tiempo facturable que se pierde.',
        metric: '5h/sem',
      },
      {
        icon: 'dollar-sign',
        title: 'Casos de alto valor llegan tarde',
        description: 'Cliente importante consulta sábado por WhatsApp. Sin respuesta. Lunes ya consultó con otro estudio.',
        metric: '24h',
      },
      {
        icon: 'shield',
        title: 'Datos sensibles en WhatsApp personal',
        description: 'Información clínica, financiera y procesal en chats sin cifrar ni respaldar. Riesgo Ley 21.719.',
        metric: 'Ley',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Definimos su perfil de cliente ideal',
        description: 'Ramas que atiende, monto mínimo de causa, jurisdicción, urgencia. El agente aprende sus criterios de calificación.',
      },
      {
        step: 2,
        title: 'Atiende WhatsApp 24/7 y hace primera entrevista',
        description: 'Recopila datos clave (rama, partes, plazos, monto), explica condiciones generales, filtra fuera de práctica.',
      },
      {
        step: 3,
        title: 'Agenda solo lo que califica',
        description: 'Conecta con su Google Calendar o Reservo. Reuniones presenciales o Zoom. Manda recordatorios.',
      },
      {
        step: 4,
        title: 'Seguimiento de causas activas',
        description: 'Recordatorios de plazos, audiencias, escritos pendientes. Pasa al humano para temas que requieren juicio jurídico.',
      },
    ],
    metrics: [
      { value: '+5h/sem', label: 'Tiempo facturable', sublabel: 'liberado por abogado' },
      { value: '24/7', label: 'Primera respuesta', sublabel: 'sábados y feriados' },
      { value: '85%', label: 'Calificación', sublabel: 'precisión vs. recepcionista' },
      { value: '3-4 sem', label: 'Implementación', sublabel: 'plan estándar' },
    ],
    pricing: {
      intro: 'Estudios pyme parten en Combo Jurídico. Estudios medianos con socios incluyen Compliance + Retención.',
      ventaUnica: [
        {
          tier: 'Solo Calificación',
          price: '$2.500.000',
          copago: 'Copago $750K con CRECE',
          fondo: 'SERCOTEC CRECE',
          features: ['Agente SDR jurídico', 'Hasta 1000 conv/mes', 'Capacitación 6h'],
        },
        {
          tier: 'Combo Jurídico',
          price: '$4.800.000',
          copago: 'Copago $1.5M con CRECE',
          fondo: 'SERCOTEC CRECE',
          highlight: true,
          features: [
            'Calificación + Agendamiento + Compliance Ley 21.719',
            'Integración Google Calendar',
            'Hasta 4 abogados',
            'Seguimiento causas básico',
            'Soporte 12 meses',
          ],
        },
        {
          tier: 'Estudio Mediano',
          price: '$8.500.000',
          copago: 'Copago $3.4M (CORFO 60%)',
          fondo: 'CORFO Digitalización',
          features: ['Multi-socio', 'Seguimiento causas avanzado', 'API legal-tech', 'Soporte 18m'],
        },
      ],
      saas: [
        { tier: 'SaaS Solo', price: '$120K/mes', features: ['1 abogado', 'Solo calificación'] },
        { tier: 'SaaS Combo', price: '$220K/mes', highlight: true, features: ['Hasta 4 abogados', 'Combo completo'] },
        { tier: 'SaaS Estudio', price: '$350K/mes', features: ['Multi-socio', 'Seguimiento avanzado'] },
      ],
    },
    financing: {
      instrumento: 'SERCOTEC CRECE / CORFO Digitalización Pyme',
      monto: '$5M - $20M CLP',
      cofinanciamiento: '60-95%',
      descripcion:
        'Estudios pyme acceden a CRECE SERCOTEC (95%, $5M). Estudios medianos con ventas > UF 25.000 anuales pueden postular CORFO Digitalización Pyme (60%). Acompañamos la postulación sin costo.',
      quienPostula: 'El estudio jurídico',
    },
    caseStudy: {
      negocio: 'Estudio jurídico pyme (Talca, 3 abogados)',
      perfil: 'Especialidad laboral + civil. ~80 consultas/mes vía WhatsApp y referidos',
      antes: [
        '80 consultas/mes; 18 califican; 12 contratan = 15% conversión',
        '5h/semana por abogado solo filtrando',
        '~$8M/año en honorarios perdidos por respuesta tardía',
      ],
      despues: [
        '80 consultas/mes; agente filtra a 22 que califican; 17 contratan = 21% conversión',
        '~1h/semana por abogado revisando casos calificados',
        '+$5M/año en honorarios captados que antes se iban',
      ],
      roi: 'Ahorro + ingresos extras: ~$11M/año. Copago $1.5M. ROI año 1: 7x',
    },
    faq: [
      {
        q: '¿El agente da consejo jurídico al cliente?',
        a: 'No. Está configurado explícitamente para NO dar opiniones jurídicas. Recopila información, explica condiciones generales del estudio (honorarios, modalidades) y deriva al abogado para todo lo sustantivo.',
      },
      {
        q: '¿Cumple secreto profesional y Ley 21.719?',
        a: 'Sí. Conversaciones cifradas, almacenamiento conforme a Ley 21.719, no compartidas con terceros, eliminación a solicitud.',
      },
      {
        q: '¿Se conecta con LegisChile, Vlex, sistema de causas?',
        a: 'Integraciones por API con LegisChile y Vlex. Para sistemas internos desarrollamos integración custom (plan Estudio Mediano).',
      },
    ],
    relatedBlogSlugs: [
      'ley-21719-proteccion-datos-pymes-chile-2026',
      'ley-21719-datos-sensibles-sectores-chile-2026',
      'ley-21719-inteligencia-artificial-empresas-chile-2026',
      'agente-ia-sdr-calificar-leads-b2b-chile',
    ],
  },

  // ─── 5. Inmobiliarias y corretaje ────────────────────────────
  inmobiliarias: {
    slug: 'inmobiliarias',
    url: '/agentes/sectores/inmobiliarias',
    name: 'Agentes IA para Inmobiliarias',
    emoji: '🏠',
    kind: 'sector',
    shortDescription:
      'Califica leads, agenda visitas, envía fichas de propiedades y hace seguimiento por WhatsApp. +40% conversión lead → visita.',
    targetIndustries: ['Corredores propiedades', 'Inmobiliarias', 'Constructoras con venta directa', 'Administradoras de arriendo'],
    sectorVocab: ['ficha de propiedad', 'visita', 'reserva', 'promesa', 'arriendo', 'plusvalía', 'm² útil', 'gastos comunes'],
    relatedAgents: ['sdr-leads', 'agendamiento', 'whatsapp-atencion', 'retencion'],
    regions: ['maule', 'ohiggins', 'biobio', 'nuble', 'araucania'],
    meta: {
      title: 'Agentes IA para Inmobiliarias y Corredores Chile | Apps del Sur',
      description:
        'Agente IA que califica leads inmobiliarios, agenda visitas, envía fichas y hace seguimiento por WhatsApp. +40% conversión lead → visita. Para corredores e inmobiliarias en Chile. Financiable con CRECE SERCOTEC.',
      keywords:
        'agente IA inmobiliaria Chile, software corredor propiedades, agendamiento visita WhatsApp, calificación lead inmobiliario, CRM corredor',
      ogTitle: 'Agentes IA para Inmobiliarias — Apps del Sur',
      ogDescription:
        '+40% conversión lead → visita. Agenda 24/7 por WhatsApp. Envía fichas y filtra portales.',
    },
    hero: {
      badge: '🏠 Corredores · Inmobiliarias · Constructoras',
      titleLine1: 'De 200 leads de Portal Inmobiliario',
      titleHighlight: 'a 40 visitas reales agendadas',
      description:
        'Los portales (Yapo, PortalInmobiliario, Toctoc) generan volumen pero el 70% son curiosos sin presupuesto. El agente IA califica con criterios reales (presupuesto, plazo, comuna), envía la ficha si encaja, agenda visita y hace seguimiento. Su corredor solo va a visitas que califican.',
      ctaPrimary: 'Probar el agente por WhatsApp',
      ctaPrimaryHref: wa('inmobiliarias', 'Hola, soy corredor / inmobiliaria y quiero ver el agente IA'),
      ctaSecondary: 'Diagnosticar mi madurez IA (gratis · 6 min)',
      ctaSecondaryHref: diagnostico('inmobiliarias'),
    },
    chatMock: {
      title: 'Cómo califica el agente un lead inmobiliario',
      contact: 'Corredora Pymes · Agente IA',
      messages: [
        { from: 'cliente', text: 'Hola, vi la casa de Av. Esmeralda en Portal, ¿está disponible?', time: '21:55' },
        {
          from: 'agente',
          text: 'Hola! Sí, sigue disponible 🏠\nPara ver si le acomoda:\n• ¿Es para vivir o inversión?\n• ¿Presupuesto aprox?\n• ¿Plazo para decidir?',
          time: '21:55',
        },
        { from: 'cliente', text: 'Para vivir, hasta UF 4.500, antes de fin de año', time: '21:57' },
        {
          from: 'agente',
          text: 'Perfecto, califica. La casa está en UF 4.300.\nLe envío la ficha:\n📄 https://corredora.cl/ficha/9k2x\n• 3D + 2B, 110 m² útil\n• Gastos comunes $85K\n• Bodega + 1 estac.\n¿Le acomoda visitar mañana 16:00 con Andrea?',
          time: '21:57',
        },
        { from: 'cliente', text: 'Mañana 16:00 me sirve', time: '21:58' },
        {
          from: 'agente',
          text: 'Listo ✅ Mañana 16:00 con Andrea. Le mando ubicación y mi WhatsApp por cualquier cosa.',
          time: '21:58',
        },
      ],
    },
    painPoints: [
      {
        icon: 'clock',
        title: 'Corredor pierde 3h/día respondiendo "¿está disponible?"',
        description: 'Mismas preguntas básicas en cada lead de portal. Tiempo que no se dedica a cerrar.',
        metric: '3h/día',
      },
      {
        icon: 'dollar-sign',
        title: '70% de leads son curiosos sin presupuesto',
        description: 'El corredor visita propiedad para alguien que "estaba mirando" y no compra. Costo de oportunidad alto.',
        metric: '70%',
      },
      {
        icon: 'bar-chart',
        title: 'Sin seguimiento, lead se enfría en 48h',
        description: 'Cliente interesado lunes; si nadie le escribe martes, miércoles ya compró en otro lado. Sin CRM, se pierde.',
        metric: '48h',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Cargamos su portafolio de propiedades',
        description: 'Sincronizado con Portal Inmobiliario, Yapo, Toctoc o su web. Disponibilidad en tiempo real.',
      },
      {
        step: 2,
        title: 'Califica leads con sus criterios',
        description: 'Presupuesto, comuna, m² mínimos, plazo, financiamiento. Filtra curiosos automáticamente.',
      },
      {
        step: 3,
        title: 'Envía ficha y agenda visita',
        description: 'PDF con ficha completa de la propiedad + link a Google Calendar del corredor para agendar.',
      },
      {
        step: 4,
        title: 'Seguimiento post-visita',
        description: 'Pregunta al cliente qué le pareció. Si está caliente, escala al corredor con todo el contexto.',
      },
    ],
    metrics: [
      { value: '+40%', label: 'Lead → visita', sublabel: 'vs. baseline manual' },
      { value: '3h/día', label: 'Tiempo recuperado', sublabel: 'por corredor' },
      { value: '24/7', label: 'Respuesta', sublabel: 'sábado y domingo incluidos' },
      { value: '3 sem', label: 'Implementación', sublabel: 'plan estándar' },
    ],
    pricing: {
      intro: 'Cubre corredor independiente hasta inmobiliaria mediana. Financiable con CRECE SERCOTEC o CORFO Digitalización.',
      ventaUnica: [
        {
          tier: 'Corredor Independiente',
          price: '$2.800.000',
          copago: 'Copago $800K con CRECE',
          fondo: 'SERCOTEC CRECE',
          features: ['1 corredor', 'Hasta 50 propiedades', 'Integración Portal', 'Capacitación 6h'],
        },
        {
          tier: 'Inmobiliaria Pyme',
          price: '$5.500.000',
          copago: 'Copago $1.4M con CRECE',
          fondo: 'SERCOTEC CRECE',
          highlight: true,
          features: [
            'Hasta 6 corredores',
            'Hasta 250 propiedades',
            'Integración Portal + Toctoc + Yapo',
            'CRM básico de seguimiento',
            'Soporte 12 meses',
          ],
        },
        {
          tier: 'Inmobiliaria Mediana',
          price: '$9.000.000',
          copago: 'Copago $3.6M (CORFO 60%)',
          fondo: 'CORFO Digitalización',
          features: ['Multi-sucursal', 'Integración CRM (HubSpot, Pipedrive)', 'Reportes avanzados', 'Soporte 18m'],
        },
      ],
      saas: [
        { tier: 'SaaS Corredor', price: '$130K/mes', features: ['1 corredor', '50 propiedades'] },
        { tier: 'SaaS Pyme', price: '$240K/mes', highlight: true, features: ['Hasta 6 corredores', 'CRM básico'] },
        { tier: 'SaaS Mediana', price: '$380K/mes', features: ['Multi-sucursal', 'CRM integrado'] },
      ],
    },
    financing: {
      instrumento: 'SERCOTEC CRECE / CORFO Digitalización',
      monto: '$5M - $20M CLP',
      cofinanciamiento: '60-95%',
      descripcion:
        'Corredores e inmobiliarias pyme acceden a CRECE SERCOTEC (95%). Inmobiliarias con ventas > UF 25.000 anuales pueden postular CORFO Digitalización Pyme (60%).',
      quienPostula: 'La inmobiliaria o corredor',
    },
    caseStudy: {
      negocio: 'Inmobiliaria pyme (Maule, 4 corredores)',
      perfil: '180 propiedades en portafolio, 350 leads/mes de portales',
      antes: [
        '350 leads/mes; 65 visitas (18.5% conversión)',
        '12 promesas/mes; 8 cierres reales',
        'Corredores pierden 3h/día respondiendo lo mismo',
      ],
      despues: [
        '350 leads/mes; 92 visitas calificadas (26.3% conversión)',
        '16 promesas/mes; 11 cierres reales (+37%)',
        'Corredores liberan 12h/sem para cerrar',
      ],
      roi: 'Incremento ingresos: ~$15M/año por mayor cierre. Copago $1.4M. ROI año 1: 10x',
    },
    faq: [
      {
        q: '¿Se conecta con Portal Inmobiliario, Yapo y Toctoc?',
        a: 'Sí, integraciones nativas con los 3 portales principales. Sincroniza disponibilidad en ambas direcciones.',
      },
      {
        q: '¿Sirve para arriendos también o solo venta?',
        a: 'Ambos. Adaptamos los criterios de calificación (renta mínima, codeudor, plazo de contrato).',
      },
      {
        q: '¿Reemplaza al corredor?',
        a: 'No. Lo libera para hacer lo que solo un humano hace bien: ir a visita, negociar, cerrar. El agente hace el filtro previo y el seguimiento estructurado.',
      },
    ],
    relatedBlogSlugs: [
      'agente-ia-sdr-calificar-leads-b2b-chile',
      'agente-ia-whatsapp-ecommerce-retail-chile',
      'cuanto-cuesta-automatizar-whatsapp-empresa',
      'calcular-roi-proyecto-ia-pyme-chile',
    ],
  },

  // ─── 6. Constructoras y obras ────────────────────────────────
  constructoras: {
    slug: 'constructoras',
    url: '/agentes/sectores/constructoras',
    name: 'Agentes IA para Constructoras',
    emoji: '🏗️',
    kind: 'sector',
    shortDescription:
      'Control de mano de obra en obra, compliance subcontratos, cobranza de estados de pago y atención a clientes. Para constructoras pyme y EE.CC.',
    targetIndustries: ['Constructoras pyme', 'Empresas constructoras', 'Subcontratos', 'Inmobiliarias con obra propia'],
    sectorVocab: ['EE.CC.', 'estado de pago', 'subcontrato', 'jornal', 'partida', 'avance físico', 'multas DT', 'retención laboral'],
    relatedAgents: ['compliance', 'retencion', 'sdr-leads', 'whatsapp-atencion'],
    regions: ['maule', 'ohiggins', 'biobio', 'nuble', 'araucania'],
    meta: {
      title: 'Software y Agentes IA para Constructoras Chile | Control Obra + Compliance | Apps del Sur',
      description:
        'Software de gestión y agentes IA para constructoras chilenas. Control de mano de obra en obra (offline), compliance subcontratos, cobranza estados de pago, atención a clientes. Cumple normativa DT. Financiable con CORFO Digitalización Pyme.',
      keywords:
        'software constructora Chile, control mano obra construcción, compliance subcontrato, estado de pago cobranza, agente IA obra',
      ogTitle: 'Software para Constructoras — Apps del Sur',
      ogDescription:
        'Control de mano de obra offline, compliance subcontratos, cobranza EE.CC. Financiable con CORFO.',
    },
    hero: {
      badge: '🏗️ Constructoras · EE.CC. · Subcontratos',
      titleLine1: 'Control de mano de obra en obra',
      titleHighlight: 'sin internet, sin Excel, sin multas',
      description:
        'En obra no hay señal. El jefe de obra anota a mano. Llega a oficina 3 días después y digita. Resultado: subcontratos sin papeles, estados de pago atrasados, multas de la DT por documentación. El cuaderno de campo digital + agentes IA registran jornales offline, controlan compliance de subcontratos y cobran estados de pago.',
      ctaPrimary: 'Hablar con un especialista por WhatsApp',
      ctaPrimaryHref: wa('constructoras', 'Hola, tengo una constructora y quiero ver Apps del Sur'),
      ctaSecondary: 'Diagnosticar mi madurez digital (gratis · 6 min)',
      ctaSecondaryHref: diagnostico('constructoras'),
    },
    chatMock: {
      title: 'Cómo conversa el agente con el jefe de obra',
      contact: 'Obra Maule · Cuaderno de Obra',
      messages: [
        { from: 'cliente', text: 'Hoy 24 en obra cuartel 3, partida hormigón fundación', time: '07:30' },
        {
          from: 'agente',
          text: '✅ Registrado. Partida 4.2 Hormigón Fundaciones, 24 jornales.\n⚠️ Aviso: Subcontrato MetalCorp lleva 2 días sin entregar póliza ART. Bloquea pago próximo EE.CC.',
          time: '07:30',
        },
        { from: 'cliente', text: 'Avisar a Cristián', time: '07:31' },
        {
          from: 'agente',
          text: 'Enviado a Cristián (administración) con el detalle. 📋\nEE.CC. de septiembre lista para emisión: $42.8M. ¿Genera y envía a mandante?',
          time: '07:31',
        },
        { from: 'cliente', text: 'Sí, genera', time: '07:32' },
        {
          from: 'agente',
          text: 'EE.CC. #9 generado y enviado a Constructora Mandante S.A.\nSeguimiento de cobro automático activado. ⏱️ Plazo pago: 30 días.',
          time: '07:32',
        },
      ],
    },
    painPoints: [
      {
        icon: 'clock',
        title: 'Jornales y avance físico en cuaderno de papel',
        description: 'Jefe de obra anota, llega oficina 3 días después, recién entonces se sabe cuánto se gastó. Imposible corregir a tiempo.',
        metric: '+3 días',
      },
      {
        icon: 'shield',
        title: 'Subcontratos sin documentación al día',
        description: 'F30, F30-1, pólizas ART, certificados de antecedentes. Cuando hay fiscalización DT, llegan multas $5-30M.',
        metric: '$5-30M',
      },
      {
        icon: 'dollar-sign',
        title: 'EE.CC. atrasados → flujo de caja en rojo',
        description: 'Estados de pago se cobran 60-90 días después de emitir. Sin seguimiento sistemático, mandante paga cuando quiere.',
        metric: '+60 días',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Cargamos obra, partidas y subcontratos',
        description: 'Sus partidas presupuestarias, subcontratos y plazos. El sistema aprende su flujo de obra.',
      },
      {
        step: 2,
        title: 'App offline en obra para el jefe',
        description: 'Registra jornales, partidas avanzadas y observaciones desde el celular sin red. Sincroniza al volver.',
      },
      {
        step: 3,
        title: 'Compliance automático de subcontratos',
        description: 'Verifica F30, F30-1, pólizas, certificados. Bloquea pago si falta documentación. Cero multas DT.',
      },
      {
        step: 4,
        title: 'Genera EE.CC. y hace seguimiento de cobro',
        description: 'Calcula avance físico, genera estado de pago, envía a mandante, hace seguimiento por WhatsApp hasta pago.',
      },
    ],
    metrics: [
      { value: '-70%', label: 'Tiempo administrativo', sublabel: 'jefe de obra + oficina' },
      { value: '0', label: 'Multas DT', sublabel: 'con compliance automático' },
      { value: '-20 días', label: 'Cobro EE.CC.', sublabel: 'con seguimiento WhatsApp' },
      { value: '8-12 sem', label: 'Implementación', sublabel: 'según tamaño constructora' },
    ],
    pricing: {
      intro: 'Constructoras pyme parten en plan EE.CC. Constructoras con varias obras simultáneas requieren plan Multi-obra.',
      ventaUnica: [
        {
          tier: 'Constructora Pyme',
          price: '$5.500.000',
          copago: 'Copago $1.4M con CRECE',
          fondo: 'SERCOTEC CRECE',
          features: ['1 obra activa', 'Compliance subcontratos', 'EE.CC. + cobranza', 'Capacitación 8h'],
        },
        {
          tier: 'Multi-obra',
          price: '$9.500.000',
          copago: 'Copago $3.8M (CORFO 60%)',
          fondo: 'CORFO Digitalización',
          highlight: true,
          features: [
            'Hasta 5 obras simultáneas',
            'App offline jefe de obra',
            'Integración con su contable (Defontana, Manager)',
            'Reportes financieros',
            'Soporte 18 meses',
          ],
        },
        {
          tier: 'Constructora Grande',
          price: '$14.000.000+',
          copago: 'Copago $2.8M (FIA 80% si innovación)',
          fondo: 'FIA / CORFO Crea y Valida',
          features: ['Obras ilimitadas', 'BIM-light integración', 'API custom mandante', 'Soporte 24m'],
        },
      ],
      saas: [
        { tier: 'SaaS Pyme', price: '$280K/mes', features: ['1 obra', 'Compliance + EE.CC.'] },
        { tier: 'SaaS Multi', price: '$450K/mes', highlight: true, features: ['Hasta 5 obras', 'Integración contable'] },
        { tier: 'SaaS Grande', price: '$650K/mes', features: ['Obras ilimitadas', 'Soporte prioritario'] },
      ],
    },
    financing: {
      instrumento: 'CORFO Digitalización Pyme + SERCOTEC',
      monto: '$5M - $50M CLP',
      cofinanciamiento: '60-95%',
      descripcion:
        'Constructoras pyme acceden a SERCOTEC CRECE (95%). Pymes con ventas anuales sobre UF 25.000 postulan CORFO Digitalización Pyme (60%). Constructoras grandes con componente de innovación: FIA Interés Privado (80%).',
      quienPostula: 'La constructora',
    },
    caseStudy: {
      negocio: 'Constructora pyme (Maule, 2 obras simultáneas)',
      perfil: '32 trabajadores promedio en obra, 6 subcontratos, EE.CC. mensual ~$80M',
      antes: [
        '3 días de retraso entre obra y oficina',
        'Multa DT $12M en 2025 por F30 atrasado de subcontrato',
        'EE.CC. de septiembre cobrado en diciembre (90 días)',
        '4h/día del jefe de obra en papel + Excel',
      ],
      despues: [
        'Datos llegan al cierre del día (mismo día)',
        '0 multas DT en 12 meses (compliance automático)',
        'EE.CC. de septiembre cobrado en octubre (45 días)',
        'Jefe de obra 30 min/día en el sistema',
      ],
      roi: 'Ahorro multas + caja recuperada: ~$25M/año. Copago $3.8M. ROI año 1: 6.5x',
    },
    faq: [
      {
        q: '¿Funciona sin señal en obra?',
        a: 'Sí. App móvil offline-first. Registra todo sin red, sincroniza al volver a tener señal.',
      },
      {
        q: '¿Reemplaza Defontana, Manager o mi software contable?',
        a: 'No. Se conecta con su sistema contable y le envía datos consolidados. Apps del Sur es para el TERRENO de la obra, no para reemplazar la contabilidad.',
      },
      {
        q: '¿Cómo maneja compliance de la DT (F30, F30-1, pólizas)?',
        a: 'Cada subcontrato tiene checklist de documentos exigidos. El sistema bloquea pago automáticamente si falta algo. Le entrega reporte mensual listo para auditoría.',
      },
      {
        q: '¿Cuánto demora la implementación?',
        a: 'Constructora pyme con 1 obra: 8 semanas. Multi-obra: 10-12 semanas. Constructora grande: 12-16 semanas según integraciones.',
      },
    ],
    relatedBlogSlugs: [
      'ley-21719-proteccion-datos-pymes-chile-2026',
      'cuanto-cuesta-software-a-medida-chile',
      'guia-financiamiento-corfo-fia-digitalizacion-agricola-2026',
      'calcular-roi-proyecto-ia-pyme-chile',
    ],
  },

  // ─── 7. Clubes deportivos y gimnasios ────────────────────────
  'clubes-deportivos': {
    slug: 'clubes-deportivos',
    url: '/agentes/sectores/clubes-deportivos',
    name: 'Agentes IA para Clubes y Gimnasios',
    emoji: '⚽',
    kind: 'sector',
    shortDescription:
      'Retención de socios, agendamiento de clases, cobranza de cuotas y atención por WhatsApp. Para clubes deportivos, gimnasios y academias.',
    targetIndustries: ['Gimnasios', 'Clubes deportivos', 'Academias deportivas', 'Estudios de yoga / crossfit', 'Escuelas de fútbol'],
    sectorVocab: ['socio', 'cuota mensual', 'churn', 'reactivación', 'clase grupal', 'inscripción', 'reserva', 'asistencia'],
    relatedAgents: ['retencion', 'agendamiento', 'whatsapp-atencion'],
    regions: ['maule', 'ohiggins', 'biobio', 'nuble', 'araucania'],
    meta: {
      title: 'Agentes IA para Gimnasios y Clubes Deportivos Chile | Apps del Sur',
      description:
        'Agente IA para gimnasios y clubes deportivos: retención de socios, agendamiento de clases, cobranza de cuotas y atención WhatsApp 24/7. Reduce churn 20-30%. Financiable con SERCOTEC CRECE.',
      keywords:
        'agente IA gimnasio Chile, retención socios gimnasio, agendamiento clase WhatsApp, cobranza cuota mensual, software club deportivo',
      ogTitle: 'Agentes IA para Gimnasios y Clubes — Apps del Sur',
      ogDescription:
        '-25% churn. Reactiva socios inactivos. Cobranza automática. Financiable con CRECE SERCOTEC.',
    },
    hero: {
      badge: '⚽ Gimnasios · Clubes · Academias',
      titleLine1: 'Recupere a los socios',
      titleHighlight: 'antes de que se vayan',
      description:
        'En gimnasios y clubes, el churn anual es 35-50%. Cuando un socio deja de asistir 3 semanas seguidas, ya está pensando en cancelar. El agente IA detecta la baja de asistencia, escribe en el momento correcto con la oferta correcta y rescata 20-30% de los que iban a cancelar.',
      ctaPrimary: 'Probar el agente por WhatsApp',
      ctaPrimaryHref: wa('clubes', 'Hola, tengo un gimnasio/club y quiero ver el agente IA'),
      ctaSecondary: 'Diagnosticar mi madurez IA (gratis · 6 min)',
      ctaSecondaryHref: diagnostico('clubes-deportivos'),
    },
    chatMock: {
      title: 'Cómo reactiva el agente a un socio',
      contact: 'Club Activa · Agente IA',
      messages: [
        {
          from: 'agente',
          text: 'Hola Camila 👋\nVi que no has venido las últimas 3 semanas. ¿Todo bien?\nSi es por tiempo, abrimos un horario nuevo: lunes/jueves 7am. Te lo guardo si quieres 💪',
          time: '18:30',
        },
        { from: 'cliente', text: 'Sí, ando con poco tiempo... el horario nuevo me serviría', time: '18:34' },
        {
          from: 'agente',
          text: 'Perfecto! Te inscribo a la clase lunes 7am.\nPequeño regalo de bienvenida-de-vuelta: 1 sesión personalizada gratis con Felipe esta semana. ¿La agendamos?',
          time: '18:34',
        },
        { from: 'cliente', text: 'Genial sí', time: '18:35' },
        {
          from: 'agente',
          text: 'Lista 🎉 Jueves 18:00 con Felipe + lunes 7am clase grupal. Te recuerdo el día antes.',
          time: '18:35',
        },
      ],
    },
    painPoints: [
      {
        icon: 'dollar-sign',
        title: '35-50% churn anual = mitad del trabajo es captar socios nuevos',
        description: 'Captar cuesta 5x más que retener. El gimnasio se la pasa haciendo marketing en vez de aumentar LTV.',
        metric: '35-50%',
      },
      {
        icon: 'clock',
        title: 'Cuota impaga = socio perdido en 30 días',
        description: 'Sin recordatorio sistemático de pago, el socio "se olvida", se atrasa, y cuando vuelven a cobrar ya canceló.',
        metric: '30 días',
      },
      {
        icon: 'bar-chart',
        title: 'Sin medir asistencia = no se ve la baja a tiempo',
        description: 'Cuando el dueño nota que María "ya no viene", ya pasaron 6 semanas. Demasiado tarde para rescatarla.',
        metric: '6 sem',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Conectamos su sistema de socios (Bsale, GymLab, Excel)',
        description: 'Cargamos socios activos, su plan, asistencia, fecha de inscripción y último pago.',
      },
      {
        step: 2,
        title: 'Detecta caída de asistencia en tiempo real',
        description: 'Si un socio baja >50% su asistencia habitual, dispara protocolo de reactivación a los 14 días.',
      },
      {
        step: 3,
        title: 'Cobranza automática de cuotas',
        description: 'Recordatorio amable 3 días antes, link de pago Webpay/MercadoPago al vencer, escalamiento gradual.',
      },
      {
        step: 4,
        title: 'Agenda clases y reserva máquinas/canchas',
        description: 'Socios reservan clase, cancha o sesión PT desde WhatsApp. Confirmación y recordatorio automático.',
      },
    ],
    metrics: [
      { value: '-25%', label: 'Churn anual', sublabel: 'con protocolo de reactivación' },
      { value: '+18%', label: 'Cobranza al día', sublabel: 'con recordatorios' },
      { value: '24/7', label: 'Reservas clases', sublabel: 'sin recepcionista' },
      { value: '3 sem', label: 'Implementación', sublabel: 'plan estándar' },
    ],
    pricing: {
      intro: 'Gimnasios pyme parten en plan Retención. Cadenas multi-sede van a plan Pro. Financiable con CRECE o Kit Digital.',
      ventaUnica: [
        {
          tier: 'Gimnasio Pyme',
          price: '$2.500.000',
          copago: 'Copago $750K con CRECE',
          fondo: 'SERCOTEC CRECE',
          features: ['Hasta 300 socios', 'Retención + agendamiento clases', 'Capacitación 6h'],
        },
        {
          tier: 'Combo Club',
          price: '$4.800.000',
          copago: 'Copago $1.5M con CRECE',
          fondo: 'SERCOTEC CRECE',
          highlight: true,
          features: [
            'Hasta 1.000 socios',
            'Retención + Agendamiento + Cobranza',
            'Integración Bsale / GymLab',
            'Reportes de churn',
            'Soporte 12 meses',
          ],
        },
        {
          tier: 'Cadena Multi-sede',
          price: '$8.000.000',
          copago: 'Copago $3.2M (CORFO 60%)',
          fondo: 'CORFO Digitalización',
          features: ['Multi-sede', 'API integración propia', 'Reportes consolidados', 'Soporte 18m'],
        },
      ],
      saas: [
        { tier: 'SaaS Pyme', price: '$120K/mes', features: ['Hasta 300 socios'] },
        { tier: 'SaaS Combo', price: '$220K/mes', highlight: true, features: ['Hasta 1.000 socios', 'Combo completo'] },
        { tier: 'SaaS Cadena', price: '$350K/mes', features: ['Multi-sede'] },
      ],
    },
    financing: {
      instrumento: 'SERCOTEC CRECE / Kit Digital',
      monto: '$1.2M - $20M CLP',
      cofinanciamiento: '60-95%',
      descripcion:
        'Gimnasios y clubes deportivos pyme acceden a Kit Digital ($1.2M, 100%) o SERCOTEC CRECE ($5M, 95%). Cadenas multi-sede con ventas > UF 25.000 anuales: CORFO Digitalización Pyme (60%).',
      quienPostula: 'El gimnasio o club',
    },
    caseStudy: {
      negocio: 'Gimnasio pyme (Talca, ~450 socios)',
      perfil: 'Crossfit + cardio + clases grupales, plan único $42K/mes',
      antes: [
        'Churn 42%/año = 189 socios pierde y debe reemplazar',
        '23% socios con cuota atrasada (mes en curso)',
        '~$4.2M/año en cuotas no cobradas',
        'Sin medir asistencia individual',
      ],
      despues: [
        'Churn 28%/año = 126 socios pierde (rescata 63 al año)',
        '6% socios con cuota atrasada',
        'Captura $2.8M/año extra en cuotas + LTV',
        'Reactivación proactiva basada en caída de asistencia',
      ],
      roi: 'Ingresos recuperados: ~$6M/año. Copago $1.5M. ROI año 1: 4x',
    },
    faq: [
      {
        q: '¿Se conecta con Bsale, GymLab o mi sistema de socios?',
        a: 'Sí. Integraciones nativas con Bsale, GymLab y Defontana. Para sistemas propios desarrollamos integración por API.',
      },
      {
        q: '¿Cobra automáticamente la cuota mensual?',
        a: 'Genera link de pago Webpay/MercadoPago/Flow y lo envía al socio antes del vencimiento. Si no paga, escala con recordatorios crecientes.',
      },
      {
        q: '¿Cómo evita que la reactivación se sienta invasiva?',
        a: 'El agente tiene tono empático ("vi que no has venido, todo bien?") y solo escala si el socio responde. Si no responde, deja descansar 30 días antes de re-intentar.',
      },
    ],
    relatedBlogSlugs: [
      'agente-ia-retencion-gimnasios-chile',
      'agente-ia-peluquerias-barberias-chile',
      'cuanto-cuesta-automatizar-whatsapp-empresa',
      'calcular-roi-proyecto-ia-pyme-chile',
    ],
  },

  // ─── 8. Funerarias y servicios sensibles ─────────────────────
  funerarias: {
    slug: 'funerarias',
    url: '/agentes/sectores/funerarias',
    name: 'Agentes IA para Funerarias',
    emoji: '🕊️',
    kind: 'sector',
    shortDescription:
      'Atención 24/7 con tono apropiado, cuota mortuoria, coordinación de servicios y gestión digital end-to-end. Para funerarias pyme y proveedores del Estado.',
    targetIndustries: ['Funerarias', 'Servicios funerarios', 'Cementerios', 'Asistencia funeraria mutual'],
    sectorVocab: ['servicio', 'velorio', 'cremación', 'cuota mortuoria', 'sepultación', 'cortejo', 'ChileCompra'],
    relatedAgents: ['cuota-mortuoria', 'whatsapp-atencion', 'compliance'],
    regions: ['maule', 'ohiggins', 'biobio', 'nuble', 'araucania'],
    meta: {
      title: 'Sistema de Gestión Digital + Agentes IA para Funerarias Chile | Apps del Sur',
      description:
        'Sistema de gestión y agentes IA para funerarias chilenas. Atención 24/7 con tono apropiado, cuota mortuoria automatizada, coordinación de servicios, facturación electrónica. Ideal para funerarias pyme y proveedores del Estado. Financiable con SERCOTEC CRECE.',
      keywords:
        'software funeraria Chile, agente IA cuota mortuoria, sistema gestión funeraria pyme, atención 24/7 servicio funerario, ChileCompra funeraria',
      ogTitle: 'Sistema de Gestión para Funerarias — Apps del Sur',
      ogDescription:
        'Atención 24/7, cuota mortuoria, coordinación de servicios. Para funerarias pyme. Financiable CRECE.',
    },
    hero: {
      badge: '🕊️ Funerarias · Servicios sensibles',
      titleLine1: 'Atención digna 24/7,',
      titleHighlight: 'sin perder ni una llamada',
      description:
        'En funerarias, la llamada llega a las 3am y no puede quedar sin responder. Pero atender personalmente toda llamada no escala. El agente IA atiende con tono apropiado, recopila la información esencial, coordina con el equipo de turno y maneja cuota mortuoria, todo respetando la sensibilidad del momento.',
      ctaPrimary: 'Hablar por WhatsApp',
      ctaPrimaryHref: wa('funerarias', 'Hola, tengo una funeraria y quiero ver Apps del Sur'),
      ctaSecondary: 'Diagnosticar mi madurez digital (gratis · 6 min)',
      ctaSecondaryHref: diagnostico('funerarias'),
    },
    chatMock: {
      title: 'Cómo conversa el agente con una familia',
      contact: 'Funeraria Familiar · Agente',
      messages: [
        { from: 'cliente', text: 'Buenas noches, falleció mi padre. Necesitamos servicio', time: '02:14' },
        {
          from: 'agente',
          text: 'Lamento profundamente lo que está viviendo. Estoy acá para ayudarlos.\n¿Me puede confirmar:\n• Ciudad/comuna\n• Si el fallecimiento fue en domicilio u hospital\n\nUna vez confirmado paso al equipo de turno para coordinar todo.',
          time: '02:14',
        },
        { from: 'cliente', text: 'Talca, en hospital regional', time: '02:16' },
        {
          from: 'agente',
          text: 'Comprendido. Aviso a Eduardo (turno noche) — la llamará en 5 minutos para coordinar retiro y servicio.\nMientras tanto: ¿el fallecido tenía cuota mortuoria o seguro? (Si no sabe, no se preocupe — lo revisamos juntos)',
          time: '02:16',
        },
        { from: 'cliente', text: 'Sí, AFP Habitat', time: '02:17' },
        {
          from: 'agente',
          text: 'Perfecto. Tramitamos cuota mortuoria con AFP Habitat (~$4.3M aprox). Eduardo le explicará los pasos al llamarla.\nNuestro pésame sincero. Estamos con ustedes 🕊️',
          time: '02:17',
        },
      ],
    },
    painPoints: [
      {
        icon: 'clock',
        title: 'Llamadas a las 3am que nadie puede dejar pasar',
        description: 'Funeraria pyme no puede pagar 3 turnos. Si pierde la llamada, la familia escoge otra funeraria.',
        metric: '24/7',
      },
      {
        icon: 'dollar-sign',
        title: 'Cuota mortuoria manual = 2-3 semanas de demora',
        description: 'Trámite AFP/IPS hecho a mano: papelería física, idas y vueltas. La familia espera mientras la funeraria adelanta plata.',
        metric: '2-3 sem',
      },
      {
        icon: 'smartphone',
        title: 'Operación 100% manual en papel y WhatsApp personal',
        description: 'Pedidos, urnas, flores, cementerio: todo en cuadernos. Imposible reportar al SII o ChileCompra con orden.',
        metric: 'papel',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Conectamos su WhatsApp Business + sucursales',
        description: 'Una sola línea atiende todas las sucursales. El agente deriva al turno geográficamente correcto.',
      },
      {
        step: 2,
        title: 'Triage del servicio (tono apropiado)',
        description: 'Recopila ubicación, tipo de servicio, AFP/seguros, sin presionar. Pasa siempre al humano para lo emocional.',
      },
      {
        step: 3,
        title: 'Cuota mortuoria automatizada',
        description: 'Genera trámite AFP/IPS digital, hace seguimiento del pago, libera flujo de caja a la funeraria.',
      },
      {
        step: 4,
        title: 'Coordinación end-to-end (proveedores + facturación)',
        description: 'Gestiona urna, flores, cementerio, transporte. Emite factura electrónica al final. Reporta a SII/ChileCompra.',
      },
    ],
    metrics: [
      { value: '24/7', label: 'Atención', sublabel: 'sin perder llamadas' },
      { value: '-50%', label: 'Demora cuota mortuoria', sublabel: 'AFP/IPS digital' },
      { value: '+15-20%', label: 'Servicios captados', sublabel: 'por respuesta nocturna' },
      { value: '6-10 sem', label: 'Implementación', sublabel: 'según sucursales' },
    ],
    pricing: {
      intro: 'Plan principal: gestión funeraria + cuota mortuoria + atención 24/7. Financiable con SERCOTEC CRECE.',
      ventaUnica: [
        {
          tier: 'Funeraria 1 Sucursal',
          price: '$3.500.000',
          copago: 'Copago $800K con CRECE',
          fondo: 'SERCOTEC CRECE',
          features: ['1 sucursal', 'Atención 24/7', 'Cuota mortuoria', 'Capacitación 8h'],
        },
        {
          tier: 'Funeraria Multi-sucursal',
          price: '$5.250.000',
          copago: 'Copago $500-800K con CRECE',
          fondo: 'SERCOTEC CRECE',
          highlight: true,
          features: [
            'Hasta 3 sucursales',
            'Atención 24/7 + cuota mortuoria',
            'Facturación electrónica + ChileCompra',
            'Coordinación con proveedores',
            'Soporte 12 meses',
          ],
        },
        {
          tier: 'Empresa Funeraria',
          price: '$9.500.000',
          copago: 'Copago $3.8M (CORFO 60%)',
          fondo: 'CORFO Digitalización',
          features: ['Sucursales ilimitadas', 'Integración ERP', 'Reportes ChileCompra', 'Soporte 24m'],
        },
      ],
      saas: [
        { tier: 'SaaS 1 Suc.', price: '$180K/mes', features: ['1 sucursal', '24/7'] },
        { tier: 'SaaS Multi', price: '$280K/mes', highlight: true, features: ['Hasta 3 suc.', 'Combo completo'] },
        { tier: 'SaaS Empresa', price: '$420K/mes', features: ['Suc. ilimitadas', 'ERP integrado'] },
      ],
    },
    financing: {
      instrumento: 'SERCOTEC CRECE / Kit Digital',
      monto: '$1.2M - $5M CLP',
      cofinanciamiento: '95-100%',
      descripcion:
        'Funerarias pyme acceden a SERCOTEC CRECE ($5M, 95% cubierto). Funerarias micro a Kit Digital ($1.2M, 100% cubierto). Apps del Sur acompaña sin costo en la postulación.',
      quienPostula: 'La funeraria',
    },
    caseStudy: {
      negocio: 'Funeraria pyme (Talca, 3 sucursales)',
      perfil: '~140 servicios/año, proveedor del Estado (ChileCompra), operación 100% manual',
      antes: [
        'Pierde ~12 llamadas/mes en horario nocturno',
        'Cuota mortuoria demora 2-3 semanas',
        'Sin facturación electrónica ni reportes SII al día',
        'WhatsApp personal del dueño 24/7 (burnout)',
      ],
      despues: [
        'Atiende 100% de llamadas nocturnas, captura +18 servicios/año',
        'Cuota mortuoria en 7-10 días',
        'Facturación electrónica + reportes SII/ChileCompra automáticos',
        'Dueño descansa, agente filtra y agente humano de turno coordina',
      ],
      roi: 'Servicios extras + ahorro tiempo: ~$28M/año. Copago $800K (CRECE). ROI año 1: 35x',
    },
    faq: [
      {
        q: '¿El tono del agente es apropiado para el contexto funerario?',
        a: 'Sí. El agente está entrenado específicamente para este sector: empático, no comercial, sin emojis inadecuados. Solo recopila lo esencial y pasa rápido al humano para lo emocional.',
      },
      {
        q: '¿Tramita cuota mortuoria AFP/IPS realmente?',
        a: 'Sí. Genera la solicitud digital con AFP Habitat, Cuprum, Provida, Modelo, Capital y Plan Vital, y con IPS. Hace seguimiento hasta el pago.',
      },
      {
        q: '¿Se conecta con ChileCompra?',
        a: 'Sí. Si es proveedor del Estado, generamos reportes y comprobantes automáticos para ChileCompra.',
      },
    ],
    relatedBlogSlugs: [
      'cuanto-cuesta-software-a-medida-chile',
      'cuanto-cuesta-automatizar-whatsapp-empresa',
      'ley-21719-proteccion-datos-pymes-chile-2026',
    ],
  },
};

export const sectorList = Object.values(sectorPages);
