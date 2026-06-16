---
title: "MTG Arena season recap shortcode"
date: 2026-05-10T13:20:00+02:00
draft: false
description: "Summarize an MTG Arena month with ranks, spending, gems, and draft tokens."
featured: true
tags: ["mtg", "demo", "shortcodes"]
image: "https://picsum.photos/seed/mtg-season-recap/1600/900"
imageAlt: "Monthly game journal with cards and counters"
---

The `season` shortcode creates a monthly season summary with ranks for both formats and a breakdown of gems and draft tokens: earned, bought, spent, and ending balance. Rows with zero activity are hidden automatically.

{{< season
  month="May 2026"
  ongoing="true"
  spending="9.99€"
  constructed-start="Silver 4"
  constructed-end="Platinum 2"
  limited-start="Gold 3"
  limited-end="Diamond 4"
  gems-start="450"
  gems-earned="1200"
  gems-bought="3000"
  gems-spent="2800"
  tokens-start="2"
  tokens-earned="3"
  tokens-spent="4"
>}}

{{< season
  month="April 2026"
  constructed-start="Bronze 2"
  constructed-end="Silver 4"
  limited-start="Bronze 4"
  limited-end="Gold 1"
  gems-start="200"
  gems-earned="600"
  gems-spent="400"
  tokens-start="1"
  tokens-earned="2"
  tokens-spent="2"
>}}

```
{{</* season
  month="May 2026"
  ongoing="true"
  spending="9.99€"
  constructed-start="Silver 4"  constructed-end="Platinum 2"
  limited-start="Gold 3"        limited-end="Diamond 4"
  gems-start="450"
  gems-earned="1200"
  gems-bought="3000"
  gems-spent="2800"
  tokens-start="2"
  tokens-earned="3"
  tokens-spent="4"
*/>}}
```
