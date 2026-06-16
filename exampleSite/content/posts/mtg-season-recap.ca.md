---
title: "Shortcode de resum de temporada de MTG Arena"
date: 2026-05-10T13:20:00+02:00
draft: false
description: "Resumeix un mes de MTG Arena amb rangs, despesa, gemmes i fitxes de draft."
featured: true
tags: ["mtg", "demo", "shortcodes"]
image: "https://picsum.photos/seed/mtg-season-recap/1600/900"
imageAlt: "Diari mensual de joc amb cartes i comptadors"
aiTranslated: true
---

El shortcode `season` crea un resum mensual de temporada amb rangs per a tots dos formats i un desglossament de gemmes i fitxes de draft: guanyades, comprades, gastades i balanç final. Les files sense activitat s'amaguen automàticament.

{{< season
  month="Maig 2026"
  ongoing="true"
  spending="9.99€"
  constructed-start="Plata 4"
  constructed-end="Platí 2"
  limited-start="Or 3"
  limited-end="Diamant 4"
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
  constructed-start="Bronze 2"
  constructed-end="Plata 4"
  limited-start="Bronze 4"
  limited-end="Or 1"
  gems-start="200"
  gems-earned="600"
  gems-spent="400"
  tokens-start="1"
  tokens-earned="2"
  tokens-spent="2"
>}}

```
{{</* season
  month="Maig 2026"
  ongoing="true"
  spending="9.99€"
  constructed-start="Plata 4"  constructed-end="Platí 2"
  limited-start="Or 3"         limited-end="Diamant 4"
  gems-start="450"
  gems-earned="1200"
  gems-bought="3000"
  gems-spent="2800"
  tokens-start="2"
  tokens-earned="3"
  tokens-spent="4"
*/>}}
```
