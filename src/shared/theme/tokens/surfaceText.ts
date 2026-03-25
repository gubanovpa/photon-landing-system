import type { PaletteMode } from '@mui/material';

export type SurfaceTone = 'dark' | 'light' | 'adaptive';

export function getSurfaceTextTokens(tone: SurfaceTone, mode: PaletteMode) {
  const resolvedTone = tone === 'adaptive' ? (mode === 'dark' ? 'dark' : 'light') : tone;

  return resolvedTone === 'dark'
    ? {
        primary: '#F5F5F2',
        secondary: 'rgba(245, 245, 242, 0.78)',
        accent: '#B5D254',
        chip: 'rgba(245, 245, 242, 0.08)',
      }
    : {
        primary: '#2D3F54',
        secondary: 'rgba(87, 111, 136, 0.9)',
        accent: '#6F7D40',
        chip: 'rgba(45, 63, 84, 0.06)',
      };
}
