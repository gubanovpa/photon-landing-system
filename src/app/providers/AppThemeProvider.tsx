import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { createContext, useContext, useMemo, useState } from 'react';
import type { PaletteMode } from '@mui/material';
import { getProjectThemeOptions } from '@app/config/theme';
import type { PropsWithChildren } from 'react';
import { useLanguage } from '@app/providers/LanguageProvider';
import { createAppTheme } from '@shared/theme';
import { STORAGE_KEYS } from '@shared/lib/constants';
import { getStoredValue, setStoredValue } from '@shared/lib/storage';

type ThemeModeContextValue = {
  mode: PaletteMode;
  toggleMode: () => void;
};

const ThemeModeContext = createContext<ThemeModeContextValue | null>(null);

export function AppThemeProvider({ children }: PropsWithChildren) {
  const { language } = useLanguage();
  const [mode, setMode] = useState<PaletteMode>(() =>
    getStoredValue<PaletteMode>(STORAGE_KEYS.themeMode, 'light'),
  );

  const theme = useMemo(
    () => createAppTheme(mode, language, getProjectThemeOptions),
    [mode, language],
  );

  const value = useMemo(
    () => ({
      mode,
      toggleMode: () => {
        setMode((currentMode) => {
          const nextMode = currentMode === 'light' ? 'dark' : 'light';
          setStoredValue(STORAGE_KEYS.themeMode, nextMode);
          return nextMode;
        });
      },
    }),
    [mode],
  );

  return (
    <ThemeModeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export function useThemeMode() {
  const context = useContext(ThemeModeContext);

  if (!context) {
    throw new Error('useThemeMode must be used within AppThemeProvider');
  }

  return context;
}
