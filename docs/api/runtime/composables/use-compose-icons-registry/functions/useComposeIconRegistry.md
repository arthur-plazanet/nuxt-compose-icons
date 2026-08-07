[nuxt-compose-icons](../../../../modules.md) / [runtime/composables/use-compose-icons-registry](../index.md) / useComposeIconRegistry

# Function: useComposeIconRegistry()

```ts
function useComposeIconRegistry(): object;
```

Defined in: [runtime/composables/use-compose-icons-registry.ts:7](https://github.com/arthu-pr/nuxt-compose-icons/blob/d141366874a5b246cf368a85d6ae85bef35b9d9a/packages/nuxt/src/runtime/composables/use-compose-icons-registry.ts#L7)

## Returns

### filteredIcons

```ts
filteredIcons: (query) => ComputedRef<IconRegistryEntry[]>;
```

#### Parameters

##### query

`MaybeRefOrGetter`\<`string`\>

#### Returns

`ComputedRef`\<`IconRegistryEntry`[]\>

### getIconsByName

```ts
getIconsByName: (name) => IconRegistryEntry[];
```

Get an Icon Component by its name

#### Parameters

##### name

`string`

#### Returns

`IconRegistryEntry`[]

### icons

```ts
icons: IconRegistryEntry[];
```

### searchIcons

```ts
searchIcons: (query) => IconRegistryEntry[];
```

#### Parameters

##### query

`string`

#### Returns

`IconRegistryEntry`[]
