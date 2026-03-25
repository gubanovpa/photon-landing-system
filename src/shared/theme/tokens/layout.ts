import type { ThemeOptions } from '@mui/material';

export const baseSpacing = 8;

export function getShapeTokens(): ThemeOptions['shape'] {
  return {
    borderRadius: 2,
  };
}

export function getBreakpointTokens(): ThemeOptions['breakpoints'] {
  return {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  };
}
