---
outline: [2, 3]
order: 1
---

# Features

Compose your own Icon components library, from SVG files to customizable Vue Components that you own.

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

| Feature                | Third-party Libraries        | Manual Vue Components | SVG Loaders (`vite-svg-loader`) | **Nuxt Compose Icons**      |
| ---------------------- | ---------------------------- | --------------------- | ------------------------------- | --------------------------- |
| **Setup**              | ✅ Easy                      | ⚠️ Manual             | ⚠️ Requires config              | ✅ Minimal                  |
| **Source of truth**    | External package             | Vue files             | SVG files                       | SVG files                   |
| **SVG output**         | Clean (often wrapped)        | Custom                | Inline                          | Clean, no wrappers          |
| **SVG control**        | Often abstracted             | ✅ Full               | ✅ Full                         | ✅ Full                     |
| **Theming**            | ⚠️ Prop-based, limited       | ✅ Manual CSS         | ✅ CSS-based                    | ✅ CSS variables + props    |
| **Naming consistency** | Library-defined              | Developer-defined     | File-based                      | Deterministic, file-based   |
| **Typing**             | ✅ Provided                  | ✅ Manual             | Depends on setup                | ✅ Generated & inferred     |
| **Scaling**            | Dependent on library updates | Maintenance-heavy     | Flexible but unstructured       | Structured, build-generated |
| **Nuxt integration**   | ✅ Works                     | ✅ Auto-importable    | ⚠️ Requires configuration       | ✅ Native auto-import       |

`@nuxt/icon` is the most common example of the "Third-party Libraries" column above — if you're
specifically weighing it against this module, here's a direct comparison:

## How This Compares to `@nuxt/icon`

Nuxt already has an excellent official icon module, [`@nuxt/icon`](https://github.com/nuxt/icon) — if you want instant access to a huge, ready-made icon set (Iconify, emoji, custom collections) with zero setup, use it.

`nuxt-compose-icons` solves a different problem: turning **your own** SVG files into **standalone, ownable Vue components** — for a design system or an in-house icon library, where the icons need to exist as real components in your codebase, not just a runtime lookup.

|                               | `@nuxt/icon`                                                   | **Nuxt Compose Icons**                                                                                                         |
| ----------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Best for**                  | A large, ready-made icon set                                   | Your own SVGs — a design system or in-house icon library                                                                       |
| **Usage**                     | `<Icon name="my:user-badge" />` — a string-name lookup         | `<UserBadgeIcon />` — a real, individually importable component                                                                |
| **Ownership**                 | Icons live inside the module's runtime/collection              | Generated files in _your_ repo — committed and versioned like any other component                                              |
| **Usable without the module** | No — needs `<Icon>` and the collection registered              | Yes — a generated file is a plain `.vue`/`.ts` component; a UI library can ship it without depending on this module at runtime |
| **Theming**                   | Per-usage `customize()` callback, or CSS overrides on `<Icon>` | `fill`/`stroke`/`stroke-width` become CSS variables on the SVG itself — cascades naturally through design tokens               |
| **Naming**                    | Iconify name rules (kebab-case only)                           | Derived from your filename — accepts whatever your design tool exports                                                         |

### When to reach for `@nuxt/icon` instead

- You want instant access to a large, pre-built icon set without maintaining your own SVGs
- You don't need the generated icons to exist independently of Nuxt — e.g. consumed by a separate UI library that shouldn't depend on this module
- Per-icon customization via a JS callback fits your styling approach better than CSS variables

Both modules can coexist in the same project — reach for whichever fits the icon at hand.
