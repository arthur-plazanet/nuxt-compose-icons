[nuxt-compose-icons](../../../../modules.md) / [runtime/composables/use-compose-icons-registry](../index.md) / useComposeIconRegistry

# Function: useComposeIconRegistry()

```ts
function useComposeIconRegistry(): object;
```

## Returns

### filteredIcons()

```ts
filteredIcons: (query) => ComputedRef<IconRegistryEntry[]>;
```

#### Parameters

##### query

`MaybeRefOrGetter`\<`string`\>

#### Returns

`ComputedRef`\<[`IconRegistryEntry`](../../../augments.app/#compose-icons/registry/interfaces/IconRegistryEntry.md)[]\>

### getIconsByName()

```ts
getIconsByName: (name) => IconRegistryEntry[];
```

Get an Icon Component by its name

#### Parameters

##### name

`string`

#### Returns

[`IconRegistryEntry`](../../../augments.app/#compose-icons/registry/interfaces/IconRegistryEntry.md)[]

### icons

```ts
icons: IconRegistryEntry[];
```

### searchIcons()

```ts
searchIcons: (query) => IconRegistryEntry[];
```

#### Parameters

##### query

`string`

#### Returns

[`IconRegistryEntry`](../../../augments.app/#compose-icons/registry/interfaces/IconRegistryEntry.md)[]
