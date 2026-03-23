# Apps del Sur — CLAUDE.md

## Project Overview

- **Framework**: Astro 6 (static site, file-based routing)
- **Styling**: Tailwind CSS 4 (inline @theme in `src/styles/global.css`)
- **Language**: TypeScript
- **Domain**: https://appsdelsur.cl

## Vercel Deployment

- **Project ID**: `prj_lWUsAMQFZPAf38fCbx3gyrWxL3UE`
- **Project name**: `apps-del-sur-web`
- **Team/Scope**: `dario-kreantes-projects` (org ID: `team_HRucOO1F81gIz4c0mk3coixu`)

### How to deploy

**From the main repo:**
```bash
vercel --prod --yes
```

**From a worktree (important!):**
Worktrees don't inherit `.vercel/project.json`. Before deploying, copy the config from the main repo:
```bash
cp "/Users/darioramirez/Proyectos Dev/apps-del-sur-web/.vercel/project.json" .vercel/project.json
vercel --prod --yes
```

Without this step, `vercel` will create a new project instead of deploying to `apps-del-sur-web`.

## Key Commands

```bash
npm run dev      # Start dev server
npm run build    # Build static site
```

## Architecture

- **Pages**: `src/pages/` (Astro file-based routing)
- **Layouts**: `src/layouts/` (Layout.astro, RegionPage.astro, SectorPage.astro, BlogPost.astro)
- **Components**: `src/components/` (Astro components, `ui/` for primitives, `icons/` for SVGs)
- **Data**: `src/data/content.ts` (centralized content), `src/data/regiones/` (region data)
- **Styles**: `src/styles/global.css` (Tailwind + custom CSS)

## Content Guidelines

- Tone: formal "usted", never "tl" or "SaaS"
- Always multi-sector (not just agro)
- Color scheme: emerald-based (primary: emerald-700 `#047857`)
- Max container width: `max-w-[1200px]`
