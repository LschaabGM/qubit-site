# Sentinel — Bitácora de la sesión (05 al 07/11/2026)

Todo lo que se hizo en la landing de Sentinel: contenido, layout, enlaces entre páginas, el juego de formas del logo, la comparación con la landing de Guido y lo que falta.

Versión online (privada, se comparte desde el menú Share): https://claude.ai/artifact/2wqiu27Zjkf9VifCL3vsmv

---

## 1. Estado en un vistazo

| Estado | Qué |
|---|---|
| ✅ Hecho | Landing principal rehecha con 11 secciones: contenido de Guido y sistema visual nuestro. |
| ✅ Hecho | Página de Calderas como plantilla, con los links a los slugs de Guido y sin «parada». |
| ⏳ Espera a Luly | Revisión en Chrome, 5 textos nuevos y el texto del botón de cotización. |
| ⏳ Espera a Guido | Números del plan «[N]», bombas y tanques, energía, SMS, marca blanca, más casos. |
| ➡️ Siguiente | Construir Torres de enfriamiento y Ósmosis inversa con la plantilla de Calderas. |

> **Estrategia elegida:** la estructura y el contenido de Guido son la base. Le sumamos nuestro sistema visual y los argumentos de valor que él no tenía: las cifras de «Cuánto cuesta no medir», la sección de IA y S·E·N·T para explicar cómo funciona.

---

## 2. Fuentes de contenido

Primero se armó un draft solo con los 5 brochures. Después apareció la landing de Guido, y su contenido pasó a mandar sobre el draft donde hubiera diferencias.

| Fuente | Qué aportó |
|---|---|
| Sentinel Brochure (PDF) | Desafíos y soluciones, beneficios, funcionalidades, IA, proceso de implementación. |
| Calderas (PPTX) | Desafíos, cifras de eficiencia, del correctivo al predictivo, S·E·N·T, sectores. |
| Torres y condensadores (PPTX) | Igual estructura que Calderas, con cifras de ASHRAE y EPA. |
| Bombas y tanques (PPTX) | Desafíos, beneficios, sectores. Sin cifras ni sección predictiva. |
| Ósmosis inversa (PPTX) | Pensado para fabricantes e instaladores: marca blanca y cifras de membranas. |
| **Landing de Guido (HTML)** | **Fuente principal.** Hero, qué es, 7+1 aplicaciones, precios reales, el caso Ferraro, FAQ y 2 capturas reales del panel. |

Los brochures están en `~/Downloads` (no se suben a GitHub: `.pptx` y `.pdf` están en `.gitignore`).

### Cifras que usamos (todas con fuente)

| Cifra | Qué significa |
|---|---|
| **2%** | combustible extra por cada mm de sarro en una caldera |
| **12%** | más energía con 0,3 mm de incrustación en el condensador |
| **50%** | menos purga al pasar de 3 a 6 ciclos en una torre |
| **15–40%** | de pérdida de productividad por membrana sucia |

Fuentes: Departamento de Energía de EE.UU., ASHRAE Handbook, EPA WaterSense, Water Tech Online.

---

## 3. Estructura final de la landing principal

Pasamos de 15 secciones a 11: la página es un 25% más corta que nuestra primera versión.

1. **Hero** — De Guido. «Tu planta en tiempo real, desde cualquier lugar», con dos capturas reales del panel. Botones: relevamiento técnico y Ver precios.
2. **Qué es Sentinel** — Mixto. El texto de Guido, junto a una captura grande de la estación de bombeo, y sus 3 puntos como lista.
3. **Aplicaciones** — De Guido. 6 tarjetas y «Plantas completas», con dibujos rehechos en una sola escala y un recuadro con cifra en cada una.
4. **Cuánto cuesta no medir** — Nuestra. Franja violeta con 4 cifras grandes y sus fuentes.
5. **IA** — Nuestra. Panel violeta oscuro, 2×2: predicción, mantenimiento predictivo, anomalías, preguntale a la IA.
6. **Cómo funciona (S·E·N·T)** — Nuestra. Sensorización, Edge (gateway), Nube y Toma de decisiones, con mosaicos más chicos y flechas entre ellos.
7. **Tres etapas** — De Guido. Relevamiento, propuesta e instalación, en una línea de tiempo con círculos.
8. **Precios** — De Guido. Plan de USD 130/mes, tabla de packs y la tabla nueva «Costos únicos y servicios».
9. **Proyectos** — De Guido. Una sola tarjeta ancha con el caso real de Ferraro.
10. **Preguntas frecuentes** — Preguntas de Guido agrupadas en Instalación, Uso y alarmas, y Precios, con una tarjeta fija de WhatsApp al costado.
11. **Contacto** — Nuestra franja violeta, con el texto de Guido y el teléfono +54 11 2275-5716.

### Lo que sacamos de la página principal y por qué

- **Franja de íconos bajo el hero:** repetía lo que ya dice el hero.
- **Beneficios ×8:** era la cuarta vez que se repetían las mismas funciones.
- **Chips de industrias:** parecían botones y no lo eran. Quedan en las páginas de cada aplicación.
- **Comparación Sin/Con Sentinel:** pasa a las páginas de cada aplicación.
- **Placeholder de precios, FAQ duplicada y el caso del tanque de efluentes:** los reemplaza el contenido de Guido.

---

## 4. Landing de Guido vs la nuestra

Dos agentes compararon las páginas: uno el contenido y otro el diseño. La opinión de Luly fue el punto de partida. Auditorías completas en `_sentinel-guido/`.

| Sección | Opinión de Luly | Decisión |
|---|---|---|
| Hero | Le gustó | **Guido**, con esquina suavizada en la captura. |
| Qué es | Se puede mejorar | **Mixto.** Sus 3 tarjetas genéricas no mostraban nada; ahora hay una captura real. |
| Qué puede hacer | Le gustó, revisar assets | **Guido**, con dibujos unificados y cifras en Saira. |
| Cómo funciona | Se puede mejorar | **Nuestra.** Sus 3 pasos eran el proceso de venta; S·E·N·T explica el producto. |
| Precios | No estaba mal | **Guido**, completo. |
| Otros servicios | Se veía raro | **Mixto.** Pasa a ser una tabla de costos únicos. |
| FAQ | Se veía rara | **Mixto.** Agrupada, con la primera abierta y contacto al costado. |

**Por qué «Otros servicios» se veía raro:** era un título chico pegado a precios, sin separación, así que se leía como una nota al pie. Usaba tarjetas de funciones para precios, y solo una de las tres tenía precio. Después repetía «Pedí tu cotización» como título y como botón. Eran 5 patrones distintos en una sola sección.

**Por qué la FAQ se veía rara:** tenía unos 400px de columna vacía a la izquierda y 8 filas cerradas e iguales que se leían como una pared. Además decía «Escribinos por WhatsApp» sin un link. La nuestra tenía el mismo problema.

---

## 5. Landings secundarias y cómo se enlazan

Una página por aplicación, con los slugs que Guido ya usa en su landing.

| Página | Fuente | Estado |
|---|---|---|
| `/sentinel/calderas/` | Brochure de Calderas | Construida (plantilla) |
| `/sentinel/torres-de-enfriamiento/` | Brochure de Torres | Por hacer |
| `/sentinel/osmosis-inversa/` | Brochure de Ósmosis | Por hacer |
| `/sentinel/bombas/` y `/tanques/` | Un solo brochure para los dos | Preguntar a Guido |
| `/sentinel/energia/` | Sin brochure | Preguntar a Guido |
| Plantas completas | — | Solo tarjeta, lleva a contacto |

**Los 4 sentidos del enlace:**

1. **Principal → aplicación:** cada tarjeta de «Aplicaciones» tiene su link.
2. **Aplicación → principal:** migas de pan arriba (Sentinel › Calderas) y «Ver todo Sentinel» al final.
3. **Aplicación → aplicación:** franja «Otras aplicaciones» antes del contacto.
4. **Aplicación → precios:** link a `/sentinel/#precios`, como pidió Alejo.

Descartado: pestañas en una sola página (no se puede compartir un link a una aplicación y es peor para Google) y solo menú desplegable (nadie lo descubre desde la principal).

---

## 6. Juego de formas del logo

El logo de Qubit combina tres formas: un círculo, un cuadrado girado con esquinas suavizadas y un punto suelto. Lo llevamos a la página como una regla:

- **Lo grande es cuadrado:** secciones, grillas y tarjetas mantienen los 90°.
- **Lo chico es redondo:** números de pasos, etiquetas, fotos de personas e íconos chicos.
- **Los bloques destacados tienen una esquina suavizada,** siempre arriba a la derecha, como una firma.
- **S·E·N·T va de cuadrado a círculo:** la S (datos crudos) es un cuadrado y la T (decisiones, la IA) es un círculo.

> **A validar con Qubit:** el Manual de Marca dice «sin esquinas redondeadas». Es una excepción buscada y vive en un archivo aparte (`site/css/sentinel-morph.css`), así que se apaga borrando una línea `<link>` en cada página.

---

## 7. Textos y reglas de idioma

- Voseo (pedí, mirá, conocé) con vocabulario neutro («sector» antes que «rubro»).
- Nunca «parada»: en la industria argentina es ambiguo. Se reemplazó en Calderas.
- Títulos de hasta 48 caracteres y subtítulos de hasta unos 105.
- Ningún título ni subtítulo deja una palabra sola en la última línea.
- No se inventan cifras: todo número viene de un brochure o de Guido.

### Textos nuevos que Luly tiene que aprobar

- [ ] Fila de soporte: «Horas de soporte para hacer modificaciones.»
- [ ] Link a preguntas de precios: «¿Dudas sobre equipos, moneda o soporte? Mirá las preguntas sobre precios.»
- [ ] Botón de la tarjeta de la FAQ: «Escribinos por WhatsApp».
- [ ] Los textos cortos de los recuadros con cifras.
- [ ] Tarjeta de bombas: «Arrancalas o detenelas desde el teléfono».
- [ ] Botón de cotización: ¿mantener «Cotizá Sentinel para tu planta» o cambiar a «Pedí tu cotización»?

---

## 8. Preguntas para Guido

- [ ] ¿Qué números van en el plan? Hoy dice «Incluye [N] dispositivos, [N] usuarios, [N] alarmas, [N] correos y [N] SMS».
- [ ] Bombas y tanques: ¿una página o dos? Hay un solo brochure para los dos.
- [ ] Energía no tiene brochure: ¿solo tarjeta o página propia?
- [ ] El pack de SMS cuesta USD 80 y el de correos USD 8. ¿Es correcto?
- [ ] ¿Se ofrece marca blanca (logo y colores del cliente)? Está en el brochure de Ósmosis pero no en su landing.
- [ ] ¿Hay más casos además de Ferraro? Dos tarjetas de proyectos quedaron vacías.
- [ ] Capturas reales del panel de cada aplicación y los PDF de cada brochure para descargar.

Ya resuelto con su landing: teléfono (+54 11 2275-5716), lista de usos, precios, destino de los botones, FAQ y el caso Ferraro.

---

## 9. Archivos

| Archivo | Qué es |
|---|---|
| `site/sentinel/index.html` | Landing principal, 11 secciones |
| `site/sentinel/calderas/index.html` | Plantilla de aplicación |
| `site/css/sentinel.css` | Componentes de Sentinel, reutilizables |
| `site/css/sentinel-morph.css` | Experimento de formas del logo |
| `site/img/sentinel-*.webp`, `ferraro-*.webp` | Capturas reales del panel y fotos de Ferraro |
| `site/fonts/material-symbols.woff2` | Íconos ampliados (aprobado por Luly) |
| `Sentinel — Draft de contenido y layout.md` | Primer draft basado en los brochures |
| `_sentinel-guido/` | Auditorías de contenido y visual, e imágenes originales |
| `Qubit — Estado y próximas sesiones.md` | Documento para retomar cada sesión |

Backups locales en `_backup-2026-11-05/` y `_backup-2026-11-06/` (no se suben a GitHub; el historial de git los reemplaza).

---

## 10. Próximos pasos

1. Luly revisa la landing y Calderas en Chrome, en escritorio y celular.
2. Aprobar los textos nuevos y el texto del botón de cotización.
3. Mandar las preguntas a Guido.
4. Construir Torres de enfriamiento y Ósmosis inversa con la plantilla de Calderas.
5. Revisión visual y de accesibilidad de todas las páginas con un segundo agente.
6. Validar el juego de formas con Qubit antes de llevarlo al resto del sitio.

**Para retomar:** abrir Claude Code en la carpeta de Qubit y escribir «Leé 'Qubit — Estado y próximas sesiones.md' y retomemos la sesión de Sentinel».
