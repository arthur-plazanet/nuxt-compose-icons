export {
  formatCssClass,
  formatCssRootVars,
  generateCommentBlock,
  generateCommentLine,
  generateHeader,
  generateSeparator,
  generateSubheader,
};

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const startComment = '/* ';
const endComment = ' */';
const headerLength = 60;
const subheaderLength = 20;
const separatorChar = '-';
const headerSeparator = ' ';

function generateSeparator(length: number): string {
  return `${startComment}${separatorChar.repeat(length)}${endComment}`;
}

function generateCommentLine(content: string): string {
  return `\n${startComment}${content}${endComment}\n`;
}

/**
 * Will generate a comment block like this:
/* ------------------------------------------------------------ *\/
/*                            Title                             *\/
/* ------------------------------------------------------------ *\/
 *
 */
function generateCommentBlock(
  title: string,
  totalLength: number,
  separatorChar: string,
  indent = '',
): string {
  const titleTotalLength = totalLength - title.length;
  const halfLength = Math.floor(titleTotalLength / 2);
  let titleSeparator = headerSeparator.repeat(halfLength);

  if (totalLength % 2 !== 0) {
    titleSeparator += separatorChar;
  }

  return (
    `\n${indent}${generateSeparator(totalLength)}` +
    `\n${indent}${startComment}${titleSeparator}${title}${titleSeparator}${endComment}` +
    `\n${indent}${generateSeparator(totalLength)}\n`
  );
}

/**
 * Generates a header comment block for a given header string.
 * /* ------------------------------------------------------------ *\/
 * /*                            Header                            *\/
 * /* ------------------------------------------------------------ *\/
 */
function generateHeader(header: string): string {
  if (!header) return '';

  return generateCommentBlock(capitalizeFirstLetter(header), headerLength, separatorChar, '');
}

/**
 * Generates a subheader comment block for a given subheader string.
 * /* ---------------------- \/*
 * /*       Subheader        *\/
 * /* ---------------------- *\/
 */
function generateSubheader(subheader: string): string {
  if (!subheader) return '';

  return generateCommentBlock(
    capitalizeFirstLetter(subheader),
    subheaderLength,
    separatorChar,
    '  ',
  );
}

/**
 * Formats content within a :root CSS block.
 *  :root {
 *    --variable: value;
 *  }
 */
function formatCssRootVars(cssVars: Record<string, string>): string {
  let result = `  :root {`;
  result += `\n`;
  Object.entries(cssVars).forEach(([key, value]) => {
    result += `    --${key}: ${value};\n`;
  });
  result += `}\n`;
  return result;
}

function formatCssClass(className: string, cssVars: Record<string, string>): string {
  let result = `.${className} {\n`;
  Object.entries(cssVars).forEach(([key, value]) => {
    result += `  --${key}: ${value};\n`;
  });
  result += `}\n`;
  return result;
}
