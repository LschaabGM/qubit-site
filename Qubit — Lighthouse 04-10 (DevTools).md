# Lighthouse del 04/10/2026 (DevTools, Lighthouse 13.4.1)

Corridas de @Lourdes. Mobile = Moto G Power, Slow 4G. Reemplazan a las de PageSpeed Insights del 28/09 en las slides de Performance.

| Sitio | URL medida | Modo | Perf | A11y | BP | SEO | FCP | LCP | TBT | CLS | SI |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Qubit | qubit.la/ | Mobile | 64 | 92 | 100 | 100 | 3,3 s | 4,1 s | 390 ms | 0 | 6,8 s |
| Qubit | qubit.la/ | Desktop | 62 | 92 | 100 | 100 | 1,9 s | 4,5 s | 0 ms | 0,004 | 4,6 s |
| Antares | /soluciones/automatizacion-industrial/ (URL indicada por Guido) | Mobile | 51 | 98 | 81 | 100 | 5,1 s | 12,7 s | 270 ms | 0 | 10,5 s |
| Antares | /soluciones/automatizacion-industrial/ (URL indicada por Guido) | Desktop | 70 | 92 | 96 | 100 | 1,8 s | 3,0 s | 10 ms | 0,016 | 2,8 s |

| Quantia | /servicios/automatizacion-industrial/ (URL indicada por Guido) | Mobile | 79 | 89 | 100 | 100 | 1,6 s | 3,9 s | 170 ms | 0,008 | 6,6 s |
| Quantia | /servicios/automatizacion-industrial/ (URL indicada por Guido) | Desktop | 94 | 94 | 96 | 100 | 0,6 s | 1,0 s | 0 ms | 0 | 2,3 s |

| EXSOL | exsol.com.ar/ (URL indicada por Guido) | Mobile | 87 | 83 | 96 | 92 | 2,2 s | 3,7 s | 70 ms | 0 | 3,0 s |

| EXSOL | exsol.com.ar/ (URL indicada por Guido) | Desktop | 87 | 92 | 96 | 92 | 1,1 s | 1,9 s | 0 ms | 0,077 | 1,5 s |

| Automática | automatica-arg.com.ar/#inicio (URL indicada por Guido) | Mobile | 57 | 97 | 100 | 100 | 3,2 s | 12,7 s | 180 ms | 0 | 11,9 s |
| Automática | automatica-arg.com.ar/#inicio (URL indicada por Guido) | Desktop | 61 | 97 | 96 | 100 | 2,6 s | 4,0 s | 0 ms | 0,001 | 4,1 s |

Las URLs de los competidores son las que indicó Guido; se priorizan sobre la home.

Todas las corridas están completas.

## Notas por sitio (04/10/2026)

- **Qubit:** render-blocking (ahorro 2.180 ms en mobile), imágenes sin width/height, JS sin usar, peso 3.076 KiB (mobile) y 4.078 KiB (desktop). A11y: contraste, enlaces sin nombre y skip link no enfocable.
- **Antares mobile:** render-blocking (2.850 ms), latencia del documento (1.540 ms), caché (1.323 KiB). BP 81 por APIs obsoletas. A11y: orden de encabezados.
- **EXSOL mobile:** fuentes (390 ms), render-blocking (360 ms), CSS sin usar (51 KiB). Casi no tiene peso extra (ahorros de 20 KiB). A11y 83: botones sin nombre accesible, contraste y falta de landmark principal. SEO 92: enlaces no rastreables. BP 96: imágenes de baja resolución.
- **Automática mobile:** LCP de 12,7 s (igual que Antares), Speed Index 11,9 s, peso 10.422 KiB, entrega de imágenes (ahorro de 1.733 KiB), caché (1.020 KiB) y render-blocking (880 ms). A11y 97 (contraste). BP 100.
- **Automática desktop:** el peor peso de los medidos: 10.422 KiB. Entrega de imágenes (ahorro de 3.897 KiB), caché (1.020 KiB) y render-blocking (330 ms). A11y 97 (contraste). BP 96 (imágenes de baja resolución).
- **EXSOL desktop:** fuentes (350 ms), render-blocking (330 ms), peso mínimo (ahorros de 20 a 77 KiB). A11y 92: contraste y falta de landmark principal. SEO 92: enlaces no rastreables. BP 96: imágenes de baja resolución.
- **Quantia mobile:** entrega de imágenes (883 KiB de ahorro), latencia del documento (1.210 ms), fuentes (760 ms), peso 2.868 KiB. A11y 89: contraste, enlaces sin nombre, áreas táctiles y falta de landmark principal.
- **Quantia desktop:** latencia del documento (910 ms), entrega de imágenes (849 KiB), fuentes (660 ms), peso 2.861 KiB. A11y: contraste y enlaces sin nombre. BP 96 por imágenes de baja resolución.
- **Antares desktop:** latencia del documento (770 ms), render-blocking (1.020 ms), caché (1.330 KiB). BP 96 por imágenes de baja resolución. A11y: contraste, tamaño de áreas táctiles y orden de encabezados.
