export type ComposeIconSize = Record<string, string>;

// keep IconSize as your *default* tokens (optional convenience)
export const IconSize = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
} as const;

export type IconSizeKeyValue = (typeof IconSize)[keyof typeof IconSize];
