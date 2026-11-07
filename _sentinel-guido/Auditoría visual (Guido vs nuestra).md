# Sentinel landing: Guido's page vs ours (visual and UX audit)

Scope: layout and visual treatment only. Guido's **content** stays. Method: the critique-screen pass (hierarchy, brand, composition, typography), then a priority call per section.
Screenshots: headless Chrome at 1440 and 390 (390 rendered through a 390px iframe, because headless Chrome won't go below about 500px wide).
All paths below are in `/private/tmp/claude-501/-Users-lschaab-Documents-Proyectos-Qubit/e1efab2f-4e36-4ec4-ac70-bb19014a7328/scratchpad/`.

- Section crops: `shots/guido-*.png`, `shots/ours-*.png`
- Mobile contact sheets: `shots/guido-mobile-sheet.png`, `shots/ours-mobile-sheet.png`
- Full captures: `guido-1440.png`, `ours-1440.png`, `guido-390.png`, `ours-390.png`, `calderas-1440.png`
- **Real assets taken out of Guido's file:** `assets/img1.png` (Sentinel panel, electrical monitoring, 1400×859), `assets/img0.png` (Sentinel panel, pumping station "Estación Elevadora Norte", 1100×649), `assets/img2.png` (Ferraro effluent-plant photo, 1200×1600), `assets/img3.png` (Ferraro logo).

## Key facts before the verdicts

1. **Guido built his page on our own token system.** His `:root` uses the same values as `site/css/styles.css` (same violet scale, Audiowide/Work Sans/Saira, `--space-section`), and the same component names (`.faq-layout`, `.eyebrow`, `.btn--primary`). Restyling his layouts in our system is cheap. The main gap is that he has none of the morph experiment: every corner on his page is square.
2. **His page has real product imagery and ours doesn't.** Ours shows "PLACEHOLDER: captura del panel" in 6 places. His hero has two real panel screenshots (light UI, layered "screens") plus one real project photo. These are the most valuable thing in his file.
3. **Length.** At 1440 his page is about 8,700px over 8 sections. Ours is about 13,300px over 15 blocks. On mobile his is about 11,000px and ours about 16,500px.
4. **The repetition problem (his page).** Three sections use the *same* 3-card component: Qué es, Cómo funciona and Otros servicios (icon tile + title + text, violet top border). The eye stops telling them apart, so the page reads as "three rows of three boxes" and each section loses its own job.
5. **The repetition problem (ours).** "Alarmas por correo o SMS" shows up 4 times: trust strip, compare rows, bento and beneficios. "Multi-sitio" and "Compatible" show up 3 times each. That is where the length comes from.

## Per-section verdicts

| # | Section | Verdict | Why (what the visitor experiences) |
|---|---|---|---|
| 1 | Hero | **Guido's** layout | Real panel screenshots prove "this is a real product" in the first second. Ours shows a gradient placeholder. |
| 2 | Qué es | **Hybrid** (his text in our bento) | His 3 generic cards say nothing visual. Our bento "una sola pantalla" makes the same promise with a big screen, and his second screenshot can fill it. |
| 3 | Aplicaciones | **Guido's** grid, improved assets | 7 illustrated cards you can scan in one screen. Our 4 alternating rows are long and show placeholders. |
| 4 | Cómo funciona | **Hybrid**: S·E·N·T becomes "how it works", his 3 stages become a compact "how we start" | His section answers the *process*, not the *technology*. S·E·N·T shows the data flow and echoes the logo. |
| 5 | Precios | **Guido's** plan and packs, restyled | Clear price anchor (USD 130) and a scannable pack table. Ours is a placeholder. |
| 5b | Otros servicios + pricing mini-FAQ | **Redesign** (fold into the price sheet) | Wrong component and a broken rhythm. See the diagnosis below. |
| 6 | Proyectos | **Guido's** photo tile, but only real items | A real photo beats our text list. Two fake "[Cliente]" tiles hurt trust, so show one featured tile. |
| 7 | FAQ | **Hybrid** (his questions + a sticky contact card + groups) | Both versions have the same empty-left-column problem. See below. |
| 8 | Contacto | **Ours** (violet band + Guido's person card) | A strong ending and a human face. Keep his form copy ("¿Qué equipos querés monitorear?") and his WhatsApp line. |

### 1. Hero: Guido's
- Keep his structure: eyebrow, Audiowide H1, lead, primary CTA + "Ver precios" link, two check facts, and two layered real screenshots on the right.
- Restyle: give the front screenshot the morph **signature top-right corner** (it is a featured block). Keep the back screen square, and keep the small violet square accent.
- Watch: his H1 is a 4-line Audiowide sentence at 1440. Audiowide is a display face, so long lines slow reading. Keep his text but cap the measure (about 14ch per line), or move "Sentinel" into the H1 as a short line with his sentence below. Both keep his content.
- Drop our 4-item trust strip. Two of its items repeat his hero facts, and the other two repeat Qué es.
- Note: his screenshots are light UI on a dark page. That is fine as "product inside a device", but frame them in a 1px `--color-border` with a dark shadow so they don't glare. In headless captures the front image sometimes paints white before it decodes. That is a capture artefact, not a bug.

### 2. Qué es: hybrid
- **Why his feels weak:** a left title + right paragraph split, then 3 equal cards. Nothing on screen *shows* "todo tu proceso en una sola pantalla". The cards are the same component as Cómo funciona and Otros servicios, so they read as filler.
- **Target layout:** keep his intro row (eyebrow + H2 "Todo tu proceso en una sola pantalla" on the left, his paragraph on the right). Below it, our bento: one **large featured tile** (about 7/12 columns) holding the real pumping-station screenshot (`img0`) with the signature corner, and his **3 points stacked** to the right as lighter rows (icon + title + text, no boxes or hairline separators). Optionally pin 2 or 3 small annotation chips on the screenshot (Saira values such as "72,4 %", "2/3 bombas") so the claim and the picture connect.
- Our bento's extra items (control remoto, sinóptico, multi-sitio, compatible) are already covered by his FAQ and pricing checklist. Drop them here.

### 3. Aplicaciones: Guido's (Luly liked it)
- The grid (3 + 3 + 1 wide "Plantas completas") is compact, every card links to a vertical page, and the line illustrations have their own style. Keep it.
- **Better asset treatment:**
  - Put every drawing on one shared baseline and scale. Right now the tank fills its frame, while the osmosis and energy drawings float smaller.
  - Put the violet value callout in the **same corner** on every card (top-right) and set the value in **Saira**.
  - Use one stroke weight.
  - On hover, light up the violet parts of the drawing (fill or animated flow on the dashed lines), with `prefers-reduced-motion` respected.
  - Optionally add the morph detail: small callouts get round corners, the cards stay square.
- Optional: fold our "cost of not measuring" numbers into the matching cards as a one-line stat (calderas 2%, torres 12%, ósmosis 15–40%). See section 4b.

### 4. Cómo funciona: hybrid (yes, S·E·N·T should become it)
- **Why his can be improved:** it's a 3-card row identical to Qué es. "Cómo funciona" makes a visitor expect "how does the system work / will it touch my PLC?", but he answers "what's the sales process". Good content under the wrong label.
- **Target:**
  1. **"Cómo funciona" = S·E·N·T** (Sensorización → Edge → Nube → Toma de decisiones). Make the letter tiles about 40% smaller (they're about 260px now and dominate the content), and join them with a dashed flow line or arrows so the visitor reads *data moving left to right*. Keep the square-to-circle morph (logo echo). Use his reassurance line "Sentinel se suma a lo que ya tenés en planta. No hace falta cambiar tus equipos ni modificar el proceso productivo" as the section lead. It answers the #1 FAQ visually.
  2. **His "De la primera visita al monitoreo, en tres etapas"** moves just before pricing, as a slim timeline: our dashed line with numbered **circles** (the morph rule: small things are round), with his three titles and texts. It becomes the bridge to "and this is what it costs".
- With this, his 3 steps and our implementation steps collapse into one block.

### 5. Precios: Guido's
- Keep the 2-column layout: violet plan card on the left (USD 130 in Saira, checklist, inverse CTA) and the pack table on the right.
- Restyle: the plan card gets the signature corner. Pack prices stay Saira in violet 40%.
- The yellow `[N] dispositivos…` mark is a content gap to close before launch.

### 5b. Diagnosis: why "Otros servicios" looks weird
1. **No section boundary, wrong level.** A 22px H3 sits 48–56px under the pricing cards, with no eyebrow and no divider. It reads like a footnote but is styled like a feature row, so its status is unclear.
2. **Wrong component.** The cards use the feature-card pattern (icon, title, description) for what is really **price information**. The eye looks for a price in the same slot on each card. Only "Soporte técnico" has one (USD 50). The other two give a sentence, so the row looks broken and ragged.
3. **A different variant of the same card.** The icons here are small and unboxed, with no violet top border. The same card elsewhere on the page has boxed icons and a top border. It looks like a mistake, not a choice.
4. **Stacked components with no grouping.** Under it comes "Pedí tu cotización" (H3), then a button with the *same words*, a mostly empty left column, and a second accordion on the right. In one section the visitor meets plan card, pack table, feature cards, a heading + button, and an accordion. That's 5 patterns. The pricing section grows to about 1,700px.
5. **Déjà vu.** That accordion is the same component as the main FAQ about 1.5 screens later, so the main FAQ feels repeated.

**Fix:** turn "Otros servicios" into a **second short table under the packs**, using the exact `pack-list` row style. Label it "Costos únicos y servicios". Three rows, with the value column right-aligned: Gateway y sensores → "Según relevamiento" · Instalación y puesta en marcha → "Pago único" · Soporte técnico → "USD 50/h". Now everything about money reads as one price sheet. Move the 4 pricing questions into the main FAQ as a "Precios" group. Drop the duplicate "Pedí tu cotización" heading and button, since the plan card CTA already does that job.

### 6. Proyectos: Guido's tile, honest count
- His photo tile (Ferraro photo, violet fade, logo, result line, arrow) is much stronger than our text list.
- But 2 of 3 tiles are "[Cliente]: [título…]" placeholders. If only Ferraro is confirmed, show **one wide featured tile** (photo on the left about 60%, text on the right) plus the "Explorá todos los proyectos" button. A grid with fake tiles looks unfinished. Our page flags the same open question ("CONFIRMAR con Guido").

### 7. Diagnosis: why the FAQ looks weird (his and ours)
1. **A dead left column.** The grid is `.8fr / 1.2fr`. The left side holds a title and 2 lines, then about 350–400px of empty black while the accordion runs down the right. At 1440 the section looks lopsided and unfinished.
2. **A monotone wall.** 8 closed rows, all 18px semibold white with an identical "+". No row stands out and no answer is visible, so it reads as a list of rules, not help.
3. **A promise with no action.** The intro says "Escribinos por WhatsApp o desde el formulario", but there's no WhatsApp button or link. It's a dead end.
4. **Seen it already.** The same accordion appeared inside pricing just before.
5. Ours has the same structure, with a smaller summary size (about 15px) and a tiny "+", so the rows look even weaker.

**Fix (hybrid):** keep his 8 questions and add the 4 pricing questions.
- **Left column, sticky:** the title, his line, and a **contact card**: Guido's photo card (from our contact section) + WhatsApp button + "Te respondemos dentro de 1 día hábil". The empty space becomes the most useful element on screen.
- **Right column:** questions in 2–3 small labelled groups (eyebrow style): "Instalación" (PLC/sensores, proceso productivo, dispositivos), "Uso y alarmas" (operar, fallas, IA, varias plantas, quién entra), "Precios" (the 4 from pricing).
- **Open the first question by default**, so the visitor sees what an answer looks like.
- On mobile the card drops below the list.

### 8. Contacto: ours
- Our violet band with Guido's person card makes the end of the page feel warm and final. Use his field label "¿Qué equipos querés monitorear?" (more specific than ours) and his WhatsApp contact line, and keep his CTA text "Pedir relevamiento técnico" (it matches the hero CTA).

## Our extra sections: keep or cut?

| Ours | Verdict | Reason |
|---|---|---|
| Trust strip (4 icons under hero) | **Cut** | It repeats the hero facts and Qué es. |
| Sin / Con Sentinel compare rows | **Cut on the hub, keep on vertical pages** | Good problem framing, but about 650px and it overlaps Qué es. The calderas template already uses it well ("Los desafíos de la sala de calderas"). |
| Bento "Funcionalidades…" | **Merge into Qué es** | Same promise as his "una sola pantalla". |
| IA block | **Keep** (compact) | A real differentiator, and his FAQ already asks "¿Qué hace la IA?". It's the one violet feature panel, so it has the signature corner. |
| S·E·N·T | **Keep, as "Cómo funciona"** | Memorable, ties to the logo, explains the tech. Shrink the tiles. |
| Cost-of-not-measuring stats band | **Keep** (one band) or fold into app cards | Big Saira numbers with sources: the strongest "why buy" proof on the page, at about 530px. |
| Beneficios (8 cards) | **Cut** | It's the 4th repetition of the same features. |
| Industries chips | **Cut on the hub** (or one inline line under Aplicaciones) | Low information. Pills look clickable but aren't (a false affordance). |
| Implementation steps | **Replace with Guido's 3 stages** (same content) | One process block, not two. |

## Recommended final order (11 blocks, about 9,500–10,000px at 1440)

1. **Hero**: Guido's, real screenshots, signature corner on the front screen
2. **Qué es**: his intro + bento with the real pumping-station screenshot + his 3 points
3. **Aplicaciones**: his 7+1 illustrated grid, refined assets
4. **Cuánto cuesta no medir**: our stats band (violet)
5. **IA aplicada al mantenimiento**: our block, compact
6. **Cómo funciona**: S·E·N·T flow, smaller tiles, his "sin cambiar tus equipos" lead
7. **De la primera visita al monitoreo**: his 3 stages as a slim circle timeline
8. **Precios**: his plan + packs + "Costos únicos y servicios" table
9. **Proyectos**: one featured real tile + "Explorá todos"
10. **Preguntas**: grouped, sticky contact card, first one open
11. **Contacto**: our violet band + his form copy

Rhythm check: dark → dark → alt → **violet** → dark (violet panel) → alt → dark → alt → dark → alt → **violet**. That's two full violet bands, used as pacing, plus the violet IA panel.

## Accessibility (WCAG AA)

**Guido's page**
- Good: native `<details>` FAQ, decorative SVGs marked `aria-hidden`, a descriptive alt on the main screenshot, `prefers-reduced-motion` respected, input borders at #6d6d6d (3.9:1), violet text #a385ff (6.6:1).
- Step numbers: white on #8753ff = **4.46:1**. That only passes as large text. Use #772ff6 (5.96:1), or black text as ours does.
- The FAQ intro mentions WhatsApp with no link (a dead end for everyone, and a missing control for keyboard users).
- "Pedí tu cotización" heading followed by a button with the same text: screen readers announce it twice.
- Yellow `<mark>` placeholders (pricing, projects) must not ship.
- Cards are held together only by a #3d3d3d border on #111 (1.74:1). That's not a failure (decorative), but low-vision users lose the grouping. The fix: keep spacing doing the grouping work.

**Our page**
- 6 visible "PLACEHOLDER" boxes, and projects marked "CONFIRMAR".
- Industry chips look like buttons but aren't interactive.
- FAQ summaries are small (about 15px) with a small "+". Keep the summary text at 18px, as Guido has it.
- `sentinel-morph.css` has no animation, so it needs no reduced-motion rule. Any future hover morph or flow-line animation must add one.
- Stats band source text: #c1b1ff on #5718bd = 4.84:1, a pass but close. Don't make it smaller or lighter.
- Violet card "Con Sentinel" text #dbd4ff on #49169c = 7.9:1, fine.

## Mobile (390) notes
- Guido: the hero screenshot drops below the facts at a small size. Consider a tighter crop of the panel (only the KPI row and the chart) on mobile so the numbers stay readable. His 7 app cards stack to about 3,000px, so on mobile drop the illustration height to about 160px or use a horizontal scroll-snap row.
- Ours: the compare rows stack to 10 boxes with arrows (about 1,800px). That's another reason to cut them on the hub. The S·E·N·T mobile version (letter left, text right) works well, so keep that pattern.
