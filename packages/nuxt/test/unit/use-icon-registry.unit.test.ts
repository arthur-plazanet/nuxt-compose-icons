import { describe, expect, test } from 'vitest';
import { useComposeIconRegistry } from '../../src/runtime/composables/use-compose-icons-registry';

describe('use-icon-registry', () => {
  test('Should get Icon by name', () => {
    const { getIconsByName } = useComposeIconRegistry();
    const icons = getIconsByName('LogoIcon') || getIconsByName('logo-icon');
    expect(icons).toBeDefined();

    const icon = icons?.find((icon) => icon.name.includes('LogoIcon'));
    expect(icon).toBeDefined();
  });

  test('Should search Icons by query', () => {
    const { searchIcons } = useComposeIconRegistry();
    const results = searchIcons('Logo');
    expect(results.length).toBeGreaterThan(0);
    results.forEach((icon) => {
      expect(icon.name.toLowerCase()).toContain('logo'.toLowerCase());
    });
  });
});
