import EastRoundedIcon from '@mui/icons-material/EastRounded';
import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { APP_ROUTES } from '@shared/lib/constants';
import { displayFontFamily, themeClassNames } from '@shared/theme';
import { PageContainer, SectionHeading } from '@shared/ui';

export function ShowcaseSection() {
  const { t } = useTranslation('showcase');
  const highlights = t('highlights', { returnObjects: true }) as string[];

  return (
    <PageContainer sx={{ py: { xs: 4, md: 6 } }}>
      <Paper
        className={`${themeClassNames.radius.shell} ${themeClassNames.background.shellDark}`}
        elevation={0}
        sx={{
          p: { xs: 3, md: 5 },
          color: '#F7F1E8',
          overflow: 'hidden',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: '0 auto 0 56%',
            width: '1px',
            background: 'linear-gradient(180deg, transparent, rgba(247, 241, 232, 0.14), transparent)',
            display: { xs: 'none', lg: 'block' },
          },
        }}
      >
        <Grid container spacing={{ xs: 4, lg: 6 }}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <Stack spacing={4}>
              <SectionHeading
                eyebrow={t('eyebrow')}
                title={t('title')}
                body={t('body')}
                sx={{
                  '& .MuiTypography-root': {
                    color: '#F7F1E8',
                  },
                  '& .MuiTypography-body1': {
                    color: 'rgba(247, 241, 232, 0.82)',
                  },
                  '& .MuiTypography-overline': {
                    color: '#F3B66B',
                  },
                }}
              />
              <Stack spacing={1}>
                {highlights.map((highlight) => (
                  <Box
                    key={highlight}
                    sx={{
                      py: 1.75,
                      borderBottom: '1px solid rgba(247, 241, 232, 0.12)',
                    }}
                  >
                    <Typography color="rgba(247, 241, 232, 0.88)">{highlight}</Typography>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }}>
            <Paper
              className={`${themeClassNames.radius.card} ${themeClassNames.background.tintStrong}`}
              elevation={0}
              sx={{
                height: '100%',
                p: { xs: 3, md: 4 },
                borderColor: 'rgba(247, 241, 232, 0.1)',
              }}
            >
              <Stack height="100%" justifyContent="space-between" spacing={4}>
                <Box>
                  <Typography color="#F3B66B" variant="overline">
                    {t('panelTitle')}
                  </Typography>
                  <Typography
                    mt={2}
                    variant="h2"
                    sx={{ fontFamily: displayFontFamily, color: '#F7F1E8' }}
                  >
                    MUI
                  </Typography>
                  <Typography color="rgba(247, 241, 232, 0.84)" mt={2.5}>
                    {t('panelBody')}
                  </Typography>
                </Box>
                <Button
                  component={RouterLink}
                  to={APP_ROUTES.login}
                  color="inherit"
                  variant="outlined"
                  endIcon={<EastRoundedIcon />}
                  sx={{
                    alignSelf: 'flex-start',
                    color: '#F7F1E8',
                    borderColor: 'rgba(247, 241, 232, 0.4)',
                    '&:hover': {
                      borderColor: 'rgba(247, 241, 232, 0.66)',
                      backgroundColor: 'rgba(247, 241, 232, 0.08)',
                    },
                  }}
                >
                  {t('actionLabel')}
                </Button>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </PageContainer>
  );
}
