import type { ThemeOptions } from '@mui/material';
import type { ThemeBuildContext } from '@shared/theme/types';

export function getSurfaceOverrides({ mode }: ThemeBuildContext): ThemeOptions['components'] {
  const isDark = mode === 'dark';

  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: `1px solid ${isDark ? 'rgba(247, 241, 232, 0.08)' : 'rgba(21, 19, 17, 0.08)'}`,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          boxShadow: 'none',
        },
      },
    },
  };
}
