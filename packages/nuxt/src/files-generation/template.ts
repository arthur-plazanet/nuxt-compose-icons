export {
  formatCssClass,
  formatCssRootVars,
  generateComment,
  generateCommentLine,
  generateESMExport,
  generateESMImport,
  indentString,
  multiLineString,
};

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const startComment = '/* ';
const endComment = ' */';

function generateCommentLine(content: string): string {
  return `\n${startComment}${content}${endComment}\n`;
}

/**
 * Generate a comment block for a given string.
 *
 * If the content is longer than the header length, it will generate a block comment in several lines, otherwise it will generate a single line comment.
 *
 * Example of block comment:
 * /*
 *  * This is a first line
 *  * This is a second line
 *  */
function generateComment(content: string | string[]): string {
  if (!content) return '';

  let contentStr: string = `${startComment}\n`;

  if (Array.isArray(content)) {
    contentStr += ` * ${content.join('\n * ' + '')} `;
    return `${contentStr}\n${endComment}\n`;
  }

  return generateCommentLine(capitalizeFirstLetter(content));
}

/**
 * Formats content within a :root CSS block.
 *  :root {
 *    --variable: value;
 *  }
 */
function formatCssRootVars(cssVars: Record<string, string>): string {
  let result = `:root {`;
  result += `\n`;
  Object.entries(cssVars).forEach(([key, value]) => {
    result += `    --${key}: ${value};\n`;
  });
  result += `}\n`;
  return result;
}

function formatCssClass(className: string, cssVars: Record<string, string> | string): string {
  let result = `&.${className} {`;
  if (typeof cssVars === 'string') {
    result += cssVars;
  } else {
    Object.entries(cssVars).forEach(([key, value]) => {
      result += `  --${key}: ${value};\n`;
    });
  }
  result += `}\n`;
  return result;
}

function generateESMImport({
  moduleName,
  path,
  isDefault = false,
  isType = false,
}: {
  moduleName: string | string[];
  path: string;
  isDefault?: boolean;
  isType?: boolean;
}): string {
  const importType = isType ? 'import type' : 'import';
  if (isDefault) {
    return `${importType} ${moduleName} from '${path}';`;
  } else {
    if (Array.isArray(moduleName)) {
      return `${importType} { ${moduleName.join(', ')} } from '${path}';`;
    } else {
      return `${importType} { ${moduleName} } from '${path}';`;
    }
  }
}

function generateESMExport({
  moduleName,
  path,
  isDefault = false,
  isType = false,
}: {
  moduleName: string;
  path: string;
  isDefault?: boolean;
  isType?: boolean;
}): string {
  const exportType = isType ? 'export type' : 'export';
  if (isDefault) {
    return `${exportType} ${moduleName} from '${path}';\n`;
  } else {
    return `${exportType} { ${moduleName} } from '${path}';\n`;
  }
}

function multiLineString(strings: TemplateStringsArray, ...values: unknown[]): string {
  let result = '';
  strings.forEach((string, i) => {
    result += string + (values[i] || '');
  });
  return result;
}

function indentString(str: string, indent: number): string {
  const indentation = ' '.repeat(indent);
  return str
    .split('\n')
    .map((line) => indentation + line)
    .join('\n');
}
