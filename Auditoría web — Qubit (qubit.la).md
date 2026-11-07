# Auditoría web — Qubit (qubit.la)

25 de septiembre de 2026 · actualizada el 29 de septiembre de 2026 · @Lourdes

## Resumen ejecutivo

Qubit va a rehacer su sitio desde cero y lo usa para captar leads, con Google Ads activo. Este audit es el input para ese rediseño. Qubit tiene lo más difícil de conseguir para un integrador B2B: **casos reales con resultados medibles, clientes reconocidos y testimonios con nombre y cargo**. Ninguno de los cuatro competidores analizados lo tiene completo. Pero el sitio actual no lo hace valer: el titular es genérico, los casos no se ven como proyectos ni como clickeables, el botón de WhatsApp pasa desapercibido, Noticias está vacía y no hay versión en inglés.

**La velocidad es una buena oportunidad para el sitio nuevo.** Los usuarios reales en mobile ya aprueban Core Web Vitals. Pero en la prueba de laboratorio (primera visita, celular de gama media) la home tarda en cargar: 64/100 en Lighthouse mobile (DevTools, 04/10), mientras que los competidores sacan entre 51 y 87 (Lighthouse en DevTools, 04/10/2026, en las URLs indicadas por Guido). Hay margen de mejora, sobre todo en el peso de las imágenes, y el sitio nuevo puede resolverlo desde el diseño. Esto importa porque la primera visita es justo la de quien llega desde un anuncio.

Se registraron **26 hallazgos**: 11 mayores, 14 menores y 1 cosmético, ninguno catastrófico. **15 se resuelven con poco esfuerzo** si el sitio nuevo los contempla desde el diseño.

**Lo que el sitio nuevo tiene que resolver primero:**

- propuesta de valor clara y CTA con beneficio (CONT-01, UX-02)
- casos reconocibles, completos y filtrables (UX-09, UX-05)
- landings por industria con brochure (UX-04)
- WhatsApp visible (UI-05)
- formulario simple (UX-07)
- Noticias reactivada (UX-01)
- performance móvil (PERF-01)
- versión en inglés en páginas clave (UX-10)
- testimonios corregidos (CONT-02)

**Oportunidad principal:** ninguno de los cuatro competidores tiene noticias activas, landings por industria, brochures descargables ni filtros de casos, y ninguno resuelve bien WhatsApp. Conectar cada industria con sus casos cuantificados y su brochure, y publicar novedades con regularidad, le daría a Qubit una ventaja clara.

| Enfoque | Sev 3 | Sev 2 | Sev 1 | Total |
| --- | --- | --- | --- | --- |
| UX/usabilidad | 5 | 5 | 0 | 10 |
| UI/consistencia | 1 | 1 | 0 | 2 |
| Contenido/wording | 2 | 2 | 1 | 5 |
| Performance | 1 | 0 | 0 | 1 |
| SEO técnico | 1 | 2 | 0 | 3 |
| Accesibilidad | 1 | 4 | 0 | 5 |
| **Total** | **11** | **14** | **1** | **26** |

**Cambios respecto de la versión del 25/09:**

- Se suma el contexto del proyecto de rediseño.
- El benchmark ahora usa Quantia, Automática, EXSOL y Antares.
- Se agregan las mediciones de Lighthouse de los cinco sitios.
- Cambios de severidad:
  - UX-01 baja a 2: no impide contactar.
  - UX-04 sube a 3 porque las landings por industria entran en el alcance.
  - UX-10 baja a 2: el inglés se plantea en páginas clave.
- Se reescriben UX-01, UX-04 y UX-10.
  - Se suma UX-11 (breadcrumb y estado activo del menú).
  - Se descartan UX-06 (scroll de rueda), UI-01 (header transparente), UI-02 (carrusel de testimonios), UI-03 (banner de cookies) CONT-03 (textos en inglés y restos de plantilla) PERF-02 (JavaScript) SEO-03 (resultados en «0») SEO-05 (datos estructurados) SEO-06 (duplicados) SEO-07 (crawl-delay) y A11Y-04 (skip link).

## Contexto y alcance

Brief con el contexto del proyecto:

- **Objetivo del sitio:** captar leads de proyectos por formulario, WhatsApp y teléfono. Hay Google Ads activo y Qubit tiene métricas de leads, pero no sabe cuánto convierte la web.

- **Modelo de negocio:** automatización industrial llave en mano (del diseño a la puesta en marcha), o solo la programación.

- **Usuarios:**
  - jefes de planta y compradores (~75 % con conocimiento técnico)
  - fabricantes de maquinaria (OEM) que encargan soluciones
  - visitantes de Telus Digital de otros países

- **Audiencia del informe:** Qubit, el equipo de diseño y el de desarrollo. El detalle técnico completo está en la planilla.

- **Outcome:** input de diseño para rehacer el sitio desde cero, fuera del WordPress actual, que hoy nadie puede modificar. No se proponen arreglos provisorios al sitio actual.

- **Alcance del rediseño:**
  - mismas secciones que hoy, funcionando bien
  - landings por industria o caso de uso
  - Noticias reactivada
  - selector de inglés como mejora puntual

- **Gestión de contenido:** la hace Qubit, con prompts de Claude para cargar contenido de forma automática a través de Piero.

- **Competidores:** Quantia, Automática, EXSOL y Antares.

| Página | Objetivo principal |
| --- | --- |
| Home | Entender la oferta y pedir contacto |
| Proyectos | Encontrar un caso de mi industria |
| Caso de estudio | Convencer con resultados y llevar a contacto |
| Landing por industria (nueva) | Ver la solución para mi industria y bajar el brochure |
| Nosotros | Generar confianza en el equipo |
| Noticias | Mostrar actividad y conocimiento técnico |

**Cómo se accedió:**

- Navegador integrado, en desktop (~1094 px) y mobile (375×812), para navegar, capturar y leer el DOM.
- Lectura del HTML sin JavaScript.
- PageSpeed Insights (Lighthouse 13.5) el 28/09/2026 para Qubit y los cuatro competidores.
- Lighthouse 13.4.1 en Chrome DevTools el 04/10/2026 para Qubit (home) y Antares (URL indicada por Guido), en mobile y desktop. Es la medición de referencia para la comparación; los valores de PageSpeed Insights de Qubit se conservan como segunda lectura en [Métricas](#métricas).
- La extensión de Chrome no se usó.

**Qué no se pudo evaluar:**

- INP de campo: CrUX no tiene suficientes datos. Tampoco hay datos de campo en desktop.
- El envío real del formulario (no se enviaron datos) y la configuración de eventos y conversiones en GA4 y Google Ads.
- Una prueba con lector de pantalla real; lo reportado sale del análisis del DOM y de Lighthouse.
- /servicios/, /impresoras/ y los artículos de blog: solo estructura y títulos.

**Fuentes revisadas (25 y 28/09/2026):**

- Páginas principales: home, /proyectos/, /sobre-nosotros/, caso Biomás, /category/noticias/ (vacía), /blog/, /servicios/ e /impresoras/.
- Páginas de prueba y de gracias (responden 200).
- /politica-de-privacidad/ y /privacy-policy/ (404).
- robots.txt, sitemaps y API de WordPress.

## Oportunidades para el sitio nuevo

Oportunidades que se desprenden del contexto del rediseño, verificadas en el sitio actual.

| Oportunidad | Qué encontramos | Hallazgos |
| --- | --- | --- |
| Rehacer el sitio desde cero | Todas las recomendaciones apuntan al sitio nuevo. La migración necesita redirecciones 301 para no perder posicionamiento. | SEO-01 |
| Hero con una imagen que luzca | No está deformada, pero se recorta mucho según la proporción de pantalla: son fotos verticales en una columna angosta. Encima tiene una grilla y bloques violetas, rota entre 4 fotos y en mobile queda debajo del texto. | UI-04, PERF-01, A11Y-05 |
| WhatsApp más visible | Es un cuadrado violeta con ícono negro, sin texto, sobre el header negro, con contraste 3,4:1. | UI-05, A11Y-01 |
| Jerarquía en el botón de contacto | Hay 4 botones «Contacto» visibles que llevan al mismo formulario (9 en el código, con copias ocultas), y en el menú «Contacto» se ve igual que cualquier otro ítem. | UX-02 |
| Sección de proyectos con encabezado claro y casos actualizados | /proyectos/ no tiene título, intro ni filtros; faltan casos destacados en la home. Las tarjetas muestran al cliente, no el proyecto, y no parecen clickeables. | UX-05, UX-09 |
| Noticias activa | «Noticias» está vacía. El último artículo es de febrero de 2025 y el último caso, de septiembre de 2025. | UX-01 |
| Landings por industria o caso de uso | No hay páginas por industria ni por caso de uso. Las 8 tarjetas de industria no llevan a ningún lado. | UX-04 |
| Versión en inglés | No hay versión en inglés, selector de idioma ni hreflang. Al ser parte de Telus Digital, el sitio puede recibir visitas de otros países. | UX-10 |
| Medir cuánto convierte la web | Están instalados GTM, GA4, Google Ads, Meta Pixel y Zoho PageSense (mapas de calor). Las páginas de gracias indexables pueden inflar las conversiones. | SEO-01 |

Queda para validar:

- las métricas actuales de leads por canal y dispositivo
- si /servicios/ e /impresoras/ son landings de campaña
- cómo quieren comunicar la relación con Telus Digital
- qué páginas entran en la versión en inglés

## Fortalezas

- **Casos de estudio sólidos:** cliente → desafío → solución → resultados cuantificados → hardware y software. Es el único de los cinco sitios con resultados medibles en todos sus casos.

- **Prueba social fuerte:** logos reconocidos (Campari, UBA, Americold, Denver Farma, Grupo Cepas) y testimonios con nombre, cargo y foto. Ningún competidor tiene testimonios con cargo.

- **Oferta completa ya presente:** menciona el servicio llave en mano y a los fabricantes de máquinas (OEM). Solo falta desarrollarlo.

- **Contacto a mano en desktop:** el header es fijo y muestra siempre «Contacto» y WhatsApp, con formulario en las páginas y teléfono y dirección en el pie. En mobile, ambos quedan dentro del menú (ver UI-05).

- **Base técnica sana:** la home tiene title y meta description bien trabajados, canonical, lang=es, sitemap, HTTPS y CLS casi nulo. Es el único de los cinco con datos de campo en Chrome, y en mobile aprueba Core Web Vitals.

- **Medición instalada:** GTM, GA4, Google Ads y Zoho PageSense ya están cargados. Hay una base para medir sin empezar de cero.

- **Identidad visual propia:** negro, violeta y grilla aplicados con consistencia; en mobile no hay scroll horizontal.

## Quick wins para el sitio nuevo

15 hallazgos se resuelven con poco esfuerzo si el sitio nuevo los contempla desde el diseño. Los que dependen de piezas más grandes (Noticias, casos, migración e inglés) están en las Propuestas. Ordenados por severidad:

| ID | Sev | Qué pasa hoy | Qué hacer en el sitio nuevo |
| --- | --- | --- | --- |
| UX-02 | 3 | CTAs «Contacto» genéricos que van todos al mismo formulario (4 visibles en la home) | Recomendamos un CTA primario con beneficio y uno secundario de exploración («Ver casos»). Sugerimos destacar «Contacto» como botón en el menú. |
| UI-05 | 3 | El botón de WhatsApp pasa desapercibido | Recomendamos ícono claro, etiqueta visible y contraste alto, sin competir con el CTA principal |
| CONT-01 | 3 | Titular del hero genérico | Recomendamos un titular con qué + para quién + resultado, y un subtítulo con prueba y respaldo de Telus Digital |
| CONT-02 | 3 | Testimonio que nombra a otra empresa («GM2DEV») y clientes mal escritos | Recomendamos corregir y validar cada testimonio con el cliente antes de migrarlo |
| PERF-01 | 3 | Imágenes y hero con margen de mejora: LCP de laboratorio de 4,1 s en mobile | Recomendamos imágenes más livianas y que la imagen principal cargue primero, para que la página se vea en 2,5 s o menos |
| SEO-01 | 3 | Páginas de prueba y de gracias visibles para Google | Recomendamos no migrar las de prueba y ocultar las de gracias de Google |
| A11Y-01 | 3 | Menú mobile, logo y WhatsApp sin nombre accesible | Recomendamos un nombre claro en todos los controles y que el menú indique si está abierto |
| UX-07 | 2 | Formulario de 6 campos, todos obligatorios | Recomendamos nombre, email, empresa y mensaje, con teléfono opcional y tipo de consulta |
| UI-04 | 2 | La imagen del hero se recorta y no luce | Recomendamos una foto horizontal para el hero, con punto focal por breakpoint y sin grilla encima |
| CONT-04 | 2 | Voseo, tuteo y usted mezclados | Recomendamos una guía de tono con voseo |
| SEO-02 | 2 | Sin título principal (H1) en ninguna página | Recomendamos un título principal por página y una jerarquía ordenada de títulos |
| A11Y-02 | 2 | Descripciones de logos con nombres de archivo | Recomendamos describir cada logo con el nombre del cliente o de la marca |
| A11Y-03 | 2 | Contraste de 3,4:1 en las etiquetas violetas de cada sección | Recomendamos un violeta más claro para el texto sobre negro (#9D6BFF, 5,7:1) |
| A11Y-05 | 2 | Hero y carruseles que avanzan solos, sin pausa | Recomendamos un hero fijo y carruseles con pausa visible |
| A11Y-06 | 2 | Formulario sin autocompletado ni obligatorios marcados | Recomendamos activar el autocompletado, el teclado numérico para el teléfono y marcar los obligatorios |

## Hallazgos

Los hallazgos se agrupan por enfoque, en el orden de prioridad del equipo, y dentro de cada uno van de mayor a menor severidad (escala 0–4 de Nielsen [2]). Cada hallazgo describe el sitio actual; la recomendación es para el sitio nuevo. La evidencia, el impacto, el criterio y la confianza de cada uno están en la planilla.

### UX / usabilidad

| ID | Sev | Qué pasa | Recomendación para el sitio nuevo | Ref. |
| --- | --- | --- | --- | --- |
| UX-02 | 3 | **CTAs genéricos que no llevan a ninguna parte distinta.** La home tiene 4 botones visibles (9 en el código, con copias ocultas) y todos van al mismo formulario. Ninguno dice qué obtiene el usuario, «Mas información» no lleva a más información, y en el menú «Contacto» se ve igual que cualquier otro ítem. Aunque la meta description promete «Consultá sin cargo», el botón no lo dice. Automática y Antares suman un CTA secundario hacia casos o soluciones. | Recomendamos un CTA primario con beneficio y uno secundario de exploración («Ver casos»). Sugerimos destacar «Contacto» como botón en el menú. | [1], [3] |
| UX-03 | 3 | **Las soluciones principales no tienen página propia.** «Soluciones llave en mano», «OEM» y «Asistencia técnica» son tarjetas de una frase, sin enlace ni detalle. Las dos páginas de servicio que existen, /servicios/ (mantenimiento eléctrico) e /impresoras/ (rotuladoras), no están enlazadas desde ninguna página; pueden ser landings de campaña. Quantia y Antares tienen una página por servicio. | Recomendamos una página por solución, con qué incluye, para quién, casos relacionados y CTA. Sugerimos definir qué se hace con /servicios/ e /impresoras/. | [1] |
| UX-04 | 3 | **Las industrias no llevan a ninguna parte.** Las 8 industrias de la home (Petróleo y gas, Manufactura, Alimentos y Bebidas, Energía, Minería, Industria Automotriz, Química y petroquímica y Farmacéutica) tienen una frase genérica y ningún enlace: desde «Alimentos y Bebidas» no se llega al caso Campari. No hay landings por industria ni por caso de uso. Ningún competidor las tiene ni ofrece brochures descargables; Automática segmenta con pestañas en la home. | Recomendamos una landing por industria o caso de uso: problema típico, solución, casos relacionados con resultados, brochure descargable y CTA. Sugerimos empezar por las industrias con más casos y con más material disponible. | [1], [10] |
| UX-08 | 3 | **Sin política de privacidad.** No existe: no hay ningún enlace a privacidad, cookies o términos en la home (footer incluido) y las 7 rutas habituales dan 404. El banner de cookies (en inglés) dice «our privacy policy» sin enlazarla. El formulario envía nombre, empresa, email y teléfono a Salesforce sin aviso ni casilla de consentimiento, y el sitio carga herramientas de seguimiento (Google Tag Manager, Meta Pixel, Google Ads y Zoho PageSense). Quantia, Automática y Antares sí la tienen. Qubit la necesita por la Ley 25.326 (aviso al recolectar datos personales) y porque Google Analytics y Google Ads exigen una política que informe el uso de cookies y de remarketing. | Recomendamos publicar la política de privacidad y cookies en el lanzamiento, validada por asesoría legal y enlazada en el footer, el banner y el formulario. | [16], [23] |
| UX-09 | 3 | **Los casos no se ven como proyectos ni como clickeables.** Las 3 tarjetas de la home (Americold, Biomás y Campari) son enlaces, pero cada una se titula con el nombre del cliente y describe a la empresa («Americold es el mayor REIT…»), no el proyecto ni su resultado. No tienen «Ver caso», flecha ni otra señal de enlace, y comparten el patrón de las tarjetas de industria (número violeta, título y texto), que no son clickeables. Lo único que invita a seguir es un «Ver más casos de estudio» al final de la sección. | Recomendamos una tarjeta de caso propia con título del proyecto, cliente, industria, resultado principal y «Ver caso» visible. | [1] |
| UX-01 | 2 | **«Noticias» lleva a una página vacía.** La categoría solo muestra su título y el formulario. El blog real vive en /blog/, fuera del menú, y mezcla artículos con casos: el último artículo es de febrero de 2025 y el último caso, de septiembre de 2025. En mobile el menú ni siquiera incluye «Noticias». Ninguno de los cuatro competidores tiene noticias activas. | Recomendamos reactivar Noticias en una sola sección, separada de los casos, con plantilla simple, categorías acotadas y un ritmo de publicación sostenible. Sugerimos un flujo asistido para cargar contenido y el mismo menú en desktop y mobile. | [1] |
| UX-10 | 2 | **Sin versión en inglés ni selector de idioma.** Hoy no existe: /en/ da 404 y no hay selector, hreflang ni plugin de traducción; el sitio declara solo español. Al ser parte de Telus Digital, puede recibir visitas de otros países. Automática y Antares ya tienen versión en inglés. | Recomendamos un selector de idioma visible y una versión en inglés de las páginas clave (home, casos destacados, nosotros, contacto), con URLs por idioma y hreflang. Sugerimos ampliarla después si hace falta. | [18] |
| UX-05 | 2 | **Proyectos sin encabezado ni filtros, y con casos faltantes.** La página no tiene título, intro ni filtros. Lista 9 casos mezclados con 3 artículos del blog, sin distinguirlos. Americold y Biomás, destacados en la home y con página propia, no aparecen. Quantia resuelve el listado con título claro y detalle por caso. | Recomendamos mostrar todos los casos, separados de los artículos, con título, intro y filtros por industria y servicio. | [1] |
| UX-07 | 2 | **Formulario más largo de lo necesario.** Tiene 6 campos (nombre, apellido, empresa, email, teléfono y mensaje), más reCAPTCHA. En la prueba, todos eran obligatorios y ninguno estaba marcado. No pregunta el tipo de consulta ni dice en cuánto responden. 3 de los 5 sitios comparados tienen formularios de 5–6 campos; solo EXSOL tiene uno corto. | Recomendamos pedir nombre, email, empresa y mensaje, con teléfono opcional. Sugerimos sumar el tipo de consulta e indicar el plazo de respuesta. | [7] |
| UX-11 | 2 | **Cuesta saber dónde estoy y volver.** En /proyectos/ y en los casos, el ítem activo del menú se ve igual que los demás y no hay un breadcrumb visible. Los casos viven en la raíz del sitio, sin /proyectos/ en la dirección. El único enlace «Volver a proyectos» está al final del caso, a unos 4.100 px del inicio. | Recomendamos marcar el ítem activo del menú, sumar un breadcrumb (Proyectos > nombre del caso) y un enlace «Volver a proyectos» visible al comienzo del caso. | [1] |

### UI / consistencia

| ID | Sev | Qué pasa | Recomendación para el sitio nuevo | Ref. |
| --- | --- | --- | --- | --- |
| UI-05 | 3 | **El botón de WhatsApp pasa desapercibido.** Cuadrado violeta (#7830F7) con ícono negro, sin texto, sobre header negro. Con 3,4:1 pasa el mínimo de contraste para componentes, pero oscuro sobre oscuro no se destaca y no usa los colores que se asocian con WhatsApp. En mobile ni siquiera está en el header: solo aparece al abrir el menú. Ningún competidor lo resuelve bien: solo ícono, «WA», un número que no se puede clickear o ningún botón. | Recomendamos un ícono claro con etiqueta visible («WhatsApp» o «Escribinos») y contraste alto, sin competir con el CTA principal. Sugerimos que en mobile se vea sin abrir el menú. | [8], [9] |
| UI-04 | 2 | **La imagen del hero se recorta y no luce.** No está deformada: son fotos verticales (1920×2560) en una columna que cambia de proporción, así que se recortan mucho (466×1272 px en una ventana de 1094 px). Encima tiene una grilla y bloques violetas, rota entre 4 fotos y en mobile queda debajo del texto. | Recomendamos una foto horizontal elegida para el hero, con punto focal por breakpoint y sin grilla sobre el sujeto. | [3], [6] |

### Contenido / wording

| ID | Sev | Qué pasa | Recomendación | Ref. |
| --- | --- | --- | --- | --- |
| CONT-01 | 3 | **Titular genérico.** «Tecnología al servicio de la Industria» no dice por sí solo qué hace Qubit ni por qué elegirla. El subtítulo sí nombra los servicios (llave en mano, soporte para fabricantes de máquinas y asistencia técnica en planta), pero en una frase larga y sin resultado. El diferencial aparece recién en la segunda sección y el «by TELUS» del logo no se explica. Automática, el competidor con el titular más claro, nombra la especialidad y el público. | Recomendamos un titular con qué + para quién + resultado, y un subtítulo corto con prueba y respaldo de Telus Digital. | [3], [4] |
| CONT-02 | 3 | **Testimonio que nombra a otra empresa.** «GM2DEV nos brindó una solución integral…» en /sobre-nosotros/ y en los casos (en la home dice «Qubit»). Además: «Lapetit» (el logo dice Lepetit), «Maintenance Cheif», «Frio ingenieria» y el tag «laboratorio-tateur» (Tuteur). Los mismos cuatro testimonios se repiten en todos los casos aunque no correspondan: el de Witech, sobre evaporación y secado, aparece en el caso de efluentes de Tuteur. | Recomendamos corregir nombres y cargos y validar cada testimonio con el cliente. Sugerimos mostrar en cada caso el testimonio del cliente correspondiente. | — |
| CONT-04 | 2 | **Tres tratamientos mezclados.** Las tarjetas de industria mezclan tuteo («Optimiza», «Garantiza») y usted («Automatice», «Mantenga»), mientras el resto del sitio usa voseo («Conocé», «Contactanos»). Los artículos del blog usan tuteo («Aprende», «Descubre»). | Recomendamos unificar en voseo, como en el resto del sitio, y armar una guía de tono corta. | [4] |
| CONT-06 | 2 | **Beneficios genéricos, sin trayectoria ni sellos.** Hay frases intercambiables («eficientes y confiables», «de vanguardia», «la opción más robusta») sin datos. Nosotros tiene cifras (+300 proyectos), pero no años, certificaciones ni partnerships. Muestra 8 marcas (Siemens, Schneider, ABB y otras) sin nivel de partner. 3 de 4 competidores muestran años de trayectoria y 2 destacan un sello de partner. El mensaje para OEM es una sola tarjeta. | Recomendamos reemplazar adjetivos por datos y casos. Sugerimos sumar años de trayectoria (el schema dice 2000, a validar), certificaciones y niveles de partner verificables, y desarrollar la propuesta para OEM. | [4], [19] |
| CONT-05 | 1 | **Ortografía y formatos.** «Mas información» sin tilde, fechas «septiembre 15, 2025» (con el orden del inglés), cargos con mayúsculas dispares («GERENTE DE FINANZAS», «asociado comercial», «proyectista Eléctrico») y © 2025 desactualizado. | Recomendamos corregir las tildes, usar el formato «15 de septiembre de 2025», unificar las mayúsculas de los cargos y actualizar el año. | — |

### Performance

Medido con Lighthouse 13.4.1 en Chrome DevTools el 04/10/2026 (home). En mobile emula un Moto G Power con 4G lento. En PageSpeed Insights (28/09) la misma home obtuvo 29 en mobile y 57 en desktop: el puntaje de laboratorio varía entre corridas y entre herramientas. La comparación completa está en [Métricas](#métricas).

| ID | Sev | Qué pasa | Recomendación | Ref. |
| --- | --- | --- | --- | --- |
| PERF-01 | 3 | **Las imágenes y el hero tienen margen de mejora.** En la prueba de laboratorio en mobile (celular de gama media, 4G lento), el LCP es de 4,1 s y el FCP de 3,3 s; los usuarios reales en mobile ya aprueban Core Web Vitals. En desktop, el LCP es de 4,5 s. La página pesa ~3.100 KiB en mobile y ~4.100 KiB en desktop. Hay 4 JPG de hero (290–581 KB) y 5 de casos (531–698 KB), ninguno en WebP/AVIF, y 49 de 65 imágenes no declaran width/height. Los recursos que bloquean el render suman ~2,2 s en mobile. Antares, medido con el mismo método, tiene el mismo patrón (render-blocking de ~2,9 s en mobile). | Recomendamos usar imágenes más livianas y dar prioridad a la carga de la imagen principal. Sugerimos cargar el resto de las imágenes a medida que se necesitan y reducir lo que frena la primera carga de la página. | [13], [14] |

### SEO técnico

Lighthouse le da 100 en SEO, pero solo revisa lo básico (title, meta description, indexable, enlaces rastreables). Lo que sigue lo detectó la revisión manual.

| ID | Sev | Qué pasa | Recomendación | Ref. |
| --- | --- | --- | --- | --- |
| SEO-01 | 3 | **Páginas de prueba y de gracias visibles para Google.** /prueba-form/ (con el encabezado «This is form»), /prueba-grilla-1/ y 2, /impresoras-old/ y 3 páginas de gracias están en el mapa del sitio y sin la marca que pide a Google no mostrarlas. Importa por dos motivos. Si las de gracias se usan para contar conversiones, cada visita suma un «lead» aunque nadie haya enviado el formulario, y eso distorsiona los reportes y las decisiones de Google Ads. Y quien busque a Qubit puede encontrar páginas de prueba sin contenido. | Recomendamos no migrar las páginas de prueba y ocultar las de gracias de Google. Sugerimos medir las conversiones por el envío del formulario y no por la visita a la página de gracias. | [11] |
| SEO-02 | 2 | **Sin título principal (H1) en ninguna página.** Todos los títulos son del mismo nivel (H2): 38 en la home, con duplicados ocultos. En los casos, el título del proyecto queda al mismo nivel que etiquetas como «Incremento de pureza», así que nada marca qué es lo principal. Con un título principal y subtítulos ordenados, cada página dice de qué trata de un vistazo, para buscadores y para quienes navegan con lector de pantalla y saltan de título en título. | Recomendamos un título principal por página y una jerarquía ordenada de títulos y subtítulos. | [10], [9] |
| SEO-04 | 2 | **Las descripciones y las vistas previas son pobres.** /proyectos/ no tiene descripción para Google; la de Nosotros tiene 400+ caracteres y termina en «See open roles». Todas las páginas comparten el mismo logo como imagen de vista previa, en un formato muy alargado (2361×601 px) que se recorta al compartir. Una descripción propia y una foto del proyecto harían que cada enlace se entienda y se vea mejor en Google, WhatsApp y LinkedIn. | Recomendamos una descripción propia y breve para cada página y una foto del proyecto como imagen de vista previa. | [10] |

### Accesibilidad

Lighthouse (92 en mobile y desktop) confirma A11Y-01 y A11Y-03.

| ID | Sev | Qué pasa | Recomendación | Ref. |
| --- | --- | --- | --- | --- |
| A11Y-01 | 3 | **Controles sin nombre para lectores de pantalla.** El logo, el botón de WhatsApp y el botón del menú mobile son enlaces sin nombre, y el menú no avisa si está abierto o cerrado. Con un lector de pantalla, el menú mobile no se puede usar (WCAG 4.1.2). | Recomendamos que el logo, WhatsApp y el menú tengan un nombre claro («Inicio», «WhatsApp», «Abrir menú») y que el menú indique si está abierto o cerrado. | [8], [17] |
| A11Y-02 | 2 | **Las descripciones de los logos son nombres de archivo.** En la home, 8 de los 13 logos de clientes y los 8 logos de marcas tienen descripciones como «Frame 177» o «image 1» (WCAG 1.1.1). Quien usa lector de pantalla escucha eso en lugar del nombre del cliente o de la marca. | Recomendamos que cada logo se describa con el nombre del cliente o de la marca. | [8], [12] |
| A11Y-03 | 2 | **El violeta de las etiquetas de sección se lee con poco contraste sobre negro.** Las etiquetas en mayúsculas que van sobre los títulos de sección («Automatización que funciona», «Automatización») usan #7830F7 sobre #080808: 3,4:1, y el mínimo para texto normal es 4,5:1 (WCAG 1.4.3). También quedan por debajo el botón «Accept» (3,45:1) y el skip link (2,09:1). | Recomendamos usar un violeta más claro (#9D6BFF, 5,7:1) para el texto sobre negro y dejar el violeta de marca para fondos y bloques. | [8], [9] |
| A11Y-05 | 2 | **El hero y los carruseles avanzan solos y no se pueden pausar.** En la home, el hero cambia de foto cada 2 segundos y otros 5 carruseles avanzan cada 5 segundos, sin ningún botón de pausa (WCAG 2.2.2). | Recomendamos un hero fijo y, en los carruseles que se mantengan, un control de pausa visible. | [6], [9] |
| A11Y-06 | 2 | **El formulario no facilita completarlo.** Los campos no tienen autocompletado del navegador, el teléfono es un campo de texto común (en el celular no abre el teclado numérico) y los campos obligatorios no están indicados (WCAG 1.3.5, 3.3.2). | Recomendamos activar el autocompletado, usar el teclado numérico para el teléfono e indicar qué campos son obligatorios y cuáles opcionales. | [15], [9] |

## Análisis competitivo

Qubit lidera en prueba social y resultados, y tiene margen para mejorar en claridad del mensaje, trayectoria visible, idioma y velocidad de carga. Se revisaron el 28/09/2026 en desktop, con navegador y lectura de URL:

- [Quantia](https://quantia.com.ar/servicios/automatizacion-industrial/)
- [Automática](https://automatica-arg.com.ar/)
- [EXSOL](https://www.exsol.com.ar/)
- [Antares](https://www.antaresautomation.com/soluciones/automatizacion-industrial/)

| Criterio | Qubit | Quantia | Automática | EXSOL | Antares |
| --- | --- | --- | --- | --- | --- |
| H1 que dice qué hacen y para quién | ✗ (sin H1) | ✗ (sin H1) | ✓ | parcial | parcial |
| CTA principal en el primer viewport | ✓ (genérico) | ✓ | ✓ | ✗ | ✓ |
| CTA con beneficio | ✗ | ✗ | parcial | ✗ | parcial |
| Casos con resultados cuantificados | ✓ | parcial (2 de 8) | parcial (alcance) | ✗ | ✗ |
| Proyectos con encabezado y tarjetas clickeables | ✗ | ✓ | parcial (no clickeables) | ✗ | ✗ |
| Filtros de casos | ✗ | ✗ | ✗ | ✗ | ✗ |
| Páginas por servicio | parcial (sin enlazar) | ✓ | ✗ | ✗ | ✓ |
| Páginas por industria | ✗ | ✗ | parcial (pestañas) | ✗ | ✗ |
| Brochures / PDF descargables | ✗ | ✗ | ✗ | ✗ | ✗ |
| Logos de clientes | ✓ | ✓ | ✗ | ✗ | ✓ |
| Testimonios con nombre y cargo | ✓ | ✗ (reseñas de Google) | ✗ | ✗ | ✗ |
| Partners o certificaciones con sello | parcial (marcas) | ✓ | ✓ | parcial | parcial |
| Años de trayectoria | ✗ | ✓ (+30) | ✗ | ✓ (desde 1997) | ✓ (+15) |
| Formulario corto (≤4 campos) | ✗ (6) | ✗ (6) | parcial (5) | ✓ (3) | parcial (5) |
| WhatsApp visible y con etiqueta | parcial | parcial | parcial | parcial | ✗ |
| Mensaje para OEM | parcial | parcial | ✗ | ✗ | ✗ |
| «Llave en mano» explícito | ✓ | ✓ | parcial | parcial | ✓ |
| Noticias o blog activo (≤6 meses) | ✗ | ✗ | ✗ | ✗ (2017) | ✗ |
| Versión en inglés / selector de idioma | ✗ | ✗ | ✓ | ✗ | ✓ |
| Política de privacidad | ✗ | ✓ | ✓ | ✗ | ✓ |
| Lighthouse Performance mobile | 64 | 79 | 57 | 87 | 51 |
| Lighthouse Performance desktop | 62 | 94 | 61 | 87 | 70 |

**Patrones de la industria.** Es lo que el comprador ya espera ver [21]:

- CTA en el primer viewport: 3 de 4.
- Años de trayectoria visibles: 3 de 4.
- Política de privacidad: 3 de 4.
- Páginas por servicio: 2 de 4.
- Sello de partner: 2 de 4.

**Buenas ideas a considerar:**

- **Automática:**
  - le habla al comprador técnico en una sección propia (alcance comparable, entregables FAT/SAT, costo total)
  - segmenta por industria con pestañas
  - titula los casos con el equipo y la plataforma
  - suma un CTA secundario «Ver casos»
- **Quantia:**
  - listado de proyectos con encabezado claro
  - franja de cifras con sello de partner verificable
  - preguntas frecuentes del comprador («¿puedo contratar solo una etapa?»)
  - formulario dentro de cada página de servicio
- **Antares:**
  - franja de credenciales debajo del hero
  - páginas de servicio organizadas por subárea
  - selector ES/PT/EN
- **EXSOL:** un referente técnico con nombre y años de experiencia, que suma autoridad.

**Dónde Qubit ya está mejor:** resultados cuantificados en todos los casos, testimonios con cargo, logos reconocidos y mensaje llave en mano y OEM ya presente.

**Oportunidades:**

- Nadie tiene noticias activas, landings por industria, brochures ni filtros de casos.
- Nadie resuelve bien WhatsApp ni desarrolla una propuesta para OEM.
- Qubit puede ser el primero en todo eso y, con una base técnica liviana, ponerse a la par de los competidores más rápidos (EXSOL y Antares superan 90 en desktop).

**Límites:**

- No se revisó mobile en detalle, salvo con Lighthouse.
- No se identificaron los logos de clientes de Antares (sin texto alternativo).
- Las capturas de algunas secciones fallaron y se evaluaron por HTML.
- Una corrección respecto del 25/09: EXSOL no tiene páginas por servicio y su blog está inactivo desde 2017.

## Métricas

**Los usuarios reales de Qubit en mobile aprueban Core Web Vitals**, y es el único de los cinco sitios con tráfico suficiente para tener datos de campo. En laboratorio, la home obtiene 64/100 en mobile y 62/100 en desktop (Lighthouse en DevTools, 04/10), con margen de mejora frente a los mejores del rubro. Los números de laboratorio muestran el peor caso: primera visita, sin caché, en un celular de gama media con 4G lento. Es el escenario de quien llega desde un anuncio de Google Ads. Los valores de laboratorio varían entre corridas; los de campo son el promedio de 28 días.

**Laboratorio (Lighthouse 13.4.1 en Chrome DevTools, 04/10/2026. Qubit: home. Competidores: URLs indicadas por Guido)**

| Métrica | Qubit mobile | Qubit desktop | Mejor competidor (mobile / desktop) | Umbral «bueno» |
| --- | --- | --- | --- | --- |
| Performance | 64 | 62 | 87 EXSOL / 94 Quantia | ≥ 90 |
| LCP | 4,1 s | 4,5 s | 3,7 s EXSOL / 1,0 s Quantia | ≤ 2,5 s |
| FCP | 3,3 s | 1,9 s | 1,6 s Quantia / 0,6 s Quantia | ≤ 1,8 s |
| Total Blocking Time | 390 ms | 0 ms | 70 ms EXSOL / 0 ms (varios) | ≤ 200 ms |
| CLS | 0 | 0,004 | — | ≤ 0,1 |
| Speed Index | 6,8 s | 4,6 s | 3,0 s EXSOL / 1,5 s EXSOL | ≤ 3,4 s |
| Peso transferido | 3.076 KiB | 4.078 KiB | — | — |
| Accesibilidad | 92 | 92 | 98 Antares / 97 Automática | — |
| Buenas prácticas | 100 | 100 | 100 Quantia y Automática / 96 (los cuatro) | — |
| SEO (básico) | 100 | 100 | — | — |

**Mismo sitio, dos herramientas: DevTools frente a PageSpeed Insights (Qubit, home)**

| Métrica | DevTools mobile (04/10) | PSI mobile (28/09) | DevTools desktop (04/10) | PSI desktop (28/09) |
| --- | --- | --- | --- | --- |
| Performance | 64 | 29 | 62 | 57 |
| FCP | 3,3 s | 7,9 s | 1,9 s | 0,7 s |
| LCP | 4,1 s | 9,3 s | 4,5 s | 2,7 s |
| Total Blocking Time | 390 ms | 1.940 ms | 0 ms | 680 ms |
| CLS | 0 | 0 | 0,004 | 0,001 |
| Speed Index | 6,8 s | 9,0 s | 4,6 s | 1,7 s |
| Accesibilidad | 92 | 92 | 92 | 92 |
| Buenas prácticas | 100 | 96 | 100 | 96 |
| SEO (básico) | 100 | 100 | 100 | 100 |

*Por qué difieren.* PageSpeed Insights corre en servidores de Google, con una CPU compartida y más lenta, por lo que la emulación de un celular de gama media castiga más al JavaScript (TBT y LCP son las que más se mueven). DevTools corre en la computadora de quien mide, que suele ser más rápida y tiene otra conexión. Además, las dos mediciones son de fechas distintas (28/09 y 04/10) y pueden usar versiones distintas de Lighthouse (13.5 y 13.4.1). Accesibilidad y SEO coinciden porque no dependen de la velocidad. En desktop, PSI mide FCP, LCP y Speed Index mejores que DevTools; es una señal de que el puntaje de laboratorio varía de una corrida a otra.

*Cuál usamos.* Usamos DevTools en la comparación entre sitios, porque se midieron los cinco con el mismo método. PageSpeed Insights se mantiene como referencia para Qubit, ya que es la herramienta que suelen abrir los clientes y los desarrolladores. Los competidores también tienen valores de PSI del 28/09, pero no se usan para el ranking. Para ninguna de las dos herramientas hay que tomar el puntaje como único dato: los datos de campo (siguiente tabla) son los más cercanos a lo que ven los usuarios.

**Campo (usuarios reales, Chrome UX Report, últimos 28 días, mobile)**

| Métrica | Valor | Umbral «bueno» |
| --- | --- | --- |
| LCP | 2,4 s | ≤ 2,5 s |
| CLS | 0,01 | ≤ 0,1 |
| INP | sin datos | ≤ 200 ms |
| FCP | 2,2 s | ≤ 1,8 s |
| TTFB | 1 s | ≤ 0,8 s |

Desktop no tiene datos de campo, y los competidores tampoco (tienen poco tráfico para CrUX).

**Qué medir en el sitio nuevo:**

- línea base de leads por canal (formulario, WhatsApp, teléfono) y por dispositivo
- clics en el formulario y en WhatsApp como eventos de GA4, importados como conversiones en Google Ads
- comportamiento con **Microsoft Clarity** [22], gratuito y vinculado con GA4 y Google Ads: mapas de calor, grabaciones de sesiones y clics sin respuesta. Sirve para ver qué hace quien llega desde un anuncio, validar con datos reales los hallazgos de esta auditoría (por ejemplo, clics en tarjetas de industria que no llevan a ningún lado) y entender dónde se abandona el formulario. Reemplazaría a Zoho PageSense, que hoy cumple una función parecida, para no cargar dos herramientas iguales.

## Próximos pasos

- **Reunión con Piero:** alinear los hallazgos del discovery y el flujo de carga de contenido con Claude.
- **Recap:** compartir este informe con Paul y Manuel.
- **Pendiente de definir:**
  - el rol de /servicios/ e /impresoras/
  - el mensaje de Telus Digital
  - qué páginas entran en inglés
  - los brochures y las industrias prioritarias para las primeras landings
  - años de trayectoria y certificaciones
- **Diseño del sitio nuevo:** usar los hallazgos como requisitos (ver el documento de propuestas): hero, tarjetas de caso, landings por industria, WhatsApp y formulario, Noticias y un sistema visual accesible.
- **Contenido:**
  - corregir los testimonios con cada cliente
  - reescribir titulares y beneficios con datos
  - definir el ritmo de Noticias
  - preparar el inglés de las páginas clave
- **Migración y medición:**
  - mapa de redirecciones 301 desde las URLs actuales
  - línea base de leads antes del lanzamiento
  - eventos de conversión
  - presupuesto de performance
- **Backlog:** investigar más a fondo la audiencia (jefes de planta, compras técnicas, OEM): qué buscan, qué objeciones tienen y con qué palabras buscan. Es insumo para el sitio y para las campañas de Google Ads.

## Referencias

Consultadas el 25 y el 28/09/2026.

1. [10 Usability Heuristics for User Interface Design](https://www.nngroup.com/articles/ten-usability-heuristics/) — Nielsen Norman Group
2. [Severity Ratings for Usability Problems](https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/) — Nielsen Norman Group
3. [Scrolling and Attention](https://www.nngroup.com/articles/scrolling-and-attention/) — Nielsen Norman Group
4. [How Users Read on the Web](https://www.nngroup.com/articles/how-users-read-on-the-web/) — Nielsen Norman Group
5. [Scrolljacking 101](https://www.nngroup.com/articles/scrolljacking-101/) — Nielsen Norman Group
6. [Carousel Usability](https://www.nngroup.com/articles/designing-effective-carousels/) — Nielsen Norman Group
7. [Website Forms Usability: Top 10 Recommendations](https://www.nngroup.com/articles/web-form-design/) — Nielsen Norman Group
8. [WCAG 2.2](https://www.w3.org/TR/WCAG22/) — W3C
9. [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/) — W3C WAI
10. [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) — Google Search Central
11. [Block Search Indexing with noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing) — Google Search Central
12. [Image SEO Best Practices](https://developers.google.com/search/docs/appearance/google-images) — Google Search Central
13. [Web Vitals](https://web.dev/articles/vitals) — web.dev
14. [Optimize Largest Contentful Paint](https://web.dev/articles/optimize-lcp) — web.dev
15. [HTML attribute: autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) — MDN
16. [Ley 25.326 de Protección de Datos Personales](https://www.argentina.gob.ar/normativa/nacional/ley-25326-64790) — Gobierno de Argentina
17. [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) — W3C WAI
18. [Managing multi-regional and multilingual sites](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites) — Google Search Central
19. [Social Proof in the User Experience](https://www.nngroup.com/articles/social-proof-ux/) — Nielsen Norman Group
20. [Lighthouse performance scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring) — Chrome for Developers
21. [Jakob's Law of Internet User Experience](https://www.nngroup.com/videos/jakobs-law-internet-ux/) — Nielsen Norman Group
22. [Microsoft Clarity](https://clarity.microsoft.com/) — Microsoft
23. [Google Analytics Terms of Service](https://marketingplatform.google.com/about/analytics/terms/us/) — Google
