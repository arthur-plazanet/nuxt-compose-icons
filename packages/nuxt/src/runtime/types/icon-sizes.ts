export type ComposeIconSize = Record<string, string>;

/** Shape of `runtimeConfig.public.composeIcons`, as set by module.ts and read by provide-sizes.ts. */
export interface PublicIconSizes {
  iconSizes: ComposeIconSize;
  /** The module's `defaultSize` option, if set — see resolveDefaultSizeKey. */
  defaultSize?: string;
}
