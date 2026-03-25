import type { ThemeOptions } from '@mui/material';

const deepestShadow = '0 40px 96px rgba(15, 12, 10, 0.2)';

export function getShadowTokens(): ThemeOptions['shadows'] {
  return [
    'none',
    '0 8px 30px rgba(15, 12, 10, 0.08)',
    '0 16px 40px rgba(15, 12, 10, 0.12)',
    '0 24px 56px rgba(15, 12, 10, 0.14)',
    '0 30px 72px rgba(15, 12, 10, 0.18)',
    ...Array.from({ length: 20 }, () => deepestShadow),
  ] as ThemeOptions['shadows'];
}
