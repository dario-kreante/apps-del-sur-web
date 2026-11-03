import { createHmac, timingSafeEqual } from 'node:crypto';

export function signReportId(secret, id) {
  return createHmac('sha256', secret).update(id).digest('base64url');
}

export function isValidReportToken(secret, id, token) {
  const expected = Buffer.from(signReportId(secret, id));
  const received = Buffer.from(String(token || ''));
  return expected.length === received.length && timingSafeEqual(expected, received);
}
