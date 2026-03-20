# Brief de Rediseño: Home appsdelsur.cl — Multisector + IA

**Issue:** APP-7
**Autor:** Darío Ramírez
**Fecha:** 2026-03-20
**Estado:** Draft

---

## 1. Objetivo

Transformar el home de appsdelsur.cl de "producto de gestión agrícola" a **"fábrica de software a medida para empresas del sur de Chile, potenciada por Claude AI"**. El sitio actual posiciona a Apps del Sur como un SaaS agrícola vertical; el nuevo home debe comunicar capacidad multisector manteniendo el posicionamiento territorial (centro-sur) y el diferenciador tecnológico (desarrollo asistido por IA con Claude).

### Objetivos específicos

1. **Ampliar el mercado objetivo** — de viñas/frutícolas a cualquier empresa del sur que necesite software a medida
2. **Posicionar el diferenciador IA** — Claude AI como herramienta que permite entregar software custom a precio accesible
3. **Mantener la vertical agro** — como caso de éxito y landing dedicada, no como identidad completa
4. **Crear arquitectura escalable** — estructura de páginas que soporte nuevas verticales sin rediseño

---

## 2. Diagnóstico del estado actual

### Lo que funciona (mantener)

| Elemento | Razón |
|----------|-------|
| Copy centralizado en `content.ts` | Facilita cambios sin tocar componentes |
| SEO local (geo tags, JSON-LD, hreflang) | Buen posicionamiento regional |
| Sección Financiamiento | Diferenciador real para PyMEs chilenas |
| Blog con 9 artículos publicados | Genera tráfico orgánico |
| Formulario de contacto (FormSubmit.co) | Simple, funcional, sin backend propio |
| Diseño responsive mobile-first | Base sólida |
| Paleta emerald + diseño limpio | Profesional, no requiere cambio radical |

### Lo que debe cambiar

| Elemento actual | Problema | Cambio |
|-----------------|----------|--------|
| Hero: "Software a medida para gestión agrícola" | Limita a un solo sector | Generalizar a multisector |
| Badge: "Software agrícola · Maule a Araucanía" | Demasiado nicho | Ampliar a "Software a medida · Sur de Chile" |
| Dashboard mockup agro en Hero | Solo habla de hectáreas/cuarteles | Reemplazar con mockup genérico o rotativo |
| Sectors: solo Vitivinícola, Frutícola, Agrícola | No refleja capacidad multisector | Cards de verticales (Agro, Servicios, Consultoría IA) |
| Metrics: $/ha, hectáreas | Métricas solo agro | Métricas de impacto general |
| Title/meta: "Gestión de Mano de Obra Agrícola" | SEO limitado a agro | Ampliar keywords |
| Sin mención prominente de Claude/IA | Diferenciador oculto en FAQ | Sección dedicada + badge |
| Sin página de soluciones por vertical | Todo en una sola página | Arquitectura `/soluciones/*` |

---

## 3. Nueva arquitectura de páginas

```
/                           → Home: fábrica de software multisector
/soluciones/agro            → Vertical agro (migrar contenido actual del home)
/soluciones/servicios       → Vertical servicios (nuevo)
/claude                     → Landing dedicada Claude AI Partner (nuevo)
/regiones/maule             → SEO local Maule (nuevo, expandir footer actual)
/regiones/biobio            → SEO local Biobío (nuevo)
/blog                       → Blog (existente, ampliar temática)
/blog/[slug]                → Posts (existente)
```

### Prioridades de implementación

1. **P0 — Home nuevo** (este brief)
2. **P1 — /soluciones/agro** (migrar contenido actual)
3. **P1 — /claude** (landing IA)
4. **P2 — /soluciones/servicios** (nueva vertical)
5. **P2 — /regiones/*** (SEO local)

---

## 4. Estructura del nuevo home — Wireframe textual

### 4.1 Header (modificar)

```
[Logo Apps del Sur]   Inicio  Soluciones▾  Cómo trabajamos  Financiamiento  Blog  Contacto   [Agendar demo]
                                ├─ Agro
                                ├─ Servicios
                                └─ Claude AI
```

**Cambios:** Dropdown en "Soluciones" que apunte a las subpáginas. Eliminar "Sectores", "Funcionalidades" y "Preguntas" como nav items directos.

---

### 4.2 Hero (reescribir)

```
┌─────────────────────────────────────────────────────────────────┐
│  [Badge] Software a medida · Sur de Chile · Potenciado por IA  │
│                                                                 │
│  Software a medida para                                         │
│  empresas del sur de Chile                                      │
│                                                                 │
│  Desarrollamos sistemas de gestión adaptados 100% a su          │
│  operación. Claude AI nos permite entregar software custom      │
│  a precio de SaaS, en semanas en vez de meses.                  │
│                                                                 │
│  [Solicitar diagnóstico gratuito]  [Ver soluciones]             │
│                                                                 │
│  Sin compromiso · 8-12 semanas · Financiamiento CORFO/FIA      │
│                                                                 │
│                    ┌──────────────┐                              │
│                    │  Mockup app  │  ← Dashboard genérico       │
│                    │  multi-uso   │    o rotativo por sector     │
│                    └──────────────┘                              │
└─────────────────────────────────────────────────────────────────┘
```

**Copy principal:**
- **Título:** "Software a medida para **empresas del sur de Chile**"
- **Subtítulo:** "Desarrollamos sistemas de gestión adaptados 100% a su operación. Claude AI nos permite entregar software custom a precio de SaaS, en semanas en vez de meses."
- **CTA primario:** "Solicitar diagnóstico gratuito" → `#contacto`
- **CTA secundario:** "Ver soluciones" → `#soluciones`

---

### 4.3 Métricas (adaptar)

```
┌──────────────┬──────────────┬──────────────┬──────────────┐
│   -70%       │    100%      │   8-12       │    3+        │
│  Tiempo      │  Adaptado    │  Semanas     │  Sectores    │
│  admin       │  a su        │  implemen-   │  atendidos   │
│  reducido    │  operación   │  tación      │              │
└──────────────┴──────────────┴──────────────┴──────────────┘
```

**Cambio:** Reemplazar "$/ha" y "hectáreas" por métricas genéricas que apliquen a cualquier sector.

---

### 4.4 Sección "Qué hacemos" / Soluciones (nueva)

```
┌─────────────────────────────────────────────────────────────────┐
│  [Section Header] Soluciones a medida para cada sector          │
│  "Cada negocio es distinto. Por eso no vendemos software        │
│   genérico: construimos el suyo."                               │
│                                                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌──────────────────┐       │
│  │  🌿 Agro    │  │  🔧 Servi-  │  │  🤖 Consultoría  │       │
│  │             │  │    cios     │  │     Claude AI    │       │
│  │ Gestión de  │  │ Control de  │  │ Diagnóstico +    │       │
│  │ mano de     │  │ operaciones │  │ implementación   │       │
│  │ obra, cua-  │  │ en terreno, │  │ de IA en su      │       │
│  │ dernos de   │  │ mantención, │  │ empresa con      │       │
│  │ campo,      │  │ agendamien- │  │ Claude AI.       │       │
│  │ trazabili-  │  │ to, RRHH.   │  │                  │       │
│  │ dad.        │  │             │  │                  │       │
│  │             │  │             │  │                  │       │
│  │ [Ver más →] │  │ [Ver más →] │  │ [Ver más →]      │       │
│  └─────────────┘  └─────────────┘  └──────────────────┘       │
└─────────────────────────────────────────────────────────────────┘
```

**Links:**
- Agro → `/soluciones/agro`
- Servicios → `/soluciones/servicios`
- Consultoría Claude AI → `/claude`

---

### 4.5 Sección "Cómo lo hacemos" (adaptar Process)

```
┌─────────────────────────────────────────────────────────────────┐
│  [Section Header] Desarrollo custom, potenciado por IA          │
│  "Claude AI nos permite desarrollar software a medida al        │
│   costo y velocidad de un SaaS estándar."                       │
│                                                                 │
│  ① Diagnóstico     ② Desarrollo        ③ Entrega          ④ Crecimiento  │
│     gratuito          IA-asistido         + Capacitación      modular      │
│                                                                 │
│  Entendemos su     Claude AI acelera   Sistema en          Nuevos módulos  │
│  operación en      el desarrollo:      producción en       cuando los      │
│  terreno. Sin      código a medida     8-12 semanas        necesite.       │
│  compromiso.       a velocidad IA.     con capacitación.   Sin rehacer.    │
│                                                                 │
│           [Diferenciador highlight box]                          │
│           "¿Por qué IA? Porque un desarrollo que antes          │
│            tomaba 6 meses y costaba $30M, hoy lo entregamos     │
│            en 8-12 semanas por $8-12M."                         │
└─────────────────────────────────────────────────────────────────┘
```

---

### 4.6 Sección "Regiones" (expandir Sectors actual)

```
┌─────────────────────────────────────────────────────────────────┐
│  [Section Header] Presentes en el centro-sur de Chile           │
│                                                                 │
│  ┌──────────────────────┐   • O'Higgins                        │
│  │                      │   • Maule                             │
│  │    [SVG Mapa Chile   │   • Ñuble                             │
│  │     centro-sur con   │   • Biobío                            │
│  │     regiones         │   • Araucanía                         │
│  │     destacadas]      │                                       │
│  │                      │   "Trabajamos en terreno.             │
│  └──────────────────────┘    Conocemos las rutas, los climas    │
│                              y las personas."                   │
│                                                                 │
│  Checklist: ✓ Visitas presenciales                              │
│             ✓ Soporte en horario agrícola                       │
│             ✓ Equipo local                                      │
└─────────────────────────────────────────────────────────────────┘
```

**Cambio:** Mantener el mapa SVG existente. Eliminar la lista de "ventajas" agro-específicas por ventajas genéricas de presencia local. Cada región puede linkearse a su landing SEO futura (`/regiones/maule`, etc.).

---

### 4.7 Sección "Financiamiento" (reutilizar)

Mantener la sección actual tal cual. Las 4 cards de CORFO/FIA/SERCOTEC aplican a cualquier sector, no solo agro. Solo ajustar el copy del banner CTA para que no diga "operación agrícola".

**Cambio en banner:**
- Antes: "Digitalice su operación agrícola con hasta 70% de financiamiento..."
- Después: "Digitalice su empresa con hasta 70% de financiamiento público..."

---

### 4.8 Sección "Claude AI Partner" (nueva)

```
┌─────────────────────────────────────────────────────────────────┐
│  ┌─────────┐                                                    │
│  │ Claude  │  Desarrollo potenciado por Claude AI               │
│  │  Badge  │                                                    │
│  └─────────┘  Somos la primera software house del sur de Chile  │
│               que integra Claude AI en todo su ciclo de         │
│               desarrollo. Esto nos permite:                     │
│                                                                 │
│               • Entregar en semanas, no meses                   │
│               • Código a medida al precio de un SaaS            │
│               • Implementar IA directamente en su software      │
│                                                                 │
│               [Conocer más sobre Claude AI →]  → /claude        │
└─────────────────────────────────────────────────────────────────┘
```

---

### 4.9 Social Proof (adaptar)

Mantener logos de CORFO/FIA/SERCOTEC. Agregar badge de Anthropic/Claude si se obtiene autorización de uso de marca.

---

### 4.10 FAQ (adaptar)

Mantener las 6 preguntas actuales pero reescribir para ser sector-agnósticas:

| # | Pregunta actual | Pregunta nueva |
|---|----------------|----------------|
| 1 | ¿Qué tipo de software agrícola desarrollan? | ¿Qué tipo de software desarrollan? |
| 2 | ¿Cuánto cuesta el software? | ¿Cuánto cuesta un software a medida? |
| 3 | ¿Cuánto tarda la implementación? | (mantener) |
| 4 | ¿Se integra con mis sistemas? | (mantener) |
| 5 | ¿Qué pasa si necesito cambios? | (mantener) |
| 6 | ¿Tienen opciones de financiamiento? | (mantener) |

Agregar nueva pregunta:
- **¿Qué es Claude AI y cómo lo usan?** → Respuesta explicando el diferenciador.

---

### 4.11 CTA Final + Formulario de contacto (adaptar)

**ContactCTA:**
- Antes: "Digitalice su operación agrícola hoy"
- Después: "Digitalice su empresa hoy"

**ContactForm:**
- Cambiar campo "Hectáreas/superficie" por "Sector / rubro" (dropdown: Agrícola, Servicios, Otro)
- Resto del formulario se mantiene igual

---

### 4.12 Footer (adaptar)

```
Apps del Sur                Soluciones       Recursos          Regiones          Contacto
Software a medida para      Agro             Blog              O'Higgins         +56 9 4526 2335
empresas del sur de Chile   Servicios        Financiamiento    Maule             dramirez@...
© 2026 GYS Activa SpA      Claude AI        FAQ               Ñuble             WhatsApp
                                                               Biobío
                                                               Araucanía
```

---

## 5. Copy principal — Textos clave

### Tagline / claim

> **"Software a medida para empresas del sur de Chile"**

### Subtítulo hero

> "Desarrollamos sistemas de gestión adaptados 100% a su operación. Claude AI nos permite entregar software custom a precio de SaaS, en semanas en vez de meses."

### Diferenciador IA (para sección Cómo lo hacemos)

> "¿Por qué IA? Porque un desarrollo que antes tomaba 6 meses y costaba $30M, ahora lo entregamos en 8-12 semanas por $8-12M. Claude AI acelera cada etapa: desde el diagnóstico hasta el código."

### Claim Claude Partner

> "Primera software house del sur de Chile con desarrollo potenciado por Claude AI"

### CTA principal

> "Solicitar diagnóstico gratuito"

### CTA secundario

> "Ver soluciones" / "Conocer más"

---

## 6. SEO — Cambios en metadata

### Title tag

- Antes: "Apps del Sur — Software de Gestión de Mano de Obra Agrícola | Maule, Chile"
- **Después:** "Apps del Sur — Software a Medida para Empresas del Sur de Chile | IA + CORFO"

### Meta description

- **Después:** "Desarrollamos software a medida para empresas del centro-sur de Chile. Gestión agrícola, servicios y consultoría IA con Claude. Financiamiento CORFO/FIA. Diagnóstico gratuito."

### Keywords nuevas (agregar)

```
software a medida Chile, software empresas sur Chile, desarrollo software IA,
Claude AI Chile, software CORFO, digitalización empresas Chile,
software servicios Chile, consultoría IA Chile
```

### Keywords mantener

```
software agrícola Chile, gestión mano de obra agrícola, software viñas Chile
```

### JSON-LD

- Actualizar `SoftwareApplication` → cambiar `applicationCategory` de "BusinessApplication" a "BusinessApplication" (mantener) pero ampliar `description` y `offers`
- Actualizar `Organization.description` para reflejar multisector
- Mantener `LocalBusiness` y `FAQPage` schemas

---

## 7. Assets necesarios

### Diseño / Visual

| Asset | Estado | Acción |
|-------|--------|--------|
| Mockup dashboard genérico para Hero | No existe | Crear o diseñar variante multisector del actual |
| Icono/ilustración vertical Servicios | No existe | Crear SVG consistente con estilo actual |
| Icono/ilustración Claude AI / IA | No existe | Crear SVG o usar badge oficial Anthropic |
| Badge "Claude AI Partner" | No existe | Diseñar badge propio o solicitar a Anthropic |
| Mapa SVG regiones (existente) | Existe | Mantener, posible ajuste de labels |

### Contenido

| Asset | Estado | Acción |
|-------|--------|--------|
| Copy completo nuevo home | No existe | Redactar (basado en este brief) |
| Copy página `/soluciones/agro` | Parcialmente existe | Migrar desde home actual |
| Copy página `/soluciones/servicios` | No existe | Redactar desde cero |
| Copy página `/claude` | No existe | Redactar desde cero |
| Blog posts nuevos sobre IA/Claude | No existe | Planificar 2-3 artículos |

### Técnico

| Asset | Estado | Acción |
|-------|--------|--------|
| Nuevas rutas en Astro (`/soluciones/*`, `/claude`) | No existe | Crear pages |
| Componente `Solutions.astro` (cards de verticales) | No existe | Desarrollar |
| Componente `ClaudePartner.astro` | No existe | Desarrollar |
| Actualizar `content.ts` con nuevo copy | Existe | Modificar |
| Dropdown navigation en Header | No existe | Modificar Header.astro |
| Campo "Sector" en formulario contacto | No existe | Modificar ContactForm.astro |

---

## 8. Lo que NO cambia

- **Framework:** Astro 6 + Tailwind (sin migración)
- **Paleta de colores:** Emerald green (identidad visual consolidada)
- **Formulario backend:** FormSubmit.co
- **Blog engine:** Astro Content Collections
- **Dominio:** appsdelsur.cl
- **Estructura de componentes:** Mantener patrón de Astro components con datos de `content.ts`

---

## 9. Riesgos y consideraciones

1. **SEO agro existente** — El sitio tiene tráfico orgánico por keywords agrícolas. La migración del contenido agro a `/soluciones/agro` debe incluir redirects 301 desde las URLs actuales y mantener los mismos meta tags para no perder posicionamiento.

2. **Uso de marca Claude/Anthropic** — Verificar términos de uso antes de crear badge "Claude AI Partner". Usar redacción que no implique endorsement oficial si no existe acuerdo.

3. **Blog temática mixta** — Los 9 artículos actuales son 100% agro. No es necesario cambiarlos, pero los nuevos deben cubrir IA, servicios y multisector para reflejar el nuevo posicionamiento.

4. **Formulario de contacto** — El campo "Hectáreas" debe desaparecer del home pero mantenerse en `/soluciones/agro` donde sigue siendo relevante.

5. **Demo link** — `demo.appsdelsur.cl` es una demo agro. El CTA "Ver demo interactiva" del home debería cambiar a "Ver soluciones" o redirigir a una demo más genérica cuando exista.

---

## 10. Orden de ejecución sugerido

| Fase | Tarea | Dependencia |
|------|-------|-------------|
| 1 | Actualizar `content.ts` con nuevo copy del home | Este brief |
| 2 | Crear componente `Solutions.astro` (cards verticales) | Copy listo |
| 3 | Crear componente `ClaudePartner.astro` | Badge/icono IA |
| 4 | Modificar `Hero.astro` con nuevo copy + mockup | Mockup nuevo |
| 5 | Adaptar `Metrics.astro`, `FAQ.astro`, `ContactCTA.astro`, `ContactForm.astro` | Copy listo |
| 6 | Modificar `Header.astro` con dropdown Soluciones | Rutas creadas |
| 7 | Actualizar `Layout.astro` metadata/SEO | Copy listo |
| 8 | Crear página `/soluciones/agro` (migrar contenido actual) | Home nuevo listo |
| 9 | Crear página `/claude` | Copy listo |
| 10 | Crear página `/soluciones/servicios` | Copy listo |
| 11 | Configurar redirects si URLs cambian | Páginas creadas |
| 12 | Ampliar blog con artículos multisector/IA | Independiente |
