---
outline: [2, 3]
order: 0
---

# Concept

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

---

## Common Approaches

Icon components should be easy to use, style, and maintain.

Existing solutions often force trade-offs between DX, accessibility, and flexibility.
In a Vue or Nuxt codebase, we often lead to different solutions:

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

```vue [BaseIcon.vue]
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="currentColor"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="$listeners && $listeners.click && 'cursor-pointer'"
    @click="(e) => $emit('click', e)"
  >
    <slot />
  </svg>
</template>

<!-- And later... -->

<template>
  <BaseIcon width="24" height="24" stroke-width="2" viewBox="0 0 24 24" v-on="$attrs">
    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
    <path d="M2 17l10 5 10-5M12 2v15"></path>
  </BaseIcon>
</template>
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
