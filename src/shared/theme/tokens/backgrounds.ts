import type { PaletteMode } from '@mui/material';

export const themeBackgroundClassNames = {
  appGlass: 'theme-bg-app-glass',
  panelDark: 'theme-bg-panel-dark',
  shellDark: 'theme-bg-shell-dark',
  shellLight: 'theme-bg-shell-light',
  tint: 'theme-bg-tint',
  tintSoft: 'theme-bg-tint-soft',
  tintStrong: 'theme-bg-tint-strong',
  glassSubtle: 'theme-bg-glass-subtle',
  glass: 'theme-bg-glass',
  glassLight: 'theme-bg-glass-light',
  warm: 'theme-bg-warm',
  warmMuted: 'theme-bg-warm-muted',
  footer: 'theme-bg-footer',
} as const;

export function getBodyBackground(mode: PaletteMode) {
  return mode === 'dark'
    ? 'radial-gradient(circle at top, rgba(181, 210, 84, 0.1), transparent 24%), radial-gradient(circle at right top, rgba(87, 111, 136, 0.22), transparent 28%), linear-gradient(180deg, rgba(23, 56, 47, 0.34), transparent 34%), #2D3F54'
    : 'radial-gradient(circle at top left, rgba(181, 210, 84, 0.18), transparent 24%), linear-gradient(180deg, rgba(87, 111, 136, 0.08) 0%, rgba(87, 111, 136, 0) 26%), #F5F5F2';
}

export function getBackgroundUtilityStyles(mode: PaletteMode) {
  const isDark = mode === 'dark';

  return {
    [`.${themeBackgroundClassNames.appGlass}`]: {
      backgroundColor: `${isDark ? 'rgba(45, 63, 84, 0.76)' : 'rgba(245, 245, 242, 0.82)'} !important`,
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
    },
    [`.${themeBackgroundClassNames.panelDark}`]: {
      background:
        'linear-gradient(180deg, rgba(34, 49, 66, 0.98) 0%, rgba(45, 63, 84, 0.96) 100%) !important',
    },
    [`.${themeBackgroundClassNames.shellDark}`]: {
      background:
        'linear-gradient(135deg, rgba(34, 49, 66, 0.99) 0%, rgba(45, 63, 84, 0.97) 58%, rgba(23, 56, 47, 0.88) 100%) !important',
    },
    [`.${themeBackgroundClassNames.shellLight}`]: {
      background:
        'linear-gradient(180deg, rgba(245, 245, 242, 0.96) 0%, rgba(238, 242, 245, 0.96) 100%) !important',
    },
    [`.${themeBackgroundClassNames.tint}`]: {
      background:
        `linear-gradient(180deg, ${isDark ? 'rgba(245, 245, 242, 0.03)' : 'rgba(45, 63, 84, 0.035)'} 0%, rgba(0, 0, 0, 0) 100%) !important`,
    },
    [`.${themeBackgroundClassNames.tintSoft}`]: {
      background:
        `linear-gradient(180deg, ${isDark ? 'rgba(181, 210, 84, 0.05)' : 'rgba(87, 111, 136, 0.05)'} 0%, rgba(0, 0, 0, 0) 100%) !important`,
    },
    [`.${themeBackgroundClassNames.tintStrong}`]: {
      background:
        `linear-gradient(180deg, ${isDark ? 'rgba(181, 210, 84, 0.12)' : 'rgba(45, 63, 84, 0.08)'} 0%, ${isDark ? 'rgba(181, 210, 84, 0.05)' : 'rgba(87, 111, 136, 0.04)'} 100%) !important`,
    },
    [`.${themeBackgroundClassNames.glassSubtle}`]: {
      backgroundColor: `${isDark ? 'rgba(245, 245, 242, 0.05)' : 'rgba(45, 63, 84, 0.045)'} !important`,
    },
    [`.${themeBackgroundClassNames.glass}`]: {
      background: `${isDark ? 'rgba(45, 63, 84, 0.64)' : 'rgba(245, 245, 242, 0.56)'} !important`,
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
    },
    [`.${themeBackgroundClassNames.glassLight}`]: {
      background: 'rgba(245, 245, 242, 0.7) !important',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
    },
    [`.${themeBackgroundClassNames.warm}`]: {
      background:
        'linear-gradient(180deg, rgba(242, 243, 233, 0.98) 0%, rgba(232, 237, 215, 0.98) 100%) !important',
    },
    [`.${themeBackgroundClassNames.warmMuted}`]: {
      backgroundColor: 'rgba(222, 229, 195, 0.72) !important',
    },
    [`.${themeBackgroundClassNames.footer}`]: {
      background:
        'linear-gradient(180deg, rgba(34, 49, 66, 0.98) 0%, rgba(23, 56, 47, 1) 100%) !important',
    },
  };
}
