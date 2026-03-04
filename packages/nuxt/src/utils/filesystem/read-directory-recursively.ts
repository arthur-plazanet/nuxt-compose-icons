/*
 * Utility function to read all files in a directory recursively
 * if the .svg are separated in different folders
 * such as: /icons/outline or /icons/solid for example
 */

import { promises as fsp } from 'node:fs';
import * as path from 'node:path';

export async function readDirectoryRecursively(
  dir: string,
  fileList: string[] = [],
): Promise<string[]> {
  const files = await fsp.readdir(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fsp.stat(filePath);
    if (stat.isDirectory()) {
      await readDirectoryRecursively(filePath, fileList);
    } else if (filePath.endsWith('.svg')) {
      fileList.push(filePath);
    }
  }

  return fileList;
}
