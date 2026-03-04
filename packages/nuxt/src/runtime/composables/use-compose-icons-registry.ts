// runtime/composables/useComposeIconRegistry.ts
import type { IconRegistryEntry } from '#compose-icons/registry';
import { iconRegistry } from '#compose-icons/registry';

export function useComposeIconRegistry() {
  const icons = [...iconRegistry];

  /**
   * Get an Icon Component by its name
   *
   * @param {string} name
   * @returns {IconRegistryEntry[]}
   */
  function getIconByName(name: string): IconRegistryEntry[] {
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
    getIconByName,
    searchIcons,
  };
}
