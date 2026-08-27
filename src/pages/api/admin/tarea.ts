import type { APIRoute } from 'astro';
import {
  F,
  TABLES,
  airtableToken,
  updateRecord,
} from '../../../lib/admin/airtable';

export const prerender = false;

const ESTADOS = new Set(['Por hacer', 'En curso', 'Bloqueada', 'Hecha']);

export const POST: APIRoute = async ({ request, redirect }) => {
  const token = airtableToken(import.meta.env);
  const form = await request.formData();
  const id = String(form.get('id') ?? '');
  const estado = String(form.get('estado') ?? '');

  if (!token || !id || !ESTADOS.has(estado)) {
    return redirect('/admin/proyectos', 302);
  }

  try {
    await updateRecord(token, TABLES.tareas, id, {
      [F.tarea.estado]: estado,
    });
  } catch (e) {
    return redirect(
      `/admin/proyectos?ok=${encodeURIComponent(
        `No se pudo actualizar: ${e instanceof Error ? e.message : 'error'}`,
      )}`,
      302,
    );
  }

  return redirect('/admin/proyectos', 302);
};
