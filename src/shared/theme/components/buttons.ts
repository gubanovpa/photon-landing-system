import type { ThemeOptions } from '@mui/material';

export function getButtonOverrides(): ThemeOptions['components'] {
  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          minHeight: 48,
          borderRadius: 14,
          paddingInline: 20,
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          paddingInline: 10,
        },
      },
    },
  };
}
