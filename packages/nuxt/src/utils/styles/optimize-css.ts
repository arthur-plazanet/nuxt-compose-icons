// TODO-CLAUDE: I used it in replacement of lightning-CSS as there were bugs using it
// You removed the issues https://github.com/arthu-pr/nuxt-compose-icons/issues/193
// should we just keep this file?
export function optimizeCss(css: string): string {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,])\s*/g, '$1')
    .replace(/;\}/g, '}')
    .trim();
}
