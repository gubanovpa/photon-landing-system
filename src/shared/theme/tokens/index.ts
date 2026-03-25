import type { ThemeOptions } from '@mui/material';
import type { ThemeBuildContext } from '@shared/theme/types';
import { themeBackgroundClassNames } from './backgrounds';
import { getBreakpointTokens, getShapeTokens, baseSpacing } from './layout';
import { getPaletteTokens } from './palette';
import { themeRadiusClassNames } from './radii';
import { getShadowTokens } from './shadows';
import { getTypographyTokens } from './typography';

export { bodyFontFamily, displayFontFamily, englishHeadingFontFamily } from './fonts';
export { getBodyBackground, getBackgroundUtilityStyles, themeBackgroundClassNames } from './backgrounds';
export { getRadiusUtilityStyles, themeRadiusClassNames } from './radii';
export { getSurfaceTextTokens } from './surfaceText';
export type { SurfaceTone } from './surfaceText';
export const themeClassNames = {
  background: themeBackgroundClassNames,
  radius: themeRadiusClassNames,
} as const;

export function getBaseThemeTokens(context: ThemeBuildContext): ThemeOptions {
  return {
    palette: getPaletteTokens(context.mode),
    shape: getShapeTokens(),
    spacing: baseSpacing,
    typography: getTypographyTokens(context.language),
    breakpoints: getBreakpointTokens(),
    shadows: getShadowTokens(),
  };
}
