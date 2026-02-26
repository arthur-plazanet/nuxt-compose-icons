// utils/optimize-css.ts
// import { transform } from 'lightningcss';

// TODO: https://github.com/arthur-plazanet/nuxt-compose-icons/issues/197 issue with CJS dependency
export function optimizeCss(css: string): string {
  // TODO: https://github.com/arthur-plazanet/nuxt-compose-icons/issues/193 update config
  // const res = transform({
  //   filename: 'compose-icons.css',
  //   code: Buffer.from(css),
  //   minify: true,
  //   sourceMap: true,
  // });

  // return res.code.toString();
  return css;
}
