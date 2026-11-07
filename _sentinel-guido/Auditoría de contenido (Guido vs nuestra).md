# Sentinel: Guido's page vs. our hub (content audit)

Date: 2026-11-06. Read-only comparison. No project files were edited.

- **Guido:** `~/Downloads/Sentinel_ monitoreo y control remoto de tu planta en tiempo real _ Qubit.html`
- **Ours:** `site/sentinel/index.html` (hub, 15 sections) + `site/sentinel/calderas/index.html`
- **Rule:** Guido's content is the source of truth. Ours survives only where it adds something and does not contradict him.

---

## 1. Guido's page: every concrete fact

**Meta**
- Title: "Sentinel: monitoreo y control remoto de tu planta en tiempo real | Qubit"
- Description (225 chars, gets cut off in Google at about 155): "…muestra tu proceso en un sinóptico real y te avisa por correo o SMS… Calderas, torres de enfriamiento, bombas, tanques, ósmosis inversa y energía."
- og:image `https://qubit.la/img/og-sentinel.png`. Structured data (JSON-LD): Product "Sentinel", Offer **USD 130, "Abono mensual, sin IVA"**, url `https://qubit.la/sentinel/`.
- Header has a **WhatsApp** link (`wa.me/541122755716`, prefilled "Hola, quiero hacer una consulta sobre Sentinel"). The Contacto link goes to `#contacto` on the same page. Ours goes to `../index.html#contacto`.

**Hero (sn-hero)**
- Eyebrow "Sentinel". H1 **"Tu planta en tiempo real, desde cualquier lugar"**
- Sub: "Sentinel se conecta a los PLC y sensores que ya tenés, te muestra el proceso tal como está en planta y te avisa antes de que algo falle. Lo usás desde la PC, la tablet o el celular."
- CTAs: **"Pedí tu relevamiento técnico" → #contacto** and **"Ver precios" → #precios**
- Checks: "Sin modificar el proceso productivo" · "Alarmas por correo o SMS"
- Image: electrical-monitoring panel (voltage per phase, total current, active power, last 24 h consumption, meter status, active alarms). This is the same panel as brochure p.4.

**#que-es: "Todo tu proceso en una sola pantalla"**
- "Sentinel es la plataforma de monitoreo y control remoto de Qubit. Se integra a los PLC, sensores y protocolos que ya están en tu planta, junta todos los datos en un panel con el layout real de tus equipos y los usa para avisarte, registrar cada evento y anticipar fallas."
- 3 cards: **Controlá desde cualquier lugar** (ver y operar en tiempo real desde PC/tablet/teléfono) · **Enterate antes de que falle** (alarmas por correo o SMS + IA que detecta degradación) · **Todo queda registrado** (historial auditable + reporte diario automático)

**#aplicaciones: "Un monitoreo pensado para cada proceso"**. Sub: "Elegí tu aplicación y mirá qué variables sigue Sentinel en cada caso."
| # | Application | Variables / promise | Link |
|---|---|---|---|
| 1 | Calderas | Presión, temperatura y estado del quemador; alarma ante desvío | `calderas/` |
| 2 | Torres de enfriamiento | Temperaturas de entrada y salida, ventiladores y bombas; rendimiento y consumo | `torres-de-enfriamiento/` |
| 3 | Bombas y estaciones de bombeo | Estado, horas de uso, alternancia; arrancar o detener desde el celular | `bombas/` |
| 4 | Tanques | Nivel en tiempo real, aviso antes de rebalse o vaciado, historial de consumo | `tanques/` |
| 5 | Ósmosis inversa | Presiones, caudales, conductividad; cuándo limpiar o cambiar membranas | `osmosis-inversa/` |
| 6 | Energía eléctrica | Tensión, corriente y consumo por circuito; aviso ante sobretensiones o picos | `energia/` |
| 7 | Plantas completas | "Sentinel se adapta a cualquier tipo de planta… mismo sinóptico" | `#contacto` ("Contanos cómo es tu planta") |

**#como-funciona: "De la primera visita al monitoreo, en tres etapas"**
- Sub: "Sentinel se suma a lo que ya tenés en planta. No hace falta cambiar tus equipos ni modificar el proceso productivo."
- 1 Relevamiento técnico (PLC, sensores existentes, qué necesitás ver o controlar) · 2 Propuesta y cotización (**sensores, gateway e instalación, junto con el abono de la plataforma**) · 3 Instalación y puesta en marcha (montaje, **sinóptico de tu planta, alarmas y usuarios**, activación)

**#precios: "Un abono mensual y packs que sumás si los necesitás"**
- **Plan Sentinel: USD 130 por mes**, platform fee, without VAT (IVA). Includes: sinóptico with the real layout, remote control from PC/tablet/teléfono, automatic alarms + auditable history, automatic daily report, and "Incluye **[N]** dispositivos, [N] usuarios, [N] alarmas, [N] correos y [N] SMS". **The quotas are still placeholders.** CTA "Cotizá Sentinel para tu planta" → #contacto
- **Monthly add-on packs:** Dispositivos +5 = USD 25 · Usuarios +2 = USD 15 · Tráfico de datos 250.000 mensajes + 500.000 puntos = USD 10 · Procesamiento 500.000 ejecuciones de reglas + 100.000 de scripts = USD 35 · Alarmas 100 = USD 8 · Correos 100 = USD 8 · **SMS 100 = USD 80**
- **Other services:** Gateway y sensores (defined during the site survey, quoted separately) · Instalación y puesta en marcha (one-time) · **Soporte técnico USD 50/hora**
- CTA "Pedí tu cotización" → #contacto
- **Pricing FAQ (4):** equipment not included in the fee (gateway and sensors quoted separately) · if the plant grows, you add packs without changing plan · USD without VAT, payable in USD or ARS at the **Banco Nación seller rate of the day before payment** · training hours included, support hours for modifications billed separately

**#proyectos: "Sentinel funcionando en planta"**. Sub: "Plantas que hoy se monitorean y controlan con Sentinel."
- Agua y efluentes · **Ferraro y Asociados: Monitoreo remoto de planta de efluentes** → `../proyectos/monitoreo-remoto-de-planta-de-efluentes/`
- 2 placeholder cards `[Industria] [Cliente]: [título del proyecto con Sentinel]`
- "Explorá todos los proyectos" → `../proyectos/`
- **Not listed:** "Monitoreo remoto de tanque de efluentes con PLC y webserver"

**#preguntas: "Lo que más nos preguntan"**. Sub: "¿Tenés otra duda? Escribinos por WhatsApp o desde el formulario y te respondemos dentro de 1 día hábil."
1. ¿Tengo que cambiar mis PLC o sensores? No. Standard PLCs, sensors and protocols; the site survey checks what is needed to connect them.
2. ¿Hay que modificar el proceso productivo? No. Installation work is coordinated with the client.
3. ¿Puedo operar los equipos o solo verlos? Both: turn on, turn off or adjust, depending on user permissions.
4. ¿Cómo me entero si algo falla? Alarms by email or SMS, and every event is logged.
5. ¿Qué hace la IA? No extra sensors. Predicts when a variable will cross a critical limit, calculates equipment health, detects deviations, answers questions about your data.
6. ¿Varias plantas en el mismo panel? Sí.
7. ¿Quién puede entrar? Profiles by access level (for example, supervision can view without operating).
8. ¿Desde qué dispositivos? PC, tablet or teléfono, wherever there is internet.

**#contacto: "Pedí tu relevamiento técnico"**
- Sub: "Contanos qué equipos querés monitorear y coordinamos la visita. Te respondemos dentro de 1 día hábil."
- info@qubit.la · **+54 11 2275-5716** · Burela 1984, Villa Urquiza (no "CABA") · WhatsApp, same number
- Form: textarea label "¿Qué equipos querés monitorear?" · button "Pedir relevamiento técnico"
- **No named salesperson** (ours shows "Guido Fada · Comercial…")
- Footer adds a "Sentinel" link under Soluciones

---

## 2. Our hub (summary)

Hero (H1 "Sentinel", tagline "Visibilidad y control de planta en tiempo real…", CTA relevamiento + "Ver aplicaciones") → 4-icon strip → Desafíos (5 rows) → Funcionalidades bento → IA (4) → SENT 4 layers → Aplicaciones (4 brochure rows with stats) → Cuánto cuesta no medir (4 stats + sources) → Beneficios (8) → Dónde se aplica (10 industry chips) → Implementación (3) → Precios (placeholder) → Proyectos (2, CONFIRMAR) → FAQ (7, incl. marca blanca) → Contacto.

Calderas: hero → Desafíos (5) → Cuánto cuesta no medir (4, DOE) → Correctivo → predictivo (4) → SENT → Una sola pantalla → Beneficios (8) → Dónde se aplica (6 with a sentence each) → Implementación → Otras aplicaciones → Contacto. Uses "parada" 4 times (see §6).

---

## 3. Section-by-section matrix

| Topic | Guido says | We say | Decision | Reason |
|---|---|---|---|---|
| Meta title/description | Full SEO title + description listing the 6 applications | (not compared in detail) | **KEEP GUIDO** (shorten description to about 155 chars) | Listing his 6 applications helps SEO. Shortening keeps the meaning. |
| Structured data (JSON-LD) Product + Offer USD 130 | Present | Absent | **KEEP GUIDO** | Price shows in search results. |
| Hero H1 | "Tu planta en tiempo real, desde cualquier lugar" | "Sentinel" + tagline | **MERGE**: eyebrow "Sentinel" (or "Qubit IoT · Sentinel"), H1 = Guido's | Guido's H1 states the benefit. The product name moves to the eyebrow. |
| Hero sub | Connects to PLC/sensors, shows the process as it is in the plant, warns before failure, PC/tablet/celular | Similar + IA | **KEEP GUIDO** (shortened, see §6) | Same idea. His wording rules. |
| Hero CTAs | Relevamiento → #contacto · **Ver precios → #precios** | Relevamiento · Ver aplicaciones | **KEEP GUIDO** | He chose to make price a primary path. |
| Hero checks / icon strip | 2 checks (sin modificar proceso, alarmas correo/SMS) | 4 items (compatible, alarmas, dispositivos, multi-sitio) | **MERGE**: Guido's 2 + our "Compatible con tu equipamiento" and "Multi-sitio" | Ours are confirmed by Guido's own FAQ (1, 6). No contradiction. |
| Qué es + 3 pillars | Paragraph + Controlá / Enterate / Todo queda registrado | No equivalent block (Desafíos and Beneficios cover it in pieces) | **KEEP GUIDO** | Answers our open question 2 directly. |
| Desafíos Sin/Con (5 rows) | None | 5 rows from brochure | **ADD FROM OURS, optional / trimmed** | Fully consistent with Guido, but it repeats Qué es. If kept, cut to 3 rows; the sinóptico row is the most distinctive. Guido's page works without it. |
| Funcionalidades bento | Covered by Qué es + Precios list (sinóptico, control remoto) | 4 cards + screenshot | **MERGE into Qué es**: keep the screenshot and the "Sinóptico de la planta" and "Multi-sitio" ideas as supporting content, drop the duplicate "control remoto" and "compatible" cards | Avoids saying the same thing 3 times. |
| IA (4 capabilities) | Only in FAQ 5 and one Qué es card | Dedicated section, identical 4 capabilities | **ADD FROM OURS** (wording already matches Guido's FAQ 5) | Guido explicitly backs the same 4 claims. The section adds visual weight. |
| SENT 4 layers | None | S·E·N·T | **ADD FROM OURS**, align wording: "Edge: un gateway/controlador en planta…" | Brand moment from the brochure. Guido calls the hardware "gateway", so use his word. |
| Aplicaciones | 6 apps + Plantas completas, short card copy, own slugs | 4 brochure rows with long copy + stats | **KEEP GUIDO** (list, names, copy, slugs); **MERGE** our stat line only into Calderas, Torres and Ósmosis cards | His list is the source of truth. Stats are sourced brochure data and don't contradict. Our Ósmosis "tablero con la marca del fabricante" line: **DROP from hub** until white label is confirmed. |
| Cuánto cuesta no medir | None | 4 stats with sources | **ADD FROM OURS** | Sourced (DOE, ASHRAE, EPA, Water Tech Online). Not invented. Gives weight to the pitch. |
| Beneficios (8) | Covered by Qué es, Precios, FAQ | 8 cards | **DROP OURS** (or keep only "Optimización de recursos" + "Mejores decisiones" folded into Qué es) | 6 of 8 duplicate Guido's content. |
| Dónde se aplica (10 industry chips) | None (footer lists 4 project industries) | 10 chips | **ADD FROM OURS** | Adds the "which sector" angle. Doesn't contradict. |
| Cómo funciona / Implementación | 3 stages, step 2 includes **abono**, step 3 includes **sinóptico, alarmas y usuarios** | 3 stages, step 3 includes **capacitación del personal** | **KEEP GUIDO** + MERGE "y capacitamos a tu equipo" into step 3 | Training is confirmed by Guido's pricing FAQ ("capacitación… incluidas"). |
| Precios | Full pricing (USD 130, packs, services, 4 FAQ) | Placeholder | **KEEP GUIDO**, entirely | Closes the biggest gap. Keep the `[N]` quotas hidden or marked until Guido gives numbers. **Never invent them.** |
| Proyectos | Ferraro (efluentes) + 2 placeholders | Ferraro + tanque de efluentes (CONFIRMAR) | **KEEP GUIDO**: Ferraro only. **MERGE** the "−90% visitas técnicas innecesarias" figure from our existing case page. **DROP** the tanque case and Guido's empty placeholders. | Guido listed only Ferraro, which implies tanque/webserver was not Sentinel. Don't publish empty cards. |
| FAQ | 8 general + 4 pricing | 7 (6 overlap + marca blanca) | **KEEP GUIDO** (all 12). **DROP** our 6 duplicates. **HOLD** marca blanca (ósmosis sub-landing only) until confirmed. | His answers are fuller. Marca blanca is still unconfirmed and Guido omitted it. |
| Contacto | No salesperson name, WhatsApp listed, address without CABA, textarea "¿Qué equipos querés monitorear?", button "Pedir relevamiento técnico" | Guido Fada name, no WhatsApp in the block, "CABA", "Contanos brevemente qué necesitás", "Enviar consulta" | **KEEP GUIDO** | He removed his own name; respect that. Keeping "CABA" is harmless but optional (ask). |
| Header Contacto link | `#contacto` (same page) + WhatsApp button | `../index.html#contacto` | **KEEP GUIDO** | Keeps the lead on the Sentinel page. |
| Footer | Adds "Sentinel" under Soluciones | Missing | **KEEP GUIDO** | Internal link. |

---

## 4. Sub-landings

### Mapping
| Guido's application | Guido slug | Our brochure | Content available |
|---|---|---|---|
| Calderas | `calderas/` | Calderas | **Full** (template already built) |
| Torres de enfriamiento | `torres-de-enfriamiento/` | Torres **y condensadores** | **Full**. The brochure also covers condensers. |
| Bombas y estaciones de bombeo | `bombas/` | Bombas **y tanques** (one brochure) | **Medium**. The brochure has no stats or correctivo→predictivo section. |
| Tanques | `tanques/` | same Bombas y tanques brochure | **Thin**. Shares the brochure with Bombas. |
| Ósmosis inversa | `osmosis-inversa/` | Ósmosis inversa | **Full**. Note the brochure targets **manufacturers/installers** (white label), while Guido's card targets the plant (membranes). |
| Energía eléctrica | `energia/` | **None** (only the general brochure's p.4 panel screenshot) | **Card only for now**, or a short sub-landing built from Guido's card + the hero screenshot |
| Plantas completas | → `#contacto` | None | **Card only** (as Guido designed it) |

### Recommendation (options, Luly decides)
Guido's slugs win, because he already links to them:

1. `/sentinel/calderas/`: full template (exists)
2. `/sentinel/torres-de-enfriamiento/`: full template; mention condensers inside the page (H1 can stay "Sentinel para torres de enfriamiento", with condensers as a section/benefit)
3. `/sentinel/bombas/` and `/sentinel/tanques/`: **Option A** two short pages, each using the half of the Bombas y tanques brochure that applies, plus Guido's card copy (no stats, as planned). **Option B** build one page `bombas-y-tanques/` and point both of Guido's cards to it, with anchors `#bombas` / `#tanques`. A is closer to Guido's structure. B is honest about how little content exists. **Ask Guido.**
4. `/sentinel/osmosis-inversa/`: full template; resolve the plant-vs-manufacturer audience first
5. `/sentinel/energia/`: **card only** (link to `#contacto`) until Guido sends content, or a light page (hero + variables + screenshot + CTA). Don't pad it with invented stats.
6. Plantas completas: card only → `#contacto`

**Rename/retire our slugs:** `torres-y-condensadores` → `torres-de-enfriamiento`; `bombas-y-tanques` → `bombas` + `tanques` (or keep as the single page in option B). Update the Calderas "Otras aplicaciones" strip (it currently links `../torres-y-condensadores/` and `../bombas-y-tanques/`, and lists only 3 of Guido's 6).

---

## 5. Open questions: which ones Guido's page now answers

**Estructura doc (questions for Guido)**
| Question | Answered? | Answer |
|---|---|---|
| Hero title, sub, main button + target | **Yes** | H1 "Tu planta en tiempo real, desde cualquier lugar"; button → #contacto (relevamiento) + Ver precios |
| Hero image | **Partly** | Electrical-monitoring panel (alt text given). Need the actual image file. |
| Qué es: paragraph + 3 benefits | **Yes** | Controlá desde cualquier lugar / Enterate antes de que falle / Todo queda registrado |
| Full list of uses + one sentence each | **Yes** | 6 + Plantas completas (§1) |
| Images per use | No | — |
| Cómo funciona: 3 steps + what is installed | **Yes** | Relevamiento / Propuesta / Instalación; installed = sensors + gateway (if needed) |
| Pricing: how it's charged, plans, extras, FAQ, button | **Yes, mostly** | USD 130/month + monthly packs + one-time install + USD 50/h support; 4 FAQ; button → #contacto. **Still missing: the [N] included quotas.** "Permanencia" (minimum contract) and "start with one device" not answered. |
| 2–3 real cases | **Partly** | Only Ferraro; 2 slots are empty |
| 5–6 general FAQ | **Yes** | 8 |
| Contact close + data | **Yes** | Same data; WhatsApp added |
| Button targets (contacto/WhatsApp/demo) | **Yes** | #contacto for all CTAs; WhatsApp in header and contact block; no demo |
| ¿Funciona sin internet? (FAQ example) | **No** | FAQ 8 only says "con conexión a internet" |

**Draft doc "Para confirmar con Guido"**
| Question | Answered? | Answer |
|---|---|---|
| Phone: 6033-5029 (Bombas brochure) vs 2275-5716 | **Yes** | **+54 11 2275-5716** everywhere (also WhatsApp) |
| White label for all applications or only ósmosis | **No** | Not mentioned anywhere on his page |
| Were the 2 remote-monitoring projects done with Sentinel? | **Yes, implicitly** | Ferraro (planta de efluentes) = yes. Tanque con PLC y webserver = not listed, so treat it as no (confirm). |
| PDF export of brochures | No | — |
| Real screenshots per application | No (only the hero electrical panel) | — |
| Brochure typos | N/A | Still our job |
| Pricing (Alejo's request) | **Yes** | See Precios |

---

## 6. Contradictions (Guido vs. brochures / our draft)

1. **Phone:** Bombas brochure +54 11 6033-5029 vs Guido +54 11 2275-5716 → use Guido's.
2. **Application names and grouping:** brochure "Torres y condensadores" vs Guido "Torres de enfriamiento". Brochure "Bombas y tanques" (one) vs Guido "Bombas y estaciones de bombeo" + "Tanques" (two). Guido adds "Energía eléctrica" and "Plantas completas".
3. **Slugs:** ours `torres-y-condensadores`, `bombas-y-tanques` vs his `torres-de-enfriamiento`, `bombas`, `tanques`, `energia`.
4. **Variables per application (different emphasis, not opposites):**
   - Calderas: Guido "presión, temperatura y **estado del quemador**". Brochure "presión, temperatura, **nivel y conductividad**, control de purga". Merge both on the sub-landing.
   - Torres: Guido "temperaturas de entrada y salida, **ventiladores y bombas**". Brochure "purga por conductividad, **nivel de pozo**, limpieza del condensador". Merge.
5. **Ósmosis audience:** brochure = manufacturer/installer with white label. Guido = plant operator (when to clean or change membranes), with no white label anywhere. Our hub card and FAQ claim white label → hold.
6. **Projects:** we listed 2. Guido lists 1 (Ferraro).
7. **Contact block:** we name "Guido Fada · Comercial". Guido removed the name. Address: ours "…Villa Urquiza, CABA" vs his "…Villa Urquiza".
8. **Hero secondary CTA:** ours "Ver aplicaciones" vs his "Ver precios".
9. **Implementation step 3:** ours "capacitación del personal" vs his "sinóptico, alarmas y usuarios". Compatible (his FAQ confirms training), so merge.
10. **Device word:** Guido mixes "celular" (hero, bombas) and "teléfono" (everywhere else). We use "teléfono".
11. **Ferraro naming (existing case page, not Guido):** text says "Ferraro y Asociados", logo alt says "Ferraro Ingeniería del Agua". The case page also says "−90% reducción en visitas técnicas innecesaria" (should be "innecesarias").
12. **Possible price typo to verify (do not change):** SMS pack USD 80 per 100 vs Correos/Alarmas USD 8 per 100. Plausible (SMS cost), but worth a one-line check with Guido.
13. **Placeholders in Guido's page:** `Incluye [N] dispositivos, [N] usuarios, [N] alarmas, [N] correos y [N] SMS` and 2 `[Cliente]` project cards. Must not ship as-is.

No contradictions found on: email (info@qubit.la), address, alarm channels (correo/SMS), IA capabilities, "1 día hábil" response time, PC/tablet/phone, multi-site, user profiles, "sin modificar el proceso".

---

## 7. Copy fixes in Guido's text (meaning preserved)

No "parada", no "rubro" and no invented figures in Guido's text. No missing accents found. The issues are length, consistency and a few colloquialisms.

| # | Where | Original | Proposed | Why |
|---|---|---|---|---|
| 1 | Hero sub (181 chars) | Sentinel se conecta a los PLC y sensores que ya tenés, te muestra el proceso tal como está en planta y te avisa antes de que algo falle. Lo usás desde la PC, la tablet o el celular. | Se conecta a tus PLC y sensores, muestra tu planta tal como es y te avisa antes de que algo falle. (98) | Subtitle ≤ ~105. The device info is already in Qué es, FAQ 8 and the checks. **Option B:** keep the full text as body copy below a short sub. |
| 2 | Hero sub / Bombas card | …el celular. / …desde el celular. | …el teléfono. / …desde el teléfono. | Consistency with the rest of the page ("teléfono"). Neutral vocabulary. |
| 3 | Qué es card H3 | Enterate antes de que falle | Enterate antes de que algo falle | The verb has no subject. |
| 4 | Qué es paragraph | …junta todos los datos en un panel con el layout real de tus equipos… | …reúne todos los datos en un panel con el esquema real de tus equipos… | "reúne" is more neutral. "esquema" avoids an anglicism (optional; "layout" also appears in Precios, so change both or neither). |
| 5 | Tanques card | …aviso antes de que rebalse o se vacíe… | …aviso antes de que se desborde o se vacíe… | "rebalsar" is regional (Río de la Plata). "desbordar" is neutral. Optional. |
| 6 | Cómo funciona H2 (49) | De la primera visita al monitoreo, en tres etapas | De la primera visita al monitoreo (33) | H2 ≤ 48. "tres etapas" is visible in the numbered steps. **Alt:** "Del relevamiento al monitoreo, en tres etapas" (45). |
| 7 | Cómo funciona sub (115) | Sentinel se suma a lo que ya tenés en planta. No hace falta cambiar tus equipos ni modificar el proceso productivo. | Sentinel se suma a lo que ya tenés, sin cambiar tus equipos ni modificar el proceso productivo. (95) | Subtitle ≤ ~105. |
| 8 | Step 2 | Te pasamos un presupuesto detallado… | Te enviamos un presupuesto detallado… | "pasar" is colloquial. Optional. |
| 9 | Precios H2 (51) | Un abono mensual y packs que sumás si los necesitás | Un abono mensual y packs que sumás a medida (43) | H2 ≤ 48. **Alt:** "Un abono mensual, con packs según tu planta" (44). |
| 10 | Pricing FAQ 1 | No. En caso de necesitar instalar gateway o sensores, se cotizan aparte. | No. Si hace falta instalar un gateway o sensores, se cotizan aparte. | Simpler and adds the missing article. |
| 11 | Pricing FAQ 4 | Las horas de capacitación sobre el uso de la plataforma están incluidas. En caso de requerir horas de soporte técnico para realizar modificaciones, se cobran por separado. | La capacitación sobre el uso de la plataforma está incluida. Las horas de soporte técnico para hacer modificaciones se cobran aparte (USD 50 por hora). | Answers directly. The price comes from his own page, not invented. |
| 12 | Project card | Ferraro y Asociados: Monitoreo remoto de planta de efluentes | Ferraro y Asociados: monitoreo remoto de planta de efluentes | Spanish uses lowercase after a colon. |
| 13 | FAQ 2 | Los trabajos de instalación se coordinan con ustedes. | Los trabajos de instalación se coordinan con tu equipo. | The page speaks to "vos" (singular) and this line switches to "ustedes". |
| 14 | FAQ 4 H | ¿Cómo me entero si algo falla? | ¿Cómo me entero de que algo falla? | Optional. The original is accepted colloquially, so keep it if Guido prefers. |
| 15 | Meta description (225) | …Calderas, torres de enfriamiento, bombas, tanques, ósmosis inversa y energía. | Sentinel se conecta a tus PLC y sensores, muestra tu planta en un sinóptico real y te avisa por correo o SMS antes de una falla. (≈130) + optional "Calderas, bombas, ósmosis y más." | Google cuts at about 155 chars. |
| 16 | Precios include line | Incluye [N] dispositivos, [N] usuarios, [N] alarmas, [N] correos y [N] SMS | Pending: ask Guido for the numbers. Hide the line until then. | Never invent figures. |
| 17 | Contact button | Pedir relevamiento técnico | (keep) or "Pedí tu relevamiento técnico" | The infinitive is fine on a submit button. Only change it for consistency with the other CTAs. |

**OK as is (checked):** "Arrancalas o detenelas" (correct voseo, no accent needed) · H1 47 chars · "Lo que más nos preguntan" · FAQ sub (103) · Contacto sub (101) · "Sentinel funcionando en planta".

**Our own text that breaks the "parada" rule (to fix when merging):**
- Hub, Bombas card: "Arranque, parada y ajuste a distancia" → "Arranque, detención y ajuste a distancia" (or use Guido's card text, which already says "arrancalas o detenelas")
- Calderas: "Se actúa cuando la parada o el daño al equipo ya se produjeron" → "…cuando la detención o el daño al equipo ya se produjeron"
- Calderas: "…reduce la frecuencia de paradas de planta…" → "…reduce la frecuencia de detenciones de planta…"
- Calderas: "Desde la misma pantalla se opera el arranque, la parada y los ajustes…" → "…el arranque, la detención y los ajustes…"
- Calderas: "El sistema anticipa las condiciones que fuerzan una parada de la caldera." → "…que obligan a detener la caldera."

---

## 8. Proposed section order for the merged hub (content)

| # | Section | Content source |
|---|---|---|
| 1 | Hero | **Guido**: H1, sub (shortened), CTAs Relevamiento + Ver precios, electrical panel image. Eyebrow "Sentinel" (ours: "Qubit IoT"; pick one). |
| 2 | Quick-facts strip | **Merge**: Guido's 2 checks + our "Compatible con tu equipamiento" + "Multi-sitio" |
| 3 | Qué es Sentinel (#que-es) | **Guido**: paragraph + 3 pillars. **Ours**: the bento screenshot slot (sinóptico) as the visual. |
| 4 | Aplicaciones (#aplicaciones) | **Guido**: 6 apps + Plantas completas, his copy and slugs. **Ours**: one stat line on Calderas/Torres/Ósmosis. |
| 5 | Cuánto cuesta no medir | **Ours** (4 sourced stats). Could also go after IA. |
| 6 | IA aplicada al mantenimiento | **Ours** (section), wording = Guido's FAQ 5 |
| 7 | Cómo funciona: SENT (4 layers) | **Ours**, with "gateway" aligned to Guido. Optional: fold into #8 as "what gets installed". |
| 8 | Cómo funciona: 3 stages (#como-funciona) | **Guido** + "capacitación" from ours |
| 9 | Precios (#precios) | **Guido**, all of it (plan, packs, services, 4 FAQ). [N] quotas pending. |
| 10 | Proyectos (#proyectos) | **Guido**: Ferraro only (+ −90% figure from our case page). Hide empty slots. |
| 11 | Dónde se aplica | **Ours** (10 sector chips). Could also sit right after Aplicaciones. |
| 12 | Preguntas frecuentes (#preguntas) | **Guido** (8). Marca blanca held. |
| 13 | Contacto (#contacto) | **Guido** (no name, WhatsApp, his form label + button) |

**Dropped from ours:** Desafíos Sin/Con (optional, see matrix), Beneficios ×8, duplicate FAQ, tanque-de-efluentes project, white-label claims in the hub, pricing placeholder, "Guido Fada" contact line, "Ver aplicaciones" CTA.

That gives 11 to 13 sections, about the same length as Guido's 8 plus 3 to 5 additions from our side.

---

## 9. Still needed from Guido
1. The `[N]` quotas included in the USD 130 plan.
2. 2 more Sentinel cases (or confirm showing only Ferraro).
3. Confirm the tanque/webserver case was not Sentinel.
4. White label: does it apply, and to which applications? Who is the ósmosis page for: plant or manufacturer?
5. Bombas/Tanques: two pages or one?
6. Energía: any content or screenshots for a sub-landing?
7. Hero image file + screenshots per application.
8. Quick check: SMS pack USD 80 per 100 is correct.
9. Optional: minimum contract (permanencia)? Does Sentinel work offline / during internet outages?
