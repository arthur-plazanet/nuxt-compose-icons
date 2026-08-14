import { describe, expect, it } from 'vitest';
import { createComponentFromName } from '../utils';
import { generateIconsRegistry } from './generate-icon-index';

describe('generateIconsRegistry', () => {
  const registryDir = '/abs/path/.nuxt/compose-icons';

  it('Generates only relative import paths', async () => {
    const components = [
      createComponentFromName({
        name: 'LogoIcon',
        filePath: '/abs/path/.nuxt/compose-icons/LogoIcon.vue',
      }),
      createComponentFromName({
        name: 'TrashIcon',
        filePath: '/abs/path/.nuxt/compose-icons/TrashIcon.vue',
      }),
    ];

    const result = await generateIconsRegistry(components, registryDir);

    expect(result).not.toMatch(/from '\/[^']/); // no absolute Unix path
    expect(result).not.toMatch(/from '[A-Z]:\\/); // no absolute Windows path
    expect(result).toMatch(/from '\.\//); // all imports are relative
  });

  it('Preserves .vue extension in import paths', async () => {
    const components = [
      createComponentFromName({
        name: 'LogoIcon',
        filePath: '/abs/path/.nuxt/compose-icons/LogoIcon.vue',
      }),
    ];

    const result = await generateIconsRegistry(components, registryDir);

    expect(result).toContain("from './LogoIcon.vue'");
  });

  it('Strips .ts extension from import paths', async () => {
    const components = [
      createComponentFromName({
        name: 'LogoIcon',
        filePath: '/abs/path/.nuxt/compose-icons/LogoIcon.ts',
      }),
    ];

    const result = await generateIconsRegistry(components, registryDir);

    expect(result).toContain("from './LogoIcon'");
    expect(result).not.toContain("from './LogoIcon.ts'");
  });

  it('Generates relative path across directories', async () => {
    const components = [
      createComponentFromName({
        name: 'LogoIcon',
        filePath: '/abs/path/app/components/icons/LogoIcon.vue',
      }),
    ];

    const result = await generateIconsRegistry(components, registryDir);

    expect(result).not.toMatch(/from '\/[^']/);
    expect(result).toMatch(/from '\.\.\//);
  });
});
