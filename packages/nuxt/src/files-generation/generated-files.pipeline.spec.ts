import { describe, expect, test } from 'vitest';
import { createComponentFromName } from '../utils';
import { generateCssFile } from './generate-css-file';
import { generateIconsIndex } from './generate-icon-index';

/** Eject mode — component.destDir set, components live in the user's repo. */
const ejectDir = '/project/app/components/icons';

const componentsIn = (dir: string, ext: 'ts' | 'vue') =>
  ['TrashIcon', 'LogoIcon', 'ArrowUpIcon'].map((name) =>
    createComponentFromName({ name, filePath: `${dir}/${name}.${ext}` }),
  );

describe('generated files', () => {
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
