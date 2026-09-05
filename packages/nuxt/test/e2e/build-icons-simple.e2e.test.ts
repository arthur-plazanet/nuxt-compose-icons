import { $fetch, setup } from '@nuxt/test-utils/e2e';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

describe('simple config', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/nuxt-compose-icons-simple', import.meta.url)),
  });

  it('renders the index page', async () => {
    const html = await $fetch('/');
    expect(html).toContain('<div>simple</div>');
  });

  it('generates component with CSS custom properties', async () => {
    const html = await $fetch('/');
    expect(html).toContain('stroke="var(--icon-stroke');
  });

  // #431: the `composables` export subpath must resolve on the default config, not just
  // when the module's own generated components import it directly. If this regresses, the
  // suite fails at build time rather than on this assertion.
  it('resolves the composables export subpath on the default config', async () => {
    const html = await $fetch('/');
    expect(html).toContain('subpaths:function,function');
  });

  it('injects the configured icon sizes into useComposeIconTheme', async () => {
    const html = await $fetch('/');
    expect(html).toContain('sizeKeys:lg,md,sm,xl');
  });
});
