---
title: "Gallery shortcode"
date: 2026-05-29T10:00:00+02:00
draft: false
description: "How to add photo galleries to any post — from page bundles or external URLs, with a masonry layout and a built-in lightbox."
tags: ["demo", "gallery"]
---

Leyline ships a `gallery` shortcode that renders photos in a masonry column layout. Clicking any thumbnail opens a fullscreen lightbox with keyboard navigation.

## From a page bundle (recommended)

The cleanest setup is a **leaf bundle**: a directory with an `index.md` and the images alongside it.

```
content/posts/my-post/
  index.md
  photo-01.jpg
  photo-02.jpg
  photo-03.jpg
```

Then in `index.md`:

```
{{</* gallery match="photo-*" */>}}
```

Hugo processes every matched image into optimised WebP — a 600 px-wide thumbnail for the grid and up to 1600 px for the lightbox. Use a consistent prefix (`photo-`, `img-`, etc.) so the glob is predictable, and name files numerically to control display order.

## From explicit URLs or paths

Pass a comma-separated list with the `images` parameter. Each entry is tried as a page resource first; if it isn't found it is used as a URL directly — useful for images hosted elsewhere or served from `static/`.

```
{{</* gallery images="https://example.com/a.jpg, https://example.com/b.jpg" */>}}
```

The three galleries below are all rendered this way.

## Three columns (default)

{{< gallery images="https://picsum.photos/seed/gal-a/800/600, https://picsum.photos/seed/gal-b/600/900, https://picsum.photos/seed/gal-c/900/600, https://picsum.photos/seed/gal-d/600/800, https://picsum.photos/seed/gal-e/800/500, https://picsum.photos/seed/gal-f/500/700" >}}

## Two columns

```
{{</* gallery match="photo-*" cols="2" */>}}
```

{{< gallery images="https://picsum.photos/seed/gal-g/900/600, https://picsum.photos/seed/gal-h/600/900, https://picsum.photos/seed/gal-i/800/600, https://picsum.photos/seed/gal-j/700/900" cols="2" >}}

## Parameters

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| `match`   | —        | —       | Glob pattern matched against page bundle resources (e.g. `"photo-*"`) |
| `images`  | —        | —       | Comma-separated list of filenames or URLs |
| `cols`    | —        | `3`     | Number of masonry columns on wide screens |

One of `match` or `images` must be provided. `match` requires a [leaf bundle](https://gohugo.io/content-management/page-bundles/).

## Lightbox controls

| Action | Result |
|--------|--------|
| Click thumbnail | Open lightbox |
| `←` / `→` arrow keys | Previous / next image |
| `Esc` | Close |
| Click × button | Close |
