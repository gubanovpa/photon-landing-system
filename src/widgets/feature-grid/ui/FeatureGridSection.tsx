import { Grid, Paper, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { themeClassNames } from '@shared/theme';
import { PageContainer, SectionHeading } from '@shared/ui';

type FeatureItem = {
  title: string;
  body: string;
};

export function FeatureGridSection() {
  const { t } = useTranslation('featureGrid');
  const items = t('items', { returnObjects: true }) as FeatureItem[];

  return (
    <PageContainer id="features" sx={{ py: { xs: 4, md: 6 } }}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <SectionHeading
            eyebrow={t('eyebrow')}
            title={t('title')}
            sx={{ mb: { xs: 1, md: 2 } }}
          />
        </Grid>
        {items.map((item, index) => (
          <Grid key={item.title} size={{ xs: 12, md: 6 }}>
            <Paper
              className={`${themeClassNames.radius.card} ${themeClassNames.background.tint}`}
              elevation={0}
              sx={{
                height: '100%',
                p: { xs: 3, md: 4 },
                pl: { xs: 2.5, md: 3 },
                minHeight: 300,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: 'none',
                borderLeft: '8px solid',
                borderColor: 'secondary.main',
              }}
            >
              <Stack spacing={2.25}>
                <Typography color="secondary" variant="overline">
                  0{index + 1}
                </Typography>
                <Typography variant="h3">{item.title}</Typography>
                <Typography color="text.secondary" maxWidth={320}>
                  {item.body}
                </Typography>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
}
