import { alpha } from '@mui/material/styles';
import type { Theme, ThemeOptions } from '@mui/material';
import type { ThemeBuildContext } from '@shared/theme';

export function getProjectThemeOptions(
  context: ThemeBuildContext,
  baseTheme: Theme,
): ThemeOptions {
  const isDark = context.mode === 'dark';

  const brand = {
    navy900: '#2D3F54',
    slate600: '#576F88',
    lime400: '#B5D254',
    offWhite50: '#F5F5F2',
    gray100: '#EEF2F5',
    deepTeal800: '#17382F',
    olive700: '#6F7D40',
  };

  const lightCanvas = 'radial-gradient(circle at top left, rgba(181, 210, 84, 0.18), transparent 24%), linear-gradient(180deg, rgba(87, 111, 136, 0.08) 0%, rgba(87, 111, 136, 0) 26%), #F5F5F2';
  const darkCanvas = 'radial-gradient(circle at top, rgba(181, 210, 84, 0.1), transparent 24%), radial-gradient(circle at right top, rgba(87, 111, 136, 0.22), transparent 28%), linear-gradient(180deg, rgba(23, 56, 47, 0.34) 0%, rgba(23, 56, 47, 0) 34%), #2D3F54';

  return {
    shape: {
      borderRadius: 18,
    },
    palette: {
      mode: context.mode,
      primary: {
        main: brand.navy900,
        light: '#425A75',
        dark: '#223142',
        contrastText: brand.offWhite50,
      },
      secondary: {
        main: brand.slate600,
        light: '#6E839B',
        dark: '#465A70',
        contrastText: brand.offWhite50,
      },
      info: {
        main: brand.lime400,
        light: '#C6DE73',
        dark: '#97B33A',
        contrastText: brand.navy900,
      },
      success: {
        main: brand.deepTeal800,
        contrastText: brand.offWhite50,
      },
      warning: {
        main: brand.olive700,
        contrastText: brand.offWhite50,
      },
      background: {
        default: isDark ? brand.navy900 : brand.offWhite50,
        paper: isDark ? '#33485F' : brand.gray100,
      },
      text: {
        primary: isDark ? brand.offWhite50 : brand.navy900,
        secondary: isDark ? alpha(brand.offWhite50, 0.76) : alpha(brand.slate600, 0.9),
      },
      divider: isDark ? alpha(brand.offWhite50, 0.12) : alpha(brand.navy900, 0.12),
    },
    typography: {
      fontFamily: '"Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      h1: {
        fontFamily: '"Montserrat", "Manrope", sans-serif',
        fontWeight: 700,
        fontSize: baseTheme.typography.pxToRem(48),
        lineHeight: 56 / 48,
        letterSpacing: '0.03em',
      },
      h2: {
        fontFamily: '"Montserrat", "Manrope", sans-serif',
        fontWeight: 600,
        fontSize: baseTheme.typography.pxToRem(32),
        lineHeight: 40 / 32,
        letterSpacing: '0.02em',
      },
      h3: {
        fontFamily: '"Montserrat", "Manrope", sans-serif',
        fontWeight: 600,
        fontSize: baseTheme.typography.pxToRem(24),
        lineHeight: 32 / 24,
        letterSpacing: '0.01em',
      },
      h4: {
        fontFamily: '"Montserrat", "Manrope", sans-serif',
        fontWeight: 600,
        fontSize: baseTheme.typography.pxToRem(20),
        lineHeight: 28 / 20,
        letterSpacing: '0.01em',
      },
      subtitle1: {
        fontSize: baseTheme.typography.pxToRem(20),
        lineHeight: 32 / 20,
        fontWeight: 400,
      },
      body1: {
        fontSize: baseTheme.typography.pxToRem(16),
        lineHeight: 26 / 16,
        fontWeight: 400,
      },
      body2: {
        fontSize: baseTheme.typography.pxToRem(14),
        lineHeight: 22 / 14,
        fontWeight: 400,
      },
      button: {
        fontSize: baseTheme.typography.pxToRem(14),
        lineHeight: 16 / 14,
        fontWeight: 600,
        letterSpacing: '0.03em',
        textTransform: 'none',
      },
      caption: {
        fontSize: baseTheme.typography.pxToRem(12),
        lineHeight: 18 / 12,
        fontWeight: 500,
        letterSpacing: '0.01em',
      },
      overline: {
        fontSize: baseTheme.typography.pxToRem(12),
        lineHeight: 18 / 12,
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      },
    },
    shadows: [
      'none',
      '0 10px 24px rgba(45, 63, 84, 0.10)',
      '0 16px 32px rgba(45, 63, 84, 0.12)',
      '0 22px 48px rgba(45, 63, 84, 0.14)',
      '0 28px 64px rgba(23, 56, 47, 0.18)',
      ...Array.from({ length: 20 }, () => '0 36px 84px rgba(23, 56, 47, 0.2)'),
    ] as ThemeOptions['shadows'],
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '::selection': {
            backgroundColor: alpha(brand.lime400, 0.34),
            color: brand.navy900,
          },
          body: {
            background: isDark ? darkCanvas : lightCanvas,
            color: isDark ? brand.offWhite50 : brand.navy900,
          },
          '.theme-bg-app-glass': {
            backgroundColor: `${isDark ? alpha(brand.navy900, 0.76) : alpha(brand.offWhite50, 0.82)} !important`,
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
          },
          '.theme-bg-panel-dark': {
            background: `linear-gradient(180deg, ${alpha('#223142', 0.98)} 0%, ${alpha(brand.navy900, 0.96)} 100%) !important`,
          },
          '.theme-bg-shell-dark': {
            background: `linear-gradient(135deg, ${alpha('#223142', 0.99)} 0%, ${alpha(brand.navy900, 0.97)} 58%, ${alpha(brand.deepTeal800, 0.88)} 100%) !important`,
          },
          '.theme-bg-shell-light': {
            background: `linear-gradient(180deg, ${alpha(brand.offWhite50, 0.96)} 0%, ${alpha(brand.gray100, 0.96)} 100%) !important`,
          },
          '.theme-bg-tint': {
            background: `linear-gradient(180deg, ${isDark ? alpha(brand.offWhite50, 0.03) : alpha(brand.navy900, 0.035)} 0%, rgba(0, 0, 0, 0) 100%) !important`,
          },
          '.theme-bg-tint-soft': {
            background: `linear-gradient(180deg, ${isDark ? alpha(brand.lime400, 0.05) : alpha(brand.slate600, 0.05)} 0%, rgba(0, 0, 0, 0) 100%) !important`,
          },
          '.theme-bg-tint-strong': {
            background: `linear-gradient(180deg, ${isDark ? alpha(brand.lime400, 0.12) : alpha(brand.navy900, 0.08)} 0%, ${isDark ? alpha(brand.lime400, 0.05) : alpha(brand.slate600, 0.04)} 100%) !important`,
          },
          '.theme-bg-glass-subtle': {
            backgroundColor: `${isDark ? alpha(brand.offWhite50, 0.05) : alpha(brand.navy900, 0.045)} !important`,
          },
          '.theme-bg-glass': {
            background: `${isDark ? alpha(brand.navy900, 0.64) : alpha(brand.offWhite50, 0.56)} !important`,
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          },
          '.theme-bg-glass-light': {
            background: `${alpha(brand.offWhite50, 0.7)} !important`,
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          },
          '.theme-bg-warm': {
            background: `linear-gradient(180deg, ${alpha('#F2F3E9', 0.98)} 0%, ${alpha('#E8EDD7', 0.98)} 100%) !important`,
          },
          '.theme-bg-warm-muted': {
            backgroundColor: `${alpha('#DEE5C3', 0.72)} !important`,
          },
          '.theme-bg-footer': {
            background: `linear-gradient(180deg, ${alpha('#223142', 0.98)} 0%, ${alpha(brand.deepTeal800, 1)} 100%) !important`,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            color: isDark ? brand.offWhite50 : brand.navy900,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: isDark ? alpha('#33485F', 0.86) : brand.gray100,
            borderColor: isDark ? alpha(brand.offWhite50, 0.08) : alpha(brand.navy900, 0.08),
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            paddingInline: 22,
          },
          contained: {
            backgroundColor: brand.lime400,
            color: brand.navy900,
            boxShadow: '0 14px 32px rgba(111, 125, 64, 0.18)',
          },
          containedPrimary: {
            '&:hover': {
              backgroundColor: '#A4C344',
              boxShadow: '0 18px 36px rgba(111, 125, 64, 0.24)',
            },
          },
          outlined: {
            borderColor: isDark ? alpha(brand.offWhite50, 0.24) : alpha(brand.navy900, 0.18),
          },
          outlinedPrimary: {
            color: isDark ? brand.offWhite50 : brand.navy900,
            '&:hover': {
              borderColor: isDark ? alpha(brand.lime400, 0.52) : alpha(brand.navy900, 0.3),
              backgroundColor: isDark ? alpha(brand.lime400, 0.08) : alpha(brand.navy900, 0.04),
            },
          },
          textPrimary: {
            color: isDark ? brand.offWhite50 : brand.navy900,
            '&:hover': {
              backgroundColor: isDark ? alpha(brand.offWhite50, 0.06) : alpha(brand.navy900, 0.05),
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            backgroundColor: isDark ? alpha(brand.offWhite50, 0.06) : alpha(brand.navy900, 0.05),
            borderColor: isDark ? alpha(brand.offWhite50, 0.16) : alpha(brand.navy900, 0.08),
          },
          colorPrimary: {
            backgroundColor: isDark ? alpha(brand.lime400, 0.12) : alpha(brand.lime400, 0.2),
            color: brand.navy900,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: isDark ? alpha(brand.offWhite50, 0.04) : alpha('#FFFFFF', 0.76),
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: alpha(isDark ? brand.offWhite50 : brand.navy900, 0.28),
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: brand.slate600,
              borderWidth: 1,
            },
          },
          notchedOutline: {
            borderColor: isDark ? alpha(brand.offWhite50, 0.16) : alpha(brand.navy900, 0.12),
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            textDecorationColor: alpha(brand.lime400, 0.4),
            textUnderlineOffset: '0.18em',
          },
        },
      },
    },
  };
}
