# Qubit UX Audit — contenido para la PPT

Guion slide por slide, con la estructura del deck de Blockware (BWS UX Audit). Todos los textos están listos para copiar y pegar.

**Cada slide tiene siempre los mismos campos:**

- **Kicker:** la etiqueta chica de sección, arriba a la izquierda, en mayúsculas.
- **Título:** el texto grande.
- **Subtítulo:** la bajada debajo del título. Se usa poco: solo en portadillas y en las slides de benchmark, performance, medición y backlog.
- **Cuerpo:** el contenido principal.
- **Textos de apoyo:** chips, etiquetas, botones y notas al pie.
- **Visual:** qué poner y dónde.
- **Para presentar:** una o dos líneas para decir en voz alta (solo en las slides clave).

**Etiquetas fijas en todas las slides:**

- Arriba a la izquierda: `SEPTIEMBRE 2026`
- Lateral: `QUBIT`
- Arriba a la derecha: logo de Telus Digital (o GM2), como en BWS.

**Colores por sección:**

| Sección | Color |
| --- | --- |
| Intro y contexto | verde |
| Evaluación heurística | naranja |
| Benchmark y performance | azul |
| Medición y backlog | violeta |

**Fuente del contenido:** *Auditoría web — Qubit* y *Propuestas para el sitio nuevo* (versión del 29/09/2026).

---

# SECCIÓN 0 · INTRO (verde)

## Slide 1 · Portada

- **Kicker:** `QUBIT UX AUDIT`
- **Título:** Veamos qué encontramos
- **Textos de apoyo:** `Septiembre 2026` · `Preparado por: Lourdes Schaab, Product Design`
- **Visual:** foto industrial de Qubit o la home actual en baja opacidad, a la derecha.

## Slide 2 · Objetivo

- **Kicker:** `OBJETIVO`
- **Título:** Identificar problemas de usabilidad y puntos de fricción en qubit.la, y convertirlos en requisitos concretos para un sitio nuevo que capte más leads y sea fácil de mantener.
- **Cuerpo (tres pilares con ícono):**

| Pilar | Texto debajo del ícono |
| --- | --- |
| **Detectar problemas de usabilidad** | Evaluación heurística del sitio actual |
| **Comparar y medir** | Benchmark con 4 competidores y Lighthouse |
| **Proponer mejoras accionables** | 14 mejoras priorizadas para el sitio nuevo |

- **Para presentar:** «La idea no es arreglar el WordPress actual, sino llegar al diseño del sitio nuevo sabiendo qué resolver primero.»

## Slide 3 · Agenda

- **Kicker:** `QUÉ VAMOS A CUBRIR`
- **Título:** Nuestro recorrido de hoy
- **Cuerpo:** 3 columnas, cada una con un chip de color arriba y dos bloques.

| `CONTEXTO` | `AUDITORÍA UX` | `MERCADO Y PERFORMANCE` |
| --- | --- | --- |
| **Oportunidades.** Lo que verificamos en el sitio actual y puede mejorar en el rediseño. | **Evaluación heurística.** Qué no funciona bien según los principios de UX. | **Benchmark competitivo.** Qubit frente a Quantia, Automática, EXSOL y Antares. |
| **Guía de evaluación.** Las escalas de severidad y de esfuerzo que usamos. | **Hallazgos específicos.** 26 hallazgos con captura y recomendación. | **Performance.** Lighthouse en mobile y desktop, y datos de usuarios reales. |

- **Textos de apoyo (franja inferior):** `PROPUESTAS Y PRIORIZACIÓN DEL BACKLOG`

## Slide 4 · Guía de evaluación

- **Kicker:** `CONTEXTO`
- **Título:** Cómo evaluamos cada hallazgo
- **Cuerpo:** dos escalas lado a lado.

| Severidad | | Esfuerzo | |
| --- | --- | --- | --- |
| **S0** | No es un problema de usabilidad. | **E0** | Arreglo muy simple. Casi no requiere desarrollo ni diseño. |
| **S1** | Problema cosmético. Sin impacto en la usabilidad. | **E1** | Arreglo fácil. Requiere poco desarrollo o diseño. |
| **S2** | Problema menor. Prioridad baja. | **E2** | Esfuerzo medio. Requiere algo de desarrollo o diseño. |
| **S3** | Problema mayor. Prioridad alta. | **E3** | Esfuerzo alto. Requiere bastante desarrollo o diseño. |
| **S4** | Catástrofe de usabilidad. Resolver antes de lanzar. | **E4** | Esfuerzo extremo. |

- **Textos de apoyo:**
  - Etiquetas sobre cada escala: `SEVERIDAD S0 → S4` · `ESFUERZO E0 → E4`
  - Nota al pie: Escala de severidad basada en Nielsen Norman Group (0–4).

## Slide 5 · Oportunidades

- **Kicker:** `CONTEXTO`
- **Título:** Oportunidades para el sitio nuevo
- **Cuerpo:** tabla de 2 columnas.

| Oportunidad | Lo que encontramos |
| --- | --- |
| Rehacer el sitio desde cero | Todas las recomendaciones apuntan al sitio nuevo, con redirecciones para no perder posicionamiento. |
| Hero con una imagen que luzca | No está deformada: se recorta por la proporción y queda tapada por una grilla. |
| WhatsApp más visible | Ícono negro sobre violeta, sin texto y con contraste de 3,4:1. |
| Jerarquía en el botón de contacto | Hay 4 botones «Contacto» visibles que van al mismo formulario, y en el menú «Contacto» se ve igual que los demás ítems. |
| Proyectos con encabezado claro | Sin título ni filtros, y las tarjetas no parecen clickeables. |
| Noticias activa | La sección está vacía y el último artículo es de febrero de 2025. |
| Landings por industria | No hay páginas por industria ni por caso de uso. |
| Versión en inglés | No hay versión en inglés ni selector. |
| Medir cuánto convierte la web | La medición ya está instalada (GTM, GA4, Google Ads, PageSense), pero falta configurarla. |

- **Para presentar:** «Estas son las oportunidades más claras que vemos para el sitio nuevo. Más adelante las desarrollamos una por una.»

## Slide 6 · Prioridades

- **Kicker:** `HALLAZGOS PRINCIPALES`
- **Título:** Hallazgos principales
- **Cuerpo (tres bloques, cada uno con título en negrita y una bajada):**

| Bloque | Título del bloque | Bajada |
| --- | --- | --- |
| 1 | **Que el primer vistazo explique qué hace Qubit** | El titular es genérico y el CTA no dice qué obtiene el usuario. Quien llega al sitio tiene que entender la oferta en segundos. |
| 2 | **Mostrar la prueba que ya tiene** | Qubit es el único de cinco sitios con resultados medibles en todos sus casos, pero las tarjetas no los muestran. Faltan casos claros y testimonios validados. |
| 3 | **Cumplir con la privacidad** | No hay política de privacidad y el formulario envía datos sin aviso. Hay que publicarla, con asesoría legal, antes de lanzar. |

- **Texto destacado (derecha):**

  > Qubit tiene lo más difícil de conseguir en B2B: casos con resultados, clientes reconocidos y testimonios con nombre y cargo. El sitio nuevo tiene que hacer que eso se vea.

- **Textos de apoyo (chips abajo):** `26 hallazgos` · `11 mayores` · `14 menores` · `1 cosmético` · `15 quick wins`
- **Para presentar:** «Si tuviéramos que quedarnos con una sola idea: Qubit ya tiene la prueba, solo le falta mostrarla.»

---

# SECCIÓN 1 · EVALUACIÓN HEURÍSTICA (naranja)

## Slide 7 · Portadilla

- **Kicker:** `EVALUACIÓN HEURÍSTICA`
- **Título:** ¿Cómo encontramos estos problemas?
- **Subtítulo:** Revisamos el sitio con principios de usabilidad reconocidos por la industria.

## Slide 8 · Qué son las heurísticas

- **Kicker:** `EVALUACIÓN HEURÍSTICA`
- **Título:** Heurísticas: ¿qué son?
- **Cuerpo:** Las heurísticas ayudan a detectar problemas comunes a partir de principios como la simplicidad, la consistencia y el control del usuario. Usamos las 10 heurísticas de Jakob Nielsen (NN/g).
- **Textos de apoyo (botón):** `CONOCÉ LAS 10 HEURÍSTICAS >>`

## Slide 9 · Heurísticas 1 a 5

- **Kicker:** `HEURÍSTICAS`
- **Título:** Las 10 heurísticas (1/2)
- **Cuerpo (tarjetas de colores; título de la tarjeta + una línea):**

| Tarjeta | Título | Texto |
| --- | --- | --- |
| 1 | **Visibilidad del estado del sistema** | Mantener al usuario informado de lo que pasa, con respuesta a tiempo. |
| 2 | **Relación con el mundo real** | Usar el lenguaje y las convenciones del usuario. |
| 3 | **Control y libertad** | Poder salir de un estado no deseado sin pasos largos. |
| 4 | **Consistencia y estándares** | Que lo que se ve igual funcione igual. |
| 5 | **Prevención de errores** | Evitar que el error ocurra. |

## Slide 10 · Heurísticas 6 a 10

- **Kicker:** `HEURÍSTICAS`
- **Título:** Las 10 heurísticas (2/2)
- **Cuerpo (tarjetas de colores):**

| Tarjeta | Título | Texto |
| --- | --- | --- |
| 6 | **Reconocer antes que recordar** | Dejar visibles las opciones y las acciones. |
| 7 | **Flexibilidad y eficiencia** | Atajos para los usuarios frecuentes. |
| 8 | **Diseño estético y minimalista** | Nada de información irrelevante. |
| 9 | **Reconocer y resolver errores** | Mensajes claros y con solución. |
| 10 | **Ayuda y documentación** | Disponible cuando haga falta. |

## Slides 11–16 · Grillas de evaluación

**Formato común de las 6 grillas:**

- Cada fila tiene 4 columnas de estado: `OK` · `ERROR MENOR` · `ERROR MAYOR` · `NO APLICA`. Marcá una sola por fila con una ✕.
- Leyenda fija a la derecha (igual que en BWS):
  - `OK`: Todo bien.
  - `ERROR MENOR`: Es un error, pero permite completar la tarea. Afecta la eficiencia; la efectividad se mantiene.
  - `ERROR MAYOR`: Es bloqueante, no permite completar la tarea.
  - `NO APLICA`: La regla no es relevante para el sitio.
- La columna «Hallazgo» es opcional: podés ponerla en gris chico o sacarla.
- Debajo de cada grilla hay una **Justificación** escrita de cada fila: por qué se marcó así, con la evidencia que la sostiene. En la slide puede ir como texto chico al pie o como notas del orador.
- **Cómo leer la grilla frente a la severidad (S0–S4):** la grilla mide si el problema **bloquea** la tarea (criterio de Blockware); la severidad mide la **prioridad**. Por eso un hallazgo puede ser S3 y figurar como «error menor»: es importante, pero el usuario igual puede completar la tarea. Conviene aclararlo en voz alta.

### Slide 11 · Principios generales

- **Kicker:** `EVALUACIÓN HEURÍSTICA`
- **Título:** Principios generales

| Criterio | Estado | Hallazgo |
| --- | --- | --- |
| El propósito del sitio está claro en la pantalla principal | Error menor | CONT-01 |
| Las acciones posibles se ven con claridad en la pantalla principal | Error menor | UX-02, UI-05 |
| El sitio no tiene información innecesaria que distraiga del objetivo | Error menor | CONT-06 |
| El lenguaje es comprensible y consistente | Error menor | CONT-04 |
| El contenido está bien agrupado | Error menor | UX-03, UX-04 |
| La política de privacidad es fácil de encontrar | Error menor | UX-08 |

**Justificación**

- **El propósito del sitio está claro en la pantalla principal (error menor).** El titular, «Tecnología al servicio de la Industria», no dice por sí solo qué hace Qubit ni por qué elegirla; el subtítulo nombra los servicios, pero en una frase larga y sin resultado. El diferencial recién aparece en la segunda sección y el «by TELUS» del logo no se explica. El usuario puede seguir navegando, pero le cuesta confirmar que está en el lugar correcto.
- **Las acciones posibles se ven con claridad en la pantalla principal (error menor).** La home tiene 4 botones visibles (9 en el código, con copias ocultas) y todos van al mismo formulario. Ninguno dice qué obtiene el usuario, y «Mas información» no lleva a más información. El botón de WhatsApp es un cuadrado violeta con ícono negro sobre el header negro, sin texto y con contraste de 3,4:1, así que pasa desapercibido.
- **El sitio no tiene información innecesaria que distraiga del objetivo (error menor).** Los beneficios son frases intercambiables («eficientes y confiables», «de vanguardia») sin datos. Además, la home tiene 38 encabezados H2 con duplicados, lo que suma ruido.
- **El lenguaje es comprensible y consistente (error menor).** Las tarjetas de industria mezclan tuteo («Optimiza») y usted («Automatice»), y el resto del sitio usa voseo («Conocé»).
- **El contenido está bien agrupado (error menor).** Las 3 soluciones principales (llave en mano, OEM y asistencia técnica) son tarjetas de una frase, sin enlace ni página propia. Las dos páginas de servicio que existen, /servicios/ e /impresoras/, no están enlazadas desde ninguna página (verificado en 6 páginas del sitio). Y las 8 tarjetas de industria no llevan a ninguna parte.
- **La política de privacidad es fácil de encontrar (error menor).** No existe: el banner (en inglés) menciona «our privacy policy» sin enlace y las rutas habituales dan 404. El sitio usa Facebook Pixel, Google Ads y Zoho PageSense, y envía el formulario a Salesforce. No hay ningún enlace a privacidad, cookies o términos en toda la home, y las 7 rutas habituales dan 404. El formulario envía nombre, empresa, email y teléfono a Salesforce sin aviso ni casilla de consentimiento. Se marca como error menor porque no impide contactar, pero es un hallazgo de severidad 3: la Ley 25.326 exige informar al recolectar datos personales, y los términos de Google Analytics y Google Ads exigen una política que informe el uso de cookies y de remarketing.

### Slide 12 · Navegación y contenido

- **Kicker:** `EVALUACIÓN HEURÍSTICA`
- **Título:** Navegación y contenido

| Criterio | Estado | Hallazgo |
| --- | --- | --- |
| Se reconoce dónde estoy y puedo volver | Error menor | UX-11 |
| Los objetivos de los elementos de la interfaz son claros | Error menor | UX-09 |
| Ningún ítem del menú lleva a una página vacía | Error menor | UX-01 |
| El menú es igual en desktop y mobile | Error menor | UX-01 |
| Desde cada industria se llega a sus casos | Error menor | UX-04 |
| El contenido está en el idioma del visitante | Error menor | UX-10 |

**Justificación**

- **Se reconoce dónde estoy y puedo volver (error menor).** Verificado en el sitio: en /proyectos/ y en una página de caso, el ítem activo del menú se ve igual que los demás (mismo color y peso, sin subrayado ni `aria-current`) y no hay breadcrumb visible (solo existe en los datos ocultos del sitio). Volver a la home es fácil porque el logo la enlaza. Pero en un caso, el único enlace «Volver a proyectos» está al final de la página, unos 4.300 px más abajo. El usuario puede seguir, pero tiene que deducir dónde está.

- **Los objetivos de los elementos de la interfaz son claros (error menor).** Las 3 tarjetas de caso de la home son enlaces, pero cada una se titula con el nombre del cliente y describe a la empresa, no el proyecto ni el resultado. No tiene «Ver caso», flecha ni otra señal de enlace, y usa el mismo diseño que las tarjetas de industria, que no son clickeables.
- **Ningún ítem del menú lleva a una página vacía (error menor).** «Noticias» lleva a una página que solo muestra su título y el formulario. No impide contactar a Qubit, pero quien busca novedades no encuentra nada y el sitio parece abandonado. El último artículo es de febrero de 2025 y el blog real vive en /blog/, fuera del menú.
- **El menú es igual en desktop y mobile (error menor).** En mobile el menú ni siquiera incluye «Noticias». El usuario no se queda trabado, pero ve una oferta distinta según el dispositivo.
- **Desde cada industria se llega a sus casos (error menor).** Las 8 tarjetas de industria tienen una frase genérica y ningún enlace: desde «Alimentos y Bebidas» no se puede llegar al caso Campari. Qubit tiene la prueba, pero el camino hacia ella está cortado.
- **El contenido está en el idioma del visitante (error menor).** No hay URLs en inglés, selector de idioma ni hreflang, y pueden entrar equipos de Telus Digital de otros países. Automática y Antares ya tienen versión en inglés.

### Slide 13 · Diseño

- **Kicker:** `EVALUACIÓN HEURÍSTICA`
- **Título:** Diseño

| Criterio | Estado | Hallazgo |
| --- | --- | --- |
| La pantalla principal invita a explorar | Error menor | UX-02 |
| Las jerarquías son claras y se distingue lo primario de lo secundario | Error menor | UX-02 |
| Los elementos que se comportan igual se ven igual | Error menor | UX-09 |
| Ningún recurso visual compite con el contenido importante | Error menor | UI-04 |
| El diseño se adapta al celular | OK | — |
| El texto tiene contraste suficiente | Error menor | A11Y-03 |

**Justificación**

- **La pantalla principal invita a explorar (error menor).** Verificado en el sitio: los dos botones del hero, «Contacto» y «Mas información», llevan al mismo ancla (#contacto), el formulario. Ninguno invita a explorar los casos o las soluciones. Lo que sí funciona es el menú fijo con Proyectos, Soluciones e Industrias y la identidad visual propia (negro, violeta y grilla), por eso es un error menor y no mayor. La propuesta es sumar un CTA secundario «Ver casos».
- **Las jerarquías son claras y se distingue lo primario de lo secundario (error menor).** En el hero hay una diferencia visual entre «Contacto» (relleno) y «Mas información» (con borde), pero los dos llevan al mismo formulario. En el menú, «Contacto» se ve igual que Home o Proyectos, así que la acción principal no se distingue de la navegación.
- **Los elementos que se comportan igual se ven igual (error menor).** Las tarjetas de caso, que sí son clickeables, usan el mismo diseño que las de industria, que no lo son. Lo que se ve igual se comporta distinto, y el usuario pierde la señal de qué puede abrir.
- **Ningún recurso visual compite con el contenido importante (error menor).** Las fotos del hero son verticales (1920×2560) y se recortan mucho en una columna angosta; una grilla y bloques violetas las tapan, y el hero rota solo entre 4 fotos. En mobile queda debajo del texto.
- **El diseño se adapta al celular (OK).** Verificado en el sitio a 375 px: la página declara el viewport correcto, no hay scroll horizontal, el menú se abre y cierra, y los botones de la home miden 58 px de alto, un tamaño cómodo para tocar. Hay detalles a mejorar que no impiden usarlo: el botón de menú mide 24×24 px (cumple el mínimo de WCAG 2.2, pero queda por debajo de los 44 px recomendados), y el hero queda debajo del texto.
- **El texto tiene contraste suficiente (error menor).** Las etiquetas violetas que van sobre los títulos de sección dan 3,40:1, el botón «Accept» 3,45:1 y el skip link 2,09:1, cuando WCAG 1.4.3 pide 4,5:1. Se corrige con un violeta más claro para el texto (#9D6BFF), que da 5,7:1 sobre negro.

### Slide 14 · Contacto y formularios

- **Kicker:** `EVALUACIÓN HEURÍSTICA`
- **Título:** Contacto y formularios

| Criterio | Estado | Hallazgo |
| --- | --- | --- |
| Hay un canal de contacto visible en todo momento | Error menor | UI-05 |
| El formulario pide solo lo necesario | Error menor | UX-07 |
| Los campos obligatorios y opcionales están marcados | Error menor | A11Y-06 |
| Se informa en cuánto tiempo responden | Error menor | UX-07 |
| El sitio tiene buscador | No aplica | — |

**Justificación**

- **Hay un canal de contacto visible en todo momento (error menor).** Verificado en el sitio: en desktop se cumple, porque el header es fijo y siempre muestra «Contacto» y WhatsApp, y hay formulario en las páginas revisadas. En mobile no: el header fijo solo muestra el logo y el botón de menú, y tanto «Contacto» como WhatsApp quedan escondidos dentro del menú. En el celular, quien está leyendo un caso tiene que abrir el menú para escribir. Por eso no se marca OK.
- **El formulario pide solo lo necesario (error menor).** Tiene 6 campos obligatorios, más reCAPTCHA. El teléfono es obligatorio y no hay un campo para el tipo de consulta. NN/g recomienda quitar los campos innecesarios; el usuario puede enviarlo, pero cada campo de más baja la tasa de envío.
- **Los campos obligatorios y opcionales están marcados (error menor).** Ningún campo indica si es obligatorio. El teléfono es type=text, así que en el celular no abre el teclado numérico, y no hay autocomplete (WCAG 1.3.5 y 3.3.2).
- **Se informa en cuánto tiempo responden (error menor).** El formulario no dice en cuánto se responde ni pregunta qué tipo de consulta es. Aunque la meta description promete «Consultá sin cargo», el usuario no sabe qué pasa después de enviar.
- **El sitio tiene buscador (no aplica).** Es un sitio institucional con pocas páginas y pocos artículos; un buscador no cambiaría la tarea principal, que es contactar a Qubit.

### Slide 15 · Control y feedback

- **Kicker:** `EVALUACIÓN HEURÍSTICA`
- **Título:** Control y feedback

| Criterio | Estado | Hallazgo |
| --- | --- | --- |
| El sitio no hace cosas solo sin que el usuario lo pida | Error menor | A11Y-05 |
| Cuando hay mucha información, se puede filtrar | Error menor | UX-05 |
| Se puede pausar lo que se mueve | Error menor | A11Y-05 |

**Justificación**

- **El sitio no hace cosas solo sin que el usuario lo pida (error menor).** En la home, el hero cambia de foto cada 2 segundos y 5 carruseles avanzan cada 5, sin que el usuario lo pida y sin un control visible de pausa. NN/g desaconseja el autoplay y WCAG 2.2.2 pide poder pausar lo que se mueve.
- **Cuando hay mucha información, se puede filtrar (error menor).** /proyectos/ no tiene título, intro ni filtros, y Americold y Biomás (destacados en la home) ni aparecen. Con 11 casos, no poder filtrar por industria o servicio obliga a recorrerlos todos.
- **Se puede pausar lo que se mueve (error menor).** El hero (cada 2 segundos) y los carruseles (cada 5) rotan solos, sin botón de pausa visible. Es la misma causa que la primera fila, pero medida como criterio de accesibilidad (WCAG 2.2.2).

### Slide 16 · Accesibilidad y base técnica

- **Kicker:** `EVALUACIÓN HEURÍSTICA`
- **Título:** Accesibilidad y base técnica

| Criterio | Estado | Hallazgo |
| --- | --- | --- |
| Todos los controles tienen nombre accesible | Error mayor | A11Y-01 |
| Las imágenes tienen un texto alternativo útil | Error menor | A11Y-02 |
| Cada página tiene un H1 y una jerarquía de títulos | Error menor | SEO-02 |
| Solo las páginas públicas son indexables | Error menor | SEO-01 |

**Justificación**

- **Todos los controles tienen nombre accesible (error mayor).** El logo, el botón de WhatsApp y el botón del menú mobile son enlaces sin nombre, y el menú no expone aria-expanded. Con un lector de pantalla, el menú mobile no se puede usar (WCAG 4.1.2): es bloqueante para esos usuarios. Lighthouse lo confirma («Links do not have a discernible name»).
- **Las imágenes tienen un texto alternativo útil (error menor).** En la home, 8 de los 13 logos de clientes y los 8 logos de marcas tienen descripciones con nombres de archivo («Frame 177», «image 1»), así que un lector de pantalla no dice qué cliente es (WCAG 1.1.1).
- **Cada página tiene un H1 y una jerarquía de títulos (error menor).** Ninguna página tiene H1: todo es H2, 38 en la home con duplicados ocultos, y en los casos el título del proyecto queda al mismo nivel que etiquetas como «Incremento de pureza». Con un título principal y subtítulos ordenados, cada página dice de qué trata de un vistazo, para Google y para los lectores de pantalla.
- **Solo las páginas públicas son indexables (error menor).** /prueba-form/ (con el encabezado «This is form»), /prueba-grilla-1/ y 2, /impresoras-old/ y 3 páginas de gracias están en el mapa del sitio y sin la marca que pide a Google no mostrarlas. No afectan al usuario que navega, pero pueden aparecer en Google. Si las de gracias se usan para contar conversiones, cada visita suma un «lead» aunque nadie haya enviado el formulario, y eso distorsiona los reportes y las decisiones de Google Ads. Es un hallazgo de severidad 3 por ese impacto en la medición.

- **Textos de apoyo (nota al pie):** Error mayor: con lector de pantalla, el menú mobile no se puede usar.

## Slide 17 · Portadilla de hallazgos

- **Kicker:** `EVALUACIÓN HEURÍSTICA`
- **Título:** ¡Veamos algunos hallazgos específicos!

## Slides 18–26 · Hallazgos con capturas

**Formato común (igual que en BWS):**

- **Izquierda:** kicker, título grande en 2–3 líneas y viñetas numeradas. Cada viñeta es texto corrido de dos oraciones: el problema, con lo clave en negrita dentro de la frase, y la recomendación. Sin etiquetas del tipo «Hallazgo / Solución».
- **Derecha:** capturas con círculos numerados que coinciden con las viñetas. La numeración sigue de una slide a la otra.
- **Abajo a la izquierda:** chip con los IDs y la severidad (por ejemplo `CONT-01 · S3`).
- **Capturas:** qubit.la en desktop 1440 px y mobile 375 px. En Chrome: DevTools → Toggle device toolbar → menú ⋮ → «Capture screenshot».

### Slide 18 · Hero

- **Kicker:** `EVALUACIÓN HEURÍSTICA`
- **Título:** Un primer vistazo que no explica qué hace Qubit
- **Cuerpo:**
  1. El titular, «Tecnología al servicio de la Industria», **no dice por sí solo qué hace Qubit ni por qué elegirla**, y el subtítulo nombra los servicios sin mostrar ningún resultado. Recomendamos un titular que diga qué hace, para quién y con qué resultado, acompañado de un subtítulo corto con una prueba.
  2. La home tiene **4 botones visibles que llevan al mismo formulario**, ninguno dice qué obtiene el usuario y «Contacto» se ve igual que cualquier otro ítem del menú. Recomendamos un CTA primario como «Pedí un diagnóstico sin cargo», uno secundario como «Ver casos» y «Contacto» destacado en el menú.
  3. Las fotos del hero son verticales y **se recortan, quedan tapadas por una grilla y rotan solas**; en mobile, además, quedan debajo del texto. Recomendamos una sola foto horizontal, con un punto focal definido para cada tamaño de pantalla.
- **Textos de apoyo (chip):** `CONT-01 · S3` · `UX-02 · S3` · `UI-04 · S2`
- **Visual:**
  - captura A: home en desktop 1440, primer viewport (callouts 1 y 2)
  - captura B: home en mobile 375 (callout 3)

### Slide 19 · WhatsApp y contacto

- **Kicker:** `EVALUACIÓN HEURÍSTICA`
- **Título:** WhatsApp y contacto sin la jerarquía que merecen
- **Cuerpo:**
  4. El botón de WhatsApp es **un cuadrado violeta con un ícono negro, sin texto, sobre el header negro**, así que pasa desapercibido. Recomendamos un ícono claro con etiqueta visible y contraste alto, que en mobile se vea sin abrir el menú.
  5. El formulario **pide 6 campos obligatorios y un reCAPTCHA**, pero no pregunta el tipo de consulta ni dice en cuánto tiempo responden. Recomendamos pedir solo nombre, email, empresa y mensaje, dejar el teléfono como opcional y sumar el tipo de consulta y el plazo de respuesta.
  6. **Ningún campo indica si es obligatorio** y el teléfono no abre el teclado numérico en el celular. Recomendamos marcar qué campos son obligatorios y cuáles opcionales, activar el autocompletado y usar el teclado numérico para el teléfono.
- **Textos de apoyo (chip):** `UI-05 · S3` · `UX-07 · S2` · `A11Y-06 · S2`
- **Visual:**
  - captura A: zoom al header con el botón de WhatsApp (callout 4)
  - captura B: formulario completo (callouts 5 y 6)
- **Para presentar:** «Es una oportunidad clara: ningún competidor resuelve bien WhatsApp.»

### Slide 20 · Proyectos

- **Kicker:** `EVALUACIÓN HEURÍSTICA`
- **Título:** Proyectos que no se ven como proyectos
- **Cuerpo:**
  7. Las tarjetas de casos de la home **no parecen clickeables**: se titulan con el nombre del cliente, describen a la empresa y no al proyecto, y se ven igual que las tarjetas de industria, que no llevan a ningún lado. Recomendamos una tarjeta de caso propia, con el título del proyecto, la industria, el resultado y un «Ver caso» visible.
  8. La página de proyectos **no tiene título, intro ni filtros**, mezcla los casos con artículos del blog y no incluye a Americold ni a Biomás, que están destacados en la home. Recomendamos mostrar todos los casos, con un encabezado claro y filtros por industria y servicio.
- **Textos de apoyo (chip):** `UX-09 · S3` · `UX-05 · S2`
- **Visual:**
  - captura A: tarjetas de casos y de industria en la home, lado a lado (callout 7)
  - captura B: /proyectos/ en desktop (callout 8)

### Slide 21 · Oferta y navegación

- **Kicker:** `EVALUACIÓN HEURÍSTICA`
- **Título:** Una oferta difícil de encontrar
- **Cuerpo:**
  9. «Noticias» **lleva a una página que solo tiene el título**, y en mobile ni siquiera aparece en el menú. Recomendamos reactivar Noticias con una plantilla simple, un ritmo de publicación sostenible y carga asistida.
  10. Las 8 tarjetas de industria **no tienen enlace**, así que desde «Alimentos y Bebidas» no se puede llegar al caso Campari. Recomendamos una landing por industria, con sus casos y un brochure descargable.
  11. Las 3 soluciones de la home **son tarjetas sin enlace**, y las páginas /servicios/ e /impresoras/ existen, pero ninguna otra página las enlaza. Recomendamos una página por solución, accesible desde el menú, y definir qué pasa con las dos que ya existen.
  12. En los casos y en /proyectos/, **el ítem activo del menú se ve igual que los demás y no hay breadcrumb**, y el único «Volver a proyectos» está al final de la página. Recomendamos marcar el ítem activo, sumar un breadcrumb y poner «Volver a proyectos» al comienzo del caso.
- **Textos de apoyo (chip):** `UX-01 · S2` · `UX-04 · S3` · `UX-03 · S3` · `UX-11 · S2`
- **Visual:**
  - captura A: /category/noticias/ vacía (callout 9)
  - captura B: grilla de tarjetas de industria (callout 10)
  - captura C: menú desktop al lado del menú mobile abierto (callouts 9 y 11)
  - captura D: caso Biomás con el menú sin ítem activo y sin breadcrumb (callout 12)

### Slide 22 · Contenido

- **Kicker:** `EVALUACIÓN HEURÍSTICA`
- **Título:** Contenido que le resta confianza
- **Cuerpo:**
  13. En /sobre-nosotros/ y en los casos, **un testimonio dice «GM2DEV nos brindó…»**, hay nombres mal escritos como «Lapetit» o «Maintenance Cheif» y los mismos testimonios se repiten en todos los casos. Recomendamos corregir y validar cada testimonio con el cliente, y mostrar en cada caso el que le corresponde.
  14. Las tarjetas de industria **mezclan tuteo y usted** mientras el resto del sitio usa voseo, y frases como «de vanguardia» o «la opción más robusta» no van acompañadas de datos ni de años de trayectoria. Recomendamos una guía de tono en voseo y reemplazar los adjetivos por datos concretos.
- **Textos de apoyo (chip):** `CONT-02 · S3` · `CONT-04 · S2` · `CONT-06 · S2`
- **Visual:**
  - captura A: testimonio con «GM2DEV» resaltado (callout 13)
  - captura B: tarjetas de industria con los verbos resaltados (callout 14)

### Slide 23 · Movimiento

- **Kicker:** `EVALUACIÓN HEURÍSTICA`
- **Título:** Elementos que se mueven solos
- **Cuerpo:**
  15. En la home, **el hero cambia de foto cada 2 segundos y 5 carruseles avanzan cada 5**, sin ningún botón de pausa. Recomendamos un hero fijo y, en los carruseles que se mantengan, un control de pausa visible.
- **Textos de apoyo (chip):** `A11Y-05 · S2`
- **Visual:**
  - captura A: home con el hero y los carruseles (callout 15)

### Slide 24 · Accesibilidad

- **Kicker:** `EVALUACIÓN HEURÍSTICA`
- **Título:** Accesibilidad: una base sólida con arreglos puntuales
- **Cuerpo:**
  16. El logo, el botón de WhatsApp y el menú mobile **no tienen un nombre que pueda leer un lector de pantalla**, así que quien lo usa no puede abrir el menú en el celular. Recomendamos un nombre claro en cada control y que el menú indique si está abierto o cerrado.
  17. Las etiquetas violetas que van sobre los títulos de sección **tienen un contraste de 3,4:1**, por debajo del mínimo de 4,5:1 para texto. Recomendamos un violeta más claro (#9D6BFF) para el texto sobre negro, que llega a 5,7:1.
  18. Los logos de clientes y marcas **se describen con nombres de archivo** como «Frame 177» o «image 1», así que un lector de pantalla no dice de qué cliente se trata. Recomendamos describir cada logo con el nombre del cliente o de la marca.
- **Textos de apoyo (chip):** `A11Y-01 · S3` · `A11Y-03 · S2` · `A11Y-02 · S2`
- **Visual:**
  - captura A: panel de Accesibilidad de Lighthouse (92) (callouts 16 y 18)
  - captura B: zoom a una etiqueta violeta con el valor de contraste (callout 17)

### Slide 25 · SEO y confianza

- **Kicker:** `EVALUACIÓN HEURÍSTICA`
- **Título:** SEO técnico y confianza
- **Cuerpo:**
  19. Las páginas de prueba, como /prueba-form/ («This is form»), y las páginas de gracias **están visibles para Google**, y las de gracias pueden distorsionar la medición de Google Ads. Recomendamos no migrar las páginas de prueba y medir las conversiones por el envío del formulario.
  20. El sitio **no tiene política de privacidad**: no hay ningún enlace, las 7 rutas habituales dan 404 y el banner menciona «our privacy policy» sin enlazarla, aunque el formulario envía datos a Salesforce y 3 de 4 competidores ya la tienen. Recomendamos publicarla con asesoría legal, como piden la Ley 25.326 y Google Analytics y Ads, y enlazarla en el footer, el banner y el formulario.
  21. **Ninguna página tiene un título principal (H1)** y, al compartir cualquier enlace, la vista previa muestra solo el logo. Recomendamos un título principal por página y una descripción e imagen propias para cada una.
- **Textos de apoyo (chip):** `SEO-01 · S3` · `UX-08 · S3` · `SEO-02 · S2` · `SEO-04 · S2`
- **Visual:**
  - captura A: /prueba-form/ (callout 19)
  - captura B: el banner de cookies con el texto de la política (callout 20)
  - opcional: la vista previa de un link en WhatsApp o LinkedIn que muestre solo el logo (callout 21)

### Slide 26 · Idioma

- **Kicker:** `EVALUACIÓN HEURÍSTICA`
- **Título:** Un sitio solo en español para un equipo global
- **Cuerpo:**
  22. El sitio **no tiene versión en inglés ni selector de idioma**, y Automática y Antares ya la tienen. Recomendamos sumar inglés en las páginas clave (home, casos destacados, nosotros y contacto), con un selector visible.
- **Textos de apoyo (chip):** `UX-10 · S2`
- **Visual:** el header de qubit.la al lado del header de Antares con ES/PT/EN (callout 22).

## Slide 27 · Balance

- **Kicker:** `EVALUACIÓN HEURÍSTICA`
- **Título:** El balance: una base fuerte que hoy no se aprovecha
- **Cuerpo (dos columnas):**

| `FORTALEZAS` | `A MEJORAR` |
| --- | --- |
| Qubit tiene casos con resultados medibles, clientes reconocidos y testimonios con nombre y cargo: una prueba social que ningún competidor tiene completa. | El mensaje del hero, la presentación de los casos, el contacto y la velocidad de carga en mobile necesitan mejoras para convertir esa prueba en leads. |

## Slide 28 · Fortalezas

- **Kicker:** `EVALUACIÓN HEURÍSTICA`
- **Título:** Fortalezas de la experiencia
- **Cuerpo (texto grande a la izquierda):** Qubit ya tiene una base sólida para convertir.
- **Cuerpo (tarjetas a la derecha):**

| Tarjeta | Título | Texto |
| --- | --- | --- |
| 1 | **Casos sólidos** | Desafío → solución → resultados cuantificados → hardware y software. |
| 2 | **Prueba social fuerte** | Campari, UBA, Americold, Denver Farma y Grupo Cepas, con testimonios con cargo y foto. |
| 3 | **Contacto a mano en desktop** | Header fijo con «Contacto» y WhatsApp. En mobile, quedan dentro del menú. |
| 4 | **Base técnica sana** | Los usuarios reales en mobile aprueban Core Web Vitals y no hay saltos de layout. |
| 5 | **Identidad visual propia** | Negro, violeta y grilla, aplicados con consistencia. |

- **Textos de apoyo (chip):** `La medición ya está instalada: GTM, GA4 y Google Ads`

## Slide 29 · Portadilla

- **Kicker:** `EVALUACIÓN HEURÍSTICA`
- **Título:** Áreas de mejora y recomendaciones

## Slides 30–32 · Tablas por severidad

**Formato común:**

- Columnas: `SEVERIDAD` · `HALLAZGO` · `RECOMENDACIÓN` · `ESFUERZO`
- Chips de color: S3 rojo · S2 naranja · S1 gris. E1 verde · E2 amarillo · E3 naranja.

### Slide 30 · Severidad 3

- **Kicker:** `EVALUACIÓN HEURÍSTICA`
- **Título:** Problemas mayores: prioridad alta

| S | Hallazgo | Recomendación | E |
| --- | --- | --- | --- |
| S3 | Titular del hero genérico | Recomendamos un titular con qué + para quién + resultado | E1 |
| S3 | CTAs «Contacto» genéricos y repetidos | Recomendamos un CTA primario con beneficio y uno secundario | E1 |
| S3 | WhatsApp camuflado | Recomendamos etiqueta visible y contraste alto | E1 |
| S3 | Casos que no se ven como proyectos | Recomendamos una tarjeta de caso propia con resultado y «Ver caso» | E2 |
| S3 | Industrias sin enlaces ni landings | Recomendamos landings por industria o caso de uso, con casos y brochure descargable | E3 |
| S3 | Soluciones sin página propia; /servicios/ e /impresoras/ sin enlazar | Recomendamos una página por solución y definir qué pasa con las dos existentes | E2 |
| S3 | Testimonio con «GM2DEV» y nombres mal escritos | Recomendamos corregir y validar con cada cliente | E1 |
| S3 | Sin política de privacidad | Recomendamos una política y un banner de cookies con asesoría legal | E2 |
| S3 | Imágenes pesadas y recursos que bloquean el render: LCP de 4,1 s en mobile y 4,5 s en desktop (Lighthouse, 04/10/2026) | Recomendamos imágenes más livianas y la imagen principal primero | E1 |
| S3 | Páginas de prueba y de gracias visibles para Google | Recomendamos no migrar las de prueba y medir por el envío del formulario | E1 |
| S3 | Controles sin nombre accesible | Recomendamos un nombre claro en cada control y que el menú indique su estado | E1 |

### Slide 31 · Severidad 2 (1/2)

- **Kicker:** `EVALUACIÓN HEURÍSTICA`
- **Título:** Problemas menores: experiencia y contenido

| S | Hallazgo | Recomendación | E |
| --- | --- | --- | --- |
| S2 | Noticias vacía | Recomendamos reactivar con ritmo y carga asistida | E2 |
| S2 | Sin versión en inglés | Recomendamos inglés en las páginas clave, con selector | E2 |
| S2 | Proyectos sin encabezado ni filtros | Recomendamos todos los casos, con título, intro y filtros | E2 |
| S2 | Cuesta saber dónde estoy y volver | Recomendamos un breadcrumb, el ítem activo del menú y «Volver a proyectos» arriba | E1 |
| S2 | Formulario de 6 campos obligatorios | Recomendamos 4 campos, teléfono opcional y tipo de consulta | E1 |
| S2 | Hero recortado | Recomendamos una foto horizontal con punto focal | E1 |
| S2 | Tres tonos mezclados | Recomendamos una guía de tono con voseo | E1 |
| S2 | Beneficios genéricos, sin años ni sellos | Recomendamos datos, trayectoria y nivel de partner | E2 |

### Slide 32 · Severidad 2 (2/2) y severidad 1

- **Kicker:** `EVALUACIÓN HEURÍSTICA`
- **Título:** Problemas menores: SEO, accesibilidad y detalles

| S | Hallazgo | Recomendación | E |
| --- | --- | --- | --- |
| S2 | Sin H1 | Recomendamos un título principal por página | E1 |
| S2 | Metadatos pobres | Recomendamos una descripción y una imagen propias por página | E2 |
| S2 | Descripciones de logos con nombres de archivo | Recomendamos describir cada logo con el nombre del cliente | E1 |
| S2 | Contraste de 3,4:1 en las etiquetas de sección | Recomendamos un violeta más claro para el texto (#9D6BFF) | E1 |
| S2 | Hero y carruseles que avanzan solos, sin pausa | Recomendamos un hero fijo y carruseles con pausa visible | E1 |
| S2 | Formulario sin autocompletado | Recomendamos autocompletado y teclado numérico para el teléfono | E1 |
| S1 | Ortografía y formatos | Recomendamos tildes, fechas y año | E1 |

- **Textos de apoyo (texto de cierre abajo):** Resolver estos puntos desde el diseño del sitio nuevo va a hacer que la experiencia sea más clara, más confiable y convierta más.

---

# SECCIÓN 2 · BENCHMARK COMPETITIVO (azul)

## Slide 33 · Portadilla

- **Kicker:** `BENCHMARK COMPETITIVO`
- **Título:** ¿Cómo se compara Qubit con su competencia?
- **Textos de apoyo (chips abajo):** `Quantia` · `Automática` · `EXSOL` · `Antares` · `Revisados el 28/09/2026`

## Slide 34 · Tabla benchmark

- **Kicker:** `BENCHMARK COMPETITIVO`
- **Título:** Qubit frente a la competencia
- **Subtítulo:** 16 criterios que un comprador industrial espera encontrar.
- **Cuerpo:** tabla con íconos, con la columna de Qubit resaltada.

| Criterio | Qubit | Quantia | Automática | EXSOL | Antares |
| --- | --- | --- | --- | --- | --- |
| Titular que dice qué hacen y para quién | ✗ | ✗ | ✓ | ◐ | ◐ |
| CTA en el primer viewport | ✓ | ✓ | ✓ | ✗ | ✓ |
| Casos con resultados cuantificados | ✓ | ◐ | ◐ | ✗ | ✗ |
| Proyectos con tarjetas clickeables | ✗ | ✓ | ◐ | ✗ | ✗ |
| Páginas por servicio | ◐ | ✓ | ✗ | ✗ | ✓ |
| Landings por industria | ✗ | ✗ | ◐ | ✗ | ✗ |
| Brochures descargables | ✗ | ✗ | ✗ | ✗ | ✗ |
| Logos de clientes | ✓ | ✓ | ✗ | ✗ | ✓ |
| Testimonios con nombre y cargo | ✓ | ✗ | ✗ | ✗ | ✗ |
| Sello de partner | ◐ | ✓ | ✓ | ◐ | ◐ |
| Años de trayectoria | ✗ | ✓ | ✗ | ✓ | ✓ |
| Formulario corto (≤4 campos) | ✗ | ✗ | ◐ | ✓ | ◐ |
| WhatsApp visible y con etiqueta | ◐ | ◐ | ◐ | ◐ | ✗ |
| Noticias o blog activo | ✗ | ✗ | ✗ | ✗ | ✗ |
| Versión en inglés | ✗ | ✗ | ✓ | ✗ | ✓ |
| Política de privacidad | ✗ | ✓ | ✓ | ✗ | ✓ |

- **Textos de apoyo (leyenda):** `✓ Cumple` · `◐ Parcial` · `✗ No cumple`

## Slide 35 · Aprendizajes del mercado

- **Kicker:** `BENCHMARK COMPETITIVO`
- **Título:** Lo que aprendimos del mercado
- **Subtítulo:** Qué espera el comprador, qué ideas tomar y dónde Qubit ya gana.
- **Cuerpo (3 columnas con título):**

| `LO QUE EL COMPRADOR ESPERA` | `BUENAS IDEAS A CONSIDERAR` | `DONDE QUBIT YA GANA` |
| --- | --- | --- |
| CTA en el primer viewport (3 de 4) · Años de trayectoria (3 de 4) · Política de privacidad (3 de 4) · Páginas por servicio y sello de partner (2 de 4) | **Automática:** sección para el comprador técnico y pestañas por industria. **Quantia:** franja de cifras con sello Siemens y preguntas frecuentes. **Antares:** franja de credenciales y selector ES/PT/EN. **EXSOL:** referente técnico con nombre. | Resultados en todos los casos · Testimonios con cargo · Logos reconocidos · Mensaje llave en mano y OEM |

## Slide 36 · Oportunidades

- **Kicker:** `BENCHMARK COMPETITIVO`
- **Título:** Lo que nadie hace, Qubit puede hacerlo primero
- **Subtítulo:** Cinco espacios vacíos en el mercado.
- **Cuerpo (5 tarjetas):**

| Tarjeta | Título | Texto |
| --- | --- | --- |
| 1 | **Noticias activas** | Ningún competidor publica; el último post de EXSOL es de 2017. |
| 2 | **Landings por industria** | Nadie las tiene; Automática solo usa pestañas. |
| 3 | **Brochures descargables** | Ningún sitio ofrece PDFs. |
| 4 | **Filtros de casos** | Nadie deja filtrar por industria o servicio. |
| 5 | **WhatsApp y propuesta OEM** | Nadie resuelve bien WhatsApp ni desarrolla un mensaje para OEM. |

- **Para presentar:** «Lo interesante es que estas cinco cosas son justo lo que nadie tiene. No es seguir a la competencia, es adelantarse.»

---

# SECCIÓN 3 · PERFORMANCE (azul)

## Slide 37 · Portadilla

- **Kicker:** `PERFORMANCE`
- **Título:** Cómo rinde qubit.la en las áreas clave
- **Textos de apoyo (4 ítems abajo):** `1. Velocidad` · `2. Accesibilidad` · `3. Buenas prácticas` · `4. SEO`

## Slide 38 · Velocidad

- **Kicker:** `PERFORMANCE` · `Qubit: Lighthouse 13.4.1 (DevTools) · 04/10/2026`
- **Título:** Velocidad
- **Subtítulo:** La home rinde con margen de mejora, tanto en mobile como en desktop.
- **Cuerpo (izquierda):** El contenido principal tarda 4,1 s en cargar en mobile y 4,5 s en desktop. Influyen los recursos que bloquean el render y el peso de la página (~3 MB).

  **Idealmente,** el sitio nuevo cargaría el contenido principal en 2,5 s o menos, con imágenes más livianas y sin recursos que bloqueen el render.

- **Visual (derecha):** dos gauges con sus métricas.

| | Puntaje | FCP | LCP | TBT | CLS | Speed Index |
| --- | --- | --- | --- | --- | --- | --- |
| `MOBILE` | **64** | 3,3 s | 4,1 s | 390 ms | 0 | 6,8 s |
| `DESKTOP` | **62** | 1,9 s | 4,5 s | 0 ms | 0,004 | 4,6 s |

- **Textos de apoyo:**
  - Glosario chico: FCP = primer contenido visible · LCP = elemento principal cargado · TBT = tiempo bloqueado · CLS = saltos de layout

## Slide 39 · Usuarios reales

- **Kicker:** `PERFORMANCE`
- **Título:** Los usuarios reales sí aprueban
- **Cuerpo:** Según el Chrome UX Report (usuarios reales de Chrome en mobile, últimos 28 días), qubit.la aprueba Core Web Vitals. Es el único de los cinco sitios con tráfico suficiente para tener estos datos.

  El laboratorio simula una primera visita en un celular de gama media con 4G lento: (64/100 en Performance): justo el escenario de quien llega desde un anuncio de Google Ads.

- **Visual:** 3 indicadores en verde: `LCP 2,4 s` · `CLS 0,01` · `FCP 2,2 s`
- **Textos de apoyo (nota al pie):** INP todavía sin datos suficientes.
- **Para presentar:** «No es que el sitio ande mal para todos: la oportunidad está en la primera visita, que es la que pagan con Ads.»

## Slide 40 · Velocidad frente a la competencia

- **Kicker:** `PERFORMANCE`
- **Título:** Velocidad frente a la competencia
- **Subtítulo:** Puntaje de Performance en Lighthouse (0–100), mobile y desktop
- **Visual:** gráfico de barras horizontal con dos series (mobile y desktop) y Qubit resaltado.

| Sitio | Mobile | Desktop |
| --- | --- | --- |
| Qubit | 64 | 62 |
| Quantia | 79 | 94 |
| Automática | 57 | 61 |
| EXSOL | 87 | 87 |
| Antares | 51 | 70 |

- **Fuente (nota al pie):** Lighthouse 13.4.1 (DevTools), 04/10/2026, en las URLs indicadas por Guido.
- **Textos de apoyo (texto destacado):** En desktop, Quantia (94) y EXSOL (87) muestran que se puede rendir bien en el rubro. Qubit (62) tiene margen de mejora, sobre todo en LCP.

## Slide 41 · Accesibilidad

- **Kicker:** `PERFORMANCE`
- **Título:** Accesibilidad
- **Cuerpo:** Lighthouse marca contraste insuficiente, enlaces sin nombre (logo, WhatsApp, menú).

  **Idealmente,** el sitio nuevo cumpliría WCAG 2.2 AA desde las plantillas, con 95 o más.

- **Visual:** gauges `MOBILE 92` · `DESKTOP 92`

## Slide 42 · Buenas prácticas

- **Kicker:** `PERFORMANCE`
- **Título:** Buenas prácticas
- **Subtítulo:** Cumple lo que Lighthouse mide; falta revisar a mano la seguridad.
- **Cuerpo:** Aprueba todas las revisiones automáticas. Quedan por verificar a mano las políticas de seguridad (CSP, HSTS, COOP).

  **Idealmente,** el sitio nuevo mantendría el 100 y sumaría las políticas de seguridad (CSP, HSTS) desde el lanzamiento.

- **Visual:** gauges `MOBILE 100` · `DESKTOP 100`

## Slide 43 · SEO

- **Kicker:** `PERFORMANCE`
- **Título:** SEO
- **Subtítulo:** 100 en lo básico, pero con problemas que Lighthouse no mide.
- **Cuerpo:** Lighthouse revisa solo lo básico (title, meta description, que se pueda indexar), y en eso está bien. La revisión manual encontró lo que no detecta:
  - no hay H1
  - hay páginas de prueba indexadas
  - og:image es el logo en todo el sitio

  **Idealmente,** el sitio nuevo migraría con redirecciones 301 y tendría metadatos propios por página e idioma.

- **Visual:** gauges `MOBILE 100` · `DESKTOP 100`

---

# SECCIÓN 4 · MEDICIÓN (violeta; reemplaza «User's Behaviour / Clarity» de BWS)

> Nota para vos: en BWS esta sección tenía datos de Clarity. Qubit todavía no nos compartió datos de comportamiento, así que acá se propone qué medir. Si Qubit te pasa las métricas de leads antes de presentar, o si Clarity ya está instalado, sumá una slide «Lo que muestran los datos» con el formato de la slide «Dashboard Metrics» de BWS.

## Slide 44 · Portadilla

- **Kicker:** `MEDICIÓN`
- **Título:** ¿Cuánto convierte hoy la web?
- **Subtítulo:** Qubit invierte en Google Ads, pero todavía no sabe cuántos leads trae el sitio.
- **Cuerpo:** Para demostrar que el sitio nuevo funciona mejor, necesitamos una línea base antes del lanzamiento.

## Slide 45 · Plan de medición

- **Kicker:** `MEDICIÓN`
- **Título:** Optimizando la medición
- **Subtítulo:** Seis pasos para aprovechar lo que ya está instalado.
- **Cuerpo (6 tarjetas en 2 columnas):**

| Tarjeta | Título | Texto |
| --- | --- | --- |
| 1 | **Eventos de conversión** | Envío del formulario y clics en WhatsApp, teléfono y email, configurados en GTM sin tocar el WordPress. |
| 2 | **Conversiones en Google Ads** | Importar esos eventos y dejar de contar las visitas a las páginas de gracias. |
| 3 | **Desktop frente a mobile** | Separar los leads por dispositivo y por origen (Ads, orgánico, directo). |
| 4 | **Comportamiento con Microsoft Clarity** | Mapas de calor y grabaciones de sesiones en la home, el formulario y las futuras landings. Reemplaza a PageSense. |
| 5 | **Excluir el tráfico interno** | Filtrar las IPs del equipo para que los datos sean reales. |
| 6 | **Registrar las fechas de publicación** | Anotar cada cambio para comparar el antes y el después. |

## Slide 46 · Por qué Microsoft Clarity

- **Kicker:** `MEDICIÓN`
- **Título:** Ver lo que los números no muestran
- **Subtítulo:** Microsoft Clarity: gratuito, sin límite de tráfico y vinculado con GA4 y Google Ads.
- **Cuerpo (izquierda):** Los eventos de GA4 dicen **cuántos** usuarios convierten. Clarity muestra **por qué** no convierten los demás: dónde hacen clic, hasta dónde scrollean y dónde abandonan.
- **Cuerpo (derecha, 4 tarjetas):**

| Tarjeta | Título | Texto |
| --- | --- | --- |
| 1 | **Quien llega desde un anuncio** | Filtrar las sesiones por campaña de Google Ads y ver si lee el hero, llega a los casos o se va enseguida. |
| 2 | **Validar el diseño con datos reales** | Los clics sin respuesta muestran si la gente intenta abrir elementos que no son clicables o si no encuentra el contacto. |
| 3 | **Scroll y abandono del formulario** | Hasta dónde llegan en desktop y en mobile, y en qué campo dejan el formulario. |
| 4 | **Mejorar después del lanzamiento** | En las primeras semanas del sitio nuevo, detectar dónde se traba la gente y corregirlo con evidencia, no con suposiciones. |

- **Textos de apoyo (chips):** `Mapas de calor` · `Grabaciones de sesiones` · `Rage clicks y dead clicks` · `Embudos` · `Resúmenes con IA`
- **Nota al pie:** Se instalaría en el sitio nuevo desde GTM y cargaría solo después del consentimiento.
- **Para presentar:** «La usamos en otros proyectos: los mapas de calor y las grabaciones muestran problemas que con los números solos no se ven.»

## Slide 47 · Investigación de audiencia

- **Kicker:** `MEDICIÓN`
- **Título:** Próximo paso: conocer mejor a quién le hablamos
- **Subtítulo:** Una investigación que sirve para el sitio y para las campañas.
- **Cuerpo:** Vamos a profundizar en los tres perfiles: qué buscan, qué objeciones tienen y con qué palabras buscan. Eso va a alimentar los mensajes de las landings y las campañas de Google Ads.
- **Textos de apoyo (chips):** `Jefes de planta` · `Compras técnicas` · `Fabricantes de máquinas (OEM)`

---

# SECCIÓN 5 · PROPUESTAS Y BACKLOG (violeta)

## Slide 48 · Portadilla

- **Kicker:** `PROPUESTAS Y BACKLOG`
- **Título:** Cerrando la auditoría: propuestas y priorización del backlog

## Slides 49–51 · Action log

**Formato común:**

- Columnas: `ACCIÓN` · `SEVERIDAD` · `ESFUERZO` · `ETIQUETAS` · `MEJORA`
- Etiquetas (chips de color): `HEURÍSTICAS` · `CONTENIDO` · `PERFORMANCE` · `SEO` · `ACCESIBILIDAD` · `MOBILE` · `CROSS DEVICES` · `BENCHMARK` · `MEDICIÓN`
- Leyenda al pie: la escala de esfuerzo E0–E4 de la slide 4.

### Slide 49 · Alto impacto, poco esfuerzo

- **Kicker:** `PROPUESTAS Y BACKLOG`
- **Título:** Action log: alto impacto, poco esfuerzo
- **Subtítulo:** Fase «Ahora»: decisiones para fijar al empezar el diseño.

| Acción | S | E | Etiquetas | MEJ |
| --- | --- | --- | --- | --- |
| Configurar eventos de conversión en GTM y GA4, importarlos a Google Ads e instalar Microsoft Clarity (en lugar de PageSense) | — | E1 | MEDICIÓN | MEJ-01 |
| Titular con qué + para quién + resultado, y subtítulo con prueba | S3 | E1 | CONTENIDO · HEURÍSTICAS | MEJ-02 |
| Un CTA primario con beneficio y uno secundario «Ver casos» | S3 | E1 | HEURÍSTICAS | MEJ-02 |
| Hero con una sola foto horizontal, sin carrusel ni grilla | S2 | E1 | HEURÍSTICAS | MEJ-02 |
| Botón de WhatsApp con etiqueta visible, contraste alto y mensaje precargado | S3 | E1 | HEURÍSTICAS · BENCHMARK | MEJ-03 |
| Formulario de 4 campos, con teléfono opcional y tipo de consulta | S2 | E1 | HEURÍSTICAS · CROSS DEVICES | MEJ-03 |
| Corregir y validar los testimonios; guía de tono con voseo | S3 | E1 | CONTENIDO | MEJ-07 |
| Sumar años, sello de partner y propuesta para OEM | S2 | E1 | CONTENIDO · BENCHMARK | MEJ-07 |
| Paleta accesible (#9D6BFF) y sin autoplay | S2 | E1 | ACCESIBILIDAD · HEURÍSTICAS | MEJ-08 |
| Plantillas con nombres accesibles, un H1 y alt útiles | S3 | E1 | ACCESIBILIDAD · SEO | MEJ-09 |
| Presupuesto de performance: menos de 1,5 MB, LCP de 2,5 s o menos, Lighthouse mobile de 80 o más | S3 | E1 | PERFORMANCE · MOBILE | MEJ-10 |

### Slide 50 · Esfuerzo moderado

- **Kicker:** `PROPUESTAS Y BACKLOG`
- **Título:** Action log: esfuerzo moderado
- **Subtítulo:** Fase «Próximo»: piezas que se construyen para el lanzamiento.

| Acción | S | E | Etiquetas | MEJ |
| --- | --- | --- | --- | --- |
| Tarjeta de caso propia y listado con encabezado y filtros | S3 | E2 | HEURÍSTICAS | MEJ-04 |
| Arquitectura: Soluciones · Industrias · Proyectos · Nosotros · Noticias, igual en desktop y mobile | S3 | E2 | HEURÍSTICAS · CROSS DEVICES | MEJ-06 |
| Una página por servicio, incluida «solo programación» | S3 | E2 | HEURÍSTICAS · SEO | MEJ-06 |
| Mapa de redirecciones 301, noindex en las páginas de gracias y metadatos por página | S3 | E2 | SEO | MEJ-11 |
| Política de privacidad y banner de cookies con asesoría legal | S3 | E2 | HEURÍSTICAS · BENCHMARK | MEJ-12 |
| Reactivar Noticias: plantilla, ritmo y carga asistida con Claude vía Piero | S2 | E2 | CONTENIDO | MEJ-14 |
| Inglés en las páginas clave, con selector y hreflang | S2 | E2 | BENCHMARK | MEJ-05 |

### Slide 51 · Mayor esfuerzo

- **Kicker:** `PROPUESTAS Y BACKLOG`
- **Título:** Action log: mayor esfuerzo
- **Subtítulo:** Las dos apuestas grandes, que conviene arrancar temprano.

| Acción | S | E | Etiquetas | MEJ |
| --- | --- | --- | --- | --- |
| Landings por industria con casos y brochure descargable (empezar por 3 o 4 industrias) | S3 | E3 | BENCHMARK · SEO | MEJ-13 |

## Slide 52 · Roadmap

- **Kicker:** `PROPUESTAS Y BACKLOG`
- **Título:** Roadmap del rediseño
- **Subtítulo:** «Ahora» y «Próximo» forman la primera versión del sitio.
- **Visual:** una flecha con 4 etapas.

| Etapa | Título | Mejoras |
| --- | --- | --- |
| 1 | **Ahora · definir y medir** | MEJ-01, 02, 03, 07, 08, 09, 10 |
| 2 | **Próximo · construir** | MEJ-04, 13, 06, 11, 12, 14, 05 |
| 3 | **Lanzamiento** | — |
| 4 | **Después · ampliar** | Más landings, inglés en el resto del sitio y ajustes según las métricas |

- **Textos de apoyo (nota al pie):** Conviene arrancar ya con la plataforma, la redacción legal, el mapa de URLs, los brochures y las páginas en inglés, porque condicionan el diseño.

## Slide 53 · Ideas para potenciar el sitio

- **Kicker:** `PROPUESTAS Y BACKLOG`
- **Título:** Veamos algunas ideas para potenciar el sitio nuevo >>
- **Subtítulo:** Inspiradas en el benchmark, adaptadas a Qubit.
- **Cuerpo (4 tarjetas):**

| Tarjeta | Título | Texto |
| --- | --- | --- |
| 1 | **Franja de credenciales** | Años, proyectos y sello de partner debajo del hero. |
| 2 | **Preguntas frecuentes del comprador** | «¿Puedo contratar solo la programación?», «¿Hacen llave en mano?», «¿Dan soporte después?». |
| 3 | **Sección para compras técnicas** | Alcance, entregables (FAT/SAT, documentación) y soporte. |
| 4 | **Landings como destino de los anuncios** | Una landing por industria para cada campaña de Google Ads. |

## Slide 54 · Próximos pasos (nueva frente a BWS)

- **Kicker:** `PRÓXIMOS PASOS`
- **Título:** ¿Qué sigue?
- **Subtítulo:** Lo que necesitamos para arrancar el diseño.
- **Cuerpo (checklist):**
  1. Reunión con Piero: carga de contenido y presupuesto de performance.
  2. Configurar la medición en el sitio actual (MEJ-01).
  3. Recibir de Qubit:
     - los brochures y las industrias prioritarias
     - los años de trayectoria y las certificaciones
     - el plazo de respuesta
  4. Validar los testimonios con cada cliente.
  5. Definir qué páginas van en inglés.
  6. Arrancar la investigación de audiencia.

## Slide 55 · Cierre

- **Kicker:** —
- **Título:** Qubit ya tiene la prueba más difícil de conseguir: resultados reales con clientes reconocidos. El sitio nuevo es la oportunidad de hacer que se vea, se entienda y convierta.
- **Subtítulo:** Gracias por confiarnos este rediseño.

---

## Lista de capturas (para sacarlas todas de una vez)

| # | Página | Viewport | Qué mostrar | Slide |
| --- | --- | --- | --- | --- |
| 1 | Home, primer viewport | Desktop 1440 | Titular, CTAs y hero | 18 |
| 2 | Home, primer viewport | Mobile 375 | La foto debajo del texto | 18 |
| 3 | Header (zoom) | Desktop | Botón de WhatsApp | 19 |
| 4 | Formulario de contacto | Desktop | Los 6 campos | 19 |
| 5 | Home: tarjetas de casos y de industria | Desktop | Que se ven iguales | 20 |
| 6 | /proyectos/ | Desktop | Sin título ni filtros | 20 |
| 7 | /category/noticias/ | Desktop | Página vacía | 21 |
| 8 | Menú desktop y menú mobile abierto | Ambos | Que tienen ítems distintos | 21 |
| 9 | Caso Biomás: encabezado | Desktop | Sin breadcrumb ni ítem activo | 21 |
| 10 | /sobre-nosotros/: testimonio | Desktop | «GM2DEV» | 22 |
| 11 | Home: hero y carruseles | Desktop 1440 | Que avanzan solos | 23 |
| 12 | Banner de cookies | Mobile 375 | Con el texto de la política | 25 |
| 13 | /prueba-form/ | Desktop | «This is form» | 25 |
| 14 | Header de Antares con ES/PT/EN | Desktop | La comparación de idioma | 26 |
| 15 | PageSpeed de qubit.la (mobile y desktop) | — | Gauges y métricas | 38, 41–43 |

**Tip para PageSpeed:** entrá a pagespeed.web.dev, analizá qubit.la y capturá cada categoría en las pestañas Mobile y Desktop. Los números pueden variar un poco respecto de los del 28/09; aclará la fecha en la slide o usá los del informe.

---

# AGREGADO 05/10 · Ejemplos de hallazgos en Performance (formato Blockware)

- **Nueva slide después de «Velocidad»: «Qué hace lenta a la home» (PERF-01 · MEJ-10).** 4 tarjetas: imágenes pesadas (4 fotos de hero de 290–581 KB y 5 de casos de 531–698 KB, sin WebP/AVIF; propuesta: formatos modernos y máx. 250 KB), recursos que frenan el render (~2,2 s en mobile), imágenes sin tamaño declarado (49 de 65) y página de ~3 MB (meta: menos de 1,5 MB y Performance ≥ 80).
- **Accesibilidad:** tarjetas «A mejorar» con A11Y-01 (controles sin nombre), A11Y-02 (8 de 13 logos de clientes y 8 de marcas leídos como archivos) y A11Y-03 (contraste 3,4:1; propuesta #9D6BFF, 5,7:1).
- **SEO:** SEO-01 (4 páginas de prueba y 3 de gracias en el mapa del sitio), SEO-02 (sin H1; 38 H2 en la home) y SEO-04 (vista previa con logo de 2361×601 px).
- **Buenas prácticas** queda sin tarjetas: Lighthouse da 100 y lo único pendiente es verificar a mano las políticas de seguridad.
