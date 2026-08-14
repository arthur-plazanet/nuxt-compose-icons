# CLAUDE.md

Guidance for AI agents working in this repository. Human contributors should
start with [CONTRIBUTING.md](./CONTRIBUTING.md); this file only covers what is
non-obvious from the code.

`nuxt-compose-icons` is a Nuxt module that turns SVG files into Vue icon
components at build time. pnpm workspace, published package lives in
`packages/nuxt` — see [`packages/nuxt/CLAUDE.md`](./packages/nuxt/CLAUDE.md)
for that package's internals.

## Commands

```bash
pnpm dev            # playground
pnpm showcase       # examples/runtime-showcase
pnpm docs:dev       # VitePress docs site
pnpm test:unit      # vitest --project unit
pnpm test:e2e       # vitest --project e2e
pnpm lint           # eslint
pnpm lint:style     # stylelint
pnpm format:check   # prettier --check (CI runs the check, not --write)
pnpm prepack        # build the module
```

`pnpm dev` and `pnpm showcase` both hardcode `PORT=3008`, so running them at the
same time makes one fall back to a random free port. Read the actual URL from
the output rather than assuming 3008.

## Layout

| Path | What |
| --- | --- |
| `packages/nuxt/` | the published module — see its own CLAUDE.md |
| `docs/` | VitePress docs site (guide, utilities, typedoc-generated API reference) |
| `packages/nuxt/playground` | dev playground, loads the module via `../src/module` |
| `examples/runtime-showcase` | standalone example, the StackBlitz target |

## Invariants

Deliberate design decisions — do not "simplify" these:

- **Two output modes** (`.nuxt` default and `component.destDir`) are both
  first-class. Do not collapse them into one.
- **Icons auto-import in both modes** — `addComponent` is unconditional.
- **The root `<svg>` is the CSS-variable provider.** Attributes on it are
  intentionally routed through the same transform as child nodes.
- **`examples/runtime-showcase` resolves `nuxt-compose-icons` from npm, never
  `workspace:*`.** Its StackBlitz link imports that subfolder standalone, so a
  workspace protocol would break it. Bump the pinned version *after* publishing,
  never before.
- **The playground cannot be the StackBlitz target** — it loads the module via
  `../src/module`, a path outside the folder StackBlitz imports.

## Conventions

- Branch from `dev` as `feature/<name>`; PRs target `dev`.
- Releases go through changesets — add a changeset for any user-facing change.
- Commits by an AI agent carry a `Co-Authored-By:` trailer.
