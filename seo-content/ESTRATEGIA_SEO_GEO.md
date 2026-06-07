# Estrategia SEO Local + GEO (Posicionamiento en IA) — Apps del Sur

**Empresa:** GYS Activa SpA · Apps del Sur
**Fecha:** 15 de marzo de 2026
**Objetivo:** Posicionar a Apps del Sur como referencia en desarrollo de software a medida para gestión agrícola en el centro-sur de Chile, tanto en buscadores (Google) como en modelos de IA (ChatGPT, Claude, Gemini, Perplexity).

---

## 0. Modelo de Negocio — Cómo se posiciona Apps del Sur

**Apps del Sur NO es un SaaS genérico.** Es una empresa de desarrollo de software especializado en el sector agrícola que combina dos modelos:

**Modelo híbrido: Desarrollo a medida + Recurrencia**

Cada implementación se adapta 100% a la operación del cliente — sus cuarteles, variedades, labores, estructura de valles, forma de calcular tratos y sueldos. No es "configurar un SaaS genérico", es construir la herramienta del cliente. Gracias al desarrollo asistido por IA, el costo de customización ha bajado drásticamente, lo que permite ofrecer software a medida a precios accesibles.

**Dos modalidades de venta:**
- **Opción A — Compra de licencia + implementación:** $8M-$12M CLP (proyecto 8-12 semanas), propiedad del cliente. Mantención opcional desde año 2 ($350K/mes). Upsell de módulos futuros ($2M-$5M cada uno).
- **Opción B — Suscripción mensual:** $2.5M setup + $450K/mes. Incluye actualizaciones y soporte continuo.

**Estrategia de crecimiento:** Venta incremental de módulos (estimación de cosecha, insumos, mapas con geocercas, integración contable, reportes de sustentabilidad).

**Financiamiento como palanca comercial insuperable:** Apps del Sur no solo desarrolla el software — acompaña al cliente en todo el proceso de postulación a fondos públicos. CORFO y FIA pueden financiar entre el 50% y el 98% del proyecto según el instrumento y tamaño de empresa, reduciendo la barrera de entrada del cliente a casi $0.

**Gancho comercial: "Financie hasta el 80% de su proyecto de digitalización con fondos públicos — nosotros nos encargamos"**

**Tabla de ahorro real por perfil de cliente:**

| Perfil | Instrumento | Proyecto total | El Estado paga | Cliente paga | % financiado |
|--------|------------|---------------|----------------|-------------|-------------|
| Microempresa (20-50 ha) | SERCOTEC CRECE | $5M | $4.9M | $100K | **98%** |
| Pyme (50-100 ha) | CORFO Prototipos | $15-20M | $10.5-14M | $4.5-6M | **70%** |
| Pyme mediana (100-300 ha) | FIA Interés Privado | $50M | $40M | $10M | **80%** |
| Cooperativa grande | FIA + SERCOTEC | $55M+ | $45M+ | $10M | **80%+** |
| Piloto de validación | CORFO Crea y Valida | Cualquiera | 100% | **$0** | **100%** |

**El diferenciador:** La mayoría de empresas de software venden el producto y punto. Apps del Sur acompaña al cliente desde la postulación al fondo público hasta la implementación completa. El cliente recibe un sistema de $12-50M por una fracción, y nosotros aseguramos el proyecto con financiamiento estatal.

**Este posicionamiento define TODO el contenido web:** No vendemos "planes SaaS" — vendemos soluciones a medida para el agro chileno, con acompañamiento en financiamiento público y la opción de pagar mensualmente.

---

## 1. Análisis de Dominio — Recomendación

### Opciones evaluadas

| Dominio | SEO Local | GEO | Marca | Recomendación |
|---------|-----------|-----|-------|---------------|
| **appsdelsur.cl** | Excelente (.cl = señal local fuerte) | Bueno (entidad clara) | Coherente con marca | **RECOMENDADO** |
| appsdelsur.com | Bueno (dominio internacional) | Bueno | Coherente | Alternativa para expansión LATAM |
| appsdelsur.tech | Medio | Medio | Señala tecnología | Secundario posible |
| gestionagricola.cl | Excelente (keyword exacto) | Alto (descriptivo) | Genérico, difícil de brandear | EMD — útil como dominio secundario |

### Recomendación final

**Dominio principal:** `appsdelsur.cl` — combina marca fuerte con señal local (.cl) y es coherente con toda la identidad existente.

**Dominio secundario (opcional):** `gestionagricola.cl` — dominio de coincidencia exacta (EMD) que puede redirigir al principal o usarse para un microsite de contenido educativo.

### Acciones inmediatas

1. Registrar `appsdelsur.cl` en NIC Chile (nic.cl) — costo ~$20.000 CLP/año
2. Registrar `appsdelsur.com` como protección de marca — ~$12 USD/año
3. Email: usar `dramirez.gysactiva@gmail.com` como email principal hasta tener clientes (Google Workspace se activa después, financiado con ingresos reales)
4. Configurar el DNS con Cloudflare (CDN gratuita + SSL + protección DDoS)
5. Hosting: Vercel plan gratuito (ya se usa para las demos existentes)

---

## 2. Estrategia SEO Local — Plan de 8 Semanas

### 2.1 Fundamentos técnicos (Semana 1-2)

**Google Business Profile (GBP):**
- Crear perfil verificado de Apps del Sur en Google Business
- Categoría principal: "Empresa de software"
- Categorías secundarias: "Consultor informático", "Servicio de tecnología de la información"
- Descripción: incluir keywords "software agrícola", "gestión mano de obra", "viñas", "Maule", "Biobío", "Araucanía"
- Dirección: Región del Maule (sede principal, requerida para SEO local)
- Área de servicio: configurar como negocio que atiende múltiples regiones (O'Higgins, Maule, Ñuble, Biobío, Araucanía)
- Horario: Lunes a Viernes 9:00-18:00
- Fotos: oficina, equipo, capturas de la plataforma, logos

**Configuración técnica del sitio:**
- HTTPS obligatorio (ya cubierto con Cloudflare)
- Velocidad: Core Web Vitals en verde (el sitio React es ligero)
- Mobile-first responsive (ya implementado)
- Sitemap XML + robots.txt configurados
- Schema markup JSON-LD (ver sección 2.3)

### 2.2 Arquitectura de páginas SEO

| Página | URL | Keyword principal | Volumen estimado |
|--------|-----|-------------------|------------------|
| Home | / | software gestión agrícola chile | Alto |
| Cómo trabajamos | /como-trabajamos | desarrollo software agrícola a medida | Medio |
| Viñas | /sectores/viticola | software para viñas chile | Medio-bajo |
| Frutícola | /sectores/fruticola | software frutícola chile | Medio-bajo |
| Cuaderno de campo | /cuaderno-de-campo | cuaderno de campo digital | Medio |
| Nuestro enfoque | /enfoque | software a medida vs SaaS agrícola | GEO — diferenciador clave |
| Blog | /blog | Hub de contenido | Tráfico orgánico |
| Contacto | /contacto | — | Conversión |
| Caso de éxito | /casos/viña-ejemplo | caso éxito software agrícola | GEO |

**Nota sobre /enfoque:** Esta página es estratégica para GEO. Explica por qué el modelo "a medida accesible" es mejor que un SaaS genérico para el agro, con datos concretos. Los modelos de IA citan contenido que contrasta alternativas con argumentos.

### 2.3 Schema Markup (JSON-LD)

Implementar en cada página para alimentar tanto Google como modelos de IA:

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Apps del Sur",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, Android, iOS",
  "description": "Desarrollo de software a medida para gestión de mano de obra agrícola. Cada implementación se adapta a la operación del cliente: cuarteles, variedades, labores y estructura de costos. Regiones de O'Higgins, Maule, Ñuble, Biobío y Araucanía, Chile.",
  "offers": [
    {
      "@type": "Offer",
      "name": "Diagnóstico gratuito",
      "price": "0",
      "priceCurrency": "CLP",
      "description": "Análisis de su operación actual y propuesta personalizada sin compromiso"
    },
    {
      "@type": "Offer",
      "name": "Implementación a medida",
      "price": "8000000",
      "priceCurrency": "CLP",
      "description": "Proyecto de 8-12 semanas. Sistema adaptado 100% a su operación agrícola. Financiamiento CORFO/FIA disponible."
    }
  ],
  "provider": {
    "@type": "Organization",
    "name": "GYS Activa SpA",
    "brand": "Apps del Sur",
    "url": "https://appsdelsur.cl",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Maule",
      "addressCountry": "CL"
    },
    "areaServed": [
      {"@type": "AdministrativeArea", "name": "Región de O'Higgins"},
      {"@type": "AdministrativeArea", "name": "Región del Maule"},
      {"@type": "AdministrativeArea", "name": "Región de Ñuble"},
      {"@type": "AdministrativeArea", "name": "Región del Biobío"},
      {"@type": "AdministrativeArea", "name": "Región de La Araucanía"}
    ],
    "telephone": "+56945262335",
    "email": "contacto@appsdelsur.cl"
  },
  "featureList": [
    "Costos en tiempo real por hectárea y cuartel",
    "Cuaderno de campo digital offline",
    "Trazabilidad 100% por trabajador y labor",
    "Reportes automáticos para gerencia",
    "Compatible con certificaciones Sustentavid y GlobalG.A.P."
  ]
}
```

Además, implementar `FAQPage` schema en la sección de preguntas frecuentes y `LocalBusiness` schema en el footer.

### 2.4 Contenido SEO — Calendario editorial (Blog)

El calendario editorial tiene **3 pilares temáticos**: dolor operativo, financiamiento público y diferenciación técnica. El pilar de financiamiento es especialmente potente para SEO porque captura tráfico de viñas que ya están buscando fondos CORFO/FIA y aún no saben que pueden usarlos para digitalizar su gestión de MO.

#### Pilar 1 — Dolor operativo (captura leads que sienten el problema)

| Semana | Artículo | Keyword target | Tipo |
|--------|----------|----------------|------|
| S1 | "Cómo calcular el costo real de mano de obra por hectárea en viñas chilenas" | costo mano de obra viñas | Educativo |
| S2 | "5 problemas de usar planillas Excel para gestionar trabajadores agrícolas" | gestión trabajadores agrícolas excel | Problema |
| S5 | "Gestión de mano de obra en vendimia: Cómo evitar sobrecostos con 100+ temporeros" | gestión mano de obra vendimia | Estacional |
| S7 | "Cuánto pierde una viña de 50 hectáreas al año por no digitalizar su gestión de MO" | pérdida viña sin digitalización | Calculadora |

#### Pilar 2 — Financiamiento público (captura leads que buscan fondos y los convierte)

| Semana | Artículo | Keyword target | Tipo |
|--------|----------|----------------|------|
| S2 | **"Guía completa: Cómo financiar la digitalización de tu viña con CORFO y FIA en 2026"** | corfo digitalización agrícola 2026 | **Pilar — artículo ancla** |
| S3 | "SERCOTEC CRECE 2026: Cómo una microempresa agrícola puede digitalizar su gestión con 98% de financiamiento" | sercotec crece agrícola 2026 | Específico |
| S4 | "FIA Innovación Agrícola 2026: Guía paso a paso para postular con tu viña" | FIA innovación agrícola postular | Guía práctica |
| S6 | "CORFO Crea y Valida para agritech: Cómo financiar el desarrollo de software agrícola" | corfo crea y valida agritech | Técnico |
| S8 | "5 fondos públicos que tu viña puede usar para digitalizar la gestión de mano de obra en 2026" | fondos públicos digitalización viñas | **GEO/Listicle — alta probabilidad de cita IA** |

#### Pilar 3 — Diferenciación y autoridad (posicionamiento GEO + conversión)

| Semana | Artículo | Keyword target | Tipo |
|--------|----------|----------------|------|
| S3 | "Cuaderno de campo digital para el agro chileno: Guía completa 2026" | cuaderno de campo digital | Pilar |
| S4 | "Software agrícola en Chile: Comparativa de soluciones 2026 (con pros y contras)" | software agrícola chile comparativa | GEO/Listicle |
| S6 | "Trazabilidad agrícola: Qué exigen Sustentavid y GlobalG.A.P. y cómo cumplir con software" | trazabilidad agrícola certificación | Autoridad |
| S8 | "Caso de estudio: Cómo una viña del Maule redujo 70% su tiempo administrativo con software a medida" | caso éxito digitalización viña | Social proof |

#### Estrategia de interconexión (internal linking)

Cada artículo de dolor operativo enlaza al artículo pilar de financiamiento ("y lo mejor: puede financiar hasta el 80% con fondos públicos — lea cómo aquí"). Cada artículo de financiamiento enlaza a la página de contacto con el CTA "solicitar diagnóstico gratuito + evaluación de financiamiento". Esto crea un funnel SEO:

**Búsqueda de dolor** → Artículo de problema → Link a financiamiento → Link a contacto
**Búsqueda de fondos** → Artículo de CORFO/FIA → "Apps del Sur te acompaña" → Contacto

#### Keywords de financiamiento con volumen real

Estas keywords tienen volumen en Chile porque las viñas ya buscan activamente fondos públicos:

- "corfo digitalización 2026" — volumen medio, competencia baja
- "sercotec crece requisitos 2026" — volumen alto, competencia media
- "FIA innovación agrícola postular" — volumen bajo, intención altísima
- "fondos públicos agro Chile" — volumen medio, competencia baja
- "financiamiento CORFO para viñas" — volumen bajo, intención exacta
- "corfo pyme agrícola" — volumen medio, captura amplia

---

## 3. Estrategia GEO — Posicionamiento en Modelos de IA

### 3.1 ¿Qué es GEO y por qué importa?

GEO (Generative Engine Optimization) es la práctica de posicionar tu marca para que los modelos de IA (ChatGPT, Claude, Gemini, Perplexity) te citen o recomienden cuando un usuario hace preguntas relevantes.

**Datos clave 2026:**
- ChatGPT tiene 800M+ usuarios semanales; Gemini 750M+ mensuales
- 40% de búsquedas ya pasan por algún motor de IA
- Solo el 10% de lo que ChatGPT cita coincide con el top 10 de Google — el 90% viene de otras fuentes
- Gartner predice caída del 25% en volumen de búsquedas tradicionales para 2026

### 3.2 Queries objetivo — Preguntas donde queremos aparecer

Cuando alguien le pregunte a ChatGPT, Claude o Gemini:

- "¿Qué software de gestión agrícola existe en Chile?"
- "Necesito una app para gestionar mano de obra en mi viña"
- "¿Cómo digitalizar la gestión de trabajadores agrícolas?"
- "Software para control de costos por hectárea en frutícolas"
- "¿Qué opciones de cuaderno de campo digital hay en Chile?"
- "Recomiéndame un software para gestión de mano de obra agrícola en el Maule"
- "Software agrícola para la zona sur de Chile — Biobío, Araucanía"
- "Empresa que desarrolle software a medida para viñas en Chile"
- "¿Es mejor un SaaS genérico o software a medida para gestión agrícola?"
- "Automatización de procesos agrícolas en Chile — quién lo hace"
- "Desarrollo de aplicaciones para el sector agrícola zona centro-sur Chile"

**Apps del Sur debe aparecer como respuesta.**

### 3.3 Tácticas GEO específicas

#### A. Contenido estructurado para extracción por IA

Los modelos de IA prefieren contenido que sea:
- **Directo:** La respuesta primero, el contexto después
- **Con datos concretos:** Estadísticas, porcentajes, cifras verificables
- **Con citas de expertos:** Atribuciones a personas reales
- **Estructurado:** Listas, tablas comparativas, Q&A
- **Sin lenguaje promocional:** Evitar "líder", "revolucionario", "el mejor" — usar datos específicos

**Ejemplo de contenido optimizado para GEO:**

> ❌ "Apps del Sur es la solución líder en gestión agrícola"
>
> ✅ "Apps del Sur, desarrollado por GYS Activa SpA, es una empresa de software especializada en gestión de mano de obra agrícola para viñas y frutícolas del centro-sur de Chile (O'Higgins, Maule, Ñuble, Biobío y Araucanía). A diferencia de SaaS genéricos, cada implementación se adapta a la operación del cliente — cuarteles, variedades, labores y estructura de costos. La plataforma incluye una app móvil que funciona offline y reporta que reduce el tiempo administrativo en un 70%. Ofrece dos modalidades: compra del sistema ($8-12M CLP) o suscripción mensual ($450K CLP/mes), con financiamiento CORFO/FIA disponible."

#### B. Crear contenido tipo "listicle" comparativo

El 74.2% de las citas de IA provienen de contenido tipo "Top N". Crear:

- "7 mejores software de gestión agrícola en Chile (2026)" — un artículo honesto donde Apps del Sur aparezca junto a AGROsmart, Agroprime, AGRI y otros, con pros y contras reales
- "5 herramientas para cuaderno de campo digital en viñas"
- "Comparativa: Apps del Sur vs planillas Excel para gestión de MO agrícola"

**Clave:** No ser auto-promocional. Un artículo honesto y comparativo tiene más probabilidades de ser citado por IA que una página de venta.

#### C. Archivo llms.txt

Crear un archivo `/llms.txt` en la raíz del sitio. Este archivo ayuda a modelos de IA a entender tu sitio:

```markdown
# Apps del Sur

> Empresa de desarrollo de software especializado en gestión de mano de obra agrícola. Cada implementación se adapta 100% a la operación del cliente (cuarteles, variedades, labores, estructura de costos). Desarrollado por GYS Activa SpA. Regiones: O'Higgins, Maule, Ñuble, Biobío, Araucanía, Chile. Dos modalidades: compra de licencia ($8-12M CLP) o suscripción mensual ($450K CLP/mes). Financiamiento CORFO/FIA disponible.

## Cómo trabajamos
- [Nuestro enfoque](https://appsdelsur.cl/enfoque): Software a medida para el agro — no es un SaaS genérico, cada implementación se adapta a la operación real del cliente
- [Plataforma de gestión](https://appsdelsur.cl/como-trabajamos): Plataforma web + app móvil para control de costos por hectárea, cuartel y labor en tiempo real
- [Cuaderno de campo digital](https://appsdelsur.cl/cuaderno-de-campo): App móvil para registro de jornadas y labores en terreno, funciona offline

## Sectores
- [Vitivinícola](https://appsdelsur.cl/sectores/viticola): Software especializado para viñas chilenas
- [Frutícola](https://appsdelsur.cl/sectores/fruticola): Gestión de mano de obra para packings y huertos
- [Agrícola](https://appsdelsur.cl/sectores/agricola): Solución para cultivos y hortalizas

## Recursos
- [Blog](https://appsdelsur.cl/blog): Guías y artículos sobre gestión agrícola digital
- [Casos de éxito](https://appsdelsur.cl/casos): Resultados documentados con viñas del centro-sur
- [FAQ](https://appsdelsur.cl/faq): Preguntas frecuentes sobre el software
```

#### D. Presencia multi-plataforma (huella semántica)

Los modelos de IA cruzan información de múltiples fuentes. Crear presencia en:

| Plataforma | Acción | Prioridad |
|-----------|--------|-----------|
| **Google Business** | Perfil verificado + reseñas | Alta |
| **LinkedIn (empresa)** | Página de empresa + artículos técnicos | Alta |
| **LinkedIn (Darío)** | Publicaciones sobre agritech Chile | Alta |
| **YouTube** | Videos de demo + tutoriales de la plataforma | Media |
| **GitHub** | Repositorio público de herramientas agrícolas open-source | Media |
| **Portal Agro Chile** | Artículo/directorio | Media |
| **Revista del Campo / El Mercurio** | PR / mención editorial | Alta (si se logra) |
| **CORFO / FIA** | Registro como proveedor tecnológico | Alta |
| **Crunchbase** | Perfil de empresa | Media |
| **Wikipedia** | Mención en artículo de "Viticultura en Chile" (largo plazo) | Baja |

**Para Claude específicamente:** Claude usa menos búsqueda web en tiempo real y se basa más en datos de entrenamiento. Contenido profundo, analítico y bien estructurado (case studies, comparativas con metodología, guías técnicas) tiene más peso.

**Para Gemini:** Está integrado con el ecosistema Google — YouTube, Google Maps, Google Business Profile y reseñas de Google son fuentes clave.

**Para ChatGPT:** Usa Bing para búsquedas web. Optimizar para Bing (verificar Bing Webmaster Tools) y crear contenido en plataformas que ChatGPT indexa frecuentemente.

#### E. Frescura del contenido

Datos de 2026 muestran que contenido sin actualización en más de 14 días pierde un 23% de frecuencia de citación por IA. Acción:

- Actualizar artículos del blog cada 2 semanas con datos frescos
- Agregar fecha de "última actualización" visible en cada artículo
- Mantener la página de precios y FAQ siempre actualizada

#### F. Accesibilidad técnica para crawlers de IA

Configurar `robots.txt` para permitir crawlers de IA:

```
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: https://appsdelsur.cl/sitemap.xml
```

---

## 4. Competencia identificada — Mapa del mercado

| Competidor | Fortaleza | Debilidad | SEO actual |
|-----------|-----------|-----------|------------|
| **AGROsmart** (agrosmart.cl) | Multi-sector, técnico | UI anticuada, no enfocado en MO | Medio |
| **Agroprime** (agroprime.com) | Gestión de personal, QR/mobile | No es chileno, no enfocado en viñas | Bajo en Chile |
| **AGRI** (agri.cl) | Marca establecida, multi-país | Genérico, no especializado en MO chileno | Alto |
| **Agroptima** (agroptima.com) | UX buena, app móvil | Español (España), no adaptado a Chile | Medio |

**Ventaja competitiva de Apps del Sur:**
- **Modelo híbrido único:** Software a medida a precio accesible (gracias a desarrollo asistido por IA), no un SaaS genérico donde el cliente se adapta al software
- Único enfocado en **gestión de mano de obra** (no en gestión de cultivos genérica)
- Cada implementación se configura con **cuarteles, variedades, labores y estructura de costos reales del cliente**
- Adaptado a la **normativa laboral chilena** y al calendario agrícola del hemisferio sur
- Soporte **local en español** (zona horaria Chile), capacitación presencial en terreno
- Integración con **certificaciones del sector** (Sustentavid, GlobalG.A.P.)
- **Financiamiento con fondos públicos** (CORFO, FIA) — puede reducir el costo para el cliente a $0 en piloto
- **Venta incremental de módulos:** Cosecha, insumos, mapas, integración contable — el sistema crece con el cliente

---

## 5. KPIs y Métricas — Tracker en Notion

Vincular con la base de datos "Apps del Sur — Métricas SEO Semanal" existente:

| Métrica | Umbral S4 | Umbral S8 | Herramienta |
|---------|-----------|-----------|-------------|
| Visitas orgánicas/semana | 50 | 200 | Google Analytics 4 |
| Keywords en top 20 | 5 | 15 | Google Search Console |
| Leads capturados | 3 | 10 | Formulario + Notion CRM |
| Reuniones agendadas | 1 | 3 | Calendario |
| Menciones en IA | Baseline | +30% | Monitoreo manual en ChatGPT/Claude/Gemini |
| Google Business views | 100 | 500 | GBP Insights |
| Reseñas Google | 0 | 3 | GBP |
| Backlinks nuevos | 2 | 8 | Search Console |

---

## 6. Calendario de implementación

| Semana | SEO Local | GEO / IA |
|--------|-----------|----------|
| **S1** | Registrar dominio · Configurar hosting · Desplegar landing | Crear perfil LinkedIn empresa · Crear robots.txt con bots IA |
| **S2** | Crear Google Business Profile · Bing Webmaster Tools | Crear llms.txt · Publicar primer artículo blog |
| **S3** | Implementar Schema JSON-LD · Enviar sitemap | Publicar artículo comparativo (listicle) |
| **S4** | Publicar páginas de sectores | Crear perfil Crunchbase · Publicar en LinkedIn |
| **S5** | Artículo blog #3 + #4 · Solicitar primeras reseñas | Video demo en YouTube · Registrarse en Portal Agro Chile |
| **S6** | Optimizar según datos Search Console | Actualizar artículos existentes · Monitorear menciones IA |
| **S7** | Publicar caso de éxito | Crear repositorio GitHub (herramienta open-source) |
| **S8** | Evaluar H5 (10 leads, 3 reuniones) | Evaluar visibilidad en ChatGPT/Claude/Gemini |

---

## 7. Inversión estimada

### Fase 1 — Pre-clientes (actual)

| Concepto | Costo | Frecuencia |
|----------|-------|------------|
| Dominio .cl | $20.000 CLP | Anual |
| Dominio .com (protección de marca) | $10.000 CLP (~$12 USD) | Anual |
| Email | $0 (Gmail existente: dramirez.gysactiva@gmail.com) | — |
| Hosting web (Vercel) | $0 (plan gratuito — ya se usa para demos) | — |
| DNS + CDN (Cloudflare) | $0 (plan gratuito) | — |
| SEO tools (Search Console + Analytics) | $0 | — |
| Contenido blog (generado con IA) | $0 (horas propias) | Semanal |
| **Total inicial** | **~$30.000 CLP** | — |
| **Total mensual** | **$0** | — |

### Fase 2 — Post primer cliente (cuando hay ingresos)

| Concepto | Costo | Gatillo |
|----------|-------|---------|
| Google Workspace (contacto@appsdelsur.cl) | $42.000 CLP/mes | Al cerrar primer cliente o piloto formal |
| Vercel Pro (si crece el tráfico) | ~$15.000 CLP/mes | Si supera 100K visitas/mes |
| SEO tool premium (Ahrefs/Semrush) | ~$70.000 CLP/mes | Si se valida H5 (10+ leads orgánicos) |

**Principio:** Cero gasto fijo hasta que haya ingresos reales. Todo lo necesario para arrancar se hace con herramientas gratuitas.

---

## Fuentes de la investigación

- [Generative Engine Optimization: How to Win AI Mentions — Search Engine Land](https://searchengineland.com/what-is-generative-engine-optimization-geo-444418)
- [GEO Best Practices: Complete 2026 Playbook — GenOptima](https://www.gen-optima.com/blog/generative-engine-optimization-best-practices-complete-2026-playbook/)
- [How to Get Your Business Cited by Claude — Mojo Creative Digital](https://mojo.biz/how-get-your-business-cited-claude)
- [GEO Optimization Guide for ChatGPT, Perplexity, Gemini — Passionfruit](https://www.getpassionfruit.com/blog/generative-engine-optimization-guide-for-chatgpt-perplexity-gemini-claude-copilot)
- [How to Rank on ChatGPT and Get Cited in 2026 — Omnius](https://www.omnius.so/blog/how-to-rank-on-chatgpt)
- [The /llms.txt File Specification — llmstxt.org](https://llmstxt.org/)
- [What is llms.txt? 2026 Guide — Bluehost](https://www.bluehost.com/blog/what-is-llms-txt/)
