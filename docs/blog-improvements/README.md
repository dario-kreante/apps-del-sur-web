# Blog de Apps del Sur — mejora editorial, SEO y GEO

Fecha: 8 de octubre de 2026. Estado: publicado y verificado en https://appsdelsur.cl/blog/.

## Resultado

- Portada editorial con tres lecturas recomendadas, seis temas, búsqueda tolerante a tildes, filtros y estado sin resultados. El catálogo completo se genera en HTML y conserva las 33 URLs.
- Títulos y descripciones de los 33 artículos más cortos, centrados en preguntas y sin promesas cuantitativas en los metadatos.
- Reescritura de ROI, fallos de proyectos IA y cuaderno de campo: escenarios explícitamente ilustrativos, fórmulas consistentes, referencias y límites claros.
- Calculadora real de ROI: compara sin subsidio y con aporte hipotético, descuenta operación, evita división por cero y distingue ausencia de recuperación.
- Plantilla de artículos: título antes de ilustración, índice navegable, autor visible, relacionados con títulos reales, CTA según tema, tablas con desplazamiento en móvil.
- Canonical propio en /blog/, Open Graph de artículo, BlogPosting, BreadcrumbList, CollectionPage/ItemList, idioma y fechas. Omisión de FAQ global que no corresponde al contenido visible.
- Sitemap existente conserva URL y usa updatedDate en los tres artículos reescritos.

## Validación

- Build completo correcto.
- `node scripts/verify-blog.mjs`: 34 páginas del blog (portada + 33 artículos), 653 enlaces internos con destino generado, canonical, un H1 por página, JSON-LD parseable, artículo/breadcrumb y 7 comprobaciones del cálculo de ROI.
- Navegador: búsqueda con tildes, cero resultados, reinicio, categoría de datos con tres artículos; calculadora con subsidios de 0%, 60% y 100%.
- Vista estrecha: portada y artículo de ROI sin desbordamiento horizontal (375 px efectivos). Escritorio y móvil documentados en desktop.jpg y mobile.jpg.

## Alcance y límites

La revisión completa del cuerpo y sus cifras se realizó en tres guías destacadas; los otros 30 artículos recibieron mejoras de título y descripción y la nueva plantilla, no una auditoría factual integral. No se presenta una fecha reciente de revisión integral para esos cuerpos. Las piezas legales, guías de convocatorias y comparativas tecnológicas requieren mantener una revisión de fuentes propia.

Las mejoras permiten acceder a información más clara y enlazada. No garantizan ranking, tráfico ni citas en respuestas de IA.

Fuentes metodológicas consultadas:
- https://developers.google.com/search/docs/appearance/structured-data/article
- https://developers.google.com/search/docs/appearance/ai-features
- https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025

## Publicación

La comparación con la fuente de producción detectó que los cambios locales previos de diagnósticos y CRM ya estaban publicados. Se verificaron y conservaron 209 archivos por SHA-1 contra el despliegue anterior dpl_GHkdPELDid93nraxpNvuFbnyxf3x. La versión final mantiene esos archivos e incorpora esta mejora. Se compiló con Vercel, incluyendo las tres funciones API de assessment e integraciones.

Despliegue final: dpl_73H3TqyvAJ9XJ9jAVeFTNpCjxdD6, listo y promovido a appsdelsur.cl.

Verificación pública: portada nueva, búsqueda por costos (8 resultados) y calculadora de ROI (−40%/20 meses sin subsidio; 50%/8 meses con subsidio hipotético de 60%). Captura publicada: published-desktop.jpg.

Una vista previa inicial basada solo en HEAD usaba diagnósticos anteriores; no se promovió. La versión final se recompiló contra la fuente publicada recuperada y verificada.
