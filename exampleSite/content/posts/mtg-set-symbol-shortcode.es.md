---
title: "Shortcode de símbolos de colección de MTG"
date: 2026-05-10T13:40:00+02:00
draft: false
description: "Renderiza símbolos de expansión de Magic en línea a partir de sus códigos de colección con Keyrune."
featured: true
tags: ["mtg", "demo", "shortcodes"]
image: "https://picsum.photos/seed/mtg-set-symbol-shortcode/1600/900"
imageAlt: "Sobres y cartas coleccionables dispuestos sobre un tapete de juego"
aiTranslated: true
---

El shortcode `set` renderiza símbolos de expansión de Magic en línea usando un código de colección de Keyrune. Se integra de forma natural dentro del texto: {{< set "FIN" >}} Final Fantasy, {{< set "TDM" >}} Tarkir: Dragonstorm y {{< set "SOS" >}} Secrets of Strixhaven.

```
{{</* set "FIN" */>}}
{{</* set "TDM" */>}}
{{</* set "SOS" */>}}
```

Pasa una rareza opcional para colorear el símbolo. Los valores admitidos incluyen `common`, `uncommon`, `rare`, `mythic`, `timeshifted` y `foil`.

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
