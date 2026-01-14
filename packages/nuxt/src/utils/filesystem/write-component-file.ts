// Manually write the generated component in the runtime directory of the module, to inject it into the Nuxt app
import * as path from 'node:path';
import { writeFile } from './helpers';

export async function writeComponentFile(
  componentName: string,
  componentsDir: string,
  componentCode?: string,
): Promise<string> {
  // TODO: Components dir parameter
  // const indexFilePath = path.join(componentsDir, 'index.ts');

  const filePath = path.join(componentsDir, `${componentName}.ts`);

  if (componentCode) {
    await writeFile(filePath, componentCode);
  }

  return filePath;
}
