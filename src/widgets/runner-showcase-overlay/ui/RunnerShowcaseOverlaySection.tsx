import EastRoundedIcon from '@mui/icons-material/EastRounded';
import { Box, Button, Grid, Paper, Stack, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { displayFontFamily, getSurfaceTextTokens, themeClassNames } from '@shared/theme';
import { PageContainer } from '@shared/ui';

export function RunnerShowcaseOverlaySection() {
  const { t } = useTranslation('runnerShowcaseOverlay');
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const colors = getSurfaceTextTokens('adaptive', theme.palette.mode);

  return (
    <PageContainer sx={{ py: { xs: 4, md: 6 } }}>
      <Grid
        container
        spacing={{ xs: 3, lg: 4 }}
        sx={{
          position: 'relative',
          minHeight: { xs: 460, md: 520, lg: 540 },
          overflow: 'visible',
          alignItems: 'end',
        }}
      >
        <Box
          component="img"
          src="/assets/runner-2.png"
          alt={t('imageAlt')}
          sx={{
            position: 'absolute',
            right: { xs: '-20%', md: '-12%', lg: '-8%' },
            top: '50%',
            transform: 'translateY(-50%)',
            width: { xs: '94%', md: '68%', lg: '54%' },
            maxWidth: 860,
            height: 'auto',
            objectFit: 'contain',
            zIndex: 0,
            pointerEvents: 'none',
            opacity: isDark ? 0.78 : 0.95,
            filter: isDark ? 'saturate(0.78) brightness(0.86)' : 'none',
          }}
        />

        <Grid size={{ xs: 12, lg: 8 }}>
          <Stack
            spacing={3}
            sx={{
              position: 'relative',
              zIndex: 2,
              color: colors.primary,
              maxWidth: { lg: 860 },
              pr: { lg: 4 },
              '&::after': {
                content: '""',
                position: 'absolute',
                inset: { xs: '-8px -4px -8px -8px', lg: '-10px -20% -12px -10px' },
                background: isDark
                  ? 'linear-gradient(90deg, rgba(11, 10, 9, 0.9) 0%, rgba(11, 10, 9, 0.64) 58%, rgba(11, 10, 9, 0.14) 100%)'
                  : 'linear-gradient(90deg, rgba(243, 238, 230, 0.94) 0%, rgba(243, 238, 230, 0.7) 58%, rgba(243, 238, 230, 0.1) 100%)',
                zIndex: -1,
                borderRadius: 2,
                pointerEvents: 'none',
              },
            }}
        >
          <Typography variant="overline" sx={{ color: colors.accent }}>
            {t('eyebrow')}
          </Typography>
          <Typography variant="h1" sx={{ maxWidth: 760 }}>
            {t('title')}{' '}
            <Box component="span" sx={{ fontFamily: displayFontFamily }}>
              {t('accent')}
            </Box>
          </Typography>
          <Typography maxWidth={620} sx={{ color: colors.secondary }}>
            {t('body')}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25}>
            <Button variant="contained" endIcon={<EastRoundedIcon />}>
              {t('primaryAction')}
            </Button>
            <Button color="inherit" variant="outlined">
              {t('secondaryAction')}
            </Button>
          </Stack>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }} sx={{ alignSelf: 'end' }}>
          <Paper
            className={`${themeClassNames.radius.overlay} ${themeClassNames.background.glass}`}
            elevation={0}
            sx={{
              p: { xs: 2.5, md: 3 },
              border: isDark
                ? '1px solid rgba(247, 241, 232, 0.16)'
                : '1px solid rgba(15, 14, 13, 0.1)',
              backdropFilter: 'blur(6px)',
              position: 'relative',
              zIndex: 2,
              color: colors.primary,
            }}
          >
            <Stack spacing={1.5}>
              <Typography variant="overline" sx={{ color: colors.accent }}>
                {t('cardEyebrow')}
              </Typography>
              <Typography variant="h3">{t('cardTitle')}</Typography>
              <Typography sx={{ color: colors.secondary }}>{t('cardBody')}</Typography>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
