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
  relatedBlogSlugs: [
    'cuanto-cuesta-web-profesional-empresa-chile',
    'cuanto-cuesta-implementar-ia-pyme-chile',
    'fondos-financiamiento-ia-empresas-chile-2026',
    'software-agricola-chile-comparativa-2026',
  ],
  faq: [
    {
      q: '¿Qué fondo público me conviene si mi empresa está en Ñuble?',
      a: 'SERCOTEC CRECE Ñuble es la puerta de entrada: hasta $5M con 98% de cofinanciamiento para microempresas con ventas bajo 25.000 UF. Kit Digital, hasta $1,2M al 90%, sirve si el primer paso es más chico — facturación electrónica, por ejemplo. Y si su proyecto tiene componente innovador, CORFO Semilla llega a $25M con 75%. Ñuble es región autónoma desde 2018 y el volumen de fondos dirigidos a ella creció fuerte en ese período: hay más instrumentos disponibles que hace cinco años.',
    },
    {
      q: '¿Es cierto que en Ñuble hay menos competencia por los fondos?',
      a: 'Hay menos empresas postulando que en el Biobío o el Maule, simplemente porque el parque de pymes es más chico — cerca de 18.000 activas. Eso no significa que adjudicar sea fácil: la evaluación es igual de exigente y el proyecto tiene que estar bien formulado. Lo que sí ayuda es que alrededor del 42% de las empresas de la región todavía no tiene ningún sistema digital de gestión, así que el argumento de brecha digital es concreto y verificable.',
    },
    {
      q: 'Tengo una viña patrimonial en el secano. ¿Esto me sirve?',
      a: 'Ñuble concentra viñedos patrimoniales de País, Cinsault y Moscatel en el secano interior, entre Cauquenes e Itata, con manejo tradicional y sin sistemas de gestión. Justamente ahí el registro digital de terreno rinde más: saber cuánto costó la poda de cada cuartel, sin esperar a fin de mes. Y la trazabilidad abre la puerta a certificaciones que hoy quedan fuera de alcance.',
    },
    {
      q: '¿Atienden presencialmente en Chillán?',
      a: 'Sí, viajamos desde el Maule, donde está nuestro equipo. La reunión de diagnóstico y la capacitación se hacen en su empresa. El soporte posterior es remoto, en español y en horario de Chile.',
    },
    {
      q: '¿Cuánto cuesta esto si no consigo fondo?',
      a: 'Los agentes IA por WhatsApp parten en $80K mensuales y llegan a $250K según el agente, sin instalación ni desarrollo previo — es la opción de menor fricción cuando no hay fondo a la vista. Un sistema a medida es otra escala: se cotiza contra el alcance real después del diagnóstico, que no tiene costo.',
    },
  ],
};
