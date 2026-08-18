---
'nuxt-compose-icons': patch
---

Fix a regression in 0.11.0 that broke builds for consumers with `includeOverview: false` (the default). Generated icon components imported `useComposeIcon` from the `nuxt-compose-icons/composables` barrel, which also re-exports `useComposeIconRegistry` — a composable that statically imports `#compose-icons/registry`, an alias only set when `includeOverview` is on. Generated components now import `useComposeIcon` from its own submodule instead, so they no longer pull in the registry composable transitively.
