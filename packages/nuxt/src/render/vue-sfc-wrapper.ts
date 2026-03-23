/**
 * Wraps the generated component code in a Vue SFC <script lang="ts"> block,
 * producing a .vue file that is universally recognized by Volar, Nuxt, and other tooling.
 */
export function vueSFCWrapper(content: string): string {
  return `<script lang="ts">
${content}
</script>
`;
}
