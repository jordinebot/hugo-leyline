---
title: "MTG inline tier rating shortcode"
date: 2026-05-10T13:50:00+02:00
draft: false
description: "Render compact, colour-coded tier ratings inline with Magic commentary."
featured: true
tags: ["mtg", "demo", "shortcodes"]
image: "https://picsum.photos/seed/mtg-tier-shortcode/1600/900"
imageAlt: "Coloured tier labels arranged beside trading cards"
---

The `tier` shortcode adds compact, colour-coded ratings inside regular prose. Use a positional value such as {{< tier "S" >}} or the named form {{< tier value="B-" >}}.

Every supported rating: {{< tier "S" >}} {{< tier "A+" >}} {{< tier "A" >}} {{< tier "A-" >}} {{< tier "B+" >}} {{< tier "B" >}} {{< tier "B-" >}} {{< tier "C+" >}} {{< tier "C" >}} {{< tier "C-" >}} {{< tier "D+" >}} {{< tier "D" >}} {{< tier "D-" >}} {{< tier "F" >}} {{< tier "?" >}}.

```
{{</* tier "S" */>}}
{{</* tier value="B-" */>}}
```

The `+` and `-` modifiers appear as superscripts. Colours can be adapted with `--mtg-tier-s`, `--mtg-tier-a`, `--mtg-tier-b`, `--mtg-tier-c`, `--mtg-tier-d`, `--mtg-tier-f`, and `--mtg-tier-unknown`.
