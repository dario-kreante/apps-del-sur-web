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
};
