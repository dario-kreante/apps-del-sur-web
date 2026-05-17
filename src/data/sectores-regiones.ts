// ─── Matriz Sector × Región ──────────────────────────────────
// 8 sectores × 5 regiones = 40 combinaciones.
// Cada celda incluye al menos UN diferenciador local real.
// Si no hay diferenciador poblado, la página se renderiza con noindex
// para evitar penalización por thin content.

export interface SectorRegionCell {
  /** Hub sectorial del que hereda — slug en sectorPages */
  sectorSlug: string;
  /** Slug de la región — debe existir en src/data/regiones */
  regionSlug: string;
  /** Diferenciador local: dato real, programa regional, o testimonio anónimo */
  localDifferentiator: {
    /** Cifra o claim verificable */
    headline: string;
    /** 2-3 frases de contexto local */
    body: string;
    /** Nombre del programa/fondo/cifra fuente para credibilidad */
    source?: string;
  } | null;
  /** Instrumentos de financiamiento específicos de la región para este sector */
  regionalFunding?: string[];
  /** Si false, la página se renderiza con noindex */
  indexable: boolean;
}

const cell = (
  sectorSlug: string,
  regionSlug: string,
  diff: SectorRegionCell['localDifferentiator'],
  funding?: string[],
): SectorRegionCell => ({
  sectorSlug,
  regionSlug,
  localDifferentiator: diff,
  regionalFunding: funding,
  indexable: diff !== null,
});

// Helper para celdas vacías (thin → noindex)
const empty = (sectorSlug: string, regionSlug: string): SectorRegionCell =>
  cell(sectorSlug, regionSlug, null);

export const sectorRegionMatrix: SectorRegionCell[] = [
  // ─── VIÑAS ────────────────────────────────────────────────────
  cell('vinas', 'maule', {
    headline: 'La región vinícola más grande de Chile: 51.000 ha plantadas',
    body: 'El Maule concentra más del 40% de la superficie vitivinícola nacional. Más de 60 viñas sobre 50 ha operan con planillas de papel y Excel. El programa Maule Agro Futuro (CORFO) apoya específicamente la digitalización agrícola en la región.',
    source: 'ODEPA + CORFO Maule Agro Futuro',
  }, ['CORFO Desarrolla Inversión Maule', 'Maule Agro Futuro', 'SERCOTEC CRECE Maule']),

  cell('vinas', 'ohiggins', {
    headline: 'O\'Higgins: 47.000 ha de vid y nueva ola de digitalización',
    body: 'O\'Higgins es la 2ª región vitivinícola del país. CORFO O\'Higgins lanzó en 2025 el programa Digitalización Agro con cofinanciamiento del 60% específico para pymes agrícolas — viñas familiares de Cachapoal y Colchagua son destinatarias directas.',
    source: 'CORFO O\'Higgins Digitalización Agro',
  }, ['CORFO Digitalización Agro O\'Higgins', 'SERCOTEC CRECE O\'Higgins']),

  cell('vinas', 'nuble', {
    headline: 'Ñuble: cuna de las cepas patrimoniales (País, Cinsault, Moscatel)',
    body: 'Ñuble alberga más de 10.000 ha de viñedos patrimoniales en el secano interior (Cauquenes, Itata). Pequeños productores con manejo tradicional sin sistemas de gestión. Sercotec Ñuble tiene cupos preferentes para digitalización vitivinícola patrimonial.',
    source: 'INDAP + SERCOTEC Ñuble',
  }, ['SERCOTEC CRECE Ñuble', 'FIA Patrimonial']),

  cell('vinas', 'biobio', {
    headline: 'Biobío: 14.000 ha de viñedos en valles del Itata y Bío Bío',
    body: 'Concentración de viñas pequeñas y medianas con vinos de altura. CORFO Biobío incluye instrumentos para innovación agrícola y digitalización del sector vitivinícola tradicional.',
    source: 'ODEPA + CORFO Biobío',
  }, ['CORFO Biobío', 'SERCOTEC CRECE Biobío']),

  cell('vinas', 'araucania', {
    headline: 'La Araucanía: la nueva frontera del vino frío en Chile',
    body: 'Pequeña pero creciente superficie (~500 ha) en Malleco y Cautín, con Pinot Noir y Chardonnay de clima frío. Viñas boutique con potencial de exportación y necesidad de trazabilidad digital para certificaciones premium.',
    source: 'Vinos de Chile + INDAP Araucanía',
  }, ['CORFO Araucanía', 'INDAP Inversión']),

  // ─── CLÍNICAS ─────────────────────────────────────────────────
  cell('clinicas', 'maule', {
    headline: 'Más de 380 clínicas dentales y centros médicos pyme en el Maule',
    body: 'Talca, Curicó y Linares concentran centros médicos privados pyme con operación 100% manual o software contable básico. SERCOTEC CRECE Maule abre cupos anuales con foco en salud y servicios. La Universidad de Talca + INIA generan flujo de profesionales jóvenes que prefieren atención digitalizada.',
    source: 'Colegio Médico Maule + SERCOTEC',
  }, ['SERCOTEC CRECE Maule', 'Kit Digital SERCOTEC']),

  cell('clinicas', 'ohiggins', {
    headline: 'Rancagua + Machalí: corredor de centros médicos privados',
    body: 'Crecimiento sostenido de clínicas dentales y centros médicos en el eje Rancagua-Machalí impulsado por gasto privado del sector minero. Demanda alta de agendamiento WhatsApp por turnos rotativos de trabajadores División El Teniente.',
    source: 'SERCOTEC O\'Higgins',
  }, ['SERCOTEC CRECE O\'Higgins']),

  cell('clinicas', 'biobio', {
    headline: 'Concepción: 2ª área metropolitana del país, 280+ centros de salud privados',
    body: 'Gran Concepción concentra la oferta más diversa de clínicas pyme fuera de Santiago: dental, médica, veterinaria, estética. SERCOTEC Biobío y CORFO con cupos específicos en salud. Penetración WhatsApp del 96% en grupos socioeconómicos C1-C3.',
    source: 'SERCOTEC Biobío',
  }, ['SERCOTEC CRECE Biobío', 'CORFO Digitalización Pyme']),

  cell('clinicas', 'nuble', {
    headline: 'Chillán: crecimiento de clínicas dentales y veterinarias post-pandemia',
    body: 'Chillán y Chillán Viejo han visto +40% nuevos centros de salud privados pyme desde 2022. La región Ñuble (creada 2018) tiene presupuesto SERCOTEC propio y agilidad administrativa para postulaciones digitalización.',
    source: 'SERCOTEC Ñuble',
  }, ['SERCOTEC CRECE Ñuble']),

  cell('clinicas', 'araucania', {
    headline: 'Temuco: 5 hospitales privados + 320 consultas y clínicas pyme',
    body: 'Temuco y Villarrica con alta concentración de servicios médicos privados. La región registra mayor tasa de cancelación de horas por distancia de pacientes rurales — el agendamiento WhatsApp + recordatorios reduce no-shows drásticamente en este contexto.',
    source: 'SERCOTEC Araucanía',
  }, ['SERCOTEC CRECE Araucanía', 'CORFO Araucanía']),

  // ─── HOTELES-TURISMO ──────────────────────────────────────────
  cell('hoteles-turismo', 'araucania', {
    headline: 'Pucón y Villarrica: capital turística de Chile sur',
    body: 'Pucón recibe 800K+ turistas/año, 60% argentinos/brasileños. Más de 2.300 cabañas, hoteles boutique y tour operadores compiten contra Booking. Cámara de Turismo Araucanía gestiona programas de digitalización con SERCOTEC y CORFO.',
    source: 'Cámara de Turismo Araucanía + SERNATUR',
  }, ['SERCOTEC CRECE Araucanía', 'CORFO Turismo Sustentable']),

  cell('hoteles-turismo', 'biobio', {
    headline: 'Concepción + Chillán Termas: turismo urbano + termal en crecimiento',
    body: 'Chillán Termas es uno de los destinos termales más visitados del país. Concepción concentra turismo de negocios. Hoteles pyme con baja penetración de tecnología y alto pago de comisiones OTA.',
    source: 'SERNATUR Biobío',
  }, ['SERCOTEC CRECE Biobío']),

  cell('hoteles-turismo', 'maule', {
    headline: 'Cajón del Maule + Pelluhue + Chanco: turismo costero y de montaña',
    body: 'Maule combina turismo costero (Pelluhue, Constitución, Chanco) con turismo de montaña (Vilches, Altos del Lircay). Cabañas familiares y lodges sin canal directo de reserva — dependen 80%+ de Booking.',
    source: 'SERNATUR Maule',
  }, ['SERCOTEC CRECE Maule']),

  cell('hoteles-turismo', 'ohiggins', {
    headline: 'Pichilemu + valle Colchagua: surf + ruta del vino',
    body: 'Pichilemu (surf) y Santa Cruz / valle Colchagua (ruta del vino) son referentes turísticos internacionales. Hoteles boutique y winery hotels con ticket alto pero dependen de OTAs y baja en reservas directas.',
    source: 'SERNATUR O\'Higgins',
  }, ['SERCOTEC CRECE O\'Higgins']),

  cell('hoteles-turismo', 'nuble', {
    headline: 'Nevados de Chillán: destino premium de invierno',
    body: 'Centro de esquí, termas y hotelería 4-5 estrellas. Pyme local con operación estacional y necesidad de capturar turistas brasileños y argentinos que llegan en peak invernal.',
    source: 'SERNATUR Ñuble',
  }, ['SERCOTEC CRECE Ñuble']),

  // ─── ABOGADOS ─────────────────────────────────────────────────
  cell('abogados', 'maule', {
    headline: 'Talca: 2.100+ abogados colegiados; ~280 estudios pyme',
    body: 'Talca es sede de la 7ª Corte de Apelaciones (jurisdicción Maule). Alta concentración de estudios pyme de 1-5 abogados especialidad laboral, civil y familiar. El Colegio de Abogados Maule promueve la modernización digital de despachos pequeños.',
    source: 'Colegio de Abogados Chile',
  }, ['SERCOTEC CRECE Maule', 'Kit Digital SERCOTEC']),

  cell('abogados', 'ohiggins', {
    headline: 'Rancagua: estudios jurídicos de minería y agrícola',
    body: 'Cercanía con División El Teniente y zona agrícola genera demanda especializada de estudios pyme. Litigios laborales y contratos comerciales son las áreas de mayor flujo de consultas WhatsApp.',
    source: 'Colegio de Abogados O\'Higgins',
  }, ['SERCOTEC CRECE O\'Higgins']),

  cell('abogados', 'biobio', {
    headline: 'Concepción: 4.200+ abogados, sede de la 4ª Corte de Apelaciones',
    body: 'Concepción es uno de los 3 polos jurídicos más importantes de Chile fuera de Santiago. Estudios pyme y medianos con necesidad de modernizar primer contacto y seguimiento de causas.',
    source: 'Colegio de Abogados Biobío',
  }, ['SERCOTEC CRECE Biobío', 'CORFO Digitalización Pyme']),

  cell('abogados', 'nuble', {
    headline: 'Chillán: estudios jurídicos al servicio del polo agrícola',
    body: 'Chillán como capital de Ñuble concentra estudios pyme especializados en derecho rural, asuntos agrícolas y laborales. Crecimiento sostenido tras la creación administrativa de la región (2018).',
    source: 'Colegio de Abogados Ñuble',
  }, ['SERCOTEC CRECE Ñuble']),

  cell('abogados', 'araucania', {
    headline: 'Temuco: estudios jurídicos en derecho indígena y rural',
    body: 'Temuco y la región tienen alta demanda de servicios jurídicos especializados (derecho indígena, comodatos rurales, conflictos forestales). CORFO Araucanía incluye instrumentos para servicios profesionales.',
    source: 'Colegio de Abogados Araucanía',
  }, ['SERCOTEC CRECE Araucanía', 'CORFO Araucanía']),

  // ─── INMOBILIARIAS ────────────────────────────────────────────
  cell('inmobiliarias', 'maule', {
    headline: 'Talca + Curicó: expansión inmobiliaria por descentralización post-pandemia',
    body: 'Talca y Curicó registran +18% en ventas inmobiliarias 2023-2025 por migración desde Santiago. Corredoras pyme con portafolios crecientes y procesos manuales. CChC Maule reporta demanda fuerte por dpto. y casas en rango UF 3.000-5.500.',
    source: 'CChC Maule + SII',
  }, ['SERCOTEC CRECE Maule']),

  cell('inmobiliarias', 'ohiggins', {
    headline: 'Rancagua + Machalí: corredor inmobiliario del cobre',
    body: 'Trabajadores División El Teniente impulsan mercado de arriendos y compras en Rancagua-Machalí. Corredoras pyme con alto flujo de leads vía portales pero baja conversión por respuesta lenta.',
    source: 'CChC O\'Higgins',
  }, ['SERCOTEC CRECE O\'Higgins']),

  cell('inmobiliarias', 'biobio', {
    headline: 'Gran Concepción: segundo mercado inmobiliario del país',
    body: 'Concepción + San Pedro de la Paz + Talcahuano = mercado de >250.000 unidades. Corredoras medianas con necesidad de gestionar volumen alto de leads automatizada.',
    source: 'CChC Biobío',
  }, ['SERCOTEC CRECE Biobío', 'CORFO Digitalización Pyme']),

  cell('inmobiliarias', 'nuble', {
    headline: 'Chillán: mercado emergente de inversionistas regionales',
    body: 'Inversionistas locales y de Santiago apostando por Chillán como ciudad universitaria + agrícola. Demanda alta de arriendos a estudiantes UBB.',
    source: 'CChC Ñuble',
  }, ['SERCOTEC CRECE Ñuble']),

  cell('inmobiliarias', 'araucania', {
    headline: 'Temuco + Pucón: mercado dual residencia + segunda vivienda',
    body: 'Temuco como mercado de primera vivienda. Pucón como mercado de segundas viviendas con flujo argentino-brasileño. Necesidad de atender ambos perfiles en idiomas distintos.',
    source: 'CChC Araucanía',
  }, ['SERCOTEC CRECE Araucanía']),

  // ─── CONSTRUCTORAS ────────────────────────────────────────────
  cell('constructoras', 'maule', {
    headline: 'Maule: 540+ constructoras pyme, alta demanda de obras públicas',
    body: 'Programas MOP, MINVU y Reconstrucción 27F generan flujo constante de obras para constructoras pyme. Compliance DT crítico por alto volumen de subcontratos. CORFO Desarrolla Inversión Maule cofinancia digitalización.',
    source: 'CChC Maule + MOP',
  }, ['CORFO Desarrolla Inversión Maule', 'SERCOTEC CRECE Maule']),

  cell('constructoras', 'ohiggins', {
    headline: 'O\'Higgins: constructoras al servicio del sector minero',
    body: 'Servicios y construcción asociados a División El Teniente y proyectos mineros. Compliance especialmente exigente por estándares Codelco. CORFO O\'Higgins con cupos para digitalización industrial.',
    source: 'CChC O\'Higgins',
  }, ['CORFO Digitalización Agro/Pyme O\'Higgins']),

  cell('constructoras', 'biobio', {
    headline: 'Biobío: polo industrial + reconstrucción + portuario',
    body: 'Gran Concepción + Talcahuano + Coronel: zona industrial-portuaria con flujo permanente de obras. CChC Biobío activo en programas de modernización pyme constructora.',
    source: 'CChC Biobío',
  }, ['CORFO Digitalización Pyme', 'SERCOTEC CRECE Biobío']),

  cell('constructoras', 'nuble', {
    headline: 'Ñuble: crecimiento urbano de Chillán + obras rurales',
    body: 'Construcción urbana en Chillán y obras de riego/caminos rurales en San Carlos, San Nicolás, Bulnes. Constructoras pyme con compliance DT como punto débil habitual.',
    source: 'CChC Ñuble',
  }, ['SERCOTEC CRECE Ñuble']),

  cell('constructoras', 'araucania', {
    headline: 'La Araucanía: obras públicas + viviendas + infraestructura turística',
    body: 'Programa de reconstrucción de infraestructura + viviendas sociales + crecimiento turístico Pucón-Villarrica. Constructoras pyme regionales con necesidad de control de jornales en obra remota.',
    source: 'CChC Araucanía',
  }, ['CORFO Araucanía', 'SERCOTEC CRECE Araucanía']),

  // ─── CLUBES-DEPORTIVOS ────────────────────────────────────────
  cell('clubes-deportivos', 'maule', {
    headline: 'Talca + Curicó: +180 gimnasios y clubes deportivos pyme',
    body: 'Penetración alta de gimnasios "boutique" (crossfit, funcional, yoga) en barrios pyme. Churn promedio 38-45%/año. Sercotec Maule con cupos para servicios.',
  }, ['SERCOTEC CRECE Maule', 'Kit Digital']),

  cell('clubes-deportivos', 'ohiggins', {
    headline: 'Rancagua: gimnasios y clubes con membresía estable',
    body: 'Trabajadores División El Teniente con poder adquisitivo y estabilidad generan mercado estable de membresías. Necesidad de fidelizar el segmento minero.',
  }, ['SERCOTEC CRECE O\'Higgins']),

  cell('clubes-deportivos', 'biobio', {
    headline: 'Gran Concepción: ecosistema fuerte de clubes universitarios y boutique',
    body: 'UdeC + UBB + UCSC generan demanda permanente. Gimnasios pyme con churn alto por rotación universitaria. Retención automatizada clave.',
  }, ['SERCOTEC CRECE Biobío']),

  cell('clubes-deportivos', 'nuble', {
    headline: 'Chillán: crecimiento de clubes deportivos post-pandemia',
    body: '+30% nuevos gimnasios y centros deportivos en Chillán desde 2022. Pyme con foco en captación, sin sistemas de retención automatizados.',
  }, ['SERCOTEC CRECE Ñuble']),

  cell('clubes-deportivos', 'araucania', {
    headline: 'Temuco: clubes deportivos consolidados con bajo churn',
    body: 'Temuco con red estable de clubes (Temuco F.C. amateur, gimnasios urbanos). Oportunidad en agendamiento de canchas y reservas digitales.',
  }, ['SERCOTEC CRECE Araucanía']),

  // ─── FUNERARIAS ───────────────────────────────────────────────
  cell('funerarias', 'maule', {
    headline: 'Maule: 60+ funerarias pyme, varias proveedoras del Estado',
    body: 'Talca, Curicó, Linares y San Javier con red de funerarias familiares de larga trayectoria (30-50 años). Muchas proveedoras del Estado vía ChileCompra. Operación predominantemente manual y oportunidad clara de modernización.',
    source: 'ChileCompra + SERCOTEC Maule',
  }, ['SERCOTEC CRECE Maule', 'Kit Digital']),

  cell('funerarias', 'ohiggins', {
    headline: 'O\'Higgins: funerarias en Rancagua + valles agrícolas',
    body: 'Funerarias pyme con cobertura rural amplia. Necesidad alta de logística (transporte, coordinación) que un sistema digital simplifica.',
  }, ['SERCOTEC CRECE O\'Higgins']),

  cell('funerarias', 'biobio', {
    headline: 'Gran Concepción: red densa de funerarias urbanas',
    body: 'Concepción + Talcahuano + Coronel con alta densidad de funerarias pyme y medianas. Mercado competitivo donde la atención 24/7 marca diferencia.',
  }, ['SERCOTEC CRECE Biobío']),

  cell('funerarias', 'nuble', {
    headline: 'Chillán: funerarias familiares de tradición',
    body: 'Tradición de funerarias familiares en Chillán, San Carlos y Coelemu. Modernización digital permite mantener servicio personal con eficiencia operacional.',
  }, ['SERCOTEC CRECE Ñuble']),

  cell('funerarias', 'araucania', {
    headline: 'Temuco + Villarrica: funerarias con cobertura rural extensa',
    body: 'Funerarias pyme con cobertura de áreas rurales y comunidades indígenas. Atención multicultural y logística remota como retos clave.',
  }, ['SERCOTEC CRECE Araucanía']),
];

// Lookups
export const cellBySectorRegion = (sector: string, region: string): SectorRegionCell | undefined =>
  sectorRegionMatrix.find((c) => c.sectorSlug === sector && c.regionSlug === region);

export const cellsBySector = (sector: string): SectorRegionCell[] =>
  sectorRegionMatrix.filter((c) => c.sectorSlug === sector);

export const cellsByRegion = (region: string): SectorRegionCell[] =>
  sectorRegionMatrix.filter((c) => c.regionSlug === region);
