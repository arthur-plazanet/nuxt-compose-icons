import { generateESMImport } from '../files-generation/template';
import { parseAndTransformSvg } from './parse-and-transform-svg';

/**
 * Generate Icon Component imports
 *
 * @returns {string} - A string containing all the necessary imports for the generated component
 */
function generateImports() {
  const imports = [];

  const vueImports = generateESMImport({ moduleName: ['defineComponent', 'h'], path: 'vue' });
  const composablesImports = generateESMImport({
    moduleName: 'useComposeIcon',
    path: 'nuxt-compose-icons/composables',
  });
  const typesImports = generateESMImport({
    moduleName: 'ComposeIconProps',
    path: 'nuxt-compose-icons/types',
    isType: true,
  });

  imports.push(vueImports);
  imports.push(composablesImports);

  imports.push(typesImports);

  return imports.join('\n');
}

const iconComponentProps = {
  color: String,
  stroke: String,
  strokeWidth: [String, Number],
  fill: String,
  size: {
    type: String,
    default: 'md',
  },
};

/**
 * Creates a Vue component code string from the provided SVG content.
 *
 * @param name - Name of the component to be generated
 * @param svgContent - SVG content as a string
 * @returns {string} - Literal string containing the Vue component code
 */
export function createSvgComponentCode(name: string, svgContent: string) {
  const { attributes, children } = parseAndTransformSvg(svgContent);

  return `${generateImports()}

export default defineComponent({
  name: '${name}',
  props: ${JSON.stringify(iconComponentProps, null, 2)},
  setup(props: ComposeIconProps) {
    const { buildSvgAttributes } = useComposeIcon(props);
    const svgAttributes = ${JSON.stringify(attributes, null, 2)};

    return () => h('svg', buildSvgAttributes(svgAttributes), [
      ${children}
    ]);
  }
});
 `;
}
