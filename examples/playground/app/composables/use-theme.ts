export function useTheme() {
  const iconSizes: Ref<ComposeIconSize> = ref({
    xs: '0.5rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
  });

  const primaryColor = ref('#C1272D');
  const secondaryColor = ref('#1e1e1e');

  return {
    iconSizes,
    primaryColor,
    secondaryColor,
  };
}
