import { Box } from '@mui/material';
import { ElementsShowcaseSection } from '@widgets/elements-showcase';

export function ElementsPage() {
  return (
    <Box component="section" pb={{ xs: 4, md: 6 }}>
      <ElementsShowcaseSection />
    </Box>
  );
}
