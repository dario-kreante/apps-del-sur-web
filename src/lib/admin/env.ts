/**
 * Lectura de variables de entorno en el servidor.
 *
 * `import.meta.env` NO sirve acá: Vite lo reemplaza por literales en tiempo de
 * build, y las variables marcadas como sensibles en Vercel existen únicamente
 * en runtime. El resultado es que el panel se construía con `undefined` grabado
 * a fuego y fallaba con "no configurado" aunque las variables estuvieran bien
 * puestas.
 *
 * `process.env` se resuelve cuando la función corre, que es lo que queremos.
 * Se deja `import.meta.env` como respaldo para `astro dev`, donde el archivo
 * .env local sí se carga por esa vía.
 */
export function serverEnv(): Record<string, string | undefined> {
  const build = (import.meta.env ?? {}) as Record<string, string | undefined>;
  const runtime =
    typeof process !== 'undefined' && process.env ? process.env : {};
  // El runtime gana: es el valor real de la función en ejecución.
  return { ...build, ...runtime };
}

/** True en producción, para decidir el flag `secure` de la cookie. */
export function esProduccion(): boolean {
  const env = serverEnv();
  return env.VERCEL_ENV === 'production' || env.NODE_ENV === 'production';
}
