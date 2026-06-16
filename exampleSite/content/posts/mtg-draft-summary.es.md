---
title: "Shortcode de resumen de draft MTG"
date: 2026-05-10T12:50:00+02:00
draft: false
description: "Muestra un resultado de draft de MTG Arena con colección, colores, porcentaje de victorias, resultado, gemas y enlace a 17Lands."
featured: true
tags: ["mtg", "demo", "shortcodes"]
image: "https://picsum.photos/seed/mtg-draft-summary/1600/900"
imageAlt: "Notas de draft y montones de cartas sobre una mesa"
aiTranslated: true
---

El shortcode `draft` convierte una partida de Arena en un bloque fácil de escanear: colección, colores, porcentaje de victorias, resultado, gemas y enlaces externos opcionales.

{{< draft index="1" set="MKM" colors="{R}{W}" winrate="57" result="4-3" gems="1400" seventeenlands="3eea6d72600948eab9cf91dc09c2088e" >}}

```
{{</* draft index="1" set="MKM" colors="{R}{W}" winrate="57" result="4-3" gems="1400" seventeenlands="3eea6d72600948eab9cf91dc09c2088e" */>}}
```
