# Qubit UX Audit — gaps entre la PPT de Figma y el documento de contenido

Revisión del 02/10/2026. Compara la PPT de Figma ([lR3j40QTGlQfDDcsMiKDZj](https://www.figma.com/slides/lR3j40QTGlQfDDcsMiKDZj), 54 slides) con *Qubit — Contenido para la PPT (UX Audit).md* (55 slides). No se modificó nada en Figma.

**Cómo leer este documento.** «F» es el número de slide en Figma y «D» el número de slide en el documento. Los IDs entre corchetes son los nodos de Figma que hay que editar (texto, tabla o imagen). Así cada cambio se puede aplicar directo sobre el nodo.

**Actualización.** Hay dos cambios desde que se escribió este análisis:

- **Restos de Blockware:** ya se sacaron de Figma. Los pies de F6 y F16 dicen «QUBIT · SEPTIEMBRE 2026» y se borraron las 20 capturas del proyecto anterior.
- **Subtítulos:** el documento de contenido ahora los usa solo en portadillas y en benchmark, performance, medición y backlog. Los gaps de «falta subtítulo» del resto de las slides ya no aplican.

## Resumen

| Estado | Slides de Figma | Qué implica |
| --- | --- | --- |
| OK | 3 | F45, F46 y F52 coinciden con el documento. |
| Ajustar | 35 | La estructura sirve; faltan o sobran textos, títulos, subtítulos o marcas. |
| Rehacer el cuerpo | 15 | El cuerpo todavía es del template de BWS o está desactualizado. |
| Eliminar | 1 | F30 es una versión vieja de la tabla de severidad 2. |
| Faltan en Figma | 3 | D5 (Oportunidades), D23 (Movimiento) y D32 (Severidad 2 parte 2 y severidad 1). |

Los problemas que más se repiten son cinco:

- **Restos de BWS:** quedan 2 pies con «BLOCKWARE SOLUTIONS · OCTOBER 2024», capturas de 2024 de otra app, gauges de Lighthouse con números de otro sitio, filas de backlog en inglés y un chip «Reviewed in May 2025».
- **Hallazgos descartados:** todavía aparecen en Figma UX-06 (scroll), UI-01 (header), UI-02 (testimonios cortados), SEO-03 (cifras en «0»), SEO-05 (schema), A11Y-04 (skip link) y el stack liviano (PERF-02).
- **Faltan títulos y subtítulos:** muchas slides tienen solo el kicker y el cuerpo; el documento define título y subtítulo en casi todas.
- **Callouts desalineados:** los números de Figma (1 a 18) no siguen la numeración del documento (1 a 22), faltan los chips «ID · S» y el orden de algunos cambia.
- **Redacción vieja:** quedan textos con «→», «Sugerimos/Se deberían» y preguntas abiertas, en lugar de la redacción aprobada.

## Decisiones antes de editar

1. **Fuente de verdad.** Si el documento manda en todo, se reemplazan los textos literales. Si hay cambios del deck que querés conservar (por ejemplo, «Navegación» como título de F20 o la pregunta sobre los servicios ocultos), hay que marcarlos.
2. **Colores por sección.** El documento pide verde, naranja, azul y violeta según la sección; el deck usa violeta y lila en todo. Conviene confirmar si se mantiene el violeta.
3. **Fortalezas en una o dos slides.** El documento las arma en una sola slide (D28) y el deck las separa en portadilla (F26) más tarjetas (F27).
4. **Logo arriba a la derecha.** El documento pide el logo de Telus Digital (o GM2). No encontré ningún logo en el deck.
5. **Notas del orador.** Ninguna slide tiene speaker notes. Los «Para presentar» del documento (D2, D5, D6, D19, D36, D39 y D46) podrían ir ahí.
6. **Atribución a Qubit.** F35 dice «coinciden con lo que pidió Qubit», y el documento (D33) dice «elegidos por Qubit». Las dos frases van contra la regla de no atribuir ideas a Qubit.

## Mapa de slides

| F | Nodo | D | Slide | Estado | Gap principal |
| --- | --- | --- | --- | --- | --- |
| 1 | 1:354 | 1 | Portada | Ajustar | Falta subtítulo y «Preparado por» |
| 2 | 1:398 | 2 | Objetivo | Ajustar | Faltan las bajadas de los 3 pilares |
| 3 | 1:379 | 3 | Agenda | Ajustar | Falta título y subtítulo; textos viejos en 3 bloques |
| 4 | 1:564 | 4 | Guía de evaluación | Ajustar | Falta título, subtítulo y nota al pie |
| — | — | 5 | Oportunidades | **Falta** | Insertar después de F4 |
| 5 | 57:2684 | 6 | Prioridades | Ajustar | Título y kicker distintos; bajadas incompletas; faltan chips |
| 6 | 4074:2614 | 7 | Portadilla heurística | Ajustar | Pie «BLOCKWARE SOLUTIONS · OCTOBER 2024» |
| 7 | 18:144 | 8 | Qué son las heurísticas | Ajustar | Falta subtítulo; texto del botón |
| 8 | 1:509 | 9 | Heurísticas 1–5 | Ajustar | Falta título; kicker distinto |
| 9 | 42:694 | 10 | Heurísticas 6–10 | Ajustar | Falta título |
| 10 | 37:552 | 11 | Grilla · Principios generales | Ajustar | Falta título/subtítulo, leyenda OK y justificación |
| 11 | 37:1109 | 12 | Grilla · Navegación y contenido | Ajustar | Fila 1 marcada OK (debería ser error menor, UX-11) |
| 12 | 37:731 | 13 | Grilla · Diseño | Ajustar | Fila 1 marcada OK (debería ser error menor) |
| 13 | 37:930 | 14 | Grilla · Contacto y formularios | Ajustar | Fila 1 marcada OK (debería ser error menor) |
| 14 | 67:4065 | 15 | Grilla · Control y feedback | Ajustar | Sobran 2 filas descartadas |
| 15 | 4023:2256 | 16 | Grilla · Accesibilidad y base técnica | Ajustar | Sobra la fila del skip link; falta nota al pie |
| 16 | 4078:1833 | 17 | Portadilla hallazgos | Ajustar | Título incompleto; pie BWS |
| 17 | 18:213 | 18 | Hero | Ajustar | Orden y textos de callouts; «9 botones»; falta subtítulo y chip |
| 18 | 67:4094 | 19 | WhatsApp y contacto | Ajustar | Textos de callouts viejos; falta subtítulo y chip |
| 19 | 69:4123 | 20 | Proyectos | Ajustar | Callout 8 incompleto; falta subtítulo y chip |
| 20 | 72:4309 | 21 | Oferta y navegación | Ajustar | Título; «11 tarjetas»; falta callout 12 (UX-11) |
| 21 | 73:4353 | 22 | Contenido | Ajustar | Sobra «Logos sin explicación»; textos viejos |
| — | — | 23 | Movimiento | **Falta** | Insertar después de F21 |
| 22 | 74:4436 | 24 | Accesibilidad | Ajustar | Falta contraste; sobra skip link; sin capturas |
| 23 | 74:4636 | 25 | SEO y confianza | Ajustar | Falta callout de H1 y metadatos; «→»; capturas BWS |
| 24 | 4023:2267 | 26 | Idioma | **Rehacer** | Es un duplicado de F23 con otro título |
| 25 | 1:590 | 27 | Balance | Ajustar | Falta kicker y título |
| 26 | 33:91 | 28 | Fortalezas (portadilla) | Ajustar | Decidir si se fusiona con F27 |
| 27 | 9:1152 | 28 | Fortalezas (tarjetas) | Ajustar | Falta tarjeta «Base técnica sana» y chip; textos viejos |
| 28 | 44:1754 | 29 | Portadilla mejoras | Ajustar | Falta subtítulo |
| 29 | 44:1776 | 30 | Tabla severidad 3 | **Rehacer** | 8 filas en lugar de 11; encabezados en inglés |
| 30 | 44:2657 | — | Tabla severidad 2 (vieja) | **Eliminar** | Versión anterior de F31 |
| 31 | 4023:2284 | 31 | Tabla severidad 2 (1/2) | **Rehacer** | Filas descartadas; faltan 5 filas |
| — | — | 32 | Severidad 2 (2/2) y severidad 1 | **Falta** | Insertar después de F31 |
| 32 | 51:3002 | 33 | Portadilla benchmark | Ajustar | Falta subtítulo y chip de fecha |
| 33 | 1:531 | 34 | Tabla benchmark | **Rehacer** | Cuerpo de BWS (gauges 35/43 de 2024) |
| 34 | 54:3249 | 35 | Aprendizajes del mercado | **Rehacer** | Cuerpo de BWS (gauges 89/92) |
| 35 | 63:3851 | 36 | Oportunidades del mercado | **Rehacer** | Cuerpo de BWS; subtítulo con atribución |
| 36 | 60:2846 | 37 | Portadilla performance | Ajustar | Falta subtítulo y los 4 ítems |
| 37 | 18:157 | 38 | Velocidad | **Rehacer** | Texto viejo (JavaScript); faltan gauges y métricas |
| 38 | 51:3023 | 39 | Usuarios reales | **Rehacer** | Métricas de Clarity de BWS en lugar de CrUX |
| 39 | 1:544 | 40 | Velocidad vs competencia | **Rehacer** | Datos correctos, pero layout roto y sin gráfico |
| 40 | 1:409 | 41 | Accesibilidad (Lighthouse) | **Rehacer** | Solo tiene el título |
| 41 | 9:1136 | 42 | Buenas prácticas | Ajustar | Mockup de BWS; faltan gauges y subtítulo |
| 42 | 57:2549 | 43 | SEO (Lighthouse) | **Rehacer** | Texto viejo y desbordado; captura de BWS |
| 43 | 1:462 | 44 | Portadilla medición | Ajustar | Mockup con heatmap de BWS |
| 44 | 1:606 | 45 | Plan de medición | Ajustar | Capturas de BWS encima de la tarjeta 2 |
| 45 | 57:2578 | 46 | Por qué Clarity | OK | — |
| 46 | 57:2711 | 47 | Investigación de audiencia | OK | — |
| 47 | 1:417 | 48 | Portadilla backlog | Ajustar | Chip «Reviewed in May 2025»; falta subtítulo |
| 48 | 219:3517 | 49 | Action log · alto impacto | **Rehacer** | Tabla partida; filas viejas; columnas vacías |
| 49 | 219:3585 | 50 | Action log · esfuerzo moderado | **Rehacer** | Fila descartada; columnas S/E/MEJ vacías |
| 50 | 219:3687 | 51 | Action log · mayor esfuerzo | **Rehacer** | Filas de BWS en inglés; fila del stack |
| 51 | 219:3783 | 52 | Roadmap | Ajustar | Nombres de las MEJ incorrectos; chip tapa el título |
| 52 | 219:3844 | 53 | Ideas para potenciar | OK | — |
| 53 | 219:3934 | 54 | Qué sigue | Ajustar | Kicker; «stack» en el ítem 1 |
| 54 | 219:4016 | 55 | Cierre | **Rehacer** | Armado sobre una tabla vieja con badges |

## Problemas globales

- **Pie de BWS:** F6 [4074:2619, 4074:2620] y F16 [4078:1842, 4078:1843] dicen «BLOCKWARE SOLUTIONS» y «OCTOBER 2024». Van «QUBIT» y «SEPTIEMBRE 2026».
- **Botones vacíos:** F41, F42, F43 y F44 tienen una pastilla violeta sin texto abajo a la izquierda, un resto del template.
- **Capturas de 2024 de otro proyecto:** están en F23, F24, F33, F34, F35, F38, F41, F42, F43 y F44. Hay que reemplazarlas por las 15 de la «Lista de capturas» del documento.
- **Chips «ID · S»:** no hay ninguno en las slides de hallazgos (F17 a F24). El documento los pide abajo a la izquierda.
- **Tablas en inglés:** F29 a F31 tienen los encabezados «Severity · Issue · Recommendation · Effort», y en F31 «Severity» se corta en «Sever ity». En español van «Severidad · Hallazgo · Recomendación · Esfuerzo».
- **Badges de esfuerzo:** algunos dicen «e2» en minúscula y otros «E2» (F29 a F31 y F4 [I9:914, I9:915]). Conviene unificar en mayúscula.
- **Callouts:** el documento numera del 1 al 22 de corrido. En Figma la numeración llega a 18 y se repite (F23 y F24 tienen los dos «17.» y «18.»).

## Detalle por slide

### Intro (F1 a F5)

**F1 · Portada (D1).** Sumar el subtítulo «Auditoría UX, benchmark y performance para el nuevo qubit.la» y «Preparado por: Lourdes Schaab, Product Design». El documento sugiere además una foto industrial o la home en baja opacidad a la derecha.

**F2 · Objetivo (D2).** El título [1:402] coincide. A los pilares [1:403, 1:404, 1:405] les falta la bajada:
- «Evaluación heurística del sitio actual».
- «Benchmark con 4 competidores y Lighthouse».
- «14 mejoras priorizadas para el sitio nuevo».

**F3 · Agenda (D3).** Falta el título «Nuestro recorrido de hoy» y el subtítulo «Del contexto a un backlog priorizado». Hay que cambiar tres bloques:
- [18:31, 18:32] «Lo que se charló» pasa a «**Oportunidades.** Lo que verificamos en el sitio actual y puede mejorar en el rediseño».
- [17:1597] pasa a «26 hallazgos con captura y recomendación».
- [17:1606] pasa a «Lighthouse en mobile y desktop, y datos de usuarios reales».

**F4 · Guía de evaluación (D4).** Las escalas coinciden. Falta el título «Cómo evaluamos cada hallazgo», el subtítulo (severidad y esfuerzo) y la nota al pie «Escala de severidad basada en Nielsen Norman Group (0–4)».

**Falta D5 · Oportunidades.** Es una tabla de 9 filas (oportunidad y lo que encontramos), con kicker `CONTEXTO`. Va entre F4 y F5.

**F5 · Prioridades (D6).** Hay cinco cambios:
- **Kicker y título:** el kicker pasa a `HALLAZGOS PRINCIPALES` y el título [57:2687], de «Hallazgos Principales» a «¿Cuáles deberían ser nuestras prioridades?». Falta el subtítulo «Tres frentes que concentran la mayoría de los hallazgos mayores».
- **Bajada 1 [85:6530]:** sumar «Quien llega desde Google Ads tiene que entender la oferta en segundos».
- **Bajada 3 [85:6538]:** sumar «y le permita a Qubit publicar solo».
- **Chips:** faltan `26 hallazgos` · `11 mayores` · `14 menores` · `1 cosmético` · `15 quick wins`.

### Evaluación heurística (F6 a F31)

**F6 · Portadilla (D7).** Los textos coinciden. Falta corregir el pie de BWS (ver problemas globales).

**F7 · Qué son (D8).** Falta el subtítulo «Buenas prácticas para evaluar la usabilidad». El título dice «¿Qué son?» y el documento «¿qué son?». El botón pasa de «CONOZCAMOS LAS 10 HEURISTICAS >>» a «CONOCÉ LAS 10 HEURÍSTICAS >>» (con tilde).

**F8 y F9 · Las 10 heurísticas (D9 y D10).** Las tarjetas coinciden. Falta el título «Las 10 heurísticas (1/2)» y «(2/2)». El kicker de F8 [9:1307] dice «EVALUACIÓN HEURÍSTICA» y el documento «HEURÍSTICAS».

**F10 a F15 · Grillas (D11 a D16).** Hay tres cambios en todas:
- **Título y subtítulo:** faltan en las seis. Hoy el título va dentro del encabezado de la tabla.
- **Leyenda:** la fila de «OK» [37:600 y equivalentes] no tiene texto; va «Todo bien».
- **Justificación:** el documento la propone como texto chico o como notas del orador.

Cada grilla tiene además su propio cambio:

| F | Tabla | Cambio |
| --- | --- | --- |
| 10 | 4034:1467 | Las marcas coinciden (6 errores menores). |
| 11 | 4035:1517 | Fila 1 «Se reconoce dónde estoy…»: pasar de OK a error menor (UX-11). |
| 12 | 37:761 | Fila 1 «La pantalla principal invita a explorar»: pasar de OK a error menor. |
| 13 | 37:960 | Fila 1 «Hay un canal de contacto visible…»: pasar de OK a error menor. |
| 14 | 4035:1614 | Borrar «El scroll responde…» (UX-06) y «Los elementos fijos no tapan…» (UI-01). Quedan 3 filas. |
| 15 | 4035:1742 | Borrar «El skip link lleva al contenido» (A11Y-04). Sumar la nota al pie del error mayor. |

**F16 · Portadilla de hallazgos (D17).** El título [4078:1835] pasa a «¡Veamos algunos hallazgos específicos!». Falta el subtítulo «Cada número de las capturas corresponde a un hallazgo». También tiene el pie de BWS.

**F17 · Hero (D18).** Falta el subtítulo «Quien llega desde un anuncio decide en segundos si se queda» y el chip `CONT-01 · S3` · `UI-04 · S2` · `UX-02 · S3`. El orden del documento es titular, hero y CTAs; en Figma es titular, CTAs y hero.
- **[18:225] Titular:** reemplazar por el texto del documento (callout 1).
- **[67:4076] CTAs:** dice «9 botones»; son 4 visibles. Reemplazar por el callout 3.
- **[4078:1870] Hero:** reemplazar por el callout 2 («Recomendamos una sola foto horizontal con punto focal por breakpoint»).

**F18 · WhatsApp y contacto (D19).** Falta el subtítulo «Los canales que traen leads son los menos visibles del sitio» y el chip `UI-05 · S3` · `UX-07 · S2` · `A11Y-06 · S2`. Hay que reemplazar los tres callouts por los del documento:
- [67:4101]: callout 4.
- [4078:1861]: callout 5.
- [4078:1879]: callout 6, que suma el autocompletado y el teclado numérico.

**F19 · Proyectos (D20).** Falta el subtítulo «La prueba más fuerte de Qubit pasa desapercibida» y el chip `UX-09 · S3` · `UX-05 · S2`. [71:4264] pasa al callout 7 del documento. [71:4265] pasa al callout 8, que suma «mezcla casos con artículos del blog y no incluye a Americold ni Biomás».

**F20 · Oferta y navegación (D21).** Cinco cambios:
- **Título y subtítulo:** el título [72:4312] pasa de «Navegación» a «Una oferta difícil de encontrar». Falta el subtítulo.
- **[72:4327] Industrias:** dice «Las 11 tarjetas»; son 8.
- **[72:4328] Servicios ocultos:** hoy es una pregunta («¿Deberíamos poder ver estos servicios?»). Reemplazar por el callout 11 del documento.
- **Callout 12 (UX-11):** falta, junto con su captura D del caso Biomás.
- **Chip:** falta `UX-01 · S2` · `UX-04 · S3` · `UX-03 · S3` · `UX-11 · S2`.

**F21 · Contenido (D22).** Cinco cambios:
- **Título y subtítulo:** el título [73:4359] pasa de «Contenido» a «Contenido que le resta confianza». Falta el subtítulo.
- **[73:4378] Testimonios:** reemplazar por el callout 13 (con «GM2DEV» y los testimonios repetidos).
- **[4078:1928] y [4078:1943]:** se unifican en el callout 14 del documento (tonos y beneficios genéricos).
- **[4078:1945] «Logos sin explicación»:** no está en la auditoría. Hay que sacarlo o sumarlo como hallazgo.
- **Chip:** falta `CONT-02 · S3` · `CONT-04 · S2` · `CONT-06 · S2`.

**Falta D23 · Movimiento.** Es una slide de un callout (15, A11Y-05) con su captura del hero y los carruseles. Va entre F21 y F22.

**F22 · Accesibilidad (D24).** El panel derecho es violeta y está vacío: faltan las capturas. También falta el subtítulo y el chip `A11Y-01 · S3` · `A11Y-03 · S2` · `A11Y-02 · S2`.
- **[74:4459]:** pasa al callout 16.
- **[74:4462]:** dice «Skip link roto…», que se descartó. Pasa al callout 18 (solo logos).
- **Callout 17 (contraste):** falta.

**F23 · SEO y confianza (D25).** Falta el subtítulo y el chip `SEO-01 · S3` · `UX-08 · S3` · `SEO-02 · S2` · `SEO-04 · S2`. Las dos capturas [75:4689, 75:4694] son de 2024 y de otra app.
- **[74:4677]:** pasa al callout 19 (sin «→ Borrarlas o ponerles noindex»).
- **[74:4678]:** pasa al callout 20 (sin «→»).
- **Callout 21 (H1 y metadatos):** falta.

**F24 · Idioma (D26).** Rehacer. Hoy repite el cuerpo y las capturas de F23. Va el título «Un sitio solo en español para un equipo global», el subtítulo, el callout 22 (UX-10), el chip `UX-10 · S2` y la captura del header de Antares con ES/PT/EN.

**F25 · Balance (D27).** Los textos de las dos columnas coinciden. Falta el kicker y el título «El balance: una base fuerte que hoy no se aprovecha».

**F26 y F27 · Fortalezas (D28).** El documento las arma en una sola slide. En F27:
- **Texto grande [44:1627]:** sumar «: prueba real, contacto a mano e identidad propia».
- **Tarjetas:** falta la 4 «Base técnica sana». La de «Contacto a mano» [4079:1981, 4079:1983] pasa a «Contacto a mano en desktop», con el texto que aclara que en mobile queda dentro del menú.
- **Chip:** falta `La medición ya está instalada: GTM, GA4 y Google Ads`.
- **Subtítulo:** falta «Lo que hay que conservar en el sitio nuevo».

**F28 · Portadilla (D29).** Falta el subtítulo «Los 26 hallazgos ordenados por severidad, con su recomendación y esfuerzo».

**F29 · Severidad 3 (D30).** Rehacer la tabla [44:1799]:
- **Título:** de «Problemas con mayor prioridad» a «Problemas mayores: prioridad alta». Falta el subtítulo «11 hallazgos de severidad 3. Ninguno es catastrófico». Los encabezados van en español.
- **Filas:** hoy tiene 8 y el documento 11. Sobra «Noticias vacía», que es severidad 2. Faltan privacidad, imágenes y hero, páginas de prueba, controles sin nombre y soluciones sin página propia. Las recomendaciones van con «Recomendamos…».
- **Esfuerzos:** hay que revisarlos fila por fila contra el documento.

**F30 · Severidad 2 vieja.** Eliminar. Repite F31 con filas de hallazgos descartados (header transparente y testimonios cortados).

**F31 · Severidad 2 parte 1 (D31).** Rehacer la tabla [4023:2290]:
- **Título:** «Problemas menores: experiencia y contenido», con el subtítulo «Severidad 2 · parte 1 de 2».
- **Filas que sobran:** «Scroll intervenido», «Header transparente…» y «Testimonios cortados» (descartados), y las filas de badges sin texto.
- **Filas que faltan:** Noticias vacía, Cuesta saber dónde estoy y volver, Hero recortado, Tres tonos mezclados y Beneficios genéricos.
- **Texto de cierre [4023:2307]:** se mueve a D32.

**Falta D32 · Severidad 2 parte 2 y severidad 1.** Son 7 filas (H1, metadatos, logos, contraste, hero y carruseles, autocompletado y ortografía) más el texto de cierre.

### Benchmark (F32 a F35)

**F32 · Portadilla (D33).** Falta el subtítulo y el chip `Revisados el 28/09/2026`. Ojo: el subtítulo del documento («…elegidos por Qubit») tiene atribución. Propuesta: «Cuatro integradores de automatización industrial de la región».

**F33 · Tabla benchmark (D34).** El título y el subtítulo coinciden. El cuerpo es de BWS: gauges 35/43, «Captured at Sep 12, 2024», «View Full Report», tablas [54:3122, 54:3211] y capturas [54:3051, 54:3178]. Va la tabla de 16 criterios × 6 sitios con la columna de Qubit resaltada y la leyenda ✓ ◐ ✗.

**F34 · Aprendizajes (D35).** Título y subtítulo coinciden. El cuerpo es de BWS (gauges 89/92 y 4 capturas de 2024). Van 3 columnas: «Lo que el comprador espera», «Buenas ideas a considerar» y «Donde Qubit ya gana».

**F35 · Oportunidades del mercado (D36).** El título coincide. El subtítulo [63:3855] dice «…que coinciden con lo que pidió Qubit» y pasa a «Cinco espacios vacíos en el mercado.». El cuerpo es de BWS (gauges 75/74); van 5 tarjetas.

### Performance (F36 a F42)

**F36 · Portadilla (D37).** Falta el subtítulo «Medido con Lighthouse (Google PageSpeed Insights) en mobile y desktop» y los 4 ítems «1. Velocidad · 2. Accesibilidad · 3. Buenas prácticas · 4. SEO».

**F37 · Velocidad (D38).** Rehacer el cuerpo:
- **[18:295]:** todavía habla del JavaScript, que se descartó con PERF-02. Pasa a «La home tarda en cargar en mobile, sobre todo por las imágenes pesadas».
- **[18:296]:** pasa a «…en menos de 2,5 s en mobile, con imágenes más livianas».
- **Gauges:** faltan los dos, con la tabla de métricas (29 / 57), el glosario y el link «Ver informe completo».
- **[18:294]:** «Capturado el 28/09/2026 · Lighthouse 13.5» hoy es el ítem 1 de una lista. En el documento va en el kicker.

**F38 · Usuarios reales (D39).** Rehacer el visual: las tablas [57:2818, 57:2828] son métricas de Clarity de BWS (rage clicks, 22.187 sesiones) y las capturas [51:3035, 57:2837] son de 2024. Van 3 indicadores en verde: LCP 2,4 s · CLS 0,01 · FCP 2,2 s. Falta el subtítulo, el segundo párrafo (sobre el laboratorio) y la nota «INP todavía sin datos suficientes».

**F39 · Velocidad vs competencia (D40).** Los datos coinciden, pero están en tarjetas de alturas distintas que se superponen con el título. El documento pide un gráfico de barras horizontal con dos series (mobile y desktop) y Qubit resaltado. Además, el subtítulo está duplicado [1:547, 1:559].

**F40 · Accesibilidad (D41).** Solo tiene el título [1:412]. Falta el subtítulo, el cuerpo y los gauges 92 / 92. El cuerpo ya no menciona el skip link, que se descartó.

**F41 · Buenas prácticas (D42).** El texto [9:1148] coincide. Falta el subtítulo «Cumple la mayoría; faltan ajustes de seguridad» y los gauges 96 / 96. El mockup [63:4031, 63:4032] es un iPhone con una pantalla de login de otra app.

**F42 · SEO (D43).** Rehacer el cuerpo:
- **[57:2556]:** todavía menciona «las cifras de los casos valen «0»» y «el schema tiene errores», ambos descartados. Además el texto desborda la slide. Va la lista del documento (no hay H1 · páginas de prueba indexadas · og:image es el logo).
- **Título:** «SEO» [57:2559] hoy es chico y va en el lugar del subtítulo.
- **Gauges y captura:** faltan los gauges 100 / 100, y la captura [103:12038] es de 2024.

### Medición (F43 a F46)

**F43 · Portadilla (D44).** Los textos coinciden. El mockup [63:4056, 63:4057] muestra un heatmap de la app de BWS: hay que sacarlo o reemplazarlo por una captura de qubit.la.

**F44 · Plan de medición (D45).** Las 6 tarjetas coinciden. Tres capturas de BWS [103:12042, 103:12043, 103:12044] quedaron encima de la tarjeta 2 y la tapan.

**F45 · Clarity (D46) y F46 · Investigación (D47).** Coinciden. Solo falta el «Para presentar» de D46 como nota del orador.

### Propuestas y backlog (F47 a F54)

**F47 · Portadilla (D48).** Sacar el chip «Reviewed in May 2025». Sumar el subtítulo «14 mejoras que cubren los 26 hallazgos y las oportunidades del rediseño».

**F48 · Action log alto impacto (D49).** Rehacer. Hoy la tabla [219:3518] tiene 6 filas y las otras 5 son textos sueltos debajo, con badges desalineados.
- **Columnas:** faltan los encabezados `S` · `E` · `ETIQUETAS` · `MEJ`, y los chips de etiquetas están vacíos.
- **Filas desactualizadas:** «Paleta accesible (#9D6BFF), header sólido, sin autoplay y scroll nativo» [4023:2155] pasa a «Paleta accesible (#9D6BFF) y sin autoplay». «Plantillas con nombres accesibles, skip link, un H1 y alt útiles» [4023:2174] pasa a «Plantillas con nombres accesibles, un H1 y alt útiles».
- **Orden:** en Figma el hero va antes que el titular.
- **Leyenda E0–E4:** los badges de abajo no tienen texto.

**F49 · Action log esfuerzo moderado (D50).** Borrar «Cifras de los casos en el HTML, sin contadores» (SEO-03 descartado). Las filas restantes coinciden, pero las columnas S, E, etiquetas y MEJ están vacías.

**F50 · Action log mayor esfuerzo (D51).** Rehacer:
- **Filas que sobran:** quedan filas de BWS en inglés («Consider showing a partial view of sensitive information…», «Simplify visual design…», «Partially (Edit Offer Modal pending)») y la fila del stack liviano, que se descartó. Debe quedar solo la fila de landings por industria.
- **Chips:** dicen «HEURISTICS», «DESIGN», «BE», «CROSS DEVICES», «MOBILE» y «DESKTOP», en inglés y de BWS.

**F51 · Roadmap (D52).** El chip «“Ahora” y “Próximo” forman la primera versión del sitio» (una forma con texto, que debería ser el subtítulo) tapa el título [4023:1988]. Los nombres de las MEJ no coinciden con las Propuestas. Por ejemplo, «MEJ-01 · Plataforma CMS liviana» es en realidad la medición, y «MEJ-03 · Brochures descargables» es WhatsApp y formulario. Corresponden:
- **Ahora:** MEJ-01 Medición · MEJ-02 Hero · MEJ-03 WhatsApp y formulario · MEJ-07 Contenido · MEJ-08 Sistema visual accesible · MEJ-09 Plantillas accesibles · MEJ-10 Presupuesto de performance.
- **Próximo:** MEJ-04 Casos · MEJ-13 Landings por industria · MEJ-06 Arquitectura · MEJ-11 Migración SEO · MEJ-12 Privacidad · MEJ-14 Noticias · MEJ-05 Inglés.

**F52 · Ideas (D53).** Coincide.

**F53 · Qué sigue (D54).** El kicker [219:3936] pasa a `PRÓXIMOS PASOS`. En el ítem 1 [4023:2076], «stack, carga de contenido y…» pasa a «carga de contenido y presupuesto de performance». En el ítem 3 [4023:2084], las barras «/» van como sublista.

**F54 · Cierre (D55).** Rehacer. Hoy el título va dentro de la celda de encabezado de una tabla vieja [219:4022], con filas vacías y 17 badges. El subtítulo «Gracias por confiarnos este rediseño» [219:4072] es un texto chico en la zona del pie. Va como slide de cierre limpia: título grande y subtítulo.

## Orden sugerido para editar

1. **Limpieza rápida:** pies de BWS (F6, F16), chip «Reviewed in May 2025» (F47), botones vacíos (F41 a F44), capturas encima de la tarjeta 2 (F44) y eliminar F30.
2. **Textos en slides que ya sirven:** títulos, subtítulos y kickers de F1 a F28, más los callouts de F17 a F23 con su numeración y sus chips.
3. **Grillas y tablas:** F11 a F15 (marcas y filas), F29, F31 y la nueva D32, y F48 a F50.
4. **Slides nuevas:** D5, D23 y D32, y rehacer F24 (Idioma).
5. **Bloques del template:** F33 a F35 (benchmark), F37 a F42 (performance) y F54 (cierre).
6. **Capturas:** reemplazar todas por las 15 de la lista del documento (las tenés que sacar vos o las saco con el navegador).
