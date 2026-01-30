import { beforeEach, describe, expect, test } from 'vitest';
import { moduleOptionsMock } from '../../../test/mocks/nuxt-compose-icons-options';
import type { NuxtComposeIconsOptions } from '../../module';
import { generateComponentName } from './generate-component-name';

describe('generateComponentName', () => {
  let options: NuxtComposeIconsOptions;

  beforeEach(() => {
    options = moduleOptionsMock;
    // Any setup can be done here if needed
  });

  test('should generate a component name from a given string', () => {
    expect(generateComponentName('my-icon', moduleOptionsMock)).toBe('MyIcon');
    expect(generateComponentName('my-icon', options)).toBe('MyIcon');
  });
  test('should generate a component name from a string with multiple hyphens', () => {
    expect(generateComponentName('my-icon-name', moduleOptionsMock)).toBe('MyIconName');
    expect(generateComponentName('my-icon-name', options)).toBe('MyIconName');
  });

  test('should generate a component name from a string with underscores', () => {
    expect(generateComponentName('my_icon_name', moduleOptionsMock)).toBe('MyIconName');
    expect(generateComponentName('my_icon_name', options)).toBe('MyIconName');
  });

  test('should generate a component name from a string with mixed characters', () => {
    expect(generateComponentName('my-icon_123', moduleOptionsMock)).toBe('MyIcon123');
    expect(generateComponentName('my-icon_123', options)).toBe('MyIcon123');
  });
});
