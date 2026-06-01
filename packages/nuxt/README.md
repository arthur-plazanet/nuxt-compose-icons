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

## 🎯 Motivation

Icon components should be easy to use, style, and maintain.

Existing solutions often force trade-offs between DX, accessibility, and flexibility:

1. **Third-party libraries** → limited customization
2. **Manual Vue components** → repetitive and hard to scale
3. **SVG loaders** → flexible but lack structure and typing

The goal of this module is to propose a balanced approach which gives design flexibility and developer experience.

It dynamically generates Vue components from initial SVG files, naming them accordingly and make them accessible as individual components in the Nuxt project.

### See [Common Approaches](https://nuxt-icons.use-compose.com/guide/concept#common-approaches).

## Features

### SVG to Vue Component at Build Time

- Takes a directory of `.svg` files (e.g. `./assets/icons`)
- One Vue component is created per `.svg` file
- Use of the initial name of the icon, converted to PascalCase or snake-case with optional prefix and suffix.
  Example `user-badge.svg` can give:
  - `<IconUserBadge />`
  - `<UserBadgeIcon />`
  - `<user-badge />`
- **Versioning support** - optional configuration for folder-based namespacing - icon Components can directly be generated in your codebase, making the rendered icon components available as part of your codebase

### Auto-Registration in Nuxt and Typing

- **Automatically registered in Nuxt’s component auto-import** system (no manual registration needed) - each icon will be automatically imported and registered in the Nuxt project as individual Vue component in the tree
- **Type-safe usage** in `<template>`

## SVG Output - Accessibility

- **No wrappers** - the component root element is a single `<svg>` element
- No additional wrappers or nested templates
- Attributes from the original SVG are preserved

### Theming with CSS Custom Properties and Runtime Access

- Generated components rewrite static SVG attributes (such as `fill`, `stroke`, and `stroke-width`) with CSS Custom Properties ([CSS Custom Properties Guide](https://css-tricks.com/a-complete-guide-to-custom-properties/)) while keeping original values as fallback:

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

- Since CSS Custom Properties work at runtime, theming can be done dynamically in cascade (if you use design tokens), with component props or with scoped styles, giving you full control over the look of your icons.

```vue
<template>
  <div>
    <!-- Using props -->
    <IconUserBadge stroke="blue" fill="red" size="lg" />

    <!-- Using cascading styles -->
    <div class="icon-container" style="--icon-fill: red; --icon-stroke: blue;">
      <!-- Icons will inherit styles from the container -->
      <IconUserBadge />
      <!-- This icon will be red with blue stroke -->
    </div>

    <!-- Using scoped or global styles -->
    <IconUserBadge class="primary-icon" />
    <!-- This icon will use styles from the .primary-icon class -->
  </div>
</template>
<style>
.primary-icon {
  --icon-fill: var(--color-primary);
  --icon-stroke: var(--color-primary-dark);
}
</style>
```

## Developer Experience:

- Can provide auto-completion and type-checking in your editor for each icons, as they are directly part of the Nuxt Build like any other component
- Vue DevTools support - unlike other solutions, this module generates Vue components that can be inspected and debugged in the Vue DevTools

This provides a balance of control, flexibility, and developer experience, tailored for projects using custom icons or building design systems.

See full [list of features](https://nuxt-icons.use-compose.com/guide/features)

## Comparison with Other Icon Strategies

| Feature                | Third-party Libraries      | Manual Vue Components | SVG Loaders (`vite-svg-loader`) | **Nuxt Compose Icons** |
| ---------------------- | -------------------------- | --------------------- | ------------------------------- | ---------------------- |
| **Setup**              | ✅                         | ⚠️ manual             | ⚠️ requires config              | ✅                     |
| **SVG output**         | ⚠️ often wrapped           | ✅                    | ✅                              | ✅                     |
| **Theming**            | ⚠️ prop-based, limited     | ⚠️ manual CSS         | ✅                              | ✅                     |
| **Typing**             | ✅                         | ⚠️ manual             | ⚠️ depends on setup             | ✅                     |
| **Nuxt integration**   | ✅                         | ✅                    | ⚠️ requires config              | ✅                     |
| **Scaling / monorepo** | ⚠️ tied to library updates | ❌                    | ⚠️ unstructured                 | ✅                     |
| **Source of truth**    | ❌                         | ✅                    | ✅                              | ✅                     |
| **Naming consistency** | ⚠️ library-defined         | ⚠️ developer-defined  | ⚠️ file-based, no enforcement   | ✅                     |

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

## ▶️ Try it

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/arthu-pr/nuxt-compose-icons/tree/main/examples/runtime-showcase)

## 🗺 Roadmap

👉 [GitHub Projects](https://github.com/users/arthu-pr/projects/7/views/1)
