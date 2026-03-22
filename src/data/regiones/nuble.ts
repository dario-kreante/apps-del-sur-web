import type { RegionData } from './types';

export const nuble: RegionData = {
  slug: 'nuble',
  name: 'Ñuble',
  nameWithArticle: 'de Ñuble',
  meta: {
    title: 'Software a medida para pymes de Ñuble · Apps del Sur',
    description:
      'Software personalizado para pymes de Ñuble. Agrícola, servicios, comercio, salud. Fondos SERCOTEC y CORFO disponibles.',
    keywords:
      'software a medida Ñuble, sistema de gestión Chillán, digitalización pymes Ñuble, software empresas Ñuble, software CORFO Ñuble, software SERCOTEC Ñuble',
    ogTitle: 'Software a medida para empresas de Ñuble — Apps del Sur',
    ogDescription:
      'Software personalizado para pymes de Ñuble. Agrícola, comercio, salud, servicios, turismo. Fondos SERCOTEC y CORFO disponibles.',
  },
  hero: {
    title: 'Software a medida para empresas de Ñuble',
    subtitle:
      'Sistemas de gestión personalizados para su empresa. Agrícola, comercio, salud, servicios, turismo y educación. Región nueva, oportunidades enormes.',
  },
  rubroSlugs: [
    'agricola-viticola',
    'comercio',
    'salud',
    'servicios',
    'turismo',
    'educacion',
  ],
  painPoints: [
    {
      title: 'Región nueva, mismos problemas de gestión',
      description:
        'Ñuble es región desde 2018, pero las empresas siguen gestionando con papel, Excel y WhatsApp. La oportunidad de digitalizar desde cero es única — y los fondos públicos están disponibles.',
    },
    {
      title: 'Sistemas que no se adaptan a la escala local',
      description:
        'Los software genéricos están pensados para empresas grandes de Santiago. Las pymes de Ñuble necesitan soluciones que se adapten a su realidad y escala.',
    },
    {
      title: 'Sin visibilidad de sus números reales',
      description:
        'El costo de cada servicio, cada venta, cada atención se conoce tarde. Sin datos en tiempo real, las decisiones se basan en intuición, no en información.',
    },
    {
      title: 'Fondos disponibles que no se aprovechan',
      description:
        'SERCOTEC, CORFO y otros instrumentos financian hasta el 98% de proyectos de digitalización. Muchas pymes no postulan porque no saben cómo armar el proyecto.',
    },
  ],
  process: {
    step1Detail:
      'Analizamos su operación actual y le mostramos exactamente qué sistema necesita — sin compromiso, sin costo.',
    step3Detail:
      'Atención presencial en Ñuble desde nuestro equipo basado en el Maule. Capacitación en su negocio. Soporte en español.',
  },
  stats: [
    { value: '18.000+', label: 'Pymes activas en la región', source: 'SII 2024' },
    { value: '2018', label: 'Año de creación como región autónoma' },
    { value: '42%', label: 'De empresas sin sistema digital de gestión', source: 'SERCOTEC' },
    { value: '3x', label: 'Crecimiento de fondos públicos para la región (2020-2025)' },
  ],
  funding: [
    {
      name: 'SERCOTEC CRECE Ñuble',
      amount: 'Hasta $5M CLP',
      cofinancing: '98%',
      rubrosElegibles: ['Todos los rubros — microempresas con ventas < 25.000 UF'],
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
      name: 'CORFO Semilla',
      amount: 'Hasta $25M CLP',
      cofinancing: '75%',
      rubrosElegibles: ['Emprendimientos innovadores de todos los sectores'],
      status: 'por abrir',
    },
  ],
};
