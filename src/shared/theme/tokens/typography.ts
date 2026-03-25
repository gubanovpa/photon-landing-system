import type { ThemeOptions } from '@mui/material';
import type { AppLanguage } from '@shared/theme/types';
import { bodyFontFamily, englishHeadingFontFamily } from './fonts';

export function getTypographyTokens(language: AppLanguage): ThemeOptions['typography'] {
  const headingFontFamily = language === 'en' ? englishHeadingFontFamily : bodyFontFamily;

  return {
    fontFamily: bodyFontFamily,
    h1: {
      fontFamily: headingFontFamily,
      fontWeight: 700,
      fontSize: 'clamp(3.2rem, 6vw, 5.7rem)',
      lineHeight: 0.93,
      letterSpacing: '-0.06em',
    },
    h2: {
      fontFamily: headingFontFamily,
      fontWeight: 700,
      fontSize: 'clamp(2.2rem, 4vw, 4rem)',
      lineHeight: 0.98,
      letterSpacing: '-0.04em',
    },
    h3: {
      fontFamily: headingFontFamily,
      fontWeight: 600,
      fontSize: '1.35rem',
      lineHeight: 1.15,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.8,
    },
    button: {
      fontWeight: 600,
      letterSpacing: '-0.02em',
      textTransform: 'none',
    },
    overline: {
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
    },
  };
}
