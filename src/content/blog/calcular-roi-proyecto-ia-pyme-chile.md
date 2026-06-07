---
title: "Cómo calcular el ROI real de un proyecto de IA en una pyme chilena (con calculadora y 3 casos reales)"
description: "Fórmula simple, 4 categorías de valor para medir, 3 ejemplos sectoriales con cifras en CLP, y una plantilla replicable. El ROI real considera el copago neto después del fondo público — no el precio de lista."
pubDate: 2026-05-20
author: "Darío Ramírez"
readingTime: "13 min"
heroAlt: "Calculadora visual de ROI: inversión vs. ahorro anual vs. retorno año 1 de un proyecto de IA en una pyme chilena"
tags: ["ROI", "inteligencia artificial", "IA", "pyme", "Chile", "inversión", "CORFO", "FIA", "SERCOTEC", "calculadora", "Apps del Sur"]
relatedPosts: ["por-que-fallan-proyectos-ia-pymes", "framework-ia-pymes-chile", "cuanto-cuesta-implementar-ia-pyme-chile"]
---

**El error más caro al evaluar un proyecto de IA no es elegir mal la tecnología — es calcular mal el ROI.** Las pymes chilenas que dicen *"no me da el número"* casi siempre están comparando el precio de lista del proyecto contra el ahorro de un año. Mal. Este artículo enseña cómo calcularlo bien, con la fórmula correcta, las 4 categorías de valor que casi nadie suma, y 3 ejemplos reales por sector con cifras en CLP.

> 🎯 Si todavía no sabes en qué etapa está tu pyme, empieza por el [diagnóstico gratuito de 6 minutos](/diagnostico-madurez-ia/). El ROI esperado depende de la etapa de partida — saltar etapas distorsiona los números.

## La fórmula correcta (que casi nadie aplica)

La fórmula básica de ROI es trivial:

> **ROI = (Beneficios − Inversión) / Inversión**

El problema no es la fórmula. El problema son las dos variables: cómo defines *Inversión* y cómo defines *Beneficios*. La mayoría de las pymes calculan mal una o ambas.

### Inversión real ≠ precio de lista

La pregunta que importa no es *"¿cuánto cuesta el proyecto?"* sino *"¿cuánto sale de mi caja?"*. En Chile, donde existen fondos públicos que cubren entre el 60% y el 98% del precio, **el copago real es lo único que debes meter en el denominador**.

<svg viewBox="0 0 700 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Inversión declarada vs. inversión real después del fondo público" style="width:100%;height:auto;margin:1.5rem 0;background:#f0fdf4;border-radius:12px;border:1px solid #d1fae5;">
  <text x="350" y="26" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="700" fill="#064e3b">Lo que ves en la cotización vs. lo que sale de tu caja</text>
  <text x="175" y="55" text-anchor="middle" font-family="system-ui" font-size="11" font-weight="700" fill="#374151">Precio de lista del proyecto</text>
  <rect x="80" y="68" width="190" height="32" rx="5" fill="#e5e7eb" stroke="#9ca3af"/>
  <text x="175" y="89" text-anchor="middle" font-family="system-ui" font-size="14" font-weight="800" fill="#374151">$8.000.000</text>
  <text x="175" y="120" text-anchor="middle" font-family="system-ui" font-size="9" fill="#6b7280">venta única, sin financiamiento</text>
  <text x="525" y="55" text-anchor="middle" font-family="system-ui" font-size="11" font-weight="700" fill="#14532d">Tu copago real (CORFO 60%)</text>
  <rect x="430" y="68" width="190" height="32" rx="5" fill="#dcfce7" stroke="#16a34a"/>
  <text x="525" y="89" text-anchor="middle" font-family="system-ui" font-size="14" font-weight="800" fill="#14532d">$3.200.000</text>
  <text x="525" y="120" text-anchor="middle" font-family="system-ui" font-size="9" fill="#14532d">→ este es el denominador del ROI</text>
</svg>

### Beneficios anuales ≠ solo ahorro de horas

Aquí está el otro error. Casi todas las cotizaciones que recibes mencionan "ahorro de tiempo" como único beneficio. Pero el valor real se compone de **cuatro categorías** que hay que cuantificar por separado:

| Categoría | Qué medir | Cómo cuantificarlo |
|---|---|---|
| **1. Reducción de costos directos** | Horas administrativas eliminadas, errores corregidos, mermas evitadas | Horas × valor/hora + monto de errores corregidos |
| **2. Aumento de ingresos** | Más clientes atendidos, mejor conversión, ventas cruzadas | Δ% × ventas actuales |
| **3. Reducción de riesgo** | Multas evitadas, errores costosos prevenidos, riesgo legal | Probabilidad × impacto |
| **4. Valor estratégico** | Capacidad de postular a fondos mayores, casos de éxito, talento atraído | Difícil de medir — no se mete al ROI, se nota aparte |

**Regla práctica:** suma solo las categorías 1, 2 y 3 al ROI. La categoría 4 se reporta como "valor estratégico adicional" sin pesos asignados — para no inflar el número y perder credibilidad.

## La metodología en 5 pasos (replicable en una hoja de cálculo)

### Paso 1 — Calcula el copago real

Inversión total del proyecto **menos** subsidio del fondo público al que postularás. Si todavía no sabes a qué fondo postular, usa estos estándares conservadores:

- Microempresa (1-9 personas): 80% subsidio (SERCOTEC CRECE o Kit Digital)
- Pequeña (10-49 personas): 60% subsidio (CORFO Digitalización Agro o similar)
- Mediana (50-199 personas): 70% subsidio (FIA Interés Privado)

### Paso 2 — Cuantifica el ahorro en costos directos

Pregunta clave: *"¿Qué horas de qué persona dejarán de gastarse, y cuál es el costo cargado de esa hora?"*

Costo cargado de una hora = (sueldo bruto mensual + leyes sociales 30%) / 180 horas mensuales

**Ejemplo concreto:** administrador con sueldo $1.200.000 → costo cargado por hora = ($1.200.000 × 1,3) / 180 = **$8.666 / hora**.

Si el proyecto le ahorra 2 horas diarias × 250 días = 500 horas/año → **ahorro = $4.333.333 / año**.

### Paso 3 — Cuantifica el aumento de ingresos

Pregunta clave: *"Si pudiera atender 15% más clientes con el mismo equipo, ¿cuánto facturaría adicional?"*

Para una pyme de servicios con $200M/año en ventas, un aumento conservador del 8% en conversión por mejor seguimiento de leads = **$16M adicionales/año**. Cuidado: solo cuenta lo que tiene mecanismo causal claro, no proyecciones aspiracionales.

### Paso 4 — Cuantifica la reducción de riesgo

Pregunta clave: *"¿Qué errores costosos hemos tenido en los últimos 12 meses que la IA habría prevenido?"*

**Ejemplo concreto:** una farmacia que tuvo $2M en mermas el año pasado por mal control de vencimientos. Un sistema de alertas automáticas previene el 70% → **ahorro = $1,4M/año**.

### Paso 5 — Calcula el ROI

```
ROI año 1 = (Ahorro anual total − Copago real) / Copago real
Payback (meses) = (Copago real / Ahorro mensual) 
```

ROI > 1x significa que recuperas la inversión en menos de un año. Para una pyme bien posicionada con fondo público, **lo normal es ROI año 1 entre 1,5x y 4x**.

## Tres casos reales por sector (cifras conservadoras)

### Caso 1 — Viña mediana (50 ha, Maule)

**Situación inicial:** registro de mano de obra en cuadernos, transcripción a Excel, sin trazabilidad por cuartel. Etapa 1 de madurez.

**Proyecto:** cuaderno de campo digital + integración con Rexmas + dashboard de costos por cuartel.

<svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cálculo de ROI para viña mediana: $1,6M de copago genera $5,4M de ahorro anual = ROI 2,4x" style="width:100%;height:auto;margin:1rem 0;">
  <rect width="700" height="200" rx="10" fill="#fffbeb" stroke="#fcd34d"/>
  <text x="350" y="24" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="700" fill="#78350f">VIÑA MEDIANA — 50 ha — Maule</text>
  <!-- Inputs -->
  <text x="30" y="50" font-family="system-ui" font-size="10" font-weight="700" fill="#6b7280">INVERSIÓN</text>
  <text x="30" y="68" font-family="system-ui" font-size="10" fill="#374151">Precio lista: $5,9M</text>
  <text x="30" y="84" font-family="system-ui" font-size="10" fill="#374151">SERCOTEC CRECE (83%): -$4,3M</text>
  <line x1="30" y1="90" x2="180" y2="90" stroke="#374151" stroke-width="1"/>
  <text x="30" y="104" font-family="system-ui" font-size="11" font-weight="800" fill="#14532d">Copago: $1,0M</text>
  <!-- Savings -->
  <text x="250" y="50" font-family="system-ui" font-size="10" font-weight="700" fill="#6b7280">AHORRO ANUAL</text>
  <text x="250" y="68" font-family="system-ui" font-size="10" fill="#374151">-2h/día admin × $8.700/h</text>
  <text x="600" y="68" text-anchor="end" font-family="system-ui" font-size="10" fill="#14532d">$4,3M</text>
  <text x="250" y="84" font-family="system-ui" font-size="10" fill="#374151">Mermas / errores planilla</text>
  <text x="600" y="84" text-anchor="end" font-family="system-ui" font-size="10" fill="#14532d">$0,8M</text>
  <text x="250" y="100" font-family="system-ui" font-size="10" fill="#374151">Optimización jornal/ha</text>
  <text x="600" y="100" text-anchor="end" font-family="system-ui" font-size="10" fill="#14532d">$2,3M</text>
  <line x1="250" y1="106" x2="600" y2="106" stroke="#374151" stroke-width="1"/>
  <text x="250" y="120" font-family="system-ui" font-size="11" font-weight="800" fill="#14532d">Total ahorro/año</text>
  <text x="600" y="120" text-anchor="end" font-family="system-ui" font-size="12" font-weight="800" fill="#16a34a">$7,4M</text>
  <!-- ROI -->
  <rect x="30" y="135" width="640" height="50" rx="6" fill="#064e3b"/>
  <text x="50" y="160" font-family="system-ui" font-size="11" font-weight="700" fill="#a7f3d0">ROI año 1</text>
  <text x="170" y="160" font-family="system-ui" font-size="20" font-weight="800" fill="#fff">7,4x</text>
  <text x="280" y="160" font-family="system-ui" font-size="11" font-weight="700" fill="#a7f3d0">Payback</text>
  <text x="380" y="160" font-family="system-ui" font-size="20" font-weight="800" fill="#fff">2 meses</text>
  <text x="510" y="160" font-family="system-ui" font-size="11" font-weight="700" fill="#a7f3d0">Año 2-5</text>
  <text x="600" y="160" font-family="system-ui" font-size="20" font-weight="800" fill="#fff">$7,4M/año</text>
  <text x="350" y="178" text-anchor="middle" font-family="system-ui" font-size="9" fill="#a7f3d0">cifras conservadoras · supuestos auditables</text>
</svg>

**Notas del cálculo:**
- 50 ha × ~5% de gestión más eficiente = $2,3M en optimización del jornal/hectárea (sobre $46M de mano de obra anual).
- Las mermas son históricas: la viña tuvo $1,2M de errores en planilla en el año previo (pagos duplicados, asistencias mal registradas). 70% prevenibles.

### Caso 2 — Farmacia independiente (Curicó)

**Situación inicial:** POS Bsale + planilla Excel de mermas separada. Inventario y vencimientos sin alertas. Etapa 2 de madurez.

**Proyecto:** integración POS-inventario-vencimientos + asistente IA para receta digital y consultas frecuentes.

<svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cálculo de ROI para farmacia: $2,8M de copago genera $9,6M de ahorro anual" style="width:100%;height:auto;margin:1rem 0;">
  <rect width="700" height="200" rx="10" fill="#eff6ff" stroke="#93c5fd"/>
  <text x="350" y="24" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="700" fill="#1e3a8a">FARMACIA INDEPENDIENTE — Curicó</text>
  <text x="30" y="50" font-family="system-ui" font-size="10" font-weight="700" fill="#6b7280">INVERSIÓN</text>
  <text x="30" y="68" font-family="system-ui" font-size="10" fill="#374151">Precio lista: $7,0M</text>
  <text x="30" y="84" font-family="system-ui" font-size="10" fill="#374151">CORFO Digit. (60%): -$4,2M</text>
  <line x1="30" y1="90" x2="180" y2="90" stroke="#374151" stroke-width="1"/>
  <text x="30" y="104" font-family="system-ui" font-size="11" font-weight="800" fill="#14532d">Copago: $2,8M</text>
  <text x="250" y="50" font-family="system-ui" font-size="10" font-weight="700" fill="#6b7280">AHORRO ANUAL</text>
  <text x="250" y="68" font-family="system-ui" font-size="10" fill="#374151">Mermas por vencimientos (-70%)</text>
  <text x="600" y="68" text-anchor="end" font-family="system-ui" font-size="10" fill="#14532d">$1,4M</text>
  <text x="250" y="84" font-family="system-ui" font-size="10" fill="#374151">Consultas resueltas por IA</text>
  <text x="600" y="84" text-anchor="end" font-family="system-ui" font-size="10" fill="#14532d">$3,6M</text>
  <text x="250" y="100" font-family="system-ui" font-size="10" fill="#374151">+8% conversión venta cruzada</text>
  <text x="600" y="100" text-anchor="end" font-family="system-ui" font-size="10" fill="#14532d">$4,6M</text>
  <line x1="250" y1="106" x2="600" y2="106" stroke="#374151" stroke-width="1"/>
  <text x="250" y="120" font-family="system-ui" font-size="11" font-weight="800" fill="#14532d">Total ahorro/año</text>
  <text x="600" y="120" text-anchor="end" font-family="system-ui" font-size="12" font-weight="800" fill="#16a34a">$9,6M</text>
  <rect x="30" y="135" width="640" height="50" rx="6" fill="#064e3b"/>
  <text x="50" y="160" font-family="system-ui" font-size="11" font-weight="700" fill="#a7f3d0">ROI año 1</text>
  <text x="170" y="160" font-family="system-ui" font-size="20" font-weight="800" fill="#fff">2,4x</text>
  <text x="280" y="160" font-family="system-ui" font-size="11" font-weight="700" fill="#a7f3d0">Payback</text>
  <text x="380" y="160" font-family="system-ui" font-size="20" font-weight="800" fill="#fff">4 meses</text>
  <text x="510" y="160" font-family="system-ui" font-size="11" font-weight="700" fill="#a7f3d0">Año 2-5</text>
  <text x="600" y="160" font-family="system-ui" font-size="20" font-weight="800" fill="#fff">$9,6M/año</text>
  <text x="350" y="178" text-anchor="middle" font-family="system-ui" font-size="9" fill="#a7f3d0">cifras conservadoras · supuestos auditables</text>
</svg>

**Notas del cálculo:**
- $3,6M en consultas resueltas: 30 consultas/día × $40 ahorro promedio × 300 días = $360K/mes en tiempo del químico farmacéutico liberado. Ese tiempo se reinvierte en ventas asistidas.
- 8% más conversión sobre ventas anuales de $58M = $4,6M. Mecanismo causal: tiempo libre del químico → mejor atención → más cross-selling con receta.

### Caso 3 — Funeraria familiar (Talca)

**Situación inicial:** servicios anotados en cuaderno físico, sin facturación electrónica, coordinación por WhatsApp. Etapa 1 de madurez.

**Proyecto plan 24 meses:** Año 1 Kit Digital (facturación electrónica) + sistema operativo. Año 2 IA en atención al cliente.

<svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cálculo de ROI para funeraria: $0,25M de copago genera $4,3M de ahorro anual" style="width:100%;height:auto;margin:1rem 0;">
  <rect width="700" height="200" rx="10" fill="#f5f3ff" stroke="#c4b5fd"/>
  <text x="350" y="24" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="700" fill="#4c1d95">FUNERARIA FAMILIAR — Talca · Año 1</text>
  <text x="30" y="50" font-family="system-ui" font-size="10" font-weight="700" fill="#6b7280">INVERSIÓN</text>
  <text x="30" y="68" font-family="system-ui" font-size="10" fill="#374151">Precio lista: $5,25M</text>
  <text x="30" y="84" font-family="system-ui" font-size="10" fill="#374151">SERCOTEC CRECE (95%): -$5,0M</text>
  <line x1="30" y1="90" x2="180" y2="90" stroke="#374151" stroke-width="1"/>
  <text x="30" y="104" font-family="system-ui" font-size="11" font-weight="800" fill="#14532d">Copago: $0,25M</text>
  <text x="250" y="50" font-family="system-ui" font-size="10" font-weight="700" fill="#6b7280">AHORRO ANUAL</text>
  <text x="250" y="68" font-family="system-ui" font-size="10" fill="#374151">-3h/día coordinador × $7.500/h</text>
  <text x="600" y="68" text-anchor="end" font-family="system-ui" font-size="10" fill="#14532d">$5,6M</text>
  <text x="250" y="84" font-family="system-ui" font-size="10" fill="#374151">Reducción errores presupuesto</text>
  <text x="600" y="84" text-anchor="end" font-family="system-ui" font-size="10" fill="#14532d">$1,2M</text>
  <text x="250" y="100" font-family="system-ui" font-size="10" fill="#374151">+20% servicios sin más personal</text>
  <text x="600" y="100" text-anchor="end" font-family="system-ui" font-size="10" fill="#14532d">$4,8M</text>
  <line x1="250" y1="106" x2="600" y2="106" stroke="#374151" stroke-width="1"/>
  <text x="250" y="120" font-family="system-ui" font-size="11" font-weight="800" fill="#14532d">Total ahorro/año</text>
  <text x="600" y="120" text-anchor="end" font-family="system-ui" font-size="12" font-weight="800" fill="#16a34a">$11,6M</text>
  <rect x="30" y="135" width="640" height="50" rx="6" fill="#064e3b"/>
  <text x="50" y="160" font-family="system-ui" font-size="11" font-weight="700" fill="#a7f3d0">ROI año 1</text>
  <text x="170" y="160" font-family="system-ui" font-size="20" font-weight="800" fill="#fff">45x</text>
  <text x="280" y="160" font-family="system-ui" font-size="11" font-weight="700" fill="#a7f3d0">Payback</text>
  <text x="380" y="160" font-family="system-ui" font-size="20" font-weight="800" fill="#fff">1 mes</text>
  <text x="510" y="160" font-family="system-ui" font-size="11" font-weight="700" fill="#a7f3d0">Año 2-5</text>
  <text x="600" y="160" font-family="system-ui" font-size="20" font-weight="800" fill="#fff">$11,6M/año</text>
  <text x="350" y="178" text-anchor="middle" font-family="system-ui" font-size="9" fill="#a7f3d0">Etapa 1 → 2 · alto subsidio público</text>
</svg>

**Notas del cálculo:**
- ROI de 45x parece exagerado pero es típico cuando la pyme está en Etapa 1 y el fondo público cubre el 95%. **El verdadero efecto es que el proyecto se hace** — sin fondo, $5,25M habría sido inviable y los $11,6M de ahorro nunca se habrían capturado.
- Este es el patrón clave: en Etapa 1, el ROI sobre copago es astronómico porque el copago es minúsculo. Sin el fondo, el ROI sobre el precio de lista sería 2,2x — también bueno, pero el proyecto rara vez ocurre porque "$5M es mucha plata".

## Cuatro errores comunes al calcular el ROI

### Error 1 — Comparar contra el precio de lista, no contra el copago

Ya lo cubrimos arriba, pero merece énfasis. Si tu proveedor te cotiza $8M y le aplicas un subsidio del 60%, **tu copago es $3,2M — ese es el número que va al denominador**. El ROI calculado sobre precio de lista te muestra una rentabilidad 2,5x peor de la real.

### Error 2 — Solo sumar ahorro de horas

Es la categoría más fácil de cuantificar, por eso todos la usan. Pero suele representar menos del 40% del valor real. Si no sumas reducción de errores, aumento de conversión y prevención de riesgos, **subestimas el ROI a la mitad**.

### Error 3 — Aplicar el ahorro solo al año 1

El ahorro es recurrente: año tras año. Una pyme que recupera la inversión en mes 5 sigue ahorrando los próximos 4-5 años. **El valor presente neto a 5 años suele ser 4-8x el ROI año 1.**

<svg viewBox="0 0 700 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ROI año 1 vs ROI a 5 años: el valor acumulado" style="width:100%;height:auto;margin:1rem 0;">
  <text x="350" y="22" text-anchor="middle" font-family="system-ui" font-size="11" font-weight="700" fill="#1e293b">El ahorro es recurrente — el ROI a 5 años es lo que importa</text>
  <line x1="50" y1="100" x2="650" y2="100" stroke="#cbd5e1" stroke-width="1"/>
  <!-- Year 1 -->
  <rect x="80" y="70" width="80" height="30" fill="#dcfce7" stroke="#16a34a"/>
  <text x="120" y="89" text-anchor="middle" font-family="system-ui" font-size="11" font-weight="700" fill="#14532d">2,4x</text>
  <text x="120" y="115" text-anchor="middle" font-family="system-ui" font-size="9" font-weight="600" fill="#6b7280">Año 1</text>
  <!-- Year 2 -->
  <rect x="180" y="50" width="80" height="50" fill="#bbf7d0" stroke="#16a34a"/>
  <text x="220" y="78" text-anchor="middle" font-family="system-ui" font-size="11" font-weight="700" fill="#14532d">5x</text>
  <text x="220" y="115" text-anchor="middle" font-family="system-ui" font-size="9" font-weight="600" fill="#6b7280">Año 2</text>
  <!-- Year 3 -->
  <rect x="280" y="35" width="80" height="65" fill="#86efac" stroke="#16a34a"/>
  <text x="320" y="71" text-anchor="middle" font-family="system-ui" font-size="11" font-weight="700" fill="#14532d">7,5x</text>
  <text x="320" y="115" text-anchor="middle" font-family="system-ui" font-size="9" font-weight="600" fill="#6b7280">Año 3</text>
  <!-- Year 4 -->
  <rect x="380" y="25" width="80" height="75" fill="#4ade80" stroke="#16a34a"/>
  <text x="420" y="66" text-anchor="middle" font-family="system-ui" font-size="11" font-weight="700" fill="#fff">10x</text>
  <text x="420" y="115" text-anchor="middle" font-family="system-ui" font-size="9" font-weight="600" fill="#6b7280">Año 4</text>
  <!-- Year 5 -->
  <rect x="480" y="18" width="80" height="82" fill="#22c55e" stroke="#16a34a"/>
  <text x="520" y="62" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="800" fill="#fff">12,5x</text>
  <text x="520" y="115" text-anchor="middle" font-family="system-ui" font-size="9" font-weight="600" fill="#6b7280">Año 5</text>
  <text x="640" y="60" text-anchor="end" font-family="system-ui" font-size="9" font-style="italic" fill="#6b7280">acumulado</text>
</svg>

### Error 4 — Ignorar el costo de oportunidad

Postergar 12 meses un proyecto que rinde $9M/año significa $9M perdidos. Sumar esto al análisis te ayuda a decidir mejor entre *"hago el proyecto ahora"* vs. *"espero al próximo año"*.

## Plantilla replicable (cópiala a tu hoja de cálculo)

Esta es la plantilla mínima viable. 12 celdas, 4 fórmulas. Hazlo en Google Sheets o Excel.

```
A. INVERSIÓN
A1. Precio de lista del proyecto         [ingresar CLP]
A2. % subsidio del fondo público         [ingresar % esperado]
A3. Copago real = A1 × (1 - A2)          [fórmula]

B. AHORRO ANUAL POR CATEGORÍA
B1. Costos directos (horas + errores)    [ingresar CLP/año]
B2. Aumento de ingresos                  [ingresar CLP/año]
B3. Reducción de riesgo                  [ingresar CLP/año]
B4. Total = B1 + B2 + B3                 [fórmula]

C. INDICADORES
C1. ROI año 1 = (B4 − A3) / A3           [fórmula]
C2. Payback en meses = A3 / (B4 / 12)    [fórmula]
C3. ROI 5 años = (B4 × 5 − A3) / A3      [fórmula]
C4. Valor estratégico                    [descripción cualitativa, sin CLP]
```

**Regla de validación:** si C1 < 1,0x, el proyecto está mal diseñado o el fondo está mal elegido. Antes de tirarlo, revisa si te falta sumar una categoría de beneficio o si hay un fondo público con mayor cofinanciamiento.

## ROI esperado por etapa de madurez

Una herramienta útil para calibrar expectativas: el ROI esperable depende fuertemente de la etapa de partida.

| Etapa de partida | Tipo de proyecto típico | Copago típico | ROI año 1 esperable |
|---|---|---|---|
| **Etapa 1** → 2 | Digitalización básica + Kit Digital o CRECE | $250K - $1M | 5x - 50x |
| **Etapa 2** → 3 | Integración + dashboards + CORFO Digit. | $2M - $4M | 2x - 5x |
| **Etapa 3** → 4 | IA aplicada + agentes + FIA / Crea y Valida | $4M - $25M | 1,5x - 3x |

**Lectura:** los ROI más altos están en los primeros saltos (Etapa 1 → 2) porque (a) hay mucha eficiencia pendiente y (b) el subsidio es altísimo. A medida que la pyme madura, los ROI son más modestos pero las bases son más grandes — y el valor estratégico empieza a pesar más.

## Cómo presentar el ROI a tu directorio o socio

Tres reglas:

1. **Muestra el copago, no el precio de lista.** Es el número que importa.
2. **Desagrega los beneficios en las 4 categorías.** Suma transparente, no aspiracional.
3. **Compáralo con el escenario de no hacer nada.** ¿Cuánto pierdes en horas, errores y oportunidades si pospones 12 meses?

Una buena diapositiva de ROI tiene exactamente 4 números: copago, ahorro anual, payback en meses, ROI a 5 años. Si necesitas más números, estás complicando el mensaje.

## Preguntas frecuentes

### ¿Qué pasa si todavía no tengo identificado el fondo público?

Usa los estándares conservadores: 60% para CORFO, 80% para SERCOTEC CRECE, 80% para FIA. Si el ROI sale positivo incluso con esos supuestos, el proyecto es robusto. Si no, ajusta el alcance o pospón hasta tener un fondo viable.

### ¿Cuál es el ROI mínimo razonable para aprobar un proyecto?

Para una pyme, **ROI año 1 ≥ 1,5x y payback < 12 meses** es el umbral. Bajo eso, el proyecto compite con otras inversiones que tu pyme podría hacer (más inventario, contratación, etc.) y suele perder.

### ¿Por qué los proveedores nunca me muestran este cálculo?

Porque muchos venden la herramienta antes que el método. El cálculo de ROI bien hecho requiere conocer tu negocio en detalle — no se hace en una propuesta comercial estándar. En Apps del Sur lo entregamos como parte del Sprint de Diagnóstico Profundo (Fase 1 del framework).

### ¿Cómo cuantifico el valor estratégico?

No lo cuantifiques en CLP. Lístalo como nota cualitativa al lado del ROI: "capacidad de postular a FIA en año 2", "atrae talento más calificado", "caso de éxito para gremio". Los directorios sofisticados leen esto, pero no debe entrar en el número del ROI o pierdes credibilidad.

### ¿El ROI cambia mucho según el sector?

Sí. Sectores con mucha mano de obra repetitiva (agro, retail, servicios) tienen ROI más altos en ahorro de costos directos. Sectores con mucho cliente (farmacias, salud, hotelería) tienen ROI más altos en aumento de ingresos. Sectores regulados (salud, alimentos, finanzas) tienen ROI altos en reducción de riesgo.

## Cierre

El ROI bien calculado **es el mejor antídoto contra los 6 errores que matan los proyectos de IA**. Si el número sale negativo, hay algo mal diseñado — o el proyecto no debería hacerse. Si sale positivo y sólido, **tienes el argumento para defender la inversión interna y para postular el fondo público**.

---

> **¿Quieres que calculemos juntos el ROI para tu pyme?** Toma el [diagnóstico gratuito de 6 minutos](/diagnostico-madurez-ia/) primero — los resultados nos dan la base para una conversación productiva. Después agenda una llamada de 30 minutos sin costo desde [Contacto](/#contacto) y revisamos los números de tu caso específico.

**Fuentes y supuestos:**

- Bases CORFO, FIA y SERCOTEC 2026 (porcentajes de cofinanciamiento por instrumento).
- Costo cargado promedio de hora laboral en pymes chilenas: cálculo propio basado en sueldo bruto + 30% leyes sociales / 180 horas mensuales.
- Casos sectoriales: pipeline comercial Apps del Sur en Maule, O'Higgins y Ñuble (2026), cifras anonimizadas y promediadas.
- *A Future That Works* — McKinsey Global Institute (rangos de impacto en costos operativos por industria).
