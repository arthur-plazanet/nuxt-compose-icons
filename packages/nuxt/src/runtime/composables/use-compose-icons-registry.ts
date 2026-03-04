// runtime/composables/useComposeIconRegistry.ts
import type { IconRegistryEntry } from '../../runtime/utils/icon-registry';
import { iconRegistry } from '../../runtime/utils/icon-registry';

export function useComposeIconRegistry() {
  // const iconRegistryPath = componentsDir
  //   ? `${componentsDir}/icon-registry.ts`
  //   : '../../src/runtime/composables/use-compose-icons-registry.ts';

  // Dynamically import the icon registry JSON file
  // const iconRegistryModule = await import(/* @vite-ignore */ iconRegistryPath);
  // const iconRegistry: Array<{
  //   name: string;
  //   pascalName: string;
  //   kebabName: string;
  //   importPath: string;
  // }> = iconRegistryModule.default || iconRegistryModule;

  const icons = [...iconRegistry];

  /**
   * Get an Icon Component by itsname
   *
   * @param {string} name
   * @returns {(IconRegistryEntry | undefined)}
   */
  function getIconsByName(name: string): IconRegistryEntry[] {
    const iconByStrictName = icons.filter(
      (icon) => icon.name === name || icon.kebabName === name || icon.pascalName === name,
    );
    if (iconByStrictName.length > 0) {
      return iconByStrictName;
    }

    return filterIcons(name);
  }

  function searchIcons(query: string): IconRegistryEntry[] {
    const searchTerms = query.trim().toLowerCase();
    if (!searchTerms) return icons;
    return filterIcons(searchTerms);
  }

  function filterIcons(query: string): IconRegistryEntry[] {
    const lowerQuery = query.toLowerCase();
    return icons.filter(
      (icon) =>
        icon.name.toLowerCase().includes(lowerQuery) ||
        icon.kebabName.includes(lowerQuery) ||
        icon.pascalName.toLowerCase().includes(lowerQuery),
    );
  }

  return {
    icons,
    getIconsByName,
    searchIcons,
  };
}
