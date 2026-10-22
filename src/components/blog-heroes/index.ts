// Hero illustrations per post slug, shared by the article page and the blog listing
import HeroCuadernoCampo from './HeroCuadernoCampo.astro';
import HeroCalendarioAgricola from './HeroCalendarioAgricola.astro';
import HeroSenalesDigitalizar from './HeroSenalesDigitalizar.astro';
import HeroSustentavid from './HeroSustentavid.astro';
import HeroVendimia from './HeroVendimia.astro';
import HeroEcosistemaAgtech from './HeroEcosistemaAgtech.astro';
import HeroFinanciamiento from './HeroFinanciamiento.astro';
import HeroCostoManoObra from './HeroCostoManoObra.astro';
import HeroComparativaSoftware from './HeroComparativaSoftware.astro';
import HeroCostoSoftware from './HeroCostoSoftware.astro';
import HeroCostoWeb from './HeroCostoWeb.astro';
import HeroCostoIA from './HeroCostoIA.astro';
import HeroCostoVinas from './HeroCostoVinas.astro';
import HeroCostoWhatsApp from './HeroCostoWhatsApp.astro';
import HeroFrameworkIA from './HeroFrameworkIA.astro';
import HeroPorQueFallan from './HeroPorQueFallan.astro';
import HeroROI from './HeroROI.astro';
import HeroCodex from './HeroCodex.astro';

export const heroComponents: Record<string, any> = {
  'calcular-roi-proyecto-ia-pyme-chile': HeroROI,
  'por-que-fallan-proyectos-ia-pymes': HeroPorQueFallan,
  'framework-ia-pymes-chile': HeroFrameworkIA,
  'cuaderno-de-campo-digital-vinas-chile': HeroCuadernoCampo,
  'calendario-agricola-2026-vinas-centro-sur-chile': HeroCalendarioAgricola,
  'senales-digitalizar-gestion-mano-obra-vina': HeroSenalesDigitalizar,
  'sustentavid-globalg-a-p-registros-trazabilidad-software': HeroSustentavid,
  'vendimia-2026-gestion-temporeros-costos': HeroVendimia,
  'ecosistema-agtech-maule-thinkagro-inia-recursos': HeroEcosistemaAgtech,
  'guia-financiamiento-corfo-fia-digitalizacion-agricola-2026': HeroFinanciamiento,
  'costo-mano-de-obra-por-hectarea-vinas-chile': HeroCostoManoObra,
  'software-agricola-chile-comparativa-2026': HeroComparativaSoftware,
  'cuanto-cuesta-software-a-medida-chile': HeroCostoSoftware,
  'cuanto-cuesta-web-profesional-empresa-chile': HeroCostoWeb,
  'cuanto-cuesta-implementar-ia-pyme-chile': HeroCostoIA,
  'claude-pymes-chile-2026': HeroCostoIA,
  'codex-pymes-chile-2026': HeroCodex,
  'claude-vs-codex-chile-2026': HeroCodex,
  'cuanto-cuesta-sistema-gestion-vinas': HeroCostoVinas,
  'cuanto-cuesta-automatizar-whatsapp-empresa': HeroCostoWhatsApp,
};
