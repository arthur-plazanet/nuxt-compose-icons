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
  // `withFileTypes` returns the entry kind that readdir already had from the OS, which
  // removes a separate `stat()` round-trip per file. Those stats were awaited one at a time
  // inside the loop, so the cost was N serialized syscalls — negligible on a local SSD but
  // the dominant term on a network mount, a Docker bind mount, or WSL2 cross-filesystem.
  const entries = await fsp.readdir(dir, { withFileTypes: true });

  // Subdirectories are walked in parallel; the recursion is I/O-bound and each branch
  // appends to its own list, so there is no ordering dependency between siblings.
  const nested = await Promise.all(
    entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => readDirectoryRecursively(path.join(dir, entry.name))),
  );

  for (const entry of entries) {
    if (!entry.isDirectory() && entry.name.endsWith('.svg')) {
      fileList.push(path.join(dir, entry.name));
    }
  }
  for (const branch of nested) fileList.push(...branch);

  return fileList;
}
