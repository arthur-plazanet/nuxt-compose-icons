import { extend } from 'unreadable-typescript';
import { ComposeIconSize } from '../types';

export { defaultSizes, iconSizeDefault };
export type { DefaultSizes };
/**
 * Default icon sizes if none have been provided to the module
 */
const defaultSizes = extend<ComposeIconSize>()<{ sm: string; md: string; lg: string; xl: string }>();

type DefaultSizes = typeof defaultSizes;

// Default icon sizes if none have been provided to the module
const iconSizeDefault: DefaultSizes = {
  sm: '1.5rem',
  md: '2rem',
  lg: '3rem',
  xl: '4rem',
};

/**
 * Resolve Icon size class based on the provided size prop
 */
export function getIconSizeClass(size: string): string {
  // if size is a raw CSS value (token etc.), no class is applied
  if (isRawCssSize(size)) {
    return '';
  }
  // tokens become classes like size-md, size-hero, size-24 etc.
  // raw values handled via inline styles instead
  return `size-${size}`;
}

export function isRawCssSize(value: string) {
  const v = value.trim();
  return (
    /\d/.test(v) ||
    v.startsWith('var(') ||
    v.startsWith('clamp(') ||
    v.startsWith('min(') ||
    v.startsWith('max(') ||
    v.startsWith('calc(')
  );
}
