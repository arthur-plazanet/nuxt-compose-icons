export type ComposeIconSize = Record<string | number | symbol, unknown> | unknown;

// (optional convenience) keep IconSizeDefault as your *default* tokens type
// and extend it with your custom tokens as needed, e.g.:
// export interface IconSizeDefault {
//   xs: 'xs';
//   sm: 'sm';
//   md: 'md';
//   lg: 'lg';
//   xl: 'xl';
// }
export interface IconSizeDefault {
  xs: string | number;
  sm: string | number;
  md: string | number;
  lg: string | number;
}

export type IconSizeKey = keyof IconSizeDefault;
export type IconSizeKeyValue = IconSizeDefault[keyof IconSizeDefault];
