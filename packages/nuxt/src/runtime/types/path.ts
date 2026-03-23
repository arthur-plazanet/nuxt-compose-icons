import * as path from 'node:path';

export { assertAbsolute };
export type { AbsolutePath };

/**
 * To avoid confusion between relative (current working directory)
 * and absolute (start from root) paths, we can use branded types to distinguish them.
 *
 * @typedef {AbsolutePath}
 */
type AbsolutePath = string & { readonly __brand: 'AbsolutePath' };

function assertAbsolute(p: string): AbsolutePath {
  if (!path.isAbsolute(p)) throw new Error(`Expected absolute path, got: ${p}`);
  return p as AbsolutePath;
}
