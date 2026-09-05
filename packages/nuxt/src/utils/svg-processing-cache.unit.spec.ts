import { promises as fsp } from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { SvgProcessingCache } from './svg-processing-cache';

const baseOptions = { iconClasses: ['compose-icon'] };

describe('SvgProcessingCache — prune', () => {
  it('drops entries for files no longer present, keeps the rest', async () => {
    const cache = await SvgProcessingCache.create({
      cacheDir: '/tmp/does-not-matter',
      rootDir: '/project',
      reRunOnBuild: true,
      ...baseOptions,
    });

    cache.set('/project/icons/kept.svg', 'hash-a', 'code-a');
    cache.set('/project/icons/removed.svg', 'hash-b', 'code-b');

    cache.prune(['/project/icons/kept.svg']);

    expect(cache.get('/project/icons/kept.svg', 'hash-a')).toBe('code-a');
    expect(cache.get('/project/icons/removed.svg', 'hash-b')).toBeNull();
  });

  it('is a no-op when every cached file is still present', async () => {
    const cache = await SvgProcessingCache.create({
      cacheDir: '/tmp/does-not-matter',
      rootDir: '/project',
      reRunOnBuild: true,
      ...baseOptions,
    });

    cache.set('/project/icons/a.svg', 'hash-a', 'code-a');
    cache.prune(['/project/icons/a.svg']);

    expect(cache.get('/project/icons/a.svg', 'hash-a')).toBe('code-a');
  });
});

describe('SvgProcessingCache — fingerprint sensitivity to defaultSize', () => {
  let cacheDir: string;

  afterEach(async () => {
    if (cacheDir) await fsp.rm(cacheDir, { recursive: true, force: true });
  });

  it('does not load a persisted cache written under a different default size key', async () => {
    cacheDir = await fsp.mkdtemp(path.join(os.tmpdir(), 'svg-cache-test-'));

    const original = await SvgProcessingCache.create({
      cacheDir,
      rootDir: '/project',
      ...baseOptions,
      defaultSize: 'md',
    });
    original.set('/project/icons/a.svg', 'hash-a', 'code-a');
    await original.save();

    // Same cache dir, only the configured default size key differs.
    const afterConfigChange = await SvgProcessingCache.create({
      cacheDir,
      rootDir: '/project',
      ...baseOptions,
      defaultSize: 'compact',
    });

    // If the fingerprint were blind to defaultSize, this would return the stale entry
    // generated with the old default baked into its component code.
    expect(afterConfigChange.get('/project/icons/a.svg', 'hash-a')).toBeNull();
  });
});
