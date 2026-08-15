---
title: "Shortcode de valoraciones de tier en línea de MTG"
date: 2026-05-10T13:50:00+02:00
draft: false
description: "Renderiza valoraciones de tier compactas y codificadas por colores en textos sobre Magic."
featured: true
tags: ["mtg", "demo", "shortcodes"]
image: "https://picsum.photos/seed/mtg-tier-shortcode/1600/900"
imageAlt: "Etiquetas de colores ordenadas por nivel junto a cartas coleccionables"
aiTranslated: true
---

El shortcode `tier` añade valoraciones compactas y codificadas por colores dentro del texto. Puedes usar un valor posicional como {{< tier "S" >}} o el parámetro con nombre {{< tier value="B-" >}}.

Todas las valoraciones admitidas: {{< tier "S" >}} {{< tier "A+" >}} {{< tier "A" >}} {{< tier "A-" >}} {{< tier "B+" >}} {{< tier "B" >}} {{< tier "B-" >}} {{< tier "C+" >}} {{< tier "C" >}} {{< tier "C-" >}} {{< tier "D+" >}} {{< tier "D" >}} {{< tier "D-" >}} {{< tier "F" >}} {{< tier "?" >}}.

```
{{</* tier "S" */>}}
{{</* tier value="B-" */>}}
```

Los modificadores `+` y `-` aparecen como superíndices. Puedes adaptar los colores con `--mtg-tier-s`, `--mtg-tier-a`, `--mtg-tier-b`, `--mtg-tier-c`, `--mtg-tier-d`, `--mtg-tier-f` y `--mtg-tier-unknown`.
