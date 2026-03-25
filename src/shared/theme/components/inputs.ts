import type { ThemeOptions } from '@mui/material';
import type { ThemeBuildContext } from '@shared/theme/types';

export function getInputOverrides({ mode }: ThemeBuildContext): ThemeOptions['components'] {
  const isDark = mode === 'dark';

  return {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.72)',
        },
      },
    },
  };
}
