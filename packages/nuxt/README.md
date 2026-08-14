<img width="1408" height="423" alt="Frame 207" src="https://github.com/user-attachments/assets/4f2a1f2a-57f0-49ca-bf56-075d3df9d043" />

<p align="center">
  <a href="https://npmjs.com/package/nuxt-compose-icons"><img src="https://img.shields.io/npm/v/nuxt-compose-icons.svg?style=flat&colorA=000&colorB=C1272D" alt="npm version" /></a>
  <a href="https://npmjs.com/package/nuxt-compose-icons"><img src="https://img.shields.io/npm/dm/nuxt-compose-icons.svg?style=flat&colorA=000&colorB=C1272D" alt="monthly downloads" /></a>
  <a href="https://npmjs.com/package/nuxt-compose-icons"><img src="https://img.shields.io/npm/dt/nuxt-compose-icons.svg?style=flat&colorA=000&colorB=C1272D" alt="total downloads" /></a>
  <a href="https://github.com/arthu-pr/nuxt-compose-icons/actions"><img src="https://github.com/arthu-pr/nuxt-compose-icons/actions/workflows/ci.yml/badge.svg" alt="CI" /></a>
  <a href="https://packagephobia.com/result?p=nuxt-compose-icons"><img src="https://packagephobia.com/badge?p=nuxt-compose-icons" alt="install size" /></a>
  <img src="https://img.shields.io/badge/Nuxt-3%20%26%204-00DC82?logo=nuxt.js" alt="Nuxt" />
  <img src="https://img.shields.io/npm/types/nuxt-compose-icons" alt="types" />
  <a href="LICENSE"><img src="https://img.shields.io/github/license/arthu-pr/nuxt-compose-icons" alt="license" /></a>
</p>

---

# Nuxt-Compose-Icons

This module generates fully customizable Vue components from your initial raw SVG files at build time, and gives you:

- 🧩 The flexibility of raw SVG
- 🎨 Theming control:
  - At build time via configuration
  - At runtime via CSS variables
- 🏔<img height="24" alt="image" src="https://github.com/user-attachments/assets/ac938ec3-e127-4555-a398-98f28bd6ba22" align="left" /> ️Native Nuxt auto-import support

For building design systems or simply use in-house icons.

---

## 📦 Installation

Using pnpm:

```bash
pnpm add nuxt-compose-icons
```

Using npm

```bash
npm install nuxt-compose-icons
```

Using yarn

```bash
yarn add nuxt-compose-icons
```

---

## 🛠 Quick start

**1. Add to `nuxt.config.ts`:**

```ts
export default defineNuxtConfig({
  modules: ['nuxt-compose-icons'],
  composeIcons: {
    pathToIcons: './assets/icons',
  },
});
```

**2. Drop your SVGs in `./assets/icons`**

**3. Use them anywhere — no imports needed:**

```vue
<ArrowUpIcon size="md" color="var(--primary)" />
<UserBadgeIcon size="lg" fill="currentColor" />
```

That's it. Every `.svg` becomes a typed, auto-imported Vue component.

---

## 🎯 Motivation

Existing icon solutions often force trade-offs between DX, accessibility, and flexibility:

1. **Third-party libraries** → limited customization
2. **Manual Vue components** → repetitive and hard to scale
3. **SVG loaders** → flexible but lack structure and typing

Nuxt Compose Icons dynamically generates Vue components from your SVG files, giving you design flexibility and developer experience without the trade-offs.

→ Full writeup: [Motivation](https://nuxt-icons.use-compose.com/guide/motivation) · [Common Approaches](https://nuxt-icons.use-compose.com/guide/concept#common-approaches)

---

## Features

- **SVG to Vue Component at build time** — one component per `.svg` file, named in PascalCase or kebab-case with optional prefix/suffix
- **Auto-registered in Nuxt** — no manual imports, type-safe usage in `<template>`
- **No wrappers** — the component root is a single `<svg>` element, original attributes preserved
- **Theming via CSS Custom Properties** — `fill`, `stroke`, `stroke-width` become `var(--icon-*, original)`, overridable via props, cascading styles, or scoped CSS
- **Developer Experience** — full autocompletion/type-checking, and Vue DevTools support since generated icons are real components

→ Full feature list with examples and a [comparison with other icon strategies](https://nuxt-icons.use-compose.com/guide/features)

---

## 🎯 Ideal Use Cases

- Design systems
- Internal product icon libraries
- Projects requiring strict visual control
- Teams wanting predictable DX with full styling power

---

## Philosophy

Nuxt Compose Icons does **not** try to abstract SVGs away.

Instead, it embraces them:

- Keep your structure
- Keep your attributes
- Just make them composable and scalable

---

## 📖 Documentation

Full documentation and advanced configuration:

👉 [https://nuxt-icons.use-compose.com](https://nuxt-icons.use-compose.com/)

---

## ▶️ Try it

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/arthu-pr/nuxt-compose-icons/tree/main/examples/runtime-showcase)

---

## 🗺 Roadmap

👉 [GitHub Projects](https://github.com/users/arthu-pr/projects/7/views/1)
