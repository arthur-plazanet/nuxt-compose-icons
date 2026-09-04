declare module '@nuxt/schema' {
  interface RuntimeConfig {
    public: {
      composeIcons: {
        // TODO-CLAUDE: I fixed the "Property 'iconSizes' does not exist on type '{}'.ts(2339)"
        // present on the plugin when trying to reach the correct key.
        // 1. Moved type augmentations from augments.node.ts to augments.app.ts
        // 2. Rewrote the declaration (no public wrapper and wrong name)
        // 3. I wrote the plugin in the "new" form but i don't think it has an impact :D
        iconSizes: Record<string, string>;
      };
    };
  }
}
