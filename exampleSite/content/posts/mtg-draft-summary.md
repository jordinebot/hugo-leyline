---
title: "MTG draft summary shortcode"
date: 2026-05-10T12:50:00+02:00
draft: false
description: "Show an MTG Arena draft result with set, colors, win rate, record, gems, and a 17Lands link."
featured: true
tags: ["mtg", "demo", "shortcodes"]
image: "https://picsum.photos/seed/mtg-draft-summary/1600/900"
imageAlt: "Draft notes and card piles on a table"
---

The `draft` shortcode turns a single Arena run into a scan-friendly block: set, colors, win rate, record, gem result, and optional external links.

{{< draft index="1" set="MKM" colors="{R}{W}" winrate="57" result="4-3" gems="1400" seventeenlands="3eea6d72600948eab9cf91dc09c2088e" >}}

```
{{</* draft index="1" set="MKM" colors="{R}{W}" winrate="57" result="4-3" gems="1400" seventeenlands="3eea6d72600948eab9cf91dc09c2088e" */>}}
```
