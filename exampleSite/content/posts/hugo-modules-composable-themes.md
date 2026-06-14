---
title: "Hugo Modules: composable themes"
date: 2026-04-28T18:00:00+02:00
draft: false
description: "Why Leyline keeps MTG shortcodes outside the theme — and what Hugo Modules buy you when you compose them."
featured: true
image: "https://picsum.photos/seed/leyline-modules/1600/900"
imageAlt: "Stack of modular shipping containers"
tags: ["hugo", "modules", "architecture"]
credit: ["Sana Iqbal"]
creditLink: ["https://example.com/artists/sana-iqbal"]
coverAiModified: true
aiTranslated: true
---

Themes used to be monoliths. You picked one, you got everything it shipped, and any deviation meant forking. Hugo Modules change that: a theme is a Go module, and you can compose modules together the same way you compose Go packages.

Leyline leans on that. The MTG shortcodes — `card`, `cardname`, `combo`, `mana`, `match`, `draft` — don't live inside the theme. They sit in a separate Hugo Module, [`hugo-mtg-shortcodes`](https://github.com/jordinebot/hugo-mtg-shortcodes). Sites that want them add the import; sites that don't, don't. The module ships its own SCSS, partials, JS, and the mana icon font — Hugo merges it all into the consuming site at build time.

Splitting along that seam pays off twice. The theme stays focused on layout and typography, with no MTG concepts in its templates. And the shortcodes can evolve at their own cadence — any improvement (better Scryfall caching, a new layout for double-faced cards, smarter hover-preview positioning) lands in every consuming site without touching the theme.

## The local-dev wrinkle

Hugo's environment-scoped config replaces `[[module.imports]]` rather than appending it. If a development config adds a new module import, it has to declare every import the dev build needs — not just the new one. Hugo merges most things; this isn't one of them. Easy to miss, easy to fix once you've been bitten.
