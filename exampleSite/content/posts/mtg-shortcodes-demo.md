---
title: "MTG shortcodes demo"
date: 2026-05-10T12:00:00+02:00
draft: false
description: "A quick tour of the card, cardname, mana, combo, match, draft, mastery, season, and Arena currency shortcodes from the hugo-mtg-shortcodes module."
featured: true
tags: ["mtg", "demo"]
---

This post exercises every shortcode the `hugo-mtg-shortcodes` module ships.

## Inline mana

Hover the symbols below to see the mana font in action: {{< mana "{2}{W}{U}" >}} for a tempo deck, {{< mana "{B}{B}{B}" >}} for ritual decks, {{< mana "{1}{G}" >}} for elf openers.

## A single card

{{< card "Lightning Bolt" >}}

## Inline card name with hover preview

The classic {{< cardname "Brainstorm" >}} sees play in cube, legacy, and pauper alike.

## A combo

Three cards arranged like a fanned hand — hover one and the rest spread aside.

{{< combo "Splinter Twin" "Deceiver Exarch" "Pestermite" >}}

## A tournament match

{{< match round="1" result="2-1" player1="Me" player2="Andrés" deck1="Boros Burn" deck2="UR Murktide" >}}

## A draft summary

{{< draft index="1" set="MKM" colors="{R}{W}" winrate="57" result="4-3" gems="1400" seventeenlands="3eea6d72600948eab9cf91dc09c2088e" >}}

## Set Mastery

Tracks progress through a set's mastery levels. The `pass` parameter flags whether the Mastery Pass was purchased.

{{< mastery ongoing="true" set="MKM" level="68" max="90" pass="true" >}}

{{< mastery set="OTJ" level="34" max="90" pass="false" >}}

```
{{</* mastery ongoing="true" set="MKM" level="68" max="90" pass="true" */>}}
{{</* mastery set="OTJ" level="34" max="90" pass="false" */>}}
```

`max` defaults to `90` if omitted.

## Season recap

Monthly season summary with ranks for both formats and a breakdown of gems and draft tokens — earned, bought, spent, and ending balance. Rows with zero activity are hidden automatically.

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

## Arena currency

Three inline shortcodes for tracking MTG Arena resources — gems, gold coins, and draft tokens. Each accepts a positive or negative integer; negative values render in red.

Spent {{< gems -1500 >}} to enter a Premier Draft, earned {{< coins 800 >}} from the prize structure, and came away with {{< draft-token 1 >}} extra draft token.

```
Spent {{</* gems -1500 */>}} to enter a Premier Draft, earned {{</* coins 800 */>}} from
the prize structure, and came away with {{</* draft-token 1 */>}} extra draft token.
```
