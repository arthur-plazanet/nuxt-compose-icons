---
title: Composables
description: Reference for useComposeIcon and useComposeIconTheme, the composables auto-imported by nuxt-compose-icons.
outline: [2, 3]
order: 0
---

# Composables

Two composables are auto-imported by default (`includeComposables: true`) — `useComposeIcon`
composes the reactive styles/classes every generated component uses internally, and
`useComposeIconTheme` gives you read-only access to the configured size scale. Disable
auto-import for both via:

```ts
composeIcons: {
  includeComposables: false,
}
```

## useComposeIcon

A helper composable for accessing icon theming logic in your app, using CSS Custom Properties (`--icon-fill`, `--icon-stroke`, `--icon-stroke-width`) and returning reactive bindings ready to be used in your components.

This utility can be useful when you want to apply icon-related styles manually, and is used internally by all generated icon components.

- Customizable **color**, **stroke**, and **fill** values.
- Consistent **size scaling** via a design system.
- CSS-driven theming support using variables.

---

You can use `useComposeIcon` in any component that uses design tokens or dynamic CSS variables.

### Usage

1. Bind the reactive styles and classes directly, for a custom element that isn't a generated icon component:

```vue
<script setup lang="ts">
import { useComposeIcon } from 'nuxt-compose-icons';

const { iconStyles, iconClasses } = useComposeIcon(props);
</script>

<template>
  <!-- Will use the styles and classes defined in the icon theme -->
  <span :style="iconStyles" :class="iconClasses">
    <slot />
  </span>
</template>
```

2. Directly use the `buildSvgAttributes` method used to generate the attributes for the icon components:

```vue
<script setup lang="ts">
import { useComposeIcon } from 'nuxt-compose-icons';

const { buildSvgAttributes } = useComposeIcon(props);
</script>

<template>
  <span v-bind="buildSvgAttributes({ class: 'badge' })"><slot /></span>
</template>

<style scoped>
.badge {
  background: var(--icon-fill, var(--badge-bg, #eee));
  color: var(--icon-stroke, var(--badge-fg, #111));
  border-radius: var(--badge-radius, 6px);
  padding: 0.25rem 0.5rem;
}
</style>
```

Type definition:

Parameters

```ts
interface ComposeIconProps {
  color?: string;
  stroke?: string;
  strokeWidth?: string | number;
  fill?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
```

| Name          | Type                                   | Description                                                          |
| ------------- | -------------------------------------- | -------------------------------------------------------------------- |
| `color`       | `string`                               | The color of the icon, defaults to `var(--icon-fill)`                |
| `stroke`      | `string`                               | The stroke color of the icon, defaults to `var(--icon-stroke)`       |
| `strokeWidth` | `string \| number`                     | The stroke width of the icon, defaults to `var(--icon-stroke-width)` |
| `fill`        | `string`                               | The fill color of the icon, defaults to `var(--icon-fill)`           |
| `size`        | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | The size of the icon, defaults to `md`                               |

Returns

```ts
interface UseComposeIcon {
  iconStyles: ComputedRef<StyleValue>;
  iconClasses: ComputedRef<ClassValue[]>;
  buildSvgAttributes: (svgAttributes?: SVGAttributes) => SVGAttributes & {
    style: StyleValue;
    class: ClassValue;
  };
}
```

| Name                 | Type                        | Description                                                                                                                                  |
| -------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `iconStyles`         | `ComputedRef<StyleValue>`   | Reactive styles with CSS custom properties for color, stroke, size — bind directly (`:style="iconStyles"`), Vue unwraps the ref in templates |
| `iconClasses`        | `ComputedRef<ClassValue[]>` | Reactive classes including `compose-icon` and the size class                                                                                 |
| `buildSvgAttributes` | `(svgAttributes?) => attrs` | Merges static SVG attributes with reactive style and class bindings                                                                          |

## useComposeIconTheme

Read-only access to the module's **configured size scale** — the `iconSizes` map merged with
the built-in defaults. Useful when you need to reference a size outside of a generated icon
component, e.g. to build a size-picker UI or align a non-icon element to the same scale.

This is purely a size-token accessor, not a general theming API — colors and stroke are
controlled by the CSS variables in [Theming](/utilities/theming), not by this composable.

### Usage

```vue
<script setup lang="ts">
import { useComposeIconTheme } from 'nuxt-compose-icons';

const { iconSizes, sizeVar, currentSizeVar } = useComposeIconTheme();

Object.keys(iconSizes); // ['sm', 'md', 'lg', 'hero'] — from your config
sizeVar('lg'); // 'var(--size-lg)' — align any element to a named size
currentSizeVar; // 'var(--icon-size)' — whatever the nearest icon has in the cascade
</script>
```

Takes no parameters.

Returns

```ts
interface UseComposeIconTheme {
  iconSizes: Record<string, string>;
  sizeVar: (size: string) => string;
  currentSizeVar: 'var(--icon-size)';
}
```

| Name             | Type                       | Description                                                                      |
| ---------------- | -------------------------- | -------------------------------------------------------------------------------- |
| `iconSizes`      | `Record<string, string>`   | All configured size keys and their resolved CSS values                           |
| `sizeVar`        | `(size: string) => string` | Returns the CSS var reference for a given size key (`'lg'` → `'var(--size-lg)'`) |
| `currentSizeVar` | `'var(--icon-size)'`       | CSS var for the size currently applied to the nearest icon in the cascade        |
