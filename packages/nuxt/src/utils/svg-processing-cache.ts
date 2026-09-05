import { createHash } from 'node:crypto';
import { promises as fsp } from 'node:fs';
import * as path from 'node:path';
import { createSvgComponentCode } from '../render/svg-codegen';
import { vueSFCWrapper } from '../render/vue-sfc-wrapper';
import { optimizeSvg } from './svg/svgo-optimize';

interface CacheEntry {
  contentHash: string;
  componentCode: string;
}

interface CacheFile {
  optionsHash: string;
  entries: Record<string, CacheEntry>;
}

/**
 * Fixed input used to fingerprint the codegen pipeline for cache invalidation.
 *
 * The probe must exercise every transform the pipeline performs, because the fingerprint is
 * only as sensitive as the features the probe contains — a transform whose effect never shows
 * up in the probe's output can ship without invalidating warm caches. It currently carries a
 * root paint + stroke width (root-attribute rewrite) and a child paint (child-attribute
 * rewrite). Any future transform needs a corresponding feature added here.
 */
const CODEGEN_PROBE_SVG =
  '<svg viewBox="0 0 1 1" fill="#000" stroke-width="2"><path d="M0 0" stroke="#fff"/></svg>';

export interface CacheFingerprintOptions {
  iconClasses: string[];
  fileFormat?: 'vue' | 'ts';
  prefix?: string;
  suffix?: string;
  case?: 'pascal' | 'kebab';
  /**
   * The generated `size` prop's default value. Not exercised by the codegen probe (which
   * always uses its own fallback), so it's hashed directly here — same treatment as
   * `iconClasses`, which the probe also runs with a fixed value rather than the real one.
   */
  defaultSize?: string;
}

export interface SvgProcessingCacheOptions extends CacheFingerprintOptions {
  cacheDir: string;
  rootDir: string;
  reRunOnBuild?: boolean;
}

export class SvgProcessingCache {
  private cacheFilePath: string;
  private data: CacheFile;
  private dirty = false;

  constructor(
    cacheDir: string,
    optionsHash: string,
    private rootDir: string,
  ) {
    this.cacheFilePath = path.join(cacheDir, 'cache.json');
    this.data = { optionsHash, entries: {} };
  }

  static hash(value: unknown): string {
    return createHash('md5').update(JSON.stringify(value)).digest('hex').slice(0, 8);
  }

  /**
   * The cache stores fully generated component code, so it must also be invalidated when
   * the generator itself changes — not just when the SVG or the naming options change.
   * Rather than a hand-maintained version constant (which is easy to forget to bump, and
   * whose cost is silently serving stale components after an upgrade), we run a fixed
   * probe SVG through the exact pipeline and hash the result. Any change to the SVGO
   * config, the attribute transform, the component template or the SFC wrapper alters
   * this fingerprint automatically.
   */
  private static computeOptionsHash(options: CacheFingerprintOptions): string {
    let codegenProbe = createSvgComponentCode(
      'ProbeIcon',
      optimizeSvg(CODEGEN_PROBE_SVG, { iconClasses: ['probe'] }),
    );
    if (options.fileFormat === 'vue') {
      codegenProbe = vueSFCWrapper(codegenProbe);
    }

    return SvgProcessingCache.hash({
      iconClasses: options.iconClasses,
      fileFormat: options.fileFormat,
      prefix: options.prefix,
      suffix: options.suffix,
      case: options.case,
      defaultSize: options.defaultSize,
      codegen: SvgProcessingCache.hash(codegenProbe),
    });
  }

  /**
   * Builds the cache keyed off the codegen fingerprint and, unless `reRunOnBuild`
   * is set, loads any matching persisted entries from disk.
   */
  static async create(options: SvgProcessingCacheOptions): Promise<SvgProcessingCache> {
    const optionsHash = SvgProcessingCache.computeOptionsHash(options);
    const cache = new SvgProcessingCache(options.cacheDir, optionsHash, options.rootDir);
    if (!options.reRunOnBuild) {
      await cache.load();
    }
    return cache;
  }

  async load(): Promise<void> {
    try {
      const raw = await fsp.readFile(this.cacheFilePath, 'utf-8');
      const parsed: CacheFile = JSON.parse(raw);
      if (parsed.optionsHash === this.data.optionsHash) {
        this.data = parsed;
      }
    } catch {
      // No cache or stale — start fresh
    }
  }

  get(filePath: string, contentHash: string): string | null {
    const entry = this.data.entries[path.relative(this.rootDir, filePath)];
    return entry?.contentHash === contentHash ? entry.componentCode : null;
  }

  set(filePath: string, contentHash: string, componentCode: string): void {
    this.data.entries[path.relative(this.rootDir, filePath)] = { contentHash, componentCode };
    this.dirty = true;
  }

  /**
   * Drops entries for SVGs no longer present in the current run. Without this, deleting or
   * renaming a source icon leaves its entry in cache.json forever — it's dead weight, but
   * more importantly it means the file only ever grows, unbounded by the actual icon set.
   */
  prune(seenFilePaths: string[]): void {
    const seen = new Set(seenFilePaths.map((filePath) => path.relative(this.rootDir, filePath)));
    for (const key of Object.keys(this.data.entries)) {
      if (!seen.has(key)) {
        delete this.data.entries[key];
        this.dirty = true;
      }
    }
  }

  async save(): Promise<void> {
    if (!this.dirty) return;
    await fsp.mkdir(path.dirname(this.cacheFilePath), { recursive: true });
    await fsp.writeFile(this.cacheFilePath, JSON.stringify(this.data), 'utf-8');
  }
}
