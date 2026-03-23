[nuxt-compose-icons](../../../modules.md) / [files-generation/generate-css-file](../index.md) / generateCssFile

# Function: generateCssFile()

```ts
function generateCssFile(iconSizes?): Record<string, string>;
```

Generate a CSS file with the custom icon sizes provided
that will then be used to style the icons (see /runtime/assets/compose-icon.css)

.compose-icon {
width: var(--icon-size);
height: var(--icon-size);
}

.compose-icon.Size-s {
--icon-size: var(--icon-size-s);
}

If the component prop change, it will update the '--icon-size' value
and since it's a CSS variable, it will automatically update the class applied to the icon
at runtime without involving too much JavaScript

## Parameters

### iconSizes?

#### iconClasses?

`string` \| `string`[] = `'compose-icon'`

#### iconSizes?

`unknown`

## Returns

`Record`\<`string`, `string`\>

CSS generated content

## Export
