import { $fetch, createPage, setup } from '@nuxt/test-utils/e2e';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

describe('ssr', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/nuxt-compose-icons-test', import.meta.url)),
  });

  it('renders the index page', async () => {
    const page = await createPage('/');
    await page.screenshot({
      path: fileURLToPath(new URL('screenshots/screenshot.jpeg', import.meta.url)),
      type: 'jpeg',
      fullPage: true,
      quality: 100,
    });

    const html = await $fetch('/');
    expect(html).toContain('<div>basic</div>');

    // Test the existence of CSS custom properties in rendered parsed svg
    expect(html).toContain('fill="var(--icon-fill');
    expect(html).toContain('stroke="var(--icon-stroke');
  });
});
