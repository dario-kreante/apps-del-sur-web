/**
 * Autenticación del panel. Un solo usuario, sin base de datos.
 *
 * La contraseña nunca se guarda: en el entorno vive un hash scrypt y acá solo se
 * compara. La sesión es una cookie firmada con HMAC — sin estado en el servidor,
 * que es lo que permite que /admin corra como función serverless sin nada detrás.
 *
 * Generar el hash:  node scripts/admin-hash.mjs "<contraseña>"
 */
import {
  createHmac,
  randomBytes,
  scryptSync,
  timingSafeEqual,
} from 'node:crypto';

const COOKIE_NAME = 'ads_admin';
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 días
const SCRYPT_KEYLEN = 32;

/** Compara sin filtrar información por el tiempo de ejecución. */
function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a, 'utf8');
  const bufB = Buffer.from(b, 'utf8');
  // timingSafeEqual exige largos iguales, así que primero normalizamos con un
  // HMAC de largo fijo. Comparar los largos directamente ya sería una fuga.
  const key = 'len-normalize';
  const hA = createHmac('sha256', key).update(bufA).digest();
  const hB = createHmac('sha256', key).update(bufB).digest();
  return timingSafeEqual(hA, hB);
}

export function hashPassword(password: string, salt?: string): string {
  const s = salt ?? randomBytes(16).toString('hex');
  const derived = scryptSync(password, s, SCRYPT_KEYLEN).toString('hex');
  return `${s}:${derived}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  const [salt, expected] = stored.split(':');
  if (!salt || !expected) return false;
  const derived = scryptSync(password, salt, SCRYPT_KEYLEN).toString('hex');
  return safeEqual(derived, expected);
}

function sign(payload: string, secret: string): string {
  return createHmac('sha256', secret).update(payload).digest('base64url');
}

export function createSession(secret: string): string {
  const payload = Buffer.from(
    JSON.stringify({ exp: Date.now() + SESSION_TTL_MS }),
  ).toString('base64url');
  return `${payload}.${sign(payload, secret)}`;
}

export function verifySession(token: string | undefined, secret: string): boolean {
  if (!token) return false;
  const [payload, signature] = token.split('.');
  if (!payload || !signature) return false;
  if (!safeEqual(signature, sign(payload, secret))) return false;
  try {
    const { exp } = JSON.parse(Buffer.from(payload, 'base64url').toString());
    return typeof exp === 'number' && exp > Date.now();
  } catch {
    return false;
  }
}

export const session = {
  cookieName: COOKIE_NAME,
  /** Opciones de cookie. `secure` se apaga en dev para que funcione en http://localhost. */
  options(isProd: boolean) {
    return {
      httpOnly: true,
      secure: isProd,
      sameSite: 'lax' as const,
      path: '/',
      maxAge: SESSION_TTL_MS / 1000,
    };
  },
};

/**
 * Lee la config del entorno. Devuelve null si falta algo, para que el panel
 * falle cerrado (nadie entra) en vez de fallar abierto.
 */
export function adminConfig(env: Record<string, string | undefined>) {
  const user = env.ADMIN_USER;
  const passwordHash = env.ADMIN_PASSWORD_HASH;
  const secret = env.ADMIN_SESSION_SECRET;
  if (!user || !passwordHash || !secret) return null;
  return { user, passwordHash, secret };
}
