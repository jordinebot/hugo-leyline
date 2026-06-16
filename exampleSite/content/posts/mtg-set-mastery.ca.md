---
title: "Shortcode de mestratge de col·lecció de MTG Arena"
date: 2026-05-10T13:10:00+02:00
draft: false
description: "Segueix el progrés de mestratge de MTG Arena en col·leccions actuals i passades."
featured: true
tags: ["mtg", "demo", "shortcodes"]
image: "https://picsum.photos/seed/mtg-set-mastery/1600/900"
imageAlt: "Notes de progrés amb cartes de joc a prop"
aiTranslated: true
---

El shortcode `mastery` segueix el progrés pels nivells de mestratge d'una col·lecció. El paràmetre `pass` indica si es va comprar el Passi de mestratge, i `max` fa servir `90` per defecte si s'omet.

{{< mastery ongoing="true" set="MKM" level="68" max="90" pass="true" >}}

{{< mastery set="OTJ" level="34" max="90" pass="false" >}}

```
{{</* mastery ongoing="true" set="MKM" level="68" max="90" pass="true" */>}}
{{</* mastery set="OTJ" level="34" max="90" pass="false" */>}}
```
