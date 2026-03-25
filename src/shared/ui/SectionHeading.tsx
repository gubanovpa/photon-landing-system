import { Box, Typography } from '@mui/material';
import type { BoxProps } from '@mui/material';

type SectionHeadingProps = BoxProps & {
  eyebrow: string;
  title: string;
  body?: string;
};

export function SectionHeading({ eyebrow, title, body, ...boxProps }: SectionHeadingProps) {
  return (
    <Box {...boxProps}>
      <Typography color="secondary" variant="overline">
        {eyebrow}
      </Typography>
      <Typography mt={1.5} variant="h2">
        {title}
      </Typography>
      {body ? (
        <Typography color="text.secondary" mt={2.5} maxWidth={720}>
          {body}
        </Typography>
      ) : null}
    </Box>
  );
}
