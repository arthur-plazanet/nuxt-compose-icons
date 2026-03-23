// Stub so TypeScript resolves '#compose-icons/registry' when developing the module.
// At runtime this module is provided by the Nuxt template + alias set in module.ts.
declare module '#compose-icons/registry' {
  export interface IconRegistryEntry {
    name: string;
    pascalName: string;
    kebabName: string;
    importPath: string;
  }
  export const iconRegistryPath: string;
  export const iconRegistry: IconRegistryEntry[];
}

declare module 'nuxt-compose-icons/utils' {
  export { getIconSizeClass } from 'nuxt-compose-icons';
  export { useComposeIcon };
  import { useComposeIcon } from 'nuxt-compose-icons/dist/runtime/composables';
}

declare module 'nuxt-compose-icons/types' {
  export { IconSize } from 'nuxt-compose-icons';
  export type {
    ComposeIconProps,
    ComposeIconSize,
    IconSizeKey,
    IconSizeKeyValue,
  } from 'nuxt-compose-icons/dist/runtime/types';
}

declare module 'nuxt-compose-icons/composables' {
  export {
    useComposeIcon,
    useComposeIconRegistry,
  } from 'nuxt-compose-icons/dist/runtime/composables';
}

declare module 'nuxt-compose-icons/components' {
  // export * from '../src/runtime/components/icons-generated';
}
