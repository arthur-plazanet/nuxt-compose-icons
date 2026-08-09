---
'nuxt-compose-icons': minor
---

Theme the root `<svg>` element, and remove the unimplemented `iconComponentList` option

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
