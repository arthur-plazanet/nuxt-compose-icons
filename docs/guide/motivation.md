# Motivation

Icon components should be easy to use, style, and maintain.

Existing solutions often force trade-offs between DX, accessibility, and flexibility:

1. **Third-party libraries** → limited customization
2. **Manual Vue components** → repetitive and hard to scale
3. **SVG loaders** → flexible but lack structure and typing

The goal of this module is to propose a balanced approach which gives design flexibility and developer experience.

It dynamically generates Vue components from initial SVG files, naming them accordingly and make them accessible as individual components in the Nuxt project.

## See [Common Approaches](/guide/concept#common-approaches).

Goals:

- **No wrappers** — the root element is always the `<svg>` itself
- **Styling through CSS custom properties** — `fill`, `stroke`, and `stroke-width` are automatically replaced with `var(--...)`, with a fallback to the original SVG value
- **Type-safe and auto-imported** — each icon is a Vue component with a predictable name and full IDE support
- **Build-time generation** — components are created during the build, with no runtime overhead
- **Theming flexibility** — CSS variables allow icons to inherit styles from light/dark themes or scoped tokens

The aim is to combine the control and quality of hand-authored components with the scalability and consistency of a build tool.

## This Module

This module:

- Parses `.svg` files at build time
- Outputs one Vue component per icon
- Rewrites `fill`, `stroke`, etc. using `var(--icon-*, originalValue)`
- Generates predictable component names (`user-badge.svg` → `IconUserBadge`)
- Registers components with Nuxt auto-import
- Supports type inference and autocomplete in templates

```xml
<!-- Input: user-badge.svg -->
<svg fill="#000" stroke="#fff" stroke-width="2">
  <path d="..." />
</svg>
```

```vue
<!-- Output: IconUserBadge.vue -->
<template>
  <svg
    :fill="var(--icon-fill, #000)"
    :stroke="var(--icon-stroke, #fff)"
    :stroke-width="var(--icon-stroke-width, 2)"
  >
    <path d="..." />
  </svg>
</template>
```

This provides a balance of control, flexibility, and developer experience, tailored for projects using custom icons or building design systems.
