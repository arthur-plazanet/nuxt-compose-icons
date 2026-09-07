# nuxt-compose-icons

## 0.11.3

### Patch Changes

- 2c1efc1: Fix runtime config using defu

## 0.11.2

### Patch Changes

- 59ce343: Fix: useComposeIconTheme()'s configured icon sizes were never actually injected — a Symbol-keyed value returned from a Nuxt plugin's provide never reaches Vue's real provide/inject chain, so iconSizes (renamed from sizes) was always {} regardless of your iconSizes config.

## 0.11.1

### Patch Changes

- bcea0b2: Fix a regression in 0.11.0 that broke builds for consumers with `includeOverview: false` (the default). Generated icon components imported `useComposeIcon` from the `nuxt-compose-icons/composables` barrel, which also re-exports `useComposeIconRegistry` — a composable that statically imports `#compose-icons/registry`, an alias only set when `includeOverview` is on. Generated components now import `useComposeIcon` from its own submodule instead, so they no longer pull in the registry composable transitively.

## 0.11.0

### Minor Changes

- 64d6203: Fix docs and module structure pre-release 1.0.0
- ca0de58: Tie the icon registry to `includeOverview` instead of generating it unconditionally.

  The registry (`#compose-icons/registry`, `useComposeIconRegistry`) exists solely to power
  `<ComposeIconOverview />`'s search — nothing else reads it. It was previously generated on
  every build and `useComposeIconRegistry` auto-imported whenever `includeComposables` was on,
  regardless of whether the overview component was even registered.

  Both now live behind `includeOverview`: the registry file and `#compose-icons/registry`
  alias are only created when it's `true`, and `useComposeIconRegistry` is only auto-imported
  then (still additionally gated by `includeComposables`, same as before).

  **Behavior change under default options** (`includeOverview: false`, `includeComposables:
true`): `useComposeIconRegistry` is no longer auto-imported, and importing it directly from
  `nuxt-compose-icons/composables` will fail to resolve `#compose-icons/registry`. Set
  `includeOverview: true` to get it back — you'll also want that if you're using the registry
  data outside the built-in overview component.

  `includeComposables` now only covers `useComposeIcon` and `useComposeIconTheme`; both are
  independently useful outside the overview, so their behavior is unchanged.

## 0.10.1

### Patch Changes

- af8ba0d: Bump `svgo` to 4.0.2, patching GHSA-2p49-hgcm-8545 (`removeScripts` plugin leaves
  some executable scripts intact under namespaced/prefixed `<script>` tags or
  mixed-case `javascript:` URIs). The module never enables `removeScripts`, so this
  wasn't exploitable through our own optimization pipeline — bumping anyway to clear
  the advisory flagged by Socket for the published package's dependency tree.

## 0.10.0

### Minor Changes

- dfff1eb: Theme the root `<svg>` element, and remove the unimplemented `iconComponentList` option

  **Root-element theming.** Attributes on the root `<svg>` were returned untouched, so an
  icon that painted on the root — rather than on a child — kept its literal `fill` /
  `stroke` / `stroke-width`. Nothing consumed `--icon-fill`, and the matching props
  silently did nothing on those icons. Root attributes now go through the same transform
  as children. Rendering is unchanged until a paint prop is explicitly set: an
  `<svg fill="none">` becomes `var(--icon-fill, none)` and keeps its original default.

  **The SVG cache now invalidates when the generator changes.** The cache stores fully
  generated component code, but its key covered only the SVG contents and the naming
  options — so upgrading the module while a warm cache was present kept serving component
  code built by the previous version. The key now includes a fingerprint of the codegen
  pipeline itself, computed by running a fixed probe SVG through it. Without this, the
  root-element theming fix above would not have reached anyone with an existing cache.

  **`iconSizes` now merges consistently again (regression from 0.9.0).** 0.9.0 changed the
  runtime config to treat `iconSizes` as the complete set, while the generated CSS kept
  merging it over the defaults. Combined with the first-key default size introduced in the
  same release, a partial config such as `iconSizes: { huge: '100px' }` emitted five size
  classes but exposed one to the composables, making every unsized icon render at `huge`.
  Both paths merge over the defaults again, which also guarantees the `md` key the
  generated components fall back to always exists.

  **`iconComponentList` removed.** It was declared in the module options and documented,
  but was never implemented — passing it had no effect. It is gone from the public option
  type and from the docs. Registering existing Vue components as icons remains on the
  roadmap.

  Also fixes a stale documentation URL referenced in the module source comments.

## 0.9.0

### Minor Changes

- 4d649f0: Rework `<ComposeIconOverview />` into a searchable icon grid, and derive the
  default icon size from the configured `iconSizes` instead of a hardcoded `md`.
  Also updates the playground and README for the StackBlitz example.

  > This entry was written after the fact — the original read "Stackblitz 0.0.12",
  > which did not describe the release. The published 0.9.0 artifact is unchanged.
  >
  > Note: this release also began treating `iconSizes` as the complete set rather than
  > merging it over the defaults. Combined with the new first-key default above, that
  > made every unsized icon render at whichever size key was listed first. Fixed in 0.10.0.

## 0.8.0

### Minor Changes

- 96d74ac: Optimize package / bundle size
- 25ebe67: Runtime playground showcase

## 0.7.0

### Minor Changes

- 95dcf53: Clean-up and readability fixes

## 0.6.9

### Patch Changes

- 42c8ba8: Fix link between classes icon sizes

## 0.6.8

### Patch Changes

- 52a406e: LightningCSS support and remove hard coded CSS sizes from dist + update docs

## 0.6.7

### Patch Changes

- cdec883: Fix index

## 0.6.6

### Patch Changes

- c397372: Fix registry export

## 0.6.5

### Patch Changes

- f2e7a93: addTemplate for components

## 0.6.4

### Patch Changes

- 898732e: Nitro SPA/SSR alias

## 0.6.3

### Patch Changes

- 79ef08a: Fix props

## 0.6.2

### Patch Changes

- 2cee867: .ts as default

## 0.6.1

### Patch Changes

- 9cd2383: Fix registry import

## 0.6.0

### Minor Changes

- b28815b: - Custom base class
  - Fix absolute import in registry when not using local directory
  - Docs

## 0.5.2

### Patch Changes

- 31db502: Icon registry with relative paths

## 0.5.1

### Patch Changes

- 5361e5e: Fix tests

## 0.5.0

### Minor Changes

- 02906fc: Custom CSS class - meant to be stable release

## 0.4.6

### Patch Changes

- d0ceb35: TT

## 0.4.5

### Patch Changes

- 4d7c3d1: Test

## 0.4.4

### Patch Changes

- 87a4c7d: Test without prepare heavy script and prepare command

## 0.4.3

### Patch Changes

- 0537c57: Fix prepare script

## 0.4.2

### Patch Changes

- 7df89c1: Fix releases

## 0.4.1

### Patch Changes

- 74e8797: Test to get all runtime directory

## 0.4.0

### Minor Changes

- 8da9bb6: Fix dist being a fully built app instead of stub

## 0.3.0

### Minor Changes

- 465c28d: Sync tests to cover showcase and fix docs responsive Home

## 0.2.15

### Patch Changes

- 1135006: sqd

## 0.2.14

### Patch Changes

- 5e58cf6: Test tag #345

## 0.2.13

### Patch Changes

- a07e702: Test for a tag

## 0.2.12

### Patch Changes

- 05ee9fc: Fix

## 0.2.11

### Patch Changes

- fix-css-file-and-consistent-icon-registry

## 0.2.10

### Patch Changes

- Test

## 0.0.0-20260302192951

### Patch Changes

- Test if tags
- bf00ac4: Update CSS virtual file
- d512094: Test update config

## 0.0.0-20260301020143

### Patch Changes

- Fix icon registry

## 0.0.0-20260301015331

### Patch Changes

- bf00ac4: Update CSS virtual file
- d512094: Test update config

## 0.2.6

### Patch Changes

- Update CSS virtual file

## 0.2.5

### Patch Changes

- 4394484: Allow dynamic number of icon sizes to be configurable

## 0.2.4

### Patch Changes

- d4a3778: Allow dynamic number of icon sizes to be configurable

## 0.2.3

### Patch Changes

- 038745a: Allow dynamic number of icon sizes to be configurable

## 0.2.2

### Patch Changes

- e835610: Remove explicit type template

## 0.2.1

### Patch Changes

- 1e04014: Remove unused import in component generation

## 0.2.0

### Minor Changes

- 8af99dc: Icon registry and more robust registration of icon components

### Patch Changes

- f50cade: WIP with componentsDestDir

## 0.1.1

### Patch Changes

- cf0505d: Trigger changeset

## 0.1.0

### Minor Changes

- d463490: Migrate/support Nuxt 4

## 0.0.5

### Patch Changes

- f92ef30: Fix release using Changeset instead of manual

## 0.0.4

### Patch Changes

- e450e93: Changeset setup
