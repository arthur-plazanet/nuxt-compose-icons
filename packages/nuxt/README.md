# Nuxt-Compose-Icons

<img width="1408" height="423" alt="Frame 207" src="https://github.com/user-attachments/assets/4f2a1f2a-57f0-49ca-bf56-075d3df9d043" />

<a href="https://www.npmjs.com/package/nuxt-compose-icons" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/npm/v/nuxt-compose-icons.svg?style=flat&colorA=000&colorB=C1272D" alt="npm-downloads" />
</a>

<img width="120" alt="logo"  align="left" style="margin-right: 1rem;" src="https://github.com/user-attachments/assets/71be7ce7-54ef-401e-84df-8dde0891cc9d" />

The goal of this module is to propose a balanced approach which gives design flexibility and developer experience - in comparison to existing solutions

### See [Common Approaches](https://nuxt-icons.use-compose.com/guide/concept#common-approaches).

It dynamically generates customizable Vue components from initial SVG files, naming them accordingly and make them accessible as individual component to let you create your own Icon components library.

## Features

- Parses `.svg` files at build time
- Outputs one Vue component per icon
- Rewrites `fill`, `stroke`, etc. using `var(--icon-*, originalValue)`
- Generates predictable component names (`user-badge.svg` → `IconUserBadge`)
- Registers components with Nuxt auto-import
- Supports type inference and autocomplete in templates

```xml
<!-- Input: user-badge.svg -->
<svg fill="#000" stroke="#fff" stroke-width="2">
  <path d="..." />
</svg>
```

```vue
<!-- Output: IconUserBadge.vue -->
<template>
  <svg
    fill="var(--icon-fill, #000)"
    stroke="var(--icon-stroke, #fff)"
    stroke-width="var(--icon-stroke-width, 2)"
  >
    <path d="..." />
  </svg>
</template>
```

This provides a balance of control, flexibility, and developer experience, tailored for projects using custom icons or building design systems.

See full [list of features](https://nuxt-icons.use-compose.com/guide/features)

## Comparison with Other Icon Strategies

| Feature / Approach   | Third-party Libraries | Manual Vue Components | SVG Loaders (`vite-svg-loader`) | **This Module**    |
| -------------------- | --------------------- | --------------------- | ------------------------------- | ------------------ |
| **Setup**            | ✅ Easy               | ⚠️ Manual             | ⚠️ Requires config              | ✅ Minimal         |
| **Output**           | `<svg>` (clean)       | `<svg>` (custom)      | `<svg>` (inline)                | `<svg>` (clean)    |
| **Theming**          | ⚠️ Limited props      | ✅ Full control       | ✅ Flexible via CSS             | ✅ CSS variables   |
| **DX & Typing**      | ✅ Standard           | ✅ Full control       | ✅ With imports                 | ✅ Auto-typed      |
| **Scalability**      | ✅ Tree-shakable      | ⚠️ Tedious manually   | ✅ File-based, fast             | ✅ Build-optimized |
| **Nuxt Integration** | ✅ Works by default   | ✅ Auto-importable    | ✅ With module/plugin           | ✅ Native support  |

This provides a balance of control, flexibility, and developer experience, tailored for projects using custom icons or building design systems.

Using pnpm:

```bash
pnpm add -D nuxt-compose-icons
```

Using npm

```bash
npm install -D nuxt-compose-icons
```

Using yarn

```bash
yarn add -D nuxt-compose-icons
```
