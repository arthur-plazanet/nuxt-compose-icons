---
outline: [2, 3]
order: 4
---

# Icons for a Design System, in a Monorepo

Picture the setup: a shared UI library, consumed by several apps, in a monorepo (Nx, Turborepo,
plain pnpm/yarn workspaces — the tooling doesn't matter here). The UI library owns the icons.
None of the consuming apps should need to know `nuxt-compose-icons` exists at all — they just
import `<UserBadgeIcon />` like any other component from the library.

This is a real, production-tested setup, not a hypothetical — the pattern below has generated
and maintained a full icon set for a UI library used across an Nx monorepo, shown live in that
library's own Storybook. It's also the setup that's hardest to explain from a README alone, so
this page walks through _why_ each piece is there, not just what to paste.

## The core idea

`nuxt-compose-icons` is a Nuxt module — it has no meaning outside a Nuxt app, it can't be
invoked as a standalone CLI. So if your icons live in a plain UI library package (no Nuxt in
sight), you need _something_ to give the module a Nuxt app to run inside.

What can work: a small, dedicated Nuxt app whose only job is to run this module and immediately
exit. Nothing renders, nothing serves traffic — it exists purely so the module's `setup()` hook
runs once and writes files. Where that app lives is up to you: its own package (e.g.
`packages/icons`), a folder inside the UI library itself, or anything in between. The only
requirement is that it can resolve `nuxt-compose-icons` and reach your SVG source files.

It's worth saying plainly: **the module itself is what writes the generated components.** There's
no separate build script parsing SVGs — running the Nuxt app _is_ the codegen step, because
that's what `nuxt-compose-icons`'s `setup()` does on every `nuxi prepare`/`build`/`dev`.

## Pointing it at another package

Once you have a Nuxt app (even a `playground/` folder with nothing but a `nuxt.config.ts`),
point it at your UI library across the monorepo with plain relative paths — no publishing, no
`node_modules`, just the filesystem:

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
    // Map straight to your own design tokens — any valid CSS value works, not just literal sizes.
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

**Why `fileURLToPath(new URL('...', import.meta.url))`** instead of a plain string: this config
file is ESM, and ESM modules don't have `__dirname`. `import.meta.url` is the one thing that's
always correct — the URL of _this file_, wherever it's actually located on disk. Resolving
`pathToIcons`/`destDir` relative to that (rather than relative to `process.cwd()`) means the
config keeps working no matter where the command is invoked from — your machine, a teammate's,
or a CI runner with a different working directory. This is the detail that trips people up most:
a relative path that "worked on my machine" because it happened to match your cwd, then silently
resolves to the wrong place — or nowhere — in CI.

## Wiring it into CI/CD

This is the part that's easy to get wrong in practice: generating the icons **once, locally, and
committing the output** is necessary but not sufficient. If that's the _only_ time it runs, the
generated components drift the moment someone adds an SVG and forgets to regenerate, or
regenerates with a different locally-installed version of the module than CI would use.

Treat icon generation as a real build step in your UI library's pipeline, not a manual chore:

- Wire the Nuxt app's `nuxi prepare` (or `build`) into a script your task runner invokes before
  the UI library builds — e.g. a `prepare-icons` script that the library's own `build` target
  depends on.
- If your monorepo tool supports declaring inputs/outputs for caching (Nx, Turborepo, etc.),
  declare the SVG source folder as the input and the generated components folder as the output.
  That gets you the best of both: CI only re-runs codegen when an icon actually changed, but it
  _always_ runs when one does — never silently stale.
- Still commit the generated files. They're real source for the UI library from that point on
  (reviewable in PRs, versioned with the rest of the library) — CI regenerating them on every
  relevant change is what keeps that committed output honest, not a replacement for committing it.

## Browsing your icons

`component.hasIndexFile` also gives you everything needed for your own icon browser, without the
built-in overview component — this is genuinely how it's done in production, not a theoretical
example, shown as its own Storybook story next to the rest of the library's components:

```vue
<script setup lang="ts">
import * as Icons from './icons';

const icons = Object.entries(Icons);
</script>

<template>
  <component :is="icon" v-for="[name, icon] in icons" :key="name" />
</template>
```
