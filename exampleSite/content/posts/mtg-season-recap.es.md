---
title: "Shortcode de resumen de temporada de MTG Arena"
date: 2026-05-10T13:20:00+02:00
draft: false
description: "Resume un mes de MTG Arena con rangos, gasto, gemas y fichas de draft."
featured: true
tags: ["mtg", "demo", "shortcodes"]
image: "https://picsum.photos/seed/mtg-season-recap/1600/900"
imageAlt: "Diario mensual de juego con cartas y contadores"
aiTranslated: true
---

El shortcode `season` crea un resumen mensual de temporada con rangos para ambos formatos y un desglose de gemas y fichas de draft: ganadas, compradas, gastadas y balance final. Las filas sin actividad se ocultan automáticamente.

{{< season
  month="Mayo 2026"
  ongoing="true"
  spending="9.99€"
  constructed-start="Plata 4"
  constructed-end="Platino 2"
  limited-start="Oro 3"
  limited-end="Diamante 4"
  gems-start="450"
  gems-earned="1200"
  gems-bought="3000"
  gems-spent="2800"
  tokens-start="2"
  tokens-earned="3"
  tokens-spent="4"
>}}

{{< season
  month="Abril 2026"
  constructed-start="Bronce 2"
  constructed-end="Plata 4"
  limited-start="Bronce 4"
  limited-end="Oro 1"
  gems-start="200"
  gems-earned="600"
  gems-spent="400"
  tokens-start="1"
  tokens-earned="2"
  tokens-spent="2"
>}}

```
{{</* season
  month="Mayo 2026"
  ongoing="true"
  spending="9.99€"
  constructed-start="Plata 4"  constructed-end="Platino 2"
  limited-start="Oro 3"        limited-end="Diamante 4"
  gems-start="450"
  gems-earned="1200"
  gems-bought="3000"
  gems-spent="2800"
  tokens-start="2"
  tokens-earned="3"
  tokens-spent="4"
*/>}}
```
