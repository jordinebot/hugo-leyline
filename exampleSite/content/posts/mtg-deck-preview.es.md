---
title: "Shortcode de vista previa de mazo MTG"
date: 2026-05-10T13:00:00+02:00
draft: false
description: "Carga un mazo de Magic desde data/decks y renderiza una vista previa enriquecida."
featured: true
tags: ["mtg", "demo", "shortcodes"]
image: "https://picsum.photos/seed/mtg-deck-preview/1600/900"
imageAlt: "Lista de mazo ordenada junto a un montón de cartas enfundadas"
aiTranslated: true
---

Las vistas previas de mazos se cargan desde `data/decks/*.yaml` y se enriquecen con datos de Scryfall durante la compilación. Así las listas largas siguen siendo legibles en Markdown y aun así renderizan un resumen visual útil.

{{< deck id="abzan-midrange" breakdownOpen="true" >}}

```
{{</* deck id="abzan-midrange" breakdownOpen="true" */>}}
```

El mismo shortcode también puede renderizar bases de maná más grandes y mazos llenos de leyendas:

{{< deck id="relic-legends" breakdownOpen="true" >}}

```
{{</* deck id="relic-legends" breakdownOpen="true" */>}}
```
