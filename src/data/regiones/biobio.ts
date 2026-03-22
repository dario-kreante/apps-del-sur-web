import type { RegionData } from './types';

export const biobio: RegionData = {
  slug: 'biobio',
  name: 'Biobío',
  nameWithArticle: 'del Biobío',
  meta: {
    title: 'Software a medida para pymes del Biobío · Apps del Sur',
    description:
      'Sistemas de gestión a medida para empresas del Biobío. Agroindustria, logística, turismo, salud, comercio.',
    keywords:
      'software a medida Biobío, sistema de gestión Concepción, digitalización pymes Biobío, software empresas Concepción, software CORFO Biobío',
    ogTitle: 'Software a medida para empresas del Biobío — Apps del Sur',
    ogDescription:
      'Sistemas de gestión a medida para empresas del Biobío. Logística, agroindustria, salud, hotelería, comercio y servicios.',
  },
  hero: {
    title: 'Software a medida para empresas del Biobío',
    subtitle:
      'Sistemas de gestión adaptados a su operación. Logística, agroindustria, salud, hotelería, comercio y más. El segundo polo económico de Chile merece software a su medida.',
  },
  rubroSlugs: [
    'logistica',
    'agricola-viticola',
    'salud',
    'hoteleria',
    'comercio',
    'servicios',
    'construccion',
  ],
  painPoints: [
    {
      title: 'Operaciones complejas sin sistema integrado',
      description:
        'El Biobío tiene empresas de logística, agroindustria y servicios con operaciones distribuidas. Sin un sistema central, la coordinación entre áreas depende de llamadas y mensajes.',
    },
    {
      title: 'Software de Santiago que no calza con el sur',
      description:
        'Los proveedores de Santiago ofrecen soluciones pensadas para otra realidad. Su empresa necesita un sistema que entienda las particularidades de operar en el Biobío.',
    },
    {
      title: 'Costos que se conocen demasiado tarde',
      description:
        'Sin datos en tiempo real, el costo de cada servicio, ruta o proceso se descubre semanas después. Las decisiones se toman sin información actualizada.',
    },
    {
      title: 'Crecimiento frenado por gestión manual',
      description:
        'La operación creció, pero la gestión sigue con las mismas planillas de cuando era una empresa chica. El sistema administrativo no escala al ritmo del negocio.',
    },
  ],
  process: {
    step1Detail:
      'Analizamos su operación actual y le mostramos exactamente qué sistema necesita — sin compromiso, sin costo.',
    step3Detail:
      'Atención presencial en el Biobío desde nuestro equipo basado en el Maule. Capacitación en su negocio. Soporte en español.',
  },
  stats: [
    { value: '72.000+', label: 'Pymes activas en la región', source: 'SII 2024' },
    { value: '2º', label: 'Polo económico de Chile después de Santiago' },
    { value: '6', label: 'Sectores productivos principales' },
    { value: '$2.8B USD', label: 'PIB regional (2024)', source: 'Banco Central' },
  ],
  funding: [
    {
      name: 'SERCOTEC CRECE Biobío',
      amount: 'Hasta $5M CLP',
      cofinancing: '98%',
      rubrosElegibles: ['Todos los rubros — microempresas con ventas < 25.000 UF'],
      status: 'abierto',
    },
    {
      name: 'CORFO Prototipos',
      amount: 'Hasta $25M CLP',
      cofinancing: '70%',
      rubrosElegibles: ['Pymes innovadoras de todos los sectores'],
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
