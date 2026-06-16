---
title: "Shortcode de maestría de colección de MTG Arena"
date: 2026-05-10T13:10:00+02:00
draft: false
description: "Sigue el progreso de maestría de MTG Arena en colecciones actuales y pasadas."
featured: true
tags: ["mtg", "demo", "shortcodes"]
image: "https://picsum.photos/seed/mtg-set-mastery/1600/900"
imageAlt: "Notas de progreso con cartas de juego cerca"
aiTranslated: true
---

El shortcode `mastery` sigue el progreso por los niveles de maestría de una colección. El parámetro `pass` indica si se compró el Pase de maestría, y `max` usa `90` por defecto si se omite.

{{< mastery ongoing="true" set="MKM" level="68" max="90" pass="true" >}}

{{< mastery set="OTJ" level="34" max="90" pass="false" >}}

```
{{</* mastery ongoing="true" set="MKM" level="68" max="90" pass="true" */>}}
{{</* mastery set="OTJ" level="34" max="90" pass="false" */>}}
```
