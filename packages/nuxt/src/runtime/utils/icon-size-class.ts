import type { ComposeIconSize } from '../types';
import { IconSize } from '../types';

export const defaultIconSizeClass: ComposeIconSize = {
  [IconSize.XS]: 'size-xs',
  [IconSize.SM]: 'size-sm',
  [IconSize.MD]: 'size-md',
  [IconSize.LG]: 'size-lg',
  [IconSize.XL]: 'size-xl',
};

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
