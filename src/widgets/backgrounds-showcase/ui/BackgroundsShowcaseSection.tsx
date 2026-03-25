import { Box, Chip, Grid, Paper, Stack, Typography, useTheme } from '@mui/material';
import { displayFontFamily, getBodyBackground, getSurfaceTextTokens, themeClassNames } from '@shared/theme';
import { PageContainer, SectionHeading } from '@shared/ui';
import { useTranslation } from 'react-i18next';

type BackgroundKey = keyof typeof themeClassNames.background;
type DemoTone = Parameters<typeof getSurfaceTextTokens>[0];
type GroupKey = 'general' | 'primary' | 'secondary' | 'special';

type SampleItem = {
  kind: 'sample';
  key: BackgroundKey;
  tone: DemoTone;
};

type HeaderItem = {
  kind: 'header';
};

type BodyItem = {
  kind: 'body';
};

type DemoItem = SampleItem | HeaderItem | BodyItem;

const glassBackgroundKeys: BackgroundKey[] = ['appGlass', 'glassSubtle', 'glass', 'glassLight'];

const backgroundGroups: Array<{
  groupKey: GroupKey;
  items: DemoItem[];
}> = [
  {
    groupKey: 'general',
    items: [
      { kind: 'body' },
      { kind: 'header' },
      { kind: 'sample', key: 'footer', tone: 'dark' },
    ],
  },
  {
    groupKey: 'primary',
    items: [
      { kind: 'sample', key: 'appGlass', tone: 'adaptive' },
      { kind: 'sample', key: 'glass', tone: 'adaptive' },
      { kind: 'sample', key: 'glassSubtle', tone: 'adaptive' },
    ],
  },
  {
    groupKey: 'secondary',
    items: [
      { kind: 'sample', key: 'tintStrong', tone: 'adaptive' },
      { kind: 'sample', key: 'tint', tone: 'adaptive' },
      { kind: 'sample', key: 'tintSoft', tone: 'adaptive' },
    ],
  },
  {
    groupKey: 'special',
    items: [
      { kind: 'sample', key: 'panelDark', tone: 'dark' },
      { kind: 'sample', key: 'shellDark', tone: 'dark' },
      { kind: 'sample', key: 'shellLight', tone: 'light' },
      { kind: 'sample', key: 'warm', tone: 'light' },
      { kind: 'sample', key: 'glassLight', tone: 'light' },
      { kind: 'sample', key: 'warmMuted', tone: 'light' },
    ],
  },
];

export function BackgroundsShowcaseSection() {
  const { t } = useTranslation([
    'backgroundsShowcase',
    'showcase',
    'hero',
    'runnerShowcase',
    'runnerShowcaseOverlay',
  ]);
  const theme = useTheme();
  const bodyBackground = getBodyBackground(theme.palette.mode);

  const renderTypographyPreview = (colors: ReturnType<typeof getSurfaceTextTokens>) => (
    <Stack spacing={1.5} mt={3}>
      <Typography variant="overline" sx={{ color: colors.accent }}>
        {t('showcase:eyebrow')}
      </Typography>

      <Typography variant="overline" sx={{ color: colors.secondary }}>
        {t('runnerShowcaseOverlay:eyebrow')}
      </Typography>

      <Typography variant="h1" sx={{ color: colors.primary, maxWidth: 320 }}>
        Scale{' '}
        <Box component="span" sx={{ fontFamily: displayFontFamily }}>
          {t('runnerShowcase:main.accent')}
        </Box>
      </Typography>

      <Typography variant="h2" sx={{ color: colors.primary, maxWidth: 320 }}>
        Layer{' '}
        <Box component="span" sx={{ fontFamily: displayFontFamily }}>
          {t('runnerShowcaseOverlay:accent')}
        </Box>
      </Typography>

      <Typography variant="h3" sx={{ color: colors.primary }}>
        {t('hero:panelTitle')}
      </Typography>

      <Typography variant="h4" sx={{ color: colors.primary }}>
        {t('runnerShowcaseOverlay:cardTitle')}
      </Typography>

      <Typography variant="body1" sx={{ color: colors.secondary }}>
        {t('hero:panelBody')}{' '}
        <Box component="b" sx={{ color: colors.primary, fontWeight: 700 }}>
          {t('runnerShowcase:main.accent')}
        </Box>
        {' / '}
        <Box component="b" sx={{ color: colors.primary, fontWeight: 700 }}>
          {t('runnerShowcaseOverlay:accent')}
        </Box>
      </Typography>
    </Stack>
  );

  const renderSampleCard = (sample: SampleItem) => {
    const colors = getSurfaceTextTokens(sample.tone, theme.palette.mode);
    const isGlassSample = glassBackgroundKeys.includes(sample.key);
    const borderColor = sample.tone === 'dark' ? 'rgba(247, 241, 232, 0.12)' : 'divider';

    const sampleContent = (
      <Stack height="100%" justifyContent="space-between" spacing={3}>
        <Box>
          <Chip
            label={`.${themeClassNames.background[sample.key]}`}
            sx={{
              mb: 2.5,
              color: colors.primary,
              backgroundColor: colors.chip,
            }}
          />
          <Typography variant="h4" sx={{ color: colors.primary }}>
            {t(`samples.${sample.key}.title`)}
          </Typography>
          <Typography mt={1.5} sx={{ color: colors.secondary }}>
            {t(`samples.${sample.key}.body`)}
          </Typography>

          {renderTypographyPreview(colors)}
        </Box>

        <Box>
          <Typography variant="caption" sx={{ color: colors.secondary }}>
            {t('sampleTokenLabel')}
          </Typography>
          <Typography mt={0.75} sx={{ color: colors.primary }}>
            {`themeClassNames.background.${sample.key}`}
          </Typography>
        </Box>
      </Stack>
    );

    if (isGlassSample) {
      return (
        <Paper
          elevation={0}
          sx={{
            position: 'relative',
            minHeight: 520,
            p: { xs: 2, md: 2.5 },
            border: '1px solid',
            borderColor,
            overflow: 'hidden',
            background:
              theme.palette.mode === 'dark'
                ? 'linear-gradient(180deg, rgba(20, 18, 16, 0.82) 0%, rgba(27, 24, 21, 0.92) 100%)'
                : 'linear-gradient(180deg, rgba(244, 239, 231, 0.98) 0%, rgba(235, 228, 217, 0.98) 100%)',
          }}
        >
          <Box
            component="img"
            src="/assets/runner-2.png"
            alt=""
            sx={{
              position: 'absolute',
              right: { xs: -64, md: -84 },
              bottom: { xs: -36, md: -50 },
              width: { xs: 210, md: 248 },
              maxWidth: 'none',
              opacity: theme.palette.mode === 'dark' ? 0.8 : 0.92,
              transform: 'rotate(-8deg)',
              filter:
                theme.palette.mode === 'dark'
                  ? 'saturate(0.9) brightness(0.9)'
                  : 'saturate(1.02) brightness(1.02)',
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                theme.palette.mode === 'dark'
                  ? 'radial-gradient(circle at 24% 22%, rgba(243, 182, 107, 0.12), transparent 34%)'
                  : 'radial-gradient(circle at 24% 22%, rgba(232, 190, 143, 0.24), transparent 36%)',
            }}
          />
          <Box
            className={`${themeClassNames.radius.card} ${themeClassNames.background[sample.key]}`}
            sx={{
              position: 'relative',
              zIndex: 1,
              minHeight: 472,
              p: { xs: 3, md: 3.5 },
              border: '1px solid',
              borderColor,
              backdropFilter: 'blur(18px)',
            }}
          >
            {sampleContent}
          </Box>
        </Paper>
      );
    }

    return (
      <Paper
        className={`${themeClassNames.radius.card} ${themeClassNames.background[sample.key]}`}
        elevation={0}
        sx={{
          minHeight: 520,
          p: { xs: 3, md: 3.5 },
          border: '1px solid',
          borderColor,
        }}
      >
        {sampleContent}
      </Paper>
    );
  };

  const renderBodyCard = () => (
    <Paper
      elevation={0}
      sx={{
        minHeight: 520,
        p: { xs: 3, md: 3.5 },
        border: '1px solid',
        borderColor: 'divider',
        overflow: 'hidden',
      }}
    >
      <Stack height="100%" justifyContent="space-between" spacing={3}>
        <Box>
          <Chip label={t('bodySample.token')} sx={{ mb: 2.5 }} />
          <Typography variant="h4">{t('bodySample.previewTitle')}</Typography>
          <Typography color="text.secondary" mt={1.5}>
            {t('bodySample.previewBody')}
          </Typography>

          <Box
            sx={{
              mt: 3,
              minHeight: 248,
              p: { xs: 3, md: 4 },
              background: bodyBackground,
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            {renderTypographyPreview(getSurfaceTextTokens('adaptive', theme.palette.mode))}
          </Box>
        </Box>

        <Box>
          <Typography variant="caption" color="text.secondary">
            {t('sampleTokenLabel')}
          </Typography>
          <Typography mt={0.75}>getBodyBackground(mode)</Typography>
        </Box>
      </Stack>
    </Paper>
  );

  const renderHeaderCard = () => {
    const colors = getSurfaceTextTokens('adaptive', theme.palette.mode);

    return (
      <Paper
        elevation={0}
        sx={{
          minHeight: 520,
          p: { xs: 3, md: 3.5 },
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Stack height="100%" justifyContent="space-between" spacing={3}>
          <Box>
            <Chip
              label={t('generalSamples.header.token')}
              sx={{
                mb: 2.5,
                color: colors.primary,
                backgroundColor: colors.chip,
              }}
            />
            <Typography variant="h4" sx={{ color: colors.primary }}>
              {t('generalSamples.header.title')}
            </Typography>
            <Typography mt={1.5} sx={{ color: colors.secondary }}>
              {t('generalSamples.header.body')}
            </Typography>

            <Paper
              className={`${themeClassNames.radius.overlay} ${themeClassNames.background.appGlass}`}
              elevation={0}
              sx={{
                mt: 3,
                p: 2,
                border: '1px solid',
                borderColor: 'divider',
                backdropFilter: 'blur(22px)',
              }}
            >
              <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Box
                    className={themeClassNames.radius.badge}
                    sx={{
                      width: 40,
                      height: 40,
                      display: 'grid',
                      placeItems: 'center',
                      background: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                      fontWeight: 700,
                    }}
                  >
                    N
                  </Box>
                  <Box>
                    <Typography fontWeight={700} sx={{ color: colors.primary }}>
                      Nova
                    </Typography>
                    <Typography variant="body2" sx={{ color: colors.secondary }}>
                      {t('generalSamples.header.caption')}
                    </Typography>
                  </Box>
                </Stack>
                <Chip
                  label={t('generalSamples.header.chrome')}
                  size="small"
                  sx={{
                    color: colors.primary,
                    backgroundColor: colors.chip,
                  }}
                />
              </Stack>
            </Paper>
          </Box>

          <Box>
            <Typography variant="caption" sx={{ color: colors.secondary }}>
              {t('sampleTokenLabel')}
            </Typography>
            <Typography mt={0.75} sx={{ color: colors.primary }}>
              themeClassNames.background.appGlass
            </Typography>
          </Box>
        </Stack>
      </Paper>
    );
  };

  const renderDemoItem = (item: DemoItem, index: number) => {
    if (item.kind === 'body') {
      return (
        <Grid key={`body-${index}`} size={{ xs: 12, md: 6 }}>
          {renderBodyCard()}
        </Grid>
      );
    }

    if (item.kind === 'header') {
      return (
        <Grid key={`header-${index}`} size={{ xs: 12, md: 6 }}>
          {renderHeaderCard()}
        </Grid>
      );
    }

    return (
      <Grid key={item.key} size={{ xs: 12, md: 6 }}>
        {renderSampleCard(item)}
      </Grid>
    );
  };

  return (
    <Box py={{ xs: 6, md: 8 }}>
      <PageContainer>
        <SectionHeading
          eyebrow={t('intro.eyebrow')}
          title={t('intro.title')}
          body={t('intro.body')}
          mb={{ xs: 4, md: 5 }}
        />

        <Stack spacing={5}>
          {backgroundGroups.map((group) => (
            <Stack key={group.groupKey} spacing={4}>
              <Box>
                <Typography variant="overline" color="secondary">
                  {t(`groups.${group.groupKey}.eyebrow`)}
                </Typography>
                <Typography variant="h3" mt={1.5}>
                  {t(`groups.${group.groupKey}.title`)}
                </Typography>
                <Typography color="text.secondary" mt={1.5} maxWidth={760}>
                  {t(`groups.${group.groupKey}.body`)}
                </Typography>
              </Box>

              <Grid container spacing={3}>
                {group.items.map(renderDemoItem)}
              </Grid>
            </Stack>
          ))}
        </Stack>
      </PageContainer>
    </Box>
  );
}
