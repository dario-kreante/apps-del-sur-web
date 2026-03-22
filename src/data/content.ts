export const siteConfig = {
  title: 'Apps del Sur — Software a Medida para Empresas del Sur de Chile | Maule',
  description:
    'Apps del Sur desarrolla software a medida para empresas del centro-sur de Chile. Gestión agrícola, servicios y consultoría IA con Claude. Desarrollo custom potenciado por IA a precio accesible. Financiamiento CORFO/FIA. Regiones de O\'Higgins, Maule, Ñuble, Biobío y Araucanía.',
  keywords:
    'software a medida Chile, software empresas sur Chile, desarrollo software IA, Claude AI Chile, software CORFO, digitalización empresas Chile, software agrícola Chile, gestión mano de obra, software viñas, consultoría IA Chile, Apps del Sur, Maule, O\'Higgins, Ñuble, Biobío, Araucanía',
  ogTitle: 'Apps del Sur — Software a Medida Potenciado por IA',
  ogDescription:
    'Desarrollamos software a medida para empresas del centro-sur de Chile. Claude AI nos permite entregar software custom a una fracción del costo tradicional, en semanas en vez de meses.',
  canonical: 'https://appsdelsur.cl',
} as const;

export const navItems = [
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Cómo trabajamos', href: '#proceso' },
  { label: 'Financiamiento', href: '#financiamiento' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contacto', href: '#contacto' },
] as const;

export const hero = {
  badge: 'Software a medida · Sur de Chile · Potenciado por IA',
  titleLine1: 'Software a medida para',
  titleHighlight: 'empresas del sur de Chile',
  description:
    'Desarrollamos sistemas de gestión adaptados 100% a su operación. Claude AI nos permite entregar software a medida en semanas, no meses, y a una fracción del costo tradicional. No es un sistema genérico: es su herramienta, adaptada a su operación.',
  ctaPrimary: 'Solicitar diagnóstico gratuito',
  ctaPrimaryHref: '#contacto',
  ctaSecondary: 'Ver soluciones',
  ctaSecondaryHref: '#soluciones',
  subtext:
    'Sin compromiso · Implementación en 8-12 semanas · Financiamiento CORFO/FIA disponible',
} as const;

export const metrics = [
  { value: '-70%', label: 'Tiempo administrativo' },
  { value: '100%', label: 'Adaptado a su operación' },
  { value: '3+', label: 'Sectores atendidos' },
  { value: '8-12', label: 'Semanas de implementación' },
] as const;

export const features = {
  label: 'Desarrollo a medida',
  title: 'Construimos la herramienta que su operación necesita',
  description:
    'Cada implementación se adapta a su realidad: sus procesos, equipos, áreas y estructura de costos. No configuramos un software genérico — construimos el suyo.',
  items: [
    {
      icon: 'bar-chart',
      title: 'Costos en tiempo real',
      description:
        'Conozca el costo exacto por área, proyecto y actividad cada día — no al final del mes. Decisiones con datos, no con supuestos.',
      highlight: true,
    },
    {
      icon: 'smartphone',
      title: 'App móvil de registro',
      description:
        'App móvil que reemplaza planillas en papel. Registro de jornadas, actividades y asistencia desde terreno, incluso sin señal.',
      highlight: true,
    },
    {
      icon: 'clock',
      title: '70% menos tiempo administrativo',
      description:
        'Automatiza la consolidación de datos que hoy toma días. Reportes listos al instante para gerencia y contabilidad.',
    },
    {
      icon: 'layers',
      title: 'Trazabilidad completa',
      description:
        'Registro digital 100% trazable por trabajador, área y actividad. Ideal para auditorías, certificaciones y cumplimiento normativo.',
    },
    {
      icon: 'shield',
      title: 'Cumplimiento normativo',
      description:
        'Genera automáticamente los registros que exige la normativa laboral chilena y los estándares de su industria.',
    },
    {
      icon: 'sparkle',
      title: 'IA para su equipo',
      description:
        'Cada implementación incluye un taller práctico de IA y 3 meses de Claude Pro para que su equipo aproveche la inteligencia artificial en su trabajo diario.',
      highlight: true,
    },
  ],
} as const;

export const solutions = {
  label: 'Soluciones',
  title: 'Software especializado para cada sector',
  description:
    'Cada negocio es distinto. Por eso no vendemos software genérico: construimos el suyo, adaptado a su operación y su industria.',
  items: [
    {
      icon: 'grape',
      name: 'Agro',
      description:
        'Gestión de mano de obra, cuadernos de campo, trazabilidad y costos en tiempo real para viñas, frutícolas y agrícolas.',
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
      name: 'Consultoría Claude AI',
      description:
        'Diagnóstico e implementación de inteligencia artificial en sus procesos de negocio con Claude AI.',
      href: '#',
    },
  ],
  whyLocalTitle: '¿Por qué elegir un software local?',
  checklist: [
    'Soporte técnico en español, en tu zona horaria',
    'Entendemos la normativa laboral chilena',
    'Configurado para las operaciones reales de tu industria',
    'Desarrollo asistido por IA para entregas más rápidas',
    'Capacitación presencial para equipos en terreno',
    'Financiamiento con fondos CORFO, FIA y SERCOTEC',
  ],
} as const;

export const process = {
  label: 'Cómo trabajamos',
  title: 'De planillas en papel a datos en tiempo real',
  steps: [
    {
      step: '01',
      title: 'Diagnóstico gratuito',
      description:
        'Analizamos su operación: áreas, equipos, procesos y cómo gestiona hoy los costos y la información. Sin compromiso.',
    },
    {
      step: '02',
      title: 'Desarrollo IA-asistido',
      description:
        'En 8-12 semanas construimos su sistema con Claude AI: plataforma web + app móvil, con sus procesos, estructura de costos y reglas de negocio.',
    },
    {
      step: '03',
      title: 'Capacitación + IA aplicada',
      description:
        'Capacitamos a su equipo en el uso del sistema y en herramientas de IA para su trabajo diario. Incluye taller práctico de inteligencia artificial + 3 meses de Claude Pro para cada participante.',
    },
    {
      step: '04',
      title: 'Crecimiento modular',
      description:
        'El sistema crece con usted: nuevos módulos, integraciones y funcionalidades se agregan cuando los necesite.',
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
  title: 'Digitalice su empresa hoy',
  description:
    'Solicite un diagnóstico gratuito y descubra cómo un sistema a medida puede transformar su operación.',
  ctaPrimary: 'Solicitar diagnóstico gratuito',
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
    'Cuéntenos sobre su empresa y le contactaremos en menos de 24 horas.',
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
  formAction: 'https://formsubmit.co/dramirezr.gysactiva@gmail.com',
  sideTitle: '¿Prefiere contacto directo?',
  sideItems: [
    {
      label: 'WhatsApp',
      value: '+56 9 4526 2335',
      href: 'https://wa.me/56945262335?text=Hola%2C%20me%20interesa%20conocer%20Apps%20del%20Sur',
    },
    {
      label: 'Email',
      value: 'dramirez.gysactiva@gmail.com',
      href: 'mailto:dramirez.gysactiva@gmail.com',
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
  title: 'Desarrollo asistido por Claude AI',
  description:
    'Somos la primera software house del sur de Chile que integra Claude AI en todo su ciclo de desarrollo. Esto nos permite:',
  bullets: [
    'Entregar software custom en semanas, no meses',
    'Ofrecer desarrollo a medida a precio accesible',
    'Integrar inteligencia artificial directamente en su software',
  ],
  cta: 'Conocer más sobre Claude AI',
  ctaHref: '#',
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
    'Desarrollamos software a medida para empresas del centro-sur de Chile. Agro, servicios y consultoría IA.',
  copyright:
    '© 2026 Apps del Sur — GYS Activa SpA. Todos los derechos reservados.',
  madeIn: 'Software hecho en Chile',
  contact: {
    name: 'Darío Ramírez',
    phone: '+56 9 4526 2335',
    phoneHref: 'tel:+56945262335',
    email: 'dramirez.gysactiva@gmail.com',
    whatsappUrl:
      'https://wa.me/56945262335?text=Hola%2C%20me%20interesa%20conocer%20Apps%20del%20Sur',
  },
  solutionLinks: [
    { label: 'Vitivinícola', href: '/sectores/viticola' },
    { label: 'Frutícola', href: '/sectores/fruticola' },
    { label: 'Agrícola', href: '/sectores/agricola' },
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
