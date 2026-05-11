+++
title = "Notes on typography"
date = 2026-04-22T18:00:00+02:00
draft = false
description = "Why Inter, why a tight letter-spacing on headings, and why the body sits at 16px."
tags = ["design", "typography"]
# Drop a `cover.jpg` (or .png / .webp / .avif) next to this index.md and
# Leyline will pick it up automatically — no `image` field needed. The
# theme generates a responsive WebP srcset from the bundled file. Until
# then this post falls back to a placeholder via `image`.
image = "https://picsum.photos/seed/leyline-typography/1600/900"
imageAlt = "Stack of books, shallow depth of field"
+++

A few short notes on the type choices in this theme.

## One family, three weights

Leyline ships with Inter at weights 400, 500, and 700. That's enough to support body text, UI accents, and headings without pulling in a second family.

## Letter-spacing

Headings use a slight negative letter-spacing (`-0.015em`) to tighten the look at large sizes. Below ~1.25rem the effect is barely noticeable; above it, copy feels less airy.

## Reading width

Prose containers cap at 720px — about 70 characters per line at the default size. Wider feels like a wiki; narrower feels like a Twitter thread.
