[nuxt-compose-icons](../../modules.md) / [module](../index.md) / NuxtComposeIconsOptions

# Interface: NuxtComposeIconsOptions

## Properties

### debug?

```ts
optional debug: boolean;
```

Show additional logs than warnings and errors

---

### dryRun?

```ts
optional dryRun: boolean;
```

Dry run mode: log the component names and paths without writing files

#### Default

```ts
false;
```

---

### generatedComponentOptions

```ts
generatedComponentOptions: GeneratedComponentOptions;
```

---

### iconComponentList?

```ts
optional iconComponentList: object;
```

TODO: An object containing icon components to register
e.g. { 'custom-icon': CustomIconComponent }
This allows to register custom icon components directly without generating them from SVG files
Useful for registering third-party icon libraries or custom components
Note: The keys will be used as the component names (with prefix/suffix and case applied)
e.g. { 'custom-icon': CustomIconComponent } will be registered as "CustomIcon" or "custom-icon-icon" depending on the case option
default: {}

#### Index Signature

```ts
[key: string]: Component
```

---

### iconSizes?

```ts
optional iconSizes: unknown;
```

The icon sizes to generate CSS classes for
default:
{
xs: '0.5rem',
sm: '0.875rem',
md: '1rem',
lg: '1.5rem',
xl: '2.5rem',
}

---

### pathToIcons?

```ts
optional pathToIcons: string;
```

---

### reRunOnBuild?

```ts
optional reRunOnBuild: boolean;
```

Wether or not to run the module at every appplication build
default: true
