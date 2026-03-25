import type { ThemeOptions } from '@mui/material';
import { getBackgroundUtilityStyles, getBodyBackground, getRadiusUtilityStyles } from '@shared/theme/tokens';
import type { ThemeBuildContext } from '@shared/theme/types';

export function getCssBaselineOverrides({
  mode,
}: ThemeBuildContext): ThemeOptions['components'] {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: getBodyBackground(mode),
        },
        ...getRadiusUtilityStyles(),
        ...getBackgroundUtilityStyles(mode),
      },
    },
  };
}
