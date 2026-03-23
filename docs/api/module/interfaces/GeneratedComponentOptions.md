[nuxt-compose-icons](../../modules.md) / [module](../index.md) / GeneratedComponentOptions

# Interface: GeneratedComponentOptions

## Properties

### case

```ts
case: "pascal" | "kebab";
```

Case to use for the component name

#### Default

```ts
"pascal" ( PascalCase ) and "kebab" ( kebab-case )
```

---

### componentsDestDir?

```ts
optional componentsDestDir: string;
```

TODO: The directory to save the generated components

#### Default

```ts
'runtime/components/icons-generated';
```

---

### hasIndexFile?

```ts
optional hasIndexFile: boolean;
```

Wether to create an index file or not in the components directory

#### Default

```ts
false;
```

---

### iconClasses?

```ts
optional iconClasses: string | string[];
```

CSS Classes to apply to the generated components

#### Default

```ts
[];
```

---

### prefix?

```ts
optional prefix: string;
```

The prefix to use for the component

#### Default

```ts
undefined;
```

---

### suffix?

```ts
optional suffix: string;
```

The suffix to use for the component

#### Default

```ts
"Icon" ( PascalCase ) and "-icon" ( kebab-case )
```
