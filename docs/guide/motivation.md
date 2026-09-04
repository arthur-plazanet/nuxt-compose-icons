# Motivation

Icon components should be easy to use, style, and maintain.

Existing solutions often force trade-offs between DX, accessibility, and flexibility (See [Common Approaches](/guide/concept#common-approaches)):

1. **Third-party libraries** → limited customization
2. **Manual Vue components** → repetitive and hard to scale
3. **SVG loaders** → flexible but lack structure and typing

The goal of this module is to propose a balanced approach which gives design flexibility and developer experience.

The aim is to combine the control and quality of hand-authored components with the scalability and consistency of a build tool.

<!--
Goals:

- **No wrappers** — the root element is always the `<svg>` itself
- **Styling through CSS custom properties** — `fill`, `stroke`, and `stroke-width` are automatically replaced with `var(--...)`, with a fallback to the original SVG value
- **Type-safe and auto-imported** — each icon is a Vue component with a predictable name and full IDE support
- **Build-time generation** — SVG parsing and optimization happen once at build time, not on every render
- **Theming flexibility** — CSS variables allow icons to inherit styles from light/dark themes or scoped tokens -->

## This Module

This module dynamically generates Vue components from initial SVG files, naming them accordingly and making them accessible as individual components in the Nuxt project.

- Parses `.svg` files at build time
- Outputs one individual and directly accessible Vue component per icon
- Rewrites `fill`, `stroke`, etc. using `var(--fill-*, originalValue)`
- Generates predictable component names (`user-badge.svg` → `IconUserBadge`) based on configuration
- Registers components in Nuxt automatically
- Supports type inference and autocomplete in templates
- Allow versioning (if configured to) as well as usage of the generated components in non-Nuxt Apps.

## Example

:::code-group

```xml [user-badge.svg]
<svg viewBox="0 0 24 24" <!-- other attributes...--> >
  <path d="..." fill="#000" stroke="#fff" stroke-width="2" />
</svg>
```

:::

**will generate:**

:::code-group

```vue [UserBadgeIcon.vue]
<template>
  <svg viewBox="0 0 24 24" class="my-custom-icon-class compose-icon size-lg">
    <path
      d="..."
      fill="var(--icon-fill, #000)"
      stroke="var(--icon-stroke, #fff)"
      stroke-width="var(--icon-stroke-width, 2)"
    />
  </svg>
</template>
```

:::

This provides a balance of control, flexibility, and developer experience, tailored for projects using custom icons or building design systems.
