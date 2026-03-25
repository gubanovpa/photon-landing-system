import type { PaletteMode, ThemeOptions } from '@mui/material';

export function getPaletteTokens(mode: PaletteMode): ThemeOptions['palette'] {
  const isDark = mode === 'dark';

  return {
    mode,
    primary: {
      main: isDark ? '#F3B66B' : '#171412',
      contrastText: isDark ? '#111111' : '#F8F3EA',
    },
    secondary: {
      main: isDark ? '#8EC5A3' : '#415C52',
    },
    background: {
      default: isDark ? '#0B0A09' : '#F3EEE6',
      paper: isDark ? '#141210' : '#FBF7F0',
    },
    text: {
      primary: isDark ? '#F7F1E8' : '#151311',
      secondary: isDark ? '#D8CEC1' : '#4F473D',
    },
    divider: isDark ? 'rgba(247, 241, 232, 0.14)' : 'rgba(21, 19, 17, 0.12)',
    success: {
      main: '#6BB58C',
    },
    error: {
      main: '#C76767',
    },
  };
}
