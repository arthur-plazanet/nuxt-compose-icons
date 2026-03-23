[nuxt-compose-icons](../../../../modules.md) / [runtime/types/path](../index.md) / AbsolutePath

# Type Alias: AbsolutePath

```ts
type AbsolutePath = string & object;
```

To avoid confusion between relative (current working directory)
and absolute (start from root) paths, we can use branded types to distinguish them.

## Type Declaration

### \_\_brand

```ts
readonly __brand: "AbsolutePath";
```
