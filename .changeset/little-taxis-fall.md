---
'nuxt-compose-icons': patch
---

Fix: useComposeIconTheme()'s configured icon sizes were never actually injected — a Symbol-keyed value returned from a Nuxt plugin's provide never reaches Vue's real provide/inject chain, so iconSizes (renamed from sizes) was always {} regardless of your iconSizes config.
