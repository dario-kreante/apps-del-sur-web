import { defineMiddleware } from 'astro:middleware';
import { adminConfig, session, verifySession } from './lib/admin/auth';

/** Rutas que se pueden alcanzar sin sesión. Todo lo demás bajo /admin exige login. */
const PUBLICAS = new Set(['/admin/login', '/admin/acciones/login']);

/**
 * Las acciones del panel viven bajo /admin y no bajo /api a propósito: en este
 * proyecto existe un directorio `api/` en la raíz con las funciones del
 * assessment, y Vercel le entrega a ese directorio todo el namespace /api/*.
 * Una ruta /api/admin/... nunca llegaría a Astro — devuelve 404.
 */
const PREFIJO_ACCIONES = '/admin/acciones/';

export const onRequest = defineMiddleware(async (context, next) => {
  const path = context.url.pathname.replace(/\/$/, '') || '/';

  const esAdmin = path === '/admin' || path.startsWith('/admin/');
  if (!esAdmin) return next();
  if (PUBLICAS.has(path)) return next();

  const esAccion = path.startsWith(PREFIJO_ACCIONES);

  // Las páginas públicas se generan en build; el middleware no debe intervenir ahí.
  if (context.isPrerendered) return next();

  const config = adminConfig(import.meta.env);
  if (!config) {
    // Falta configuración: se cierra, no se abre.
    return new Response(
      'Panel no configurado. Faltan ADMIN_USER, ADMIN_PASSWORD_HASH o ADMIN_SESSION_SECRET.',
      { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
    );
  }

  const token = context.cookies.get(session.cookieName)?.value;
  if (verifySession(token, config.secret)) return next();

  if (esAccion) {
    return new Response(JSON.stringify({ error: 'No autenticado' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  return context.redirect('/admin/login', 302);
});
