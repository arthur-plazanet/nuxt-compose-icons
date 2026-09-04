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
