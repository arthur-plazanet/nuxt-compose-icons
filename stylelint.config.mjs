export default {
  ignoreFiles: [
    '**/dist/**',
    '**/node_modules/**',
    '**/.nuxt/**',
    '**/.output/**',
    '**/.cache/**',
    '**/test-results/**',
  ],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
  ],
  files: ['**/*.{vue,scss,sass,css}'],
  rules: {
    // 'at-rule-name-case': 'lower',
    // 'at-rule-name-space-after': 'always',
    // 'at-rule-semicolon-newline-after': 'always',
    // 'selector-class-pattern': [
    // reportDescriptionlessDisables: true,
    // reportInvalidScopeDisables: true,
    // reportNeedlessDisables: true,
    //   '^[-]?[a-z0-9]+(?:-[a-z0-9]+)*$',
    //   {
    //     message: 'Expected class selector to be kebab-case',
    //   },
    // ],
    // 'custom-property-pattern': [
    //   '^[--][a-z0-9-]+$',
    //   {
    //     message: 'Expected custom property name to be kebab-case',
    //   },
    // ],
  },
  // customSyntax: 'postcss-scss',

  // overrides: [
  //   {
  //     files: ['**/*.vue'],
  //     customSyntax: 'postcss-html',
  //     rules: {
  //       'block-closing-brace-empty-line-before': null,
  //       'block-closing-brace-newline-after': null,
  //       'block-closing-brace-newline-before': null,
  //       'block-closing-brace-space-before': null,
  //       'block-opening-brace-newline-after': null,
  //       'block-opening-brace-space-after': null,
  //       'block-opening-brace-space-before': null,
  //       'declaration-block-semicolon-newline-after': null,
  //       'declaration-block-semicolon-space-after': null,
  //       'declaration-block-semicolon-space-before': null,
  //       'declaration-block-trailing-semicolon': null,
  //     },
  //   },
  // ],
};

// TODO: V2?
// plugins: ['stylelint-declaration-block-no-ignored-properties'],
// rules: {
//   'declaration-block-no-duplicate-custom-properties': true,
//   'declaration-block-no-shorthand-property-overrides': true,
//   'custom-property-pattern': '^[a-z]+(-[a-z]+)*$',
//   'custom-property-no-missing-var-function': true,

//   'max-nesting-depth': 3,
//   'scss/dollar-variable-pattern': '^\\$[a-z]+(-[a-z]+)*$',
//   'scss/at-import-no-partial-leading-underscore': true,
//   'scss/at-function-pattern': '^\\$[a-z]+(-[a-z]+)*$',

//   'color-no-invalid-hex': true,
//   'font-family-no-duplicate-names': true,
//   'selector-pseudo-class-no-unknown': true,
//   'media-feature-name-no-unknown': true,
//   'property-no-unknown': true,
// },
