// ─── Verticales de Agentes IA ──────────────────────────────────
// Cada vertical = una landing en /agentes/<slug>
// Modelo: WhatsApp como canal principal (98% apertura en Chile),
// CTA primario a WhatsApp, CTA secundario a /diagnostico-madurez-ia/.

export interface ChatMessage {
  from: 'cliente' | 'agente';
  text: string;
  time?: string;
}

export interface PainPoint {
  icon: string;
  title: string;
  description: string;
  metric?: string;
}

export interface HowStep {
  step: number;
  title: string;
  description: string;
}

export interface Metric {
  value: string;
  label: string;
  sublabel?: string;
}

export interface PricingTier {
  tier: string;
  price: string;
  copago?: string;
  fondo?: string;
  features: string[];
  highlight?: boolean;
}

export interface AgentPage {
  slug: string;
  url: string;
  name: string;
  emoji: string;
  shortDescription: string;
  targetIndustries: string[];
  /**
   * 'function' = horizontal agent landing (e.g. agendamiento, sdr-leads).
   * 'sector'   = vertical sector hub (e.g. clinicas, hoteles-turismo).
   * Defaults to 'function' when undefined.
   */
  kind?: 'function' | 'sector';
  /**
   * Sector-only: slugs of functional agents that serve this sector.
   * Used to render the "Agentes que usa este rubro" grid linking to /agentes/<slug>.
   */
  relatedAgents?: string[];
  /**
   * Sector-only: vocabulary of the trade displayed in the hub
   * (e.g. clinicas: "ficha del paciente", "no-show", "presupuesto"). Boosts sectorial SEO.
   */
  sectorVocab?: string[];
  /**
   * Sector-only: short list of regions where the sector has differentiated content.
   * Used to render the "Servimos en estas regiones" block linking to sector×region pages.
   */
  regions?: string[];
  meta: {
    title: string;
    description: string;
    keywords: string;
    ogTitle: string;
    ogDescription: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    description: string;
    ctaPrimary: string;
    ctaPrimaryHref: string;
    ctaSecondary: string;
    ctaSecondaryHref: string;
  };
  chatMock: {
    title: string;
    contact: string;
    messages: ChatMessage[];
  };
  painPoints: PainPoint[];
  howItWorks: HowStep[];
  metrics: Metric[];
  pricing: {
    intro: string;
    ventaUnica: PricingTier[];
    saas: PricingTier[];
  };
  financing: {
    instrumento: string;
    monto: string;
    cofinanciamiento: string;
    descripcion: string;
    quienPostula: string;
  };
  caseStudy: {
    negocio: string;
    perfil: string;
    antes: string[];
    despues: string[];
    roi: string;
  };
  faq: Array<{ q: string; a: string }>;
  relatedBlogSlugs: string[];
}

// WhatsApp del contacto — preconfigurado por vertical
export const wa = (slug: string, mensaje: string) =>
  `https://wa.me/56945262335?text=${encodeURIComponent(mensaje)}`;

export const diagnostico = (slug: string) => `/diagnostico-madurez-ia/?source=agentes-${slug}`;

export const agentPages: Record<string, AgentPage> = {
  // ─── 1. Agendamiento ─────────────────────────────────────────
  agendamiento: {
    slug: 'agendamiento',
    url: '/agentes/agendamiento',
    name: 'Agente de Agendamiento',
    emoji: '📅',
    shortDescription:
      'Agenda citas 24/7 por WhatsApp. Confirma, reagenda y reduce no-shows en 60%.',
    targetIndustries: ['Clínicas dentales', 'Médicos', 'Peluquerías', 'Spa', 'Talleres mecánicos'],
    meta: {
      title: 'Agente IA de Agendamiento por WhatsApp para Pymes Chile | Apps del Sur',
      description:
        'Agente de IA que agenda citas 24/7 por WhatsApp. Reduce no-shows en 60%, libera al equipo y captura reservas fuera de horario. Para clínicas, peluquerías, spa y talleres. Financiable con Kit Digital SERCOTEC.',
      keywords:
        'agente IA agendamiento Chile, bot WhatsApp citas, software agendamiento clínica dental, agenda automática peluquería, reservas WhatsApp pyme',
      ogTitle: 'Agente IA de Agendamiento por WhatsApp — Apps del Sur',
      ogDescription:
        'Agenda 24/7 desde WhatsApp. -60% no-shows. Implementación 2 semanas. Financiable con Kit Digital SERCOTEC ($1.2M, ~100% cubierto).',
    },
    hero: {
      badge: '🟢 Agente IA · WhatsApp · Chile',
      titleLine1: 'Su recepcionista digital que agenda',
      titleHighlight: '24/7 por WhatsApp y nunca duerme',
      description:
        'El 70% de las consultas para agendar llegan fuera de horario. Si nadie responde, su cliente agenda con la competencia. Nuestro agente IA atiende, agenda, confirma y reagenda — todo por WhatsApp, en segundos.',
      ctaPrimary: 'Probar el agente por WhatsApp',
      ctaPrimaryHref: wa(
        'agendamiento',
        'Hola, quiero ver una demo del Agente de Agendamiento de Apps del Sur',
      ),
      ctaSecondary: 'Diagnosticar mi madurez IA (gratis · 6 min)',
      ctaSecondaryHref: diagnostico('agendamiento'),
    },
    chatMock: {
      title: 'Cómo conversa el agente',
      contact: 'Clínica Sonrisas · Agente IA',
      messages: [
        { from: 'cliente', text: 'Hola, necesito hora para limpieza dental', time: '21:34' },
        {
          from: 'agente',
          text: '¡Hola! 😊 Tengo disponibles:\n• Mañana 10:30 con Dra. Pérez\n• Mañana 16:00 con Dr. Soto\n• Jueves 09:00 con Dra. Pérez\n¿Cuál prefiere?',
          time: '21:34',
        },
        { from: 'cliente', text: 'Jueves 9 está perfecto', time: '21:35' },
        {
          from: 'agente',
          text: 'Listo ✅ Reservada para jueves 09:00 con Dra. Pérez.\n¿Puede confirmarme su nombre y RUT para la ficha?',
          time: '21:35',
        },
        { from: 'cliente', text: 'María González, 15.234.567-8', time: '21:36' },
        {
          from: 'agente',
          text: 'Confirmado, María 🎉\nLe enviaré un recordatorio 24h antes. Si necesita reagendar, solo escríbame.',
          time: '21:36',
        },
      ],
    },
    painPoints: [
      {
        icon: 'clock',
        title: '70% de las consultas llegan fuera de horario',
        description:
          'WhatsApp se acumula al cierre del día. Cuando responden a la mañana siguiente, el cliente ya agendó en otro lado.',
        metric: '70%',
      },
      {
        icon: 'dollar-sign',
        title: 'No-shows: 1 de cada 5 horas se pierde',
        description:
          'Sin recordatorios automáticos, las inasistencias destruyen la productividad de profesionales y peluqueros.',
        metric: '20%',
      },
      {
        icon: 'smartphone',
        title: 'La recepcionista pasa el día tipeando',
        description:
          'Tiempo que podría estar atendiendo presencial o vendiendo se va en agendar, confirmar y reagendar.',
        metric: '3h/día',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Conectamos su WhatsApp Business',
        description:
          'Usamos la API oficial de WhatsApp. Su número actual sigue funcionando — el agente atiende automáticamente cuando usted no puede.',
      },
      {
        step: 2,
        title: 'Entrenamos al agente con su agenda',
        description:
          'Cargamos servicios, profesionales, horarios y precios. El agente aprende su negocio en 3 días.',
      },
      {
        step: 3,
        title: 'Atiende, agenda y confirma 24/7',
        description:
          'Responde en menos de 10 segundos. Reserva en su sistema actual (Google Calendar, Reservo, Bsale, Defontana o el suyo).',
      },
      {
        step: 4,
        title: 'Pasa a un humano cuando corresponde',
        description:
          'Si la consulta es compleja (presupuesto, queja, caso clínico), avisa al equipo en segundos para tomar la conversación.',
      },
    ],
    metrics: [
      { value: '-60%', label: 'No-shows', sublabel: 'con recordatorios automáticos' },
      { value: '<10s', label: 'Tiempo de respuesta', sublabel: 'vs. horas en horario manual' },
      { value: '+30%', label: 'Citas captadas', sublabel: 'fuera del horario laboral' },
      { value: '2 sem', label: 'Implementación', sublabel: 'desde la firma' },
    ],
    pricing: {
      intro:
        'Dos formas de adquirirlo. La venta única es financiable con Kit Digital SERCOTEC ($1.2M, ~100% del costo cubierto para microempresas).',
      ventaUnica: [
        {
          tier: 'Starter',
          price: '$1.800.000 CLP',
          copago: 'Copago $600K con Kit Digital',
          fondo: 'Kit Digital SERCOTEC',
          features: [
            '1 número WhatsApp Business',
            'Hasta 500 conversaciones/mes',
            'Integración con Google Calendar o Reservo',
            'Recordatorios automáticos',
            'Capacitación 4h + soporte 6 meses',
          ],
        },
        {
          tier: 'Pro',
          price: '$2.800.000 CLP',
          copago: 'Copago $1.6M con Kit Digital + aporte propio',
          fondo: 'Kit Digital + aporte propio',
          highlight: true,
          features: [
            'Hasta 3 sucursales / profesionales',
            'Conversaciones ilimitadas',
            'Integración con CRM (HubSpot, Bsale, Defontana)',
            'Confirmación automática 24h + 2h antes',
            'Capacitación 8h + soporte 12 meses',
            'Reportes de conversión y no-shows',
          ],
        },
        {
          tier: 'Enterprise',
          price: '$3.500.000 CLP',
          copago: 'Financiable con SERCOTEC CRECE ($5M)',
          fondo: 'SERCOTEC CRECE',
          features: [
            'Sucursales ilimitadas',
            'Integración con sistema propio (API)',
            'Pagos automáticos por WhatsApp (Webpay, MercadoPago)',
            'Soporte prioritario 24 meses',
            'Customización avanzada del flujo',
          ],
        },
      ],
      saas: [
        {
          tier: 'Starter',
          price: '$80.000 CLP/mes',
          features: ['1 WhatsApp', '300 conversaciones/mes', 'Soporte por email'],
        },
        {
          tier: 'Pro',
          price: '$150.000 CLP/mes',
          highlight: true,
          features: [
            'Hasta 3 profesionales',
            'Conversaciones ilimitadas',
            'Integración con calendario',
            'Soporte WhatsApp + email',
          ],
        },
        {
          tier: 'Enterprise',
          price: '$200.000 CLP/mes',
          features: ['Multi-sucursal', 'Integración con su sistema', 'Soporte prioritario'],
        },
      ],
    },
    financing: {
      instrumento: 'Kit Digital SERCOTEC',
      monto: 'Hasta $1.200.000 CLP',
      cofinanciamiento: '~100% para microempresas',
      descripcion:
        'El Kit Digital de SERCOTEC cubre prácticamente el costo total del plan Starter para microempresas formalizadas con ventas menores a UF 25.000 anuales. Nosotros le ayudamos a postular sin costo.',
      quienPostula: 'La microempresa beneficiaria',
    },
    caseStudy: {
      negocio: 'Clínica dental tipo (Talca)',
      perfil: '2 dentistas, 1 recepcionista, ~180 pacientes/mes',
      antes: [
        '12 horas/semana de la recepcionista solo en WhatsApp',
        '22% de no-shows ($1.4M/mes en horas perdidas)',
        '~35 consultas/mes sin responder fuera de horario',
      ],
      despues: [
        'Recepcionista dedica 3 horas/semana a WhatsApp (resto presencial + ventas)',
        '8% de no-shows con recordatorios automáticos ($900K/mes recuperados)',
        '0 consultas sin responder. +14 citas/mes captadas de noche',
      ],
      roi: 'Ahorro estimado: $2.3M/mes. ROI mes 1.',
    },
    faq: [
      {
        q: '¿Necesito tener WhatsApp Business o pagar Meta?',
        a: 'Sí, se requiere WhatsApp Business API (gratis para abrir, Meta cobra por conversación iniciada por la empresa — ~$15-30 CLP por conversación dependiendo del tipo). Nosotros le ayudamos a configurarlo. El cliente que escribe primero no genera costo Meta.',
      },
      {
        q: '¿Qué pasa con la Ley de Protección de Datos (Ley 19.628)?',
        a: 'El agente cumple con la nueva Ley 21.719 (entrada en vigencia 2026). Los datos se almacenan en servidores con consentimiento explícito, no se comparten con terceros, y el cliente puede pedir su eliminación en cualquier momento.',
      },
      {
        q: '¿Cuánto demora la implementación?',
        a: 'Plan Starter: 2 semanas. Plan Pro: 3-4 semanas. Plan Enterprise: 6-8 semanas dependiendo de las integraciones.',
      },
      {
        q: '¿Se conecta con mi sistema actual (Reservo, Defontana, Bsale)?',
        a: 'Sí. Tenemos integraciones nativas con Google Calendar, Reservo, Bsale y Defontana. Para sistemas propios desarrollamos la integración vía API (incluido en plan Enterprise).',
      },
      {
        q: '¿El agente puede equivocarse?',
        a: 'Sí, como cualquier sistema. Por eso configuramos reglas claras: si la consulta es compleja o el cliente pide "hablar con una persona", el agente pasa la conversación a su equipo en segundos. Usted ve todo el historial.',
      },
      {
        q: '¿Funciona en español chileno?',
        a: 'Sí. Usamos modelos de IA entrenados con español de Chile (modismos, formas de tratar al cliente, lenguaje formal/informal según su marca).',
      },
    ],
    relatedBlogSlugs: [
      'agente-ia-agendamiento-clinicas-dentales-chile',
      'agente-ia-peluquerias-barberias-chile',
      'agente-ia-turismo-hoteles-restaurantes-tour-operadores-chile',
      'como-crear-agente-ia-agendamiento-whatsapp-chile-2026',
      'cuanto-cuesta-automatizar-whatsapp-empresa',
      'cuanto-cuesta-implementar-ia-pyme-chile',
    ],
  },

  // ─── 2. Atención WhatsApp Retail/Ecom ────────────────────────
  'whatsapp-atencion': {
    slug: 'whatsapp-atencion',
    url: '/agentes/whatsapp-atencion',
    name: 'Agente de Atención WhatsApp',
    emoji: '💬',
    shortDescription:
      'Responde tracking de pedidos, FAQs y consultas de venta 24/7. Deflexión de 70% de tickets.',
    targetIndustries: ['Retail', 'E-commerce', 'Marketplaces', 'Servicios B2C'],
    meta: {
      title: 'Agente IA de Atención al Cliente por WhatsApp para Retail y E-commerce | Apps del Sur',
      description:
        'Agente IA que atiende WhatsApp 24/7: tracking de pedidos, devoluciones, FAQ, recomendaciones de producto. Deflexión 70%, conversión +25%. Para retail y e-commerce en Chile. Financiable con CRECE SERCOTEC ($5M).',
      keywords:
        'agente IA WhatsApp retail Chile, atención cliente automática, chatbot WhatsApp ecommerce, soporte 24/7 IA, tracking pedidos WhatsApp',
      ogTitle: 'Agente IA de Atención WhatsApp para Retail — Apps del Sur',
      ogDescription:
        '98% apertura WhatsApp. Resuelve tracking, FAQ y ventas 24/7. Financiable con CRECE SERCOTEC ($5M, 95% cubierto).',
    },
    hero: {
      badge: '🟢 Agente IA · WhatsApp · Retail',
      titleLine1: 'Atienda 1.000 clientes a la vez',
      titleHighlight: 'sin contratar más gente',
      description:
        'WhatsApp tiene 98% de tasa de apertura en Chile vs. 21% del email. Pero responder cada "¿dónde está mi pedido?" agota al equipo. El agente responde al instante, libera al equipo para casos complejos y vende mientras conversa.',
      ctaPrimary: 'Probar el agente por WhatsApp',
      ctaPrimaryHref: wa(
        'whatsapp-atencion',
        'Hola, quiero ver una demo del Agente de Atención WhatsApp de Apps del Sur',
      ),
      ctaSecondary: 'Diagnosticar mi madurez IA (gratis · 6 min)',
      ctaSecondaryHref: diagnostico('whatsapp-atencion'),
    },
    chatMock: {
      title: 'Cómo conversa el agente',
      contact: 'Tienda Maipo · Agente IA',
      messages: [
        { from: 'cliente', text: 'Hola, dónde está mi pedido #84512?', time: '22:18' },
        {
          from: 'agente',
          text: 'Hola Camila 👋\nSu pedido #84512 está en camino:\n📦 Despachado el 14/05\n🚚 Starken — En reparto\n📍 Llega hoy entre 16:00 y 19:00\nCódigo seguimiento: ST-998123',
          time: '22:18',
        },
        { from: 'cliente', text: 'Genial gracias. ¿Tienen la misma polera en talla M?', time: '22:19' },
        {
          from: 'agente',
          text: '¡Sí! Polera Verano · Talla M · color Mostaza disponible.\n💰 $14.990 (envío gratis sobre $25K)\n¿Le ayudo a hacer el pedido?',
          time: '22:19',
        },
        { from: 'cliente', text: 'Sí, agrégala', time: '22:20' },
        {
          from: 'agente',
          text: 'Listo ✅ Polera M Mostaza agregada.\nPara cerrar: https://maipo.cl/checkout/9k2x\nPaga en 30 segundos con Webpay o MercadoPago 💳',
          time: '22:20',
        },
      ],
    },
    painPoints: [
      {
        icon: 'clock',
        title: 'El 80% de los mensajes son "¿dónde está mi pedido?"',
        description:
          'El equipo se quema respondiendo lo mismo. Las consultas reales de venta quedan ignoradas o se responden tarde.',
        metric: '80%',
      },
      {
        icon: 'dollar-sign',
        title: 'Cada hora sin responder = ventas perdidas',
        description:
          'En e-commerce, un lead que pregunta y no recibe respuesta en 10 min se va. Compra en la competencia.',
        metric: '10min',
      },
      {
        icon: 'smartphone',
        title: 'Email tiene 21% de apertura. WhatsApp tiene 98%',
        description:
          'Pero atender WhatsApp manualmente no escala. Necesita un agente que responda en segundos y venda mientras conversa.',
        metric: '98%',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Conectamos WhatsApp Business API',
        description:
          'Mantiene su número actual. Activamos la API oficial de Meta (sin riesgo de bloqueo).',
      },
      {
        step: 2,
        title: 'Cargamos su catálogo y FAQs',
        description:
          'Productos, precios, políticas de envío y devolución, tracking de pedidos (conexión con su tienda o ERP).',
      },
      {
        step: 3,
        title: 'Responde tracking, FAQ y vende 24/7',
        description:
          'Resuelve consultas en segundos. Recomienda productos. Genera links de pago. Maneja devoluciones simples.',
      },
      {
        step: 4,
        title: 'Pasa a humano cuando es necesario',
        description:
          'Reclamos, casos complejos o clientes VIP llegan a su equipo con todo el contexto previo. Cero fricción.',
      },
    ],
    metrics: [
      { value: '70%', label: 'Deflexión de tickets', sublabel: 'sin contacto humano' },
      { value: '+25%', label: 'Conversión', sublabel: 'mensajes que terminan en venta' },
      { value: '98%', label: 'Apertura WhatsApp', sublabel: 'vs 21% email' },
      { value: '24/7', label: 'Atención', sublabel: 'sin domingo ni feriado' },
    ],
    pricing: {
      intro:
        'Modelo principal: venta única + soporte. Financiable con CRECE SERCOTEC ($5M, 95% cubierto) o Kit Digital ($1.2M). Plan SaaS mensual disponible como alternativa.',
      ventaUnica: [
        {
          tier: 'Starter',
          price: '$3.000.000 CLP',
          copago: 'Copago $800K con CRECE',
          fondo: 'SERCOTEC CRECE',
          features: [
            'WhatsApp Business API',
            'Hasta 2.000 conversaciones/mes',
            'FAQ + tracking pedidos (Shopify, WooCommerce, Tiendanube, Jumpseller)',
            'Capacitación 8h + soporte 12 meses',
          ],
        },
        {
          tier: 'Pro',
          price: '$4.500.000 CLP',
          copago: 'Copago $1M con CRECE',
          fondo: 'SERCOTEC CRECE',
          highlight: true,
          features: [
            'Conversaciones ilimitadas',
            'Catálogo de productos + recomendaciones IA',
            'Generación de links de pago (Webpay, MercadoPago, Flow)',
            'Devoluciones y cambios simples automatizados',
            'CRM integrado (HubSpot, Pipedrive) o el suyo',
            'Reportes de conversión y CSAT',
          ],
        },
        {
          tier: 'Enterprise',
          price: '$8.000.000 CLP',
          copago: 'Copago $3.2M con CORFO Digitalización 60%',
          fondo: 'CORFO Digitalización Pyme',
          features: [
            'Multi-tienda / multi-marca',
            'Integración con ERP propio (SAP, Defontana, Bsale)',
            'Agente segmentado por canal (B2C, B2B, mayorista)',
            'Soporte prioritario 24 meses',
          ],
        },
      ],
      saas: [
        {
          tier: 'Starter',
          price: '$150.000 CLP/mes',
          features: ['Hasta 1.000 conversaciones', 'FAQ + tracking básico'],
        },
        {
          tier: 'Pro',
          price: '$280.000 CLP/mes',
          highlight: true,
          features: ['Conversaciones ilimitadas', 'Recomendaciones IA', 'Links de pago'],
        },
        {
          tier: 'Enterprise',
          price: '$400.000 CLP/mes',
          features: ['Multi-tienda', 'Integración ERP', 'Soporte prioritario'],
        },
      ],
    },
    financing: {
      instrumento: 'SERCOTEC CRECE',
      monto: 'Hasta $5.000.000 CLP',
      cofinanciamiento: '95% cubierto',
      descripcion:
        'CRECE es el fondo ideal para implementar el agente completo en una pyme con ventas hasta UF 25.000. SERCOTEC cubre el 95% del proyecto. Convocatorias regionales abiertas durante el año.',
      quienPostula: 'La pyme beneficiaria (nosotros asesoramos la postulación)',
    },
    caseStudy: {
      negocio: 'Tienda online de ropa (Santiago)',
      perfil: '~$80M ventas/mes, 1.200 pedidos/mes, equipo atención 2 personas',
      antes: [
        '~4.000 mensajes/mes de tracking (3.5h diarias del equipo)',
        '38% de mensajes respondidos en menos de 1 hora (resto, hasta 12h)',
        '12% de carritos abandonados rescatados (manual, solo horario laboral)',
      ],
      despues: [
        'Agente resuelve 72% de los mensajes sin humano (equipo libre para ventas y reclamos)',
        '100% respondidos en menos de 30 segundos, 24/7',
        '34% de carritos rescatados (automático, todo horario) → +$6.2M ventas/mes',
      ],
      roi: 'Inversión recuperada en 21 días. ROI 12 meses: ~17x.',
    },
    faq: [
      {
        q: '¿Es lo mismo que un chatbot tradicional?',
        a: 'No. Un chatbot sigue árboles de decisión rígidos ("escribe 1 para X"). Un agente IA entiende lenguaje natural, contexto y puede tomar acciones (consultar tracking, generar link de pago, derivar). Conversa como una persona.',
      },
      {
        q: '¿Mi WhatsApp se va a bloquear?',
        a: 'No, porque usamos la API oficial de WhatsApp Business (Meta Cloud API). Nunca usamos métodos no oficiales (whatsapp-web.js, baileys). Esto es lo único que garantiza estabilidad y cumplimiento.',
      },
      {
        q: '¿Cuánto cuesta Meta por mensaje?',
        a: 'Meta cobra por conversación iniciada (24h ventana). Tarifas para Chile 2026: utility ~$10-30 CLP, marketing ~$50-90, service (cliente escribe primero) gratis. Estimamos $50-150K/mes en costos de Meta para una pyme retail mediana.',
      },
      {
        q: '¿Se integra con Shopify / WooCommerce / Tiendanube / Bsale / Defontana?',
        a: 'Sí. Tenemos integraciones nativas con las plataformas más usadas en Chile. Para sistemas propios desarrollamos la conexión vía API en el plan Pro/Enterprise.',
      },
      {
        q: '¿Qué pasa si el agente no sabe responder?',
        a: 'Configuramos un umbral de confianza. Si el agente no está seguro, deriva la conversación a su equipo con un resumen del contexto. Su equipo siempre tiene la última palabra.',
      },
      {
        q: '¿Cumple con Ley de Protección de Datos chilena (21.719)?',
        a: 'Sí. Datos almacenados con consentimiento explícito, base legal documentada, ARCO (Acceso, Rectificación, Cancelación, Oposición) implementado. Le entregamos toda la documentación para cumplir auditorías.',
      },
    ],
    relatedBlogSlugs: [
      'agente-ia-turismo-hoteles-restaurantes-tour-operadores-chile',
      'agente-ia-whatsapp-ecommerce-retail-chile',
      'como-aparecer-chatgpt-gemini-turismo-chile-pucon',
      'cuanto-cuesta-automatizar-whatsapp-empresa',
      'cuanto-cuesta-implementar-ia-pyme-chile',
      'claude-pymes-chile-2026',
    ],
  },

  // ─── 3. SDR / Calificación leads B2B ────────────────────────
  'sdr-leads': {
    slug: 'sdr-leads',
    url: '/agentes/sdr-leads',
    name: 'Agente SDR — Calificación de Leads',
    emoji: '🎯',
    shortDescription:
      'Califica leads B2B inbound 24/7, agenda demos en su calendario y +70% de conversión a reunión.',
    targetIndustries: [
      'Software / SaaS',
      'Servicios profesionales',
      'Consultoría',
      'Educación corporativa',
      'B2B en general',
    ],
    meta: {
      title: 'Agente IA SDR para Calificar Leads B2B en Chile | Apps del Sur',
      description:
        'Agente IA que califica leads B2B inbound 24/7 por WhatsApp y formulario. Agenda demos directo en su calendario. +70% conversión vs SDR tradicional. Financiable con CORFO Digitalización (60%).',
      keywords:
        'agente IA SDR Chile, calificación leads B2B automática, AI SDR LATAM, agendar demos automático, lead scoring IA',
      ogTitle: 'Agente IA SDR — Califica Leads B2B 24/7 | Apps del Sur',
      ogDescription:
        'El SDR que no duerme. Califica, prioriza y agenda demos en su calendario en menos de 30 segundos. Financiable con CORFO Digitalización Pyme (60%).',
    },
    hero: {
      badge: '🟢 Agente IA · B2B · LATAM',
      titleLine1: 'El SDR que califica leads',
      titleHighlight: 'antes de que se enfríen',
      description:
        'Un lead inbound responde a la primera marca que le escribe. Si tarda más de 5 minutos, la conversión cae 80%. Nuestro agente IA responde en 30 segundos, califica, descarta a los que no encajan y agenda la demo con los que sí — directo en el calendario de su equipo.',
      ctaPrimary: 'Probar el agente por WhatsApp',
      ctaPrimaryHref: wa(
        'sdr-leads',
        'Hola, quiero ver una demo del Agente SDR de Apps del Sur',
      ),
      ctaSecondary: 'Diagnosticar mi madurez IA (gratis · 6 min)',
      ctaSecondaryHref: diagnostico('sdr-leads'),
    },
    chatMock: {
      title: 'Cómo conversa el agente',
      contact: 'Apps del Sur · Agente SDR',
      messages: [
        {
          from: 'cliente',
          text: 'Hola, vi su web y necesito un sistema de gestión para mi viña',
          time: '11:42',
        },
        {
          from: 'agente',
          text: '¡Hola! Soy Sofía, ayudo a calificar antes de pasar al equipo 😊\n¿Me cuenta brevemente?\n1. ¿Cuántas hectáreas?\n2. ¿Dónde están ubicados?\n3. ¿Usan algún software hoy?',
          time: '11:42',
        },
        { from: 'cliente', text: 'Tenemos 65ha en Curicó, hoy con planilla Excel', time: '11:44' },
        {
          from: 'agente',
          text: 'Perfecto, su perfil calza muy bien con lo que hacemos 🎯\nÚltima pregunta: ¿busca implementar antes de la próxima vendimia (marzo 2027)?',
          time: '11:44',
        },
        { from: 'cliente', text: 'Sí, ideal antes de poda en julio', time: '11:45' },
        {
          from: 'agente',
          text: '¡Excelente! Le agendé una demo de 30 min con Darío:\n📅 Martes 21 mayo · 15:00\n🔗 Meet: meet.google.com/abc-defg-hij\nLe llegará invitación al mail. ¿Algo más?',
          time: '11:45',
        },
      ],
    },
    painPoints: [
      {
        icon: 'clock',
        title: 'Lead que espera >5 min, conversión cae 80%',
        description:
          'El primero que responde se queda con el deal. Si su SDR está en reunión, dormido o en su día libre — pierde la oportunidad.',
        metric: '5min',
      },
      {
        icon: 'dollar-sign',
        title: 'SDR humano cuesta $1.2M/mes y solo trabaja 8h',
        description:
          'Y el 60% de su tiempo lo gasta calificando leads que nunca compran. Su mejor talento desperdiciado en filtrar.',
        metric: '$1.2M',
      },
      {
        icon: 'bar-chart',
        title: 'Solo el 30% de los leads del formulario se trabajan',
        description:
          'El resto queda en el CRM sin contactar. Marketing trae 100, ventas trabaja 30, cierran 3. Pipeline fugando por todos lados.',
        metric: '30%',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Conectamos sus fuentes de leads',
        description:
          'Formulario web, WhatsApp, LinkedIn, Meta Ads, Google Ads. Todos los leads aterrizan en un mismo lugar.',
      },
      {
        step: 2,
        title: 'Definimos el ICP y las preguntas de calificación',
        description:
          'BANT (Budget, Authority, Need, Timing), MEDDIC o el framework que use su equipo. El agente lo aplica en cada conversación.',
      },
      {
        step: 3,
        title: 'Conversa, califica y agenda en segundos',
        description:
          'Responde en menos de 30s. Descarta a los que no encajan con educación. Agenda demos directo en Google Calendar / Outlook / HubSpot.',
      },
      {
        step: 4,
        title: 'Sincroniza con su CRM',
        description:
          'Lead, transcripción, score y next step quedan en HubSpot, Pipedrive, Salesforce o el suyo. Su equipo entra a la reunión con todo el contexto.',
      },
    ],
    metrics: [
      { value: '+70%', label: 'Lead → demo agendada', sublabel: 'vs. SDR humano tradicional' },
      { value: '<30s', label: 'Tiempo de respuesta', sublabel: '24/7, todos los canales' },
      { value: '85%', label: 'Tasa de calificación', sublabel: 'leads procesados (no 30%)' },
      { value: '3x', label: 'Pipeline generado', sublabel: 'a igual gasto en marketing' },
    ],
    pricing: {
      intro:
        'Modelo principal: venta única con implementación. Financiable con CORFO Digitalización Pyme (60%) o CORFO Desarrolla Inversión Maule (50%). SaaS mensual disponible.',
      ventaUnica: [
        {
          tier: 'Starter',
          price: '$5.000.000 CLP',
          copago: 'Copago $2M con CORFO Digitalización 60%',
          fondo: 'CORFO Digitalización Pyme',
          features: [
            '1 canal (WhatsApp o formulario web)',
            'Hasta 500 leads/mes calificados',
            'Integración con 1 CRM',
            'Agendamiento en Google Calendar',
            'Capacitación 8h + soporte 12 meses',
          ],
        },
        {
          tier: 'Pro',
          price: '$7.000.000 CLP',
          copago: 'Copago $2.8M con CORFO Digitalización 60%',
          fondo: 'CORFO Digitalización Pyme',
          highlight: true,
          features: [
            'Multi-canal (WhatsApp + web + LinkedIn + Ads)',
            'Leads ilimitados',
            'Scoring IA personalizado',
            'Integración con CRM + calendarios del equipo',
            'Reportes ejecutivos semanales',
            'Soporte prioritario 18 meses',
          ],
        },
        {
          tier: 'Enterprise',
          price: '$9.000.000 CLP+',
          copago: 'Copago $1.8M con CORFO Crea y Valida 80%',
          fondo: 'CORFO Crea y Valida (proyecto conjunto)',
          features: [
            'Multi-país / multi-idioma',
            'Agentes especializados por línea de negocio',
            'Integración con stack completo (CRM + ERP + BI)',
            'Soporte dedicado 24 meses',
            'A/B testing continuo de prompts',
          ],
        },
      ],
      saas: [
        {
          tier: 'Starter',
          price: '$250.000 CLP/mes',
          features: ['Hasta 200 leads/mes', '1 canal', 'CRM integrado'],
        },
        {
          tier: 'Pro',
          price: '$400.000 CLP/mes',
          highlight: true,
          features: ['Leads ilimitados', 'Multi-canal', 'Scoring IA'],
        },
        {
          tier: 'Enterprise',
          price: '$500.000+ CLP/mes',
          features: ['Multi-equipo', 'BI', 'Soporte dedicado'],
        },
      ],
    },
    financing: {
      instrumento: 'CORFO Digitalización Pyme',
      monto: '$15.000.000 - $20.000.000 CLP',
      cofinanciamiento: '60%',
      descripcion:
        'CORFO Digitalización Agro (O\'Higgins) y Desarrolla Inversión Maule cubren hasta el 60% del proyecto de implementación. Pymes con ventas menores a UF 100.000 anuales. Convocatorias abiertas durante 2026.',
      quienPostula: 'La empresa beneficiaria (asesoramos sin costo)',
    },
    caseStudy: {
      negocio: 'Software B2B chileno (Santiago)',
      perfil: '~120 leads inbound/mes, equipo SDR de 2 personas',
      antes: [
        'Tiempo de respuesta promedio: 4h 12min',
        '32% de leads contactados, 7% agenda demo',
        'SDRs gastando 70% del tiempo en filtrar leads no calificados',
      ],
      despues: [
        'Tiempo de respuesta promedio: 22 segundos',
        '94% de leads contactados, 19% agenda demo (+170%)',
        'SDRs dedicados solo a deals calificados y outbound. CAC bajó 38%',
      ],
      roi: 'Pipeline +180% en 4 meses. Inversión recuperada en mes 2.',
    },
    faq: [
      {
        q: '¿Reemplaza a mi equipo de SDR?',
        a: 'No, lo potencia. El agente se encarga del primer contacto y la calificación, su equipo humano se enfoca en deals calificados, llamadas estratégicas y cierre. Empresas que usan IA SDR no despiden a los SDRs — los promueven a AE (Account Executive).',
      },
      {
        q: '¿Funciona para B2B complejo (ticket alto, ciclo largo)?',
        a: 'Sí. De hecho, es donde más rinde. Cuando un deal vale $10M+, perder un lead por responder tarde es enormemente costoso. El agente asegura que el 100% de los leads sean tocados en segundos.',
      },
      {
        q: '¿Se integra con HubSpot / Salesforce / Pipedrive?',
        a: 'Sí, integración nativa con los CRMs más usados. Para Salesforce Enterprise hacemos integración custom (incluida en plan Enterprise).',
      },
      {
        q: '¿Cómo sé que no espanta leads?',
        a: 'Configuramos el tono (formal, cercano, técnico) y A/B testeamos prompts. Medimos CSAT, NPS de la conversación inicial, y conversión. Si algo no funciona, ajustamos en días.',
      },
      {
        q: '¿Qué KPIs reporta?',
        a: 'Leads recibidos, calificados, descartados, agendados. Tiempo de respuesta. Conversión por canal. Razones de descarte. Cohort analysis. Todo en dashboard semanal vía email + acceso 24/7.',
      },
      {
        q: '¿Cuánto demora en estar productivo?',
        a: 'Plan Pro: 4-6 semanas (incluye definición ICP, configuración, training, integraciones). Las primeras 2 semanas son de aprendizaje supervisado — su equipo revisa cada conversación y nosotros ajustamos.',
      },
    ],
    relatedBlogSlugs: [
      'agente-ia-sdr-calificar-leads-b2b-chile',
      'cuanto-cuesta-implementar-ia-pyme-chile',
      'calcular-roi-proyecto-ia-pyme-chile',
      'por-que-fallan-proyectos-ia-pymes',
    ],
  },

  // ─── 4. Retención / Win-back ─────────────────────────────────
  retencion: {
    slug: 'retencion',
    url: '/agentes/retencion',
    name: 'Agente de Retención y Win-back',
    emoji: '🔁',
    shortDescription:
      'Recupera entre 8% y 15% del churn. Modelo % éxito disponible (solo paga si rescata).',
    targetIndustries: ['Gimnasios', 'Suscripciones SaaS', 'Servicios mensuales', 'Streaming', 'EdTech'],
    meta: {
      title: 'Agente IA de Retención y Win-back para Suscripciones | Apps del Sur',
      description:
        'Agente IA que detecta clientes en riesgo, los contacta por WhatsApp con la oferta correcta y recupera 8-15% del churn. Modelo % sobre lo recuperado disponible. Para gimnasios, SaaS y suscripciones.',
      keywords:
        'agente IA retención clientes Chile, win-back automático, recuperar suscriptores, anti-churn gimnasio, retención SaaS',
      ogTitle: 'Agente IA de Retención — Recupera Clientes Antes de que se Vayan',
      ogDescription:
        'Detecta señales de fuga. Contacta por WhatsApp con oferta personalizada. Recupera 8-15% del churn. Modelo % éxito disponible.',
    },
    hero: {
      badge: '🟢 Agente IA · Retención · Suscripciones',
      titleLine1: 'Rescate clientes',
      titleHighlight: 'antes de que cancelen',
      description:
        'Retener cuesta 5x menos que adquirir. Pero detectar quién está por cancelar — y contactarlo en el momento justo, con la oferta correcta — requiere 24/7 de atención que ningún equipo puede sostener. El agente lo hace automático. Solo paga sobre lo que rescata.',
      ctaPrimary: 'Probar el agente por WhatsApp',
      ctaPrimaryHref: wa(
        'retencion',
        'Hola, quiero ver una demo del Agente de Retención de Apps del Sur',
      ),
      ctaSecondary: 'Diagnosticar mi madurez IA (gratis · 6 min)',
      ctaSecondaryHref: diagnostico('retencion'),
    },
    chatMock: {
      title: 'Cómo conversa el agente',
      contact: 'GymPower · Agente IA',
      messages: [
        {
          from: 'agente',
          text: '¡Hola Pedro! 💪 Vimos que no has venido al gym en 3 semanas. ¿Todo bien?',
          time: '10:15',
        },
        { from: 'cliente', text: 'Hola... la verdad estoy pensando en cancelar', time: '10:34' },
        {
          from: 'agente',
          text: 'Te entiendo. ¿Me cuentas qué pasó? ¿Es tema de tiempo, precio o de motivación?',
          time: '10:34',
        },
        { from: 'cliente', text: 'Tiempo. Trabajo full y no alcanzo después de las 19h', time: '10:36' },
        {
          from: 'agente',
          text: 'Te ofrezco dos opciones para que no canceles:\n🌅 Plan Madrugador: solo 6:00-9:00am, $19.990/mes (ahorras $10K)\n⏸ Pausar membresía 2 meses sin costo (vuelves cuando puedas)\n¿Cuál te sirve?',
          time: '10:36',
        },
        { from: 'cliente', text: 'Madrugador, me cuadra', time: '10:37' },
        {
          from: 'agente',
          text: '¡Listo Pedro! ✅\nCambiado a Plan Madrugador desde el 01/06.\nTe esperamos mañana 6:30am 💪 — clase de funcional con Carla.',
          time: '10:37',
        },
      ],
    },
    painPoints: [
      {
        icon: 'dollar-sign',
        title: 'El churn duele 5x más que ganar un cliente nuevo',
        description:
          'Adquirir un cliente nuevo cuesta entre 5 y 25x más que retener uno. Pero la mayoría de las pymes no tiene un proceso sistemático para evitar la fuga.',
        metric: '5x',
      },
      {
        icon: 'clock',
        title: '60% de los que cancelan, no estaban decididos',
        description:
          'La mitad acepta una oferta de rescate si llega antes de pulsar "cancelar". Pero contactarlos manualmente uno por uno no escala.',
        metric: '60%',
      },
      {
        icon: 'bar-chart',
        title: 'Su equipo no sabe quién está por fugarse',
        description:
          'Las señales (baja de uso, login menos frecuente, no abre emails) están ahí pero nadie las mira. Cuando cancela, ya es tarde.',
        metric: 'tarde',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Detecta señales de riesgo',
        description:
          'Conectamos su sistema (gym software, Stripe, SaaS, etc.) y el agente identifica clientes con baja actividad, pagos rechazados o señales de descontento.',
      },
      {
        step: 2,
        title: 'Contacta por WhatsApp con la oferta correcta',
        description:
          'Mensaje personalizado según el motivo probable: precio, tiempo, valor percibido, vida personal. No spam.',
      },
      {
        step: 3,
        title: 'Conversa, entiende y aplica la solución',
        description:
          'Si es precio: ofrece descuento o plan menor. Si es tiempo: pausa o cambio de horario. Si es valor: ofrece cambio de servicio. Cierra en la misma conversación.',
      },
      {
        step: 4,
        title: 'Reporta lo que rescató (y lo que no)',
        description:
          'Dashboard mensual: clientes contactados, rescatados, motivos de churn agrupados. Insight para mejorar el producto.',
      },
    ],
    metrics: [
      { value: '8-15%', label: 'Churn rescatado', sublabel: 'sobre la base completa' },
      { value: '60%', label: 'Conversión win-back', sublabel: 'de los contactados' },
      { value: '5x', label: 'Costo vs adquisición', sublabel: 'retener es más barato' },
      { value: '% éxito', label: 'Modelo disponible', sublabel: 'paga solo si rescata' },
    ],
    pricing: {
      intro:
        'Dos modelos: venta única + soporte, o modelo híbrido (fee menor + % sobre clientes rescatados). El % éxito alinea incentivos: solo paga cuando recupera.',
      ventaUnica: [
        {
          tier: 'Starter',
          price: '$3.500.000 CLP',
          copago: 'Copago $1.4M con CORFO Digitalización 60%',
          fondo: 'CORFO Digitalización Pyme',
          features: [
            'Hasta 1.000 clientes activos',
            'Detección de señales (1 sistema)',
            'Contacto WhatsApp + email',
            'Capacitación 8h + soporte 12 meses',
          ],
        },
        {
          tier: 'Pro',
          price: '$4.500.000 CLP + 5% sobre rescatado',
          copago: 'Copago $1.8M con CORFO Digitalización 60%',
          fondo: 'CORFO Digitalización Pyme',
          highlight: true,
          features: [
            'Hasta 5.000 clientes activos',
            'Múltiples sistemas integrados',
            'Ofertas dinámicas por segmento',
            'A/B testing de mensajes',
            'Soporte prioritario 18 meses',
          ],
        },
        {
          tier: 'Enterprise',
          price: '$6.000.000 CLP + 3% sobre rescatado',
          copago: 'Copago $1.2M con CORFO Crea y Valida 80%',
          fondo: 'CORFO Crea y Valida (proyecto conjunto)',
          features: [
            'Clientes ilimitados',
            'Modelo predictivo custom de churn',
            'Integración con stack completo (CRM, billing, producto)',
            'Soporte dedicado 24 meses',
          ],
        },
      ],
      saas: [
        {
          tier: 'Starter',
          price: '$150.000 CLP/mes',
          features: ['Hasta 1.000 clientes', '1 sistema integrado'],
        },
        {
          tier: 'Pro',
          price: '$220.000 CLP/mes + 5% rescatado',
          highlight: true,
          features: ['Hasta 5.000 clientes', 'Multi-sistema', 'A/B testing'],
        },
        {
          tier: 'Enterprise',
          price: '$300.000 CLP/mes + 3% rescatado',
          features: ['Ilimitado', 'Modelo predictivo', 'Soporte dedicado'],
        },
      ],
    },
    financing: {
      instrumento: 'CORFO Digitalización Pyme',
      monto: '$15.000.000 - $50.000.000 CLP',
      cofinanciamiento: '60%',
      descripcion:
        'CORFO Desarrolla Inversión Maule (50-60%) o Digitalización Agro O\'Higgins (60%) cubren la implementación. Para suscripciones B2C y gimnasios el ROI suele ser mes 2-3, lo que hace el proyecto autofinanciable rápidamente.',
      quienPostula: 'La empresa beneficiaria',
    },
    caseStudy: {
      negocio: 'Cadena de gimnasios (3 sucursales, Maule)',
      perfil: '~2.800 socios activos, churn mensual 6%',
      antes: [
        '168 cancelaciones/mes = $5M/mes en ingresos perdidos',
        'Win-back manual: 1 persona, contactaba 20 clientes/mes, rescataba 4',
        'Sin segmentación: a todos la misma oferta',
      ],
      despues: [
        'Agente contacta 168 al mes, rescata 78 (47% conversión)',
        '$2.3M/mes recuperados directamente',
        'Insight clave: 40% del churn era por horario → lanzaron Plan Madrugador',
      ],
      roi: 'Inversión recuperada en 6 semanas. Rescate anual: ~$28M.',
    },
    faq: [
      {
        q: '¿El modelo % éxito tiene mínimos?',
        a: 'Sí. En el plan Pro pagamos sobre clientes rescatados que duran al menos 3 meses después del rescate (para evitar incentivos perversos). El % se cobra una sola vez por cliente rescatado.',
      },
      {
        q: '¿Cómo detecta quién va a cancelar?',
        a: 'Usamos señales conductuales: frecuencia de uso, días sin login, pagos rechazados, tickets de soporte, encuestas NPS. En el plan Pro entrenamos un modelo predictivo con sus datos históricos de churn.',
      },
      {
        q: '¿No molesta al cliente recibir un mensaje "preventivo"?',
        a: 'Si está bien escrito, no. Mostramos que su empresa se preocupa. El secreto es no usar discurso comercial agresivo: empezar preguntando cómo está y ofrecer una solución útil, no un descuento agresivo.',
      },
      {
        q: '¿Se integra con mi sistema de gym / SaaS / billing?',
        a: 'Plan Starter: integración con Stripe, MercadoPago, GymManager y los más usados en Chile. Plan Pro/Enterprise: integración custom con su sistema vía API.',
      },
      {
        q: '¿Qué pasa si el cliente igual cancela?',
        a: 'El agente registra el motivo (precio, tiempo, calidad, mudanza, etc.) y genera un reporte agrupado. Eso le permite tomar acciones de producto (no solo de retención).',
      },
      {
        q: '¿Funciona con clientes B2B también?',
        a: 'Sí, pero el flujo es distinto. Para B2B la alerta no es solo conductual sino que incluye señales de cuenta (NPS bajo, reducción de uso de seats, no aceptan reunión QBR). Le configuramos el flujo correcto.',
      },
    ],
    relatedBlogSlugs: [
      'agente-ia-retencion-gimnasios-chile',
      'cuanto-cuesta-implementar-ia-pyme-chile',
      'calcular-roi-proyecto-ia-pyme-chile',
      'por-que-fallan-proyectos-ia-pymes',
    ],
  },

  // ─── 5. Compliance / SAG / Normativa ─────────────────────────
  compliance: {
    slug: 'compliance',
    url: '/agentes/compliance',
    name: 'Agente de Compliance Regulatorio',
    emoji: '🛡️',
    shortDescription:
      'Monitorea SAG, SII, ISP, Sernac y normativa chilena. Alerta vencimientos, prepara fiscalizaciones y responde dudas internas del equipo.',
    targetIndustries: [
      'Viñas y agro (SAG)',
      'Exportadoras',
      'Alimentos (Reg. Sanitario)',
      'Farma / ISP',
      'Industria regulada',
    ],
    meta: {
      title: 'Agente IA de Compliance Regulatorio para Empresas Chilenas: SAG, SII, ISP, Sernac | Apps del Sur',
      description:
        'Agente IA que monitorea normativa chilena (SAG, SII, ISP, Sernac, DT), alerta vencimientos de certificaciones, ayuda a llenar cuaderno de campo y prepara fiscalizaciones. Para viñas, exportadoras, alimentos, farma e industria regulada. Financiable con CORFO Digitalización.',
      keywords:
        'agente IA compliance Chile, SAG cuaderno de campo digital, fiscalización SAG, normativa agrícola Chile, Sustentavid, GlobalGAP, ISP fiscalización, compliance regulatorio pyme',
      ogTitle: 'Agente IA de Compliance Regulatorio Chile — SAG, SII, ISP, Sernac',
      ogDescription:
        'Su asistente normativo 24/7. Monitorea SAG, SII, ISP, Sernac. Alerta vencimientos, guía registros, prepara fiscalizaciones. Financiable con CORFO (60%).',
    },
    hero: {
      badge: '🟢 Agente IA · Compliance · Chile',
      titleLine1: 'Su asistente normativo que conoce',
      titleHighlight: 'SAG, SII, ISP, Sernac y la DT',
      description:
        'En Chile la normativa cambia, las certificaciones vencen y las fiscalizaciones llegan sin aviso. Un agente IA con la regulación cargada responde dudas del equipo en segundos, alerta antes de que algo se venza, valida que los registros estén completos y prepara las carpetas para la fiscalización antes de que toquen la puerta.',
      ctaPrimary: 'Probar el agente por WhatsApp',
      ctaPrimaryHref: wa(
        'compliance',
        'Hola, quiero ver una demo del Agente de Compliance de Apps del Sur',
      ),
      ctaSecondary: 'Diagnosticar mi madurez IA (gratis · 6 min)',
      ctaSecondaryHref: diagnostico('compliance'),
    },
    chatMock: {
      title: 'Cómo conversa el agente',
      contact: 'Compliance Viña Tipo · Agente IA',
      messages: [
        {
          from: 'cliente',
          text: 'Aplicamos Roundup en cuartel 12 esta mañana, ¿cómo lo registro en el cuaderno?',
          time: '11:42',
        },
        {
          from: 'agente',
          text: 'Hola Werner 👋\nGlifosato (Roundup) es producto categoría III. Necesito:\n1. Dosis aplicada (L/ha)\n2. Operario certificado\n3. Hora inicio/término\n4. Condición climática (viento, temp)\n¿Tienes los datos?',
          time: '11:42',
        },
        { from: 'cliente', text: 'Sí: 3 L/ha, Juan Pérez, 8:00-10:30, viento 5 km/h', time: '11:44' },
        {
          from: 'agente',
          text: 'Perfecto ✅ Registrado en cuaderno de campo digital cuartel 12.\n⚠️ Recordatorio: período de carencia 14 días. **No cosechar antes del 31 mayo**.\nCertificado Sustentavid del operario vence el 18 jun — falta 1 mes. ¿Te programo el recordatorio?',
          time: '11:44',
        },
        { from: 'cliente', text: 'Sí, y consulta: ¿qué pasa si SAG llega ahora?', time: '11:45' },
        {
          from: 'agente',
          text: '📋 Última auditoría: 4 oct 2025 (aprobada).\nDocumentos al día: ✅ resolución SAG, ✅ registro operadores, ✅ recetas agronómicas, ✅ FDS productos.\nFalta: actualizar inventario plaguicidas (vence en 5 días). ¿Lo levantamos ahora?',
          time: '11:45',
        },
      ],
    },
    painPoints: [
      {
        icon: 'shield',
        title: 'La normativa cambia y nadie del equipo se entera',
        description:
          'SAG, SII, ISP, Sernac, DT, CMF — cada uno publica resoluciones cada mes. Cuando se entera de un cambio normativo, suele ser porque alguien fue multado.',
        metric: 'mes',
      },
      {
        icon: 'clock',
        title: 'Las certificaciones vencen sin aviso',
        description:
          'Sustentavid, GlobalG.A.P., HACCP, ISO, resoluciones sanitarias, registros SAG. Caducan y nadie lleva el calendario centralizado.',
        metric: 'caducan',
      },
      {
        icon: 'dollar-sign',
        title: 'Una fiscalización mal preparada cuesta entre 10 y 1.000 UTM',
        description:
          'SAG multa hasta 500 UTM ($35M). Sernac hasta 1.500 UTM. DT por trabajador. ISP por lote. Si no tiene los registros al día, paga.',
        metric: '1.000 UTM',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Cargamos su universo regulatorio',
        description:
          'SAG (cuaderno de campo, plaguicidas, agua), Sustentavid, GlobalG.A.P., SII (libros, F22, F29), ISP (registros sanitarios), Sernac, DT. Solo lo que aplica a su industria.',
      },
      {
        step: 2,
        title: 'Conectamos con sus sistemas',
        description:
          'Cuaderno de campo digital (Apps del Sur), ERP (SAP, Defontana), planillas Excel, Google Drive. El agente lee y valida que los registros estén completos.',
      },
      {
        step: 3,
        title: 'Monitorea y alerta proactivamente',
        description:
          'Vencimientos de certificaciones (60, 30, 7 días antes). Cambios normativos publicados en DO. Registros incompletos. Períodos de carencia post-aplicación.',
      },
      {
        step: 4,
        title: 'Asiste en tiempo real y prepara fiscalizaciones',
        description:
          'Responde dudas del equipo por WhatsApp ("¿qué dosis de X puedo aplicar?"). Cuando hay aviso de fiscalización, arma la carpeta completa en minutos.',
      },
    ],
    metrics: [
      { value: '24/7', label: 'Asistente normativo', sublabel: 'incluyendo terreno y fin de semana' },
      { value: '0', label: 'Vencimientos olvidados', sublabel: 'alertas 60/30/7 días antes' },
      { value: '-80%', label: 'Tiempo en preparar fiscalización', sublabel: 'carpeta lista en minutos' },
      { value: '<1 día', label: 'Adopción de cambios normativos', sublabel: 'vs. semanas detectándolos' },
    ],
    pricing: {
      intro:
        'Compliance es un agente especializado: requiere carga de normativa, integración con registros y validación experta. Financiable con CORFO Digitalización Pyme (60%) o CORFO Crea y Valida (80%) para proyectos sectoriales.',
      ventaUnica: [
        {
          tier: 'Starter',
          price: '$4.500.000 CLP',
          copago: 'Copago $1.8M con CORFO Digitalización 60%',
          fondo: 'CORFO Digitalización Pyme',
          features: [
            '1 área normativa (ej: SAG agrícola o SII tributario)',
            'Hasta 500 consultas/mes del equipo',
            'Alertas de vencimientos (calendario centralizado)',
            'Validación de registros básica',
            'Capacitación 8h + soporte 12 meses',
          ],
        },
        {
          tier: 'Pro',
          price: '$7.000.000 CLP',
          copago: 'Copago $2.8M con CORFO Digitalización 60%',
          fondo: 'CORFO Digitalización Pyme',
          highlight: true,
          features: [
            'Multi-área (SAG + Sustentavid + GlobalG.A.P. + SII, o combinación)',
            'Consultas ilimitadas, multi-usuario',
            'Integración con cuaderno de campo digital o ERP',
            'Generación automática de carpeta de fiscalización',
            'Monitoreo de cambios normativos (DO + circulares)',
            'Soporte prioritario 18 meses',
          ],
        },
        {
          tier: 'Enterprise',
          price: '$9.500.000+ CLP',
          copago: 'Copago $1.9M con CORFO Crea y Valida 80%',
          fondo: 'CORFO Crea y Valida (proyecto sectorial)',
          features: [
            'Multi-empresa / multi-sucursal / multi-país',
            'Normativa custom (industria específica)',
            'Integración completa con stack (ERP + cuaderno + BI)',
            'Auditoría interna automatizada mensual',
            'Soporte dedicado 24 meses',
          ],
        },
      ],
      saas: [
        {
          tier: 'Starter',
          price: '$200.000 CLP/mes',
          features: ['1 área normativa', 'Hasta 300 consultas/mes', 'Alertas básicas'],
        },
        {
          tier: 'Pro',
          price: '$380.000 CLP/mes',
          highlight: true,
          features: ['Multi-área', 'Ilimitado', 'Integración cuaderno/ERP', 'Carpeta fiscalización'],
        },
        {
          tier: 'Enterprise',
          price: '$550.000+ CLP/mes',
          features: ['Multi-empresa', 'Normativa custom', 'Auditoría mensual'],
        },
      ],
    },
    financing: {
      instrumento: 'CORFO Digitalización Pyme + Crea y Valida',
      monto: '$15.000.000 - $180.000.000 CLP',
      cofinanciamiento: '60-80%',
      descripcion:
        'Para una viña o exportadora individual, CORFO Digitalización Pyme cubre 60% del proyecto. Para iniciativas sectoriales (ej: agente normativo SAG para 5+ viñas del Maule), CORFO Crea y Valida cubre hasta 80% y GYS Activa postula directamente.',
      quienPostula: 'La empresa beneficiaria, o GYS Activa en proyectos sectoriales',
    },
    caseStudy: {
      negocio: 'Viña vitivinícola 65ha (Curicó)',
      perfil: 'Certificación Sustentavid y GlobalG.A.P., 22 trabajadores, 1 gerente agrícola',
      antes: [
        'Cuaderno de campo en planilla Excel, llenado a fin de semana',
        '3 multas SAG en 24 meses por registros incompletos ($8M)',
        'Sustentavid vencido por 3 semanas (perdieron cliente exportador)',
        'Gerente agrícola gasta 8h/semana respondiendo dudas del equipo sobre dosis y carencias',
      ],
      despues: [
        'Cuaderno de campo digital, validado al momento del registro',
        '0 multas en 12 meses (registros completos siempre)',
        'Alertas 60 días antes de vencimientos: 0 caducidades olvidadas',
        'Equipo consulta por WhatsApp en terreno, respuesta <30s. Gerente libera 6h/semana',
      ],
      roi: 'Ahorro multas evitadas + tiempo gerente: ~$12M/año. Recupera la inversión en mes 3.',
    },
    faq: [
      {
        q: '¿El agente reemplaza al asesor SAG / contador / abogado?',
        a: 'No. Reemplaza la **consulta operativa de día a día** ("¿qué dosis puedo aplicar?", "¿cuándo vence Sustentavid?", "¿qué documentos necesito para fiscalización?"). Los temas estratégicos, defensa ante una multa o interpretación de normativa nueva siguen siendo del especialista humano.',
      },
      {
        q: '¿Cubre solo SAG o también otras instituciones?',
        a: 'Depende del plan. Starter cubre 1 área (ej: solo SAG agrícola). Pro cubre multi-área (SAG + Sustentavid + GlobalG.A.P. + SII, o lo que aplique a su empresa). Para industrias específicas (farma con ISP, laboratorios CMF, etc.) hacemos carga custom.',
      },
      {
        q: '¿Cómo sabe que la normativa está actualizada?',
        a: 'Tenemos un proceso de actualización: (1) monitor automático del Diario Oficial y circulares SAG/SII/ISP/Sernac, (2) revisión semanal por nuestro equipo de cambios relevantes, (3) actualización del agente en menos de 48h cuando hay cambios materiales. Le notificamos los cambios que afectan a su empresa.',
      },
      {
        q: '¿Se integra con el cuaderno de campo digital de Apps del Sur?',
        a: 'Sí, integración nativa. Si ya usa nuestro [cuaderno de campo](/cuaderno-de-campo), el agente compliance lee los registros, los valida en tiempo real y le avisa si falta algo antes de cerrar el día.',
      },
      {
        q: '¿Qué pasa si el agente da una respuesta incorrecta?',
        a: 'El agente entrega respuesta + referencia (artículo de ley, resolución SAG, circular). Si el caso es complejo o no está 100% seguro, recomienda consultar al asesor especialista. No tomamos decisiones por usted: damos información validada y trazabilidad de la fuente.',
      },
      {
        q: '¿Puede usarse en terreno sin internet?',
        a: 'Sí, en versión Pro incluimos modo offline para consultas frecuentes (dosis, carencias, productos autorizados). Cuando vuelve la señal, sincroniza los registros.',
      },
      {
        q: '¿Sirve solo para agro / viñas?',
        a: 'No. Lo armamos primero para agro (porque ahí está la mayor demanda con SAG y Sustentavid), pero el agente funciona para cualquier industria regulada chilena: alimentos (Reg. Sanitario MINSAL), farma (ISP), laboratorios, importadoras, exportadoras, financieras (CMF), industriales (Seremi Medio Ambiente).',
      },
    ],
    relatedBlogSlugs: [
      'ley-21719-proteccion-datos-pymes-chile-2026',
      'ley-21719-inteligencia-artificial-empresas-chile-2026',
      'ley-21719-datos-sensibles-sectores-chile-2026',
      'sustentavid-globalg-a-p-registros-trazabilidad-software',
      'cuaderno-de-campo-digital-vinas-chile',
      'guia-financiamiento-corfo-fia-digitalizacion-agricola-2026',
      'cuanto-cuesta-implementar-ia-pyme-chile',
    ],
  },

  // ─── 6. Legal / Abogados ────────────────────────────────────
  abogados: {
    slug: 'abogados',
    url: '/agentes/abogados',
    name: 'Agente Legal para Estudios Jurídicos',
    emoji: '⚖️',
    shortDescription:
      'Atiende clientes 24/7, califica casos, redacta NDAs y contratos simples, resume causas y vigila vencimientos del Poder Judicial.',
    targetIndustries: [
      'Estudios jurídicos boutique',
      'Abogados independientes',
      'Áreas legales internas',
      'Notarías digitales',
      'Asesoría tributaria',
    ],
    meta: {
      title: 'Agente IA para Abogados y Estudios Jurídicos en Chile: atiende, califica y redacta 24/7 | Apps del Sur',
      description:
        'Agente IA para estudios jurídicos chilenos: atiende potenciales clientes 24/7 por WhatsApp, califica casos, redacta NDAs y contratos simples, resume documentos legales largos y vigila causas en la Oficina Judicial Virtual. Implementación 3-6 semanas. Financiable con SERCOTEC.',
      keywords:
        'agente IA abogados Chile, software estudio jurídico, automatización legal Chile, Poder Judicial PJUD, Oficina Judicial Virtual, redacción contratos IA, due diligence IA, agente legal pyme',
      ogTitle: 'Agente IA Legal para Estudios Jurídicos Chile — Apps del Sur',
      ogDescription:
        'Atiende, califica, redacta y vigila causas. 24/7 por WhatsApp. Integración con Oficina Judicial Virtual + Google Drive. Financiable con SERCOTEC.',
    },
    hero: {
      badge: '🟢 Agente IA · Legal · Chile',
      titleLine1: 'Su segundo abogado júnior:',
      titleHighlight: 'atiende, califica y redacta 24/7',
      description:
        'Los estudios jurídicos chilenos pierden clientes nuevos por no responder rápido, gastan horas en triaje de casos que no pagan, y dedican tiempo de socios a borradores que un júnior podría hacer. Un agente IA bien entrenado atiende la primera consulta, califica con sus criterios, redacta documentos rutinarios y vigila causas en la Oficina Judicial Virtual — sin reemplazar la opinión legal del abogado.',
      ctaPrimary: 'Probar el agente por WhatsApp',
      ctaPrimaryHref: wa(
        'abogados',
        'Hola, tengo un estudio jurídico y quiero ver una demo del Agente Legal',
      ),
      ctaSecondary: 'Diagnosticar mi madurez IA (gratis · 6 min)',
      ctaSecondaryHref: diagnostico('abogados'),
    },
    chatMock: {
      title: 'Cómo conversa el agente con un potencial cliente',
      contact: 'Estudio Tipo · Asistente Legal IA',
      messages: [
        {
          from: 'cliente',
          text: 'Hola, tuve un accidente de tránsito y el seguro no me quiere pagar',
          time: '21:38',
        },
        {
          from: 'agente',
          text: 'Hola, lamento lo que pasó. Soy Sofía, asistente del Estudio Pérez & Asociados — recopilo lo básico para que un abogado del equipo lo atienda mañana primera hora 😊\n¿Me cuentas?\n1. ¿Cuándo ocurrió?\n2. ¿Tienes parte policial?\n3. ¿La otra parte tiene seguro?\n4. ¿Cuál fue el daño aproximado?',
          time: '21:38',
        },
        {
          from: 'cliente',
          text: '15 marzo, sí tengo parte, otra parte tiene seguro pero dice culpa mía, daño ~$4M',
          time: '21:41',
        },
        {
          from: 'agente',
          text: 'Perfecto. Tu caso es viable: con parte policial y daño sobre $2M conviene reclamar.\n📋 Necesito 3 documentos antes de la reunión:\n1. Parte denuncia\n2. Cotización taller\n3. Carta rechazo del seguro\n¿Puedes adjuntarlos acá?',
          time: '21:41',
        },
        { from: 'cliente', text: 'Sí, mañana en la mañana', time: '21:42' },
        {
          from: 'agente',
          text: '✅ Te agendé reunión con la abogada Laura Pérez:\n📅 Jueves 22 · 10:00\n💻 Meet: meet.google.com/abc-def-ghi\nReunión inicial sin costo. Si decides avanzar, los honorarios se conversan ahí.',
          time: '21:42',
        },
      ],
    },
    painPoints: [
      {
        icon: 'clock',
        title: 'El 60% de los clientes nuevos llegan fuera de horario',
        description:
          'Accidentes, despidos, conflictos de pareja, dudas urgentes — ocurren tarde, fines de semana, feriados. Quien responde primero, gana al cliente.',
        metric: '60%',
      },
      {
        icon: 'dollar-sign',
        title: 'Los socios pierden 30% del tiempo en tareas júnior',
        description:
          'Redactar NDAs, leer cláusulas estándar, buscar jurisprudencia básica, vigilar plazos en PJUD. Trabajo necesario, pero a precio de socio cuesta una fortuna.',
        metric: '30%',
      },
      {
        icon: 'bar-chart',
        title: '1 de cada 5 consultas iniciales no califica',
        description:
          'Pero los abogados las atienden igual porque no hay filtro previo. Tiempo del equipo en casos que nunca cierran como honorarios.',
        metric: '20%',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Cargamos su forma de trabajar',
        description:
          'Áreas en que practica (civil, laboral, familia, tributario, corporativo), criterios de calificación de caso, tarifas referenciales, plantillas de documentos, jurisprudencia favorita.',
      },
      {
        step: 2,
        title: 'Conectamos canales y herramientas',
        description:
          'WhatsApp Business API, formulario web, email. Integración con Google Drive (documentos), Google Calendar (agenda), Poder Judicial / Oficina Judicial Virtual (causas), CRM (HubSpot, Clio, MyCase).',
      },
      {
        step: 3,
        title: 'Atiende, califica y deriva',
        description:
          'Conversa con el potencial cliente, descarta casos no calificados con educación, agenda reunión con el abogado correspondiente del equipo y le entrega resumen + documentos solicitados.',
      },
      {
        step: 4,
        title: 'Redacta, resume y vigila',
        description:
          'Genera borradores (NDAs, contratos simples, cartas formales). Resume contratos o causas largas. Vigila plazos PJUD y alerta antes de vencimientos. Siempre con revisión del abogado antes de firmar.',
      },
    ],
    metrics: [
      { value: '<1 min', label: 'Tiempo respuesta cliente nuevo', sublabel: '24/7 incluyendo feriados' },
      { value: '+50%', label: 'Conversión consulta → reunión', sublabel: 'vs. responder al día siguiente' },
      { value: '-70%', label: 'Tiempo socios en tareas júnior', sublabel: 'redacción + vigilancia plazos' },
      { value: '0', label: 'Plazos PJUD vencidos', sublabel: 'alertas automáticas 7/3/1 días antes' },
    ],
    pricing: {
      intro:
        'Modelo principal: venta única + soporte, ideal para financiar con SERCOTEC. SaaS mensual disponible. Precio escala según número de abogados y áreas de práctica.',
      ventaUnica: [
        {
          tier: 'Starter',
          price: '$2.500.000 CLP',
          copago: 'Copago $500K con Kit Digital + aporte propio',
          fondo: 'Kit Digital SERCOTEC',
          features: [
            '1-2 abogados',
            'Atención WhatsApp + formulario',
            'Calificación básica de casos',
            'Generación de NDAs y cartas tipo',
            'Integración con Google Calendar + Drive',
            'Capacitación 6h + soporte 12 meses',
          ],
        },
        {
          tier: 'Pro',
          price: '$4.000.000 CLP',
          copago: 'Copago $800K con CRECE SERCOTEC',
          fondo: 'SERCOTEC CRECE',
          highlight: true,
          features: [
            'Hasta 8 abogados / multi-área',
            'Redacción de contratos simples + due diligence básica',
            'Resumen automático de documentos legales largos',
            'Integración con Oficina Judicial Virtual (alertas de causas)',
            'CRM integrado (HubSpot, Clio o el suyo)',
            'Reportes de gestión + soporte prioritario 18 meses',
          ],
        },
        {
          tier: 'Enterprise',
          price: '$6.000.000+ CLP',
          copago: 'Copago $2.4M con CORFO Digitalización 60%',
          fondo: 'CORFO Digitalización Pyme',
          features: [
            'Estudios grandes / áreas legales corporativas',
            'Workflows custom (compliance, M&A, litigios)',
            'Integración con stack legal completo',
            'Modelo entrenado con su jurisprudencia interna',
            'Soporte dedicado 24 meses',
          ],
        },
      ],
      saas: [
        {
          tier: 'Starter',
          price: '$120.000 CLP/mes',
          features: ['1-2 abogados', 'Atención + calificación', 'NDAs y cartas'],
        },
        {
          tier: 'Pro',
          price: '$220.000 CLP/mes',
          highlight: true,
          features: ['Multi-abogado', 'Contratos + due diligence', 'Vigilancia PJUD'],
        },
        {
          tier: 'Enterprise',
          price: '$350.000+ CLP/mes',
          features: ['Estudios grandes', 'Workflows custom', 'Modelo entrenado'],
        },
      ],
    },
    financing: {
      instrumento: 'SERCOTEC Kit Digital + CRECE',
      monto: '$1.200.000 - $5.000.000 CLP',
      cofinanciamiento: '95-100%',
      descripcion:
        'Los estudios jurídicos boutique chilenos son típicamente microempresas formalizadas, lo que los hace candidatos ideales para Kit Digital (~100% cubierto) o CRECE (95% cubierto). Para áreas legales corporativas en empresas medianas, CORFO Digitalización Pyme (60%).',
      quienPostula: 'El estudio jurídico beneficiario',
    },
    caseStudy: {
      negocio: 'Estudio boutique 4 abogados (Providencia, Santiago)',
      perfil: 'Civil + laboral + familia, ~60 consultas nuevas/mes, 2 socios + 2 asociados',
      antes: [
        'Tiempo de respuesta promedio: 6h en hábil, 48h en fin de semana',
        '32% de leads nuevos se quedan sin agenda',
        'Socio dedica 8h/semana a redactar NDAs y cartas tipo',
        '2 plazos PJUD vencidos en 12 meses (costo: $4M en multas + caso perdido)',
      ],
      despues: [
        'Respuesta promedio: 45 segundos (24/7)',
        '78% de leads agendan reunión con abogado',
        'Socios redactan 0 documentos rutinarios (revisan borradores del agente en 5 min)',
        '0 plazos PJUD vencidos. Liberadas 18h/semana entre 2 socios.',
      ],
      roi: 'Más clientes captados + tiempo socios liberado: ~$6M/mes valor adicional. Payback mes 1.',
    },
    faq: [
      {
        q: '¿Esto reemplaza a un abogado?',
        a: 'No, y no debe. Reemplaza el **trabajo de primera línea** que ningún socio ni asociado debería hacer: atender la consulta inicial, calificar, redactar borradores rutinarios, vigilar plazos. La opinión legal, estrategia procesal, audiencias y firmas siempre son del abogado humano.',
      },
      {
        q: '¿Es legal que un agente IA dé información legal?',
        a: 'Sí, mientras quede claro que es información orientativa y no consejo legal vinculante. Configuramos el agente para que siempre derive la opinión jurídica al abogado del equipo. Lo que sí puede hacer: explicar plazos, requisitos documentales, jurisprudencia pública, redactar borradores que después el abogado revisa.',
      },
      {
        q: '¿Cumple con el secreto profesional?',
        a: 'Sí. Datos cifrados en tránsito y en reposo, sin entrenamiento con sus conversaciones, base legal documentada bajo Ley 21.719, y handoff humano para casos sensibles (familia, penal, alimentos, violencia intrafamiliar). Le entregamos toda la documentación para auditoría del Colegio de Abogados.',
      },
      {
        q: '¿Se integra con la Oficina Judicial Virtual (PJUD)?',
        a: 'Sí. El agente accede con sus credenciales y vigila causas (notificaciones, plazos, escritos presentados, audiencias agendadas). Alerta 7, 3 y 1 día antes de cualquier vencimiento. Genera reporte semanal con estado de todas las causas activas.',
      },
      {
        q: '¿Qué documentos puede redactar?',
        a: 'Starter: NDAs simples, cartas formales, mandatos básicos, autorizaciones notariales tipo. Pro: contratos simples (arriendo, prestación de servicios, finiquito), demandas tipo (cobranza, indemnización), informes en derecho básicos. Enterprise: workflows custom (due diligence M&A, due diligence compliance, contratos comerciales complejos) entrenados con sus plantillas. Siempre con revisión del abogado antes de firmar.',
      },
      {
        q: '¿Funciona para abogado independiente, no estudio?',
        a: 'Sí. Plan Starter está calibrado exactamente para 1-2 abogados. De hecho ahí es donde más se nota: un abogado solo que pierde clientes por no responder fines de semana y gasta horas en NDAs estandarizados.',
      },
      {
        q: '¿Cuánto demora la implementación?',
        a: 'Starter: 3 semanas. Pro (con integración PJUD + CRM): 4-6 semanas. Enterprise: 6-8 semanas. Las primeras 2 semanas son de aprendizaje supervisado: usted o un asociado revisa cada conversación y ajustamos.',
      },
    ],
    relatedBlogSlugs: [
      'ley-21719-datos-sensibles-sectores-chile-2026',
      'ley-21719-inteligencia-artificial-empresas-chile-2026',
      'cuanto-cuesta-implementar-ia-pyme-chile',
      'claude-pymes-chile-2026',
      'calcular-roi-proyecto-ia-pyme-chile',
      'cuanto-cuesta-automatizar-whatsapp-empresa',
    ],
  },

  // ─── 7. Cuota Mortuoria / Funerario (powered by Lucerna) ─────
  'cuota-mortuoria': {
    slug: 'cuota-mortuoria',
    url: '/agentes/cuota-mortuoria',
    name: 'Agente Consultor de Cuota Mortuoria',
    emoji: '🤍',
    shortDescription:
      'Powered by Lucerna. Autodetecta con el RUT del causante en qué AFP, PGU, renta vitalicia o régimen estaba. Entrega la guía específica (monto, documentos, plazos, canales) en segundos.',
    targetIndustries: [
      'Funerarias',
      'Servicios funerarios',
      'Crematorios',
      'Cementerios privados',
      'Seguros de vida',
    ],
    meta: {
      title: 'Agente IA Consultor de Cuota Mortuoria para Funerarias Chile | Apps del Sur',
      description:
        'Agente IA que asiste a familias en duelo a tramitar la cuota mortuoria (15 UF) ante AFP o IPS: verifica elegibilidad, lista documentos por caso, guía paso a paso por WhatsApp y libera al equipo de la funeraria. Implementación 2-3 semanas. Financiable con Kit Digital y CRECE SERCOTEC.',
      keywords:
        'agente IA funeraria Chile, cuota mortuoria AFP, cuota mortuoria IPS, asistente trámite funerario, software funeraria Chile, WhatsApp funeraria',
      ogTitle: 'Agente IA de Cuota Mortuoria — Apps del Sur',
      ogDescription:
        'Diferenciador para funerarias chilenas: asistente IA que ayuda a las familias a recuperar la cuota mortuoria (15 UF) sin papeleos. Financiable con SERCOTEC.',
    },
    hero: {
      badge: '🤍 Agente IA · Funerario · Powered by Lucerna',
      titleLine1: 'Acompañe a las familias con',
      titleHighlight: 'la cuota mortuoria, verificada en vivo',
      description:
        'La cuota mortuoria —hasta 15 UF (~$570.000 CLP) que paga la AFP o el régimen previsional para cubrir gastos funerarios— existe hace décadas en Chile, pero el 40% de las familias no la cobra: no saben que existe, no saben en qué AFP estaba el familiar o pierden el plazo de 12 meses. Nuestro agente, con motor Lucerna, consulta en vivo contra spensiones.cl con solo el RUT del causante, detecta automáticamente la AFP o régimen (7 AFPs, PGU, renta vitalicia, FFAA, Carabineros) y entrega la guía específica de esa institución: monto, documentos, plazo, canal de trámite. Sin adivinanzas, sin papeleos.',
      ctaPrimary: 'Probar el agente por WhatsApp',
      ctaPrimaryHref: wa(
        'cuota-mortuoria',
        'Hola, tengo una funeraria y quiero ver una demo del Agente de Cuota Mortuoria',
      ),
      ctaSecondary: 'Diagnosticar mi madurez IA (gratis · 6 min)',
      ctaSecondaryHref: diagnostico('cuota-mortuoria'),
    },
    chatMock: {
      title: 'Cómo conversa el agente con una familia',
      contact: 'Funeraria Tipo · Asistente IA · Lucerna',
      messages: [
        {
          from: 'cliente',
          text: 'Buenas tardes, falleció mi padre el martes. Una vecina me dijo que la AFP paga algo para el funeral, ¿es verdad?',
          time: '15:22',
        },
        {
          from: 'agente',
          text: 'Lamento mucho su pérdida 🤍\nSí, es verdad. Se llama **cuota mortuoria** y son hasta 15 UF (~$570.000 CLP). La paga la AFP o el régimen previsional al que estaba afiliado su padre.\nPara entregarle la guía exacta, ¿me podría dar el RUT de su padre? Hago la consulta en vivo a la Superintendencia de Pensiones y le digo la AFP en segundos.',
          time: '15:23',
        },
        { from: 'cliente', text: '7.245.812-K', time: '15:25' },
        {
          from: 'agente',
          text: 'Consultando en spensiones.cl... ⏳\n\n✅ Confirmado: su padre estaba afiliado a **AFP Habitat**.\n\n📋 Cuota mortuoria AFP Habitat:\n• Monto: hasta 15 UF (~$570.000)\n• Plazo: 12 meses desde el fallecimiento\n• Documentos:\n  ‒ Certificado de defunción\n  ‒ Factura de la funeraria (ya se la entregamos)\n  ‒ Su cédula vigente\n  ‒ Certificado de parentesco\n• Trámite: afphabitat.cl/cuota-mortuoria\n• Teléfono: 600 200 1010\n\nLe sirve mejor online o por sucursal?',
          time: '15:25',
        },
        { from: 'cliente', text: 'Online, ¿es complicado?', time: '15:27' },
        {
          from: 'agente',
          text: 'Toma 15 min. Pasos:\n1️⃣ Entre a afphabitat.cl → "Cuota mortuoria"\n2️⃣ Suba los 4 documentos\n3️⃣ Adjunte sus datos bancarios para depósito\n4️⃣ Espere resolución (hasta 10 días hábiles)\n5️⃣ El pago llega por transferencia\n\nLe envío la guía completa al correo. Si algo se traba, me escribe y le ayudo 🤍',
          time: '15:27',
        },
      ],
    },
    painPoints: [
      {
        icon: 'dollar-sign',
        title: '~40% de las familias no cobra la cuota mortuoria',
        description:
          'Por desconocimiento, miedo al papeleo o pérdida del plazo (1 año). Son $550-700K que les corresponden y se pierden, sin que la funeraria pueda diferenciarse ayudando.',
        metric: '40%',
      },
      {
        icon: 'clock',
        title: 'Su equipo responde la misma consulta 30 veces al mes',
        description:
          '"¿Cuánto es?", "¿Cómo lo solicito?", "¿Sirve si era IPS?", "¿Y si murió hace 8 meses?". Horas perdidas en algo que un agente bien entrenado responde al instante.',
        metric: '30/mes',
      },
      {
        icon: 'smartphone',
        title: 'Las familias consultan a deshoras y en duelo',
        description:
          'Fallece un familiar a las 2 am, llaman al día siguiente. Si no responde en horas, llaman a la funeraria del frente. El primer contacto bien manejado gana el servicio.',
        metric: '2 am',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Conectamos WhatsApp Business y embebemos el consultor',
        description:
          'Su número actual de funeraria sigue funcionando. El agente atiende cuando su equipo no puede: noches, fines de semana, feriados, primer contacto en duelo. También puede embeberse en su sitio web como widget.',
      },
      {
        step: 2,
        title: 'Autodetección con solo el RUT (motor Lucerna)',
        description:
          'El agente consulta en vivo contra spensiones.cl (Superintendencia de Pensiones) y detecta automáticamente la institución: 7 AFPs (Capital, Cuprum, Habitat, Modelo, PlanVital, ProVida, Uno), PGU, renta vitalicia, FFAA o Carabineros. Sin que la familia tenga que recordar dónde estaba afiliado su familiar.',
      },
      {
        step: 3,
        title: 'Guía específica por institución, con empatía',
        description:
          'Una vez detectada la AFP/régimen, entrega la guía exacta: monto vigente en UF, documentos por caso, plazo restante, URL trámite oficial, teléfono, pasos numerados. Tono respetuoso siempre. Si la institución no se detecta, lo decimos abiertamente — nunca inventamos datos no verificados.',
      },
      {
        step: 4,
        title: 'Deriva a su equipo cuando corresponde',
        description:
          'Contratación de servicios funerarios, decisiones presenciales, casos sensibles, reclamos. El equipo entra a la conversación con todo el contexto previo de la familia.',
      },
    ],
    metrics: [
      { value: '7 AFPs + PGU', label: 'Cobertura completa', sublabel: 'incluye renta vitalicia, FFAA, Carabineros' },
      { value: '15 UF', label: 'Monto beneficio', sublabel: '~$570.000 CLP vigente' },
      { value: '+25%', label: 'Familias que cobran', sublabel: 'vs. dejar el trámite al papel' },
      { value: '24/7', label: 'Atención en vivo', sublabel: 'consulta verificada vs spensiones.cl' },
    ],
    pricing: {
      intro:
        'Las funerarias chilenas suelen ser microempresas formalizadas, lo que las hace ideales para Kit Digital SERCOTEC ($1.2M, ~100% cubierto) o CRECE ($5M, 95% cubierto). El agente es financiable casi en su totalidad con fondos públicos.',
      ventaUnica: [
        {
          tier: 'Starter',
          price: '$1.800.000 CLP',
          copago: 'Copago $600K con Kit Digital',
          fondo: 'Kit Digital SERCOTEC',
          features: [
            '1 sucursal',
            'Hasta 500 conversaciones/mes',
            'Asistente cuota mortuoria AFP + IPS',
            'Lista de documentos por caso',
            'Cálculo de monto en UF actualizado',
            'Capacitación 6h + soporte 12 meses',
          ],
        },
        {
          tier: 'Pro',
          price: '$3.200.000 CLP',
          copago: 'Copago $800K con CRECE SERCOTEC',
          fondo: 'SERCOTEC CRECE',
          highlight: true,
          features: [
            'Hasta 3 sucursales',
            'Conversaciones ilimitadas',
            'Agendamiento de servicios funerarios',
            'Integración con sistema de gestión interno',
            'Seguimiento al cliente post-servicio',
            'Soporte prioritario 18 meses',
          ],
        },
        {
          tier: 'Enterprise',
          price: '$5.000.000 CLP',
          copago: 'Copago $1M con CRECE + aporte propio',
          fondo: 'SERCOTEC CRECE + CORFO',
          features: [
            'Red multi-sucursal nacional',
            'Integración con seguros de vida y previsión',
            'Reportes ejecutivos por ciudad',
            'Workflows custom (cremación, traslado, repatriación)',
            'Soporte dedicado 24 meses',
          ],
        },
      ],
      saas: [
        {
          tier: 'Starter',
          price: '$95.000 CLP/mes',
          features: ['1 sucursal', '300 conversaciones', 'Asistente cuota mortuoria'],
        },
        {
          tier: 'Pro',
          price: '$170.000 CLP/mes',
          highlight: true,
          features: ['Multi-sucursal', 'Ilimitado', 'Agendamiento + seguimiento'],
        },
        {
          tier: 'Enterprise',
          price: '$280.000 CLP/mes',
          features: ['Red nacional', 'Integración seguros', 'Workflows custom'],
        },
      ],
    },
    financing: {
      instrumento: 'SERCOTEC Kit Digital + CRECE',
      monto: '$1.200.000 - $5.000.000 CLP',
      cofinanciamiento: '95-100%',
      descripcion:
        'Las funerarias chilenas formalizadas como microempresa (ventas anuales <UF 25.000) acceden a Kit Digital SERCOTEC con ~100% del costo cubierto. Para funerarias con varias sucursales, SERCOTEC CRECE cubre 95% del proyecto Pro. Nosotros le asesoramos la postulación sin costo.',
      quienPostula: 'La funeraria beneficiaria',
    },
    caseStudy: {
      negocio: 'Funeraria 2 sucursales (Talca, Maule)',
      perfil: '~95 servicios/mes, equipo 8 personas, atención telefónica + WA personal',
      antes: [
        '~30 consultas/mes sobre cuota mortuoria respondidas manual (3-5 min cada una, sin certeza de la AFP)',
        'Familias preguntan, el equipo no sabe en qué AFP estaba el causante, derivan a "averigüe en su AFP"',
        '~40% de las familias atendidas no recupera la cuota mortuoria (se pierde ~$22M en beneficios)',
        'Equipo en duelo respondiendo WA hasta las 23:00',
      ],
      despues: [
        'Agente detecta AFP/régimen en <10 seg con el RUT y entrega guía específica al instante',
        '+25% más familias completan el trámite y cobran su cuota',
        'La funeraria se posiciona como "la que sabe exactamente qué hay que hacer" → +18% derivación de servicios',
        'Equipo libera ~12h/semana para acompañamiento presencial',
      ],
      roi: 'Diferenciación con dato verificado + tiempo equipo + más servicios derivados: ~$4.5M/mes de valor adicional. Payback mes 2.',
    },
    faq: [
      {
        q: '¿Qué es exactamente la cuota mortuoria?',
        a: 'Es un beneficio en dinero que paga la AFP (régimen DL 3.500) u otros regímenes previsionales para cubrir parte de los gastos funerarios del causante. Equivale a **hasta 15 UF** (~$570.000 CLP al valor UF actual). Se paga a quien acredita haber pagado los gastos funerarios (familiar o tercero, con factura o boleta). Plazo para solicitar: **hasta 12 meses** desde el fallecimiento.',
      },
      {
        q: '¿Cómo verifican los datos? ¿De dónde sale la información?',
        a: 'El agente usa nuestro motor **Lucerna**, que consulta en vivo contra **spensiones.cl** (Superintendencia de Pensiones de Chile) con el RUT del causante. Detecta automáticamente la AFP (Capital, Cuprum, Habitat, Modelo, PlanVital, ProVida, Uno) y régimenes adicionales (PGU, renta vitalicia, FFAA, Carabineros). **Política firme**: si la institución no se detecta o el dato no se verifica, lo decimos abiertamente — nunca inventamos información de beneficios sociales.',
      },
      {
        q: '¿El agente cobra la cuota por el cliente?',
        a: 'No. El agente **detecta + orienta**: identifica la AFP / régimen vía spensiones.cl, lista documentos específicos por institución, indica el canal correcto (online, teléfono, sucursal) y guía paso a paso. La gestión final la hace la familia ante la entidad correspondiente (es trámite personal). La funeraria gana posicionamiento como aliado real, con datos verificados, no como gestor del trámite.',
      },
      {
        q: '¿Reemplaza a mi equipo de atención?',
        a: 'No. Reemplaza la **consulta repetitiva de cuota mortuoria** que llega 30+ veces al mes y satura al equipo. Su gente se enfoca en lo que sí necesita criterio humano: contratación de servicio, acompañamiento presencial, casos sensibles, reclamos. La empatía humana sigue siendo el core de su funeraria.',
      },
      {
        q: '¿Funciona también para servicios funerarios completos, no solo cuota mortuoria?',
        a: 'Sí. Plan Pro incluye agendamiento de servicios (velatorio, traslado, cremación), pre-pago, seguimiento post-servicio. El módulo Cuota Mortuoria es la **puerta de entrada** que diferencia comercialmente — atrae familias que después contratan servicios.',
      },
      {
        q: '¿Cómo maneja el agente conversaciones sensibles (familia en duelo)?',
        a: 'Configuramos tono empático, frases de pésame al iniciar, ritmo pausado, sin urgencias comerciales. Si detecta crisis emocional o caso delicado (ej: fallecimiento súbito, niño, suicidio), deriva inmediatamente a una persona del equipo con notificación prioritaria. La empatía es lo primero — la información viene después.',
      },
      {
        q: '¿Está al día con la normativa y los datos de cada AFP?',
        a: 'Sí. La consulta del afiliado va en tiempo real contra spensiones.cl (no datos cacheados que envejecen). Las guías por institución (monto en UF, plazos, URLs, teléfonos, pasos) las mantiene actualizadas el equipo de Lucerna con monitor mensual. Le notificamos cuando algo material cambia.',
      },
      {
        q: '¿Puede atender también la **asignación familiar por fallecimiento** y otros beneficios?',
        a: 'Sí, en plan Pro/Enterprise agregamos otros beneficios relevantes: asignación familiar por fallecimiento (régimen IPS), pensión de sobrevivencia (AFP), seguro de vida obligatorio en créditos hipotecarios y de consumo, beneficios CCAF. Ampliamos el alcance del asistente según el perfil de su clientela.',
      },
      {
        q: '¿Cuánto demora la implementación?',
        a: 'Starter: 2-3 semanas. Pro con integración con sistema interno: 4-6 semanas. Las primeras 2 semanas son de aprendizaje supervisado: usted o un encargado revisa cada conversación para validar tono y precisión.',
      },
    ],
    relatedBlogSlugs: [
      'ley-21719-datos-sensibles-sectores-chile-2026',
      'ley-21719-proteccion-datos-pymes-chile-2026',
      'cuanto-cuesta-automatizar-whatsapp-empresa',
      'cuanto-cuesta-implementar-ia-pyme-chile',
      'calcular-roi-proyecto-ia-pyme-chile',
    ],
  },
};

// ─── Roadmap (visibles en hub, sin landing aún) ─────────────────
export const agentRoadmap = [
  { name: 'Cobranza inteligente', emoji: '💵', description: 'Recupera 15-25% más en cuentas por cobrar. WhatsApp + escalamiento.' },
  { name: 'Recepción y recordatorio', emoji: '🔔', description: 'Recordatorios automáticos de citas, vencimientos, renovaciones.' },
  { name: 'Soporte técnico N1', emoji: '🛠️', description: 'Resuelve 50-65% de tickets sin humano. Deriva los complejos.' },
  { name: 'Reservas restaurantes/hoteles', emoji: '🍽️', description: 'Reduce comisiones Booking 30%. Reservas directas por WhatsApp.' },
  { name: 'Inmobiliarias', emoji: '🏠', description: 'Califica leads, agenda visitas, envía fichas. +40% lead → visita.' },
  { name: 'Reseñas Google y reputación', emoji: '⭐', description: 'Solicita reseñas en momento óptimo. +0.4-0.8 estrellas promedio.' },
] as const;
