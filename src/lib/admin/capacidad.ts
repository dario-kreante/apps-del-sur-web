/**
 * La velocidad del embudo la fija la capacidad de entrega, no las ganas.
 *
 * Apps del Sur ejecuta con una persona más agentes. Prospectar al máximo con la
 * agenda llena no produce más ventas: produce leads calientes que se enfrían
 * esperando un cupo, y compromisos que después no se pueden cumplir a tiempo.
 * Al revés, frenar el scouting con la agenda vacía es cómo se llega a marzo sin
 * pipeline.
 *
 * Por eso el panel calcula un modo y lo muestra: la decisión de cuánto empujar
 * deja de depender de la sensación del día.
 */

/** Proyectos simultáneos que se pueden entregar bien. Subirlo miente sobre la realidad. */
export const CAPACIDAD_TOTAL = 2;

/** Calientes que conviene sostener esperando cupo. Menos deja hueco; más se enfrían. */
export const CALIENTES_OBJETIVO = { min: 1, max: 3 };

export type Modo = 'abierto' | 'selectivo' | 'cerrado';

export interface Capacidad {
  enEjecucion: number;
  porCerrar: number;
  libre: number;
  modo: Modo;
  titulo: string;
  regla: string;
  /** Qué hacer con los fríos en este modo. */
  frios: string;
}

export function evaluarCapacidad(
  proyectos: { estado: string }[],
  calientes = 0,
): Capacidad {
  const enEjecucion = proyectos.filter((p) => p.estado === 'En desarrollo').length;
  // Una propuesta enviada ya reserva cupo: si entra, entra con fecha.
  const porCerrar = proyectos.filter((p) => p.estado === 'Propuesta enviada').length;
  const libre = CAPACIDAD_TOTAL - enEjecucion - porCerrar;

  const modo: Modo = libre >= 2 ? 'abierto' : libre === 1 ? 'selectivo' : 'cerrado';

  const faltanCalientes = calientes < CALIENTES_OBJETIVO.min;
  const sobranCalientes = calientes > CALIENTES_OBJETIVO.max;

  if (modo === 'abierto') {
    return {
      enEjecucion, porCerrar, libre, modo,
      titulo: 'Agenda libre — acelerar',
      regla:
        'Prospectar sin freno: abrir rubros nuevos, contactar en volumen y ' +
        'mover los fríos hacia adelante. Es el momento de llenar el embudo, ' +
        'porque el costo de no hacerlo se paga dos meses después.',
      frios: 'Trabajar los fríos activamente: conseguirles ángulo y canal.',
    };
  }

  if (modo === 'selectivo') {
    return {
      enEjecucion, porCerrar, libre, modo,
      titulo: 'Queda un cupo — selectivo',
      regla: sobranCalientes
        ? `Un solo cupo libre y ${calientes} leads calientes esperándolo. No sumar más: ` +
          'cerrar uno antes de calentar otro, o se enfrían todos por igual.'
        : faltanCalientes
          ? 'Un cupo libre y ningún lead caliente para llenarlo. Vale la pena ' +
            'calentar uno o dos tibios que ya tengan ángulo y canal.'
          : 'Avanzar calientes y tibios hacia el cierre. No abrir fríos nuevos.',
      frios: 'Los fríos quedan en pausa. No se descartan: se congelan con su motivo.',
    };
  }

  return {
    enEjecucion, porCerrar, libre, modo,
    titulo: 'Sin cupo — solo lo que llegue solo',
    regla:
      'La capacidad está comprometida. No abrir contactos nuevos ni acelerar ' +
      'el embudo. Lo que sí se atiende siempre: quien llegue por su cuenta y ' +
      'avance rápido. Un inbound con intención no se deja pasar por estar ocupado — ' +
      'se agenda para cuando se libere un cupo.',
    frios: 'Los fríos no se tocan hasta que se libere capacidad.',
  };
}

export const TONO_MODO: Record<Modo, { chip: string; borde: string; fondo: string }> = {
  abierto: {
    chip: 'bg-emerald-100 text-emerald-800',
    borde: 'border-emerald-200',
    fondo: 'bg-emerald-50/70',
  },
  selectivo: {
    chip: 'bg-amber-100 text-amber-800',
    borde: 'border-amber-200',
    fondo: 'bg-amber-50/70',
  },
  cerrado: {
    chip: 'bg-gray-200 text-gray-800',
    borde: 'border-gray-300',
    fondo: 'bg-gray-100/70',
  },
};
