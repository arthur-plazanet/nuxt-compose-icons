---
title: Theming
description: Learn how to customize icon colors, states, and variables with CSS theming in nuxt-compose-icons.
order: 1
---

# 🎨 Theming

Theming can be done during:

- Build time, with configuration given to the module or custom CSS tokens
- Runtime, with props passed to each icon instance or via CSS variables

`nuxt-compose-icons` is built around **CSS variables**, making it easy to integrate with any design system or theme — whether you use Tailwind, tokens, or a custom style layer.

The **recommended** approach is to define a global icon theme in your CSS or design tokens, and then override it at runtime with props when needed.

---

## 💡 Concept

Each icon component uses CSS variables to control its visual properties:

| Property       | CSS Variable                | Description                               |
| -------------- | --------------------------- | ----------------------------------------- |
| `fill`         | `--icon-fill`               | Controls the inner color of filled paths. |
| `stroke`       | `--icon-stroke`             | Controls outline or stroke color.         |
| `stroke-width` | `--icon-stroke-width`       | Controls the line thickness.              |
| `color`        | Fallback to `--icon-stroke` | Shortcut prop for stroke color.           |
| `size`         | `--icon-size` (via class)   | Controlled via `IconSize` tokens.         |

All variables are defined **per component** but can be **overridden globally** via CSS or theme providers.

---

## 🧩 Example

```vue
<template>
  <TwitterIcon color="var(--brand-primary)" fill="none" stroke-width="2" />
</template>
```

You can define your global icon theme in your CSS or design tokens:

```css
:root {
  --icon-stroke: currentColor;
  --icon-fill: transparent;
  --icon-stroke-width: 1.5;
}
```

You can safely combine runtime props with global variables (props take priority).

:::info
`stroke` and `color` props both map to --icon-stroke.
:::
