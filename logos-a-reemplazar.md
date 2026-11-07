# Qubit — logos to find or replace

Measured 2026-10-27. "Soft on retina" means the visible logo is less than 2x the size it is shown at.

## What to ask for
- SVG if possible. Otherwise PNG at least 3x the display size (about 300 px tall).
- Transparent background, cropped tight (no empty margin).
- A white or light version for the dark background.

## 1. Replace first (blurry or hard to read)
| File | Used in | Problem |
|---|---|---|
| group-10.png (WinCC) | 6 projects | Low contrast on dark, soft on retina. Needs a white/light version. |
| frame-163.png | 11 projects | Empty alt text, unclear what it is (supplier or mistake?). Gray, weak on dark. |
| frame-124.png | 1 project | Blurry even on a normal screen. |
| frame-127.png | 1 project | Blurry even on a normal screen. |
| logo-campari.png (client) | 1 project | Blurry. Visible logo about 155x33 px. |
| frame-179-1.png (client) | 1 project | Blurry. Visible logo about 139x33 px. |
| frame-174.png (client) | 1 project | Blurry. |
| frame-177-1.png (client) | 1 project | Blurry. |

## 2. Replace soon (sharp normally, soft on retina)
- frame-131.png (9 projects), frame-130-1.png (8 projects) — most reused, biggest payoff.
- frame-121.png (7 projects), frame-123.png, frame-125.png
- lappkabel-vector-logo.png (5 projects), marlew-vector-logo-2.png
- siemens-s7 / siemens-sinamics / siemens-sirius -vector-logo.png (246x246 files, large empty margins, logo about 63 px tall)
- landes-blanco.png, frame-180-1.png (clients)

## 3. Wrong or confusing usage
- Siemens LOGO!: logo-siemens.webp and logo-siemens-1.webp look almost identical. Keep both?
- Schneider Electric appears under both Software and Hardware on one project.
- frame-304.svg (TIA V17): vector, fine. Just confirm name/version.

## 4. Fine, optional cleanup
- aws.png, html.png, javascript.png, teltonika.webp, schneider-electric.png: high resolution but large files shown tiny. Lighter cropped versions would load faster.
- SVGs (dopsoft, ispsoft, g20, logo-biomas), zoloda, profibus, profinet, vetanco, logo-tuteur-blanco-2.png: fine.

When new files arrive: drop them in site/img/ with the same names, then remove the CSS crop workaround (object-view-box / --lh) for each one.
