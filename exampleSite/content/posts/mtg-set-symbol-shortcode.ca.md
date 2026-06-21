---
title: "Shortcode de símbols de col·lecció de MTG"
date: 2026-05-10T13:40:00+02:00
draft: false
description: "Renderitza símbols d'expansió de Magic en línia a partir dels codis de col·lecció amb Keyrune."
featured: true
tags: ["mtg", "demo", "shortcodes"]
image: "https://picsum.photos/seed/mtg-set-symbol-shortcode/1600/900"
imageAlt: "Sobres i cartes col·leccionables disposats sobre un tapet de joc"
aiTranslated: true
---

El shortcode `set` renderitza símbols d'expansió de Magic en línia fent servir un codi de col·lecció de Keyrune. S'integra de manera natural dins del text: {{< set "FIN" >}} Final Fantasy, {{< set "TDM" >}} Tarkir: Dragonstorm i {{< set "SOS" >}} Secrets of Strixhaven.

```
{{</* set "FIN" */>}}
{{</* set "TDM" */>}}
{{</* set "SOS" */>}}
```

Passa una raresa opcional per acolorir el símbol. Els valors admesos inclouen `common`, `uncommon`, `rare`, `mythic`, `timeshifted` i `foil`.

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

Fes servir `set-name` quan el símbol hagi d'introduir una referència completa a una col·lecció. Afegeix el codi de la col·lecció al nom visible i enllaça el resultat a Scryfall: {{< set-name "TLA" "Avatar, The Last Airbender" >}}.

```
{{</* set-name "TLA" "Avatar, The Last Airbender" */>}}
{{</* set-name code="TLA" name="Avatar, The Last Airbender" */>}}
```
