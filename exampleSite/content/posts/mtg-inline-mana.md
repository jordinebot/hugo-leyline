---
title: "MTG inline mana shortcode"
date: 2026-05-10T12:00:00+02:00
draft: false
description: "A focused look at rendering Magic mana symbols inline with hugo-mtg-shortcodes."
featured: true
tags: ["mtg", "demo", "shortcodes"]
image: "https://picsum.photos/seed/mtg-inline-mana/1600/900"
imageAlt: "Close-up of colorful game tokens on a tabletop"
---

The `mana` shortcode renders Magic mana costs inline with surrounding prose, so deck techs and draft notes can talk about costs without reaching for images.

Hover the symbols below to see the mana font in action: {{< mana "{2}{W}{U}" >}} for a tempo deck, {{< mana "{B}{B}{B}" >}} for ritual decks, {{< mana "{1}{G}" >}} for elf openers.

```
{{</* mana "{2}{W}{U}" */>}}
{{</* mana "{B}{B}{B}" */>}}
{{</* mana "{1}{G}" */>}}
```
