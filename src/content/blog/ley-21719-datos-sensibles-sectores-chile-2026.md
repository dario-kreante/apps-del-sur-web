---
title: "Datos sensibles bajo Ley 21.719: guía sectorial 2026 para clínicas, estudios jurídicos, financieras, funerarias, retail y turismo en Chile"
description: "Guía sectorial 2026 para empresas chilenas que manejan datos sensibles bajo Ley 21.719: salud (clínicas dentales, médicas), legal (estudios jurídicos), financiero (cobranza, créditos), funerario (cuota mortuoria), retail y turismo. Obligaciones específicas, EIPD, consentimiento reforzado y agentes IA. Santiago, Maule, O'Higgins y todo Chile."
pubDate: 2026-05-18T08:20:00-04:00
author: "Darío Ramírez"
readingTime: "14 min"
heroAlt: "Infografía Ley 21.719 datos sensibles por sector en Chile 2026: salud, legal, financiero, funerario, retail, turismo con obligaciones específicas y agentes IA"
heroImage: "/blog/ley-21719-datos-sensibles-sectores-chile-2026.svg"
images:
  - url: "/blog/ley-21719-datos-sensibles-sectores-chile-2026.svg"
    title: "Ley 21.719 — Datos sensibles por sector en Chile 2026"
    caption: "Cumplimiento sectorial con agentes IA: salud, legal, financiero, funerario, retail, turismo."
tags: ["Ley 21.719", "datos sensibles", "salud", "clínicas dentales", "estudios jurídicos", "cobranza", "funerario", "cuota mortuoria", "retail", "turismo", "pymes Chile", "Santiago", "Maule", "EIPD", "agentes IA"]
relatedPosts: ["ley-21719-proteccion-datos-pymes-chile-2026", "ley-21719-inteligencia-artificial-empresas-chile-2026", "agente-ia-agendamiento-clinicas-dentales-chile", "agente-ia-turismo-hoteles-restaurantes-tour-operadores-chile"]
---

No todos los datos personales tienen el mismo peso bajo la **Ley 21.719**. La ley distingue entre **datos comunes** (nombre, RUT, email, teléfono, historial de compra) y **datos sensibles**, que tienen un régimen reforzado: consentimiento expreso, medidas de seguridad reforzadas y, en muchos casos, **Evaluación de Impacto en Protección de Datos (EIPD) obligatoria** antes de iniciar el tratamiento.

Para una pyme chilena que automatiza con IA, conocer qué sector estás y qué dato sensible manejas marca la diferencia entre cumplir bien o exponerte a multas de hasta **20.000 UTM (~$1.480 millones de pesos)**.

Esta guía recorre los 6 sectores donde más vemos uso de IA con datos sensibles: salud, legal, financiero, funerario, retail y turismo. Cada uno con sus obligaciones específicas y cómo configurar un agente IA correctamente.

> **Resumen ejecutivo:** la Ley 21.719 (art. 2) define como datos sensibles aquellos que se refieren a salud, biometría, origen étnico o racial, creencias religiosas o filosóficas, ideología, afiliación sindical, vida sexual, geolocalización precisa, y datos de niños, niñas y adolescentes (NNA). Su tratamiento requiere **consentimiento expreso**, **medidas de seguridad reforzadas** y, para tratamiento masivo o de alto riesgo, **EIPD obligatoria**. Las multas por incumplimiento llegan a 20.000 UTM. Las pymes tienen 12 meses de gracia (dic 2026 – dic 2027) con amonestación en vez de multa.

## Qué es un "dato sensible" bajo la Ley 21.719

El artículo 2 letra g) de la Ley 21.719 los define:

> *"Datos personales sensibles: aquellos referidos a características físicas o morales de las personas o a hechos o circunstancias de su vida privada o intimidad, tales como los relativos al origen racial o étnico, las opiniones políticas, las convicciones religiosas o filosóficas, los datos biométricos y de salud, los relativos a la vida sexual y orientación sexual, los datos de la niñez y adolescencia, los relativos a la situación socioeconómica..."*

Implicaciones operativas:

1. **Consentimiento expreso** (no basta la aceptación implícita o por contexto).
2. **Medidas de seguridad reforzadas**: cifrado en tránsito y en reposo, control de accesos por roles, logs auditables.
3. **EIPD obligatoria** si el tratamiento es masivo o de alto riesgo.
4. **Prohibición de tratamiento** en ciertos contextos (publicidad dirigida basada en salud, por ejemplo).
5. **Transferencia internacional** sujeta a salvaguardas más estrictas.

Veamos qué significa esto en cada sector.

## Sector 1: salud — clínicas dentales, médicas, isapres, laboratorios

**Datos sensibles típicos**: diagnósticos, tratamientos, recetas, exámenes, alergias, antecedentes familiares, datos de salud mental, embarazo, discapacidades.

### Obligaciones específicas

- **Consentimiento expreso por escrito** (físico o digital con autenticación clara) antes de iniciar tratamiento del dato.
- **Historia clínica** = dato sensible: cifrado obligatorio, acceso solo a profesional tratante y personal autorizado.
- **EIPD obligatoria** si tratas masivamente datos clínicos o usas IA para apoyo clínico.
- **Plazos de conservación** definidos por la ley sanitaria chilena ([Reglamento de la Ficha Clínica](https://www.bcn.cl/leychile/navegar?idNorma=1051397) y Ley 20.584 de Derechos del Paciente).
- **Prohibición** de usar diagnósticos para publicidad dirigida.

### Cómo configurar un agente IA en salud

Lo que un agente IA en clínica chilena **sí puede hacer**:

- Agendar citas y recordar.
- Responder preguntas administrativas (precios, convenios isapres, horarios, ubicación).
- Solicitar documentos.
- Derivar a recepción humana.

Lo que **no debe hacer**:

- Dar diagnósticos.
- Interpretar exámenes.
- Recomendar medicación.
- Conversar sobre síntomas en detalle.
- Reutilizar datos para marketing sin nuevo consentimiento separado.

Más sobre implementación práctica en nuestro post de [Agente IA de agendamiento para clínicas dentales en Chile](/blog/agente-ia-agendamiento-clinicas-dentales-chile/) y la landing [/agentes/agendamiento](/agentes/agendamiento).

## Sector 2: legal — estudios jurídicos, abogados independientes, áreas legales internas

**Datos sensibles típicos**: información de causas (especialmente penal, familia, alimentos, violencia intrafamiliar, identidad de género, salud), antecedentes patrimoniales, comunicaciones cliente-abogado, identidad de testigos, datos de NNA en juicios.

### Obligaciones específicas

- **Secreto profesional** + Ley 21.719 actúan en simultáneo. Cumplir ambos.
- **Consentimiento expreso** para tratamiento + para uso de IA en revisión de documentos.
- **DPA con cualquier IA** que use el estudio (Claude, GPT, herramientas de e-discovery).
- **Datos de NNA en juicio**: protección reforzada, prohibido publicar identidad.
- **Auditoría del Colegio de Abogados**: el estudio debe demostrar trazabilidad.

### Cómo configurar un agente IA en estudio jurídico

Lo que un agente IA en estudio chileno **sí puede hacer**:

- Atender consulta inicial (calificación de caso).
- Redactar NDA, cartas formales, mandatos básicos, contratos tipo (con revisión del abogado antes de firmar).
- Resumir documentos legales largos.
- Vigilar plazos de causas en la [Oficina Judicial Virtual](https://oficinajudicialvirtual.pjud.cl/).
- Agendar reuniones.

Lo que **no debe hacer**:

- Dar opiniones legales vinculantes.
- Decidir estrategia procesal.
- Comunicarse con contraparte sin autorización.
- Procesar casos de violencia intrafamiliar, abuso, identidad de género o NNA sin handoff humano inmediato.

Ver landing [/agentes/abogados](/agentes/abogados).

## Sector 3: financiero — cobranza, créditos, seguros, fintech

**Datos sensibles típicos**: historial de deuda, scoring crediticio, ingreso real, situación patrimonial detallada, datos de cobranza judicializada, datos de salud para seguros.

### Obligaciones específicas

- **Decisión automatizada con efectos significativos** (otorgar/denegar crédito, fijar prima de seguro) **requiere derecho explícito a revisión humana**.
- **EIPD obligatoria** para scoring crediticio masivo.
- **CMF** (Comisión para el Mercado Financiero) fiscaliza adicionalmente bajo Ley 21.521 (Fintech).
- **Boletín Comercial** y **DICOM**: tratamiento de deuda regulado por Ley 20.575 además de 21.719.
- **Cobranza ética**: horarios, frecuencia, tono respetuoso (Ley 19.496 del Consumidor + ahora 21.719).

### Cómo configurar un agente IA financiero

Lo que un agente IA en cobranza/crédito **sí puede hacer**:

- Notificar deudas en horarios hábiles.
- Negociar planes de pago dentro de parámetros definidos.
- Generar links de pago.
- Recordatorios de vencimientos.
- Atención al cliente para consultas básicas (saldo, próximo vencimiento).

Lo que **no debe hacer**:

- Tomar decisión final de crédito sin humano.
- Aplicar prácticas agresivas de cobranza.
- Llamar en horario nocturno o fines de semana sin solicitud.
- Compartir datos de deuda con terceros no autorizados.
- Usar datos de salud para fijar prima sin consentimiento expreso y EIPD.

## Sector 4: funerario — funerarias, cementerios, seguros de vida

**Datos sensibles típicos**: datos del causante (incluido RUT, AFP, historia previsional), datos de la familia en duelo, causa de fallecimiento (en algunos casos), beneficiarios.

### Obligaciones específicas

- **Consentimiento de la familia** debe ser claro a pesar del contexto emocional.
- **Datos del causante**: técnicamente, los datos de personas fallecidas tienen un tratamiento especial (la Ley 21.719 protege "datos de personas naturales identificadas o identificables", y el régimen post-mortem se regula vía derechos de la familia).
- **Consulta a spensiones.cl** (Superintendencia de Pensiones) para cuota mortuoria: debe hacerse con consentimiento de quien tramita.
- **No reutilizar datos** del fallecido o de la familia para marketing (ej: ofertas de seguros, cementerios) sin consentimiento separado y posterior al duelo.

### Cómo configurar un agente IA en funeraria

Lo que un agente IA en funeraria **sí puede hacer**:

- Orientar sobre cuota mortuoria (verificar AFP/régimen, listar documentos, plazos).
- Recibir consultas de servicios funerarios.
- Coordinar visita o llamada con un asesor humano.
- Solicitar reseña post-servicio (con tiempo prudente y opt-out claro).

Lo que **no debe hacer**:

- Sonar comercial o agresivo con familia en duelo.
- Compartir datos del fallecido con terceros (cementerios, seguros) sin autorización.
- Reutilizar la base para marketing masivo sin consentimiento posterior al servicio.
- Tomar decisiones sobre reclamos o casos delicados — siempre handoff humano.

Ver landing [/agentes/cuota-mortuoria](/agentes/cuota-mortuoria) (powered by motor Lucerna, que consulta en vivo contra spensiones.cl con consentimiento explícito de la familia).

## Sector 5: retail y e-commerce

**Datos sensibles potenciales**: geolocalización precisa, biometría (reconocimiento facial en tiendas físicas), historial de compra correlacionable con orientación sexual o religión (libros, ropa, alimentos), datos de NNA si la tienda vende productos infantiles.

### Obligaciones específicas

- **Carrito + historial de compra** = datos personales **comunes** (no sensibles per se), pero el **perfilamiento profundo** puede caer en categoría sensible.
- **Geolocalización precisa** (GPS, no solo "Santiago") = dato sensible. Apps de delivery, retail con tracking de cliente.
- **Marketing dirigido** requiere consentimiento separado y específico (no enterrado en T&C).
- **Opt-out fácil** obligatorio en cada comunicación.
- **Sernac** fiscaliza adicionalmente bajo Ley 19.496 del Consumidor.
- **Cookies y tracking web**: aviso claro + consentimiento, similar a GDPR.

### Cómo configurar un agente IA retail

Ver landing [/agentes/whatsapp-atencion](/agentes/whatsapp-atencion). Lo que el agente puede hacer:

- Atender consultas (tracking, FAQ, stock).
- Recomendar productos (con base en historial, con consentimiento).
- Generar links de pago.
- Manejar devoluciones simples.
- Rescatar carritos abandonados (con consentimiento de marketing).

Lo que no debe hacer:

- Vender datos del cliente a terceros.
- Hacer perfilamiento de hábitos sensibles (creencias, salud) sin consentimiento expreso.
- Enviar mensajes promocionales sin opt-in claro.

## Sector 6: turismo — hoteles, hostales, cabañas, tour operadores

**Datos sensibles potenciales**: pasaporte, datos de pago internacionales, geolocalización, preferencias alimentarias (a veces revelan religión o salud), datos de NNA en familias.

### Obligaciones específicas

- **Pasaporte/RUT/email del huésped** = dato personal común, pero el **registro de pasajeros** que pide la ley turística chilena (DT 1.094 y normas Sernatur) genera obligación legal de tratamiento.
- **Huéspedes extranjeros** = transferencia internacional cuando se sincroniza con OTAs (Booking, Airbnb, Hostelworld) ubicados fuera de Chile.
- **Geolocalización** (apps turísticas con tracking, beacons en hotel) = sensible.
- **Preferencias alimentarias** especiales (vegano, kosher, halal, sin gluten médico) pueden revelar creencias religiosas o salud — pedir con consentimiento y separar.
- **Plazos de conservación** según SII y normativa Sernatur.

### Cómo configurar un agente IA turístico

Ver landing [/agentes/whatsapp-atencion](/agentes/whatsapp-atencion) y [/agentes/agendamiento](/agentes/agendamiento). El agente puede:

- Cotizar y reservar.
- Confirmar y enviar voucher.
- Recomendar actividades de la zona.
- Atender en español, inglés y portugués.
- Recordar check-in y solicitar reseña post-estadía.

Lo que no debe hacer:

- Compartir datos del huésped con OTAs sin contrato de encargado.
- Geolocalizar al huésped dentro del hotel sin consentimiento.
- Vender datos a publicistas locales o tour operadores aliados sin autorización.

Más detalles en nuestro post de [Agente IA para hoteles, hostales y restaurantes en Chile](/blog/agente-ia-turismo-hoteles-restaurantes-tour-operadores-chile/).

## Checklist universal para tratar datos sensibles con IA en cualquier sector

Si tu pyme cae en alguno de los sectores anteriores y usa o quiere usar IA, antes del 1 de diciembre de 2026:

- [ ] Identifica qué dato sensible exacto procesas y por qué.
- [ ] Documenta base legal (consentimiento expreso suele ser la única vía válida para sensible).
- [ ] Verifica que tu agente IA tiene DPA firmado con el proveedor (OpenAI, Anthropic, Google).
- [ ] Configura opt-out de entrenamiento del proveedor IA.
- [ ] Habilita handoff humano garantizado.
- [ ] Realiza EIPD si el tratamiento es masivo o de alto riesgo.
- [ ] Implementa cifrado en tránsito (TLS) y reposo (AES-256 mínimo).
- [ ] Control de acceso por roles + autenticación multifactor (MFA).
- [ ] Logs auditables de quién accedió a qué dato cuándo.
- [ ] Procedimiento ARCO documentado (correo `privacidad@tuempresa.cl`).
- [ ] Capacita al equipo en buenas prácticas con datos sensibles.
- [ ] Designa DPO interno o externo si aplica.

## Errores comunes en datos sensibles (que veo cada semana)

**1. Subir historias clínicas a ChatGPT cuenta personal para resumir.** Falta clínica grave. Migra a API + DPA + anonimización previa.

**2. Estudio jurídico que comparte borradores de demanda con identificación del cliente vía email no cifrado.** Riesgo de filtración. Usa carpetas cifradas + intercambio vía PMS legal.

**3. Funeraria que usa la base de fallecidos para vender lápidas o seguros sin consentimiento de la familia.** Tratamiento ilegal post-mortem. Pide consentimiento separado, posterior al servicio.

**4. Tienda online con beacon de geolocalización en su app sin consentimiento explícito.** Sensible. Aviso + opt-in obligatorio.

**5. Hotel que comparte preferencias alimentarias del huésped con su agencia de marketing.** Si la preferencia revela salud o religión, es sensible y requiere consentimiento separado.

**6. Cobranza que llama o escribe en horarios nocturnos a deudores.** Práctica antiética + sensible (situación socioeconómica). Aplica horario hábil y tono respetuoso.

## Preguntas frecuentes

### ¿La situación socioeconómica es dato sensible?

Sí. La Ley 21.719 lo define expresamente como sensible. Tratamiento (scoring, cobranza, ofertas dirigidas a estratos) requiere consentimiento + EIPD.

### ¿Los datos de personas fallecidas siguen estando protegidos?

Sí, indirectamente, a través de derechos de la familia. No puedes reutilizar libremente datos del fallecido sin consentimiento de los herederos. Aplica especialmente al sector funerario y a seguros de vida.

### ¿Las imágenes de CCTV de mi negocio son dato sensible?

Las imágenes en sí son datos personales (identifican a personas). Si capturas biometría facial procesable, son sensibles. CCTV con aviso visible y plazo de conservación corto (30-60 días típico) es manejable.

### ¿Puedo usar IA para analizar reseñas de clientes (opiniones)?

Sí, con limitaciones. Opiniones políticas, religiosas o de salud que aparezcan en reseñas son sensibles. Anonimiza antes de procesar o ten consentimiento.

### ¿Las preferencias alimentarias siempre son sensibles?

No siempre. *"Soy vegano por elección"* es preferencia, no sensible. *"Soy vegano por motivos religiosos"* o *"sin gluten por enfermedad celíaca"* sí pueden ser sensibles (revelan creencia o salud). En la duda, trata como sensible y pide consentimiento separado.

### ¿Mis empleados tienen los mismos derechos que mis clientes?

Sí. La relación laboral no exime de la Ley 21.719. Datos de salud laboral (licencias, accidentes), evaluaciones de desempeño, monitoreo de productividad: todo aplica.

### ¿La biometría para control de asistencia laboral está permitida?

Sí, pero requiere consentimiento expreso del trabajador + EIPD + medidas reforzadas. La Dirección del Trabajo se ha pronunciado sobre la voluntariedad del trabajador para sistemas biométricos.

### ¿Cómo manejar datos de NNA en mi negocio (colegio, pediatría, ropa infantil)?

Régimen reforzado: consentimiento del padre/madre/tutor, no perfilamiento publicitario, no transferencia a terceros sin autorización expresa. EIPD obligatoria si el tratamiento es masivo.

## Fuentes oficiales

- [Ley 21.719 — Biblioteca del Congreso Nacional](https://www.bcn.cl/leychile/navegar?idNorma=1209272)
- [Ley 20.584 de Derechos del Paciente — BCN](https://www.bcn.cl/leychile/navegar?idNorma=1039348)
- [Ley 20.575 Tratamiento de Datos de Carácter Económico — BCN](https://www.bcn.cl/leychile/navegar?idNorma=1037506)
- [Ley 19.496 del Consumidor (Sernac) — BCN](https://www.bcn.cl/leychile/navegar?idNorma=61438)
- [Ley 21.521 Fintech (CMF) — BCN](https://www.bcn.cl/leychile/navegar?idNorma=1184323)
- [Guía Práctica Ley 21.719 — Gobierno Digital](https://wikiguias.digital.gob.cl/datos-personales/guia-practica-implementacion-nueva-ley-datos-personales)

## Siguiente paso: agente IA por sector con cumplimiento desde el día 1

Si tu pyme está en uno de estos 6 sectores y maneja datos sensibles, el momento correcto para implementar IA con cumplimiento es ahora. En Apps del Sur diseñamos agentes IA específicos por vertical, con DPA firmados, EIPD documentada, handoff humano garantizado y consentimiento integrado en el flujo conversacional.

**[Ver Agente IA de Compliance regulatorio →](/agentes/compliance)**

**[Ver Agente IA para Clínicas Dentales (agendamiento) →](/agentes/agendamiento)**

**[Ver Agente IA Legal para Abogados →](/agentes/abogados)**

**[Ver Agente IA de Cuota Mortuoria (funerario) →](/agentes/cuota-mortuoria)**

**[Ver Agente IA Atención WhatsApp (retail/turismo) →](/agentes/whatsapp-atencion)**

**[Diagnosticar la madurez IA y de datos de mi pyme (gratis · 6 min) →](/diagnostico-madurez-ia/?source=blog-ley-21719-sectores)**

**[Conversar con nosotros por WhatsApp →](https://wa.me/56945262335?text=Hola%2C%20quiero%20asesor%C3%ADa%20en%20datos%20sensibles%20Ley%2021.719%20para%20mi%20sector)**

---

*Apps del Sur · GYS Activa SpA · Agentes IA con cumplimiento sectorial Ley 21.719 para pymes chilenas en Santiago, Maule, O'Higgins, Ñuble, Biobío, La Araucanía y todo Chile. Este artículo es informativo, no constituye asesoría legal.*
