# Brief para artículos del blog — appsdelsur.cl

Guía que sigue cada artículo nuevo del blog, incluida la rutina semanal. El calendario de temas está en `docs/blog/calendario-editorial.md`.

## Quién publica
Apps del Sur (GYS Activa SpA) es una **consultora boutique** de software a medida e IA aplicada, con base en Talca (Maule). Trabaja con pocos proyectos a la vez, con el mismo equipo de punta a punta, para pymes del centro-sur de Chile (O'Higgins a Araucanía). Autor de todos los artículos: "Darío Ramírez".

## Audiencia y voz
Dueños y gerentes de pymes: viñateros, agricultores, comerciantes, dueños de talleres y farmacias. Gente práctica.
- Tuteo natural chileno ("tienes", nunca "tenés"). Ejemplos locales: Talca, Curicó, Linares, Cauquenes, Chillán, San Javier.
- Frases directas y concretas. Nada de jerga tech sin explicar, nada de tono corporativo.
- Sin ejemplos de grandes corporaciones (Amazon, Deloitte, etc.).
- Educa primero, vende al final. Un solo llamado a la acción, al final.

## Reglas duras
1. **Largo**: guía sectorial 1.200-1.800 palabras; comparación 1.500-2.000. Cuenta las palabras del cuerpo (`wc -w`) y recorta si te pasas.
2. **Fecha**: `pubDate` es la fecha de la fila del calendario. Usa datos vigentes a esa fecha y evita "esta semana" o "hoy" atados a eventos, para que el artículo envejezca bien.
3. **Precios**: se permiten rangos de mercado referenciales (con fuente o como estimación explícita), pero **nunca** precios, tarifas o planes de Apps del Sur.
4. **Sin inventar**: ni testimonios, ni casos de clientes, ni cifras sin fuente. Si una cifra es estimación, dilo ("estimación propia", "como referencia").
5. **No mencionar**: Kreante, Decathlon, clientes por nombre.
6. **Productos propios**: si mencionas Kimün (cuaderno de campo digital con agente Naku por WhatsApp) o INARÜ (inspección visual 360° de obras), preséntalos como productos propios en etapa demostrativa, sin decir que tienen clientes. Menciónalos solo si encaja naturalmente.
7. **Estacionalidad agrícola**: vendimia marzo-abril, poda julio-agosto, brotación septiembre-octubre.
8. Sin sección de "Resumen" o "Conclusión" que repita lo dicho. Sin emojis en títulos.

## Estructura de una guía sectorial
- Hook (≤150 palabras con la intro): un momento real y frustrante del rubro.
- Qué puede hacer la IA / el software por ese negocio (≤150 palabras, sin lección de IA).
- 3-4 secciones H2 de automatizaciones o soluciones concretas, cada una ≤200 palabras con: el problema, la solución, el resultado esperado (planteado con honestidad).
- "¿Cuánto cuesta implementar esto?": rangos honestos de mercado, mención de fondos públicos (Kit Digital SERCOTEC, SERCOTEC CRECE, CORFO, y FIA solo para agro) y enlace a un artículo de costos existente si aplica.
- Cierre con CTA único: conversación sin costo en [Contacto](/#contacto).
- Opcional: "Preguntas frecuentes" con 3-4 preguntas de 1-2 oraciones.
- Al final: "**Fuentes:**" con lista de fuentes reales usadas (nombre + URL cuando exista).

## Formato del archivo
Ruta: `src/content/blog/<slug>.md`. Frontmatter EXACTO (YAML, comillas dobles):

```
---
title: "<título con keyword principal al inicio, ≤ 70 caracteres idealmente>"
description: "<meta description ≤ 155 caracteres, con beneficio claro>"
pubDate: <YYYY-MM-DD>
author: "Darío Ramírez"
readingTime: "<N> min"
heroAlt: "<descripción breve de una ilustración del tema>"
tags: ["<5-8 tags en minúscula>"]
relatedPosts: ["<slug existente>", "<slug existente>", "<slug existente>"]
---
```
- `readingTime` = palabras / 200 redondeado.
- `relatedPosts`: SOLO slugs que existan en `src/content/blog/` (nombres de archivo sin `.md`).
- El cuerpo empieza directamente con el texto (sin H1; el título lo pone el layout). Usa H2 (`##`) y H3.
- Enlaces internos útiles: `/servicios/`, `/nosotros/`, `/diagnostico-madurez-ia/`, `/cuaderno-de-campo/`, artículos existentes `/blog/<slug>/`.

## Proceso
1. Investiga con WebSearch (cárgalo con ToolSearch "select:WebSearch,WebFetch"): keywords en español para Chile, qué contenido existe, preguntas frecuentes, y 3-6 datos con fuente fechados antes de la fecha del artículo.
2. Escribe el archivo. Verifica largo con `wc -w` y recorta si hace falta.
