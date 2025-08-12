// SVGO optimization
import { optimize } from 'svgo';

export function optimizeSvg(svgContent: string): string {
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
    ],
  });

  if ('data' in result) {
    return result.data;
  }

  throw new Error('SVGO optimization failed');
}
