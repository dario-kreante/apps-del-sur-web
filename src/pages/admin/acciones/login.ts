import type { APIRoute } from 'astro';
import {
  adminConfig,
  createSession,
  session,
  verifyPassword,
} from '../../../lib/admin/auth';
import { esProduccion, serverEnv } from '../../../lib/admin/env';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const config = adminConfig(serverEnv());
  if (!config) return redirect('/admin/login?error=config', 302);

  const form = await request.formData();
  const user = String(form.get('user') ?? '');
  const password = String(form.get('password') ?? '');

  const ok =
    user === config.user && verifyPassword(password, config.passwordHash);

  if (!ok) {
    // Retardo pequeño para que el fuerza-bruta sea molesto sin afectar el uso real.
    await new Promise((r) => setTimeout(r, 600));
    return redirect('/admin/login?error=1', 302);
  }

  cookies.set(
    session.cookieName,
    createSession(config.secret),
    session.options(esProduccion()),
  );
  return redirect('/admin', 302);
};
