export const siteConfig = {
  title: 'Apps del Sur — Software de Gestión de Mano de Obra Agrícola | Maule, Chile',
  description:
    'Apps del Sur desarrolla software a medida para gestión de mano de obra agrícola en viñas del centro-sur de Chile. Costos en tiempo real por hectárea, cuartel y labor. Financiamiento CORFO/FIA hasta 80%. Regiones del Maule, O\'Higgins, Ñuble, Biobío y Araucanía.',
  keywords:
    'software agrícola Chile, gestión mano de obra agrícola, software viñas, cuaderno de campo digital, trazabilidad agrícola, Apps del Sur, Maule, O\'Higgins, Ñuble, Biobío, Araucanía, CORFO agrícola, FIA innovación agrícola, digitalización agrícola fondos públicos',
  ogTitle: 'Apps del Sur — Gestión de Mano de Obra Agrícola en Tiempo Real',
  ogDescription:
    'Sepa exactamente cuánto cuesta cada hectárea, cada cuartel y cada labor — todos los días. Software agrícola para el centro-sur de Chile.',
  canonical: 'https://appsdelsur.cl',
} as const;

export const navItems = [
  { label: 'Solución', href: '#solucion' },
  { label: 'Sectores', href: '#sectores' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Financiamiento', href: '#financiamiento' },
  { label: 'Preguntas', href: '#preguntas' },
  { label: 'Contacto', href: '#contacto' },
] as const;

export const hero = {
  badge: 'Software agrícola · Maule a Araucanía',
  titleLine1: 'Software a medida para',
  titleHighlight: 'gestión agrícola',
  description:
    'Desarrollamos su sistema de gestión de mano de obra adaptado 100% a su operación — sus cuarteles, sus variedades, sus labores, su estructura de costos. No es un SaaS genérico: es su herramienta.',
  ctaPrimary: 'Solicitar diagnóstico gratuito',
  ctaPrimaryHref: '#contacto',
  ctaSecondary: 'Ver demo interactiva',
  ctaSecondaryHref: 'https://presentacion-delta-gray.vercel.app',
  subtext:
    'Sin compromiso · Implementación en 8-12 semanas · Financiamiento CORFO/FIA disponible',
} as const;

export const metrics = [
  { value: '-70%', label: 'Tiempo administrativo' },
  { value: '100%', label: 'Trazabilidad digital' },
  { value: '$/ha', label: 'Costos por hectárea en tiempo real' },
  { value: '8-12', label: 'Semanas de implementación' },
] as const;

export const features = {
  label: 'Desarrollo a medida',
  title: 'Construimos la herramienta que su operación necesita',
  description:
    'Cada implementación se adapta a su realidad: sus cuarteles, variedades, labores y forma de calcular costos. No configuramos un software genérico — construimos el suyo.',
  items: [
    {
      icon: 'bar-chart',
      title: 'Costos en tiempo real',
      description:
        'Conozca el costo exacto por hectárea, cuartel y labor cada día — no al final del mes. Decisiones con datos, no con supuestos.',
      highlight: true,
    },
    {
      icon: 'smartphone',
      title: 'Cuaderno de campo digital',
      description:
        'App móvil que reemplaza planillas en papel. Registro de jornadas, labores y asistencia desde el campo, incluso sin señal.',
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
        'Registro digital 100% trazable por trabajador, cuartel y labor. Ideal para auditorías, certificaciones y cumplimiento normativo.',
    },
    {
      icon: 'shield',
      title: 'Cumplimiento normativo',
      description:
        'Genera automáticamente los registros que exige la normativa laboral chilena y los estándares de sustentabilidad del sector.',
    },
    {
      icon: 'trending-up',
      title: 'Análisis predictivo',
      description:
        'Identifique patrones de rendimiento y anticipe necesidades de mano de obra para cada temporada con datos históricos.',
    },
  ],
} as const;

export const sectors = {
  label: 'Sectores que atendemos',
  title: 'Software especializado para el agro chileno',
  description:
    'Trabajamos con viñas, frutícolas y empresas agrícolas desde O\'Higgins hasta La Araucanía — Maule, Ñuble, Biobío y Araucanía.',
  items: [
    {
      icon: 'grape',
      name: 'Vitivinícola',
      description: 'Viñas y bodegas del centro-sur de Chile',
    },
    {
      icon: 'apple',
      name: 'Frutícola',
      description: 'Packings, huertos y exportadoras',
    },
    {
      icon: 'wheat',
      name: 'Agrícola general',
      description: 'Cultivos, hortalizas y cereales',
    },
  ],
  whyLocalTitle: '¿Por qué elegir un software de gestión agrícola local?',
  checklist: [
    'Soporte técnico en español, en tu zona horaria',
    'Entendemos la normativa laboral chilena',
    'Configurado para labores vitivinícolas y frutícolas reales',
    'Integración con procesos de certificación sustentable',
    'Capacitación presencial para equipos de campo',
    'Financiamiento con fondos CORFO y FIA',
  ],
} as const;

export const process = {
  label: 'Cómo funciona',
  title: 'De planillas en papel a datos en tiempo real',
  steps: [
    {
      step: '01',
      title: 'Diagnóstico gratuito',
      description:
        'Analizamos su operación: hectáreas, cuarteles, trabajadores, labores y cómo gestiona hoy los costos. Sin compromiso.',
    },
    {
      step: '02',
      title: 'Desarrollo a medida',
      description:
        'En 8-12 semanas construimos su sistema: plataforma web + app móvil, con sus cuarteles, variedades, labores y estructura de costos reales.',
    },
    {
      step: '03',
      title: 'Capacitación en terreno',
      description:
        'Capacitamos a su equipo de campo en el uso de la app. Acompañamiento presencial hasta que operen con autonomía.',
    },
    {
      step: '04',
      title: 'Crecimiento modular',
      description:
        'El sistema crece con usted: cosecha, insumos, mapas, integración contable. Cada módulo se agrega cuando lo necesite.',
    },
  ],
} as const;

export const financing = {
  badge: 'Fondos públicos disponibles 2026',
  title: 'Financie hasta el',
  titleHighlight: '80%',
  titleEnd: 'de su proyecto con fondos públicos',
  description:
    'Existen instrumentos CORFO, FIA y SERCOTEC que cofinancian la digitalización agrícola. Nosotros le asesoramos en la postulación sin costo adicional.',
  cards: [
    {
      profile: 'Microempresa (20-50 ha)',
      instrument: 'SERCOTEC CRECE',
      projectCost: '$5M',
      funded: '80%',
      clientPays: '< $1M',
      highlight: true,
    },
    {
      profile: 'Pyme (50-100 ha)',
      instrument: 'CORFO Prototipos',
      projectCost: '$15-20M',
      funded: '70%',
      clientPays: '$4.5-6M',
      highlight: false,
    },
    {
      profile: 'Pyme mediana (100-300 ha)',
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
      a: 'No ofrecemos un software genérico donde usted se adapta al sistema. Desarrollamos una plataforma a medida que se configura con sus cuarteles, variedades, labores y estructura de costos reales. Gracias al desarrollo asistido por IA, podemos ofrecer esta personalización a precios accesibles — como si fuera software hecho a medida, pero sin el costo tradicional de un proyecto custom.',
    },
    {
      q: '¿Funciona sin conexión a internet en el campo?',
      a: 'Sí. La aplicación móvil de Apps del Sur está diseñada para funcionar offline. Los datos se sincronizan automáticamente cuando el dispositivo recupera la conexión, ideal para zonas rurales del Maule, O\'Higgins, Ñuble, Biobío y Araucanía.',
    },
    {
      q: '¿Cuánto tiempo toma implementar el sistema en mi operación?',
      a: 'El proyecto de implementación toma entre 8 y 12 semanas, incluyendo el desarrollo a medida de la plataforma web y app móvil, configuración de cuarteles, labores, estructura de costos, y capacitación del equipo. No es un SaaS genérico que se configura en un día — es un sistema construido para su operación específica.',
    },
    {
      q: '¿Es compatible con los requisitos de certificación sustentable?',
      a: 'Sí. Apps del Sur genera registros digitales trazables que cumplen con los estándares de Sustentavid, GlobalG.A.P. y otras certificaciones de sustentabilidad requeridas por mercados de exportación.',
    },
    {
      q: '¿Cuánto cuesta y qué modalidades ofrecen?',
      a: 'Ofrecemos dos modalidades: compra de licencia con implementación completa ($8-12M CLP, queda como propiedad del cliente) o suscripción mensual ($2.5M setup + $450K CLP/mes con actualizaciones incluidas). Ambas incluyen plataforma web, app móvil y capacitación. El sistema se paga solo en menos de 2 meses con el ahorro operativo que genera.',
    },
    {
      q: '¿Existen fondos públicos para financiar la implementación?',
      a: 'Sí. Instrumentos como CORFO Crea y Valida, FIA Innovación Agrícola y SERCOTEC CRECE pueden financiar entre el 50% y el 80% del proyecto. En algunos casos, el cliente piloto puede acceder al sistema a costo $0 mientras se valida con fondos públicos. Asesoramos en la postulación.',
    },
  ],
} as const;

export const contactCTA = {
  title: 'Digitalice su operación agrícola hoy',
  description:
    'Solicite un diagnóstico gratuito y descubra cuánto puede ahorrar con gestión de mano de obra en tiempo real.',
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
    'Cuéntenos sobre su operación y le contactaremos en menos de 24 horas.',
  fields: {
    name: 'Nombre completo',
    email: 'Correo electrónico',
    phone: 'Teléfono',
    hectares: 'Hectáreas aproximadas',
    message: 'Mensaje (opcional)',
  },
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

export const footer = {
  companyName: 'Apps del Sur',
  companyLegal: 'GYS Activa SpA',
  tagline:
    'Desarrollamos software a medida para gestión de mano de obra agrícola. Viñas, frutícolas y agrícolas del centro-sur de Chile.',
  copyright:
    '© 2026 Apps del Sur — GYS Activa SpA. Todos los derechos reservados.',
  madeIn: 'Software agrícola hecho en Chile',
  contact: {
    name: 'Darío Ramírez',
    phone: '+56 9 4526 2335',
    phoneHref: 'tel:+56945262335',
    email: 'dramirez.gysactiva@gmail.com',
    whatsappUrl:
      'https://wa.me/56945262335?text=Hola%2C%20me%20interesa%20conocer%20Apps%20del%20Sur',
  },
  solutionLinks: [
    { label: 'Plataforma web', href: '#solucion' },
    { label: 'App de campo móvil', href: '#solucion' },
    { label: 'Resultados medibles', href: '#resultados' },
    { label: 'Financiamiento CORFO/FIA', href: '#financiamiento' },
    { label: 'Preguntas frecuentes', href: '#preguntas' },
  ],
  regions: ["O'Higgins", 'Maule', 'Ñuble', 'Biobío', 'Araucanía'],
} as const;
