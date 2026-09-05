---
outline: [2, 3]
order: 4
---

# Using in a Monorepo

If your icons belong to a UI library rather than a single app, generate them from a small,
dedicated Nuxt app whose only job is running this module — then point its output straight at
your UI library's own source tree.

## Setup

1. Create a minimal package (e.g. `packages/icons`) with just a `nuxt.config.ts` and a
   `playground/` folder to run against — `nuxt-compose-icons` is a Nuxt module, so it needs
   _some_ Nuxt app to execute, even if that app renders nothing itself.
2. Point `pathToIcons` at your UI library's source SVGs, and `component.destDir` directly at
   its components folder — a plain relative path works across packages in a monorepo, no
   publishing or `node_modules` involved:

```ts
// packages/icons/playground/nuxt.config.ts
import { fileURLToPath } from 'node:url';
import type { NuxtComposeIconsOptions } from 'nuxt-compose-icons';

const options: NuxtComposeIconsOptions = {
  pathToIcons: fileURLToPath(new URL('../../ui/src/assets/icons', import.meta.url)),
  component: {
    suffix: 'Icon',
    case: 'pascal',
    destDir: fileURLToPath(new URL('../../ui/src/components/icons', import.meta.url)),
    hasIndexFile: true,
    iconClasses: 'ui-icon',
  },
  iconSizes: {
    sm: 'var(--spacing-3)',
    md: 'var(--spacing-4)',
    lg: 'var(--spacing-6)',
  },
};

export default defineNuxtConfig({
  modules: ['nuxt-compose-icons'],
  composeIcons: options,
});
```

3. Run `nuxi prepare playground` (wire it up as a script, e.g. `"generate-icons": "nuxt prepare playground"`)
   whenever an icon is added or changed. Commit the generated `.vue`/`.ts` files, the barrel,
   and `compose-icons.css` — they're real source files in your UI library now, not a build
   artifact of it.

That's the whole integration: nothing in your UI library or its consuming apps needs to know
`nuxt-compose-icons` exists. They just see plain, committed Vue components.

## Browsing your icons

`component.hasIndexFile` also gives you everything needed for your own icon browser, without
the built-in overview component — this is genuinely how it's done in production, not a
theoretical example:

```vue
<script setup lang="ts">
import * as Icons from './icons';

const icons = Object.entries(Icons);
</script>

<template>
  <component :is="icon" v-for="[name, icon] in icons" :key="name" />
</template>
```

Drop that into a Storybook story, an internal style-guide page, or a Nuxt DevTools tab —
whatever your UI library already uses to showcase its other components.
