---
title: "Shortcode de qualificacions de tier en línia de MTG"
date: 2026-05-10T13:50:00+02:00
draft: false
description: "Renderitza qualificacions de tier compactes i codificades per colors en textos sobre Magic."
featured: true
tags: ["mtg", "demo", "shortcodes"]
image: "https://picsum.photos/seed/mtg-tier-shortcode/1600/900"
imageAlt: "Etiquetes de colors ordenades per nivell al costat de cartes col·leccionables"
aiTranslated: true
---

El shortcode `tier` afegeix qualificacions compactes i codificades per colors dins del text. Pots fer servir un valor posicional com {{< tier "S" >}} o el paràmetre amb nom {{< tier value="B-" >}}.

Totes les qualificacions admeses: {{< tier "S" >}} {{< tier "A+" >}} {{< tier "A" >}} {{< tier "A-" >}} {{< tier "B+" >}} {{< tier "B" >}} {{< tier "B-" >}} {{< tier "C+" >}} {{< tier "C" >}} {{< tier "C-" >}} {{< tier "D+" >}} {{< tier "D" >}} {{< tier "D-" >}} {{< tier "F" >}} {{< tier "?" >}}.

```
{{</* tier "S" */>}}
{{</* tier value="B-" */>}}
```

Els modificadors `+` i `-` apareixen com a superíndexs. Pots adaptar els colors amb `--mtg-tier-s`, `--mtg-tier-a`, `--mtg-tier-b`, `--mtg-tier-c`, `--mtg-tier-d`, `--mtg-tier-f` i `--mtg-tier-unknown`.
