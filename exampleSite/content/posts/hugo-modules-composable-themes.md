---
title: "Hugo Modules: composable themes"
date: 2026-04-28T18:00:00+02:00
draft: false
description: "How Leyline shares the MTG shortcodes module with Manaforge — one source of truth, two consumers."
featured: true
image: "https://picsum.photos/seed/leyline-modules/1600/900"
imageAlt: "Stack of modular shipping containers"
tags: ["hugo", "modules", "architecture"]
---

Themes used to be monoliths. You picked one, you got everything it shipped, and any deviation meant forking. Hugo Modules change that: a theme is a Go module, and you can compose modules together the same way you compose Go packages.

Leyline is one theme. The MTG shortcodes — `card`, `cardname`, `combo`, `mana`, `match` — live in a separate module, `hugo-mtg-shortcodes`. A sibling theme (Manaforge) consumes the same module. Both get the same shortcodes; updating the module updates both themes at the same time.

The pattern is straightforward: each theme declares the module as a dependency in its `hugo.toml`, and the module ships shortcodes, partials, SCSS, static assets, and JS that get merged into the consuming site at build time.

## The local-dev wrinkle

Hugo's environment-scoped config replaces `[[module.imports]]` rather than appending it. If a development config adds a new module import, it has to declare every import the dev build needs — not just the new one. Hugo merges most things; this isn't one of them. Easy to miss, easy to fix once you've been bitten.
