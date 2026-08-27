/**
 * Qué lead toca ahora, y por qué.
 *
 * El panel existe para responder una sola pregunta —"¿qué hago hoy?"— y esa
 * pregunta no se contesta con una lista: se contesta con un nombre. Toda la
 * jerarquía visual de la página sale de acá.
 *
 * El orden no es arbitrario: refleja qué se pierde si no se hace hoy.
 */
import type { Canal } from './canales';

export type Estado =
  | 'respondio'
  | 'listo'
  | 'vencido'
  | 'rancio'
  | 'por-aprobar'
  | 'por-llamar'
  | 'sin-canal'
  | 'sin-material'
  | 'en-espera';

export interface Senal {
  estado: Estado;
  /** Menor = más urgente. Define el orden de toda la lista. */
  orden: number;
  etiqueta: string;
  /** Por qué está acá. Se muestra: una alerta sin motivo no se obedece. */
  motivo: string;
  /** Familia semántica, separada del color de marca. */
  tono: 'urgente' | 'accion' | 'atencion' | 'neutro';
}

export interface LeadEvaluable {
  etapa: string;
  control: string;
  canal: Canal;
  toques: number;
  respondio: boolean;
  angulo: string;
  borrador: string;
  contacto: string;
  fechaUltimoContacto: string;
  fechaProximaAccion: string;
}

function diasDesde(fecha: string, hoy: Date): number | null {
  if (!fecha) return null;
  const t = new Date(fecha).getTime();
  if (Number.isNaN(t)) return null;
  return Math.floor((hoy.getTime() - t) / 86_400_000);
}

export function evaluar(lead: LeadEvaluable, hoy = new Date()): Senal {
  const sinToque = diasDesde(lead.fechaUltimoContacto, hoy);
  const venceEn = lead.fechaProximaAccion
    ? -(diasDesde(lead.fechaProximaAccion, hoy) ?? 0)
    : null;
  const tieneMensaje = lead.borrador.trim().length > 0;
  const aprobado = lead.control === 'Aprobado para enviar';

  // 1. Contestaron y todavía no le respondimos. Es lo único donde la velocidad
  //    decide el resultado.
  //
  //    La urgencia la marca la ETAPA, no la casilla `Respondió`: esa casilla es
  //    la métrica del experimento y no se apaga nunca, así que usarla dejaba al
  //    lead pidiendo "responder hoy mismo" para siempre, incluso después de
  //    haberle contestado. Moverlo a Reunión, Propuesta o Negociación es
  //    justamente la señal de que ya se actuó.
  if (lead.etapa === 'Respondió') {
    return {
      estado: 'respondio',
      orden: 0,
      etiqueta: 'Respondió',
      motivo: 'Contestó. Responder hoy mismo.',
      tono: 'urgente',
    };
  }

  // 2. Aprobado y sin enviar: está a un click, y ese click no se dio.
  if (aprobado && lead.toques === 0 && tieneMensaje) {
    return {
      estado: 'listo',
      orden: 1,
      etiqueta: 'Listo para enviar',
      motivo: 'Aprobado, con el mensaje escrito. Falta enviarlo.',
      tono: 'accion',
    };
  }

  // 3. La cadencia venció. Cada día que pasa el hilo se enfría.
  if (lead.toques > 0 && venceEn !== null && venceEn <= 0) {
    const atraso = Math.abs(venceEn);
    return {
      estado: 'vencido',
      orden: 2,
      etiqueta: atraso === 0 ? 'Toca hoy' : `Atrasado ${atraso}d`,
      motivo:
        atraso === 0
          ? 'Hoy corresponde el siguiente toque de la cadencia.'
          : `El siguiente toque venció hace ${atraso} ${atraso === 1 ? 'día' : 'días'}.`,
      tono: atraso > 3 ? 'urgente' : 'accion',
    };
  }

  // 4. Contactado y abandonado. Ni respuesta ni cierre: el peor estado posible,
  //    porque ocupa lugar en el pipeline sin decir nada sobre el negocio.
  if (lead.toques > 0 && sinToque !== null && sinToque > 14) {
    return {
      estado: 'rancio',
      orden: 3,
      etiqueta: `${sinToque}d sin toque`,
      motivo: 'Sin movimiento hace más de dos semanas. Cerrar o retomar.',
      tono: 'atencion',
    };
  }

  // De acá para abajo no hay urgencia, sino trabajo previo pendiente.
  // El orden importa: se reporta el PRIMER obstáculo, no el último, porque es
  // el único que se puede resolver hoy.

  // 5. Sin canal no hay nada que hacer, por bueno que sea el mensaje.
  if (lead.canal === 'manual') {
    return {
      estado: 'sin-canal',
      orden: 6,
      etiqueta: 'Sin canal',
      motivo: 'No hay correo ni teléfono. Hay que conseguir un correo nominal.',
      tono: 'neutro',
    };
  }

  // 6. Sin nombre no se contacta: escribir a contacto@ es la forma más rápida
  //    de no obtener respuesta. Y el nombre casi siempre se consigue llamando.
  if (!lead.contacto.trim()) {
    return {
      estado: 'por-llamar',
      orden: 5,
      etiqueta: 'Falta el nombre',
      motivo:
        'Llamar solo para preguntar a nombre de quién y a qué correo escribir. ' +
        'No es una llamada de venta.',
      tono: 'neutro',
    };
  }

  // 7. Sin ángulo el mensaje sale genérico, y un genérico quema el contacto.
  if (!lead.angulo.trim() || !tieneMensaje) {
    return {
      estado: 'sin-material',
      orden: 6,
      etiqueta: !lead.angulo.trim() ? 'Sin ángulo' : 'Sin mensaje',
      motivo: !lead.angulo.trim()
        ? 'Falta la observación concreta. Sin eso el mensaje sale genérico.'
        : 'Falta redactar el mensaje.',
      tono: 'neutro',
    };
  }

  // 8. Hay mensaje, pero no hay correo adonde mandarlo. Ese es el obstáculo
  //    real, y decir "falta aprobar" acá sería mentir sobre qué falta.
  if (lead.canal === 'consulta') {
    return {
      estado: 'por-llamar',
      orden: 5,
      etiqueta: 'Pedir el correo',
      motivo:
        'No publican correo. Excepción: un solo WhatsApp diciendo de dónde ' +
        'salió el número y pidiendo una dirección. Sin propuesta y sin insistir.',
      tono: 'neutro',
    };
  }

  if (lead.canal === 'llamada') {
    return {
      estado: 'por-llamar',
      orden: 5,
      etiqueta: 'Falta el correo',
      motivo:
        'No hay correo nominal y el primer contacto va por ahí. Llamar para ' +
        'pedirlo, no para ofrecer nada.',
      tono: 'neutro',
    };
  }

  // 9. Todo listo salvo la decisión de mandarlo.
  if (!aprobado && lead.toques === 0) {
    return {
      estado: 'por-aprobar',
      orden: 4,
      etiqueta: 'Falta aprobar',
      motivo: 'El mensaje está escrito. Falta tu visto bueno para enviarlo.',
      tono: 'accion',
    };
  }

  return {
    estado: 'en-espera',
    orden: 7,
    etiqueta: 'En espera',
    motivo: 'Contactado, dentro de la cadencia. Nada que hacer hoy.',
    tono: 'neutro',
  };
}

/** Los estados que justifican abrir el panel un martes cualquiera. */
export const ACCIONABLES: ReadonlySet<Estado> = new Set([
  'respondio',
  'listo',
  'vencido',
  'rancio',
]);

export const SEGMENTOS = [
  {
    id: 'ahora',
    label: 'Ahora',
    incluye: (s: Senal) => ACCIONABLES.has(s.estado),
  },
  {
    id: 'esperando',
    label: 'Esperando respuesta',
    incluye: (s: Senal) => s.estado === 'en-espera',
  },
  {
    id: 'preparar',
    label: 'Por preparar',
    incluye: (s: Senal) =>
      s.estado === 'por-aprobar' || s.estado === 'sin-material',
  },
  {
    id: 'trabados',
    label: 'Trabados',
    incluye: (s: Senal) => s.estado === 'sin-canal' || s.estado === 'por-llamar',
  },
  { id: 'todos', label: 'Todos', incluye: () => true },
] as const;

export type SegmentoId = (typeof SEGMENTOS)[number]['id'];
