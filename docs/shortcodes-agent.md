# Hugo shortcodes: agent reference

Purpose: machine-oriented reference for shortcodes implemented by the Leyline theme and the `hugo-mtg-shortcodes` Hugo module in this workspace. Treat template behavior as authoritative when this document and implementation differ.

## Resolution and invocation rules

- Use Hugo shortcode syntax with `{{</* name ... */>}}` in Markdown. The delimiters shown here are escaped examples; omit `/*` and `*/` in actual content.
- Positional arguments are quoted strings. Named arguments use `key="value"`. Most parameters are strings and are converted by the template where needed.
- The shortcodes listed below are definitions in the two source repositories, not every shortcode available from Hugo or other site modules.
- Leyline contributes `gallery`; `hugo-mtg-shortcodes` contributes 16 names: `card`, `cardname`, `coins`, `combo`, `deck`, `draft`, `draft-token`, `gems`, `mana`, `mastery`, `match`, `sealed-token`, `season`, `set`, `set-name`, `tier`.

## Leyline

### `gallery`

Purpose: responsive page-resource image gallery with a modal lightbox, navigation, and optional captions.

Signature: `{{</* gallery match="glob" images="a.jpg,b.jpg" captions="Caption 1|Caption 2" cols="3" */>}}`

Parameters:

| Name | Required | Default | Meaning |
| --- | --- | --- | --- |
| `match` | conditional | none | Glob passed to `.Page.Resources.Match`; all matching page bundle resources become gallery entries. |
| `images` | conditional | none | Comma-separated page resource names or URLs. Used only when `match` is absent/empty. Resource names are resolved with `.Page.Resources.Get`; unresolved values are emitted as direct URLs. |
| `captions` | no | empty | Captions separated by `|`, mapped by item order. Missing captions are empty. |
| `cols` | no | `3` | Written as CSS custom property `--gallery-cols`. Value `1` also activates centered layout. |

Rules: provide either `match` or `images`; `match` wins if both are supplied. Captions are positional against resolved items. Resource images get a 600px-wide WebP thumbnail (quality 82); full image is capped at 1600px (quality 85). Direct URLs are not transformed and have no inferred alt text. Gallery renders only if at least one item exists. Repeated instances receive page-unique IDs; lightbox JS is emitted once per page.

Example: `{{</* gallery match="gallery/*" captions="Front|Back" cols="2" */>}}`

## MTG Shortcodes

### `card`

Purpose: block card image, Scryfall link, name, and type line; double-faced cards receive a flip control.

Signature: `{{</* card "Card Name|set" */>}}` or `{{</* card name="Card Name" set="set" */>}}`

Parameters: `name` (required; positional 0 or named); `set` (optional; positional 1 or named). A `name` value containing `|` is split into card name and set code, overriding the separate set. Lookup is exact, case-insensitive, against generated local Scryfall data. Missing name is a build error; unresolved card warns and emits an error placeholder. A set pins the printing.

### `cardname`

Purpose: inline Scryfall-linked card name with hover image preview; double-faced cards have a flip control.

Signature: `{{</* cardname "Card Name|set" "Visible label" */>}}` or `{{</* cardname name="Card Name" set="set" label="Visible label" */>}}`

Parameters: `name` required (positional 0 or named); `set` optional (named, or the second component of `name|set`); `label` optional (positional 1 or named), replaces visible text only. Missing name is a build error; lookup failure warns and emits a placeholder. Without label, displays the Scryfall card name.

### `coins`, `gems`, `draft-token`, `sealed-token`

Purpose: render an Arena currency/token icon and formatted integer quantity. These are aliases differing only by icon/alt text.

Signature: `{{</* coins 500 */>}}`, `{{</* gems 1200 */>}}`, `{{</* draft-token 2 */>}}`, `{{</* sealed-token 1 */>}}`

Parameters: one positional integer quantity (missing/invalid values convert to integer zero). No named parameter interface.

### `combo`

Purpose: display 1–5 card images in a fanned group with Scryfall links.

Signature: `{{</* combo "Card A" "Card B|SET" "Card C" */>}}`

Parameters: positional card names 0 through 4; each can use `Card Name|set-code` to pin a printing. At least one non-empty card name is required (build error otherwise). Each card resolves through local Scryfall data; a failed lookup warns and inserts a placeholder. More than five positional inputs are ignored.

### `deck`

Purpose: render a deck preview, card rows, totals, source/download links, and optional mana/type/color breakdown from site data.

Signature: `{{</* deck "deck-id" title="Custom title" format="Format" showMana="false" showBreakdown="false" breakdownOpen="true" sourceUrl="URL" downloadUrl="URL" */>}}`

Required data: `data/decks/<deck-id>.yaml|json|toml` loaded as `hugo.Data.decks[deck-id]`. Mainboard groups: `creatures`, `planeswalkers`, `instants`, `sorceries`, `artifacts`, `enchantments`, `battles`, `lands`, `other`. Each card has `name` (and optional `set`, `qty`; qty defaults to 1). Mainboard accepts `mainboard` or legacy `main`; sideboard accepts `sideboard` or legacy `side`. Sideboard may be a flat card list or grouped with mainboard group keys.

Parameters (named unless noted):

| Name | Required | Default/source | Meaning |
| --- | --- | --- | --- |
| `id` | yes | positional 0 or named `id` | Deck data key / filename stem. Missing ID or data is a build error. |
| `title` | no | deck `title`, else humanized ID | Display title. |
| `format` | no | deck `format` | Display format. |
| `sourceUrl` / `url` | no | deck `source_url` or `sourceUrl` | Source action link; `sourceUrl` takes precedence over `url`. |
| `downloadUrl` | no | deck `download_url` or `downloadUrl` | Download action link. |
| `showMana` | no | `true` | Set to exact string `false` to hide mana costs. |
| `showBreakdown` | no | `true` | Set to exact string `false` to hide breakdown. |
| `breakdownOpen` | no | deck `breakdown_open`, else `false` | Set to exact string `true` to start breakdown expanded. |

Deck records are fetched from the local Scryfall index for card links and derived chart data. Legacy card field/group aliases are implementation-dependent; prefer `mainboard` and `sideboard`.

### `draft`

Purpose: draft summary callout with set, colors, match record, win rate, reward, and optional 17Lands links.

Signature: `{{</* draft index="1" set="MKM" colors="{R}{W}" winrate="57" result="4-3" gems="1000" seventeenlands="32-hex-id-or-url" */>}}`

All parameters optional:

| Name | Meaning |
| --- | --- |
| `index` | Heading identifier/text. If it does not contain “draft” case-insensitively, heading becomes `Draft <index>`. Also produces an HTML id. |
| `set` | Set code rendered as Keyrune symbol and Scryfall set link. |
| `colors` | Mana colors as brace symbols (e.g. `{R}{W}`) or compact letters (e.g. `RW`); compact mode recognizes WUBRGCTQ. |
| `winrate` | Displayed as given; `%` appended if missing. Numeric value controls positive/negative styling relative to 50. |
| `result` | Match record text, conventionally `wins-losses`; aliases: `matches`, `record`. |
| `gems` | Integer reward quantity, rendered with gem icon. |
| `17lands` | Event ID or URL containing a 32-character hexadecimal ID; aliases `17landsId`, `seventeenlands`, `seventeenlandsId`. Enables event links when ID is found. |

Record outcome styling is based on first and second hyphen-separated integers. If record is even/missing, win rate determines overall callout tone. Labels use i18n `mtg_draft_*` keys.

### `mana`

Purpose: render inline Mana font symbols from a brace-delimited MTG cost.

Signature: `{{</* mana "{1}{G}{G}" */>}}`

Parameters: one positional cost string. Use standard symbols inside braces, e.g. `{W}`, `{2}`, `{W/U}`, `{W/P}`, `{T}`, `{Q}`, `{C}`. No named parameters. Rendering relies on Mana font CSS being loaded by the site.

### `mastery`

Purpose: set mastery progress bar with optional pass/ongoing indicators.

Signature: `{{</* mastery set="FIN" level="42" max="60" pass="true" ongoing="true" title="Mastery" */>}}`

Parameters:

| Name | Required | Default | Meaning |
| --- | --- | --- | --- |
| `set` | no | empty | Set code, symbol, and Scryfall set link. |
| `level` | no | positional 0, else 0 | Current level, integer. |
| `max` | no | `60` | Maximum level, integer. |
| `pass` | no | `false` | Exact string `true` means Mastery Pass; otherwise Free Track. |
| `ongoing` | no | `false` | Exact string `true` adds ongoing indicator. |
| `title` | no | i18n `mtg_mastery_title`, else `Set Mastery` | Title label. |

Progress is `level / max * 100`; when max <= 0, width is zero. No clamping is performed.

### `match`

Purpose: tournament round callout with two players, optional deck names/links, and score outcome.

Signature: `{{</* match round="1" player1="Me" deck1="Deck A" deck1Url="https://example.com" player2="Opponent" deck2="Deck B" deck2Url="https://example.org" result="2-1" */>}}`

Parameters: `round` (optional; heading/id); `result` (optional; convention `score1-score2`); `player1` default `Me`; `deck1` and `deck1Url` optional; `player2` default `Opponent`; `deck2` and `deck2Url` optional. First score greater = win, lower = loss, otherwise draw. Deck URLs only link the corresponding deck name. `round` is interpolated into the DOM id `round-<round>`.

### `season`

Purpose: Arena season summary with ranks, draft statistics, gems, and draft tokens.

Signature: `{{</* season month="August 2026" spending="F2P" ongoing="true" limited-start="Bronze 2" limited-end="Gold 3" constructed-start="Silver 1" constructed-end="Platinum 4" drafts="7" wins="22" losses="18" gems-start="15405" gems-earned="6600" gems-bought="0" gems-spent="10500" tokens-start="2" tokens-earned="1" tokens-bought="0" tokens-spent="3" */>}}`

Parameters (all optional):

| Name | Meaning |
| --- | --- |
| `month` | Season label. |
| `spending` | Spending label; omitted/empty displays localized `F2P`. |
| `ongoing` | Exact string `true` adds ongoing indicator. |
| `limited-start`, `limited-end` | Both required to show Limited rank progression. |
| `constructed-start`, `constructed-end` | Both required to show Constructed rank progression. |
| `drafts`, `wins`, `losses` | Integers, default 0. Stats show when drafts > 0 or total matches > 0. Win rate = wins / (wins + losses), or 0 if no matches. |
| `gems-start`, `gems-earned`, `gems-bought`, `gems-spent` | Integer currency movements, all default 0. Balance = start + earned + bought − spent; net = earned + bought − spent. |
| `tokens-start`, `tokens-earned`, `tokens-bought`, `tokens-spent` | Same balance/net calculation for draft tokens. |

### `set`

Purpose: inline Keyrune set symbol, optionally rarity-colored.

Signature: `{{</* set "FIN" "mythic" */>}}` or `{{</* set code="FIN" rarity="mythic" */>}}`

Parameters: `code` required in practice (positional 0 or named); `rarity` optional (positional 1 or named). Codes are lowercased. Supported rarity values: `common`, `uncommon`, `rare`, `mythic`, `timeshifted`, `foil`. Use valid Keyrune codes. Depends on Keyrune CSS/font being loaded.

### `set-name`

Purpose: inline set symbol plus set name/code linked to Scryfall.

Signature: `{{</* set-name "TLA" "Avatar, The Last Airbender" */>}}` or `{{</* set-name code="TLA" name="Avatar, The Last Airbender" */>}}`

Parameters: `code` required in practice (positional 0 or named); `name` required (positional 1 or named). Code is trimmed/lowercased for symbol and URL and uppercased in visible code. Missing name is a build error. Depends on Keyrune CSS/font.

### `tier`

Purpose: inline colored tier rating.

Signature: `{{</* tier "A+" */>}}` or `{{</* tier value="B-" */>}}`

Parameter: `value` required (positional 0 or named), case-insensitive. Allowed values: `S`, `A+`, `A`, `A-`, `B+`, `B`, `B-`, `C+`, `C`, `C-`, `D+`, `D`, `D-`, `F`, `?`. Invalid/missing values produce a build error. Plus/minus render as superscripts; `?` uses the unknown family.

## Build and integration dependencies

- Card shortcodes (`card`, `cardname`, `combo`, and `deck` card records) require the local generated `data/scryfall.json` index. Hugo does not perform live card API lookups.
- `set`, `set-name`, `draft`, and `mastery` set icons depend on Keyrune assets; `mana` and `draft` mana colors depend on Mana assets.
- MTG module partials `mtg-styles.html` and `mtg-scripts.html` must be integrated by the host theme for styles, fonts, previews, and flip behavior. Leyline integration is documented in the module README.
- Template source of truth: `hugo-leyline/layouts/shortcodes/gallery.html` and `hugo-mtg-shortcodes/layouts/shortcodes/*.html`.
