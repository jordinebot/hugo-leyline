---
title: "Shortcode de previsualització de baralla MTG"
date: 2026-05-10T13:00:00+02:00
draft: false
description: "Carrega una baralla de Magic des de data/decks i renderitza una previsualització enriquida."
featured: true
tags: ["mtg", "demo", "shortcodes"]
image: "https://picsum.photos/seed/mtg-deck-preview/1600/900"
imageAlt: "Llista de baralla ordenada al costat d'una pila de cartes enfundades"
aiTranslated: true
---

Les previsualitzacions de baralles es carreguen des de `data/decks/*.yaml` i s'enriqueixen amb dades de Scryfall durant la compilació. Així les llistes llargues continuen sent llegibles en Markdown i alhora renderitzen un resum visual útil.

{{< deck id="abzan-midrange" breakdownOpen="true" >}}

```
{{</* deck id="abzan-midrange" breakdownOpen="true" */>}}
```

El mateix shortcode també pot renderitzar bases de manà més grans i baralles plenes de llegendes:

{{< deck id="relic-legends" breakdownOpen="true" >}}

```
{{</* deck id="relic-legends" breakdownOpen="true" */>}}
```
