import { parse } from 'svg-parser';

type SvgNode = ReturnType<typeof parse>['children'][number];
type SvgElement = Extract<SvgNode, { type: 'element' }>;

interface ParsedSvgResult {
  attributes: Record<string, string | number>;
  children: string[];
}

/**
 * 1. We first parse the SVG content and convert it to HAST (https://github.com/syntax-tree/hast)
 *
 *
 * Output expected:
 * {
 *   type: 'element',
 *   tagName: 'svg',
 *   properties: {
 *     width: '100',
 *     height: '100',
 *     viewBox: '0 0 100 100',
 *   },
 *   children: [
 *     {
 *       type: 'element',
 *       tagName: 'circle',
 *       properties: {
 *         cx: '50',
 *         cy: '50',
 *         r: '40',
 *         fill: 'red',
 *       },
 *       children: [],
 *     },
 *   ],
 * }
 *
 * @param {string} svgContent
 * @returns {SvgElement}
 */
function convertSVGToHast(svgContent: string): SvgElement {
  const root = parse(svgContent);
  const svgNode = root.children[0] as SvgElement;

  if (svgNode.tagName !== 'svg') {
    throw new Error('No <svg> element found in the provided SVG content.');
  }

  return svgNode;
}

/*
 * 2. Convert the parsed SVG node to a virtual DOM (VNode) representation using h() Vue internal function
 */
function convertNodeToVNode(node: string | SvgNode): string | null {
  if (typeof node === 'string') {
    return null;
  }

  if (node.value && node.type === 'text' && typeof node.value === 'string') {
    const raw = node.value.trim();
    return raw ? JSON.stringify(raw) : null;
  }

  if (node.type !== 'element') {
    return null;
  }

  const tag = node.tagName;
  const props = transformAttributes(node.properties || {});
  const propsLiteral = JSON.stringify(props, null, 2);

  const children = (node.children || [])
    .map((c) => convertNodeToVNode(c))
    .filter((c): c is string => !!c)
    .join(',\n');

  return `h('${tag}', ${propsLiteral}, [${children}])`;
}

/*
 * TODO: Description
 */
/**
 * Description placeholder
 *
 * @param {Record<string, string | number>} attrs
 * @returns {Record<string, string | number>}
 */
function transformAttributes(
  attrs: Record<string, string | number>,
): Record<string, string | number> {
  const transformed: Record<string, string | number> = {};

  for (const [key, value] of Object.entries(attrs)) {
    const colorValue = String(value).toLowerCase();
    if (key === 'fill') {
      transformed.fill = `var(--icon-fill, ${colorValue})`;
    } else if (key === 'stroke') {
      transformed.stroke = `var(--icon-stroke, ${colorValue})`;
    } else if (key === 'stroke-width') {
      transformed['stroke-width'] = `var(--icon-stroke-width, ${value})`;
    } else {
      transformed[key] = String(value);
    }
  }

  return transformed;
}

/**
 * Parses and transforms SVG content into attributes and children to be used in a Vue component.
 *
 * @export
 * @param {string} svgContent
 * @returns {ParsedSvgResult}
 */
export function parseAndTransformSvg(svgContent: string): ParsedSvgResult {
  const svgParentNode = convertSVGToHast(svgContent);

  /*
   * We extract the attributes and children from the parsed SVG element.
   */
  const attributes = svgParentNode.properties || {};

  const children = (svgParentNode.children || [])
    .map(convertNodeToVNode)
    .filter((c): c is string => !!c);

  return { attributes, children };
}
