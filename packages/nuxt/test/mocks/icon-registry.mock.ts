// TODO: not used?

import { defineComponent, h } from 'vue';
import type { IconRegistryEntry } from '../../src/runtime/utils/icon-registry';

const MockIcon = defineComponent({ setup: () => () => h('svg') });

export const iconRegistry: IconRegistryEntry[] = [
  {
    name: 'LogoIcon',
    pascalName: 'LogoIcon',
    kebabName: 'logo-icon',
    importPath: './LogoIcon',
    component: MockIcon,
  },
];
