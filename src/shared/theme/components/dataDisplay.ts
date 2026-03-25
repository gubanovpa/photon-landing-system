import type { ThemeOptions } from '@mui/material';

export function getDataDisplayOverrides(): ThemeOptions['components'] {
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  };
}
