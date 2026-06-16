---
title: "Shortcode de manà en línia de MTG"
date: 2026-05-10T12:00:00+02:00
draft: false
description: "Una mirada concreta a com renderitzar símbols de manà de Magic en línia amb hugo-mtg-shortcodes."
featured: true
tags: ["mtg", "demo", "shortcodes"]
image: "https://picsum.photos/seed/mtg-inline-mana/1600/900"
imageAlt: "Primer pla de fitxes de joc acolorides sobre una taula"
aiTranslated: true
---

El shortcode `mana` renderitza costos de manà de Magic dins del text, perquè les guies de baralles i les notes de draft puguin parlar de costos sense fer servir imatges.

Passa el cursor pels símbols de sota per veure la font de manà en acció: {{< mana "{2}{W}{U}" >}} per a una baralla tempo, {{< mana "{B}{B}{B}" >}} per a baralles de rituals, {{< mana "{1}{G}" >}} per a sortides amb elfs.

```
{{</* mana "{2}{W}{U}" */>}}
{{</* mana "{B}{B}{B}" */>}}
{{</* mana "{1}{G}" */>}}
```
