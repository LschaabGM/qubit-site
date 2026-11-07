# Qubit — Benchmark competitivo y Lighthouse (insumo de trabajo)

28/09/2026 · @Lourdes · Insumo para actualizar la Auditoría y las Propuestas (pasos 3–5).

## Competidores (confirmados)

| Competidor | URL revisada | Acceso |
| --- | --- | --- |
| Quantia | quantia.com.ar (home, automatización, /proyectos, 2 casos, quiénes somos, contacto) | Navegador (el sitio carga por JS) |
| Automática (AUTOMATICA ARG) | automatica-arg.com.ar (one-page + privacidad + versión EN) | URL + navegador |
| EXSOL | exsol.com.ar (home, servicios, empresa, productos, blog) | URL + navegador |
| Antares Technologies | antaresautomation.com (home, soluciones, automatización, robótica, productos, nosotros, contacto, privacidad) | URL + navegador |

Todos revisados el 28/09/2026, desktop 1440×900. Mobile no se revisó en detalle salvo en Lighthouse.

## Tabla benchmark

| # | Criterio | Qubit | Quantia | Automática | EXSOL | Antares |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | H1 dice qué hacen y para quién | ✗ (sin H1, genérico) | ✗ (sin H1, abstracto) | ✓ | parcial | parcial (genérico en home) |
| 2 | CTA principal en el primer viewport | ✓ (genérico) | ✓ | ✓ (+ «Ver casos») | ✗ | ✓ (+ «Ver soluciones») |
| 3 | CTA con beneficio | ✗ | ✗ | parcial («evaluación técnica») | ✗ | parcial («reunión») |
| 4 | Casos con resultados cuantificados | ✓ | parcial (2 de 8) | parcial (alcance, no resultado) | ✗ | ✗ |
| 5 | Proyectos con encabezado claro y tarjetas clickeables | ✗ | ✓ | parcial (no clickeables) | ✗ | ✗ |
| 6 | Filtros de casos | ✗ | ✗ | ✗ | ✗ | ✗ |
| 7 | Páginas propias por servicio | parcial (sin enlazar) | ✓ (4) | ✗ | ✗ | ✓ (6) |
| 8 | Páginas por industria | ✗ | ✗ (solo etiquetas) | parcial (pestañas en home) | ✗ | ✗ |
| 9 | Brochures / PDF descargables | ✗ | ✗ | ✗ | ✗ | ✗ |
| 10 | Logos de clientes | ✓ | ✓ | ✗ | ✗ | ✓ |
| 11 | Testimonios con nombre y cargo | ✓ | ✗ (reseñas de Google) | ✗ | ✗ | ✗ |
| 12 | Partners / certificaciones con sello | parcial (8 marcas, sin sello) | ✓ (Siemens Solution Partner) | ✓ (Rockwell, ifm) | parcial (marcas) | parcial (alianzas) |
| 13 | Años de trayectoria visibles | ✗ | ✓ (+30) | ✗ | ✓ (desde 1997) | ✓ (+15) |
| 14 | Formulario corto (≤4 campos) | ✗ (6) | ✗ (6) | parcial (5) | ✓ (3) | parcial (5) |
| 15 | WhatsApp visible y con etiqueta | parcial (sin etiqueta, oscuro) | parcial (solo ícono) | parcial («WA») | parcial (no clickeable) | ✗ |
| 16 | Mensaje para OEMs | parcial (1 tarjeta) | parcial (etiqueta) | ✗ | ✗ | ✗ |
| 17 | «Llave en mano» explícito | ✓ | ✓ | parcial | parcial | ✓ |
| 18 | Blog / noticias activo (≤6 meses) | ✗ (último: sep 2025) | ✗ (no existe) | ✗ (no existe) | ✗ (último: 2017) | ✗ (no existe) |
| 19 | Versión en inglés / selector | ✗ | ✗ | ✓ | ✗ | ✓ (ES/PT/EN) |
| 20 | Política de privacidad | ✗ | ✓ | ✓ | ✗ | ✓ |
| 21 | Tracking (visto en el código) | GTM, GA4, Ads, Meta Pixel, Zoho PageSense | GTM, GA4, Ads | GA4 (+UA obsoleto) | GA4 (+UA obsoleto) | GTM, GA4, Ads, LinkedIn |

## Patrones de la industria

- CTA en el primer viewport: 4 de 5 (incluida Qubit). Es lo esperado.
- Años de trayectoria visibles: 3 de 4 competidores. Qubit no los muestra (el schema dice 2000).
- Páginas propias por servicio: 2 de 4.
- Partners con sello: 2 de 4 lo destacan como credencial (Siemens Solution Partner, Rockwell System Integrator).
- Formularios de 5–6 campos: 3 de 5. Solo EXSOL es corto.

## Buenas ideas a considerar (describir, no copiar)

- **Automática:** sección para el comprador técnico (alcance comparable, entregables FAT/SAT, TCO); pestañas por industria como segmentación barata; tarjetas de caso con título técnico + etiqueta de categoría; CTA secundario «Ver casos» en el hero; sitio completo en inglés.
- **Quantia:** listado de proyectos con encabezado claro y detalle por caso; franja de cifras (años, proyectos) + sello de partner con certificado; preguntas frecuentes del comprador en la home («¿puedo contratar solo una etapa?»); formulario dentro de cada página de servicio.
- **Antares:** franja de credenciales bajo el hero; páginas de servicio estructuradas por subárea; selector ES/PT/EN y oficinas por país; política de privacidad que cita la Ley 25.326.
- **EXSOL:** referente técnico con nombre; guía larga de contenido pilar.

## Dónde Qubit ya está mejor

- Único con casos con resultados cuantificados en todos los casos + testimonios con nombre y cargo.
- Logos de clientes reconocidos (solo Quantia y Antares tienen logos, sin nombres identificables).
- Mensaje llave en mano y OEM ya presente, aunque débil.
- Único con datos de campo en Chrome (tiene tráfico suficiente para CrUX, probablemente por Google Ads).

## Oportunidades de diferenciación

- **Noticias/blog activo:** nadie lo tiene. Reactivar Noticias con ritmo de publicación sería diferencial.
- **Landings por industria con brochure descargable:** nadie tiene landings por industria ni PDFs. Es una oportunidad de diferenciación.
- **Filtros de casos:** nadie los tiene.
- **WhatsApp bien resuelto:** todos lo tienen mal (ícono sin etiqueta, «WA», no clickeable o ausente).
- **Mensaje OEM desarrollado:** nadie lo tiene.

## Correcciones a la auditoría del 25/09 (EXSOL)

- Páginas por servicio: ✓ → ✗ (una sola página con 6 ítems, con noindex).
- Blog activo: ✓ → ✗ (último post 2017).
- WhatsApp: ✗ → parcial (número con ícono, no clickeable).
- Partners: ✓ → parcial (marcas representadas, no certificaciones).

## Lighthouse (PageSpeed Insights, 28/09/2026, home)

Lighthouse 13.5. Mobile emula Moto G Power con 4G lento; desktop sin limitar. Datos de laboratorio: varían entre corridas.

### Mobile

| Sitio | Perf | A11y | BP | SEO | FCP | LCP | TBT | CLS | SI | Peso |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Qubit** | **29** | 92 | 96 | 100 | 7,9 s | 9,3 s | 1.940 ms | 0 | 9,0 s | 3.891 KiB |
| Quantia | 62 | 91 | 96 | 100 | 1,4 s | 16,7 s | 180 ms | 0 | 14,2 s | 4.955 KiB |
| Automática | 58 | 97 | 100 | 100 | 4,1 s | 11,9 s | 230 ms | 0 | 5,6 s | 10.414 KiB |
| EXSOL | 64 | 83 | 96 | 92 | 3,6 s | 6,7 s | 50 ms | 0 | 6,6 s | — |
| Antares | 71 | 90 | 96 | 100 | 3,8 s | 4,1 s | 220 ms | 0,057 | 5,2 s | 17.033 KiB |

### Desktop

| Sitio | Perf | A11y | BP | SEO | FCP | LCP | TBT | CLS | SI |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Qubit** | **57** | 92 | 96 | 100 | 0,7 s | 2,7 s | 680 ms | 0,001 | 1,7 s |
| Quantia | 69 | 94 | 96 | 100 | 0,3 s | 3,1 s | 170 ms | 0,005 | 5,5 s |
| Automática | 71 | 97 | 100 | 100 | 1,2 s | 4,6 s | 60 ms | 0,001 | 2,1 s |
| EXSOL | 97 | 97 | 100 | 92 | 0,8 s | 0,8 s | 0 ms | 0,061 | 1,3 s |
| Antares | 93 | 87 | 92 | 100 | 0,9 s | 1,0 s | 70 ms | 0,004 | 2,1 s |

### Datos de campo (usuarios reales, CrUX, últimos 28 días)

- **Qubit mobile: aprueba Core Web Vitals.** LCP 2,4 s, CLS 0,01, INP sin datos, FCP 2,2 s, TTFB 1 s.
- Qubit desktop y los 4 competidores: sin datos (poco tráfico para CrUX).

### Diagnóstico de Qubit (qué explica el 29)

- Recursos que bloquean el render: ahorro estimado 1.650 ms en mobile.
- Imágenes sin width/height, caché corta (ahorro 200 KiB), JS sin minificar y legacy.
- Peso: 3.891 KiB en mobile, 4.854 KiB en desktop.
- Accesibilidad (92): contraste insuficiente y enlaces sin nombre. Confirma A11Y-01 y A11Y-03.
- SEO 100: Lighthouse solo revisa lo básico (title, meta, indexable). No detecta la falta de H1 ni las páginas de prueba (SEO-01, SEO-02 y SEO-04 siguen vigentes).

### Lectura

- En laboratorio, Qubit es **el más lento de los 5 en mobile** (29 contra 58–71) y el más lento en desktop (57 contra 69–97).
- Sin embargo, sus usuarios reales en mobile aprueban Core Web Vitals. La diferencia sugiere que el problema pega más en la **primera visita sin caché y en celulares de gama media**: justo el caso de quien llega desde Google Ads.
- EXSOL y Antares demuestran que en desktop se puede llegar a 90+ en este rubro.

## Actualización 04/10/2026 · Lighthouse en DevTools

Se repitieron las corridas con Lighthouse 13.4.1 en Chrome DevTools (mobile: Moto G Power con Slow 4G). Reemplazan a las de PageSpeed Insights del 28/09 en las slides de Performance. Las URLs de los competidores son las indicadas por Guido. El detalle está en *Qubit — Lighthouse 04-10 (DevTools).md*.

| Sitio | Modo | Perf | A11y | BP | SEO | FCP | LCP | TBT | CLS | SI |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Qubit | Mobile | 64 | 92 | 100 | 100 | 3,3 s | 4,1 s | 390 ms | 0 | 6,8 s |
| Qubit | Desktop | 62 | 92 | 100 | 100 | 1,9 s | 4,5 s | 0 ms | 0,004 | 4,6 s |
| Antares | Mobile | 51 | 98 | 81 | 100 | 5,1 s | 12,7 s | 270 ms | 0 | 10,5 s |
| Antares | Desktop | 70 | 92 | 96 | 100 | 1,8 s | 3,0 s | 10 ms | 0,016 | 2,8 s |
| EXSOL | Mobile | 87 | 83 | 96 | 92 | 2,2 s | 3,7 s | 70 ms | 0 | 3,0 s |
| Quantia | Mobile | 79 | 89 | 100 | 100 | 1,6 s | 3,9 s | 170 ms | 0,008 | 6,6 s |
| Automática | Mobile | 57 | 97 | 100 | 100 | 3,2 s | 12,7 s | 180 ms | 0 | 11,9 s |
| Automática | Desktop | 61 | 97 | 96 | 100 | 2,6 s | 4,0 s | 0 ms | 0,001 | 4,1 s |
| EXSOL | Desktop | 87 | 92 | 96 | 92 | 1,1 s | 1,9 s | 0 ms | 0,077 | 1,5 s |
| Quantia | Desktop | 94 | 94 | 96 | 100 | 0,6 s | 1,0 s | 0 ms | 0 | 2,3 s |

Corridas completas. Resumen de performance: mobile Quantia 79, EXSOL 87, Qubit 64, Automática 57 y Antares 51; desktop Quantia 94, EXSOL 87, Qubit 62, Automática 61 y Antares 70. Hasta tenerlos, esas filas siguen con PageSpeed Insights del 28/09.

Nota: el puntaje de laboratorio varía entre corridas y entre herramientas (PSI vs. DevTools). Por eso las slides aclaran la fuente y la fecha de cada dato.
