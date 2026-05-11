+++
title = "color-mix() is here. Use it."
date = 2026-04-15T09:00:00+02:00
draft = false
description = "How Leyline keeps its accent-tinted hover states without committing to specific hex values."
featured = true
image = "https://picsum.photos/seed/leyline-color-mix/1600/900"
imageAlt = "Tubes of paint blended on a palette"
tags = ["css", "design"]
+++

For years, "a lighter version of the accent colour" meant baking in a second hex value. Now there's `color-mix()`.

Leyline's tag chips use this pattern: on hover, the background fills with the accent at 10% over the page background, the border picks up 35% accent, and the text becomes the full accent. None of it requires defining `--accent-light` or `--accent-soft` — the theme just mixes on demand.

```css
.tag:hover {
  background:    color-mix(in srgb, var(--accent) 10%, var(--bg));
  border-color:  color-mix(in srgb, var(--accent) 35%, var(--border));
  color:         var(--accent);
}
```

Any change to `--accent` cascades correctly through every state. Set the accent to coral and the tag-chip hover becomes a coral wash. No find-and-replace; no extra variables to define.

Browser support is solid as of 2024 — Chrome 111, Safari 16.4, Firefox 113. If you're shipping a theme today, you can use it.

The one catch: libsass (the older Sass transpiler Hugo ships with by default) doesn't always parse modern CSS color syntax cleanly. The `color-mix` function passes through fine because Sass treats unknown functions as CSS literals, but newer notations like `rgb(0 0 0 / 12%)` will trip it up. When in doubt, prefer the comma-separated form: `rgba(0, 0, 0, 0.12)`.
