import { describe, expect, test } from 'vitest';
import { createComponentFromName } from '../utils';
import { generateCssFile } from './generate-css-file';
import { generateIconsIndex, generateIconsRegistry } from './generate-icon-index';

/**
 * Snapshots of the generated support files.
 *
 * The registry is the one artefact whose content genuinely differs between the
 * two output modes: import paths are resolved relative to the directory the
 * registry itself is written to. Both modes are pinned here so a change to
 * either path-resolution branch in module.ts shows up as a diff.
 */

/** Default mode — components live in .nuxt/compose-icons, managed by Nuxt. */
const virtualDir = '/project/.nuxt/compose-icons';
/** Eject mode — component.destDir set, components live in the user's repo. */
const ejectDir = '/project/app/components/icons';

const componentsIn = (dir: string, ext: 'ts' | 'vue') =>
  ['TrashIcon', 'LogoIcon', 'ArrowUpIcon'].map((name) =>
    createComponentFromName({ name, filePath: `${dir}/${name}.${ext}` }),
  );

describe('generated files', () => {
  describe('icon registry', () => {
    test('virtual mode (.nuxt), ts components', async () => {
      const content = await generateIconsRegistry(componentsIn(virtualDir, 'ts'), virtualDir);

      expect(content).toMatchSnapshot();
    });

    test('eject mode (custom destDir), ts components', async () => {
      const content = await generateIconsRegistry(componentsIn(ejectDir, 'ts'), ejectDir);

      expect(content).toMatchSnapshot();
    });

    test('eject mode, vue components keep their extension', async () => {
      const content = await generateIconsRegistry(componentsIn(ejectDir, 'vue'), ejectDir);

      expect(content).toMatchSnapshot();
    });

    test('both modes produce identical content for the same layout', async () => {
      const virtual = await generateIconsRegistry(componentsIn(virtualDir, 'ts'), virtualDir);
      const eject = await generateIconsRegistry(componentsIn(ejectDir, 'ts'), ejectDir);

      // Paths are relative to the registry's own directory, so the mode only
      // changes where the file lands — never what it contains.
      expect(virtual).toBe(eject);
    });

    test('entries are sorted alphabetically, not in input order', async () => {
      const content = await generateIconsRegistry(componentsIn(virtualDir, 'ts'), virtualDir);
      const order = [...content.matchAll(/name: '(\w+)'/g)].map((m) => m[1]);

      expect(order).toEqual(['ArrowUpIcon', 'LogoIcon', 'TrashIcon']);
    });
  });

  describe('icon index barrel', () => {
    test('ts components', () => {
      expect(generateIconsIndex(componentsIn(ejectDir, 'ts'))).toMatchSnapshot();
    });

    test('vue components', () => {
      expect(generateIconsIndex(componentsIn(ejectDir, 'vue'))).toMatchSnapshot();
    });
  });

  describe('size stylesheet', () => {
    test('default sizes', () => {
      expect(generateCssFile({})).toMatchSnapshot();
    });

    test('custom sizes are merged on top of the defaults', () => {
      expect(generateCssFile({ iconSizes: { md: '20px', huge: '100px' } })).toMatchSnapshot();
    });

    test('custom icon classes widen the selector', () => {
      expect(generateCssFile({ iconClasses: ['compose-icon', 'my-icon'] })).toMatchSnapshot();
    });
  });
});
