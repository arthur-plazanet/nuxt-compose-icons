---
outline: [2, 3]
order: 1
---

# Features

From SVG files to Vue Components that you own.

## Build-time SVG to Vue Component:

- One Vue component is created per `.svg` file
- Use of the initial name of the icon, converted to PascalCase or snake-case with optional prefix and suffix.
  Example `user-badge.svg` can give:
  - `<IconUserBadge />`
  - `<UserBadgeIcon />`
  - `<user-badge />`
- Optional support for folder-based namespacing - icon Components can directly be generated in your codebase, making versioning possible

## Auto-Registration in Nuxt and Typing

- Full auto-import support (no manual registration) - each icon will be automatically imported and registered in the Nuxt project as individual Vue component in the tree
- Type-safe usage in `<template>`
- Works with Volar, `<script setup>`, and TSX

## SVG Output - Accessibility

- Components render a single `<svg>` element
- No additional wrappers or nested templates
- Attributes from the original SVG are preserved

## Theming with CSS Custom Properties and Runtime Access

- `fill`, `stroke`, and `stroke-width` are replaced with CSS Custom Properties ([CSS Custom Properties Guide](https://css-tricks.com/a-complete-guide-to-custom-properties/)) making theming directly possible
- Original values are preserved as fallbacks
- Since CSS Custom Properties work at runtime, they can be used to dynamically change icons components in cascade for each individual icons and property (fill, stroke, stroke-width, etc.)
- Compatible with global tokens or scoped styles

## Developer Experience:

- Can provide auto-completion and type-checking in your editor for each icons, as they are directly part of the Nuxt Build like any other component
- Vue DevTools support - unlike other solutions, this module generates Vue components that can be inspected and debugged in the Vue DevTools

The aim is to combine the control and quality of hand-authored components with the scalability and consistency of a build tool.

## Comparison with Other Icon Strategies

| Feature / Approach   | Third-party Libraries | Manual Vue Components | SVG Loaders (`vite-svg-loader`) | **This Module**    |
| -------------------- | --------------------- | --------------------- | ------------------------------- | ------------------ |
| **Setup**            | ✅ Easy               | ⚠️ Manual             | ⚠️ Requires config              | ✅ Minimal         |
| **Output**           | `<svg>` (clean)       | `<svg>` (custom)      | `<svg>` (inline)                | `<svg>` (clean)    |
| **Theming**          | ⚠️ Limited props      | ✅ Full control       | ✅ Flexible via CSS             | ✅ CSS variables   |
| **DX & Typing**      | ✅ Standard           | ✅ Full control       | ✅ With imports                 | ✅ Auto-typed      |
| **Scalability**      | ✅ Tree-shakable      | ⚠️ Tedious manually   | ✅ File-based, fast             | ✅ Build-optimized |
| **Nuxt Integration** | ✅ Works by default   | ✅ Auto-importable    | ✅ With module/plugin           | ✅ Native support  |

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
  <svg viewBox="0 0 24 24">
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
