import type { RegionData } from './types';

export const araucania: RegionData = {
  slug: 'araucania',
  name: 'La Araucanía',
  nameWithArticle: 'de La Araucanía',
  meta: {
    title: 'Software a medida para pymes de La Araucanía · Apps del Sur',
    description:
      'Software personalizado para empresas de La Araucanía. Turismo, agrícola, hotelería, comercio. Financiamiento público disponible.',
    keywords:
      'software a medida Araucanía, sistema de gestión Temuco, digitalización pymes Araucanía, software empresas Temuco, software turismo Araucanía, software CORFO Araucanía',
    ogTitle: 'Software a medida para empresas de La Araucanía — Apps del Sur',
    ogDescription:
      'Software personalizado para empresas de La Araucanía. Turismo, hotelería, gastronomía, agrícola, comercio. Financiamiento público disponible.',
  },
  hero: {
    title: 'Software a medida para empresas de La Araucanía',
    subtitle:
      'Sistemas de gestión adaptados a su operación. Turismo, hotelería, gastronomía, agrícola, comercio y servicios. El motor turístico del sur necesita tecnología a su medida.',
  },
  rubroSlugs: [
    'turismo',
    'hoteleria',
    'gastronomia',
    'agricola-viticola',
    'comercio',
    'servicios',
  ],
  painPoints: [
    {
      title: 'Temporada alta sin sistema de gestión',
      description:
        'En temporada alta el negocio se multiplica, pero la gestión sigue siendo manual. Reservas por teléfono, disponibilidad en un cuaderno, costos que nadie controla hasta que termina el verano.',
    },
    {
      title: 'Cada negocio es distinto, los sistemas no',
      description:
        'Un lodge en Pucón no funciona igual que un restaurante en Temuco o un campo en Villarrica. Los sistemas genéricos no entienden esas diferencias.',
    },
    {
      title: 'Información fragmentada entre canales',
      description:
        'Reservas en Booking, consultas por Instagram, pagos por transferencia, inventario en Excel. Sin un sistema central, la operación se gestiona a pulso.',
    },
    {
      title: 'Zonas rurales sin conectividad estable',
      description:
        'Muchos negocios de La Araucanía operan en zonas con conectividad intermitente. Necesitan un sistema que funcione offline y sincronice cuando haya señal.',
    },
  ],
  process: {
    step1Detail:
      'Analizamos su operación actual y le mostramos exactamente qué sistema necesita — sin compromiso, sin costo.',
    step3Detail:
      'Atención presencial en La Araucanía desde nuestro equipo basado en el Maule. Capacitación en su negocio. Soporte en español.',
  },
  stats: [
    { value: '35.000+', label: 'Pymes activas en la región', source: 'SII 2024' },
    { value: '4.5M', label: 'Turistas anuales en la región', source: 'SERNATUR 2024' },
    { value: '1ª', label: 'Región en turismo de naturaleza de Chile' },
    { value: '28%', label: 'De la economía regional ligada a turismo y hotelería', source: 'INE' },
  ],
  funding: [
    {
      name: 'SERCOTEC CRECE Araucanía',
      amount: 'Hasta $5M CLP',
      cofinancing: '98%',
      rubrosElegibles: ['Todos los rubros — microempresas con ventas < 25.000 UF'],
      status: 'abierto',
    },
    {
      name: 'CORFO Digitalización',
      amount: 'Hasta $15M CLP',
      cofinancing: '60%',
      rubrosElegibles: ['Pymes de todos los sectores'],
      status: 'por abrir',
    },
    {
      name: 'Kit Digital',
      amount: 'Hasta $1.2M CLP',
      cofinancing: '90%',
      rubrosElegibles: ['Microempresas — herramientas digitales básicas'],
      status: 'abierto',
    },
  ],
};
