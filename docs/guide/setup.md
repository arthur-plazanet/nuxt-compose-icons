---
outline: [2, 3]
order: 2
---

# Setup

## 1. Installation

Choose your package manager:

:::code-group

```bash [pnpm]
pnpm add -D nuxt-compose-icons
```

```bash [npm]
npm install -D nuxt-compose-icons
```

```bash [yarn]
yarn add -D nuxt-compose-icons
```

:::

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
