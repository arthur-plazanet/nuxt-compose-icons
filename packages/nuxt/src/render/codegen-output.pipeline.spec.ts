import { describe, expect, test } from 'vitest';
import { optimizeSvg } from '../utils/svg/svgo-optimize';
import { createSvgComponentCode } from './svg-codegen';
import { vueSFCWrapper } from './vue-sfc-wrapper';

/**
 * Snapshots of the full codegen pipeline: raw SVG -> SVGO -> component code.
 *
 * This is the module's actual contract. A regression here is rarely a thrown
 * error — it is generated output silently changing shape, which every other
 * test in the suite would still pass through. Review these diffs deliberately:
 * an intentional codegen change should show up here and nowhere else.
 */

/** Mirrors the pipeline in module.ts setup(): optimize, codegen, optional SFC wrap. */
function generate(
  name: string,
  rawSvg: string,
  options: { iconClasses?: string[]; format?: 'ts' | 'vue' } = {},
) {
  const { iconClasses = ['compose-icon'], format = 'ts' } = options;
  const code = createSvgComponentCode(name, optimizeSvg(rawSvg, { iconClasses }));

  return format === 'vue' ? vueSFCWrapper(code) : code;
}

const minimalSvg = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2 L22 22 L2 22 Z" />
</svg>`;

const themedSvg = `<svg viewBox="0 0 24 24" fill="#000000" stroke="#FFFFFF" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 4h16v16H4z" fill="#FF0000" stroke="#00FF00" stroke-width="1.5" />
</svg>`;

const nestedSvg = `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <g id="layer" opacity="0.5">
    <circle cx="16" cy="16" r="8" fill="#123456" />
    <rect x="1" y="1" width="4" height="4" stroke="#654321" />
  </g>
  <title>An icon</title>
</svg>`;

describe('codegen output', () => {
  describe('file formats', () => {
    test('ts format', () => {
      expect(generate('MinimalIcon', minimalSvg)).toMatchSnapshot();
    });

    test('vue format', () => {
      expect(generate('MinimalIcon', minimalSvg, { format: 'vue' })).toMatchSnapshot();
    });

    test('ts and vue differ only by the SFC script wrapper', () => {
      const ts = generate('MinimalIcon', minimalSvg);
      const vue = generate('MinimalIcon', minimalSvg, { format: 'vue' });

      expect(vue).toBe(`<script lang="ts">\n${ts}\n</script>\n`);
    });
  });

  describe('theming rewrites', () => {
    test('child fill/stroke/stroke-width become CSS custom properties', () => {
      const code = generate('ThemedIcon', themedSvg);

      // SVGO's convertColors shortens #FF0000 to the `red` keyword before codegen.
      expect(code).toContain('var(--icon-fill, red)');
      expect(code).toContain('var(--icon-stroke, #0f0)');
      expect(code).toContain('var(--icon-stroke-width, 1.5)');
    });

    // An icon carrying its fill/stroke on the root <svg> rather than on a child
    // must be themable through --icon-* like any other. This was previously not
    // the case: parseAndTransformSvg() returned svgParentNode.properties directly
    // and only ran transformAttributes() over children, so the paint props were
    // silently inert on those icons while the README documented the opposite.
    test('root svg attributes are rewritten to CSS variables', () => {
      const code = generate('ThemedIcon', themedSvg);
      const rootAttrs = code.slice(
        code.indexOf('const svgAttributes ='),
        code.indexOf("return () => h('svg'"),
      );

      expect(rootAttrs).toContain('"fill": "var(--icon-fill, #000)"');
      expect(rootAttrs).toContain('"stroke": "var(--icon-stroke, #fff)"');
      expect(rootAttrs).toContain('"stroke-width": "var(--icon-stroke-width, 2)"');
    });

    test('full themed output', () => {
      expect(generate('ThemedIcon', themedSvg)).toMatchSnapshot();
    });
  });

  describe('structure', () => {
    test('nested groups, shapes and text nodes', () => {
      expect(generate('NestedIcon', nestedSvg)).toMatchSnapshot();
    });

    test('root element is a single svg with no wrapper', () => {
      const code = generate('MinimalIcon', minimalSvg);

      expect(code).toContain("h('svg', buildSvgAttributes(svgAttributes)");
    });
  });

  describe('icon classes', () => {
    test('default compose-icon class', () => {
      expect(generate('MinimalIcon', minimalSvg)).toContain('compose-icon');
    });

    test('custom classes are applied to the svg element', () => {
      const code = generate('MinimalIcon', minimalSvg, {
        iconClasses: ['my-icon', 'compose-icon'],
      });

      expect(code).toMatchSnapshot();
    });
  });

  describe('size prop default', () => {
    test('falls back to "md" when no default is configured', () => {
      const code = createSvgComponentCode('MinimalIcon', optimizeSvg(minimalSvg));
      expect(code).toContain("default: 'md'");
    });

    // A hardcoded 'md' here would silently resolve to a non-existent class/variable for any
    // project whose iconSizes config doesn't keep an 'md' key — this must follow the module's
    // actual configured sizes, not a fixed literal.
    test('follows the configured default size key', () => {
      const code = createSvgComponentCode('MinimalIcon', optimizeSvg(minimalSvg), {
        defaultSize: 'compact',
      });
      expect(code).toContain("default: 'compact'");
      expect(code).not.toContain("default: 'md'");
    });
  });
});
