# Nuxt-Compose-Icons

<img width="1408" height="423" alt="Frame 207" src="https://github.com/user-attachments/assets/4f2a1f2a-57f0-49ca-bf56-075d3df9d043" />

<a href="https://www.npmjs.com/package/nuxt-compose-icons" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/npm/v/nuxt-compose-icons.svg?style=flat&colorA=000&colorB=C1272D" alt="npm-downloads" />
</a>

<img width="200" alt="logo" src="https://github.com/user-attachments/assets/71be7ce7-54ef-401e-84df-8dde0891cc9d" />

The goal of this module is to propose a balanced approach which gives design flexibility and developer experience - in comparison to common existing approaches.

It dynamically generates customizable Vue components from initial SVG files, naming them accordingly and make them accessible as individual component to let you create your own Icon components library.

## Motivation


Icons in user interfaces come with several challenges:

- **Accessibility**: Follow semantic best practices for screen readers - see [Accessible SVG Icons](https://css-tricks.com/accessible-svg-icons/)
- **Consistency**: style, size, and color to create a cohesive user experience.
- **Reusability**: reusable across different components and pages to reduce redundancy.
- **Performance**: Avoid too long loading times and large bundle sizes.
- **Customization**: Adapt to different themes and brandings

---

A typical approach is to create an **icon component library** — a collection of reusable UI components that can be used by developers to build user interfaces:

- **Auto-imported** like any other component
- **Typed** for IDE autocompletion and safety
- **Styled consistently** via classes or CSS variables
- **Reusable** across different components and pages

## Common Approaches

Icon components should be easy to use, style, and maintain. (see Concepts)

Existing solutions often force trade-offs between DX, accessibility, and flexibility. In a Vue or Nuxt codebase, we often lead to different solutions:

### 1. Third-party icon libraries

Many libraries will wrap your existing icons or directly provide an existing list of icons, and standardize the API

```vue
<template>
  <!-- either access the icon using a "name" prop  -->
  <icon name="home" />
  <!-- or naming the icon from a list of available icons -->
  <icon-home />
  <IconHome />
</template>
```

It's fast and efficient, but can present some limitations in terms of customizations, and often result in a wrapper `div` or `span` tag around the SVG icon in the HTML template, which can be a problem for styling and accessibility.

Example output:

```html
<div class="icon-wrapper">
  <!-- The real icon -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
  >
    <!-- ... -->
  </svg>
</div>
```

| **Pros**               | **Cons**                                        |
| ---------------------- | ----------------------------------------------- |
| + Easy to integrate    | Extra wrapper elements (`<div>`, `<span>`)      |
| + Predefined icon sets | Limited styling flexibility                     |
| + Standardized API     | Icons may not match your brand or design system |
|                        | Styling often relies on props or global rules   |

---

### 2. Manual `.vue` components

Each SVG is manually wrapped into a Vue component.

:::code-group

```vue [MyIcon.vue]
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="currentColor"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
    <path d="M2 17l10 5 10-5M12 2v15"></path>
  </svg>
</template>
<!-- Or a wrapper <BaseIcon>...</BaseIcon> -->
```

:::

This solution is more flexible, as it gives more control over each SVG, but can be time-consuming and repetitive, especially when you have a lot of icons to manage.

| **Pros**                                  | **Cons**                                |
| ----------------------------------------- | --------------------------------------- |
| - Full control over markup and attributes | - Repetitive and hard to scale          |
| - No wrappers                             | - No type safety                        |
| - Easy to align with a design system      | - No auto-imports or generation tooling |
| - Easy to customize                       | - No auto-imports or generation tooling |

---

### 3. SVG imports via loaders

Tools like [`vite-svg-loader`](https://github.com/jpkleemans/vite-svg-loader) or [`vue-svg-loader`](https://github.com/visualfanatic/vue-svg-loader) allow importing SVGs directly as components:

```vue
<template>
  <Icon />
</template>

<script setup>
import Icon from '@/icons/user-badge.svg';
</script>
```

| **Pros**                      | **Cons**                                                   |
| ----------------------------- | ---------------------------------------------------------- |
| Clean output with no wrappers | - Requires manual imports                                  |
| Direct control over SVGs      | - No consistent naming or typing                           |
| Easy to organize icon files   | - No auto-registration or integration with Nuxt components |
|                               | - No built-in support for theming or runtime styling       |



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

**`user-badge.svg`**

```xml
<svg viewBox="0 0 24 24" width="...">
  <path d="..." fill="#000" stroke="#fff" stroke-width="2" />
</svg>
```

**will generate:**

**`UserBadgeIcon.vue`** (default naming - using PascalCase and `Icon` suffix)

```vue
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

This provides a balance of control, flexibility, and developer experience, tailored for projects using custom icons or building design systems.


Using pnpm:

```bash
pnpm add -D nuxt-compose-icons
```

Using npm

```bash
npm install -D nuxt-compose-icons
```

Using yarn

```bash
yarn add -D nuxt-compose-icons
```
