// ─── Tipos compartidos para páginas regionales ─────────────────

export interface RegionFund {
  name: string;
  amount: string;
  cofinancing: string;
  rubrosElegibles: string[];
  status: 'abierto' | 'por abrir' | 'cerrado';
}

export interface RegionStat {
  value: string;
  label: string;
  source?: string;
}

export interface RegionFaqItem {
  q: string;
  a: string;
}

export interface RegionData {
  slug: string;
  name: string;
  nameWithArticle: string;
  meta: {
    title: string;
    description: string;
    keywords: string;
    ogTitle: string;
    ogDescription: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  /** Slugs from the global rubros pool, in display order */
  rubroSlugs: string[];
  painPoints: Array<{
    title: string;
    description: string;
  }>;
  process: {
    step1Detail: string;
    step3Detail: string;
  };
  stats: RegionStat[];
  funding: RegionFund[];
  /** Preguntas frecuentes propias de la región. Alimentan el FAQPage schema
   *  de la página; son la fuente principal de contenido no compartido, así que
   *  las respuestas deben citar datos de ESTA región, no copy genérico. */
  faq: RegionFaqItem[];
}
