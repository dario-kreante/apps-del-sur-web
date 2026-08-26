import type { RegionData } from './types';

export const maule: RegionData = {
  slug: 'maule',
  name: 'Maule',
  nameWithArticle: 'del Maule',
  meta: {
    title: 'Software a medida para pymes del Maule · Apps del Sur',
    description:
      'Desarrollamos sistemas de gestión adaptados a su empresa. Viñas, hotelería, salud, logística y más. Equipo local en el Maule. Financiamiento CORFO y SERCOTEC disponible.',
    keywords:
      'software a medida Maule, sistema de gestión Maule, digitalización pymes Maule, software empresas Maule, desarrollo software Talca, software CORFO Maule',
    ogTitle: 'Software a medida para empresas del Maule — Apps del Sur',
    ogDescription:
      'Sistemas de gestión personalizados para empresas del Maule. Viñas, hotelería, salud, logística y más. Equipo local. Financiamiento CORFO disponible.',
  },
  hero: {
    title: 'Software a medida para empresas del Maule',
    subtitle:
      'Desarrollamos sistemas de gestión adaptados 100% a su operación. Vitivinícola, hotelería, salud, estética, logística y más. Equipo basado en la región.',
  },
  rubroSlugs: [
    'agricola-viticola',
    'fruticola',
    'hoteleria',
    'servicios',
    'salud',
    'estetica',
    'logistica',
    'comercio',
  ],
  painPoints: [
    {
      title: 'Operación invisible hasta fin de mes',
      description:
        'Su negocio depende de planillas Excel, cuadernos y WhatsApp. La información se pierde, se duplica, y usted no tiene visibilidad de lo que pasa hasta que llegan los números a fin de mes.',
    },
    {
      title: 'Sistemas genéricos que no calzan',
      description:
        'Cada empresa es distinta, pero los sistemas genéricos lo obligan a adaptarse a ellos. Usted necesita un sistema que se adapte a su empresa, no al revés.',
    },
    {
      title: 'Digitalización cara y lenta — hasta ahora',
      description:
        'Los desarrollos a medida tradicionales cuestan $20-50 millones y tardan 6 meses. Con inteligencia artificial, eso cambió: entregamos en semanas a una fracción del costo.',
    },
    {
      title: 'Decisiones con datos atrasados',
      description:
        'No sabe cuánto le cuesta cada servicio, cada turno, cada operación. Toma decisiones con información de hace semanas, no de hoy.',
    },
  ],
  process: {
    step1Detail:
      'Analizamos su operación actual y le mostramos exactamente qué sistema necesita — sin compromiso, sin costo.',
    step3Detail:
      'Equipo basado en la Región del Maule. Capacitación presencial en su negocio. Soporte en español, horario Chile.',
  },
  stats: [
    { value: '52.000+', label: 'Pymes activas en la región', source: 'SII 2024' },
    { value: '5', label: 'Sectores económicos principales' },
    { value: '32%', label: 'Crecimiento del turismo regional (2023-2025)', source: 'SERNATUR' },
    { value: '1ª', label: 'Región vitivinícola de Chile' },
  ],
  funding: [
    {
      name: 'SERCOTEC CRECE Maule',
      amount: 'Hasta $5M CLP',
      cofinancing: '98%',
      rubrosElegibles: ['Todos los rubros — microempresas con ventas < 25.000 UF'],
      status: 'abierto',
    },
    {
      name: 'CORFO Desarrolla Inversión Maule',
      amount: '$10-50M CLP',
      cofinancing: '50%',
      rubrosElegibles: ['Pymes de todos los sectores con proyecto de inversión'],
      status: 'abierto',
    },
    {
      name: 'Kit Digital',
      amount: 'Hasta $1.2M CLP',
      cofinancing: '90%',
      rubrosElegibles: ['Microempresas — herramientas digitales básicas'],
      status: 'abierto',
    },
    {
      name: 'FIA Innovación',
      amount: 'Hasta $80M CLP',
      cofinancing: '80%',
      rubrosElegibles: ['Solo sector agrícola y agroindustrial'],
      status: 'por abrir',
    },
  ],
  faq: [
    {
      q: '¿Qué fondo público me conviene si mi empresa está en el Maule?',
      a: 'Depende del tamaño. Si es microempresa con ventas bajo 25.000 UF, SERCOTEC CRECE Maule cubre hasta $5M con 98% de cofinanciamiento — es el camino más corto y el copago queda entre $700K y $1M. Si ya es pyme establecida y el proyecto es de inversión, CORFO Desarrolla Inversión Maule va de $10M a $50M con 50%. Si recién parte en digital, Kit Digital cubre hasta $1,2M al 90% y sirve como primer paso. Y si su empresa es agrícola o agroindustrial, FIA Innovación llega a $80M con 80%, pero abre por ventanilla y hay que preparar la postulación con meses de anticipación.',
    },
    {
      q: '¿Atienden presencialmente en Talca, Curicó y Linares?',
      a: 'Sí. Nuestro equipo está basado en la Región del Maule, así que la reunión de diagnóstico y la capacitación se hacen en su empresa, no por videollamada. Es la única región donde estamos físicamente: en O’Higgins, Ñuble, Biobío y La Araucanía viajamos desde acá.',
    },
    {
      q: 'Tengo una viña. ¿El sistema sirve para el trabajo de terreno o es solo de oficina?',
      a: 'El Maule concentra más del 40% de la superficie vitivinícola nacional y la mayoría de las viñas sobre 50 hectáreas todavía registra la jornada en papel. Lo que construimos es una herramienta de terreno: el jefe de campo registra desde el celular quién trabajó, en qué cuartel y qué labor, incluso sin señal. No reemplaza su contabilidad — se conecta con ella y le manda los datos listos.',
    },
    {
      q: '¿Cuánto demora un proyecto financiado con SERCOTEC CRECE Maule?',
      a: 'La postulación en sí toma entre tres y cuatro semanas de preparación: diagnóstico, cotización, formulario y video pitch. Después vienen la evaluación regional y la adjudicación, que dependen del calendario de la convocatoria. Una vez adjudicado, la implementación es de semanas, no de meses. Conviene tener el diagnóstico listo antes de que abra la convocatoria, porque los plazos de postulación son cortos.',
    },
    {
      q: 'No soy agrícola. ¿Igual hay fondos para mí en el Maule?',
      a: 'Sí. FIA es el único instrumento de esta lista restringido al agro. SERCOTEC CRECE Maule, Kit Digital y CORFO Desarrolla Inversión son transversales: aplican a hotelería, salud, estética, logística, comercio y servicios por igual. De hecho, en el Maule hemos trabajado el modelo completo con una funeraria de Talca, que no tiene nada de agrícola.',
    },
  ],
};
