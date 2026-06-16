---
title: "Shortcode de maná en línea de MTG"
date: 2026-05-10T12:00:00+02:00
draft: false
description: "Un vistazo concreto a cómo renderizar símbolos de maná de Magic en línea con hugo-mtg-shortcodes."
featured: true
tags: ["mtg", "demo", "shortcodes"]
image: "https://picsum.photos/seed/mtg-inline-mana/1600/900"
imageAlt: "Primer plano de fichas de juego coloridas sobre una mesa"
aiTranslated: true
---

El shortcode `mana` renderiza costes de maná de Magic dentro del texto, para que las guías de mazos y las notas de draft puedan hablar de costes sin recurrir a imágenes.

Pasa el cursor por los símbolos siguientes para ver la fuente de maná en acción: {{< mana "{2}{W}{U}" >}} para un mazo tempo, {{< mana "{B}{B}{B}" >}} para mazos de rituales, {{< mana "{1}{G}" >}} para salidas con elfos.

```
{{</* mana "{2}{W}{U}" */>}}
{{</* mana "{B}{B}{B}" */>}}
{{</* mana "{1}{G}" */>}}
```
