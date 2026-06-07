# Diagnostico de madurez IA - CRM y Airtable

Este flujo captura cada lead del assessment en tres lugares:

1. Email a Dario: alerta inmediata cuando alguien completa el formulario.
2. Airtable: base gestionable con lead, puntajes, respuestas y link de reporte.
3. HubSpot: contacto/empresa y, opcionalmente, deal para seguimiento comercial.

## Variables de entorno

Configurar en Vercel o entorno de deploy:

```bash
AIRTABLE_API_KEY=
AIRTABLE_BASE_ID=
AIRTABLE_ASSESSMENT_TABLE=Assessment Leads
HUBSPOT_PRIVATE_APP_TOKEN=
HUBSPOT_OWNER_ID=
HUBSPOT_DEAL_PIPELINE=
HUBSPOT_DEAL_STAGE=
ASSESSMENT_NOTIFY_EMAIL=dramirez.gysactiva@gmail.com
PUBLIC_SITE_URL=https://appsdelsur.cl
```

`HUBSPOT_DEAL_PIPELINE` y `HUBSPOT_DEAL_STAGE` son opcionales. Si no existen, el endpoint sincroniza Contact y Company, pero no crea Deal.

## Airtable

Base creada:

- Base: `Apps del Sur - Assessment IA`
- Base ID: `appynnZga36MsKGsh`
- Tabla: `Assessment Leads`
- Table ID: `tblp1mWPUZybHghHg`

Campos recomendados:

| Campo | Tipo |
| --- | --- |
| Lead ID | Single line text |
| Fecha | Date with time |
| Nombre | Single line text |
| Email | Email |
| Empresa | Single line text |
| Telefono | Phone number |
| Sector | Single select o single line text |
| Tamano | Single select o single line text |
| Region | Single select o single line text |
| Fuente | Single line text |
| Etapa Global | Single line text |
| Puntaje Promedio | Number |
| Puntaje Normalizado | Single line text |
| Fortaleza | Single line text |
| Prioridad | Single line text |
| Brecha Interna | Number |
| Reporte URL | URL |
| HubSpot Contact ID | Single line text |
| HubSpot Company ID | Single line text |
| HubSpot Deal ID | Single line text |
| Estado CRM | Single select |
| Estrategia y liderazgo | Long text |
| Personas y cultura | Long text |
| Procesos y operación | Long text |
| Datos y gobernanza | Long text |
| Tecnología e integración | Long text |
| Respuestas JSON | Long text |
| Resumen | Long text |

El endpoint guarda el `Reporte URL` con formato:

```text
https://appsdelsur.cl/api/assessment-report?id=<airtable_record_id>
```

Ese link renderiza un reporte HTML desde el registro Airtable.

## HubSpot

Crear un Private App token con permisos CRM para:

- Contacts: read/write
- Companies: read/write
- Deals: read/write si se usaran deals

El endpoint:

- busca contacto por email y lo actualiza o crea;
- busca empresa por nombre y la actualiza o crea;
- crea deal solo si existen `HUBSPOT_DEAL_PIPELINE` y `HUBSPOT_DEAL_STAGE`;
- guarda los IDs de HubSpot de vuelta en Airtable.

## Email (FormSubmit)

FormSubmit **no acepta llamadas server-side** desde Vercel. La notificación por correo se dispara desde el navegador (`public/diagnostico-app.js`) después de un submit CRM exitoso.

La primera vez que se usa un destinatario en FormSubmit, hay que **activar el formulario** desde el correo de confirmación que envía FormSubmit a `ASSESSMENT_NOTIFY_EMAIL`.

## Fallback

Si el endpoint `/api/assessment-submit` falla o faltan variables de entorno, el formulario usa el envio tradicional a FormSubmit para que Dario reciba el lead por email y no se pierda la conversion.
