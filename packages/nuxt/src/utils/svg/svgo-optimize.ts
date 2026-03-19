// SVGO optimization
import { optimize } from 'svgo';

interface SVGOOptions {
  iconClasses?: string | string[];
}

export function optimizeSvg(svgContent: string, options?: SVGOOptions): string {
  const iconClasses = options?.iconClasses || 'compose-icon';

  const result = optimize(svgContent, {
    multipass: true,
    plugins: [
      'removeXMLNS',
      'sortAttrs',
      'convertColors',
      'convertShapeToPath',
      'inlineStyles',
      'mergePaths',
      'minifyStyles',
      {
        name: 'addClassesToSVGElement',
        params: {
          classNames: Array.isArray(iconClasses) ? iconClasses : [iconClasses],
        },
      },
    ],
  });

  if ('data' in result) {
    return result.data;
  }

  throw new Error('SVGO optimization failed');
}
