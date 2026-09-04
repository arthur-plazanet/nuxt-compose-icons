# CLAUDE.md

Guidance for AI agents working in `packages/nuxt`, the published `nuxt-compose-icons`
module. See [`../../CLAUDE.md`](../../CLAUDE.md) for repo-wide commands and conventions.

## Layout

| Path                                    | What                                                                                               |
| --------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `src/module.ts`                         | module entry, option resolution                                                                    |
| `src/render/parse-and-transform-svg.ts` | SVG parsing and codegen                                                                            |
| `src/render/svg-codegen.ts`             | emitted component code (Vue/TS)                                                                    |
| `src/files-generation/`                 | writes generated components to `.nuxt` or `component.destDir`                                      |
| `src/utils/svg-processing-cache.ts`     | SVG processing cache, keyed on a codegen-pipeline fingerprint                                      |
| `src/runtime/`                          | code shipped into consumer apps — composables, theming utils, provide-sizes plugin                 |
| `playground`                            | dev harness, loads the module via `../src/module` (not the StackBlitz target — see root CLAUDE.md) |
| `test/e2e`                              | end-to-end tests (`pnpm test:e2e`)                                                                 |
| `**/*.unit.spec.ts`                     | unit tests colocated with source (`pnpm test:unit`)                                                |

## Gotchas

- The SVG processing cache (`utils/svg-processing-cache.ts`) stores _fully
  generated component code_, so its key is fingerprinted against the codegen
  pipeline itself (`computeOptionsHash` runs a fixed probe SVG through
  `createSvgComponentCode`/`optimizeSvg` and hashes the result) — any SVGO or
  codegen change invalidates the cache automatically. Don't bypass this by
  keying the cache on options alone.
- **The fingerprint is only as sensitive as the probe.** `CODEGEN_PROBE_SVG`
  must contain a feature for every transform the pipeline performs, or that
  transform ships without invalidating warm caches. Adding a transform means
  adding a matching feature to the probe.
- SVGs are inlined into one document, so a duplicate `id` across two icons
  makes `url(#…)` resolve to whichever rendered first. Not namespaced today —
  deliberately deferred as opt-in future work (#437) rather than an
  always-on transform, since neither real icon set in this repo has ever hit
  it. Figma exports carry unique per-node suffixes; Illustrator/Sketch don't.
- SVGO runs **single-pass on purpose**. Measured over the 74-icon showcase set,
  `multipass` saved 0 bytes on every icon (it only reorders attributes) for
  ~120% more time. Re-measure before re-enabling.
- Generated output (icon components, playground/e2e-fixture components,
  `docs/api` typedoc, coverage) must stay out of prettier/stylelint/eslint
  gates and is gitignored — codegen changes never show in a diff, verify them
  on disk instead.
- The icon registry, `<ComposeIconOverview />`, and `includeOverview` were
  removed entirely — their only real consumer was one bundled search
  component that any project can replicate in a few lines by iterating the
  `component.hasIndexFile` barrel (see `docs/utilities/use-compose-icon.md`
  and the runtime-showcase example's home page). Removing them also
  eliminated the `#compose-icons/registry` alias and the
  `optimizeDeps.exclude`/`build.transpile`/`nitro.externals.inline` workaround
  in `module.ts` that existed solely to keep that alias resolvable (#431).
  Don't reintroduce a registry-shaped feature without re-deriving whether
  that whole alias mechanism is needed again.
- `readDirectoryRecursively` (`utils/filesystem/read-directory-recursively.ts`) checks
  `Dirent.isDirectory()`, which never resolves symlinks — a symlinked subdirectory under
  `pathToIcons` is silently skipped, not traversed. Known and deliberately left as-is (#439):
  the realistic trigger (a workspace package symlinked under `node_modules`) doesn't fit how
  a monorepo would actually want to version shared icons. Don't add symlink-following back
  without a real report.
- Every generated component depends on `runtime/plugins/provide-sizes.ts`
  (registered via `addPlugin`) for its default size — it bridges
  `runtimeConfig.public.composeIcons.sizes` to plain Vue `provide`/`inject`
  (`SIZES_INJECTION_KEY`). This is deliberate: `useComposeIconTheme` used to
  import `useRuntimeConfig` from `nuxt/app` directly, which fails to even
  _resolve_ outside a real Nuxt build (`#build/nuxt.config.mjs` is a virtual
  module) — breaking every non-Nuxt consumer of the generated components
  (VitePress, Storybook, a plain Vue app). `inject(key, {})` degrades
  gracefully instead. Don't reintroduce a direct `nuxt/app` import in any
  composable a generated component calls.
