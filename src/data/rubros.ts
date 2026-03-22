// ─── Pool global de rubros ─────────────────────────────────────
// Cada región selecciona los rubros más relevantes de este pool.
// Los iconos son paths SVG (viewBox 0 0 24 24, stroke-based).

export interface Rubro {
  slug: string;
  name: string;
  description: string;
  /** SVG path(s) for the icon — stroke-based, viewBox 0 0 24 24 */
  iconPath: string;
  keywords: string[];
  /** URL to sector page, if one exists */
  sectorHref?: string;
}

export const rubros: Record<string, Rubro> = {
  'agricola-viticola': {
    slug: 'agricola-viticola',
    name: 'Agrícola / Vitivinícola',
    description:
      'Cuaderno de campo digital. Registro de jornales, costos por hectárea, trazabilidad para certificaciones.',
    iconPath:
      'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zM17.9 17.39c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z',
    keywords: ['agrícola', 'vitivinícola', 'viñas', 'cuaderno de campo', 'costos por hectárea'],
    sectorHref: '/sectores/viticola',
  },
  fruticola: {
    slug: 'fruticola',
    name: 'Frutícola / Packings',
    description:
      'Control de temporeros, rendimiento por trabajador, costos de cosecha y packing.',
    iconPath:
      'M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM7 19H5v-2h-.94l8.06-8.06 2 2L6.12 19H7z',
    keywords: ['frutícola', 'packing', 'temporeros', 'cosecha', 'cerezas', 'arándanos'],
    sectorHref: '/sectores/fruticola',
  },
  hoteleria: {
    slug: 'hoteleria',
    name: 'Hotelería',
    description:
      'Gestión de reservas, housekeeping, check-in/out, ocupación en tiempo real, costos operativos por habitación.',
    iconPath:
      'M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2V10c0-2.21-1.79-4-4-4z',
    keywords: ['hotelería', 'hotel', 'reservas', 'housekeeping', 'ocupación'],
  },
  salud: {
    slug: 'salud',
    name: 'Centros de salud',
    description:
      'Agenda de pacientes, ficha clínica digital, control de insumos, reportes para Seremi de Salud.',
    iconPath:
      'M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z',
    keywords: ['salud', 'clínica', 'ficha clínica', 'agenda pacientes', 'centro médico'],
  },
  estetica: {
    slug: 'estetica',
    name: 'Estética y bienestar',
    description:
      'Agenda de citas, historial de clientes, control de productos, gestión de profesionales.',
    iconPath:
      'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    keywords: ['estética', 'bienestar', 'spa', 'agenda citas', 'peluquería'],
  },
  turismo: {
    slug: 'turismo',
    name: 'Turismo y actividades',
    description:
      'Reservas online, gestión de grupos, disponibilidad, coordinación de guías y transporte.',
    iconPath:
      'M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z',
    keywords: ['turismo', 'actividades', 'reservas', 'tours', 'guías turísticos'],
  },
  logistica: {
    slug: 'logistica',
    name: 'Logística y transporte',
    description:
      'Seguimiento de flota, asignación de rutas, control de entregas, costos por viaje.',
    iconPath:
      'M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z',
    keywords: ['logística', 'transporte', 'flota', 'entregas', 'rutas'],
  },
  servicios: {
    slug: 'servicios',
    name: 'Servicios profesionales',
    description:
      'Gestión de órdenes de trabajo, seguimiento de servicios, presupuestos, facturación.',
    iconPath:
      'M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3h7zM7 9H4V5h3v4zm10 6h3v4h-3v-4zm0-10h3v4h-3V5z',
    keywords: ['servicios', 'órdenes de trabajo', 'presupuestos', 'mantención'],
  },
  comercio: {
    slug: 'comercio',
    name: 'Comercio',
    description:
      'Inventario, punto de venta, control de ventas, reportes de gestión.',
    iconPath:
      'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z',
    keywords: ['comercio', 'inventario', 'punto de venta', 'ventas', 'retail'],
  },
  gastronomia: {
    slug: 'gastronomia',
    name: 'Gastronomía',
    description:
      'Gestión de mesas, pedidos, inventario de insumos, costos por plato.',
    iconPath:
      'M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z',
    keywords: ['gastronomía', 'restaurante', 'cocina', 'pedidos', 'mesas'],
  },
  construccion: {
    slug: 'construccion',
    name: 'Construcción',
    description:
      'Control de mano de obra, avance de obra, costos por partida, subcontratos.',
    iconPath:
      'M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z',
    keywords: ['construcción', 'obra', 'avance', 'partidas', 'subcontratos'],
  },
  educacion: {
    slug: 'educacion',
    name: 'Educación',
    description:
      'Gestión de matrículas, asistencia, comunicación con apoderados, administración.',
    iconPath:
      'M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z',
    keywords: ['educación', 'colegio', 'matrículas', 'asistencia', 'apoderados'],
  },
} as const;

/** Get rubros for a region by their slugs, in order */
export function getRubrosForRegion(slugs: string[]): Rubro[] {
  return slugs
    .map((slug) => rubros[slug])
    .filter((r): r is Rubro => r !== undefined);
}
