import EastRoundedIcon from '@mui/icons-material/EastRounded';
import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { themeClassNames } from '@shared/theme';
import { PageContainer } from '@shared/ui';

type ReleaseCard = {
  title: string;
  body: string;
  action: string;
};

export function LatestReleasesSection() {
  const { t } = useTranslation('latestReleases');
  const cards = t('cards', { returnObjects: true }) as ReleaseCard[];

  return (
    <Box
      className={themeClassNames.background.warm}
      sx={{
        py: { xs: 5, md: 7 },
      }}
    >
      <PageContainer>
        <Stack spacing={{ xs: 3, md: 4 }}>
          <Typography color="#0E0D0C" variant="h2">
            {t('title')}
          </Typography>
          <Grid container spacing={2}>
            {cards.map((card) => (
              <Grid key={card.title} size={{ xs: 12, md: 6, xl: 3 }}>
                <Paper
                  className={`${themeClassNames.radius.card} ${themeClassNames.background.warmMuted}`}
                  elevation={0}
                  sx={{
                    height: '100%',
                    p: { xs: 3, md: 4 },
                    minHeight: 460,
                    border: '1px solid rgba(14, 13, 12, 0.08)',
                    color: '#0E0D0C',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Stack spacing={2}>
                    <Typography variant="h3">{card.title}</Typography>
                    <Typography color="rgba(14, 13, 12, 0.88)" variant="body1">
                      {card.body}
                    </Typography>
                  </Stack>
                  <Button
                    variant="contained"
                    color="inherit"
                    endIcon={<EastRoundedIcon />}
                    sx={{
                      alignSelf: 'flex-start',
                      backgroundColor: '#0E0D0C',
                      color: '#F8F3EA',
                      '&:hover': {
                        backgroundColor: '#1A1816',
                      },
                    }}
                  >
                    {card.action}
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </PageContainer>
    </Box>
  );
}
