import { $fetch, setup } from '@nuxt/test-utils/e2e';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

describe('runtime-showcase', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('../..', import.meta.url)),
    // host: 'http://localhost:8787',
  });

  it('renders the index page', async () => {
    const html = await $fetch('/');
    expect(html).toBeTruthy();
  });

  it('renders icons with CSS custom properties', async () => {
    const html = await $fetch('/');
    expect(html).toContain('fill="var(--icon-fill');
    expect(html).toContain('stroke="var(--icon-stroke');
  });

  it('renders icon components in the overview', async () => {
    const html = await $fetch('/');
    // IconOverview renders all icons — at least one SVG must be present
    expect(html).toContain('<svg');
  });
});
