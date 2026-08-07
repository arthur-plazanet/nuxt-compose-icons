[nuxt-compose-icons](../../modules.md) / [module](../index.md) / IconComponentOptions

# Interface: IconComponentOptions

Defined in: [module.ts:31](https://github.com/arthu-pr/nuxt-compose-icons/blob/d141366874a5b246cf368a85d6ae85bef35b9d9a/packages/nuxt/src/module.ts#L31)

## Properties

### case?

```ts
optional case?: "pascal" | "kebab";
```

Defined in: [module.ts:56](https://github.com/arthu-pr/nuxt-compose-icons/blob/d141366874a5b246cf368a85d6ae85bef35b9d9a/packages/nuxt/src/module.ts#L56)

Naming convention for the generated component.

#### Default

```ts
'pascal'
```

***

### destDir?

```ts
optional destDir?: string;
```

Defined in: [module.ts:64](https://github.com/arthu-pr/nuxt-compose-icons/blob/d141366874a5b246cf368a85d6ae85bef35b9d9a/packages/nuxt/src/module.ts#L64)

Directory where generated components are written.
Defaults to `.nuxt/compose-icons`.

***

### fileFormat?

```ts
optional fileFormat?: "vue" | "ts";
```

Defined in: [module.ts:73](https://github.com/arthu-pr/nuxt-compose-icons/blob/d141366874a5b246cf368a85d6ae85bef35b9d9a/packages/nuxt/src/module.ts#L73)

Format of the generated component file, either as a Vue SFC (.vue) or as a TypeScript file (.ts)

#### Default

```ts
'ts'
```

***

### hasIndexFile?

```ts
optional hasIndexFile?: boolean;
```

Defined in: [module.ts:81](https://github.com/arthu-pr/nuxt-compose-icons/blob/d141366874a5b246cf368a85d6ae85bef35b9d9a/packages/nuxt/src/module.ts#L81)

Write an `index.ts` barrel file in `destDir`.

#### Default

```ts
false
```

***

### iconClasses?

```ts
optional iconClasses?: string | string[];
```

Defined in: [module.ts:89](https://github.com/arthu-pr/nuxt-compose-icons/blob/d141366874a5b246cf368a85d6ae85bef35b9d9a/packages/nuxt/src/module.ts#L89)

Extra CSS classes applied to every generated icon component.

#### Default

```ts
[]
```

***

### prefix?

```ts
optional prefix?: string;
```

Defined in: [module.ts:39](https://github.com/arthu-pr/nuxt-compose-icons/blob/d141366874a5b246cf368a85d6ae85bef35b9d9a/packages/nuxt/src/module.ts#L39)

Prefix prepended to the generated component name.
e.g. `'My'` → `<MyArrowUpIcon />`

#### Default

```ts
undefined
```

***

### suffix?

```ts
optional suffix?: string;
```

Defined in: [module.ts:48](https://github.com/arthu-pr/nuxt-compose-icons/blob/d141366874a5b246cf368a85d6ae85bef35b9d9a/packages/nuxt/src/module.ts#L48)

Suffix appended to the generated component name.
e.g. `'Icon'` → `<ArrowUpIcon />`

#### Default

```ts
'Icon'
```
