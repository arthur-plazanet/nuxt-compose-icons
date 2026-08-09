[nuxt-compose-icons](../../modules.md) / [module](../index.md) / NuxtComposeIconsOptions

# Interface: NuxtComposeIconsOptions

Defined in: [module.ts:92](https://github.com/arthu-pr/nuxt-compose-icons/blob/d141366874a5b246cf368a85d6ae85bef35b9d9a/packages/nuxt/src/module.ts#L92)

## Properties

### cacheDir?

```ts
optional cacheDir?: string;
```

Defined in: [module.ts:182](https://github.com/arthu-pr/nuxt-compose-icons/blob/d141366874a5b246cf368a85d6ae85bef35b9d9a/packages/nuxt/src/module.ts#L182)

Directory used to persist the SVG processing cache across builds.
Resolved relative to the project root.
Defaults to `node_modules/.cache/nuxt-compose-icons`. Safe to gitignore.

***

### component?

```ts
optional component?: IconComponentOptions;
```

Defined in: [module.ts:109](https://github.com/arthu-pr/nuxt-compose-icons/blob/d141366874a5b246cf368a85d6ae85bef35b9d9a/packages/nuxt/src/module.ts#L109)

Component generation options: naming, output directory, file format.

***

### debug?

```ts
optional debug?: boolean;
```

Defined in: [module.ts:173](https://github.com/arthu-pr/nuxt-compose-icons/blob/d141366874a5b246cf368a85d6ae85bef35b9d9a/packages/nuxt/src/module.ts#L173)

Show additional debug logs during setup.

#### Default

```ts
false
```

***

### dryRun?

```ts
optional dryRun?: boolean;
```

Defined in: [module.ts:157](https://github.com/arthu-pr/nuxt-compose-icons/blob/d141366874a5b246cf368a85d6ae85bef35b9d9a/packages/nuxt/src/module.ts#L157)

Log component names without writing files. Useful to preview what will be generated.

#### Default

```ts
false
```

***

### iconSizes?

```ts
optional iconSizes?: ComposeIconSize;
```

Defined in: [module.ts:123](https://github.com/arthu-pr/nuxt-compose-icons/blob/d141366874a5b246cf368a85d6ae85bef35b9d9a/packages/nuxt/src/module.ts#L123)

Icon sizes used to generate `--size-*` CSS variables and size classes.
Merged on top of the defaults, so unspecified keys remain available.

defaults: {
 sm: '1.5rem',
 md: '2rem',
 lg: '3rem',
 xl: '4rem'
}

***

### includeComposables?

```ts
optional includeComposables?: boolean;
```

Defined in: [module.ts:145](https://github.com/arthu-pr/nuxt-compose-icons/blob/d141366874a5b246cf368a85d6ae85bef35b9d9a/packages/nuxt/src/module.ts#L145)

Auto-import `useComposeIcon` and `useComposeIconRegistry` composables.
Disable if you only use the generated components and don't need dynamic lookup.

#### Default

```ts
true
```

***

### includeOverview?

```ts
optional includeOverview?: boolean;
```

Defined in: [module.ts:136](https://github.com/arthu-pr/nuxt-compose-icons/blob/d141366874a5b246cf368a85d6ae85bef35b9d9a/packages/nuxt/src/module.ts#L136)

Register the built-in `<ComposeIconOverview />` component.
Useful during development to browse all available icons.

#### Default

```ts
false
```

***

### pathToIcons?

```ts
optional pathToIcons?: string;
```

Defined in: [module.ts:102](https://github.com/arthu-pr/nuxt-compose-icons/blob/d141366874a5b246cf368a85d6ae85bef35b9d9a/packages/nuxt/src/module.ts#L102)

The path to the .svg icons directory

***

### reRunOnBuild?

```ts
optional reRunOnBuild?: boolean;
```

Defined in: [module.ts:165](https://github.com/arthu-pr/nuxt-compose-icons/blob/d141366874a5b246cf368a85d6ae85bef35b9d9a/packages/nuxt/src/module.ts#L165)

Whether to re-run icon generation on every build. (bypassing the built-in cache)

#### Default

```ts
false
```
