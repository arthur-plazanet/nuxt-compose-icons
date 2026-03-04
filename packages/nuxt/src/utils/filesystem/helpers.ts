import fs, { promises as fsp } from 'node:fs';
import * as path from 'node:path';

export { createDir, isFileExist, writeFile };

async function isFileExist(path: string): Promise<boolean> {
  try {
    await fs.promises.access(path, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function createDir(dirPath: string): Promise<string> {
  try {
    const projectFolder = new URL(dirPath, import.meta.url);
    await fsp.mkdir(projectFolder, { recursive: true });

    return dirPath;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error creating directory:', err);
    throw err;
  }
}

async function writeFile(filePath: string, content: string): Promise<void> {
  // Ensure directory exists
  const dir = path.dirname(filePath);
  await createDir(dir);

  await fsp.writeFile(filePath, content, 'utf-8');
}
