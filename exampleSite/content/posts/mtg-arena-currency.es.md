---
title: "Shortcodes de moneda de MTG Arena"
date: 2026-05-10T13:30:00+02:00
draft: false
description: "Renderiza gemas, monedas de oro y fichas de draft en línea con notas de MTG Arena."
featured: true
tags: ["mtg", "demo", "shortcodes"]
image: "https://picsum.photos/seed/mtg-arena-currency/1600/900"
imageAlt: "Contadores y monedas de juego colocados sobre una mesa"
aiTranslated: true
---

Tres shortcodes en línea ayudan a registrar recursos de MTG Arena: gemas, monedas de oro y fichas de draft. Cada uno acepta un entero positivo o negativo; los valores negativos se renderizan en rojo.

Gasté {{< gems -1500 >}} para entrar en un Premier Draft, gané {{< coins 800 >}} con la estructura de premios, y terminé con {{< draft-token 1 >}} ficha de draft adicional.

```
Gasté {{</* gems -1500 */>}} para entrar en un Premier Draft, gané {{</* coins 800 */>}} con
la estructura de premios, y terminé con {{</* draft-token 1 */>}} ficha de draft adicional.
```
