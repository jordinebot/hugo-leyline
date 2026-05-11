+++
title = "The mobile menu morph"
date = 2026-05-04T10:30:00+02:00
draft = false
description = "Three lines, two rotations, one fade — the hamburger-to-X animation in 30 lines of CSS."
featured = true
image = "https://picsum.photos/seed/leyline-mobile-menu/1600/900"
imageAlt = "Close-up of a phone screen with a navigation menu"
tags = ["design", "css", "animation"]
+++

The first version of Leyline's mobile menu had two icons stacked in the button: a hamburger and an X. CSS swapped them based on whether the menu was open. It worked, but it felt like flipping a switch.

The second version is a single SVG with three `<line>` elements. When the menu opens, the top line rotates 45° and translates down to the centre. The bottom mirrors it. The middle line fades out and shrinks. They meet in the middle and form an X.

## Where the geometry lives

The trick is the `transform-origin`. Each line's origin sits at the icon centre (`12px 12px`), so when you translate to the centre first and then rotate, the lines pivot around their new midpoint. The order of the CSS transforms matters — rotate-first or translate-first is the difference between a clean X and an offset cross.

```css
.icon-burger__line--top {
  transform: rotate(45deg) translateY(6px);
}
```

## The timing

280ms with `cubic-bezier(.65, 0, .35, 1)` for the rotation; 180ms for the middle line's fade. The slight stagger reads as confident motion rather than choreographed.
