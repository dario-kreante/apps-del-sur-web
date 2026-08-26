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
  relatedBlogSlugs: [
    'cuanto-cuesta-implementar-ia-pyme-chile',
    'cuanto-cuesta-web-profesional-empresa-chile',
    'cuanto-cuesta-software-a-medida-chile',
    'modelo-madurez-ia-pymes-chile',
  ],
  faq: [
    {
      q: '¿Qué fondo público me conviene si mi empresa está en el Biobío?',
      a: 'SERCOTEC CRECE Biobío cubre hasta $5M con 98% de cofinanciamiento para microempresas con ventas bajo 25.000 UF. Kit Digital, hasta $1,2M al 90%, es el primer escalón. Si el proyecto tiene componente de innovación o desarrollo, CORFO Prototipos llega a $25M con 70%. El Biobío es el segundo polo económico del país después de Santiago y tiene cerca de 72.000 pymes activas, así que la competencia por cupo es real: el proyecto tiene que estar bien armado.',
    },
    {
      q: 'Trabajo en logística. ¿Qué se digitaliza primero?',
      a: 'Casi siempre lo mismo: la trazabilidad de la carga y la comunicación con el cliente. La operación va por WhatsApp y planillas, y nadie sabe dónde está cada cosa sin llamar por teléfono. El primer paso suele ser un agente de atención por WhatsApp que responda estado y horarios sin ocupar a una persona, y recién después el sistema de gestión que ordena la operación completa.',
    },
    {
      q: 'Soy constructora. ¿Esto sirve para el control de obra?',
      a: 'Sirve para la parte que hoy vive en el celular del jefe de obra: registro de avance, asistencia, incidencias y compliance documental. Lo que no hacemos es reemplazar su software de presupuestos ni su contabilidad — nos conectamos con lo que ya tiene. En construcción el retorno suele estar en el compliance: tener la documentación al día cuando llega la inspección.',
    },
    {
      q: '¿Atienden presencialmente en Concepción y Los Ángeles?',
      a: 'Sí, viajamos desde el Maule, donde está nuestro equipo. El diagnóstico y la capacitación se hacen en su empresa. El soporte posterior es remoto, en español y en horario de Chile.',
    },
    {
      q: '¿Cuánto demora tener algo funcionando?',
      a: 'Un agente IA por WhatsApp queda operativo en días, porque no requiere instalación. Un sistema a medida se entrega en semanas, no en los seis meses del desarrollo tradicional. Esa diferencia es la que hace que el presupuesto calce con lo que cubre un fondo como CRECE o Prototipos, en vez de quedar fuera de rango.',
    },
  ],
};
