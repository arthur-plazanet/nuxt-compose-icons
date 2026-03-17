---
title: Interactivity
description: Learn how to add hover, active, and focus effects to icons in nuxt-compose-icons.
order: 2
---

# 🧩 Interactivity

`nuxt-compose-icons` icons are **fully reactive** — they can respond to hover, focus, and active states just like buttons or links.

Icon properties are based on **CSS Custom Properties**, you can easily create interactive effects without touching your component logic.

## Design Tokens

If you use Design Tokens, interactivity can be done through them as well, depending on your token setup and your schema (some example can be found in [Interactions](https://tokenpedia.ds.house/terms/interaction/)).

---

## 🎮 Hover and Active States

```css
.compose-icon {
  transition: all 0.2s ease-in-out;
}

.compose-icon:hover {
  --icon-stroke: var(--brand-hover);
}

.compose-icon:active {
  --icon-stroke: var(--brand-active);
  transform: scale(0.96);
}
```
