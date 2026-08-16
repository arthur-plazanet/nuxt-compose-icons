---
'nuxt-compose-icons': minor
---

Tie the icon registry to `includeOverview` instead of generating it unconditionally.

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
