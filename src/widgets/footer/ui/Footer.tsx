import { Box, Grid, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { themeClassNames } from '@shared/theme';
import { PageContainer } from '@shared/ui';

type FooterColumn = {
  title: string;
  links: string[];
};

export function Footer() {
  const { t } = useTranslation('footer');
  const columns = t('columns', { returnObjects: true }) as FooterColumn[];

  return (
    <Box
      className={themeClassNames.background.footer}
      component="footer"
      sx={{
        mt: { xs: 8, md: 12 },
        py: { xs: 6, md: 9 },
        color: '#F7F1E8',
        borderTop: '1px solid rgba(247, 241, 232, 0.08)',
      }}
    >
      <PageContainer>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={2}>
              <Typography variant="h3">{t('brand.name')}</Typography>
              <Typography color="rgba(247, 241, 232, 0.82)">{t('headline')}</Typography>
            </Stack>
          </Grid>
          {columns.map((column) => (
            <Grid key={column.title} size={{ xs: 6, md: 2 }}>
              <Stack spacing={1.25}>
                <Typography fontWeight={700}>{column.title}</Typography>
                {column.links.map((link) => (
                  <Typography key={link} color="rgba(247, 241, 232, 0.76)" variant="body2">
                    {link}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Typography color="rgba(247, 241, 232, 0.52)" mt={6} variant="body2">
          {t('copyright')}
        </Typography>
      </PageContainer>
    </Box>
  );
}
