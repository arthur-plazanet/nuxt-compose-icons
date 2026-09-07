import { describe, expect, it } from 'vitest';
import { iconSizeDefault, resolveDefaultSizeKey, resolveFinalSizes } from './icon-sizing';

describe('resolveFinalSizes', () => {
  it('returns the defaults unchanged when no iconSizes are configured', () => {
    expect(resolveFinalSizes()).toEqual(iconSizeDefault);
  });

  it('fully replaces the defaults when iconSizes is provided, not merged on top', () => {
    // Providing any iconSizes means "this is my whole scale" — sm/lg/xl from the defaults
    // don't survive just because they weren't mentioned.
    expect(resolveFinalSizes({ md: '1rem', huge: '100px' })).toEqual({
      md: '1rem',
      huge: '100px',
    });
  });

  it('orders keys by real (parsed) size, not by declaration order', () => {
    // Declared out of size order — without sorting, Object.keys() would read them back exactly
    // as declared: non-monotonic, and exactly what a size picker (e.g. the playground) would
    // render in order.
    const result = resolveFinalSizes({ huge: '100px', xs: '4px', md: '16px' });
    expect(Object.keys(result)).toEqual(['xs', 'md', 'huge']);
  });

  it('mixes px, rem, and em units on a common comparable basis', () => {
    const result = resolveFinalSizes({ a: '10px', b: '0.5rem', c: '2em', d: '1rem' });
    // a=10px, b=8px, d=16px, c=32px
    expect(Object.keys(result).filter((k) => ['a', 'b', 'c', 'd'].includes(k))).toEqual([
      'b',
      'a',
      'd',
      'c',
    ]);
  });

  it('pins unparseable values at their original position, sorting parseable ones around them', () => {
    // Declared as hero, tiny, small. 'hero' can't be parsed, so it stays at its original
    // index (0); the parseable entries (tiny/small) are sorted by real size and fill the
    // remaining slots in declaration order among themselves.
    const result = resolveFinalSizes({ hero: 'var(--spacing-8)', tiny: '2px', small: '8px' });
    expect(Object.keys(result)).toEqual(['hero', 'tiny', 'small']);
  });
});

describe('resolveDefaultSizeKey', () => {
  it('keeps "md" for the zero-config defaults, even though it is not the first declared key', () => {
    // iconSizeDefault is declared as { sm, md, lg, xl } — 'sm' is Object.keys(...)[0], but
    // 'md' is the documented default. This is the exact case the naive fix regressed.
    expect(Object.keys(iconSizeDefault)[0]).toBe('sm');
    expect(resolveDefaultSizeKey(iconSizeDefault as Record<string, string>)).toBe('md');
  });

  it('keeps "md" when a custom iconSizes config still defines it, regardless of key order', () => {
    const sizes = { xs: '0.5rem', sm: '0.875rem', md: '1rem', lg: '2rem', xl: '4rem' };
    expect(resolveDefaultSizeKey(sizes)).toBe('md');
  });

  it('falls back to the first configured key when "md" is not defined at all', () => {
    const sizes = { compact: '1rem', spacious: '3rem' };
    expect(resolveDefaultSizeKey(sizes)).toBe('compact');
  });

  it('prefers the explicit defaultSize over "md" when it names a real key', () => {
    const sizes = { compact: '1rem', md: '2rem', spacious: '3rem' };
    expect(resolveDefaultSizeKey(sizes, 'spacious')).toBe('spacious');
  });

  it('falls back to "md" when defaultSize is set but not a configured key', () => {
    const sizes = { compact: '1rem', md: '2rem' };
    expect(resolveDefaultSizeKey(sizes, 'nonexistent')).toBe('md');
  });
});
