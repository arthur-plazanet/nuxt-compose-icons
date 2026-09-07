---
outline: [2, 3]
order: 3
---

# Configuration

All options are passed under the `composeIcons` key in your `nuxt.config.ts`.

## Minimal setup

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-compose-icons'],
  composeIcons: {
    pathToIcons: './assets/icons', // path to your SVG icons directory
  },
});
```

That's it. Every `.svg` in `./assets/icons` becomes a typed, auto-imported Vue component — `arrow-up.svg` → `<ArrowUpIcon />`.

## Options

| Option                   | Type                     | Default               | Description                                                                             |
| ------------------------ | ------------------------ | --------------------- | --------------------------------------------------------------------------------------- |
| `pathToIcons`            | `string`                 | —                     | **Required.** Path to your `.svg` directory.                                            |
| `component.suffix`       | `string`                 | `'Icon'`              | Appended to the component name.                                                         |
| `component.prefix`       | `string`                 | `undefined`           | Prepended to the component name.                                                        |
| `component.case`         | `'pascal' \| 'kebab'`    | `'pascal'`            | Naming convention for generated components.                                             |
| `component.destDir`      | `string`                 | `.nuxt/compose-icons` | Where generated components are written. Default in the `.nuxt` folder (non-persistent). |
| `component.fileFormat`   | `'ts' \| 'vue'`          | `'ts'`                | Output format. `.ts` recommended.                                                       |
| `component.hasIndexFile` | `boolean`                | `false`               | Write an `index.ts` barrel file in `destDir`.                                           |
| `component.iconClasses`  | `string \| string[]`     | `[]`                  | Extra CSS classes on every icon.                                                        |
| `iconSizes`              | `Record<string, string>` | `{ sm, md, lg, xl }`  | CSS size variables and classes. **Replaces** the defaults entirely when set.            |
| `defaultSize`            | `string`                 | `'md'` if present     | Size key used when no `size` prop is passed.                                            |
| `includeComposables`     | `boolean`                | `true`                | Auto-imports `useComposeIcon` and `useComposeIconTheme`.                                |

---

### `pathToIcons`

- **Type:** `string`
- **Required**
- Path to the directory containing your `.svg` files. The module scans it recursively.

### `component`

Groups all options related to how components are generated and where they are written.

#### `component.suffix`

- **Type:** `string`
- **Default:** `'Icon'`
- Appended to the component name. `arrow-up.svg` + `suffix: 'Icon'` → `<ArrowUpIcon />`.

#### `component.prefix`

- **Type:** `string`
- **Default:** `undefined`
- Prepended to the component name. `prefix: 'My'` → `<MyArrowUpIcon />`.

#### `component.case`

- **Type:** `'pascal' | 'kebab'`
- **Default:** `'pascal'`
- Naming convention. `'pascal'` → `<ArrowUpIcon />`, `'kebab'` → `<arrow-up-icon />`.

#### `component.destDir`

- **Type:** `string`
- **Default:** `.nuxt/compose-icons`
- Where generated components are written. Set to a path inside your app directory to commit them to your codebase.
- A `compose-icons.css` file is also written to this directory, combining the base theming rules with your project's actual `iconSizes` — everything a generated component needs to render and theme correctly. This is what makes the components portable: commit both the `.vue`/`.ts` files and this CSS file, and a downstream consumer (e.g. a UI library shipping these icons to other apps) gets full theming by importing that one CSS file — no `nuxt-compose-icons` dependency required on their side.

#### `component.fileFormat`

- **Type:** `'ts' | 'vue'`
- **Default:** `'ts'`
- Output format for generated component files. `.ts` is recommended — `.vue` can cause issues with Nitro/Rollup during SSR builds.

#### `component.hasIndexFile`

- **Type:** `boolean`
- **Default:** `false`
- Write an `index.ts` barrel file in `destDir` that re-exports all generated components — combined with `component.destDir` and the `compose-icons.css` file described above, this gives a downstream consumer a single import for the whole icon set plus its theming.

#### `component.iconClasses`

- **Type:** `string | string[]`
- **Default:** `[]`
- Extra CSS classes added to every generated icon component. The `compose-icon` base class is always included automatically.

### `iconSizes`

- **Type:** `Record<string, string>`
- **Default:**

```ts
{ sm: '1.5rem', md: '2rem', lg: '3rem', xl: '4rem' }
```

Setting `iconSizes` **fully replaces** the defaults — it's your whole scale, not a patch on top
of it. Leave it out entirely to keep the defaults unchanged; there's no way to override just one
default key while keeping the rest.

```ts
composeIcons: {
  // sm/md/lg/xl from the defaults no longer exist — only these three do
  iconSizes: {
    small: '8px',
    medium: '16px',
    large: '32px',
  },
}
```

Generates `--size-*` CSS variables and matching size classes, ordered by real size regardless of
declaration order. A CSS file is automatically injected into the build.

### `defaultSize`

- **Type:** `string`
- **Default:** `'md'` if present in the resolved sizes, otherwise the first configured key

The size key used when no `size` prop is passed to a generated component or `useComposeIcon`.
Mainly useful once `iconSizes` replaces the defaults with a scale that has no `md` key:

```ts
composeIcons: {
  iconSizes: { small: '8px', medium: '16px', large: '32px' },
  defaultSize: 'medium',
}
```

If `defaultSize` doesn't name a key that actually exists in the resolved sizes, the module logs
a warning and falls back to `'md'`, then the first configured key.

### `includeComposables`

- **Type:** `boolean`
- **Default:** `true`
- Auto-imports [`useComposeIcon`](/utilities/use-compose-icon) and [`useComposeIconTheme`](/utilities/use-compose-icon#usecomposeicontheme). Set to `false` if you only use the generated components and don't need these directly.

---

## Advanced options

These rarely need to be changed.

| Option         | Type      | Default                                  | Description                                                  |
| -------------- | --------- | ---------------------------------------- | ------------------------------------------------------------ |
| `dryRun`       | `boolean` | `false`                                  | Log what would be generated without writing any files        |
| `reRunOnBuild` | `boolean` | `false`                                  | Re-generate icons on every build, bypassing the cache        |
| `debug`        | `boolean` | `false`                                  | Show per-component generation logs during setup              |
| `cacheDir`     | `string`  | `node_modules/.cache/nuxt-compose-icons` | SVG processing cache — speeds up rebuilds, safe to gitignore |

---

### `dryRun`

- **Type:** `boolean`
- **Default:** `false`
- Log component names without writing any files. Useful to preview what will be generated.

### `reRunOnBuild`

- **Type:** `boolean`
- **Default:** `false`
- Re-generate every icon on each build, bypassing the SVG processing cache. Leave it off unless you suspect a stale cache — unchanged SVGs are skipped automatically.

### `debug`

- **Type:** `boolean`
- **Default:** `false`
- Show per-component generation logs during setup.

### `cacheDir`

- **Type:** `string`
- **Default:** `node_modules/.cache/nuxt-compose-icons`
- Directory used to persist the SVG processing cache across builds. Resolved relative to your project root. Safe to gitignore.

```ts
// nuxt.config.ts — example with advanced options
 composeIcons: {
   pathToIcons: './assets/icons',
   component: {
     fileFormat: 'ts',
     hasIndexFile: true,
   },
   reRunOnBuild: false,
   debug: true,
   cacheDir: './.icon-cache',
 }
```

---

## CSS integration

The module injects two CSS files at build time:

- `compose-icon-sizes.css` — generated from given `iconSizes` config, exposes `--icon-size-{key}` variables
- `compose-icon-base.css` — base styles shared across all icon components

Both can be overridden with your own CSS variables or theming layer.
