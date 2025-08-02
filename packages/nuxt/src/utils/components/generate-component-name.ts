import type { NuxtComposeIconsOptions } from '../../module';
import { toKebabCase, toPascalCase } from '../convert-cases';

/**
 * Sanitizes and normalizes a file name into a valid component name.
 * @param fileName - The input file name to be transformed.
 * @returns The formatted component name in PascalCase.
 */
export function normalizeComponentName(fileName: string): string {
  return (
    fileName
      // TODO: Verify if it covers all cases
      // https://www.amitmerchant.com/replace-accented-characters-with-plain-english/
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      // Replace '&' with 'And'
      .replace(/&/g, '-and-')

      // Remove all whitespace (spaces, tabs, newlines) and add hyphen
      .replace(/\s+/g, '-')

      // Collapse multiple consecutive hyphens into a single hyphen
      .replace(/-+/g, '-')

      // Remove all remaining hyphens and underscores and add hyphen
      .replace(/[-_]+/g, '-')

      // Remove the file extension if present (e.g., .svg, .png, .jpg) and add hyphen
      .replace(/\.(svg|png|jpg|jpeg|gif)$/i, '-')
  );
}

function isNonEmptyString(input: unknown): input is string {
  return typeof input === 'string' && input.length > 0;
}

export function generateComponentName(fileName: string, options: NuxtComposeIconsOptions): string {
  const { prefix, suffix, case: _case } = options.generatedComponentOptions;

  const normalizedBaseComponentName = normalizeComponentName(fileName);
  const parts = normalizedBaseComponentName.split('-'); // for later suffix checks

  const nameParts: string[] = [];

  /*
   * Add prefix and suffix if provided, and verify they are not already part of the base file name
   * (e.g., icon-arrow-up.svg would become IconArrowUpIcon.svg as the suffix defaults to Icon)
   */
  if (isNonEmptyString(prefix)) {
    if (!parts.includes(prefix.toLowerCase())) {
      nameParts.push(prefix);
    }
  }

  nameParts.push(normalizedBaseComponentName);

  if (isNonEmptyString(suffix)) {
    if (!parts.includes(suffix.toLowerCase())) {
      nameParts.push(suffix);
    }
  }

  const componentName = nameParts.join('-');

  function applyCase(str: string): string {
    if (_case === 'kebab') {
      return toKebabCase(str);
    }

    return toPascalCase(str);
  }

  return applyCase(componentName);
}
