import { Box } from '@mui/material';
import { BackgroundsShowcaseSection } from '@widgets/backgrounds-showcase';

export function BackgroundsPage() {
  return (
    <Box component="section" pb={{ xs: 4, md: 6 }}>
      <BackgroundsShowcaseSection />
    </Box>
  );
}
