export { default as IconsModule } from './src/module';
export { useComposeIcon } from './src/runtime/composables/compose-icon';
export type { UseComposeIcon } from './src/runtime/composables/compose-icon';
export { IconSize } from './src/runtime/types';
export type {
  ComposeIconProps,
  ComposeIconSize,
  IconSizeKey,
  IconSizeKeyValue,
} from './src/runtime/types';
export { generateColorVariable, getIconSizeClass } from './src/runtime/utils';
