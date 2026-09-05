<template>
  <div>simple</div>
  <ArrowUpIcon />
  <div>subpaths:{{ subpathExports }}</div>
  <div>sizeKeys:{{ sizeKeys }}</div>
</template>

<script setup lang="ts">
// Regression guard for #431: `nuxt-compose-icons/composables` is a declared export subpath
// and must resolve on the *default* config, not just when the module's own generated
// components import it directly.
//
// Aliased on import so these resolve through the export map rather than the auto-imports.
import {
  useComposeIcon as barrelUseComposeIcon,
  useComposeIconTheme as barrelUseComposeIconTheme,
} from 'nuxt-compose-icons/composables';

// Imported straight from source rather than the auto-import or the barrel above: this fixture
// loads the module itself via a relative `../../../../src/module` path (not the published
// package), so only this same source-relative import shares the one real provide/inject
// instance with it — the barrel import resolves through `dist/`, a separate module instance.
import { useComposeIconTheme } from '../../../../src/runtime/composables/use-compose-icon-theme';

const subpathExports = [barrelUseComposeIcon, barrelUseComposeIconTheme]
  .map((exported) => typeof exported)
  .join(',');

// Regression guard: provide-sizes.ts bridges module.ts's runtimeConfig into this composable
// via provide/inject. A Symbol-keyed plugin `provide` silently never reaches Vue's actual
// provide/inject chain (Nuxt's own plugin-level `provide` only walks string keys via
// `for...in`), so this always injected {} regardless of config — masked only by
// `resolveDefaultSizeKey({})` coincidentally still returning 'md'. Asserting the real key
// count here is the only way to catch that class of bug instead of it hiding behind the
// fallback.
const { iconSizes } = useComposeIconTheme();
const sizeKeys = Object.keys(iconSizes).sort().join(',');
</script>
