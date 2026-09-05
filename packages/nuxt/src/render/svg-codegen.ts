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
  // Import the submodule directly rather than the `nuxt-compose-icons/composables` barrel —
  // keeps every generated component's import graph minimal instead of pulling in the whole
  // composables surface just to use one of them.
  const composablesImports = generateESMImport({
    moduleName: 'useComposeIcon',
    path: 'nuxt-compose-icons/composables/use-compose-icon',
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

interface CreateSvgComponentCodeOptions {
  defaultSize?: string;
}

/**
 * Creates a Vue component code string from the provided SVG content.
 *
 * @param name - Name of the component to be generated
 * @param svgContent - SVG content as a string
 * @param {CreateSvgComponentCodeOptions} options - Size key used when the `size` prop isn't passed. Must be one of
 *   the module's actually configured `iconSizes` keys — a hardcoded `'md'` here would silently
 *   resolve to a non-existent CSS class/variable for any project that doesn't keep that key.
 * @returns {string} - Literal string containing the Vue component code
 */
export function createSvgComponentCode(
  name: string,
  svgContent: string,
  options?: CreateSvgComponentCodeOptions,
) {
  const { attributes, children } = parseAndTransformSvg(svgContent);
  const defaultSize = options?.defaultSize ?? 'md';

  return `${generateImports()}

export default defineComponent({
  name: '${name}',
  props: {
    color: String,
    stroke: String,
    strokeWidth: [String, Number],
    fill: String,
    size: {
      type: String,
      default: '${defaultSize}'
    }
  },
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
