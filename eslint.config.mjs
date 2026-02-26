import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginVue from 'eslint-plugin-vue';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
  {
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...pluginVue.configs['flat/recommended'],
    ],
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
    rules: {
      'no-console': 'error',
      'vue/multi-word-component-names': [
        'off',
        {
          ignores: ['index'],
        },
      ],
      'vue/component-name-in-template-casing': [
        'warn',
        'PascalCase',
        {
          registeredComponentsOnly: false,
        },
      ],
      '@typescript-eslint/no-empty-object-type': 'off',
    },
    settings: {
      'editor.formatOnSave': true,
      failOnError: true,
      failOnWarn: false,
      '@stylistic/semi': true,
    },
  },
  { languageOptions: { globals: globals.browser } },

  // {
  //   files: ['**/*.vue'],
  //   languageOptions: { parserOptions: { parser: tseslint.parser } },
  //   rules: {},
  // },
  {
    ignores: [
      '**/dist/',
      '**/cache/',
      '**/.nuxt/',
      '**/.nvm/',
      '**/.output/',
      '**/.husky/',
      '**/icons-generated/',
      '**/.vitepress/theme/components/',
      '**/nuxt-compose-icons/',
      // '**/*/icons/',
    ],
  },
  eslintConfigPrettier,
]);
