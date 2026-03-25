import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PageContainer } from '@shared/ui';

export function HeroTitleSection() {
  const { t } = useTranslation('heroTitle');

  return (
    <PageContainer sx={{ pt: { xs: 3, md: 7 }, pb: { xs: 3, md: 4 } }}>
      <Typography variant="h1" width="100%">
        {t('title')}
      </Typography>
    </PageContainer>
  );
}
