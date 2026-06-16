---
title: "MTG Arena currency shortcodes"
date: 2026-05-10T13:30:00+02:00
draft: false
description: "Render gems, gold coins, and draft tokens inline with MTG Arena notes."
featured: true
tags: ["mtg", "demo", "shortcodes"]
image: "https://picsum.photos/seed/mtg-arena-currency/1600/900"
imageAlt: "Game counters and coins arranged on a tabletop"
---

Three inline shortcodes help track MTG Arena resources: gems, gold coins, and draft tokens. Each accepts a positive or negative integer; negative values render in red.

Spent {{< gems -1500 >}} to enter a Premier Draft, earned {{< coins 800 >}} from the prize structure, and came away with {{< draft-token 1 >}} extra draft token.

```
Spent {{</* gems -1500 */>}} to enter a Premier Draft, earned {{</* coins 800 */>}} from
the prize structure, and came away with {{</* draft-token 1 */>}} extra draft token.
```
