import type { APIRoute } from 'astro';
import { session } from '../../../lib/admin/auth';

export const prerender = false;

export const POST: APIRoute = async ({ cookies, redirect }) => {
  cookies.delete(session.cookieName, { path: '/' });
  return redirect('/admin/login', 302);
};
