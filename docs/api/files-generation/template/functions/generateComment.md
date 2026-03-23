[nuxt-compose-icons](../../../modules.md) / [files-generation/template](../index.md) / generateComment

# Function: generateComment()

```ts
function generateComment(content): string;
```

Generate a comment block for a given string.

If the content is longer than the header length, it will generate a block comment in several lines, otherwise it will generate a single line comment.

Example of block comment:
/\*

- This is a first line
- This is a second line

## Parameters

### content

`string` | `string`[]

## Returns

`string`
