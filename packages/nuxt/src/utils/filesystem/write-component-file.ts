// Manually write the generated component in the runtime directory of the module, to inject it into the Nuxt app
import * as path from 'node:path';
import type { AbsolutePath } from '../../runtime/types/path';
import { assertAbsolute } from '../../runtime/types/path';
import { writeFile } from './helpers';

interface WriteComponentFileOptions {
  componentName: string;
  componentsDir: AbsolutePath;
  componentCode?: string;
  format?: 'vue' | 'ts';
}

export async function writeComponentFile({
  componentName,
  componentsDir,
  componentCode,
  format,
}: WriteComponentFileOptions): Promise<AbsolutePath> {
  const filePath = assertAbsolute(path.join(componentsDir, `${componentName}.${format}`));

  if (componentCode) {
    await writeFile(filePath, componentCode);
  }

  return filePath;
}
