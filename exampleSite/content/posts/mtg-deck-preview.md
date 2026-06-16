---
title: "MTG deck preview shortcode"
date: 2026-05-10T13:00:00+02:00
draft: false
description: "Load a Magic deck from data/decks and render an enriched deck preview."
featured: true
tags: ["mtg", "demo", "shortcodes"]
image: "https://picsum.photos/seed/mtg-deck-preview/1600/900"
imageAlt: "Organized decklist beside a stack of sleeved cards"
---

Deck previews are loaded from `data/decks/*.yaml` and enriched with Scryfall data at build time. This keeps long decklists readable in Markdown while still rendering a useful visual summary.

{{< deck id="abzan-midrange" breakdownOpen="true" >}}

```
{{</* deck id="abzan-midrange" breakdownOpen="true" */>}}
```
