---
title: "Ley 21.719 + IA en Chile 2026: cómo cumplir cuando usas ChatGPT, Claude o agentes IA en tu pyme"
description: "Guía 2026 para pymes chilenas que usan inteligencia artificial: cómo cumplir la Ley 21.719 con OpenAI, Anthropic, Google y agentes IA por WhatsApp. DPA, transferencia internacional, EIPD, opt-out de entrenamiento, decisiones automatizadas. Para empresas en Santiago, Maule, O'Higgins, Ñuble, Biobío y todo Chile."
pubDate: 2026-05-18T08:10:00-04:00
author: "Darío Ramírez"
readingTime: "13 min"
heroAlt: "Diagrama Ley 21.719 e inteligencia artificial en empresas chilenas: flujo de datos hacia OpenAI Anthropic Google, transferencia internacional, DPA, EIPD y 5 acciones de cumplimiento para pymes"
heroImage: "/blog/ley-21719-ia-cumplimiento-pymes-chile-2026.svg"
images:
  - url: "/blog/ley-21719-ia-cumplimiento-pymes-chile-2026.svg"
    title: "Ley 21.719 e inteligencia artificial en pymes chilenas: cumplimiento paso a paso"
    caption: "Flujo de datos desde tu pyme a OpenAI/Anthropic/Google y las 5 acciones mínimas para cumplir la Ley 21.719."
tags: ["Ley 21.719", "inteligencia artificial", "IA", "ChatGPT", "Claude", "OpenAI", "Anthropic", "pymes Chile", "cumplimiento", "DPA", "EIPD", "transferencia internacional", "agentes IA", "WhatsApp", "Santiago", "Maule"]
relatedPosts: ["ley-21719-proteccion-datos-pymes-chile-2026", "ley-21719-datos-sensibles-sectores-chile-2026", "framework-ia-pymes-chile", "claude-pymes-chile-2026"]
---

Tu pyme ya usa inteligencia artificial: alguien del equipo pegó la base de clientes en ChatGPT para generar emails, instalaste un agente IA por WhatsApp para atender consultas, conectaste un copiloto en Excel para categorizar facturas, o estás evaluando implementar Claude para resumir contratos. En paralelo, el **1 de diciembre de 2026 entra en vigencia la Ley 21.719**, que regula con dientes (multas hasta 20.000 UTM ≈ $1.480M CLP) cómo tu empresa trata datos personales en Chile.

La intersección de ambos es el **"doble desafío"**: usar IA bien, sin romper la ley. Y a diferencia de la regulación europea (donde el AI Act y el GDPR son piezas distintas), en Chile la Ley 21.719 cubre tanto la protección de datos como las **decisiones automatizadas** de los sistemas IA. Es decir: tu agente IA y los datos que procesa están bajo el mismo marco.

Esta guía es para dueños y dueñas de pymes chilenas que ya usan o evalúan usar IA. Sin tecnicismos innecesarios. Con los pasos concretos para cumplir.

> **Resumen ejecutivo:** cuando usas un servicio IA (ChatGPT, Claude, Gemini, Mistral, agente WhatsApp), tu pyme es **responsable de tratamiento** y el proveedor IA es **encargado**. Necesitas: (1) DPA firmado con el proveedor, (2) consentimiento informado del cliente final, (3) EIPD si la IA toma decisiones con impacto en personas, (4) opt-out de entrenamiento configurado, (5) handoff humano garantizado. Los servidores de OpenAI/Anthropic/Google están en EE.UU., así que cae **transferencia internacional** y se exige mecanismo formal de salvaguarda. Las cuentas personales gratuitas de ChatGPT no sirven para datos de clientes — necesitas API o plan Business/Enterprise.

## El "doble desafío" Ley 21.719 + IA

Cuando una pyme chilena usa IA con datos personales, ocurren simultáneamente tres cosas que la Ley 21.719 regula:

1. **Tratamiento de datos personales**: nombres, RUT, mensajes, historial. Cubierto por reglas generales (consentimiento, finalidad, minimización).
2. **Transferencia internacional**: los modelos corren en servidores fuera de Chile (típicamente EE.UU.). Cubierto por el artículo 27 y siguientes — exige mecanismo de salvaguarda.
3. **Decisiones automatizadas con impacto en personas**: scoring de crédito, triaje médico, evaluación laboral, recomendaciones de productos personalizadas. Cubierto por reglas de transparencia + derecho del titular a pedir revisión humana.

Si tu pyme solo usa IA "para escribir emails" sin meter datos de clientes, el riesgo es bajo. Si la usas para atender clientes (agente WhatsApp), tomar decisiones (scoring, cobranza, segmentación) o procesar datos sensibles (salud, financiero), el riesgo es alto y necesitas hacer las cosas bien.

## Quién es responsable cuando usas OpenAI / Anthropic / Google

Bajo la Ley 21.719:

- **Tu pyme = responsable de tratamiento.** Decides para qué usas los datos. Eres tú quien responde ante la Agencia y ante el cliente.
- **El proveedor IA (OpenAI, Anthropic, Google, Mistral) = encargado de tratamiento.** Procesa datos por cuenta tuya, según tus instrucciones.

Esto importa: si el proveedor falla (por ejemplo, una filtración masiva como la que tuvo OpenAI en marzo de 2023 con historial de conversaciones), la primera responsable ante tus clientes chilenos es tu pyme. Por eso necesitas un **DPA (Data Processing Agreement)** firmado con cada proveedor IA que uses.

DPAs públicos disponibles:

- [OpenAI — Data Processing Addendum](https://openai.com/policies/data-processing-addendum/)
- [Anthropic — Data Processing Addendum](https://www.anthropic.com/legal/dpa)
- [Google Cloud — Data Processing and Security Terms](https://cloud.google.com/terms/data-processing-addendum)
- [Microsoft (Azure OpenAI) — Data Protection Addendum](https://www.microsoft.com/licensing/docs/view/Microsoft-Products-and-Services-Data-Protection-Addendum-DPA)

Localízalos, fírmalos digitalmente y archívalos. Toma 5 minutos por proveedor.

## La trampa silenciosa: cuentas personales de ChatGPT en uso corporativo

Veo esto en el 80% de las pymes chilenas que entrevisto:

> "Mi recepcionista pegó la lista de pacientes con sus diagnósticos en ChatGPT para que le ayude a redactar recordatorios personalizados."

Tres problemas legales graves:

1. **Cuenta personal de ChatGPT** = no hay DPA con tu empresa. Estás compartiendo datos personales con un encargado sin contrato.
2. **OpenAI entrena con conversaciones de cuentas personales por defecto.** Tus datos pueden quedar en futuras versiones del modelo.
3. **Diagnósticos médicos = dato sensible.** Requiere consentimiento expreso del paciente para procesarlo con IA en servidores extranjeros.

Resultado: la pyme está violando la Ley 21.719 sin saberlo. Cuando entre en vigencia con multas (diciembre 2027 para pymes), esto es una infracción gravísima.

**Solución correcta**:

- Migrar a **ChatGPT Business / Enterprise** o **API de OpenAI** (no entrenan con tus datos por defecto + tienen DPA empresarial).
- O alternativamente **Claude for Work / Claude API** (Anthropic, misma lógica).
- Capacitar al equipo en qué datos pueden o no usar con IA.
- Política interna escrita de uso de IA.

## Transferencia internacional: los datos salen de Chile

Cuando tu agente IA procesa una conversación de WhatsApp con un cliente chileno, los datos viajan a servidores en Estados Unidos, Irlanda, Frankfurt o Singapur. Eso es **transferencia internacional**.

La Ley 21.719 exige que para esa transferencia exista un mecanismo legal de salvaguarda. Las 3 vías más usadas para pymes:

### 1. Decisión de adecuación de país

Si el país destino tiene un nivel de protección comparable a Chile y la Agencia lo reconoce. Probablemente la UE, Reino Unido, Canadá, Japón, Israel.

### 2. Cláusulas contractuales tipo (CCT)

Cláusulas pre-aprobadas que el responsable y el encargado firman, comprometiéndose a estándares chilenos. La mayoría de DPAs de proveedores grandes (OpenAI, Anthropic, AWS, Google) incluyen versiones de estas cláusulas.

### 3. Reglas corporativas vinculantes (BCR)

Para grupos empresariales multinacionales. No aplica a la mayoría de pymes chilenas.

**En la práctica para una pyme**: firma el DPA del proveedor (que ya incluye cláusulas tipo), documenta la lista de transferencias y guárdalo en tu registro de actividades. No necesitas más en versión inicial.

## Decisiones automatizadas: cuándo necesitas EIPD

La Ley 21.719 establece que toda persona tiene derecho a **no ser objeto de decisiones basadas únicamente en tratamiento automatizado** que produzcan efectos jurídicos o le afecten significativamente.

Esto es directamente aplicable a IA. Tu pyme necesita:

1. **Informar** que hay tratamiento automatizado.
2. **Permitir revisión humana** al titular que la pida.
3. **EIPD obligatoria** antes de implementar si el caso es de alto riesgo.

Ejemplos de **alto riesgo** que requieren EIPD:

| Caso de uso | Riesgo | EIPD obligatoria |
|---|---|---|
| Agente WhatsApp que responde FAQ | Bajo | No |
| Agente que agenda citas en peluquería | Bajo | No |
| Agente que califica leads B2B | Medio | Recomendada |
| Agente que cobra deuda (genera flujos cobranza) | Alto | Sí |
| Agente que evalúa crédito o seguros | Alto | Sí |
| Agente que triaja síntomas médicos | Alto | Sí |
| Agente que recomienda contrataciones | Alto | Sí |
| Sistema de scoring de clientes con marketing dirigido | Medio-alto | Sí |
| Reconocimiento facial / biometría | Muy alto | Sí + medidas reforzadas |

Una **EIPD** documenta: qué dato se trata, qué riesgo genera para los titulares, qué medidas mitigan el riesgo, cómo se garantiza revisión humana. Es un documento de 5-15 páginas según complejidad. Un DPO o consultor en protección de datos lo prepara en 5-15 horas.

## Las 5 acciones mínimas para usar IA cumpliendo Ley 21.719

### Acción 1: firma DPA con cada proveedor IA

Por cada IA que uses (OpenAI, Anthropic, Google, Mistral, Hugging Face, o el motor detrás de tu agente WhatsApp), descarga el DPA, fírmalo, archiva. Es gratis y toma 5 min.

### Acción 2: consentimiento informado al cliente final

Si el cliente conversa con un agente IA, el agente debe **presentarse como asistente virtual** en el primer mensaje y permitir oposición. Ejemplo:

> *"Hola, soy Sofía, asistente virtual de la clínica. Atiendo por WhatsApp para agendar tu cita. Tus datos se usan solo para esto y puedes pedirme hablar con una persona en cualquier momento."*

Si vas a guardar el dato para marketing posterior, eso necesita consentimiento separado y explícito.

### Acción 3: EIPD para casos de alto riesgo

Si tu IA toma decisiones con impacto significativo en personas, prepara la EIPD antes del lanzamiento. La Agencia publicará listas orientativas durante 2026.

### Acción 4: opt-out de entrenamiento

Configura en cada proveedor que **no usen tus datos para entrenar modelos**. En OpenAI: usar API o ChatGPT Enterprise (no entrenan por defecto), o desactivar en *Settings → Data Controls* en planes gratuitos (aunque no es suficiente para uso corporativo). En Anthropic: Claude API y Claude for Work no entrenan por defecto. En Google: Vertex AI Enterprise no entrena.

### Acción 5: handoff humano garantizado

El cliente puede pedir hablar con una persona en cualquier momento. Tu agente IA debe tener palabras gatillo configuradas (*"hablar con persona", "humano", "agente real", "reclamo"*) que escalen inmediatamente a tu equipo, con todo el contexto previo.

## Caso práctico: una clínica dental que usa agente IA

**Situación**: clínica dental en Talca con 2 dentistas, atiende 180 pacientes/mes. Instala agente IA por WhatsApp para agendar citas, recordar y responder consultas básicas.

**Lo que necesita preparar antes del 1 de diciembre de 2026**:

1. **Registro de actividad**: *"Agendamiento y atención por WhatsApp con agente IA"* — qué datos (nombre, RUT, teléfono, servicio solicitado), finalidad (agendar y recordar), base legal (consentimiento + contrato de prestación), retención (3 años post-última-visita), encargados (OpenAI/Anthropic + WhatsApp Business API).
2. **DPA** firmados con OpenAI/Anthropic + Meta (WhatsApp).
3. **Texto de consentimiento** en primer mensaje del agente + casilla en formulario web *"Acepto el uso de mis datos para agendamiento. Puedo solicitar eliminación en cualquier momento escribiendo a privacidad@clinica.cl"*.
4. **EIPD**: como el agente NO diagnostica (solo agenda y deriva), el riesgo es medio. Recomendable hacer una EIPD ligera (5 páginas) que documente que el agente no toma decisiones clínicas.
5. **Opt-out de entrenamiento**: usar OpenAI API o ChatGPT Enterprise. No usar cuentas personales.
6. **Handoff humano**: configurar palabras gatillo (*"urgencia", "dolor", "reclamo", "hablar con dentista"*) que escalen inmediatamente al equipo en horario laboral.
7. **Política de privacidad** en el sitio web actualizada con sección IA.
8. **Procedimiento ARCO**: correo `privacidad@clinica.cl` con respuesta en 30 días.

**Tiempo total**: 8-15 horas de trabajo del responsable + 2-4 horas de un DPO externo o consultor. Costo: $300K-800K CLP, mucho menos que una multa.

## Errores comunes (que veo cada semana)

**1. "Uso ChatGPT gratis, no necesito DPA."** Falso. Si pegas datos personales de clientes en ChatGPT, necesitas DPA. La cuenta personal gratuita NO sirve para uso corporativo con datos.

**2. "Mi agente IA solo agenda citas, no necesita EIPD."** Para agendamiento simple, correcto. Pero verifica si guarda datos sensibles (motivos médicos, preferencias religiosas, etc.) — si los guarda, sube el riesgo.

**3. "Estoy bajo el régimen de pymes, las multas no aplican."** Aplican desde diciembre 2027 (12 meses después de la vigencia). Antes de eso, amonestación escrita. Pero las obligaciones aplican desde el día 1.

**4. "Le pedí a ChatGPT que escribiera mi política de privacidad."** Mal punto de partida: muchas políticas generadas por IA copian formato GDPR europeo, no Ley 21.719 chilena. Ajusta con asesoría local.

**5. "Mi proveedor de chatbot dice que cumple."** Verifica: pide el DPA por escrito, lee la sección de transferencias internacionales, confirma que tiene opt-out de entrenamiento, pregunta dónde guarda los logs (¿servidores en Chile, EE.UU., Europa?). No te quedes con la palabra.

**6. "Probé la IA con datos reales de clientes, después la voy a configurar bien."** El daño ya está hecho. Los datos pueden estar en el log del modelo o en entrenamiento. Mejor probar con datos ficticios.

## Preguntas frecuentes

### ¿Puedo seguir usando ChatGPT gratis para tareas internas?

Sí, mientras NO pegues datos personales de clientes, empleados o proveedores. Para uso con datos reales, migra a planes Business/Enterprise o API.

### ¿Claude (Anthropic) es más seguro que ChatGPT (OpenAI) para una pyme chilena?

Ambos tienen DPA, ambos cumplen estándares similares. Las diferencias prácticas: Anthropic no entrena con tus datos por defecto en sus planes pagos (mayor garantía out-of-the-box); OpenAI ofrece más integraciones nativas y plugins. Ambos válidos.

### ¿El agente IA me sirve si todavía no tengo todo el cumplimiento listo?

Sí, pero implementa **simultáneamente** el cumplimiento. Tienes hasta el 1 de diciembre de 2026 para fase obligatoria, y 12 meses adicionales como pyme con amonestación en vez de multa. Pero empieza ya.

### ¿Necesito EIPD para cada producto IA que use?

No, solo para tratamientos de alto riesgo. Para casos rutinarios (agendamiento, FAQ, WhatsApp básico), el registro de actividad y consentimiento son suficientes. La Agencia publicará listas orientativas.

### ¿Puedo entrenar un modelo con mis propios datos?

Sí, pero: (1) necesitas base legal clara, (2) datos deben estar anonimizados o seudonimizados cuando sea posible, (3) si entrenas con datos sensibles requiere consentimiento expreso y EIPD, (4) modelo resultante hereda obligaciones del dato de origen.

### ¿Y los datos de empleados? ¿También aplican?

Sí. Si usas IA para evaluación de desempeño, scoring de candidatos, monitoreo de productividad o análisis de comunicaciones laborales, aplica la Ley 21.719 completa. La relación laboral es contrato, base legal, pero requiere transparencia, EIPD y derecho a revisión humana.

### ¿Qué pasa si soy proveedor de software IA para otras empresas?

Eres **encargado de tratamiento** de tus clientes. Necesitas: DPA estándar para ofrecer, certificaciones (ISO 27001, SOC 2), políticas de seguridad documentadas, capacidad de responder ARCO cuando los clientes lo pidan.

### ¿Hay fondos públicos para cumplir Ley 21.719 + IA?

Sí. SERCOTEC CRECE y CORFO Digitalización Pyme pueden cubrir software de cumplimiento + agente IA en un mismo proyecto. Ver nuestra [guía de fondos 2026](/blog/fondos-financiamiento-ia-empresas-chile-2026/).

## Fuentes oficiales

- [Ley 21.719 — Biblioteca del Congreso Nacional](https://www.bcn.cl/leychile/navegar?idNorma=1209272)
- [Guía Práctica de implementación — Secretaría de Gobierno Digital](https://wikiguias.digital.gob.cl/datos-personales/guia-practica-implementacion-nueva-ley-datos-personales)
- [OpenAI Data Processing Addendum](https://openai.com/policies/data-processing-addendum/)
- [Anthropic Data Processing Addendum](https://www.anthropic.com/legal/dpa)
- [Proyecto de Ley de Inteligencia Artificial — MinCiencia](https://www.minciencia.gob.cl/areas/inteligencia-artificial/Inteligencia-Artificial/Proyecto-Ley-regula-sistemas-IA/)

## Siguiente paso: implementar IA con cumplimiento desde el día 1

Si tu pyme ya usa IA o planea hacerlo, el momento correcto para hacer las cosas bien es **ahora**, no en noviembre 2026. En Apps del Sur diseñamos agentes IA que cumplen Ley 21.719 desde el primer día: DPA firmados, EIPD documentada, consentimiento integrado, handoff humano y opt-out de entrenamiento. Sin que tengas que ser experto legal.

**[Ver Agente IA de Compliance (SAG, SII, Ley 21.719) →](/agentes/compliance)**

**[Ver todos los Agentes IA de Apps del Sur →](/agentes/)**

**[Diagnosticar la madurez IA y de datos de mi pyme (gratis · 6 min) →](/diagnostico-madurez-ia/?source=blog-ley-21719-ia)**

**[Conversar con nosotros por WhatsApp →](https://wa.me/56945262335?text=Hola%2C%20quiero%20implementar%20IA%20cumpliendo%20Ley%2021.719%20en%20mi%20pyme)**

---

*Apps del Sur · GYS Activa SpA · Agentes IA con cumplimiento Ley 21.719 para pymes chilenas en Santiago, Maule, O'Higgins, Ñuble, Biobío, La Araucanía y todo Chile. Este artículo es informativo, no constituye asesoría legal.*
