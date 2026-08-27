import { defineMiddleware } from 'astro:middleware';
import { adminConfig, session, verifySession } from './lib/admin/auth';

/** Rutas que se pueden alcanzar sin sesión. Todo lo demás bajo /admin exige login. */
const PUBLICAS = new Set(['/admin/login', '/api/admin/login']);

export const onRequest = defineMiddleware(async (context, next) => {
  const path = context.url.pathname.replace(/\/$/, '') || '/';

  const esAdmin = path === '/admin' || path.startsWith('/admin/');
  const esApiAdmin = path.startsWith('/api/admin');
  if (!esAdmin && !esApiAdmin) return next();
  if (PUBLICAS.has(path)) return next();

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

  if (esApiAdmin) {
    return new Response(JSON.stringify({ error: 'No autenticado' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  return context.redirect('/admin/login', 302);
});
