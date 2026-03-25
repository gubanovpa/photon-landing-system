import { Grid, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LeadCaptureForm } from '@features/lead-capture';
import { themeClassNames } from '@shared/theme';
import { PageContainer, SectionHeading } from '@shared/ui';

export function ContactSection() {
  const { t } = useTranslation('contact');

  return (
    <PageContainer id="contact" sx={{ py: { xs: 4, md: 6 } }}>
      <Grid container spacing={{ xs: 3, lg: 7 }}>
        <Grid size={{ xs: 12, lg: 7 }}>
          <Paper
            className={`${themeClassNames.radius.card} ${themeClassNames.background.tintSoft}`}
            elevation={0}
            sx={{
              height: '100%',
              p: { xs: 3, md: 4 },
            }}
          >
            <SectionHeading
              eyebrow={t('eyebrow')}
              title={t('title')}
              body={t('body')}
            />
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, lg: 5 }}>
          <LeadCaptureForm
            label={t('eyebrow')}
            placeholder="founder@company.com"
            submitLabel={t('submitLabel')}
          />
        </Grid>
      </Grid>
    </PageContainer>
  );
}
