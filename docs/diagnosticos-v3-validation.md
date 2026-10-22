# Diagnósticos gamificados v3 — validación

Fecha: 2026-09-30. Rama: `feat/diagnosticos-gamificados-v3`.
Estado: publicada en producción en https://appsdelsur.cl/diagnosticos/. Despliegue READY: dpl_5Apkoag3oA7inquu83B82yU4j7Tr. Build remoto 23 segundos; publicación total aproximadamente 50 segundos. Fuente: cambios locales de la rama, sin commit nuevo al desplegar.

## Cambios

- Entrada `/diagnosticos/` para elegir digital o IA según la situación de la empresa.
- Header, footer, fuentes y navegación existentes; se conserva el lenguaje visual de medallas del prototipo aprobado.
- Rutas originales conservadas y preguntas, dimensiones y cálculo previos reutilizados.
- Veinte preguntas por diagnóstico, cinco hitos con medallas, resultados, radar y tres acciones de 90 días.
- Respuestas y avance de acciones guardados por tipo en este navegador; migración de las claves antiguas.
- Resultado accesible sin entregar datos. Registro voluntario con consentimiento explícito.
- PDF local y resumen copiable; la API no promete envío automático por correo.
- Registro y reporte distinguen digital de IA, conservando compatibilidad con registros antiguos.
- Un fallo de Airtable ya no se muestra como registro exitoso. HubSpot informa advertencias sin perder el reporte persistido.

## Evidencia verificada

| Comprobación | Resultado |
| --- | --- |
| `npm run build` | Pasa |
| `npm run test:assessment-api` | 8 pruebas pasan |
| `git diff --check` | Pasa |
| Recorrido digital: 20 respuestas, hitos y resultado | Completado en navegador; respuestas de etapa 2 producen 33% |
| Recorrido IA: 20 respuestas, cinco medallas y resultado | Completado en navegador; ocho respuestas etapa 4 y doce etapa 3 producen 80% |
| Teclado y foco del modal | Radios con flechas; Tab contenido; Enter continúa; Escape permite revisar; fondo inerte restaurado al finalizar |
| Recarga y continuidad | Respuestas e hito pendiente conservados |
| Registro con consentimiento | Frontend llama a los handlers reales con Airtable simulado; se conserva el tipo y las 20 respuestas |
| Fallo y reintento | Fallo deliberado conserva los campos; el reintento registra y entrega enlace al reporte |
| Reporte digital | Título, dimensiones y 20 respuestas digitales; API prueba además la ruta de mejora |
| Resumen | Copia verificada con puntuación, dimensiones y acciones |
| Vista móvil | Entrada y diagnóstico a 360 px sin desbordamiento horizontal; corregido tamaño del anillo de resultado |
| Vista escritorio | Entrada y resultado a 1280 px sin desbordamiento horizontal |
| PDF del resultado IA | PDF real de una página generado por la aplicación; contiene 80%, dimensiones, acciones, aviso orientativo y paginación |

Las pruebas actuales de API cubren IA, digital, datos incompletos, consentimiento, ausencia de configuración, fallo de persistencia, exclusión de HubSpot y comprobación de conexión de solo lectura. Nueve pruebas pasan.

## Validación en producción

Se completaron en https://appsdelsur.cl ambos recorridos desde la página de selección, con veinte preguntas y cinco medallas cada uno. IA: doce respuestas etapa 3 y ocho etapa 2, resultado 53%, Intermedia. Digital: veinte respuestas etapa 2, resultado 33%, Digital Básica, perfil equilibrado. El registro real y la lectura posterior de los informes funcionaron para ambos tipos, conservando dimensiones, veinte respuestas y ruta de 90 días.

Registros explícitos de QA, sin contacto real ni envío de correo:

- IA: `recwQwtUjGD83IdQq`, empresa `PRUEBA QA — no contactar`.
- Digital: `rec5c3aXykFJhv4qC`, empresa `PRUEBA QA DIGITAL — no contactar`.

La recarga conservó el resultado digital y su enlace persistido. El botón de resumen mostró confirmación; la generación de PDF produjo un documento real. Evidencia: `output/playwright/diagnosticos-v3/07-produccion-resultado-digital.png` y `resultado-digital-produccion.pdf`.

### Límites confirmados

1. **HubSpot:** los dos intentos de creación de contactos fueron rechazados con HTTP 402: la cuenta alcanzó el límite de 1.000 contactos. El informe y el registro en Airtable siguen funcionando. Esta integración fue retirada por decisión del usuario en la actualización siguiente; no se borraron contactos ni se cambió el plan.
2. **Descarga de PDF:** se verificó el archivo generado por la aplicación desplegada. El navegador integrado no entregó un evento/archivo de descarga mediante `downloadMedia`; la herramienta tampoco pudo abrir Chrome. Falta confirmar la descarga al disco en un navegador normal. No confundir generación con descarga confirmada.
3. **Comprobación de variables:** el comando local `vercel env run` informó valores ausentes, pero las funciones desplegadas persistieron en Airtable y contactaron HubSpot. Ese resultado local no sirve para concluir que faltan credenciales en producción.

Revisión de errores del despliegue: dos errores de sincronización HubSpot 402, correspondientes a los dos registros QA; no se observaron errores de interfaz ni de guardado de Airtable durante los recorridos.

## Reproducir la revisión local sin efectos externos

```sh
npm run build
QA_STATIC=1 node scripts/qa-assessment-server.mjs
```

Abrir `http://127.0.0.1:4322/diagnosticos/`. El fixture usa los handlers reales, una persistencia en memoria y bloquea servicios externos. Los registros se pierden al detenerlo. Nunca desplegar este fixture como API de producción.

Capturas y PDF de evidencia local en `output/playwright/diagnosticos-v3/` (ignorados por Git).

## Actualización: Airtable como único destino — 30 septiembre 2026

Despliegue de producción READY: `dpl_GHkdPELDid93nraxpNvuFbnyxf3x`, alias https://appsdelsur.cl. Build remoto completo y nueve pruebas API correctas. Se eliminaron las llamadas y configuración de HubSpot del envío y la comprobación de integración. La prueba de regresión verifica ambos tipos incluso con variables históricas de HubSpot presentes.

Se enviaron ambos formularios desde el navegador en producción con identidades ficticias `example.invalid`, marcadas como pruebas y no contactar:

- Digital: `reccLLFoALcudFRMD`, 33%, Digital Básica.
- IA: `rec0Yef1dn1sbWwgC`, 53%, Intermedia.

Los dos informes se abrieron y leyeron desde Airtable: tipo correcto, datos QA, cinco dimensiones, veinte respuestas y ruta de 90 días. `GET /api/integrations-health/` devolvió `ok: true` y estado Airtable 200; ahora esta comprobación no crea registros. Los logs de error del nuevo despliegue no devolvieron entradas durante la validación. No se enviaron correos.

Evidencia: `output/playwright/diagnosticos-v3/08-airtable-exclusivo-informe-ia.png`. La limitación de comprobación de descarga a disco del PDF indicada arriba permanece.
