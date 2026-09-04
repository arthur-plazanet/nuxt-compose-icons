---
outline: [2, 3]
order: 4
---

<script setup lang="ts">
  import OwnershipDiagram from '../.vitepress/theme/components/docs/OwnershipDiagram.vue';
</script>

# Usage in Monorepo

Use or include the icon components in a shared UI library, consumed by several apps, in a monorepo.

- Works with Nx, Turborepo, or plain pnpm/yarn workspaces — the tooling doesn't matter
- The UI library owns the icons — both the source SVGs and the generated components
- Consuming apps only ever import components; they never configure this module ([except for Nuxt Apps](#if-a-consuming-app-is-itself-nuxt))

Production-tested, not hypothetical — this exact pattern has generated and maintained a full
icon set for a UI library used across an Nx monorepo, shown live in that library's own
Storybook. It's also the part hardest to explain from a README alone, so below is the quick
version, then the reasoning for anyone who wants it.

→ [nuxt-compose-icons-monorepo-example](https://github.com/arthu-pr/nuxt-compose-icons-monorepo-example)
is a minimal, real, working repo of everything on this page — clone it and run it yourself.

<OwnershipDiagram />

## Quick setup

1. Create a small Nuxt app whose only job is running this module (its own package, or a folder
   inside the UI library — doesn't matter).
2. Point `pathToIcons` at the UI library's source SVGs, `component.destDir` at its components
   folder — plain relative paths across the monorepo, no publishing involved:

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
    // Any valid CSS value works — map straight to your own design tokens.
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

3. Run `nuxi prepare` on that app whenever an icon changes, and commit the generated output.

That's the whole integration. Read on for the reasoning behind each piece — particularly how
regenerating icons fits into a normal build, covered below.

## Why a Nuxt app at all

`nuxt-compose-icons` is a Nuxt module — it has no meaning outside a Nuxt app and can't run as a
standalone CLI. If your icons live in a plain UI library package, something still needs to give
the module a Nuxt app to run inside.

That "something" doesn't need to render or serve anything — it exists purely so the module's
`setup()` hook runs once and writes files. And it's worth saying plainly: **the module itself
writes the generated components.** There's no separate script parsing SVGs; running the Nuxt app
_is_ the codegen step, because that's what `setup()` does on every `nuxi prepare`/`build`/`dev`.

That doesn't mean the UI library is free of `nuxt-compose-icons` at runtime, though — every
generated component imports `useComposeIcon` from `nuxt-compose-icons/composables`, so declare
it as a real dependency of the UI library itself (don't rely on it being hoisted in from
elsewhere in the workspace — pnpm's strict `node_modules` won't do that for you, even if Yarn's
will). What the UI library _doesn't_ need is the Nuxt module itself: no `modules: []` entry, no
Nuxt app running anywhere near it — `useComposeIcon` has zero Nuxt-specific imports, so it works
in any Vue app.

## Why `fileURLToPath(new URL(...))`

This config file is ESM, and ESM modules don't have `__dirname`. `import.meta.url` is the one
thing that's always correct — the URL of _this file_, wherever it is on disk. Resolving
`pathToIcons`/`destDir` relative to that, instead of `process.cwd()`, means the config works no
matter where the command runs from.

A relative `pathToIcons`/`destDir` resolves against `process.cwd()`, which isn't fixed — it's
wherever the command was invoked from. The same relative path can point to the right place
locally and somewhere else — or nowhere — in CI, simply because the invoking directory differs.
`fileURLToPath(new URL(...))` sidesteps that: it's always relative to this config file's own
location, never the caller's.

## Wiring it into CI/CD

Wire the Nuxt app's `nuxi prepare` into a `prepare-icons` script that the UI library's own
`build` target depends on (e.g. Nx `dependsOn`). Inside the monorepo, that's what makes
regeneration automatic: the task graph cascades, so building or serving _any_ app that depends on
the UI library pulls in the UI library's build first, which pulls in `icons:build-icon-components`
— spinning up any app locally reruns codegen against whatever SVGs currently exist, no manual
step involved.

That automatic cascade only exists inside the workspace, though. Once the UI library is
published, a downstream consumer outside the monorepo (or a consuming app's CI pinned to a
released version, not a workspace path) never reruns codegen — it only ever gets whatever
generated components were committed and published in that version. That's where "commit the
generated files" actually matters: if an SVG changes but nobody reruns `nuxi prepare` and commits
the result before publishing, the new icon doesn't exist in that release at all — not a stale
copy, genuinely absent — and every such consumer keeps looking exactly like it did before the
change, until a version with the regenerated output ships.

- If your monorepo tool supports input/output caching (Nx, Turborepo), declare the SVG folder
  as input and the generated components folder as output — codegen only re-runs when an icon
  actually changed, but always runs when one does.
- Commit the generated files regardless — CI regenerating them on every build is what keeps
  that commit honest, not a replacement for it.

## If a consuming app is itself Nuxt

Everything above is what a **non-Nuxt** consumer needs — a plain Vue app, Storybook, a design
tool preview. A consuming app that's a Nuxt app doesn't have to go through the UI library's
generated components at all: since `nuxt-compose-icons` is a Nuxt module, that app can install
it directly and point `pathToIcons` straight at the design system's shared SVG source folder,
generating its own auto-imported icon components locally — with its own `iconSizes` if it wants
a different scale than the UI library's default.

The UI-library path is what makes icons usable _everywhere_; a Nuxt app is simply the one
consumer that has a second option, because it can run the module itself.

## Browsing your icons

`component.hasIndexFile` also gives you everything needed for your own icon browser, without the
built-in overview component — genuinely how it's done in production, shown as its own Storybook
story next to the rest of the library:

```vue
<script setup lang="ts">
import * as Icons from './icons';

const icons = Object.entries(Icons);
</script>

<template>
  <component :is="icon" v-for="[name, icon] in icons" :key="name" />
</template>
```
