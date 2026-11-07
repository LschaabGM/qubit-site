# Sentinel — Draft de contenido y layout

Draft del 05/11/2026. **Todo el texto sale de los 5 brochures** que están en `~/Downloads`:
- `Sentinel Brochure.pdf` (general)
- `Brochure SCADA para Calderas Qubit.pptx`
- `Brochure SCADA Torres y Condensadores Qubit.pptx`
- `Brochure SCADA Bombas y Tanques Qubit.pptx`
- `Brochure Osmosis Inversa Qubit.pptx`

Lo que no está en los brochures se marca **[PLACEHOLDER]** o **[CONFIRMAR]**. Reglas de marca del sitio que se mantienen: esquinas a 90°, fondo oscuro, violeta de marca, Audiowide solo en H1, Work Sans para texto, Saira para cifras, Material Symbols Outlined 300.

---

## Estructura de URLs

```
/sentinel/                      ← landing principal (hub)
/sentinel/calderas/
/sentinel/torres-y-condensadores/
/sentinel/bombas-y-tanques/
/sentinel/osmosis-inversa/
```

## Cómo se enlazan (propuesta)

1. **Hub → aplicaciones:** sección «Aplicaciones» de la principal con el layout alternado (imagen | texto + botón), una fila por brochure. Es la referencia que mandó Luly.
2. **Aplicación → hub:** breadcrumb arriba (`Sentinel › Calderas`) y botón «Ver todo Sentinel» al final.
3. **Aplicación → aplicación:** franja «Otras aplicaciones de Sentinel» antes del contacto, con las otras 3 en tarjetas chicas.
4. **Aplicación → precios:** link a `/sentinel/#precios` (pedido de Alejo).
5. **Home → hub:** la tarjeta de Sentinel en Home linkea a `/sentinel/` (pedido de Alejo).

---

# PARTE 1 · Landing principal `/sentinel/`

### 1. Hero — layout: texto a la izquierda, captura del panel a la derecha
- Eyebrow: **QUBIT IOT**
- H1: **Sentinel**
- Bajada: **Visibilidad y control de planta en tiempo real, desde cualquier lugar.**
- Texto de apoyo: Sentinel se integra a los PLC y sensores que ya tenés. Monitoreás y controlás la planta sin modificar el proceso productivo, y la IA te avisa cuándo intervenir antes de que haya una falla.
- Botón principal: **Pedí tu relevamiento técnico** → `#contacto`
- Botón secundario: **Ver aplicaciones** → `#aplicaciones`
- Imagen: captura del panel (brochure general, pág. 4: «Panel General — Monitoreo Eléctrico»). [PLACEHOLDER hasta tener la imagen exportada]

### 2. Franja de datos rápidos — layout: 4 columnas con ícono, sin cifras inventadas
- **Compatible con tu equipamiento**: PLC, sensores y protocolos estándar de la industria.
- **Alarmas por correo o SMS**: aviso inmediato ante cualquier anomalía.
- **Desde cualquier dispositivo**: PC, tablet o teléfono.
- **Multi-sitio**: todas tus plantas en un mismo panel.

### 3. Desafíos → solución — layout: dos columnas comparativas («Sin Sentinel» gris / «Con Sentinel» violeta) con flecha entre filas
- Eyebrow: EL PROBLEMA
- H2: **Cómo Sentinel resuelve los desafíos de tu planta**
- Bajada: Cada desafío operativo, resuelto por una funcionalidad concreta de la plataforma.

| Sin Sentinel | Con Sentinel |
|---|---|
| **Detección tardía de fallas.** El daño se identifica cuando la máquina o el proceso ya fue afectado. | **Alarmas automáticas.** Aviso inmediato por correo o SMS ante cualquier anomalía, anticipando fallas. |
| **Sin visibilidad remota.** El estado de los equipos solo se conoce estando en planta. | **Control y monitoreo remoto.** El estado de la planta en tiempo real, desde cualquier dispositivo. |
| **Pérdida de trazabilidad.** La información operativa no queda registrada ni es consultable. | **Historial y auditoría.** Registro completo de eventos y variables auditables. |
| **Decisiones sin datos objetivos.** Sin información concreta, es más difícil anticipar problemas. | **Reportes automáticos.** Datos centralizados y un reporte diario de las variables. |
| **Dashboards genéricos.** Pantallas estándar que no representan cómo es tu proceso. | **SCADA con el sinóptico de tu planta.** Tanques, bombas y válvulas tal como están en planta. |

### 4. Funcionalidades — layout: bento (una tarjeta grande con la captura + 4 tarjetas chicas)
- H2: **Funcionalidades que van más allá del dashboard**
- Bajada: Accionás los equipos en tiempo real desde el mismo panel donde monitoreás tu planta.
- Tarjeta grande: **Todo lo que necesitás para operar tu planta, en una sola pantalla.** [Captura del panel]
- **Control remoto de equipos**: encendé, apagá o ajustá parámetros desde cualquier lugar.
- **Sinóptico de la planta**: diagramas de tanques, bombas y válvulas, tal como están en tu proceso real.
- **Multi-sitio**: todas tus plantas o ubicaciones en un mismo panel.
- **Compatible con tu equipamiento**: se integra con PLC, sensores y protocolos estándar.

### 5. IA — layout: bloque destacado de fondo violeta oscuro, 2×2
- Eyebrow: INTELIGENCIA ARTIFICIAL
- H2: **IA aplicada al mantenimiento de tu planta**
- Bajada: La IA analiza los datos que Sentinel ya recolecta, sin sensores ni integraciones adicionales.
- **Predicción de fallas**: anticipa cuándo una variable va a superar un límite crítico, antes de que pase.
- **Mantenimiento predictivo**: calcula la salud de cada equipo y avisa cuando empieza a degradarse.
- **Detección de anomalías**: identifica desvíos del comportamiento normal en tiempo real.
- **IA a tu servicio**: preguntale a la IA sobre tus datos y obtené respuestas al instante.

### 6. Cómo funciona: S·E·N·T — layout: 4 pasos horizontales con la letra gigante (Audiowide) como protagonista
- H2: **SENTinel: cuatro capas que trabajan juntas**
- **S · Sensorización**: sensores que miden lo que necesitás: temperatura, presión, nivel, caudal o conductividad.
- **E · Edge**: un controlador en planta procesa los datos al instante y acciona los equipos.
- **N · Nube**: la plataforma reúne toda la información y la presenta en una sola pantalla.
- **T · Toma de decisiones**: la IA analiza el historial, anticipa fallas y sugiere cuándo intervenir.
- Cierre: Las cuatro capas trabajan integradas sobre los equipos y los instrumentos que ya están en planta.

> Este es el momento de marca más fuerte de los brochures: el nombre del producto explica cómo funciona.

### 7. Aplicaciones — layout ALTERNADO (referencia de Luly): imagen | texto + botón, invirtiendo en cada fila
- Eyebrow: APLICACIONES
- H2: **Un Sentinel para cada equipo crítico**
- Bajada: Cada aplicación tiene sus propias variables, alarmas y reportes.

**Fila 1 — Calderas** (imagen izq.)
Monitoreo y control remoto de calderas industriales en tiempo real. Sentinel vigila presión, temperatura, nivel y conductividad, controla la purga para prevenir la incrustación y avisa cuándo conviene intervenir.
Dato: *2% de combustible extra por cada milímetro de sarro.*
Botón: **Ver Sentinel para calderas** → `/sentinel/calderas/`

**Fila 2 — Torres de enfriamiento y condensadores** (imagen der.)
Purga automática por conductividad, seguimiento del nivel de pozo y aviso de cuándo limpiar el condensador, antes de que suba el consumo eléctrico.
Dato: *12% más de energía con apenas 0,3 mm de incrustación en el condensador.*
Botón: **Ver Sentinel para torres y condensadores** → `/sentinel/torres-y-condensadores/`

**Fila 3 — Bombas y tanques** (imagen izq.)
El nivel de cada tanque y el estado de cada bomba, en todo momento. Arranque, parada y ajuste a distancia, también en estaciones alejadas.
Botón: **Ver Sentinel para bombas y tanques** → `/sentinel/bombas-y-tanques/`

**Fila 4 — Ósmosis inversa** (imagen der.)
Presión diferencial, conductividad y caudal bajo control las 24 horas. La IA indica cuándo hacer la limpieza química de las membranas, y el tablero se entrega con la marca del fabricante.
Dato: *15–40% de pérdida de productividad por ensuciamiento de membrana no detectado.*
Botón: **Ver Sentinel para ósmosis inversa** → `/sentinel/osmosis-inversa/`

Imágenes: [PLACEHOLDER] foto de cada equipo o captura del sinóptico. Si no hay fotos, usar un bloque de color con el ícono grande del equipo, no fotos de stock.

### 8. Cuánto cuesta no medir — layout: 4 cifras grandes (Saira) con fuente al pie
- H2: **Cuánto cuesta no medir**
- **2%** de combustible extra por cada milímetro de sarro en una caldera.
- **12%** más de energía consume el equipo de frío con 0,3 mm de incrustación en el condensador.
- **50%** menos purga al pasar de 3 a 6 ciclos de concentración en una torre.
- **15–40%** de pérdida de productividad por ensuciamiento de membrana no detectado.
- Fuente: Departamento de Energía de EE.UU., ASHRAE Handbook, EPA WaterSense, Water Tech Online. Valores de referencia para la industria.

### 9. Beneficios — layout: grilla 4×2 compacta
- **Supervisión permanente**: visualización y control del proceso en tiempo real, las 24 horas.
- **Alarmas automáticas**: notificación por correo o SMS ante cualquier anomalía.
- **Historial y reportes**: registro histórico de variables y reportes diarios de operación.
- **Escalabilidad**: fácil de escalar a medida que crece tu planta.
- **Accesos multinivel**: perfiles de usuario según el nivel de acceso requerido.
- **Acceso remoto**: accedé y controlá tu planta desde PC, tablet o teléfono.
- **Optimización de recursos**: menos tiempos muertos, desperdicios y costos energéticos.
- **Mejores decisiones**: información objetiva para sustentar las decisiones operativas.

### 10. Dónde se aplica — layout: chips/etiquetas
Industria alimenticia · Farmacéutica y laboratorios · Frigoríficos y lácteos · Química y petroquímica · Textil y lavaderos · Plásticos e inyección · Agua potable y efluentes · Energía y generación · Agro e irrigación · Edificios, hotelería y data centers

### 11. Implementación — layout: 3 pasos numerados con línea punteada
- H2: **Un proceso claro, en tres etapas**
1. **Relevamiento técnico**: evaluamos los PLC, los sensores existentes y las necesidades de tu planta.
2. **Propuesta y cotización**: presupuesto detallado de sensores, gateway e instalación.
3. **Instalación y puesta en marcha**: montaje de los equipos, activación del monitoreo y capacitación del personal.

### 12. Precios `#precios` — [PLACEHOLDER]
Alejo pidió la herramienta de precios acá. Sin datos en los brochures. Mantener la caja placeholder.

### 13. Proyectos reales — [CONFIRMAR con Guido si usaron Sentinel]
El sitio ya tiene dos proyectos de monitoreo remoto que podrían ir acá:
- `/proyectos/monitoreo-remoto-de-planta-de-efluentes/`
- `/proyectos/monitoreo-remoto-de-tanque-de-efluentes-con-plc-y-webserver/`

### 14. Preguntas frecuentes — respuestas armadas solo con datos de los brochures
- **¿Tengo que cambiar mis PLC o sensores?** No. Sentinel se integra a los PLC, sensores y protocolos estándar que ya tenés, sin modificar el proceso.
- **¿Desde dónde puedo ver la planta?** Desde una PC, una tablet o un teléfono.
- **¿Cómo me entero de un problema?** Con alarmas automáticas por correo o SMS ante cualquier desvío.
- **¿La IA necesita sensores extra?** No. Analiza los datos que Sentinel ya recolecta.
- **¿Puedo ver varias plantas juntas?** Sí. Todas tus plantas o ubicaciones en un mismo panel.
- **¿Quién puede acceder?** Cada usuario tiene un perfil con el nivel de acceso que corresponda.
- **¿Puedo ofrecer Sentinel con mi marca?** Sí. Para fabricantes e instaladores, el tablero se entrega con tu logo y tus colores. [CONFIRMAR si aplica a todas las aplicaciones o solo a ósmosis]

### 15. Contacto — layout: bloque violeta como en el cierre del brochure
- H2: **Pedí tu relevamiento técnico**
- Guido Fada · Comercial · Automatización Industrial & IoT
- info@qubit.la · +54 11 2275-5716 · Burela 1984, Villa Urquiza, CABA
- Formulario existente del sitio.

---

# PARTE 2 · Plantilla de landing por aplicación

Todas siguen el mismo orden de los brochures. Un mismo esqueleto, cambia el contenido.

1. **Breadcrumb**: Sentinel › [Aplicación]
2. **Hero**: eyebrow «SENTINEL», H1 con el nombre de la aplicación, bajada del brochure, botón «Pedí tu relevamiento técnico» + secundario «Descargá el brochure (PDF)» [PLACEHOLDER: falta exportar los PDF].
3. **Desafíos → solución** (5 filas comparativas).
4. **Cuánto cuesta no medir** (4 cifras + fuente).
5. **Del mantenimiento correctivo al predictivo** (4 ítems).
6. **SENTinel adaptado** (S·E·N·T con las variables del equipo).
7. **Toda la operación, en una sola pantalla** (captura [PLACEHOLDER] + 3 bullets).
8. **Beneficios** (8).
9. **Dónde se aplica** (6 industrias con frase).
10. **Implementación** (3 pasos).
11. **Otras aplicaciones de Sentinel** (3 tarjetas) + link a precios.
12. **Contacto**.

El texto completo de cada sección está en los PPTX. Diferencias a tener en cuenta:
- **Bombas y tanques** no tiene «Cuánto cuesta no medir» ni «Del correctivo al predictivo». Se saltean esas secciones (no inventar cifras).
- **Ósmosis inversa** le habla al **fabricante y al instalador** del equipo, no a la planta: destacar «100% personalizable, con tu marca» en el hero.
- **Calderas** y **Torres** son casi gemelas en estructura: buen punto de partida para validar la plantilla.

---

## Para confirmar con Guido
- Teléfono: el brochure de Bombas dice **+54 11 6033-5029**; los demás, **+54 11 2275-5716**. ¿Cuál va?
- ¿La marca blanca (logo y colores del cliente) aplica a todas las aplicaciones o solo a ósmosis?
- Los dos proyectos de monitoreo remoto del sitio, ¿se hicieron con Sentinel?
- Exportar en PDF cada brochure para el botón de descarga.
- Capturas reales del panel de cada aplicación (los brochures dicen «PONER FOTO DE DEMO»).
- Errata en brochures: «desafios» sin tilde (general), «recomeinda» (ósmosis), «valvulas» sin tilde (torres).
