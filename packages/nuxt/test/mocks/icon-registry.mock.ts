import { defineAsyncComponent } from 'vue';
import type { IconRegistryEntry } from '../../src/runtime/utils/icon-registry';

export const iconRegistry: IconRegistryEntry[] = [
  {
    name: 'LogoIcon',
    pascalName: 'LogoIcon',
    kebabName: 'logo-icon',
    importPath: './LogoIcon',
    component: defineAsyncComponent(() => Promise.resolve({ template: '<svg />' })),
  },
];
