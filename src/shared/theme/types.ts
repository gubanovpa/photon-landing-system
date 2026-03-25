import type { PaletteMode, Theme, ThemeOptions } from '@mui/material';

export type AppLanguage = 'en' | 'ru';

export type ThemeBuildContext = {
  mode: PaletteMode;
  language: AppLanguage;
};

export type ThemeExtension =
  | ThemeOptions
  | ((context: ThemeBuildContext, baseTheme: Theme) => ThemeOptions);
