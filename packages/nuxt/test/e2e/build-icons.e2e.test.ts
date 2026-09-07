import { $fetch, setup } from '@nuxt/test-utils/e2e';
import { promises as fsp } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

describe('advanced config', async () => {
  const fixtureDir = fileURLToPath(new URL('./fixtures/nuxt-compose-icons-test', import.meta.url));

  await setup({ rootDir: fixtureDir });

  it('renders the index page', async () => {
    const html = await $fetch('/');
    expect(html).toContain('<div>basic</div>');
  });

  it('generates components with CSS custom properties', async () => {
    const html = await $fetch('/');
    expect(html).toContain('fill="var(--icon-fill');
    expect(html).toContain('stroke="var(--icon-stroke');
  });

  it('applies the configured defaultSize, not "md", to the generated component prop', async () => {
    const html = await $fetch('/');
    // this fixture sets defaultSize: 'lg' — codegen must bake that in, not a hardcoded 'md'
    expect(html).toContain('class="compose-icon size-lg"');
  });

  it('threads defaultSize through to useComposeIconTheme() too, not just codegen', async () => {
    const html = await $fetch('/');
    expect(html).toContain('defaultSizeKey:lg');
  });

  // component.destDir is what makes generated components portable to a UI library that
  // never installs nuxt-compose-icons itself — the components need this file to theme
  // correctly standalone. Nothing else asserts it gets written or what it contains.
  it("writes a compose-icons.css combining base rules and the project's configured sizes", async () => {
    const css = await fsp.readFile(
      `${fixtureDir}/components/nuxt-compose-icons/compose-icons.css`,
      'utf-8',
    );

    expect(css).toContain('.compose-icon{width:var(--icon-size);height:var(--icon-size)}');
    // iconSizes in this fixture's nuxt.config.ts: xs, sm, md, lg, xl
    expect(css).toContain('--size-xs:0.5rem');
    expect(css).toContain('--size-sm:0.875rem');
    expect(css).toContain('--size-md:1rem');
    expect(css).toContain('--size-lg:2rem');
    expect(css).toContain('--size-xl:4rem');
  });
});
