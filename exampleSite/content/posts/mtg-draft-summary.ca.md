---
title: "Shortcode de resum de draft MTG"
date: 2026-05-10T12:50:00+02:00
draft: false
description: "Mostra un resultat de draft de MTG Arena amb col·lecció, colors, percentatge de victòries, resultat, gemmes i enllaç a 17Lands."
featured: true
tags: ["mtg", "demo", "shortcodes"]
image: "https://picsum.photos/seed/mtg-draft-summary/1600/900"
imageAlt: "Notes de draft i piles de cartes sobre una taula"
aiTranslated: true
---

El shortcode `draft` converteix una partida d'Arena en un bloc fàcil d'escanejar: col·lecció, colors, percentatge de victòries, resultat, gemmes i enllaços externs opcionals.

{{< draft index="1" set="MKM" colors="{R}{W}" winrate="57" result="4-3" gems="1400" seventeenlands="3eea6d72600948eab9cf91dc09c2088e" >}}

```
{{</* draft index="1" set="MKM" colors="{R}{W}" winrate="57" result="4-3" gems="1400" seventeenlands="3eea6d72600948eab9cf91dc09c2088e" */>}}
```
