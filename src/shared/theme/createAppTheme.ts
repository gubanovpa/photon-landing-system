import { createTheme } from '@mui/material';
import { getBaseComponentOverrides } from '@shared/theme/components';
import { getBaseThemeTokens } from '@shared/theme/tokens';
import type { AppLanguage, ThemeBuildContext, ThemeExtension } from '@shared/theme/types';
import type { PaletteMode } from '@mui/material';

function resolveThemeExtension(
  extension: ThemeExtension | undefined,
  context: ThemeBuildContext,
  baseTheme: ReturnType<typeof createTheme>,
) {
  if (!extension) {
    return {};
  }

  return typeof extension === 'function' ? extension(context, baseTheme) : extension;
}

export function createAppTheme(
  mode: PaletteMode,
  language: AppLanguage,
  extension?: ThemeExtension,
) {
  const context = { mode, language };
  const baseTheme = createTheme({
    ...getBaseThemeTokens(context),
    components: getBaseComponentOverrides(context),
  });
  const projectThemeOptions = resolveThemeExtension(extension, context, baseTheme);

  return createTheme(baseTheme, projectThemeOptions);
}
