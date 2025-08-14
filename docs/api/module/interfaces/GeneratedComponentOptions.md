[nuxt-compose-icons](../../modules.md) / [module](../index.md) / GeneratedComponentOptions

# Interface: GeneratedComponentOptions

Defined in: [packages/nuxt/src/module.ts:27](https://github.com/arthur-plazanet/nuxt-compose-icons/blob/99c7adb9fc4bc50d94b098116a004219498c2ced/packages/nuxt/src/module.ts#L27)

## Properties

### case

```ts
case: "pascal" | "kebab";
```

Defined in: [packages/nuxt/src/module.ts:41](https://github.com/arthur-plazanet/nuxt-compose-icons/blob/99c7adb9fc4bc50d94b098116a004219498c2ced/packages/nuxt/src/module.ts#L41)

Case to use for the component name
default "pascal"

---

### componentsDestDir?

```ts
optional componentsDestDir: string;
```

Defined in: [packages/nuxt/src/module.ts:46](https://github.com/arthur-plazanet/nuxt-compose-icons/blob/99c7adb9fc4bc50d94b098116a004219498c2ced/packages/nuxt/src/module.ts#L46)

TODO: The directory to save the generated components
default "runtime/components/icons-generated"

---

### prefix?

```ts
optional prefix: string;
```

Defined in: [packages/nuxt/src/module.ts:31](https://github.com/arthur-plazanet/nuxt-compose-icons/blob/99c7adb9fc4bc50d94b098116a004219498c2ced/packages/nuxt/src/module.ts#L31)

The prefix to use for the component - default false

---

### suffix?

```ts
optional suffix: string;
```

Defined in: [packages/nuxt/src/module.ts:36](https://github.com/arthur-plazanet/nuxt-compose-icons/blob/99c7adb9fc4bc50d94b098116a004219498c2ced/packages/nuxt/src/module.ts#L36)

The suffix to use for the component
default "Icon" ( PascalCase ) and "-icon" ( kebab-case )
