import type { RegionData } from './types';

export const ohiggins: RegionData = {
  slug: 'ohiggins',
  name: "O'Higgins",
  nameWithArticle: "de O'Higgins",
  meta: {
    title: "Software a medida para pymes de O'Higgins · Apps del Sur",
    description:
      "Sistemas de gestión personalizados para empresas de O'Higgins. Agrícola, turismo, salud, comercio. Financiamiento CORFO disponible.",
    keywords:
      "software a medida O'Higgins, sistema de gestión Rancagua, digitalización pymes O'Higgins, software empresas Rancagua, software CORFO O'Higgins",
    ogTitle: "Software a medida para empresas de O'Higgins — Apps del Sur",
    ogDescription:
      "Sistemas de gestión personalizados para empresas de O'Higgins. Frutícola, turismo, salud, comercio. Financiamiento CORFO disponible.",
  },
  hero: {
    title: "Software a medida para empresas de O'Higgins",
    subtitle:
      "Sistemas de gestión adaptados a su operación. Frutícola, vitivinícola, turismo, salud, comercio y servicios. Atención presencial desde el Maule.",
  },
  rubroSlugs: [
    'fruticola',
    'agricola-viticola',
    'turismo',
    'salud',
    'comercio',
    'servicios',
  ],
  painPoints: [
    {
      title: 'Información dispersa entre cuadernos y Excel',
      description:
        'Cada área de su empresa maneja sus datos por separado: el jefe de campo en un cuaderno, administración en Excel, ventas en WhatsApp. Nadie tiene la foto completa.',
    },
    {
      title: 'Software genérico que no entiende su negocio',
      description:
        'Los sistemas de estantería ofrecen funciones que no necesita y les faltan las que sí. Termina adaptando su empresa al software, cuando debería ser al revés.',
    },
    {
      title: 'Costos ocultos en cada operación',
      description:
        'Sin un sistema integrado, el costo real de cada servicio, cosecha o atención se conoce semanas después. Las decisiones se toman con datos incompletos.',
    },
    {
      title: 'Digitalización que parecía inalcanzable',
      description:
        'Un desarrollo a medida tradicional cuesta más que la utilidad de un año. Con inteligencia artificial, los costos y plazos bajaron radicalmente.',
    },
  ],
  process: {
    step1Detail:
      'Analizamos su operación actual y le mostramos exactamente qué sistema necesita — sin compromiso, sin costo.',
    step3Detail:
      "Atención presencial en O'Higgins desde nuestro equipo basado en el Maule. Capacitación en su negocio. Soporte en español.",
  },
  stats: [
    { value: '38.000+', label: 'Pymes activas en la región', source: 'SII 2024' },
    { value: '2ª', label: 'Región frutícola de Chile' },
    { value: '45%', label: 'De la economía regional es agropecuaria', source: 'INE' },
    { value: '15%', label: 'Crecimiento del turismo enológico (2024)', source: 'SERNATUR' },
  ],
  funding: [
    {
      name: "SERCOTEC CRECE O'Higgins",
      amount: 'Hasta $5M CLP',
      cofinancing: '98%',
      rubrosElegibles: ['Todos los rubros — microempresas con ventas < 25.000 UF'],
      status: 'abierto',
    },
    {
      name: 'CORFO Digitalización Agro',
      amount: '$15-20M CLP',
      cofinancing: '50-60%',
      rubrosElegibles: ['Empresas agrícolas y agroindustriales'],
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
