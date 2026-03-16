import type { APIRoute } from 'astro';

const BASE_URL = 'https://appsdelsur.cl';

const blogPosts = [
  {
    slug: 'guia-financiamiento-corfo-fia-digitalizacion-agricola-2026',
    priority: '0.9',
  },
  {
    slug: 'costo-mano-de-obra-por-hectarea-vinas-chile',
    priority: '0.8',
  },
  {
    slug: 'software-agricola-chile-comparativa-2026',
    priority: '0.8',
  },
];

export const GET: APIRoute = () => {
  const today = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${BASE_URL}/blog/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
${blogPosts
  .map(
    (post) => `  <url>
    <loc>${BASE_URL}/blog/${post.slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${post.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
