import { describe, expect, it } from 'vitest';
import { iconSizeDefault, resolveDefaultSizeKey, resolveFinalSizes } from './icon-sizing';

describe('resolveFinalSizes', () => {
  it('returns the defaults unchanged when no iconSizes are configured', () => {
    expect(resolveFinalSizes()).toEqual(iconSizeDefault);
  });

  it('merges custom sizes on top of the defaults, keeping unspecified keys', () => {
    expect(resolveFinalSizes({ md: '1rem', huge: '100px' })).toEqual({
      sm: '1.5rem',
      md: '1rem',
      lg: '3rem',
      xl: '4rem',
      huge: '100px',
    });
  });

  it('orders keys by real (parsed) size, not by merge/insertion order', () => {
    // xs/huge are appended after the sm/md/lg/xl defaults by the spread merge — without
    // sorting, Object.keys() would read sm, md, lg, xl, xs, huge: non-monotonic, and exactly
    // what a size picker iterating this map (e.g. the playground) would render in order.
    const result = resolveFinalSizes({ xs: '4px', huge: '100px' });
    expect(Object.keys(result)).toEqual(['xs', 'sm', 'md', 'lg', 'xl', 'huge']);
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
    // Merge order is sm, md, lg, xl, hero, tiny. 'hero' can't be parsed, so it stays at its
    // original index (4, between lg and xl); the parseable entries (sm/md/lg/xl/tiny) are
    // sorted by real size and fill the remaining slots in that order.
    const result = resolveFinalSizes({ hero: 'var(--spacing-8)', tiny: '2px' });
    expect(Object.keys(result)).toEqual(['tiny', 'sm', 'md', 'lg', 'hero', 'xl']);
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
});
