import { describe, expect, test } from 'vitest';
import { ref } from 'vue';
import { useComposeIconRegistry } from './use-compose-icons-registry';

describe('useComposeIconRegistry', () => {
  describe('getIconsByName', () => {
    test('finds icon by pascal name', () => {
      const { getIconsByName } = useComposeIconRegistry();
      const results = getIconsByName('LogoIcon');
      expect(results.length).toBeGreaterThan(0);
      expect(results[0].name).toBe('LogoIcon');
    });

    test('finds icon by kebab name', () => {
      const { getIconsByName } = useComposeIconRegistry();
      const results = getIconsByName('logo-icon');
      expect(results.length).toBeGreaterThan(0);
    });
  });

  describe('searchIcons', () => {
    test('returns matching icons for a query', () => {
      const { searchIcons } = useComposeIconRegistry();
      const results = searchIcons('Logo');
      expect(results.length).toBeGreaterThan(0);
      results.forEach((icon) => expect(icon.name.toLowerCase()).toContain('logo'));
    });

    test('returns all icons for an empty query', () => {
      const { icons, searchIcons } = useComposeIconRegistry();
      expect(searchIcons('')).toEqual(icons);
    });

    test('returns empty array when no match', () => {
      const { searchIcons } = useComposeIconRegistry();
      expect(searchIcons('__nonexistent__')).toHaveLength(0);
    });
  });

  describe('filteredIcons', () => {
    test('returns a computed ref', () => {
      const { filteredIcons } = useComposeIconRegistry();
      const result = filteredIcons('Logo');
      expect(result.value.length).toBeGreaterThan(0);
    });

    test('accepts a ref and reacts to changes', () => {
      const { icons, filteredIcons } = useComposeIconRegistry();
      const q = ref('Logo');
      const result = filteredIcons(q);

      expect(result.value.length).toBeGreaterThan(0);

      q.value = '__nonexistent__';
      expect(result.value).toHaveLength(0);

      q.value = '';
      expect(result.value).toEqual(icons);
    });

    test('accepts a getter function', () => {
      const { filteredIcons } = useComposeIconRegistry();
      const result = filteredIcons(() => 'Logo');
      expect(result.value.length).toBeGreaterThan(0);
    });

    test('returns all icons for empty string', () => {
      const { icons, filteredIcons } = useComposeIconRegistry();
      expect(filteredIcons('').value).toEqual(icons);
    });
  });
});
