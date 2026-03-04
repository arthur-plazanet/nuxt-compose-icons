declare module 'nuxt-compose-icons/utils' {
  export { getIconSizeClass } from 'nuxt-compose-icons';
  export { useComposeIcon };
  import { useComposeIcon } from 'nuxt-compose-icons/dist/runtime/composables/compose-icon';
}

// declare module 'nuxt-compose-icons/types' {
//   export { IconSize } from 'nuxt-compose-icons';
//   export type {
//     ComposeIconProps,
//     ComposeIconSize,
//     IconSizeKey,
//     IconSizeKeyValue,
//   } from 'nuxt-compose-icons/dist/';
// }

// declare module 'nuxt-compose-icons/runtime/composables' {
//   export {
//     useComposeIcon,
//     useComposeIconRegistry,
//   } from 'nuxt-compose-icons/dist/runtime/composables';
// }

declare module 'nuxt-compose-icons/components' {
  // export * from '../src/runtime/components/icons-generated';
}
