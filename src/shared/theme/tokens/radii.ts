export const themeRadiusClassNames = {
  shell: 'theme-radius-shell',
  card: 'theme-radius-card',
  soft: 'theme-radius-soft',
  overlay: 'theme-radius-overlay',
  panel: 'theme-radius-panel',
  badge: 'theme-radius-badge',
} as const;

export function getRadiusUtilityStyles() {
  return {
    [`.${themeRadiusClassNames.shell}`]: {
      borderRadius: '10px !important',
      '@media (min-width:900px)': {
        borderRadius: '14px !important',
      },
    },
    [`.${themeRadiusClassNames.card}`]: {
      borderRadius: '10px !important',
    },
    [`.${themeRadiusClassNames.soft}`]: {
      borderRadius: '7px !important',
    },
    [`.${themeRadiusClassNames.overlay}`]: {
      borderRadius: '8px !important',
    },
    [`.${themeRadiusClassNames.panel}`]: {
      borderRadius: '12px !important',
    },
    [`.${themeRadiusClassNames.badge}`]: {
      borderRadius: '3.5px !important',
    },
  };
}
