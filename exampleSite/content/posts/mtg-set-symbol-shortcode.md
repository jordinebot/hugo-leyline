---
title: "MTG set symbol shortcode"
date: 2026-05-10T13:40:00+02:00
draft: false
description: "Render Magic expansion symbols inline from their set codes using Keyrune."
featured: true
tags: ["mtg", "demo", "shortcodes"]
image: "https://picsum.photos/seed/mtg-set-symbol-shortcode/1600/900"
imageAlt: "Booster packs and trading cards arranged on a playmat"
---

The `set` shortcode renders Magic expansion symbols inline using a Keyrune set code. It works naturally inside prose: {{< set "FIN" >}} Final Fantasy, {{< set "TDM" >}} Tarkir: Dragonstorm, and {{< set "SOS" >}} Secrets of Strixhaven.

```
{{</* set "FIN" */>}}
{{</* set "TDM" */>}}
{{</* set "SOS" */>}}
```

Pass an optional rarity to colour the symbol. Supported values include `common`, `uncommon`, `rare`, `mythic`, `timeshifted`, and `foil`.

{{< set "FIN" "common" >}}
{{< set "FIN" "uncommon" >}}
{{< set "FIN" "rare" >}}
{{< set "FIN" "mythic" >}}
{{< set "FIN" "foil" >}}

```
{{</* set "FIN" "common" */>}}
{{</* set "FIN" "uncommon" */>}}
{{</* set "FIN" "rare" */>}}
{{</* set "FIN" "mythic" */>}}
{{</* set code="FIN" rarity="foil" */>}}
```

Use `set-name` when the symbol should introduce a complete set reference. It adds the set code to the visible name and links the result to Scryfall: {{< set-name "TLA" "Avatar, The Last Airbender" >}}.

```
{{</* set-name "TLA" "Avatar, The Last Airbender" */>}}
{{</* set-name code="TLA" name="Avatar, The Last Airbender" */>}}
```
