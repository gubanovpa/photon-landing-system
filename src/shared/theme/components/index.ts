import type { ThemeOptions } from '@mui/material';
import type { ThemeBuildContext } from '@shared/theme/types';
import { getButtonOverrides } from './buttons';
import { getCssBaselineOverrides } from './cssBaseline';
import { getDataDisplayOverrides } from './dataDisplay';
import { getInputOverrides } from './inputs';
import { getSurfaceOverrides } from './surfaces';

export function getBaseComponentOverrides(
  context: ThemeBuildContext,
): ThemeOptions['components'] {
  return {
    ...getCssBaselineOverrides(context),
    ...getSurfaceOverrides(context),
    ...getButtonOverrides(),
    ...getInputOverrides(context),
    ...getDataDisplayOverrides(),
  };
}
