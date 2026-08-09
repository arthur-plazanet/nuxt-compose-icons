// Stands in for the generated `#compose-icons/registry` module during unit tests.
// Wired up via the alias in vitest.config.mts, so it must export the same shape
// as the real generated registry: the `IconRegistryEntry` type and `iconRegistry`.

import type { Component } from 'vue';
import { defineComponent, h } from 'vue';

export interface IconRegistryEntry {
  name: string;
  pascalName: string;
  kebabName: string;
  importPath: string;
  component: Component;
}

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
