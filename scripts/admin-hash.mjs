#!/usr/bin/env node
/**
 * Genera el hash de la contraseña del panel y un secreto de sesión.
 *
 * Uso:  node scripts/admin-hash.mjs "tu contraseña"
 *
 * La contraseña en sí no se guarda en ninguna parte: se pega en el gestor de
 * contraseñas y lo único que viaja a Vercel es el hash.
 */
import { randomBytes, scryptSync } from 'node:crypto';

const password = process.argv[2];
if (!password) {
  console.error('Uso: node scripts/admin-hash.mjs "<contraseña>"');
  process.exit(1);
}

const salt = randomBytes(16).toString('hex');
const hash = scryptSync(password, salt, 32).toString('hex');

console.log('\nVariables para Vercel (Production, Preview y Development):\n');
console.log(`ADMIN_PASSWORD_HASH=${salt}:${hash}`);
console.log(`ADMIN_SESSION_SECRET=${randomBytes(32).toString('hex')}`);
console.log('\nFalta además ADMIN_USER, y el token de Airtable como AIRTABLE_TOKEN (o reutilizar AIRTABLE_API_KEY si se le amplía el alcance).\n');
