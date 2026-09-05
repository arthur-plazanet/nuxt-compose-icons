import { promises as fsp } from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { readDirectoryRecursively } from './read-directory-recursively';

describe('readDirectoryRecursively', () => {
  let root: string;

  afterEach(async () => {
    if (root) await fsp.rm(root, { recursive: true, force: true });
  });

  it('finds .svg files in nested real directories', async () => {
    root = await fsp.mkdtemp(path.join(os.tmpdir(), 'read-dir-test-'));
    await fsp.mkdir(path.join(root, 'outline'), { recursive: true });
    await fsp.writeFile(path.join(root, 'outline', 'arrow.svg'), '<svg/>');
    await fsp.writeFile(path.join(root, 'plain.svg'), '<svg/>');

    const files = await readDirectoryRecursively(root);

    expect(files.sort()).toEqual(
      [path.join(root, 'outline', 'arrow.svg'), path.join(root, 'plain.svg')].sort(),
    );
  });
});
