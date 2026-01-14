import { describe, expect, test } from 'vitest';
import { parseAndTransformSvg } from './parse-and-transform-svg';

// CLEANUP: https://github.com/arthur-plazanet/nuxt-compose-icons/issues/194
describe('parseAndTransformSvg', () => {
  const svgViewBox = `viewBox="0 0 24 24"`;
  const svgOpeningTag = `<svg ${svgViewBox} xmlns="http://www.w3.org/2000/svg">`;
  const svgClosingTag = `</svg>`;
  describe('basic parsing', () => {
    test('should parse a simple SVG and return attributes and children', () => {
      const svg = '<svg width="24" height="24" viewBox="0 0 24 24"></svg>';
      const result = parseAndTransformSvg(svg);

      expect(result.attributes).toEqual({
        width: 24,
        height: 24,
        viewBox: '0 0 24 24',
      });
      expect(result.children).toEqual([]);
    });

    test('should throw an error if no svg element is found', () => {
      const invalidSvg = '<div>Not an SVG</div>';

      expect(() => parseAndTransformSvg(invalidSvg)).toThrow(
        'No <svg> element found in the provided SVG content.',
      );
    });
  });

  describe('children conversion', () => {
    test('should convert child elements to VNode representation', () => {
      const svg = `${svgOpeningTag}
        <circle cx="12" cy="12" r="10" />
      ${svgClosingTag}`;
      const result = parseAndTransformSvg(svg);

      expect(result.children).toHaveLength(1);
      expect(result.children[0]).toContain("h('circle'");
      expect(result.children[0]).toContain('"cx": "12"');
      expect(result.children[0]).toContain('"cy": "12"');
      expect(result.children[0]).toContain('"r": "10"');
    });

    test('should handle nested elements', () => {
      const svg = `${svgOpeningTag}
        <g>
          <path d="M0 0h24v24H0z" />
        </g>
      ${svgClosingTag}`;
      const result = parseAndTransformSvg(svg);

      expect(result.children).toHaveLength(1);
      expect(result.children[0]).toContain("h('g'");
      expect(result.children[0]).toContain("h('path'");
      expect(result.children[0]).toContain('"d": "M0 0h24v24H0z"');
    });

    test('should handle multiple children', () => {
      const svg = `${svgOpeningTag}
        <rect x="0" y="0" width="10" height="10" />
        <rect x="14" y="14" width="10" height="10" />
      ${svgClosingTag}`;
      const result = parseAndTransformSvg(svg);

      expect(result.children).toHaveLength(2);
      expect(result.children[0]).toContain("h('rect'");
      expect(result.children[1]).toContain("h('rect'");
    });
  });

  describe('attribute transformation', () => {
    test('should transform fill attribute to CSS variable', () => {
      const svg = `${svgOpeningTag}
        <circle fill="red" cx="12" cy="12" r="10" />
      ${svgClosingTag}`;
      const result = parseAndTransformSvg(svg);

      expect(result.children[0]).toContain('"fill": "var(--icon-fill, red)"');
    });

    test('should transform stroke attribute to CSS variable', () => {
      const svg = `${svgOpeningTag}
        <circle stroke="blue" cx="12" cy="12" r="10" />
      ${svgClosingTag}`;
      const result = parseAndTransformSvg(svg);

      expect(result.children[0]).toContain('"stroke": "var(--icon-stroke, blue)"');
    });

    test('should transform stroke-width attribute to CSS variable', () => {
      const svg = `${svgOpeningTag}
        <circle stroke-width="2" cx="12" cy="12" r="10" />
      ${svgClosingTag}`;
      const result = parseAndTransformSvg(svg);

      expect(result.children[0]).toContain('"stroke-width": "var(--icon-stroke-width, 2)"');
    });

    test('should transform multiple theming attributes together', () => {
      const svg = `${svgOpeningTag}
        <path fill="currentColor" stroke="#000" stroke-width="1.5" d="M0 0" />
      ${svgClosingTag}`;
      const result = parseAndTransformSvg(svg);

      expect(result.children[0]).toContain('"fill": "var(--icon-fill, currentColor)"');
      expect(result.children[0]).toContain('"stroke": "var(--icon-stroke, #000)"');
      expect(result.children[0]).toContain('"stroke-width": "var(--icon-stroke-width, 1.5)"');
    });

    test('should preserve non-theming attributes as-is', () => {
      const svg = `${svgOpeningTag}
        <circle cx="12" cy="12" r="10" opacity="0.5" />
      ${svgClosingTag}`;
      const result = parseAndTransformSvg(svg);

      expect(result.children[0]).toContain('"cx": "12"');
      expect(result.children[0]).toContain('"opacity": "0.5"');
    });
  });

  describe('text content handling', () => {
    test('should handle text nodes inside elements', () => {
      const svg = `${svgOpeningTag}
        <text x="10" y="20">Hello</text>
      ${svgClosingTag}`;
      const result = parseAndTransformSvg(svg);

      expect(result.children).toHaveLength(1);
      expect(result.children[0]).toContain("h('text'");
      expect(result.children[0]).toContain('"Hello"');
    });

    test('should ignore empty text nodes', () => {
      const svg = `${svgOpeningTag}
        <g>
          <circle cx="12" cy="12" r="10" />
        </g>
      ${svgClosingTag}`;
      const result = parseAndTransformSvg(svg);

      // Should only have the g element, whitespace text nodes should be filtered out
      expect(result.children).toHaveLength(1);
    });
  });
});
