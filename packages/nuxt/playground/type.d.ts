declare module '@nuxt-compose-icons/utils' {
  export { generateColorVariable, getIconSizeClass } from 'nuxt-compose-icons';
}

declare module '@nuxt-compose-icons/types' {
  // import type {
  //   ComposeIconProps,
  //   ComposeIconSize,
  //   IconSizeKey,
  //   IconSizeKeyValue,
  // } from 'nuxt-compose-icons';

  export { IconSize } from 'nuxt-compose-icons';
  export type {
    ComposeIconProps,
    ComposeIconSize,
    IconSizeKey,
    IconSizeKeyValue,
  } from 'nuxt-compose-icons';
}

declare module '@nuxt-compose-icons/components' {
  // export * from '../src/runtime/components/icons-generated';
}
