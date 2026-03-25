import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import SouthEastRoundedIcon from '@mui/icons-material/SouthEastRounded';
import { Box, Button, Chip, Grid, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { APP_ROUTES } from '@shared/lib/constants';
import { themeClassNames } from '@shared/theme';
import { PageContainer } from '@shared/ui';

type HeroStat = {
  value: string;
  label: string;
};

export function HeroSection() {
  const { t } = useTranslation('hero');
  const stats = t('stats', { returnObjects: true }) as HeroStat[];

  return (
    <PageContainer sx={{ pt: { xs: 3, md: 7 }, pb: { xs: 7, md: 11 } }}>
      <Grid container spacing={{ xs: 4, lg: 7 }} alignItems="stretch">
        <Grid size={{ xs: 12, lg: 8 }}>
          <Grid container rowSpacing={3.5}>
            <Grid size={12}>
              <Chip
                label={t('eyebrow')}
                sx={{
                  alignSelf: 'flex-start',
                  height: 30,
                  px: 0.5,
                  backgroundColor: 'rgba(247, 241, 232, 0.06)',
                }}
              />
            </Grid>

            <Grid size={12}>
              <Typography variant="h1" maxWidth={860}>
                {t('title')}
              </Typography>
            </Grid>

            <Grid size={12}>
              <Grid container spacing={{ xs: 2.5, md: 3 }} alignItems="start">
                <Grid size={{ xs: 12, md: 8 }}>
                  <Typography color="text.secondary" maxWidth={520}>
                    {t('body')}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid size={12}>
              <Box display="flex" gap={1.5} alignItems="center">
                <Button
                  component={RouterLink}
                  to={APP_ROUTES.register}
                  variant="contained"
                  endIcon={<ArrowOutwardRoundedIcon />}
                >
                  {t('primaryAction')}
                </Button>
                <Button
                  component={RouterLink}
                  to="/#contact"
                  color="inherit"
                  variant="outlined"
                  endIcon={<SouthEastRoundedIcon />}
                >
                  {t('secondaryAction')}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <Paper
            className={`${themeClassNames.radius.panel} ${themeClassNames.background.panelDark}`}
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              minHeight: { xs: 'auto', lg: 520 },
              color: '#F7F1E8',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: 'auto -12% -18% auto',
                width: 220,
                height: 220,
                borderRadius: '50%',
                border: '1px solid rgba(247, 241, 232, 0.08)',
              },
            }}
          >
            <Grid container rowSpacing={3} sx={{ height: '100%' }}>
              <Grid size={12}>
                <Typography color="#F3B66B" variant="overline">
                  {t('panelEyebrow')}
                </Typography>
                <Typography mt={2} maxWidth={320} variant="h3">
                  {t('panelTitle')}
                </Typography>
                <Typography color="rgba(247, 241, 232, 0.84)" mt={2.25} maxWidth={300}>
                  {t('panelBody')}
                </Typography>
              </Grid>

              <Grid size={12} sx={{ mt: 'auto' }}>
                <Grid container spacing={1.25}>
                  {stats.map((stat) => (
                    <Grid key={stat.label} size={12}>
                      <Box
                        className={`${themeClassNames.radius.soft} ${themeClassNames.background.glassSubtle}`}
                        sx={{
                          p: 2.25,
                          border: '1px solid rgba(247, 241, 232, 0.1)',
                        }}
                      >
                        <Typography fontSize="1.6rem" fontWeight={700}>
                          {stat.value}
                        </Typography>
                        <Typography color="rgba(247, 241, 232, 0.82)" variant="body2">
                          {stat.label}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
