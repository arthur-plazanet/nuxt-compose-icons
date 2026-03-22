import { $fetch, createPage, setup } from '@nuxt/test-utils/e2e';
import { readFileSync } from 'node:fs';
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

  // Should be relative in both options cases: componentsDestDir given or not given (defaulting to .nuxt/compose-icons)
  it('icon-registry has only relative import paths', () => {
    const registry = readFileSync(
      fileURLToPath(
        new URL(
          './fixtures/nuxt-compose-icons-test/components/nuxt-compose-icons/icon-registry.ts',
          import.meta.url,
        ),
      ),
      'utf-8',
    );
    expect(registry).not.toMatch(/import\('[/]/);
    expect(registry).not.toMatch(/import\('[A-Z]:\\/);
    expect(registry).toMatch(/import\('\.\//);
  });
});
