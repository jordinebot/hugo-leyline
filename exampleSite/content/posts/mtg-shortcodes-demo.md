---
title: "MTG shortcodes demo"
date: 2026-05-10T12:00:00+02:00
draft: false
description: "A quick tour of the card, cardname, mana, combo, match, and draft shortcodes provided by the hugo-mtg-shortcodes module."
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

{{< draft index="1" colors="{R}{W}" date="2026-05-25" winrate="57" result="4-3" >}}
