import { Button, Grid, Paper, Stack, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { PageContainer } from '@shared/ui';
import type { ComponentProps, FormEvent, ReactNode } from 'react';

type AuthPageShellProps = {
  eyebrow: string;
  title: string;
  body: string;
  submitLabel: string;
  alternateLabel: string;
  alternateTo: string;
  fields: ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void> | void;
  busy: boolean;
};

export function AuthPageShell({
  eyebrow,
  title,
  body,
  submitLabel,
  alternateLabel,
  alternateTo,
  fields,
  onSubmit,
  busy,
}: AuthPageShellProps) {
  return (
    <PageContainer sx={{ py: { xs: 5, md: 8 } }}>
      <Grid container spacing={{ xs: 3, lg: 8 }}>
        <Grid size={{ xs: 12, lg: 7 }}>
          <Paper
            elevation={0}
            sx={{
              height: '100%',
              p: { xs: 3, md: 5 },
              borderRadius: 8,
              minHeight: 420,
              display: 'flex',
              alignItems: 'flex-end',
              background:
                'linear-gradient(145deg, rgba(16, 15, 14, 0.98) 0%, rgba(44, 37, 32, 0.92) 100%)',
              color: '#F7F1E8',
            }}
          >
            <Stack spacing={2.5} maxWidth={520}>
              <Typography color="#F3B66B" variant="overline">
                {eyebrow}
              </Typography>
              <Typography variant="h2">{title}</Typography>
              <Typography color="rgba(247, 241, 232, 0.74)">{body}</Typography>
            </Stack>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, lg: 5 }}>
          <Paper
            component="form"
            elevation={0}
            onSubmit={onSubmit}
            sx={{
              height: '100%',
              p: { xs: 3, md: 4 },
              borderRadius: 8,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Stack spacing={2.5}>
              {fields}
              <Button type="submit" variant="contained" disabled={busy}>
                {busy ? `${submitLabel}...` : submitLabel}
              </Button>
              <Button component={RouterLink} to={alternateTo} color="inherit" variant="text">
                {alternateLabel}
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </PageContainer>
  );
}

export function AuthTextField(props: ComponentProps<typeof TextField>) {
  return <TextField fullWidth required {...props} />;
}
