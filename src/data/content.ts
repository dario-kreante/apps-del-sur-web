export const siteConfig = {
  title: 'Apps del Sur — Software a Medida para Empresas del Sur de Chile | Maule',
  description:
    'Apps del Sur desarrolla software a medida para empresas del centro-sur de Chile. Gestión agrícola, servicios y consultoría IA con Claude. Desarrollo custom potenciado por IA a precio accesible. Financiamiento CORFO/FIA. Regiones de O\'Higgins, Maule, Ñuble, Biobío y Araucanía.',
  keywords:
    'software a medida Chile, software empresas sur Chile, desarrollo software IA, Claude AI Chile, software CORFO, digitalización empresas Chile, software agrícola Chile, gestión mano de obra, software viñas, consultoría IA Chile, Apps del Sur, Maule, O\'Higgins, Ñuble, Biobío, Araucanía',
  ogTitle: 'Apps del Sur — Software a Medida Potenciado por IA',
  ogDescription:
    'Desarrollamos software a medida para empresas del centro-sur de Chile. Claude AI nos permite entregar software custom a precio de SaaS, en semanas en vez de meses.',
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
    'Desarrollamos sistemas de gestión adaptados 100% a su operación. Claude AI nos permite entregar software custom a precio de SaaS, en semanas en vez de meses. No es un SaaS genérico: es su herramienta.',
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
      icon: 'trending-up',
      title: 'Análisis predictivo',
      description:
        'Identifique patrones de rendimiento y anticipe necesidades de personal para cada temporada con datos históricos.',
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
      href: '#',
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
      title: 'Capacitación en terreno',
      description:
        'Capacitamos a su equipo en el uso del sistema. Acompañamiento presencial hasta que operen con autonomía.',
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
      q: '¿Qué hace diferente a Apps del Sur de un SaaS genérico?',
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
      a: 'El proyecto de implementación toma entre 8 y 12 semanas, incluyendo el desarrollo a medida de la plataforma web y app móvil, configuración de procesos y estructura de costos, y capacitación del equipo. No es un SaaS genérico que se configura en un día — es un sistema construido para su operación específica.',
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
    'Ofrecer desarrollo a medida al precio de un SaaS',
    'Integrar inteligencia artificial directamente en su software',
  ],
  cta: 'Conocer más sobre Claude AI',
  ctaHref: '#',
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
    { label: 'Agro', href: '#soluciones' },
    { label: 'Servicios', href: '#soluciones' },
    { label: 'Consultoría Claude AI', href: '#soluciones' },
    { label: 'Financiamiento CORFO/FIA', href: '#financiamiento' },
    { label: 'Preguntas frecuentes', href: '#preguntas' },
  ],
  regions: ["O'Higgins", 'Maule', 'Ñuble', 'Biobío', 'Araucanía'],
} as const;
