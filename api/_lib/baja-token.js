import { createHmac, timingSafeEqual } from 'node:crypto';

const SIGNED_TOKEN = /^([A-Za-z0-9_-]{1,64})\.([A-Za-z0-9_-]{43})$/;

export function signBajaId(secret, id) {
  return createHmac('sha256', secret).update(`baja:${id}`).digest('base64url');
}

export function isSignedBajaToken(token) {
  return SIGNED_TOKEN.test(token);
}

// Returns the prospect id only when the signature matches.
export function readSignedBajaToken(secret, token) {
  const match = SIGNED_TOKEN.exec(token);
  if (!secret || !match) return null;
  const expected = Buffer.from(signBajaId(secret, match[1]));
  const received = Buffer.from(match[2]);
  return expected.length === received.length && timingSafeEqual(expected, received) ? match[1] : null;
}
