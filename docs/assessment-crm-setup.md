# Diagnósticos de Madurez — captura y reportes

Los diagnósticos de madurez en IA, madurez digital y datos personales comparten `/api/assessment-submit` y `/api/assessment-report`. El tipo se identifica con el campo `Fuente`:

| Diagnóstico | `Fuente` | Título del informe |
| --- | --- | --- |
| Madurez en IA | `diagnostico-madurez-ia` | Diagnóstico de Madurez en IA |
| Madurez Digital | `diagnostico-madurez-digital` | Diagnóstico de Madurez Digital |
| Datos Personales | `diagnostico-datos-personales` | Diagnóstico de Datos Personales |

El cuestionario de datos personales vive en `/diagnostico-datos-personales/`, como los otros dos. La página del servicio está en `/servicios/diagnostico-datos-personales/` y enlaza hacia él.

## Comportamiento de envío

1. El navegador envía los datos del lead, `Consentimiento: Aceptado`, las 20 respuestas y los resultados de cada dimensión a `POST /api/assessment-submit`.
2. El endpoint valida consentimiento, correo, los índices de pregunta `qIdx` del 0 al 19, cuatro respuestas en cada dimensión esperada y etapas del 1 al 4. Requiere Airtable para guardar el diagnóstico.
3. Después de crear el registro, guarda en `Reporte URL` un enlace a `/api/assessment-report?id=<record-id>`.
4. Con el registro guardado, envía por Brevo un correo a la dirección del formulario con la etapa, el puntaje y el enlace al informe.
5. El endpoint responde con `ok: true`, `airtableRecordId` y `reportUrl` solo si el registro y el enlace quedaron guardados. Un fallo o falta de configuración de Airtable devuelve un estado no exitoso y no envía correo.
6. Airtable es el único destino de los datos. El endpoint no consulta ni escribe en HubSpot, incluso si existen variables antiguas configuradas.

El reporte se entrega como página HTML con los datos de empresa, la ruta de mejora calculada por el cuestionario, los resultados por dimensión y las respuestas. Incluye un botón para imprimirlo o guardarlo como PDF desde el navegador.

## Correo del informe

`emailStatus` indica el resultado y `emailSent` solo es `true` con `sent`:

| `emailStatus` | Significado |
| --- | --- |
| `sent` | Brevo aceptó el correo |
| `failed` | Brevo rechazó el envío o no respondió en 8 segundos. El lead queda guardado y la interfaz muestra el enlace |
| `not_sent_by_api` | `BREVO_API_KEY` no está configurada |

La interfaz solo afirma el envío con `emailSent: true`. El contenido se calcula en el servidor y no incluye texto libre del formulario, porque el endpoint es público.

## Protección contra abuso

Antes de tocar Airtable o Brevo, el endpoint comprueba dos cosas:

| Control | Si falla |
| --- | --- |
| Token de Cloudflare Turnstile, verificado en el servidor | 403 `bot_check_failed`, o 503 `bot_check_unavailable` si Cloudflare no responde |
| Máximo 5 envíos por correo en 24 horas, contados en Airtable | 429 `too_many_requests` |

Ninguno de esos casos guarda el lead ni envía correo. Sin `TURNSTILE_SECRET_KEY` el lead se guarda, pero no sale correo: `emailStatus` queda en `not_sent_by_api`. Publica las dos variables juntas: con el secreto y sin `PUBLIC_TURNSTILE_SITE_KEY` en el build, el formulario no muestra el widget y todo envío recibe 403.

No hay límite por IP: una persona podría enviar a direcciones distintas una por una.

## Variables de entorno

Configurar en Vercel:

```bash
AIRTABLE_API_KEY=
AIRTABLE_BASE_ID=
AIRTABLE_ASSESSMENT_TABLE=Assessment Leads
PUBLIC_SITE_URL=https://appsdelsur.cl
BREVO_API_KEY=
TURNSTILE_SECRET_KEY=
PUBLIC_TURNSTILE_SITE_KEY=
ASSESSMENT_EMAIL_FROM=contacto@appsdelsur.cl
```

`AIRTABLE_API_KEY` y `AIRTABLE_BASE_ID` son obligatorias. La tabla predeterminada es `Assessment Leads`. `PUBLIC_SITE_URL` define el dominio del enlace al informe. `BREVO_API_KEY` activa el correo y debe ser de la cuenta Brevo de Apps del Sur. `ASSESSMENT_EMAIL_FROM` debe ser un remitente validado en esa cuenta.

## Airtable

Base y tabla existentes:

- Base: `Apps del Sur - Assessment IA`
- Base ID: `appynnZga36MsKGsh`
- Tabla: `Assessment Leads`
- Table ID: `tblp1mWPUZybHghHg`

El flujo usa los campos existentes:

| Campo | Uso |
| --- | --- |
| Lead ID, Fecha, Nombre, Email, Empresa, Telefono, Sector, Tamano, Region | Identificación y contexto del lead |
| Fuente | Distingue `diagnostico-madurez-ia`, `diagnostico-madurez-digital` y `diagnostico-datos-personales` |
| Urgente | Casilla, solo en datos personales. La calcula el API: sector Salud o Legal, etapa Expuesta, o pregunta 11 con respuesta 1 o 2 |
| Etapa Global, Puntaje Promedio, Puntaje Normalizado, Fortaleza, Prioridad, Brecha Interna | Resultado general |
| Respuestas JSON | Objeto JSON con `assessmentType`, `consentimiento`, `dimensions` y `answers`; contiene los nombres y resultados correctos de cada dimensión para ambos diagnósticos |
| Reporte URL | Enlace al informe HTML persistido |
| Estado CRM | Los nuevos diagnósticos se registran como `Nuevo`. Las columnas históricas de HubSpot no se utilizan ni se eliminan. |
| Estrategia y liderazgo, Personas y cultura, Procesos y operación, Datos y gobernanza, Tecnología e integración | Columnas de dimensión del diagnóstico IA. Para mantenerlas semánticamente correctas, no se reutilizan para madurez digital; sus dimensiones viven en `Respuestas JSON`. |
| Resumen | Resumen entregado por el formulario |

Las columnas recomendadas restantes son `Long text` para dimensiones y respuestas, `URL` para `Reporte URL`, `Number` para puntajes y texto de una línea para los demás campos. Los nombres deben coincidir con el esquema ya creado.

Los informes antiguos que guardaron un array de respuestas en `Respuestas JSON` siguen siendo compatibles. El reporte infiere el tipo desde `Fuente` y toma dimensiones de las columnas antiguas de IA.

## Verificación local

Las pruebas API usan `fetch` simulado y no crean registros en Airtable en servicios externos:

```bash
npm run test:assessment-api
```

Antes de un despliegue, confirmar en el entorno de Vercel que las variables obligatorias tengan valores utilizables, no solo que sus nombres estén configurados.

`GET /api/integrations-health` comprueba solo lectura de Airtable, sin crear registros ni mostrar datos personales o credenciales.
