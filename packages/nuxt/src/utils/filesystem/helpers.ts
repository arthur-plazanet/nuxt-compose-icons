import fs, { promises as fsp } from 'node:fs';
import * as path from 'node:path';
import type { AbsolutePath } from '../../runtime/types/path';

export { createDir, isFileExist, writeFile };

async function isFileExist(path: string): Promise<boolean> {
  try {
    await fsp.access(path, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function createDir(dirPath: AbsolutePath): Promise<AbsolutePath> {
  try {
    const projectFolder = new URL(dirPath, import.meta.url);
    await fsp.mkdir(projectFolder, { recursive: true });

    return dirPath as AbsolutePath;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error creating directory:', err);
    throw err;
  }
}

async function writeFile(filePath: AbsolutePath, content: string): Promise<void> {
  // Skip the write entirely when the file already holds this content — cache hits on a
  // custom component.destDir would otherwise still pay an fs write per icon on every start.
  try {
    if ((await fsp.readFile(filePath, 'utf-8')) === content) return;
  } catch {
    // Doesn't exist yet — fall through to write it.
  }

  // Ensure directory exists
  const dir = path.dirname(filePath) as AbsolutePath;
  (await createDir(dir)) as AbsolutePath;

  await fsp.writeFile(filePath, content, 'utf-8');
}
