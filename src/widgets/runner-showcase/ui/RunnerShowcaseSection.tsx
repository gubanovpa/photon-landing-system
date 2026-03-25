import EastRoundedIcon from '@mui/icons-material/EastRounded';
import { Box, Button, Grid, Paper, Stack, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { displayFontFamily, getSurfaceTextTokens, themeClassNames } from '@shared/theme';
import { PageContainer } from '@shared/ui';

export function RunnerShowcaseSection() {
  const { t } = useTranslation('runnerShowcase');
  const theme = useTheme();
  const colors = getSurfaceTextTokens('light', theme.palette.mode);

  return (
    <PageContainer sx={{ py: { xs: 4, md: 6 } }}>
      <Paper
        className={`${themeClassNames.radius.shell} ${themeClassNames.background.warm}`}
        elevation={0}
        sx={{
          p: { xs: 3, md: 5 },
          color: colors.primary,
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid rgba(15, 14, 13, 0.08)',
        }}
      >
        <Box
          component="img"
          src="/assets/runner-2.png"
          alt={t('main.imageAlt')}
          sx={{
            position: 'absolute',
            right: { xs: '-22%', md: '-10%', lg: '-4%' },
            bottom: 0,
            width: { xs: '96%', md: '72%', lg: '56%' },
            maxWidth: 840,
            height: 'auto',
            objectFit: 'contain',
            zIndex: 0,
            pointerEvents: 'none',
            opacity: 0.96,
          }}
        />

        <Grid
          container
          spacing={{ xs: 3, lg: 4 }}
          sx={{
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Grid size={{ xs: 12, lg: 8 }}>
            <Stack
              spacing={3}
              sx={{
                maxWidth: { lg: 880 },
              }}
            >
              <Typography variant="overline" sx={{ color: colors.accent }}>
                {t('main.eyebrow')}
              </Typography>
              <Typography variant="h1" sx={{ maxWidth: 760 }}>
                {t('main.title')}{' '}
                <Box component="span" sx={{ fontFamily: displayFontFamily }}>
                  {t('main.accent')}
                </Box>
              </Typography>
              <Typography maxWidth={620} sx={{ color: colors.secondary }}>
                {t('main.body')}
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25}>
                <Button variant="contained" color="inherit" endIcon={<EastRoundedIcon />}>
                  {t('main.primaryAction')}
                </Button>
                <Button color="inherit" variant="outlined">
                  {t('main.secondaryAction')}
                </Button>
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }} sx={{ alignSelf: 'end' }}>
            <Paper
              className={`${themeClassNames.radius.overlay} ${themeClassNames.background.glassLight}`}
              elevation={0}
              sx={{
                p: { xs: 2.5, md: 3 },
                border: '1px solid rgba(15, 14, 13, 0.08)',
                color: colors.primary,
              }}
            >
              <Stack spacing={1.5}>
                <Typography variant="overline" sx={{ color: colors.accent }}>
                  {t('main.cardEyebrow')}
                </Typography>
                <Typography variant="h3">{t('main.cardTitle')}</Typography>
                <Typography sx={{ color: colors.secondary }}>{t('main.cardBody')}</Typography>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </PageContainer>
  );
}
