# Qubit — Estado y próximas sesiones

Actualizado el 06/11/2026. Para retomar: abrí Claude Code en esta carpeta y escribí **"Leé 'Qubit — Estado y próximas sesiones.md' y retomemos con la sesión N"**.

Se edita directo en `site/` (no en `_build/`). Para verlo: `cd site && python3 -m http.server 8000` y abrir http://localhost:8000/ en Chrome.

## Ya aplicado (sesión del 05/11)

- **Home, encabezados:** Industrias, Servicios y Proyectos recientes quedaron centrados, con eyebrow, título y subtítulo nuevos.
  - Industrias: «Dónde trabajamos» / «Conocemos los procesos de tu industria».
  - Servicios (antes «Soluciones»): «Un solo equipo, de punta a punta». Subtítulo de Luly mantenido, cambiando solo «puesta en marcha» por «programación de PLC».
  - Casos: «Proyectos recientes».
- **Títulos de contacto:** Home y Nosotros «Hablemos de tu planta»; Noticias «¿Querés consultarnos algo?»; Sentinel «Pedí una demo de Sentinel». Las páginas de proyecto ya tenían buenos títulos.
- **Sentinel:** ahora tiene las 8 secciones (portada, qué es, usos, cómo funciona, precios, proyectos reales, FAQ, contacto). Lo que falta de Guido está marcado con cajas **PLACEHOLDER** visibles (clase `.placeholder` al final de `css/styles.css`).

## Sesión 1 (05/11) — revisión visual, hecha a medias

- Título de Industrias ya no deja «industria» solo en la segunda línea (`text-wrap: balance` en los encabezados centrados).
- «Estos son solo algunos de los rubros…» + botón de Industrias quedaron centrados.
- Eyebrow «Marcas con las que trabajamos» centrado.
- **Falta:** que Luly mire Home y Sentinel en Chrome (desktop y celular). Yo no pude verificar el celular ni el centrado de los dos últimos ajustes con capturas.
- Dato nuevo: la Home ya muestra las marcas Siemens, Phoenix Contact, WEG, ifm, Danfoss, Omron, ABB y Schneider Electric. Sirve para responder la pregunta de marcas de PLC (confirmar con Guido cuáles son de PLC/variadores).

## Sesión Sentinel (05/11) — landing principal + plantilla de aplicación

- Brochures fuente: 5 archivos en `~/Downloads` (Sentinel general PDF + Calderas, Torres y condensadores, Bombas y tanques, Ósmosis inversa en PPTX).
- Draft de contenido y layout: `Sentinel — Draft de contenido y layout.md` (incluye estrategia de links y preguntas para Guido).
- Construido: `site/sentinel/index.html` (rehecha, 15 secciones), `site/sentinel/calderas/index.html` (plantilla), `site/css/sentinel.css` (nuevo, componentes reutilizables), Calderas en `sitemap.xml`.
- El agente reemplazó `site/fonts/material-symbols.woff2` por una versión con más íconos (backup en `_backup-2026-11-05/`). **Aprobado por Luly el 05/11.**
- Backup previo: `_backup-2026-11-05/`.
- **Experimento de forma (logo):** `site/css/sentinel-morph.css`, cargado solo en las páginas de Sentinel. Regla: lo grande es cuadrado, lo chico es redondo, los bloques destacados tienen una esquina suavizada (arriba a la derecha) y S·E·N·T pasa de cuadrado a círculo. Para apagarlo se borra una línea `<link>` en cada página. Rompe la regla «sin esquinas redondeadas» de styles.css: validar con Qubit antes de llevarlo al resto del sitio.
- **Falta:** que Luly valide la plantilla de Calderas en Chrome → recién ahí construir Torres, Bombas y Ósmosis (por ahora sus links dan 404). Después, revisión visual y de accesibilidad con un segundo agente. Detalle visto: «juntas» queda sola en el título de S·E·N·T.

## Sentinel (06/11) — landing de Guido vs la nuestra

- Guido armó su propia landing (`~/Downloads/Sentinel_ monitoreo y control remoto de tu planta en tiempo real _ Qubit.html`). **Su contenido manda.**
- Auditorías e imágenes reales (2 capturas del panel + foto y logo de Ferraro) en `_sentinel-guido/`.
- Estrategia propuesta: estructura y contenido de Guido + nuestro sistema visual. 11 bloques: Hero · Qué es · Aplicaciones · Cuánto cuesta no medir · IA · Cómo funciona (S·E·N·T) · Tres etapas · Precios (+ tabla «Costos únicos y servicios») · Proyectos (solo Ferraro) · FAQ (agrupada + tarjeta de contacto fija) · Contacto.
- Se cortan del hub: franja de íconos, Beneficios, chips de industrias, comparación Sin/Con (pasa a las landings de aplicación).
- Slugs de Guido: `calderas/`, `torres-de-enfriamiento/`, `osmosis-inversa/`, `bombas/`, `tanques/`, `energia/`.
- **Construido el 06/11** con las 11 secciones (backup previo en `_backup-2026-11-06/`). Calderas: links a los slugs de Guido y sin «parada».
- **Pendiente:** revisión de Luly en Chrome, aprobar 5 textos nuevos (fila de soporte, link a preguntas de precios, botón de WhatsApp en FAQ, textos cortos de los recuadros con cifras, tarjeta de Calderas) y decidir el botón «Cotizá Sentinel para tu planta». Calderas todavía muestra a Guido y «CABA» en contacto.
- **Preguntas a Guido:**
  - ¿Bombas y tanques en una página o en dos?
  - ¿Energía tiene página propia?
  - ¿Qué va en los «[N]» del plan?
  - ¿El pack de SMS cuesta USD 80?
  - ¿Se ofrece marca blanca?
  - ¿Hay más casos además de Ferraro?

## Sesión 06/11 — revisión UI (sin Sentinel): aplicado

Backup previo: `_backup-2026-11-06/`.

- **Industrias:** la Home mantiene sus 8. Cada botón «Ver proyectos de X» abre `proyectos/industria/<x>/` con el filtro aplicado (`js/industrias.js`). Los filtros de Proyectos muestran las 10 industrias (8 de la Home + Agua y efluentes + Refrigeración). Se crearon 6 páginas sin proyectos (Manufactura, Energía, Minería, Industria automotriz, Química y petroquímica, Petróleo y gas) con un estado vacío («Todavía no publicamos proyectos de…» + «Contanos tu proceso»), con `noindex` hasta que tengan casos y fuera del sitemap.
- **Nombres unificados:** Soluciones (no Servicios), Proyectos (no Casos de estudio: botones «Ver proyecto», «Otros proyectos», títulos de pestaña, Gracias), Blog + «artículo» («Leer artículo», «En este artículo», categoría «Guías técnicas»). La URL sigue siendo `/noticias/` para no romper links. Eyebrow de la sección de proyectos de la Home: «Resultados» (para no repetir «Proyectos / Proyectos recientes»).
- **UI:** títulos de las tarjetas de Soluciones arriba; número y etiqueta siempre apilados en las tarjetas de proyecto; testimonio arriba en la tarjeta; botón de industria en mobile ok.
- **Tipografía:** todos los H1 en Work Sans bold (también Sentinel). Audiowide queda solo para momentos display cortos (letras S·E·N·T). Se sacó el preload de Audiowide en las páginas que ya no lo usan. ⚠️ Se aparta del Manual de Marca: validar con Qubit.
- **Formas:** el sistema de Sentinel (`sentinel-morph.css`) pasó a ser la regla de todo el sitio: lo grande es cuadrado, lo chico es redondo, los bloques destacados llevan UNA esquina suavizada arriba a la derecha. Aplicado a: bloque del equipo, tiles grandes de proyectos, proyecto destacado, testimonio, formulario, marcador «cuadrado + punto» de los eyebrows, avatar y estado vacío.
- **Accesibilidad:** títulos de los artículos del blog como `<h2>`/`<h3>` reales. Links de contacto con 44px de alto y toda la fila clickeable; link legal del footer más alto.

### Pendiente de esta revisión
- **7. Espacios entre secciones:** Luly tiene que elegir una opción.
- **8. Dónde usar Audiowide:** opciones propuestas, falta elegir.
- **10. Detalles chicos:** explicados, sin aplicar.
- **11–13** (Title Case, blog inactivo, cifras sin confirmar): no se tocaron.
- El artículo «Metodología 5S» no habla de 5S: el cuerpo es un texto genérico de automatización. Revisar con Guido.
- El footer «Proyectos por industria» lista solo las 4 industrias con proyectos (se dejó así a propósito).

## Sesiones sugeridas (una por vez)

1. **Revisión visual de lo aplicado.** Mirar Home y Sentinel en Chrome (también en celular) y ajustar espacios, centrado y jerarquía. *No necesita datos de nadie.*
2. **Tarjetas de Soluciones.** Reescribirlas pensando en el problema del visitante, no en la empresa. «OEM» pasaría a «Para fabricantes de máquinas», y unificar los verbos de los botones. Sentinel va como producto, no como servicio. *Bloqueada hasta tener las respuestas de abajo.*
3. **Contenido de Sentinel con Guido.** Reemplazar los placeholders: lista completa de usos, cómo se cobra y qué se muestra de precios, qué se instala en planta, preguntas frecuentes reales, destino de los botones. Referencia: `Sentinel — Estructura de contenido.md`.
4. **Subtítulos de «Por qué Qubit» y Equipo.** Subtítulos sugeridos por la UX writer (ver abajo). *Bloqueada hasta confirmar las cifras.*
5. **Pendientes del backlog.** Industrias de MEJ-13 (los ejemplos no coinciden con las 8 industrias del sitio), PPT en Figma (slides de Medición, mover el cierre al final), investigación de audiencia.
6. **Versión ES/EN** (pendiente según Alejo) y revisar que «Casos de Estudio» → «Proyectos» esté en menú y footer.

## Preguntas abiertas (bloquean sesiones 2 y 4)

- ¿Siguen siendo ciertos «+300 proyectos» y «más de 20 años»?
- ¿Con qué marcas de PLC y variadores trabaja Qubit (Siemens, Rockwell, Schneider…)?
- ¿Tiene certificaciones o insignias de partner?
- ¿Se compromete a un tiempo de respuesta en asistencia técnica? (la tarjeta dice «respuesta rápida»)
- ¿Tiene un método propio (relevamiento, FAT, puesta en marcha) que se pueda mostrar en pasos?
- Feedback de contenido de Guido: no está en el canal #qubit-web; si lo mandó por otro lado, pegarlo.

## Subtítulos propuestos pendientes

- **Por qué Qubit:** «Más de 20 años de planta y +300 proyectos respaldan cada solución, desde la ingeniería hasta la puesta en marcha.»
- **Equipo:** «Conocé a quienes van a estar en tu planta, de la primera reunión a la puesta en marcha.» (confirmar que el equipo participa desde el inicio)

## Pendientes de Guido y Alejo

- Guido: contenido de Sentinel (ver sesión 3) y acceso a Sentinel para sacar capturas (ya existe el email de la cuenta de ThingsBoard).
- Alejo: la landing de Sentinel debe incluir la herramienta de precios y links a las sub-landings; la tarjeta de Sentinel en Home debe linkear a la landing.

## Revisión de agentes (05/11) — sugerencias, NADA aplicado todavía

**Layout (Nielsen + competidores)**
- Sentinel/Precios: sacar las notas internas ("Decisión de Guido") y dejar 2–3 líneas de qué define el costo + botón.
- Sentinel/FAQ: ocultar hasta tener respuestas reales; con 3 preguntas cortas no hace falta desplegable.
- Sentinel: unir «Qué es» con «Qué monitorea» (se repiten); no dejar dos secciones `--alt` seguidas (Precios y Resultados); el «100%» aparece dos veces.
- Home: regla de alineación (centrar solo títulos sobre grillas simétricas; a la izquierda los de dos columnas como «Por qué Qubit» y Contacto).
- Competidores: ninguno muestra precios ni tiene producto tipo Sentinel. Ideas: franja de credenciales bajo el hero (años, proyectos, partners), etiqueta de categoría en tarjetas de proyecto, FAQ corta en Home, formulario más corto con WhatsApp.
- Palabras viudas: `text-wrap: balance` en títulos (ya aplicado) y `text-wrap: pretty` en subtítulos (pendiente); títulos ≤ 48 caracteres, subtítulos ≤ 105; revisar a 360, 768 y 1280 px.

**Lenguaje argentino**
- «paradas» es ambiguo (parada de planta = paro programado). Alternativas: «sin frenar la línea», «menos paros no programados», «menos imprevistos». Sacar «tiempos de parada» de Industrias.
- Mantener: puesta en marcha, llave en mano, rubro, relevamiento, revamping. Cambiar «OEM» → «Para fabricantes de máquinas». «Brindamos» → «Resolvemos».
- Sacar «respuesta rápida» de la tarjeta de asistencia salvo que Guido confirme un tiempo.

**Datos a confirmar con Guido:** +300 proyectos y +20 años; tiempo de respuesta en asistencia; si Sentinel puede enviar comandos; qué se instala en planta; funcionamiento sin internet; dónde se alojan los datos y permisos; si se puede empezar con un solo equipo; permanencia y tiempo de puesta en marcha; qué define el precio; equipos soportados además de los 5; casos de las 6 industrias sin caso; cuáles logos son de PLC/variadores.

## Decisiones del 05/11 (Luly)

- Descartado por ahora: franja de números bajo el hero y las demás sugerencias de competidores (salvo el botón de WhatsApp, ya hecho). Formulario sin cambios.
- **Lenguaje:** voseo con vocabulario neutro (opción B), consistente en todo el sitio. OEM queda como está.
- **Hero:** «Automatizamos tu planta para producir más, sin imprevistos».
- **CTA de Servicios:** «Pedí una cotización» (llave en mano), «Pedí asistencia técnica»; Sentinel: «Mirá Sentinel en acción» (alternativa: «Explorá Sentinel»).
- **Sentinel (contenido y layout):** se trabaja en otra sesión. No tocar hasta entonces.
- **Logos SVG:** movidos de Descargas a `site/img/logos/{clientes,marcas,software}/`, con `<title>`/`<desc>` dentro del SVG y `alt` en el HTML. Los colores se editan dentro del SVG: los logos normales se ven en blanco con la clase `.logo-mono` (filtro CSS) y los que se volvían una mancha tienen su propio archivo `-blanco.svg` (Danfoss, ifm, Denver Farma, WinCC, HTML5, AWS) con la clase `.logo-blanco`, sin filtro. JavaScript usa `.logo-mono`. Delta, Rockwell y PLCnext están cargados pero ninguna página los usa todavía.
## Bloque del equipo en Home (05/11)

- Eyebrow «El equipo», título **«Las personas detrás de Qubit»**, párrafo «Programadores, tableristas y proyectistas eléctricos trabajan juntos en cada proyecto, de principio a fin.», botón «Conocé al equipo». Luly quiere seguir pensando alternativas.
- Descartados: «Un equipo que se hace cargo», «El mismo equipo, desde la primera reunión», «Quienes diseñan, programan y conectan», «Así trabaja el equipo de Qubit», «Quiénes van a estar en tu planta», «Personas con oficio en tu planta».
- Alternativas en carpeta: «¿Con quién vas a trabajar?», «Programadores y tableristas, codo a codo», «Las personas detrás de cada proyecto», «Las personas detrás de cada tablero».
- Cierre de Industrias: «¿No ves tu industria? Tenemos experiencia en muchas más.» Subtítulos centrados en una sola línea (ancho máx. 72ch).

## SESIÓN 1 CERRADA (05/11) — resumen

**Hecho hoy en `site/`**
- Home: encabezados centrados y subtítulos en una sola línea; hero «…sin imprevistos»; cierre de Industrias acortado; botón dentro del panel de Industrias ahora secundario; bloque del equipo («El equipo» / «Las personas detrás de Qubit»).
- Header: el botón de WhatsApp se reemplazó por el switch ES | EN (placeholder, EN desactivado). WhatsApp quedó como botón flotante abajo a la derecha en todas las páginas y en el footer.
- Logos: 26 SVG en `img/logos/{clientes,marcas,software}/` con `<title>`/`<desc>` y `alt`; versiones `-blanco.svg` hechas a mano para Danfoss, ifm, Denver Farma, WinCC, HTML5 y AWS.
- Blog: índice «En esta nota» a la derecha (sticky en escritorio, plegable arriba en celular), índice duplicado borrado, títulos en Work Sans, menos espacio título–imagen y más entre imagen y cuerpo, cuerpo alineado con la caja del índice.
- Contacto: títulos nuevos por página. Sentinel: 8 secciones con placeholders visibles (sin tocar más: se trabaja en otra sesión).

**Pendiente / para la próxima**
1. Revisar en celular la Home y el blog (no se pudo verificar con capturas).
2. Bloque del equipo: seguir el brainstorming de títulos (ver alternativas arriba).
3. Sesión 3 (Sentinel con Guido) y sesión 2 (tarjetas de Servicios): siguen bloqueadas por las preguntas abiertas de más arriba.
4. Títulos de sección de las notas del blog siguen siendo párrafos en negrita, no `h2` reales (mejora de accesibilidad pendiente, cambia un poco el tamaño).
5. Logos de Delta, Rockwell y PLCnext cargados pero sin usar. CSS del botón de WhatsApp del header (`.btn--wa-header`) quedó sin uso.
6. Si se retoma la franja de números bajo el hero: descartada por ahora.

**Para retomar:** abrí Claude Code en esta carpeta y escribí «Leé 'Qubit — Estado y próximas sesiones.md' y retomemos con la sesión N».

- 05/11 (después del cierre): arreglado el doble espacio del botón «Ver proyectos de …» en Industrias (el texto va ahora en un solo span).
