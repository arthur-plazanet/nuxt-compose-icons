import type { Component } from 'vue';
import { add, antique, axe } from './icon-list';

export const iconComponentList: { [key: string]: Component } = {
  AddIcon: add,
  AntiqueIcon: antique,
  AxeIcon: axe,
};
