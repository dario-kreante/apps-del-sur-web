import type { APIRoute } from 'astro';
import {
  F,
  TABLES,
  airtableToken,
  createRecord,
  listAll,
  selectName,
  updateRecord,
} from '../../../lib/admin/airtable';
import { serverEnv } from '../../../lib/admin/env';

export const prerender = false;

/** Cadencia: día 0, 3, 5, 8 y 14. El offset depende de cuántos toques van. */
const OFFSETS = [3, 2, 3, 6];

function iso(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function sumarDias(dias: number): string {
  const d = new Date();
  d.setDate(d.getDate() + dias);
  return iso(d);
}

const CANAL_ACTIVIDAD: Record<string, string> = {
  email: 'Email',
  whatsapp: 'WhatsApp',
  llamada: 'Llamada',
};

export const POST: APIRoute = async ({ request, redirect }) => {
  const token = airtableToken(serverEnv());
  if (!token) {
    return redirect(
      `/admin?ok=${encodeURIComponent('Falta el token de Airtable en el servidor.')}`,
      302,
    );
  }

  const form = await request.formData();
  const id = String(form.get('id') ?? '');
  const empresa = String(form.get('empresa') ?? '');
  const canal = String(form.get('canal') ?? 'email');
  const accion = String(form.get('accion') ?? '');
  if (!id) return redirect('/admin', 302);

  // Airtable no expone un GET de un registro en este cliente, y el pipeline es
  // chico: traerlo entero y filtrar sale más barato que agregar otro método.
  const todos = await listAll(token, TABLES.leads);
  const actual = todos.find((r) => r.id === id);
  if (!actual) {
    return redirect(
      `/admin?ok=${encodeURIComponent('No se encontró el lead.')}`,
      302,
    );
  }

  const hoy = iso(new Date());
  let mensaje = '';

  try {
    if (accion === 'aprobar') {
      // La compuerta la mueve el usuario, nunca un agente. Este endpoint corre
      // por un click suyo en el panel, así que es él quien la mueve.
      await updateRecord(token, TABLES.leads, id, {
        [F.lead.control]: 'Aprobado para enviar',
      });
      mensaje = `${empresa}: aprobado para enviar.`;
    } else if (accion === 'registrar-toque') {
      // Sin compuerta: esta acción no envía nada, sólo anota que el contacto
      // ya ocurrió. Bloquear el registro por falta de aprobación obligaba a
      // que el panel mintiera sobre lo que de verdad pasó.
      const toques = Number(actual.fields[F.lead.toques] ?? 0) + 1;
      const etapaActual = selectName(actual.fields[F.lead.etapa]);
      const primero = String(actual.fields[F.lead.fechaPrimerContacto] ?? '');
      const offset = OFFSETS[Math.min(toques - 1, OFFSETS.length - 1)];
      const agotada = toques >= 5;

      await createRecord(token, TABLES.actividades, {
        [F.actividad.actividad]: `Toque ${toques} · ${empresa}`,
        [F.actividad.leadRecordId]: id,
        [F.actividad.empresa]: empresa,
        [F.actividad.fechaHora]: new Date().toISOString(),
        [F.actividad.canal]: CANAL_ACTIVIDAD[canal] ?? 'Email',
        [F.actividad.tipo]: 'Contacto',
        [F.actividad.direccion]: 'Saliente',
        [F.actividad.mensaje]: String(actual.fields[F.lead.borrador] ?? ''),
        [F.actividad.agente]: 'Panel Apps del Sur',
      });

      await updateRecord(token, TABLES.leads, id, {
        [F.lead.toques]: toques,
        [F.lead.fechaUltimoContacto]: hoy,
        ...(primero ? {} : { [F.lead.fechaPrimerContacto]: hoy }),
        [F.lead.canalUltimo]: CANAL_ACTIVIDAD[canal] ?? 'Email',
        [F.lead.control]: 'Enviado',
        ...(etapaActual === 'Investigación' || etapaActual === ''
          ? { [F.lead.etapa]: 'Contactado' }
          : {}),
        [F.lead.fechaProximaAccion]: sumarDias(offset),
        [F.lead.proximaAccion]: agotada
          ? 'Cadencia agotada: cerrar o pasar a nurture con fecha'
          : `Toque ${toques + 1} de la cadencia`,
      });

      mensaje = agotada
        ? `${empresa}: toque ${toques} registrado. Cadencia agotada — toca cerrar o dar fecha de nurture.`
        : `${empresa}: toque ${toques} registrado. Siguiente en ${offset} días.`;
    } else if (accion === 'marcar-respondio') {
      await createRecord(token, TABLES.actividades, {
        [F.actividad.actividad]: `Respuesta · ${empresa}`,
        [F.actividad.leadRecordId]: id,
        [F.actividad.empresa]: empresa,
        [F.actividad.fechaHora]: new Date().toISOString(),
        [F.actividad.canal]: CANAL_ACTIVIDAD[canal] ?? 'Email',
        [F.actividad.tipo]: 'Respuesta',
        [F.actividad.direccion]: 'Entrante',
        [F.actividad.resultado]:
          'Marcado desde el panel. Pegar acá el texto textual de la respuesta.',
        [F.actividad.agente]: 'Panel Apps del Sur',
      });

      await updateRecord(token, TABLES.leads, id, {
        [F.lead.respondio]: true,
        [F.lead.etapa]: 'Respondió',
        [F.lead.control]: 'Respondió',
        [F.lead.fechaUltimoContacto]: hoy,
        [F.lead.proximaAccion]: 'Clasificar la respuesta y responder el mismo día',
        [F.lead.fechaProximaAccion]: hoy,
      });

      mensaje = `${empresa}: marcado como respondido. Registrá el texto de la respuesta en Actividades.`;
    } else if (accion === 'cerrar-perdido') {
      const toques = Number(actual.fields[F.lead.toques] ?? 0);
      const motivo =
        toques === 0
          ? 'Cerrado sin haber sido contactado'
          : `Sin respuesta tras ${toques} ${toques === 1 ? 'toque' : 'toques'}`;

      await createRecord(token, TABLES.actividades, {
        [F.actividad.actividad]: `Cierre · ${empresa}`,
        [F.actividad.leadRecordId]: id,
        [F.actividad.empresa]: empresa,
        [F.actividad.fechaHora]: new Date().toISOString(),
        [F.actividad.tipo]: 'Cierre',
        [F.actividad.resultado]: motivo,
        [F.actividad.agente]: 'Panel Apps del Sur',
      });

      await updateRecord(token, TABLES.leads, id, {
        [F.lead.etapa]: 'Cerrado Perdido',
        [F.lead.control]: 'Pausado',
        [F.lead.ultimoResultado]: motivo,
        [F.lead.proximaAccion]: '',
      });

      mensaje = `${empresa}: cerrado. ${motivo}.`;
    }
  } catch (e) {
    mensaje = `Error al guardar: ${e instanceof Error ? e.message : 'desconocido'}`;
  }

  return redirect(`/admin?ok=${encodeURIComponent(mensaje)}`, 302);
};
