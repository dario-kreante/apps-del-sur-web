export const siteConfig = {
  title: 'Software a Medida para Empresas del Sur de Chile | Apps del Sur',
  description:
    'Software a medida para empresas del sur de Chile. Apps del Sur desarrolla sistemas web, apps móviles e integraciones adaptadas a operaciones agrícolas, servicios y pymes.',
  keywords:
    'software a medida Chile, desarrollo software a medida, software para pymes Chile, aplicaciones web a medida, apps móviles empresas Chile, automatización procesos, software agrícola Chile, Apps del Sur, Maule, O\'Higgins, Ñuble',
  ogTitle: 'Apps del Sur — Software a Medida para Empresas del Sur de Chile',
  ogDescription:
    'Diseñamos y desarrollamos sistemas web, apps móviles e integraciones a medida para empresas que ya no pueden seguir operando con Excel, papel y WhatsApp.',
  canonical: 'https://appsdelsur.cl/',
  /** Imagen por defecto para Open Graph / Twitter Card. URL absoluta: los crawlers no resuelven rutas relativas. */
  ogImage: 'https://appsdelsur.cl/brand/logo-horizontal.png',
  ogImageAlt: 'Apps del Sur — software a medida e IA aplicada para pymes del centro-sur de Chile',
} as const;

export const navItems = [
  { label: 'Agentes IA', href: '/agentes/' },
  { label: 'Servicios', href: '/servicios/' },
  { label: 'Nosotros', href: '/nosotros/' },
  { label: 'Diagnósticos', href: '/diagnosticos/' },
  { label: 'Financiamiento', href: '/#financiamiento' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contacto', href: '/#contacto' },
] as const;

export const hero = {
  badge: 'Consultora boutique de software e IA · Centro-sur de Chile',
  titleLine1: 'Software a medida para',
  titleHighlight: 'empresas que operan en terreno',
  description:
    'Creamos sistemas web, apps móviles e integraciones para pymes que gestionan operaciones reales con planillas, papel y WhatsApp. No vendemos un software genérico: construimos una solución adaptada a su proceso, su equipo y su forma de trabajar.',
  ctaPrimary: 'Conversemos',
  ctaPrimaryHref: '#contacto',
  ctaSecondary: 'Ver enfoque a medida',
  ctaSecondaryHref: '/enfoque/',
  subtext:
    'Conversación inicial sin costo · Pocos proyectos en paralelo · Financiamiento CORFO/FIA/SERCOTEC disponible',
} as const;

export const metrics = [
  { value: '8-12', label: 'Semanas de implementación' },
  { value: '1 equipo', label: 'Del diagnóstico a la entrega' },
  { value: '1:1', label: 'Trato directo con quien construye' },
  { value: 'Local', label: 'Presencia en terreno en el centro-sur' },
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
      href: '/sectores/viticola/',
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
      name: 'IA para quien dirige',
      description:
        'De la oportunidad al sistema funcionando. Conversemos sobre dónde puede generar valor la IA en tu empresa.',
      href: '#ia',
    },
  ],
  whyLocalTitle: '¿Por qué elegir un software local?',
  checklist: [
    'Pocas empresas a la vez: el equipo que diagnostica es el que construye',
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
      fundCap: 'Hasta $5M',
      funded: '80%',
      clientShare: '20%',
      highlight: true,
    },
    {
      profile: 'Pyme',
      instrument: 'CORFO Prototipos',
      fundCap: 'Según región',
      funded: '70%',
      clientShare: '30%',
      highlight: false,
    },
    {
      profile: 'Pyme mediana',
      instrument: 'FIA Innovación',
      fundCap: 'Según convocatoria',
      funded: '80%',
      clientShare: '20%',
      highlight: false,
    },
    {
      profile: 'Piloto de validación',
      instrument: 'CORFO Crea y Valida',
      fundCap: 'Según convocatoria',
      funded: '100%',
      clientShare: '0%',
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
      a: 'No ofrecemos un software genérico donde usted se adapta al sistema. Desarrollamos una plataforma a medida que se configura con sus procesos, equipos, áreas y estructura de costos reales. Trabajamos como un estudio boutique: tomamos pocos proyectos a la vez y el mismo equipo que diagnostica su operación es el que la construye y la acompaña.',
    },
    {
      q: '¿Qué es Claude AI y cómo lo usan?',
      a: 'Claude AI es un modelo de inteligencia artificial desarrollado por Anthropic. Lo usamos como herramienta de desarrollo para acelerar cada etapa del proyecto: desde el análisis de su operación hasta la generación de código. Esto nos permite entregar software custom en 8-12 semanas en vez de 6+ meses, sin sacrificar el trato directo con quien construye su sistema. También ofrecemos consultoría para integrar IA directamente en los procesos de su empresa.',
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
      q: '¿Cómo se define la inversión y qué modalidades ofrecen?',
      a: 'Cada proyecto se cotiza después de una conversación inicial y un diagnóstico sin costo: la inversión depende del alcance, las integraciones y el tamaño del equipo. Hay dos modalidades: compra de licencia con implementación (el sistema queda como propiedad del cliente) o suscripción mensual con actualizaciones incluidas. Ambas son financiables con fondos públicos CORFO, FIA y SERCOTEC (50-98% del proyecto). Trabajamos con pocas empresas a la vez, por eso la propuesta llega cerrada y sin sorpresas.',
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
    'Conversemos sobre su operación. Tomamos pocos proyectos a la vez para dedicarles el equipo completo: revisamos su proceso actual y le proponemos una solución concreta, financiable y construida por etapas.',
  ctaPrimary: 'Agendar conversación',
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
  badge: 'De la oportunidad al sistema funcionando',
  title: 'Potenciamos a líderes y equipos directivos para entender, decidir y ejecutar con inteligencia artificial',
  description:
    'Si diriges una empresa y la IA está en la mesa sin hoja de ruta, partimos por esa conversación: dónde hay valor, qué conviene primero y qué no vale la pena. Después, si hay un caso, lo construimos.',
  bullets: [
    'Dónde hay valor',
    'Qué conviene primero',
    'Qué no vale la pena',
  ],
  cta: 'Conversemos sobre dónde puede generar valor la IA en tu empresa',
  ctaHref: '#contacto',
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

// Bloque de recursos de la home. Hasta hoy la home no enlazaba al blog en
// absoluto: 34 artículos sin un solo enlace desde la página de más autoridad
// del sitio. La selección prioriza intención de compra — quien busca precio
// está comprando — e incluye a propósito el post de web profesional, que
// Google tenía en "Rastreada: actualmente sin indexar" por falta de enlaces.
export const blogHighlights = {
  label: 'Recursos',
  title: 'Cuánto cuesta, en cifras concretas',
  description:
    'Rangos de inversión reales para pymes chilenas, con los fondos públicos que los cubren. Escritos para que llegue informado a cualquier cotización — la nuestra incluida.',
  ctaAll: 'Ver todos los artículos',
  ctaAllHref: '/blog/',
  slugs: [
    'cuanto-cuesta-software-a-medida-chile',
    'cuanto-cuesta-automatizar-whatsapp-empresa',
    'cuanto-cuesta-web-profesional-empresa-chile',
    'calcular-roi-proyecto-ia-pyme-chile',
  ],
} as const;

export const footer = {
  companyName: 'Apps del Sur',
  companyLegal: 'GYS Activa SpA',
  tagline:
    'Estudio boutique de software a medida e IA aplicada para empresas del centro-sur de Chile. Pocos proyectos a la vez, trato directo con quien construye.',
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
    { label: 'Diagnósticos gratuitos', href: '/diagnosticos/' },
    { label: 'Vitivinícola', href: '/sectores/viticola/' },
    { label: 'Frutícola', href: '/sectores/fruticola/' },
    { label: 'Agrícola', href: '/sectores/agricola/' },
    { label: 'Claude AI Chile', href: '/claude-ai-chile/' },
    { label: 'Cuaderno de Campo', href: '/cuaderno-de-campo/' },
    { label: 'Nuestro Enfoque', href: '/enfoque/' },
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
      'sustentavid-globalg-a-p-registros-trazabilidad-software',
      'vendimia-2026-gestion-temporeros-costos',
      'planificar-poda-vinas-cuadrillas-trato',
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
        a: 'Un sistema genérico ofrece funcionalidades estándar que no se adaptan a su operación. Nosotros construimos un sistema a medida: con sus sectores, cultivos, estructura de costos y reglas de negocio. Gracias a Claude AI, lo entregamos en 8-12 semanas, con el mismo equipo de principio a fin.',
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

export const enfoquePage = {
  meta: {
    title: 'Nuestro Enfoque | Software a Medida vs Sistema Genérico — Apps del Sur',
    description:
      'Por qué un estudio boutique de software a medida con IA es mejor que un sistema genérico o una consultora grande para empresas del sur de Chile. Comparamos enfoque, plazos y resultados.',
    keywords:
      'software a medida chile, desarrollo software IA, Claude AI desarrollo, software personalizado chile, por qué software a medida, estudio boutique de software chile',
    ogTitle: 'Nuestro Enfoque — Estudio Boutique de Software a Medida con IA',
    ogDescription:
      'Pocos proyectos a la vez, el mismo equipo de principio a fin y software custom en 8-12 semanas gracias a Claude AI. Sin limitaciones genéricas, sin la distancia de una consultora grande.',
  },
  hero: {
    badge: 'Nuestro enfoque',
    titleLine1: 'Software a medida, con la atención de un',
    titleHighlight: 'estudio boutique',
    description:
      'Tradicionalmente, el software a medida era caro y lento. Los sistemas genéricos eran baratos pero limitados. Trabajamos distinto: pocos proyectos a la vez, trato directo con quien construye y Claude AI para entregar software 100% personalizado en semanas, no meses.',
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
          { label: 'Equipo', value: 'Mesa de ayuda rotativa' },
        ],
      },
      {
        name: 'Consultora grande',
        icon: 'clock',
        verdict: 'Caro y lento',
        items: [
          { label: 'Personalización', value: 'Total, pero requiere meses de análisis' },
          { label: 'Plazo', value: '6-18 meses' },
          { label: 'Costo', value: '$30-80M CLP' },
          { label: 'Propiedad', value: 'Del cliente' },
          { label: 'Soporte', value: 'Costoso, depende del contrato' },
          { label: 'Equipo', value: 'Socios venden, equipos junior ejecutan' },
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
          { label: 'Inversión', value: 'Propuesta a la medida (financiable 50-80%)' },
          { label: 'Propiedad', value: 'Del cliente — licencia perpetua' },
          { label: 'Soporte', value: 'Local, en español, presencial en su zona' },
          { label: 'Equipo', value: 'El mismo equipo de principio a fin' },
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

// ─── Nosotros Page ──────────────────────────────────────────────

export const nosotrosPage = {
  meta: {
    title: 'Quiénes somos | Consultora boutique de software e IA en Talca — Apps del Sur',
    description:
      'Apps del Sur es una consultora boutique de software a medida e IA aplicada con base en Talca. Pocos proyectos a la vez, el mismo equipo de punta a punta y experiencia con empresas de Chile, Europa y Norteamérica.',
    keywords:
      'consultora boutique software chile, quiénes somos apps del sur, desarrollo de software talca, consultora ia maule, GYS Activa SpA',
    ogTitle: 'Quiénes somos — Consultora boutique de software e IA aplicada',
  },
  hero: {
    badge: 'Quiénes somos',
    titleLine1: 'Una consultora boutique de',
    titleHighlight: 'software e IA aplicada',
    description:
      'Somos un estudio del centro-sur de Chile, con base en Talca. Diseñamos y construimos software de punta a punta para empresas que necesitan algo hecho a su medida, no un sistema de catálogo.',
    facts: [
      { label: 'Base', value: 'Talca, Región del Maule' },
      { label: 'Alcance', value: 'Chile y clientes en el extranjero' },
      { label: 'Forma de trabajo', value: 'Pocos proyectos en paralelo' },
      { label: 'Razón social', value: 'GYS Activa SpA' },
    ],
  },
  principles: {
    label: 'Por qué boutique',
    title: 'Lo que significa trabajar con nosotros',
    items: [
      {
        icon: 'layers',
        title: 'Pocos proyectos a la vez',
        description:
          'Limitamos cuántos proyectos llevamos en paralelo. Así cada cliente tiene atención real, no un turno en la cola.',
      },
      {
        icon: 'shield',
        title: 'El mismo equipo de punta a punta',
        description:
          'Quien entiende su operación en la primera conversación es quien diseña, construye y acompaña la puesta en marcha.',
      },
      {
        icon: 'sparkle',
        title: 'Criterio antes que catálogo',
        description:
          'No partimos de un producto que haya que venderle. Partimos de su problema, y a veces la recomendación es no construir.',
      },
      {
        icon: 'map-pin',
        title: 'Cerca de la operación',
        description:
          'Levantamos procesos en terreno, con las personas que usarán el sistema. Desde el Maule atendemos de O’Higgins a Araucanía.',
      },
    ],
  },
  experience: {
    label: 'Trayectoria',
    title: 'Experiencia construyendo productos de punta a punta',
    description:
      'Antes de Apps del Sur, nuestro equipo diseñó y desarrolló productos digitales para startups y empresas de Europa y Norteamérica: desde primeras versiones para validar una idea hasta proyectos de gran escala para marcas internacionales como Decathlon, en Francia. Esa experiencia es la que hoy ponemos al servicio de empresas chilenas.',
    highlights: [
      { value: 'Europa y Norteamérica', label: 'Startups y empresas con las que hemos trabajado' },
      { value: 'De la idea al producto', label: 'Descubrimiento, diseño, desarrollo y puesta en marcha' },
      { value: 'Chile', label: 'Universidades, agroindustria y empresas de servicios' },
    ],
  },
  projects: {
    label: 'Proyectos en Chile',
    title: 'Algunos proyectos que hemos desarrollado',
    description: 'Sistemas construidos alrededor del proceso real de cada cliente.',
    items: [
      {
        client: 'Universidad de Talca · Facultad de Psicología',
        title: 'Sistema de reserva de salas',
        description:
          'Plataforma web para reservar salas con flujo de aprobación, calendario de disponibilidad, perfiles para administración, docentes y estudiantes, notificaciones y reportes de uso.',
        tag: 'Educación superior',
      },
      {
        client: 'Universidad de Talca',
        title: 'Plataforma de gestión clínica y administrativa',
        description:
          'Sistema a medida para un centro de atención de la universidad: agenda, fichas, seguimiento de cada caso y reportería, con trazabilidad completa de cada acción.',
        tag: 'Salud',
        status: 'En curso',
      },
      {
        client: 'Frutícola Frule León · Curicó',
        title: 'Sistema de gestión de packing',
        description:
          'Sistema a medida para ordenar la operación del packing y tener la información del proceso al día, sin depender de planillas.',
        tag: 'Agroindustria',
      },
      {
        client: 'Oriencoop · Talca',
        title: 'Modelo de continuidad de negocio',
        description:
          'Diseño del modelo de continuidad de negocio para que la operación pueda sostenerse y recuperarse ante incidentes.',
        tag: 'Servicios financieros',
      },
    ],
  },
  products: {
    label: 'Productos propios',
    title: 'Lo que construimos por iniciativa propia',
    description:
      'Además de los proyectos a medida, desarrollamos productos propios. Nos mantienen al día con la tecnología y nos dejan piezas probadas que reutilizamos en cada proyecto. Hoy están en etapa demostrativa: se pueden ver funcionando en una demo.',
    items: [
      {
        name: 'Kimün',
        tagline: 'Cuaderno de campo digital para la mano de obra agrícola',
        description:
          'El capataz registra en terreno las labores de su cuadrilla, el avance y la productividad del día. La gestión ve los costos de mano de obra en un panel de administración, y Naku, un agente de IA por WhatsApp, responde a los trabajadores cuánto les toca en su próximo pago y al capataz sus consultas sobre la operación.',
        points: ['Pensado para viñas, útil en otros rubros agrícolas', 'Agente Naku por WhatsApp', 'Próxima versión: control de insumos'],
        href: '/cuaderno-de-campo/',
        cta: 'Conocer Kimün',
      },
      {
        name: 'INARÜ',
        tagline: 'Inspección visual de obras e infraestructura',
        description:
          'Plataforma para registrar y dar seguimiento a incidentes a partir de recorridos con imágenes 360° georreferenciadas. Sirve para obras civiles, infraestructura vial, espacio público y viviendas: todo lo que hoy se inspecciona a la vista.',
        points: ['Recorridos 360° sobre mapa', 'Incidentes con responsable, prioridad y evidencia de cierre', 'Demos aplicadas en distintos tipos de obra'],
        href: '#contact-form',
        cta: 'Pedir una demo',
      },
    ],
  },
} as const;
