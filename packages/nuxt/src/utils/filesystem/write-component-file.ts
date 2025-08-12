// Manually write the generated component in the runtime directory of the module, to inject it into the Nuxt app
import * as fs from 'node:fs';
import * as path from 'node:path';

export function writeComponentFile(
  componentName: string,
  componentDir: string = path.resolve(__dirname, '../../runtime/components/icons-generated'),
  componentCode?: string,
  withIndex?: boolean,
): string {
  // TODO: Components dir parameter
  const componentsDir = componentDir;
  const indexFilePath = path.join(componentsDir, 'index.ts');

  const filePath = path.join(componentsDir, `${componentName}.ts`);
  if (componentCode) {
    fs.writeFileSync(filePath, componentCode, 'utf-8');
  }

  if (withIndex) {
    const importStatement = `export { default as ${componentName} } from './${componentName}.ts';\n`;

    if (!fs.existsSync(indexFilePath)) {
      // Create index.ts and add the import statement
      fs.writeFileSync(indexFilePath, importStatement, 'utf-8');
    } else {
      const indexContent = fs.readFileSync(indexFilePath, 'utf-8');
      if (!indexContent.includes(importStatement.trim())) {
        fs.appendFileSync(indexFilePath, importStatement, 'utf-8');
      }
    }
  }

  return filePath;
}
