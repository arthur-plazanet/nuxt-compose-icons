---
outline: [2, 3]
order: 2
---

# Installation

## 1. Add the module

Choose your package manager:

```bash
pnpm add -D nuxt-compose-icons
```

```bash
npm install -D nuxt-compose-icons
```

```bash
yarn add -D nuxt-compose-icons
```

> This module runs at build time and is typically added as a dev dependency.

---

## 2. Register the module

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-compose-icons'],
});
```

---

## 3. Provide icons

Point the module at a folder of `.svg` icons:

```ts
composeIcons: {
  pathToIcons: './assets/icons',
}
```

---

## 4. Use your icons

```vue
<template>
  <ArrowUpIcon />
  <user-badge-icon />
</template>
```

---

## Next steps

→ See [Configuration](/guide/configuration) for naming, size classes, and advanced options.
