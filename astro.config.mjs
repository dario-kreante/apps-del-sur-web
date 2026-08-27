// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://appsdelsur.cl',
  // El sitio público sigue siendo estático. Solo /admin y /api/admin
  // marcan `prerender = false` y se sirven como función serverless.
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
});
