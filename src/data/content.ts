export const siteConfig = {
  title: 'Software a Medida para Empresas del Sur de Chile | Apps del Sur',
  description:
    'Software a medida para empresas del sur de Chile. Apps del Sur desarrolla sistemas web, apps móviles e integraciones adaptadas a operaciones agrícolas, servicios y pymes.',
  keywords:
    'software a medida Chile, desarrollo software a medida, software para pymes Chile, aplicaciones web a medida, apps móviles empresas Chile, automatización procesos, software agrícola Chile, Apps del Sur, Maule, O\'Higgins, Ñuble',
  ogTitle: 'Apps del Sur — Software a Medida para Empresas del Sur de Chile',
  ogDescription:
    'Diseñamos y desarrollamos sistemas web, apps móviles e integraciones a medida para empresas que ya no pueden seguir operando con Excel, papel y WhatsApp.',
  canonical: 'https://appsdelsur.cl',
} as const;

export const navItems = [
  { label: 'Agentes IA', href: '/agentes/' },
  { label: 'Servicios', href: '/servicios/' },
  { label: 'Diagnóstico', href: '/diagnostico-madurez-ia/' },
  { label: 'Financiamiento', href: '/#financiamiento' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contacto', href: '/#contacto' },
] as const;

export const hero = {
  badge: 'Software a medida · IA aplicada · Empresas del sur de Chile',
  titleLine1: 'Software a medida para',
  titleHighlight: 'empresas que operan en terreno',
  description:
    'Creamos sistemas web, apps móviles e integraciones para pymes que gestionan operaciones reales con planillas, papel y WhatsApp. No vendemos un software genérico: construimos una solución adaptada a su proceso, su equipo y su forma de trabajar.',
  ctaPrimary: 'Diagnosticar mi operación',
  ctaPrimaryHref: '#contacto',
  ctaSecondary: 'Ver enfoque a medida',
  ctaSecondaryHref: '/enfoque',
  subtext:
    'Diagnóstico gratuito · Desarrollo asistido por IA · Financiamiento CORFO/FIA/SERCOTEC disponible',
} as const;

export const metrics = [
  { value: '8-12', label: 'Semanas de implementación' },
  { value: '100%', label: 'Adaptado a su proceso' },
  { value: 'Web + App', label: 'Sistemas integrados' },
  { value: 'IA', label: 'Desarrollo acelerado' },
] as const;

export const features = {
  label: 'Software a medida',
  title: 'Sistemas construidos alrededor de su operación real',
  description:
    'Apps del Sur desarrolla software para empresas que necesitan ordenar procesos críticos sin forzar su operación dentro de un sistema estándar.',
  items: [
    {
      icon: 'bar-chart',
      title: 'Procesos convertidos en datos',
      description:
        'Transformamos registros dispersos en indicadores útiles para tomar decisiones: costos, avance, productividad, cumplimiento y trazabilidad.',
      highlight: true,
    },
    {
      icon: 'smartphone',
      title: 'Aplicaciones web y móviles',
      description:
        'Construimos paneles web para administración y apps móviles para equipos en terreno, incluyendo modo offline cuando la operación lo requiere.',
      highlight: true,
    },
    {
      icon: 'clock',
      title: 'Automatización administrativa',
      description:
        'Reducimos doble digitación, errores manuales y horas perdidas consolidando información desde Excel, correos, WhatsApp o papel.',
    },
    {
      icon: 'layers',
      title: 'Integración con sistemas existentes',
      description:
        'El software puede conectarse con ERP, contabilidad, RRHH, planillas o herramientas internas. No obliga a partir desde cero.',
    },
    {
      icon: 'shield',
      title: 'Trazabilidad y control',
      description:
        'Cada acción relevante queda registrada con responsable, fecha, estado e historial para auditorías, operación y gestión interna.',
    },
    {
      icon: 'sparkle',
      title: 'Desarrollo asistido por IA',
      description:
        'Usamos Claude AI para acelerar análisis, desarrollo y pruebas. La IA reduce plazos; la solución sigue siendo diseñada para su negocio.',
      highlight: true,
    },
  ],
} as const;

export const solutions = {
  label: 'Soluciones',
  title: 'Software a medida para operaciones que no calzan en un sistema genérico',
  description:
    'Atendemos empresas del centro-sur de Chile que necesitan digitalizar procesos operativos, administrativos o comerciales sin perder su forma propia de trabajar.',
  items: [
    {
      icon: 'grape',
      name: 'Agro, viñas y terreno',
      description:
        'Sistemas a medida para mano de obra, cuaderno de campo, trazabilidad, costos por hectárea y reportes agrícolas. Es un caso de uso dentro de Apps del Sur, no la definición completa de la marca.',
      href: '/sectores/viticola',
    },
    {
      icon: 'wrench',
      name: 'Servicios',
      description:
        'Control de operaciones en terreno, mantención, agendamiento, RRHH y gestión de equipos para empresas de servicios.',
      href: '#',
    },
    {
      icon: 'sparkle',
      name: 'Consultoría IA (Claude + Codex)',
      description:
        'Diagnóstico e implementación multi-modelo: Claude (Anthropic) para análisis y razonamiento, Codex/GPT (OpenAI) para integración con Microsoft 365. Elegimos la herramienta correcta para cada caso.',
      href: '/claude-ai-chile',
    },
  ],
  whyLocalTitle: '¿Por qué elegir un software local?',
  checklist: [
    'Soporte técnico en español, en tu zona horaria',
    'Levantamiento directo de procesos con el equipo que usa el sistema',
    'Configurado para las operaciones reales de su industria',
    'No reemplaza sus sistemas actuales: puede conectarse con ellos',
    'Capacitación presencial o remota para usuarios reales',
    'Financiamiento con fondos CORFO, FIA y SERCOTEC',
  ],
} as const;

export const process = {
  label: 'Cómo trabajamos',
  title: 'De proceso manual a software operativo',
  steps: [
    {
      step: '01',
      title: 'Diagnóstico del proceso',
      description:
        'Mapeamos cómo trabaja hoy su equipo: planillas, formularios, aprobaciones, reportes, responsables, puntos de dolor y decisiones críticas.',
    },
    {
      step: '02',
      title: 'Diseño de la solución',
      description:
        'Definimos módulos, pantallas, flujos, roles, datos e integraciones. Priorizamos lo que genera impacto operativo primero.',
    },
    {
      step: '03',
      title: 'Desarrollo e implementación',
      description:
        'Construimos el sistema con ciclos cortos de validación. Puede incluir plataforma web, app móvil, automatizaciones e integraciones.',
    },
    {
      step: '04',
      title: 'Capacitación y mejora continua',
      description:
        'Capacitamos usuarios, medimos adopción y dejamos una base preparada para crecer con nuevos módulos, reportes o IA aplicada.',
    },
  ],
} as const;

export const financing = {
  badge: 'Fondos públicos disponibles 2026',
  title: 'Financie hasta el',
  titleHighlight: '80%',
  titleEnd: 'de su proyecto con fondos públicos',
  description:
    'Existen instrumentos CORFO, FIA y SERCOTEC que cofinancian la digitalización de empresas. Nosotros le asesoramos en la postulación sin costo adicional.',
  cards: [
    {
      profile: 'Microempresa',
      instrument: 'SERCOTEC CRECE',
      projectCost: '$5M',
      funded: '80%',
      clientPays: '< $1M',
      highlight: true,
    },
    {
      profile: 'Pyme',
      instrument: 'CORFO Prototipos',
      projectCost: '$15-20M',
      funded: '70%',
      clientPays: '$4.5-6M',
      highlight: false,
    },
    {
      profile: 'Pyme mediana',
      instrument: 'FIA Innovación',
      projectCost: '$50M',
      funded: '80%',
      clientPays: '$10M',
      highlight: false,
    },
    {
      profile: 'Piloto de validación',
      instrument: 'CORFO Crea y Valida',
      projectCost: 'Variable',
      funded: '100%',
      clientPays: '$0',
      highlight: true,
    },
  ],
  bannerTitle: '¿No sabe cuál instrumento le corresponde?',
  bannerDescription:
    'Le ayudamos a identificar el fondo correcto y le acompañamos en todo el proceso de postulación — sin costo adicional.',
  bannerCta: 'Consultar financiamiento',
} as const;

export const faq = {
  label: 'Preguntas frecuentes',
  title: 'Todo lo que necesita saber',
  items: [
    {
      q: '¿Qué hace diferente a Apps del Sur de un sistema genérico?',
      a: 'No ofrecemos un software genérico donde usted se adapta al sistema. Desarrollamos una plataforma a medida que se configura con sus procesos, equipos, áreas y estructura de costos reales. Gracias al desarrollo asistido por Claude AI, podemos ofrecer esta personalización a precios accesibles — como si fuera software hecho a medida, pero sin el costo tradicional de un proyecto custom.',
    },
    {
      q: '¿Qué es Claude AI y cómo lo usan?',
      a: 'Claude AI es un modelo de inteligencia artificial desarrollado por Anthropic. Lo usamos como herramienta de desarrollo para acelerar cada etapa del proyecto: desde el análisis de su operación hasta la generación de código. Esto nos permite entregar software custom en 8-12 semanas en vez de 6+ meses, a una fracción del costo tradicional. También ofrecemos consultoría para integrar IA directamente en los procesos de su empresa.',
    },
    {
      q: '¿Trabajan con Codex de OpenAI o solo con Claude?',
      a: 'Trabajamos multi-modelo. Usamos Claude (Anthropic) y Codex/GPT (OpenAI) según el caso, además de modelos open-source cuando aplican. Claude destaca en razonamiento y análisis de documentos largos; Codex destaca en integración con el ecosistema Microsoft 365 y generación multimodal. En el diagnóstico gratuito le recomendamos cuál calza mejor con su operación. Más detalle en nuestras páginas de Claude AI Chile y Codex Chile, o en la comparativa Claude vs Codex 2026.',
    },
    {
      q: '¿Funciona sin conexión a internet en el campo?',
      a: 'Sí. Nuestras aplicaciones móviles están diseñadas para funcionar offline. Los datos se sincronizan automáticamente cuando el dispositivo recupera la conexión, ideal para zonas rurales del Maule, O\'Higgins, Ñuble, Biobío y Araucanía.',
    },
    {
      q: '¿Cuánto tiempo toma implementar el sistema en mi operación?',
      a: 'El proyecto de implementación toma entre 8 y 12 semanas, incluyendo el desarrollo a medida de la plataforma web y app móvil, configuración de procesos y estructura de costos, y capacitación del equipo. No es un sistema genérico que se configura en un día — es un sistema construido para su operación específica.',
    },
    {
      q: '¿Cuánto cuesta y qué modalidades ofrecen?',
      a: 'Ofrecemos dos modalidades: compra de licencia con implementación completa ($8-12M CLP, queda como propiedad del cliente) o suscripción mensual ($2.5M setup + $450K CLP/mes con actualizaciones incluidas). Ambas incluyen plataforma web, app móvil y capacitación. El sistema se paga solo en menos de 2 meses con el ahorro operativo que genera.',
    },
    {
      q: '¿Existen fondos públicos para financiar la implementación?',
      a: 'Sí. Instrumentos como CORFO Crea y Valida, FIA Innovación y SERCOTEC CRECE pueden financiar entre el 50% y el 80% del proyecto. En algunos casos, el cliente piloto puede acceder al sistema a costo $0 mientras se valida con fondos públicos. Asesoramos en la postulación.',
    },
  ],
} as const;

export const contactCTA = {
  title: 'Convierta su proceso manual en software a medida',
  description:
    'Solicite un diagnóstico gratuito. Revisamos su operación actual y proponemos una solución concreta, financiable y construida por etapas.',
  ctaPrimary: 'Solicitar diagnóstico',
  ctaPrimaryHref: '#contact-form',
  ctaWhatsApp: 'Contactar por WhatsApp',
  whatsappUrl:
    'https://wa.me/56945262335?text=Hola%2C%20me%20interesa%20conocer%20Apps%20del%20Sur',
  subtext:
    'Respondemos en menos de 24 horas · Atendemos de O\'Higgins a Araucanía',
} as const;

export const contactForm = {
  title: 'Solicite su diagnóstico gratuito',
  description:
    'Cuéntenos qué proceso quiere digitalizar, qué herramientas usa hoy y dónde se pierde más tiempo. Le contactaremos en menos de 24 horas.',
  fields: {
    name: 'Nombre completo',
    email: 'Correo electrónico',
    phone: 'Teléfono',
    company: 'Empresa',
    sector: 'Sector de su empresa',
    message: 'Mensaje (opcional)',
  },
  sectorOptions: ['Agrícola', 'Servicios', 'Consultoría IA', 'Otro'],
  submit: 'Enviar solicitud',
  formAction: 'https://formsubmit.co/dramirez.gysactiva@gmail.com',
  sideTitle: '¿Prefiere contacto directo?',
  sideItems: [
    {
      label: 'WhatsApp',
      value: '+56 9 4526 2335',
      href: 'https://wa.me/56945262335?text=Hola%2C%20me%20interesa%20conocer%20Apps%20del%20Sur',
    },
    {
      label: 'Email',
      value: 'contacto@appsdelsur.cl',
      href: 'mailto:contacto@appsdelsur.cl',
    },
    {
      label: 'Teléfono',
      value: '+56 9 4526 2335',
      href: 'tel:+56945262335',
    },
  ],
} as const;

export const claudePartner = {
  badge: 'Potenciado por IA',
  title: 'Desarrollo asistido por IA para software a medida',
  description:
    'Usamos Claude (Anthropic) y Codex (OpenAI) para acelerar diagnóstico, arquitectura, desarrollo y pruebas. Trabajamos multi-modelo: elegimos la herramienta correcta para cada caso, no la de moda.',
  bullets: [
    'Entregar software custom en semanas, no meses',
    'Ofrecer desarrollo a medida a precio accesible',
    'Integrar inteligencia artificial directamente en su software',
  ],
  cta: 'Conocer más sobre IA aplicada',
  ctaHref: '/claude-ai-chile',
} as const;

export const codexChile = {
  badge: 'Codex · OpenAI · Chile',
  title: 'Implementación de Codex (OpenAI) para empresas chilenas',
  description:
    'Construimos agentes y software a medida con Codex y GPT, integrados al ecosistema Microsoft 365 que su pyme ya usa. Diagnóstico, desarrollo y capacitación con financiamiento público disponible.',
  bullets: [
    'Agentes que viven dentro de Excel, Outlook, Teams y WhatsApp',
    'Prototipado rápido con Codex CLI',
    'Multi-modelo: Codex, Claude u open-source según el caso',
  ],
  cta: 'Conocer más sobre Codex',
  ctaHref: '/codex-chile',
} as const;

export const aiTrainingCallout = {
  headline: 'Incluido en cada proyecto',
  title: 'Taller de IA + 3 meses de Claude Pro',
  description:
    'Cada implementación incluye capacitación práctica en inteligencia artificial y una suscripción de 3 meses a Claude Pro para cada participante. Su equipo no solo recibe un sistema nuevo — aprende a trabajar con IA desde el día uno.',
  cta: 'Consultar beneficio',
  ctaHref: '#contacto',
} as const;

export const footer = {
  companyName: 'Apps del Sur',
  companyLegal: 'GYS Activa SpA',
  tagline:
    'Software a medida para empresas del sur de Chile. Sistemas web, apps móviles, automatización e IA aplicada.',
  copyright:
    '© 2026 Apps del Sur — GYS Activa SpA. Todos los derechos reservados.',
  madeIn: 'Software hecho en Chile',
  contact: {
    name: 'Darío Ramírez',
    phone: '+56 9 4526 2335',
    phoneHref: 'tel:+56945262335',
    email: 'contacto@appsdelsur.cl',
    whatsappUrl:
      'https://wa.me/56945262335?text=Hola%2C%20me%20interesa%20conocer%20Apps%20del%20Sur',
  },
  solutionLinks: [
    { label: 'Vitivinícola', href: '/sectores/viticola' },
    { label: 'Frutícola', href: '/sectores/fruticola' },
    { label: 'Agrícola', href: '/sectores/agricola' },
    { label: 'Claude AI Chile', href: '/claude-ai-chile' },
    { label: 'Cuaderno de Campo', href: '/cuaderno-de-campo' },
    { label: 'Nuestro Enfoque', href: '/enfoque' },
    { label: 'Financiamiento CORFO/FIA', href: '/#financiamiento' },
  ],
  regions: ["O'Higgins", 'Maule', 'Ñuble', 'Biobío', 'Araucanía'],
} as const;

// ─── Sector Pages ───────────────────────────────────────────────

export const sectorPages = {
  viticola: {
    slug: 'viticola',
    url: '/sectores/viticola',
    name: 'Vitivinícola',
    meta: {
      title: 'Software para Viñas Chile | Gestión de Mano de Obra Vitivinícola — Apps del Sur',
      description:
        'Software a medida para viñas del centro-sur de Chile. Gestión de mano de obra, cuaderno de campo digital, costos por hectárea y trazabilidad. Funciona offline. Financiamiento CORFO/FIA.',
      keywords:
        'software para viñas chile, software vitivinícola, gestión mano de obra viñas, cuaderno de campo digital viñas, costos por hectárea viña, trazabilidad vitivinícola, software agrícola Maule',
      ogTitle: 'Software para Viñas — Gestión de Mano de Obra Vitivinícola',
      ogDescription:
        'Sistema a medida para viñas: control de costos por hectárea, cuaderno de campo digital, registro de jornales y trazabilidad completa. Funciona offline en terreno.',
    },
    hero: {
      badge: 'Software para viñas',
      titleLine1: 'Gestión de mano de obra para',
      titleHighlight: 'viñas del centro-sur de Chile',
      description:
        'Controle costos por hectárea, registre jornales desde terreno con app offline, y mantenga un cuaderno de campo digital que cumple con Sustentavid y GlobalG.A.P. Sin planillas en papel.',
    },
    painPoints: [
      {
        icon: 'clock',
        title: 'Planillas y cuadernos en papel',
        description:
          'Los capataces llenan cuadernos a mano que después alguien traspasa a Excel. Se pierde información, se generan errores y el costo real por cuartel se conoce semanas después.',
      },
      {
        icon: 'dollar-sign',
        title: 'Costos por hectárea invisibles',
        description:
          'Sin registro digital, es imposible saber cuánto cuesta la poda, el desbrote o la vendimia por cuartel. Las decisiones de manejo se toman con datos atrasados o incompletos.',
      },
      {
        icon: 'shield',
        title: 'Certificaciones y trazabilidad',
        description:
          'Sustentavid, GlobalG.A.P. y la normativa laboral exigen registros trazables. Con papel, preparar una auditoría toma días y siempre falta algo.',
      },
    ],
    features: [
      {
        icon: 'smartphone',
        title: 'App de terreno que funciona offline',
        description:
          'Los supervisores registran jornales, actividades y asistencia desde el cuartel, incluso sin señal. Los datos se sincronizan al recuperar conexión.',
      },
      {
        icon: 'bar-chart',
        title: 'Costos por hectárea en tiempo real',
        description:
          'Panel de gestión con costos actualizados por cuartel, variedad y labor. Sepa hoy cuánto lleva gastado en poda, desbrote o vendimia.',
      },
      {
        icon: 'layers',
        title: 'Cuaderno de campo digital',
        description:
          'Registro de aplicaciones fitosanitarias, labores culturales y monitoreos con geolocalización y trazabilidad completa por cuartel.',
      },
      {
        icon: 'shield',
        title: 'Listo para auditorías',
        description:
          'Genera automáticamente los registros que exigen Sustentavid, GlobalG.A.P., la normativa laboral y las certificaciones de exportación.',
      },
    ],
    faq: [
      {
        q: '¿Funciona sin internet en los cuarteles?',
        a: 'Sí. La app móvil está diseñada para funcionar 100% offline. Los datos se almacenan localmente y se sincronizan automáticamente cuando el dispositivo recupera conexión WiFi o datos móviles.',
      },
      {
        q: '¿Puedo ver costos separados por cuartel y variedad?',
        a: 'Sí. El sistema permite segmentar costos por cuartel, variedad, labor y temporada. Puede comparar el costo de poda entre Cabernet y Merlot, o entre cuarteles de distinta superficie.',
      },
      {
        q: '¿Sirve para cumplir con Sustentavid?',
        a: 'Sí. El cuaderno de campo digital registra todas las aplicaciones fitosanitarias, labores culturales y monitoreos con fecha, hora, geolocalización y responsable. Genera los reportes que exige el protocolo Sustentavid.',
      },
      {
        q: '¿Se puede financiar con fondos CORFO o FIA?',
        a: 'Sí. El proyecto es elegible para SERCOTEC CRECE (80% financiado), CORFO Prototipos (70%) y FIA Innovación (80%). Le asesoramos en la postulación sin costo adicional.',
      },
    ],
    relatedBlogSlugs: [
      'cuaderno-de-campo-digital-vinas-chile',
      'vendimia-2026-gestion-temporeros-costos',
      'costo-mano-de-obra-por-hectarea-vinas-chile',
    ],
  },
  fruticola: {
    slug: 'fruticola',
    url: '/sectores/fruticola',
    name: 'Frutícola',
    meta: {
      title: 'Software Frutícola Chile | Gestión de Cosecha y Mano de Obra — Apps del Sur',
      description:
        'Software a medida para empresas frutícolas del centro-sur de Chile. Control de cosecha, packing, temporeros, costos por hectárea y trazabilidad para exportación. Financiamiento CORFO/FIA.',
      keywords:
        'software frutícola chile, gestión cosecha fruta, control temporeros frutícola, software packing chile, costos por hectárea frutícola, trazabilidad exportación fruta, software agrícola chile',
      ogTitle: 'Software Frutícola — Gestión de Cosecha y Mano de Obra',
      ogDescription:
        'Sistema a medida para frutícolas: control de cosecha por especie, gestión de temporeros, trazabilidad para exportación y costos por hectárea en tiempo real.',
    },
    hero: {
      badge: 'Software frutícola',
      titleLine1: 'Gestión de cosecha y mano de obra para',
      titleHighlight: 'frutícolas del centro-sur',
      description:
        'Controle rendimientos por hectárea, gestione temporeros en tiempo real y mantenga la trazabilidad que exige la exportación. App offline para terreno y panel de gestión para oficina.',
    },
    painPoints: [
      {
        icon: 'clock',
        title: 'Temporeros sin control en tiempo real',
        description:
          'Durante la cosecha se contratan decenas o cientos de temporeros. Sin un sistema digital, el control de asistencia, rendimiento y pagos se hace con planillas que llegan tarde y con errores.',
      },
      {
        icon: 'dollar-sign',
        title: 'Costos de cosecha desconocidos hasta fin de temporada',
        description:
          'El costo real de la cosecha por especie, variedad o lote se conoce semanas después de terminada la temporada. Las decisiones de manejo se toman sin datos actualizados.',
      },
      {
        icon: 'shield',
        title: 'Trazabilidad para exportación',
        description:
          'Los mercados de destino exigen trazabilidad desde el huerto hasta el packing. Con registros en papel, armar la carpeta de exportación es lento y propenso a errores.',
      },
    ],
    features: [
      {
        icon: 'smartphone',
        title: 'Registro de cosecha en terreno',
        description:
          'App offline para registrar bins, kilos por temporero, lote de origen y calidad. Los supervisores registran desde el huerto sin depender de señal.',
      },
      {
        icon: 'bar-chart',
        title: 'Rendimiento y costos por especie',
        description:
          'Panel con kilos cosechados, costos acumulados y rendimiento por hectárea, especie y variedad. Datos actualizados cada vez que se sincroniza la app.',
      },
      {
        icon: 'layers',
        title: 'Gestión de temporeros',
        description:
          'Control de asistencia, rendimiento individual, cálculo de pagos a trato y cumplimiento de normativa laboral para trabajadores de temporada.',
      },
      {
        icon: 'shield',
        title: 'Trazabilidad lote a lote',
        description:
          'Cada bin registra: lote de origen, fecha, cosechero, especie, variedad y destino. Información lista para la carpeta de exportación y auditorías de calidad.',
      },
    ],
    faq: [
      {
        q: '¿Funciona para gestionar temporeros a trato?',
        a: 'Sí. El sistema permite registrar rendimiento individual por temporero (bins, kilos) y calcular pagos a trato automáticamente. También controla asistencia y cumplimiento de jornada para la normativa laboral.',
      },
      {
        q: '¿Puedo rastrear fruta desde el huerto hasta el packing?',
        a: 'Sí. Cada bin tiene un registro digital con lote de origen, fecha, cosechero, especie y variedad. Esta información se transfiere al proceso de packing y queda disponible para la carpeta de exportación.',
      },
      {
        q: '¿Sirve para cerezas, arándanos, manzanas y otras especies?',
        a: 'Sí. El sistema se configura con las especies, variedades y procesos específicos de su operación. Funciona para cerezas, arándanos, manzanas, kiwis, uva de mesa y cualquier especie frutícola.',
      },
      {
        q: '¿Se integra con el sistema de packing?',
        a: 'El sistema de campo se puede integrar con su ERP o sistema de packing existente mediante APIs. Evaluamos la integración durante el diagnóstico gratuito.',
      },
    ],
    relatedBlogSlugs: [
      'costo-mano-de-obra-por-hectarea-vinas-chile',
      'calendario-agricola-2026-vinas-centro-sur-chile',
      'senales-digitalizar-gestion-mano-obra-vina',
    ],
  },
  agricola: {
    slug: 'agricola',
    url: '/sectores/agricola',
    name: 'Agrícola',
    meta: {
      title: 'Software Agrícola Chile | Gestión de Operaciones y Mano de Obra — Apps del Sur',
      description:
        'Software a medida para empresas agrícolas del centro-sur de Chile. Gestión de mano de obra, costos por hectárea, cuaderno de campo digital y cumplimiento normativo. Financiamiento CORFO/FIA.',
      keywords:
        'software agrícola chile, gestión mano de obra agrícola, costos por hectárea, cuaderno de campo digital, software campo chile, digitalización agrícola, software CORFO agrícola',
      ogTitle: 'Software Agrícola — Gestión de Operaciones y Mano de Obra',
      ogDescription:
        'Sistema a medida para empresas agrícolas: costos por hectárea, app de terreno offline, cuaderno de campo digital y cumplimiento normativo laboral.',
    },
    hero: {
      badge: 'Software agrícola',
      titleLine1: 'Gestión de operaciones para',
      titleHighlight: 'empresas agrícolas del centro-sur',
      description:
        'Un sistema construido para su operación: costos por hectárea, registro de jornales desde terreno, cuaderno de campo digital y reportes automáticos. Sin planillas ni Excel.',
    },
    painPoints: [
      {
        icon: 'clock',
        title: 'Excel y planillas que no escalan',
        description:
          'La gestión con Excel funciona hasta que la operación crece. Más hectáreas, más trabajadores, más procesos: las planillas se vuelven inmanejables y los errores se multiplican.',
      },
      {
        icon: 'dollar-sign',
        title: 'Decisiones sin datos actualizados',
        description:
          'El costo real de cada labor agrícola se conoce semanas después. Sin información en tiempo real, las decisiones de manejo se basan en estimaciones o datos de temporadas anteriores.',
      },
      {
        icon: 'shield',
        title: 'Normativa laboral y registros dispersos',
        description:
          'La DT exige registros de asistencia, jornada y descansos. Con papel o Excel disperso, una fiscalización se convierte en una emergencia administrativa.',
      },
    ],
    features: [
      {
        icon: 'smartphone',
        title: 'App de terreno offline',
        description:
          'Registro de jornales, actividades y asistencia desde cualquier sector del campo. Funciona sin internet y sincroniza automáticamente al recuperar señal.',
      },
      {
        icon: 'bar-chart',
        title: 'Costos por hectárea y actividad',
        description:
          'Panel de gestión con costos actualizados por sector, cultivo y labor. Datos en tiempo real para tomar decisiones de manejo informadas.',
      },
      {
        icon: 'layers',
        title: 'Cuaderno de campo digital',
        description:
          'Registro completo de labores culturales, aplicaciones fitosanitarias y monitoreos con geolocalización, fecha, hora y responsable.',
      },
      {
        icon: 'shield',
        title: 'Cumplimiento normativo automático',
        description:
          'Genera los registros de asistencia, jornada laboral y descansos que exige la Dirección del Trabajo. Siempre listo para una fiscalización.',
      },
    ],
    faq: [
      {
        q: '¿Sirve para cualquier tipo de cultivo?',
        a: 'Sí. El sistema se configura con los cultivos, sectores y procesos específicos de su operación. Funciona para hortalizas, cereales, semilleros, viveros y cualquier explotación agrícola.',
      },
      {
        q: '¿Qué diferencia hay con un software agrícola genérico?',
        a: 'Un sistema genérico ofrece funcionalidades estándar que no se adaptan a su operación. Nosotros construimos un sistema a medida: con sus sectores, cultivos, estructura de costos y reglas de negocio. Gracias a Claude AI, lo entregamos en 8-12 semanas a precio accesible.',
      },
      {
        q: '¿Necesito infraestructura tecnológica especial?',
        a: 'No. Solo necesita un computador con internet para la plataforma web y smartphones Android o iOS para la app de terreno. No requiere servidores propios, instalaciones especiales ni equipo de TI.',
      },
      {
        q: '¿Puedo empezar con un módulo y agregar más después?',
        a: 'Sí. El sistema es modular: puede empezar con gestión de mano de obra y agregar cuaderno de campo, control de costos u otros módulos cuando los necesite. Crece con su operación.',
      },
    ],
    relatedBlogSlugs: [
      'software-agricola-chile-comparativa-2026',
      'senales-digitalizar-gestion-mano-obra-vina',
      'guia-financiamiento-corfo-fia-digitalizacion-agricola-2026',
    ],
  },
} as const;

export const cuadernoDeCampoPage = {
  slug: 'cuaderno-de-campo',
  url: '/cuaderno-de-campo',
  name: 'Cuaderno de Campo Digital',
  meta: {
    title: 'Cuaderno de Campo Digital Chile | Registro Fitosanitario y Trazabilidad — Apps del Sur',
    description:
      'Cuaderno de campo digital para viñas y frutícolas del centro-sur de Chile. Registro de aplicaciones fitosanitarias, labores culturales y monitoreos con geolocalización. Sustentavid y GlobalG.A.P.',
    keywords:
      'cuaderno de campo digital, cuaderno de campo chile, registro fitosanitario digital, trazabilidad agrícola, sustentavid registros, globalg.a.p cuaderno campo, cuaderno campo app móvil',
    ogTitle: 'Cuaderno de Campo Digital — Registro y Trazabilidad',
    ogDescription:
      'Reemplace el cuaderno de campo en papel por un registro digital con geolocalización, trazabilidad completa y reportes automáticos para Sustentavid y GlobalG.A.P.',
  },
  hero: {
    badge: 'Cuaderno de campo digital',
    titleLine1: 'Reemplace el papel por un',
    titleHighlight: 'cuaderno de campo digital',
    description:
      'Registro de aplicaciones fitosanitarias, labores culturales y monitoreos desde su celular. Con geolocalización, fotos, firma digital y reportes automáticos para Sustentavid y GlobalG.A.P.',
  },
  painPoints: [
    {
      icon: 'clock',
      title: 'Cuadernos en papel que se pierden',
      description:
        'Los registros en papel se mojan, se pierden, se llenan de errores y nadie los consulta hasta que llega una auditoría. Transcribirlos a Excel toma horas y agrega más errores.',
    },
    {
      icon: 'shield',
      title: 'Auditorías estresantes',
      description:
        'Cuando el auditor de Sustentavid o GlobalG.A.P. llega, comienza la carrera por encontrar registros, completar lo que falta y organizar la carpeta. Con papel, siempre falta algo.',
    },
    {
      icon: 'layers',
      title: 'Sin trazabilidad real',
      description:
        'El papel no tiene fecha automática, ni geolocalización, ni firma digital. No se puede verificar cuándo, dónde y quién hizo cada registro. La trazabilidad es nominal, no real.',
    },
  ],
  features: [
    {
      icon: 'smartphone',
      title: 'Registro desde el celular',
      description:
        'Registre aplicaciones, labores y monitoreos desde terreno con su celular. Cada registro incluye fecha, hora, geolocalización y responsable de forma automática.',
    },
    {
      icon: 'shield',
      title: 'Listo para Sustentavid y GlobalG.A.P.',
      description:
        'Genera los reportes y registros que exigen los protocolos de certificación. El auditor revisa todo en pantalla, sin carpetas ni papeles.',
    },
    {
      icon: 'layers',
      title: 'Trazabilidad por cuartel y aplicación',
      description:
        'Cada registro queda vinculado al cuartel, con geolocalización GPS, fotos opcionales y firma digital del responsable. Trazabilidad 100% verificable.',
    },
    {
      icon: 'bar-chart',
      title: 'Reportes automáticos',
      description:
        'Resúmenes de aplicaciones por cuartel, calendario de reentrada, historial de labores y exportación a PDF. Información lista cuando la necesite.',
    },
  ],
  comparison: {
    title: 'Papel vs Excel vs Cuaderno de Campo Digital',
    headers: ['Característica', 'Papel', 'Excel', 'Digital'],
    rows: [
      ['Registro en terreno', 'Lento, errores', 'No disponible', 'Inmediato, offline'],
      ['Geolocalización', 'No', 'No', 'Automática (GPS)'],
      ['Fotos y evidencia', 'No', 'Manual', 'Integrada'],
      ['Trazabilidad', 'Nominal', 'Parcial', '100% verificable'],
      ['Tiempo de auditoría', 'Días', 'Horas', 'Minutos'],
      ['Reportes', 'Manual', 'Semi-manual', 'Automáticos'],
    ],
  },
  faq: [
    {
      q: '¿Funciona sin internet en el campo?',
      a: 'Sí. La app almacena todos los registros localmente y los sincroniza automáticamente cuando recupera conexión. Puede trabajar todo el día sin señal.',
    },
    {
      q: '¿Reemplaza completamente el cuaderno en papel?',
      a: 'Sí. El cuaderno de campo digital cumple con todos los requisitos de registro que exigen Sustentavid, GlobalG.A.P. y la normativa fitosanitaria del SAG. Los registros digitales tienen mayor valor probatorio que el papel.',
    },
    {
      q: '¿Los auditores aceptan registros digitales?',
      a: 'Sí. Los protocolos de certificación aceptan registros digitales siempre que sean trazables, verificables y estén respaldados. Nuestro sistema cumple con todos estos requisitos y los auditores pueden revisar todo en pantalla.',
    },
    {
      q: '¿Se integra con el resto del sistema de gestión?',
      a: 'Sí. El cuaderno de campo es un módulo del sistema Apps del Sur. Se integra con gestión de mano de obra, costos por hectárea y reportes de gestión. Todo en una sola plataforma.',
    },
  ],
  relatedBlogSlugs: [
    'cuaderno-de-campo-digital-vinas-chile',
    'sustentavid-globalg-a-p-registros-trazabilidad-software',
    'software-agricola-chile-comparativa-2026',
  ],
} as const;

export const cuadernoCampoVinasPage = {
  slug: 'cuaderno-de-campo-vinas',
  url: '/cuaderno-de-campo-vinas-chile',
  name: 'Cuaderno de Campo para Viñas',
  meta: {
    title: 'Cuaderno de Campo Digital para Viñas Chile | Apps del Sur',
    description:
      'Cuaderno de campo digital para viñas chilenas. Reemplace papel y Excel por una app offline para registrar labores, trabajadores, cuarteles y costos por hectárea.',
    keywords:
      'cuaderno de campo digital viñas chile, app cuaderno campo viña, registro labores viñedo, trazabilidad viñas chile, software cuaderno campo agrícola',
    ogTitle: 'Cuaderno de Campo Digital para Viñas en Chile',
    ogDescription:
      'App offline para registrar labores, trabajadores y cuarteles en viñas. Datos trazables, costos por hectárea y reportes listos para gerencia.',
  },
  hero: {
    badge: 'Página pilar · Viñas',
    titleLine1: 'Cuaderno de campo digital para',
    titleHighlight: 'viñas chilenas',
    description:
      'El jefe de campo registra desde el celular quién trabajó, en qué cuartel y qué labor realizó, incluso sin señal. Administración recibe datos listos para calcular costos por hectárea y preparar auditorías.',
  },
  painPoints: [
    {
      icon: 'clock',
      title: 'El papel llega tarde a administración',
      description:
        'Los datos se anotan en terreno y se transcriben después. Entre errores, omisiones y WhatsApp, el costo real aparece cuando ya no se puede corregir.',
    },
    {
      icon: 'layers',
      title: 'Excel no muestra lo que pasa por cuartel',
      description:
        'Una planilla consolida datos, pero no captura fecha, geolocalización, responsable ni evidencia en terreno.',
    },
    {
      icon: 'shield',
      title: 'Auditorías y trazabilidad toman demasiado tiempo',
      description:
        'Sustentavid, GlobalG.A.P. y controles internos requieren registros claros. Con papel, preparar evidencia consume días.',
    },
  ],
  features: [
    {
      icon: 'smartphone',
      title: 'App offline para jefes de campo',
      description:
        'Registro de trabajadores, labores, cuarteles, horas y producción desde el celular. Sin señal, la app guarda y sincroniza después.',
    },
    {
      icon: 'bar-chart',
      title: 'Costo por hectárea en tiempo real',
      description:
        'Cada registro alimenta reportes de costo por cuartel, hectárea, labor y temporada para tomar decisiones antes de fin de mes.',
    },
    {
      icon: 'shield',
      title: 'No reemplaza la contabilidad',
      description:
        'Apps del Sur alimenta Rexmas, SAP, QAD o el sistema contable del cliente con datos limpios y listos para procesar.',
    },
    {
      icon: 'layers',
      title: 'Implementación adaptada a la viña',
      description:
        'Se configura con sus cuarteles, variedades, labores, tratos, cuadrillas y reglas de operación reales.',
    },
  ],
  comparison: {
    title: 'Papel vs Excel vs Apps del Sur',
    headers: ['Necesidad', 'Papel', 'Excel', 'Apps del Sur'],
    rows: [
      ['Registro en terreno', 'Manual y frágil', 'Posterior a la jornada', 'Móvil y offline'],
      ['Costo por hectárea', 'No disponible', 'Tardío y manual', 'En tiempo real'],
      ['Trazabilidad', 'Difícil de auditar', 'Parcial', 'Por trabajador, cuartel y labor'],
      ['Integración contable', 'Transcripción manual', 'Carga manual', 'Datos listos para enviar'],
      ['Auditorías', 'Carpetas y búsqueda', 'Planillas dispersas', 'Reportes automáticos'],
    ],
  },
  faq: [
    {
      q: '¿Sirve para viñas pequeñas de 20 a 50 hectáreas?',
      a: 'Sí. Es precisamente donde el papel y Excel suelen producir más dependencia de una sola persona. La implementación puede partir con mano de obra y crecer a trazabilidad o reportes.',
    },
    {
      q: '¿Funciona durante poda, vendimia y labores intermedias?',
      a: 'Sí. Se configura con las labores reales de la viña: poda, desbrote, raleo, cosecha, aplicaciones, mantención y otras actividades propias.',
    },
    {
      q: '¿Se puede financiar con fondos públicos?',
      a: 'Sí. Dependiendo del tamaño y región, puede postular a SERCOTEC, CORFO o FIA. Apps del Sur ayuda a identificar el instrumento adecuado.',
    },
  ],
  relatedBlogSlugs: [
    'cuaderno-de-campo-digital-vinas-chile',
    'costo-mano-de-obra-por-hectarea-vinas-chile',
    'senales-digitalizar-gestion-mano-obra-vina',
  ],
} as const;

export const softwareManoObraVinasPage = {
  slug: 'software-mano-obra-vinas',
  url: '/software-mano-obra-vinas-chile',
  name: 'Software de Mano de Obra para Viñas',
  meta: {
    title: 'Software de Mano de Obra para Viñas Chile | Apps del Sur',
    description:
      'Software para gestionar mano de obra en viñas chilenas: asistencia, labores, tratos, cuarteles, costos por hectárea y reportes para administración.',
    keywords:
      'software mano de obra viñas chile, gestión temporeros viñas, control labores viñedo, costos mano de obra agrícola, software temporeros agrícolas',
    ogTitle: 'Software de Gestión de Mano de Obra para Viñas',
    ogDescription:
      'Controle temporeros, labores, tratos y costos por hectárea desde una app móvil offline conectada a reportes de gerencia.',
  },
  hero: {
    badge: 'Gestión de mano de obra',
    titleLine1: 'Software para controlar',
    titleHighlight: 'mano de obra en viñas',
    description:
      'Registre asistencia, labores, cuadrillas, tratos y producción desde terreno. Sepa cada día cuánto está costando cada cuartel y qué cuadrilla está rindiendo mejor.',
  },
  painPoints: [
    {
      icon: 'clock',
      title: 'Temporeros y cuadrillas cambian todos los días',
      description:
        'Sin registro digital, la asistencia y el rendimiento dependen de cuadernos, mensajes y memoria del capataz.',
    },
    {
      icon: 'dollar-sign',
      title: 'Los tratos se calculan tarde',
      description:
        'Cuando el pago por producción se consolida días después, aparecen diferencias, reclamos y ajustes manuales.',
    },
    {
      icon: 'bar-chart',
      title: 'Gerencia no ve costos a tiempo',
      description:
        'La desviación presupuestaria aparece a fin de mes o al cierre de temporada, no cuando aún se puede ajustar.',
    },
  ],
  features: [
    {
      icon: 'smartphone',
      title: 'Asistencia y labores desde terreno',
      description:
        'El jefe de campo registra quién trabajó, dónde, en qué labor, cuántas horas y bajo qué modalidad de pago.',
    },
    {
      icon: 'dollar-sign',
      title: 'Tratos, jornales y rendimiento',
      description:
        'Configure reglas de pago por día, hora, trato o unidad de producción según la operación real de la viña.',
    },
    {
      icon: 'bar-chart',
      title: 'Reportes por trabajador y cuartel',
      description:
        'Compare cuadrillas, costos y rendimiento por labor, cuartel y temporada sin reconstruir planillas manualmente.',
    },
    {
      icon: 'shield',
      title: 'Datos listos para contabilidad',
      description:
        'No reemplaza su sistema contable o de remuneraciones. Le entrega datos ordenados para integrarlos o exportarlos.',
    },
  ],
  faq: [
    {
      q: '¿Sirve para pagos por trato?',
      a: 'Sí. El sistema puede configurarse con unidades de trato, tarifas, rendimiento y reglas específicas por labor.',
    },
    {
      q: '¿Puede usarlo un capataz sin experiencia digital?',
      a: 'Sí. La app se diseña para terreno, con flujos simples, capacitación presencial y operación offline.',
    },
    {
      q: '¿Entrega reportes para administración?',
      a: 'Sí. Los datos se consolidan en una plataforma web con reportes por trabajador, cuadrilla, labor, cuartel y costo por hectárea.',
    },
  ],
  relatedBlogSlugs: [
    'costo-mano-de-obra-por-hectarea-vinas-chile',
    'vendimia-2026-gestion-temporeros-costos',
    'senales-digitalizar-gestion-mano-obra-vina',
  ],
} as const;

export const costoManoObraHectareaPage = {
  slug: 'costo-mano-obra-hectarea',
  url: '/costo-mano-obra-hectarea-vinas',
  name: 'Costo de Mano de Obra por Hectárea',
  meta: {
    title: 'Costo de Mano de Obra por Hectárea en Viñas | Apps del Sur',
    description:
      'Calcule el costo real de mano de obra por hectárea en viñas. Apps del Sur registra labores, temporeros y cuarteles para mostrar costos en tiempo real.',
    keywords:
      'costo mano de obra por hectárea viñas, calcular costo mano de obra viña, costos por cuartel viñedo, gestión costos agrícolas, costos viñas chile',
    ogTitle: 'Calcule el Costo de Mano de Obra por Hectárea en Viñas',
    ogDescription:
      'Deje de esperar al cierre de mes. Con Apps del Sur, cada registro de terreno alimenta costos por hectárea, cuartel y labor.',
  },
  hero: {
    badge: 'Costos agrícolas',
    titleLine1: 'Calcule el costo real de',
    titleHighlight: 'mano de obra por hectárea',
    description:
      'Si la poda del cuartel 12 costó más de lo presupuestado, debería saberlo durante la semana, no al final del mes. Apps del Sur convierte cada registro de terreno en datos de costo accionables.',
  },
  painPoints: [
    {
      icon: 'dollar-sign',
      title: 'El costo aparece cuando ya es tarde',
      description:
        'Con papel y Excel, los costos se reconstruyen después. Cuando aparece la desviación, la labor ya terminó.',
    },
    {
      icon: 'layers',
      title: 'No se compara por cuartel ni labor',
      description:
        'Sin datos ordenados, es difícil saber si el problema está en una cuadrilla, un cuartel, una variedad o una modalidad de pago.',
    },
    {
      icon: 'clock',
      title: 'Administración pierde horas consolidando',
      description:
        'La información llega por WhatsApp, papel y planillas. Consolidar costos consume tiempo que podría usarse para decidir.',
    },
  ],
  features: [
    {
      icon: 'bar-chart',
      title: 'Costo por hectárea en tiempo real',
      description:
        'Cada registro de trabajo se asigna a cuartel, labor y trabajador. El sistema calcula el costo por hectárea automáticamente.',
    },
    {
      icon: 'layers',
      title: 'Comparación por cuartel y temporada',
      description:
        'Identifique qué cuarteles, labores o cuadrillas están desviándose del presupuesto mientras aún puede ajustar.',
    },
    {
      icon: 'smartphone',
      title: 'Datos desde el origen',
      description:
        'El dato nace en terreno, no en una planilla reconstruida. Eso reduce errores y mejora la confianza en los reportes.',
    },
    {
      icon: 'shield',
      title: 'Base para financiamiento y ROI',
      description:
        'Con costos claros, puede justificar inversión, postular a fondos y demostrar ahorro frente al copago del proyecto.',
    },
  ],
  faq: [
    {
      q: '¿Qué necesito para calcular costo por hectárea?',
      a: 'Necesita registrar trabajador, labor, cuartel, horas o producción, modalidad de pago y superficie asociada. Apps del Sur ordena esos datos desde terreno.',
    },
    {
      q: '¿Puedo partir con una sola labor?',
      a: 'Sí. Muchas viñas comienzan con poda, vendimia o una labor crítica para probar el modelo de costos y luego amplían el sistema.',
    },
    {
      q: '¿Esto sirve para justificar una inversión con CORFO o FIA?',
      a: 'Sí. Un diagnóstico de pérdidas y ahorro esperado ayuda a defender el proyecto y mostrar compromiso económico del cliente.',
    },
  ],
  relatedBlogSlugs: [
    'costo-mano-de-obra-por-hectarea-vinas-chile',
    'guia-financiamiento-corfo-fia-digitalizacion-agricola-2026',
    'software-agricola-chile-comparativa-2026',
  ],
} as const;

export const enfoquePage = {
  meta: {
    title: 'Nuestro Enfoque | Software a Medida vs Sistema Genérico — Apps del Sur',
    description:
      'Por qué el software a medida potenciado por IA es mejor que un sistema genérico para empresas del sur de Chile. Comparamos costos, plazos y resultados.',
    keywords:
      'software a medida chile, desarrollo software IA, Claude AI desarrollo, software personalizado chile, por qué software a medida, software accesible chile',
    ogTitle: 'Nuestro Enfoque — Software a Medida Accesible con IA',
    ogDescription:
      'Gracias a Claude AI, entregamos software custom en 8-12 semanas a una fracción del costo tradicional. Sin limitaciones genéricas, sin costos de consultora tradicional.',
  },
  hero: {
    badge: 'Nuestro enfoque',
    titleLine1: 'Software a medida, a',
    titleHighlight: 'precio accesible',
    description:
      'Tradicionalmente, el software a medida era caro y lento. Los sistemas genéricos eran baratos pero limitados. Con Claude AI, eliminamos esa disyuntiva: entregamos software 100% personalizado en semanas, no meses.',
  },
  comparison: {
    title: '¿Sistema genérico o software a medida?',
    description: 'La mayoría de las empresas enfrentan esta disyuntiva. Nosotros la resolvemos con un tercer camino.',
    columns: [
      {
        name: 'Sistema genérico',
        icon: 'layers',
        verdict: 'Limitado',
        items: [
          { label: 'Personalización', value: 'Mínima — se adapta usted al sistema' },
          { label: 'Plazo', value: 'Inmediato (pero configuración semanas)' },
          { label: 'Costo mensual', value: '$200-500K CLP/mes permanente' },
          { label: 'Propiedad', value: 'Del proveedor — si deja de pagar, pierde acceso' },
          { label: 'Soporte', value: 'Ticket remoto, en inglés, horario USA' },
        ],
      },
      {
        name: 'Consultora tradicional',
        icon: 'clock',
        verdict: 'Caro y lento',
        items: [
          { label: 'Personalización', value: 'Total, pero requiere meses de análisis' },
          { label: 'Plazo', value: '6-18 meses' },
          { label: 'Costo', value: '$30-80M CLP' },
          { label: 'Propiedad', value: 'Del cliente' },
          { label: 'Soporte', value: 'Costoso, depende del contrato' },
        ],
      },
      {
        name: 'Apps del Sur + Claude AI',
        icon: 'sparkle',
        verdict: 'Lo mejor de ambos',
        highlight: true,
        items: [
          { label: 'Personalización', value: '100% a medida de su operación' },
          { label: 'Plazo', value: '8-12 semanas' },
          { label: 'Costo', value: '$5-12M CLP (financiable 50-80%)' },
          { label: 'Propiedad', value: 'Del cliente — licencia perpetua' },
          { label: 'Soporte', value: 'Local, en español, presencial en su zona' },
        ],
      },
    ],
  },
  pillars: [
    {
      icon: 'sparkle',
      title: 'Desarrollo asistido por IA',
      description:
        'Claude AI nos permite generar, revisar y optimizar código a una velocidad imposible con métodos tradicionales. Un equipo pequeño logra lo que antes requería un equipo de 10 personas.',
    },
    {
      icon: 'map-pin',
      title: 'Presencia local en el sur de Chile',
      description:
        'No somos una consultora de Santiago ni un proveedor remoto. Estamos en el Maule, conocemos la realidad del centro-sur y capacitamos presencialmente en terreno.',
    },
    {
      icon: 'shield',
      title: 'Financiamiento con fondos públicos',
      description:
        'Conocemos los instrumentos CORFO, FIA y SERCOTEC al detalle. Le asesoramos en la postulación y estructuramos el proyecto para maximizar el financiamiento.',
    },
    {
      icon: 'trending-up',
      title: 'Sistema que crece con usted',
      description:
        'Empiece con lo que necesita hoy y agregue módulos cuando crezca. No paga por funcionalidades que no usa ni queda atrapado en un plan fijo.',
    },
  ],
} as const;
