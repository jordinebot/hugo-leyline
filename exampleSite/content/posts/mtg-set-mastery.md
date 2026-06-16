---
title: "MTG Arena set mastery shortcode"
date: 2026-05-10T13:10:00+02:00
draft: false
description: "Track MTG Arena mastery progress for current and past sets."
featured: true
tags: ["mtg", "demo", "shortcodes"]
image: "https://picsum.photos/seed/mtg-set-mastery/1600/900"
imageAlt: "Progress tracker notes with game cards nearby"
---

The `mastery` shortcode tracks progress through a set's mastery levels. The `pass` parameter flags whether the Mastery Pass was purchased, and `max` defaults to `90` if omitted.

{{< mastery ongoing="true" set="MKM" level="68" max="90" pass="true" >}}

{{< mastery set="OTJ" level="34" max="90" pass="false" >}}

```
{{</* mastery ongoing="true" set="MKM" level="68" max="90" pass="true" */>}}
{{</* mastery set="OTJ" level="34" max="90" pass="false" */>}}
```
