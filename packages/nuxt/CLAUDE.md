# CLAUDE.md

Guidance for AI agents working in `packages/nuxt`, the published `nuxt-compose-icons`
module. See [`../../CLAUDE.md`](../../CLAUDE.md) for repo-wide commands and conventions.

## Layout

| Path | What |
| --- | --- |
| `src/module.ts` | module entry, option resolution |
| `src/render/parse-and-transform-svg.ts` | SVG parsing and codegen |
| `src/render/codegen-output.ts` | emitted component code (Vue/TS) |
| `src/files-generation/` | writes generated components to `.nuxt` or `component.destDir` |
| `src/utils/svg-processing-cache.ts` | SVG processing cache, keyed on a codegen-pipeline fingerprint |
| `src/runtime/` | code shipped into consumer apps — components, composables, registry, theming utils |
| `playground` | dev harness, loads the module via `../src/module` (not the StackBlitz target — see root CLAUDE.md) |
| `test/e2e` | end-to-end tests (`pnpm test:e2e`) |
| `**/*.unit.spec.ts` | unit tests colocated with source (`pnpm test:unit`) |

## Gotchas

- The SVG processing cache (`utils/svg-processing-cache.ts`) stores *fully
  generated component code*, so its key is fingerprinted against the codegen
  pipeline itself (`computeOptionsHash` runs a fixed probe SVG through
  `createSvgComponentCode`/`optimizeSvg` and hashes the result) — any SVGO or
  codegen change invalidates the cache automatically. Don't bypass this by
  keying the cache on options alone.
- Generated output (icon components, playground/e2e-fixture components,
  `docs/api` typedoc, coverage) must stay out of prettier/stylelint/eslint
  gates and is gitignored — codegen changes never show in a diff, verify them
  on disk instead.
- The icon registry (`registry/`, `useComposeIconsRegistry`) exists only to
  power `<ComposeIconOverview />`'s search — nothing else reads it. Both are
  gated behind the `includeOverview` option, not generated unconditionally.
