# Leyline

A clean, modern Hugo theme designed for writing — sticky header, light + dark modes, and a quiet home page that stays out of the way.

**Live demo:** [jordinebot.github.io/hugo-leyline](https://jordinebot.github.io/hugo-leyline/) (built from `exampleSite/`).

> **Note:** Leyline has been 100% vibe-coded — built iteratively through conversation with an AI assistant rather than from a formal spec or design doc. It builds, the demos render — but expect rough edges, incomplete corners, and choices that haven't been stress-tested. Bug reports and PRs are welcome.

## Features

- **Sticky header** with logo (image or site-title text), main menu, a search button (Cmd/Ctrl+K), and a 2-state light/dark toggle that respects `prefers-color-scheme` until the user overrides
- **Client-side search** powered by [Pagefind](https://pagefind.app/) — a modal overlay with debounced search-as-you-type, arrow-key navigation, snippet highlighting, and lazy-loaded JS (only fetched on first open)
- **Mobile menu** that drops down from under the header with an animated hamburger → X morph
- **No-flash theme bootstrap** — an inline `<head>` script sets `[data-theme]` before first paint, so dark-mode visitors don't see a white flash
- **Featured posts grid** on the home page (cards with optional 16:9 cover images), driven by a `featured: true` front-matter flag; falls back to "latest posts" when nothing is flagged
- **Latest posts list** rendered below Featured (excludes duplicates), styled like the `/posts/` index
- **Cover images** via two paths: drop `cover.jpg` (or `.png` / `.webp` / `.avif`) into a page bundle and Leyline generates a responsive WebP srcset; or set `image = "/path/to/img.jpg"` in front matter for plain `.md` posts
- **Tag chip** styling shared between post footers and the `/tags/` index — pill background, accent-tinted hover via `color-mix()`, optional count badge
- **`/tags/` index** sorted by post count (descending, alphabetical tiebreak) with a count badge per tag
- **Previous / next post navigation** at the bottom of each post, labeled "Older / Newer" to sidestep the perennial previous-vs-next ambiguity
- **Footer with social icon links** — built-in icons for github, mastodon, bluesky, x, twitter, linkedin, rss, mail; falls back to text for entries with no `icon` param
- **Theme-agnostic CSS custom properties** drive the palette, fonts, spacing, and accent color — per-site override via `params.accentColor`
- **Multilingual-ready** — every user-facing UI string is wired through Hugo's `{{ i18n }}`, ships with an English `i18n/en.yaml`, and a tiny **language switcher** in the header that only renders when more than one language is configured
- **SEO head tags** including canonical URLs, multilingual `hreflang` alternates, Open Graph, Twitter Cards, per-language `og:locale`, and description fallbacks from page summaries
- **GitHub Actions** workflows ship in `.github/workflows/`: PR validation on every pull request, automated GitHub Pages deploy on push to `main`

## Requirements

- Hugo **extended** ≥ 0.128 (Leyline uses Hugo Pipes for SCSS compilation)
- Modern browsers — the theme relies on `color-mix()` (Chrome 111+, Safari 16.4+, Firefox 113+) and `aspect-ratio`

## Installation

### As a Hugo Module (recommended)

In your site's `hugo.toml`:

```toml
[module]
  [[module.imports]]
    path = "github.com/jordinebot/hugo-leyline"
```

Then initialise modules and fetch:

```sh
hugo mod init github.com/your-username/your-site
hugo mod get -u github.com/jordinebot/hugo-leyline
```

### As a git submodule

```sh
git submodule add https://github.com/jordinebot/hugo-leyline.git themes/hugo-leyline
```

And in `hugo.toml`:

```toml
theme = "hugo-leyline"
```

## Configuration

### Site params

```toml
[params]
  description = "A short tagline for your site (used in <meta name='description'> and the home hero)."
  accentColor = "#4f46e5"           # Any CSS color; overrides --accent for the whole site.
  logo        = "/logo.svg"         # Optional. Omit to fall back to site.Title text.
  googleTagID = "G-XXXXXXXXXX"       # Optional. Enables Google tag (gtag.js).

  [params.home]
    postCount   = 6                 # Max Featured posts (cards) on the home page.
    latestCount = 10                # Max Latest posts (list) under Featured. Excludes Featured.

  [params.footer]
    tagline = "Built with Leyline."
```

### Menus

Leyline uses Hugo's standard menu system. The main menu lives in the sticky header; the footer menu renders as a row next to the copyright line.

```toml
[[menus.main]]
  name   = "Posts"
  url    = "/posts/"
  weight = 10

[[menus.main]]
  name   = "Tags"
  url    = "/tags/"
  weight = 20
```

### Footer social icons

Each footer menu entry can opt into an icon by setting `params.icon`. Without an icon, the entry renders as a plain text link.

```toml
[[menus.footer]]
  name   = "GitHub"
  url    = "https://github.com/your-username"
  weight = 10
  [menus.footer.params]
    icon = "github"

[[menus.footer]]
  name   = "RSS"
  url    = "/index.xml"
  weight = 40
  [menus.footer.params]
    icon = "rss"
```

Built-in icon names: `github`, `mastodon`, `bluesky`, `x`, `twitter`, `linkedin`, `rss`, `mail`. To add more, drop an SVG at `layouts/partials/icons/<name>.html` in your site — Leyline picks it up automatically and silently falls back to a text link if the name doesn't resolve.

## Front matter

```toml
+++
title       = "My post"
date        = 2026-05-12T10:00:00+02:00
draft       = false
description = "Optional lead paragraph rendered below the title."
featured    = true                      # Surface on the home Featured grid.
image           = "/img/cover.jpg"          # Cover image (front-matter path).
imageAlt        = "Alt text for the cover"  # Optional; defaults to the post title.
credit          = ["Artist Name"]           # Optional cover-art credit(s).
creditLink      = ["https://example.com"]   # Optional URL per credit entry.
coverAiGenerated = false                # Show an AI-generated cover-art disclaimer.
coverAiModified = false                 # Show an AI-modified cover-art disclaimer.
aiTranslated    = false                 # Show an AI-translated text disclaimer.
tags            = ["design", "css"]
+++
```

When `credit`, `coverAiGenerated`, `coverAiModified`, or `aiTranslated` are set, Leyline renders a small disclaimer block at the bottom of the post, below any tag chips. `credit` should be an array of artist names; multiple names are displayed as a comma-separated cover-art attribution. Add `creditLink` as a parallel array to link each artist name to the URL at the same position; missing links leave that artist name as plain text.

### Cover images

Two ways to give a post a cover:

1. **Page bundle resource** (recommended for image processing). Make the post a folder (`content/posts/my-post/index.md`) and drop a `cover.jpg` (or `cover.png` / `cover.webp` / `cover.avif`, or `featured.*` / `hero.*`) next to `index.md`. Leyline generates a responsive WebP `srcset` automatically — 320 / 480 / 640w on home cards, 640 / 960 / 1280 / 1600w for the single-post hero.
2. **Front-matter path**. For plain `.md` posts (or external URLs), set `image = "/path/to/img.jpg"`. The path is rendered as-is (no Hugo image processing).

Bundle resources take priority — if a `cover.*` exists, `image` is ignored.

## Multilingual

Leyline is ready to run as a multilingual site out of the box. To add a second language, expand the top-level config to use Hugo's `[languages]` block:

```toml
defaultContentLanguage = "en"

[languages]
  [languages.en]
    label = "English"
    locale = "en-us"
    weight = 1
    [languages.en.params]
      description = "Your English tagline."

  [languages.es]
    label = "Español"
    locale = "es-es"
    weight = 2
    title = "My Site (Español)"
    [languages.es.params]
      description = "Tu lema en español."
```

Add per-language menus the same way (`[[languages.en.menus.main]]`, `[[languages.es.menus.main]]`). Pages translate via Hugo's file-suffix convention: `welcome.md` is your default-language post, `welcome.es.md` is the Spanish translation. Hugo links them automatically — `.Translations` on each page returns the other-language versions.

Leyline's head partial emits canonical URLs, alternates for every page in `.AllTranslations`, and an `x-default` alternate pointing at the first translation by language weight. Keep your default language at the lowest weight if you want it to be the default search result.

### Translating UI strings

The theme's strings live in [`i18n/en.yaml`](i18n/en.yaml). Bundled translations: [`i18n/es.yaml`](i18n/es.yaml) (Spanish) and [`i18n/ca.yaml`](i18n/ca.yaml) (Catalan). For any other language, copy `en.yaml` to `i18n/<lang>.yaml` in your site and translate the values.

The language switcher in the header only renders when more than one language is configured. Each link goes to the current page's translation when one exists, otherwise to that language's home.

A handful of strings are consumed by client-side JavaScript (search "no matches" template, "search unavailable" message, mobile menu open/close labels). They're injected via `data-*` attributes on the search modal and mobile menu button — so they translate alongside everything else without any JS changes.

## Optional: MTG shortcodes

If your site uses Magic: The Gathering shortcodes (`mana`, `card`, `cardname`, `combo`, `match`), pair Leyline with the [hugo-mtg-shortcodes](https://github.com/jordinebot/hugo-mtg-shortcodes) module:

```toml
[module]
  [[module.imports]]
    path = "github.com/jordinebot/hugo-leyline"
  [[module.imports]]
    path = "github.com/jordinebot/hugo-mtg-shortcodes"
```

Then include the module's stylesheet partial in your `<head>` (Leyline's `head.html` already does this — only needed in custom head overrides):

```go-template
{{ partial "mtg-styles.html" . }}
```

See `hugo-mtg-shortcodes`'s README for the full shortcode reference.

## Development

The repo doubles as a developable theme: clone it, work in `exampleSite/`, and verify changes live.

```sh
git clone https://github.com/jordinebot/hugo-leyline.git
cd hugo-leyline
npm install                  # installs pagefind for search-index generation
npm run serve                # hugo server with live reload
```

The exampleSite's `themesDir = "../.."` setting tells Hugo to look for themes one level above the repo, so it picks up `hugo-leyline/` as a sibling directory. If you also want the MTG shortcodes during local dev, clone that repo as a sibling:

```sh
cd ..  # back to the parent directory
git clone https://github.com/jordinebot/hugo-mtg-shortcodes.git
```

The exampleSite is wired with `theme = ["hugo-leyline", "hugo-mtg-shortcodes"]`, so both load when present.

### Production-style build (with search index)

```sh
npm run build                # hugo --gc --minify && pagefind --site public
```

The two-step pattern is what consuming sites should mirror: `hugo` first, then `pagefind --site <hugo-output>`. The search overlay degrades gracefully when the Pagefind bundle is missing (e.g. `hugo server` during development), so you don't need to regenerate the index on every edit.

To verify the build under a GitHub-Pages-style baseURL (catches URL-prefixing regressions before deploy):

```sh
cd exampleSite
hugo --gc --minify --baseURL "https://example.com/hugo-leyline/"
npx pagefind --site public
```

## Credits

- Body and UI type: [Inter](https://rsms.me/inter/) via Google Fonts
- Brand icons (`github`, `mastodon`, etc.) adapted from [Simple Icons](https://simpleicons.org/)
- UI icons (`sun`, `moon`, `menu`, `search`, `close`) in the spirit of [Lucide](https://lucide.dev/)
- Cover image placeholders in the demo: [Picsum Photos](https://picsum.photos/)

## Support

If you found Leyline useful and want to support my work, you can buy me a coffee:

<a href='https://ko-fi.com/Y8Y2XXO66' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi6.png?v=6' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

## License

[MIT](LICENSE)
