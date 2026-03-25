import { Box } from '@mui/material';
import { ContactSection } from '@widgets/contact';
import { FeatureGridSection } from '@widgets/feature-grid';
import { HeroSection } from '@widgets/hero';
import { HeroTitleSection } from '@widgets/hero-title';
import { LatestReleasesSection } from '@widgets/latest-releases';
import { RunnerShowcaseSection } from '@widgets/runner-showcase';
import { RunnerShowcaseOverlaySection } from '@widgets/runner-showcase-overlay';
import { ShowcaseSection } from '@widgets/showcase';

export function HomePage() {
  return (
    <Box component="section" pb={{ xs: 4, md: 6 }}>
      <HeroTitleSection />
      <HeroSection />
      <RunnerShowcaseSection />
      <RunnerShowcaseOverlaySection />
      <ShowcaseSection />
      <LatestReleasesSection />
      <FeatureGridSection />
      <ContactSection />
    </Box>
  );
}
