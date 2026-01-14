// utils/optimize-css.ts
// import { transform } from 'lightningcss';

// TODO: https://github.com/arthur-plazanet/nuxt-compose-icons/issues/193
export function optimizeCss(css: string): string {
  // const { code } = transform({
  //   filename: 'compose-icons.css',
  //   code: Buffer.from(css),
  //   minify: true,
  //   targets: {
  //     chrome: 100,
  //     firefox: 100,
  //     safari: 15,
  //   },
  // });

  return css;
}
