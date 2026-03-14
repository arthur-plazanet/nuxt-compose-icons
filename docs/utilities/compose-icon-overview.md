---
outline: [2, 3]
---

# ComposeIconOverview

A built-in component that renders a searchable, live-filtered grid of all icons registered in your app. Auto-imported by the module — no setup required.

---

## Usage

Drop it anywhere in your app:

```vue
<ComposeIconOverview />
```

With props:

```vue
<!-- large icons, no labels -->
<ComposeIconOverview size="lg" :show-names="false" />

<!-- tinted grid -->
<ComposeIconOverview size="md" color="blue" stroke="currentColor" />
```

---

## Props

All props are optional.

| Prop          | Type               | Default | Description                                          |
| ------------- | ------------------ | ------- | ---------------------------------------------------- |
| `showNames`   | `boolean`          | `true`  | Show the icon name below each icon                   |
| `size`        | `string`           | —       | Size passed to every icon (`xs` `sm` `md` `lg` `xl`) |
| `color`       | `string`           | —       | Sets `--icon-color` on every icon                    |
| `stroke`      | `string`           | —       | Sets `--icon-stroke` on every icon                   |
| `fill`        | `string`           | —       | Sets `--icon-fill` on every icon                     |
| `strokeWidth` | `string \| number` | —       | Sets `--icon-stroke-width` on every icon             |

---

## How it works

- Uses `useComposeIconRegistry()` internally to access the icon list
- The search input is bound to a `ref` passed to `filteredIcons()`, which returns a reactive `computed` — no manual watchers needed
- Each icon is rendered as `<Component :is="icon.pascalName" />`, resolving the globally registered component by name
- `iconProps` forwards all props except `showNames` down to each individual icon

---

## Composable alternative

If you need just the data without the UI, use `useComposeIconRegistry` directly:

```vue
<script setup lang="ts">
import { ref } from 'vue';

const { filteredIcons, searchIcons, icons } = useComposeIconRegistry();

// reactive — updates automatically when q changes
const q = ref('');
const filtered = filteredIcons(q);

// plain — returns an array directly
const results = searchIcons('arrow');
</script>
```

See [useComposeIconRegistry](/utilities/use-compose-icons-registry) for the full API.
