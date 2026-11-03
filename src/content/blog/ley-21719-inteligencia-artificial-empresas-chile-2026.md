---
title: "Ley 21.719 e IA: qué revisar antes de usar datos de tu empresa"
description: "Privacidad, proveedores y decisiones automatizadas: preguntas para revisar el uso de IA con datos personales en una pyme chilena."
pubDate: 2026-05-18T08:10:00-04:00
updatedDate: 2026-11-03T12:50:00-03:00
author: "Darío Ramírez"
readingTime: "12 min"
heroAlt: "Cuando usas IA, tu empresa sigue respondiendo: tu empresa es responsable, el proveedor de IA suele ser encargado con contrato del artículo 15 bis, y si los datos salen de Chile se requieren garantías del artículo 27"
heroImage: "/blog/ley-21719-ia-flujo-responsabilidad.png"
images:
  - url: "/blog/ley-21719-ia-flujo-responsabilidad.png"
    title: "Ley 21.719 e IA: quién responde por los datos"
    caption: "Tu empresa, el proveedor de IA y la transferencia fuera de Chile, con los artículos que aplican."
tags: ["Ley 21.719", "inteligencia artificial", "IA", "ChatGPT", "Claude", "OpenAI", "Anthropic", "pymes Chile", "cumplimiento", "DPA", "evaluación de impacto", "transferencia internacional", "agentes IA", "WhatsApp", "Santiago", "Maule"]
relatedPosts: ["ley-21719-proteccion-datos-pymes-chile-2026", "ley-21719-datos-sensibles-sectores-chile-2026", "ley-21719-multas-cuanto-arriesga-empresa", "claude-pymes-chile-2026"]
---

> **Actualización, 3 de noviembre de 2026:** revisamos esta guía contra el texto oficial de la ley y corregimos varios puntos, entre ellos la transferencia internacional, la evaluación de impacto y las sanciones. La fecha vigente sigue siendo el 1 de diciembre de 2026. El Senado aprobó postergarla al 15 de octubre de 2027, pero el proyecto (boletín 18.623-07) aún debe pasar por la Cámara y publicarse como ley. Este contenido es informativo y no constituye asesoría legal.

Tu pyme quizá ya usa inteligencia artificial: alguien del equipo pegó la base de clientes en un chat para generar emails, instalaste un agente por WhatsApp o estás evaluando Claude para resumir contratos. En paralelo, la **Ley 21.719** regulará cómo tu empresa trata datos personales, con multas de hasta 20.000 UTM, unos $1.449 millones con la UTM de noviembre de 2026.

La ley no es una ley de IA, pero sí regula lo que pasa cuando un sistema trata datos personales, incluidas las **decisiones automatizadas**. Esta guía es para dueños y dueñas de pymes que ya usan o evalúan usar IA.

> **Resumen ejecutivo:** cuando usas un servicio de IA para tu negocio, tu pyme es **responsable** de los datos que decide tratar, y el proveedor suele actuar como **encargado**. Revisa: (1) contrato con el proveedor, (2) base legal para ese uso, (3) evaluación de impacto si hay alto riesgo, (4) condiciones sobre uso de tus datos para entrenar modelos y (5) intervención humana cuando corresponda. Si los datos salen de Chile, la transferencia necesita un respaldo legal. Las cuentas personales gratuitas no son una buena vía para datos de clientes.

## Lo que regula la Ley 21.719 cuando usas IA

Cuando una pyme usa IA con datos personales, pueden ocurrir tres cosas a la vez:

1. **Tratamiento de datos personales**: nombres, RUT, mensajes, historial. Aplican las reglas generales de base legal, finalidad y proporcionalidad.
2. **Transferencia internacional**: muchos modelos corren en servidores fuera de Chile. Aplican los artículos 27 y 28.
3. **Decisiones automatizadas**: scoring de crédito, evaluación laboral o perfiles con efectos significativos. Aplica el artículo 8° bis, con derecho a explicación, intervención humana y revisión.

Si usas IA para escribir textos sin meter datos personales, esta ley prácticamente no entra en juego. Si la usas para atender clientes, decidir sobre personas o procesar datos sensibles, necesitas revisarlo con cuidado.

## Quién es responsable cuando usas OpenAI, Anthropic o Google

- **Tu pyme es responsable**: decides para qué se usan los datos, y respondes ante la Agencia y ante tus clientes.
- **El proveedor de IA suele ser encargado**: trata datos por cuenta tuya, según tus instrucciones. Si usa los datos para otro objeto sin tu autorización, la ley lo considera responsable por ese tratamiento.

Por eso necesitas un contrato con el contenido que pide el artículo 15 bis. Los proveedores grandes publican acuerdos de tratamiento de datos (DPA):

- [OpenAI: Data Processing Addendum](https://openai.com/policies/data-processing-addendum/)
- [Anthropic: Data Processing Addendum](https://www.anthropic.com/legal/dpa)
- [Google Cloud: Data Processing and Security Terms](https://cloud.google.com/terms/data-processing-addendum)
- [Microsoft: Products and Services Data Protection Addendum](https://www.microsoft.com/licensing/docs/view/Microsoft-Products-and-Services-Data-Protection-Addendum-DPA)

Revisa si el tuyo aplica a tu plan, si requiere aceptación y si cubre lo que pide la ley. Guarda una copia.

## La trampa silenciosa: cuentas personales en uso corporativo

Imagina esta situación: una recepcionista pega la lista de pacientes con sus diagnósticos en un chat de IA para redactar recordatorios personalizados.

Hay tres problemas:

1. **Sin contrato**: una cuenta personal no te da un contrato de encargo con tu empresa.
2. **Posible entrenamiento**: según el plan y la configuración, las conversaciones pueden usarse para mejorar modelos. Revisa las condiciones vigentes.
3. **Datos sensibles**: un diagnóstico es un dato de salud. La regla es consentimiento expreso, y el artículo 16 bis limita además sus fines.

Una vez vigente la ley, según el caso, esto podría ser una infracción grave o incluso gravísima si se hace a sabiendas. La posibilidad de amonestación del primer año para empresas de menor tamaño es una facultad de la Agencia y no vuelve lícita la conducta.

**Qué hacer**:

- Usa un plan empresarial o API con contrato y condiciones claras sobre tus datos, como los de OpenAI o Anthropic.
- Capacita al equipo en qué datos pueden o no usar con IA.
- Deja escrita una política interna de uso de IA.

## Transferencia internacional: los datos salen de Chile

Si tu agente procesa una conversación de WhatsApp en servidores fuera de Chile, revisa las reglas de transferencia internacional. El artículo 27 la permite principalmente en tres casos:

### 1. País con nivel adecuado

La Agencia debe determinar y publicar qué países tienen un nivel adecuado. Como aún no opera, esa lista todavía no existe.

### 2. Cláusulas contractuales u otros instrumentos con garantías adecuadas

Deben contener garantías similares o mayores a las de la ley, incluidos derechos exigibles para las personas. La Agencia podrá aprobar cláusulas modelo. Los DPA de proveedores grandes suelen traer cláusulas para otras regulaciones, como la europea, pero aún no está claro cómo se evaluarán bajo la ley chilena.

### 3. Modelo de cumplimiento o certificación

Con garantías adecuadas. Para grupos empresariales existen además las normas corporativas vinculantes, que requieren aprobación previa de la Agencia. Esta vía rara vez será la de una pyme.

**En la práctica para una pyme**: identifica a dónde van los datos, guarda el contrato, informa la transferencia en tu política (art. 14 ter, letra h) y revisa las cláusulas cuando la Agencia publique sus modelos. Existen excepciones para transferencias específicas y no habituales, como las necesarias para ejecutar un contrato con la persona, pero un agente que opera todos los días difícilmente es "no habitual".

## Decisiones automatizadas: cuándo necesitas evaluación de impacto

El artículo 8° bis da a las personas el derecho a oponerse y a no ser objeto de decisiones basadas en tratamiento automatizado, incluidos perfiles, que produzcan efectos jurídicos o les afecten significativamente. Hay excepciones: si es necesaria para un contrato, si hay consentimiento previo y expreso o si lo señala la ley.

**En todos los casos**, debes asegurar el derecho a información, explicación, intervención humana, a expresar su punto de vista y a pedir revisión.

La evaluación de impacto se exige cuando es probable un alto riesgo, y siempre en los cuatro casos del artículo 15 ter. Mientras la Agencia no publique su lista orientativa, esta tabla es nuestra lectura y no reemplaza una revisión legal:

| Caso de uso | Nivel de atención | Evaluación de impacto |
|---|---|---|
| Agente que responde preguntas frecuentes, sin datos sensibles | Bajo | En principio no |
| Agente que agenda citas en peluquería | Bajo | En principio no |
| Agente que califica leads B2B | Medio | Revisar si decide sobre personas o escala mucho |
| Agente que gestiona cobranza | Alto | Probablemente sí, según el volumen y los efectos |
| Agente que evalúa crédito o seguros | Alto | Probablemente sí |
| Agente que orienta según síntomas | Alto | Probablemente sí, y revisa el art. 16 bis |
| Agente que recomienda contrataciones | Alto | Probablemente sí |
| Scoring de clientes para marketing | Medio-alto | Revisar: perfiles, volumen y efectos |
| Reconocimiento facial o biometría | Muy alto | Probablemente sí, y aplica el art. 16 ter |

La evaluación debe considerar, al menos, la descripción de las operaciones, su finalidad, necesidad y proporcionalidad, los riesgos y las medidas para mitigarlos.

## 5 acciones para usar IA con más orden

### Acción 1: revisa el contrato con cada proveedor

Por cada IA que uses, incluido el motor detrás de tu agente de WhatsApp, ubica el contrato o DPA, confirma que aplica a tu plan y guárdalo.

### Acción 2: informa con claridad a tu cliente

Te recomendamos que el agente se **presente como asistente virtual** en el primer mensaje y ofrezca hablar con una persona. Ejemplo:

> *"Hola, soy Sofía, asistente virtual de la clínica. Atiendo por WhatsApp para agendar tu cita. Tus datos se usan solo para esto y puedes pedirme hablar con una persona en cualquier momento."*

Define la base legal de ese uso. Si después quieres usar los datos para marketing, revisa la base para esa nueva finalidad. La persona siempre puede oponerse al marketing directo.

### Acción 3: haz la evaluación de impacto cuando corresponda

Debe estar lista antes de iniciar el tratamiento de alto riesgo.

### Acción 4: revisa el uso de tus datos para entrenamiento

Confirma en las condiciones vigentes de cada proveedor si usa tus datos para entrenar modelos y cómo desactivarlo. Los planes de API y empresariales de los principales proveedores suelen no entrenar con tus datos por defecto, pero las condiciones cambian y dependen del producto.

### Acción 5: garantiza la derivación a una persona

Para decisiones automatizadas con efectos significativos, la ley exige asegurar la intervención humana. Para el resto es una buena práctica. Configura palabras gatillo (*"hablar con persona", "humano", "reclamo"*) que deriven a tu equipo con el contexto de la conversación.

## Caso práctico: una clínica dental que usa agente IA

**Ejemplo hipotético**: clínica dental en Talca con 2 dentistas. Instala un agente por WhatsApp para agendar citas, recordar y responder consultas básicas.

**Qué debería preparar**:

1. **Inventario**: *"Agendamiento por WhatsApp con agente IA"*, con datos (nombre, RUT, teléfono, servicio), finalidad, base legal, plazo de conservación definido y proveedores.
2. **Cuidado con el "servicio solicitado"**: el motivo de consulta puede revelar datos de salud. Pide solo lo necesario, define el consentimiento expreso cuando corresponda y evita que el agente indague síntomas.
3. **Contratos** con el proveedor de IA y el de WhatsApp.
4. **Información** en el primer mensaje y en la política de privacidad, incluidas las transferencias fuera de Chile.
5. **Evaluación de impacto**: el agente no diagnostica, pero revisa el volumen de datos y si hay datos de salud. Ante la duda, documenta por qué se hizo o no.
6. **Condiciones de entrenamiento**: usa un plan con condiciones claras. No uses cuentas personales.
7. **Derivación a personas**: palabras como *"urgencia", "dolor", "reclamo"* derivan al equipo.
8. **Canal de solicitudes**: un correo como `privacidad@clinica.cl`, con respuesta en 30 días corridos.

## Errores comunes

**1. "Uso una IA gratis, no necesito contrato."** Si pegas datos personales de clientes, ese proveedor los está tratando sin un contrato de encargo que cubra tu uso. Evítalo.

**2. "Mi agente solo agenda citas, no necesita evaluación de impacto."** Puede ser cierto. Verifica si guarda datos sensibles, como motivos médicos, y qué volumen maneja.

**3. "Estoy bajo el régimen de pymes, las multas no aplican."** Falso. Durante los primeros 12 meses de vigencia, la Agencia puede aplicar una amonestación escrita en vez de una multa, pero no está obligada. Las obligaciones aplican desde el primer día.

**4. "Le pedí a una IA que escribiera mi política de privacidad."** Sirve de borrador, pero no sabe qué haces con los datos. Contrástala con [los 12 puntos que exige la ley](/blog/ley-21719-politica-privacidad-que-debe-incluir/).

**5. "Mi proveedor de chatbot dice que cumple."** Pide el contrato por escrito, revisa las transferencias y las condiciones de entrenamiento, y pregunta dónde guarda los registros.

**6. "Probé la IA con datos reales de clientes, después la configuro bien."** Prueba con datos ficticios. Una vez enviados, no siempre puedes controlar dónde quedaron.

## Preguntas frecuentes

### ¿Puedo seguir usando una IA gratis para tareas internas?

Sí, mientras no ingreses datos personales de clientes, trabajadores o proveedores. Para eso, usa un plan con contrato y condiciones adecuadas.

### ¿Claude (Anthropic) es más seguro que ChatGPT (OpenAI) para una pyme chilena?

Depende del plan, de la configuración y de tu caso de uso. Compara contratos, condiciones de entrenamiento, ubicación de los datos y controles de seguridad vigentes. La marca por sí sola no te hace cumplir.

### ¿El agente IA me sirve si todavía no tengo todo el cumplimiento listo?

Puede servir, si avanzas en paralelo y lo pruebas con cuidado. Lo importante es no meter datos sensibles ni decisiones relevantes antes de resolver esos puntos.

### ¿Necesito evaluación de impacto para cada producto de IA?

No. Se exige cuando es probable un alto riesgo y en los casos del artículo 15 ter. La Agencia publicará una lista orientativa.

### ¿Puedo entrenar un modelo con mis propios datos?

Necesitas una base legal para esa finalidad, que puede no ser la misma por la que los recolectaste. Usa datos anonimizados cuando sea posible. Con datos sensibles, revisa también si necesitas consentimiento expreso y evaluación de impacto.

### ¿Y los datos de trabajadores?

También aplican. Si usas IA para evaluar desempeño, seleccionar postulantes o monitorear productividad, revisa la base legal, la información que entregas, la evaluación de impacto y el derecho a intervención humana.

### ¿Qué pasa si soy proveedor de software con IA para otras empresas?

Sueles ser **encargado** de tus clientes. Necesitas contratos adecuados, medidas de seguridad y un aviso al responsable si hay una vulneración. Certificaciones como ISO 27001 o SOC 2 pueden ayudar, pero la ley no las exige como tales.

### ¿Hay fondos públicos para esto?

Depende de cada convocatoria. SERCOTEC CRECE y CORFO Digitalización Pyme pueden apoyar proyectos de digitalización cuando sus bases lo permiten. Ver nuestra [guía de fondos 2026](/blog/fondos-financiamiento-ia-empresas-chile-2026/).

## Fuentes oficiales

- [Ley 21.719, Biblioteca del Congreso Nacional](https://www.bcn.cl/leychile/navegar?idNorma=1209272)
- [Guía práctica de implementación, Secretaría de Gobierno Digital](https://wikiguias.digital.gob.cl/datos-personales/guia-practica-implementacion-nueva-ley-datos-personales)
- [OpenAI Data Processing Addendum](https://openai.com/policies/data-processing-addendum/)
- [Anthropic Data Processing Addendum](https://www.anthropic.com/legal/dpa)
- [Proyecto de Ley de Inteligencia Artificial, MinCiencia](https://www.minciencia.gob.cl/areas/inteligencia-artificial/Inteligencia-Artificial/Proyecto-Ley-regula-sistemas-IA/)

## Siguiente paso: implementar IA con estos puntos resueltos

Si tu pyme ya usa IA o planea hacerlo, conviene ordenar esto antes de escalar. En Apps del Sur diseñamos agentes IA considerando contratos con proveedores, información a las personas, derivación humana y condiciones de uso de datos. La parte técnica la resolvemos nosotros; la legal debe verla un abogado.

**[Hacer el diagnóstico de datos personales →](/diagnostico-datos-personales/?source=blog-ley-21719-ia)**

**[Ver Agente IA de Compliance (SAG, SII, Ley 21.719) →](/agentes/compliance/)**

**[Ver todos los Agentes IA de Apps del Sur →](/agentes/)**

**[Conversar con nosotros por WhatsApp →](https://wa.me/56945262335?text=Hola%2C%20quiero%20implementar%20IA%20cumpliendo%20Ley%2021.719%20en%20mi%20pyme)**

---

*Apps del Sur · GYS Activa SpA · Agentes IA para pymes chilenas en Santiago, Maule, O'Higgins, Ñuble, Biobío, La Araucanía y todo Chile. Este artículo es informativo y no constituye asesoría legal.*
