---
title: "Dark mode, quick take"
date: 2026-03-30T09:30:00+02:00
draft: false
description: "How the switch behaves: respect the OS, but remember your last choice."
tags: ["design"]
---

The theme switcher in Leyline follows a simple rule: on the first visit, match the user's OS preference. Once they tap the toggle, lock to their choice via `localStorage`.

This avoids two common annoyances: a site that ignores `prefers-color-scheme`, and a site that resets to its default every time you come back.
