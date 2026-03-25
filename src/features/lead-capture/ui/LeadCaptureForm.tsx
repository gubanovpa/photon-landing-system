import SendRoundedIcon from '@mui/icons-material/SendRounded';
import {
  Alert,
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@app/store';
import {
  resetLeadCaptureState,
  selectLeadCaptureError,
  selectLeadCaptureLastSubmission,
  selectLeadCaptureStatus,
  submitLeadCapture,
} from '@features/lead-capture';
import type { FormEvent } from 'react';

type LeadCaptureFormProps = {
  label: string;
  placeholder: string;
  submitLabel: string;
};

export function LeadCaptureForm({ label, placeholder, submitLabel }: LeadCaptureFormProps) {
  const { t } = useTranslation('leadCapture');
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectLeadCaptureStatus);
  const error = useAppSelector(selectLeadCaptureError);
  const lastSubmission = useAppSelector(selectLeadCaptureLastSubmission);
  const [email, setEmail] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await dispatch(submitLeadCapture(email));
  };

  return (
    <Paper
      component="form"
      elevation={0}
      onSubmit={handleSubmit}
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: 5,
        backdropFilter: 'blur(18px)',
        background:
          'linear-gradient(180deg, rgba(18, 16, 14, 0.94) 0%, rgba(22, 19, 17, 0.96) 100%)',
        color: '#F7F1E8',
      }}
    >
      <Stack spacing={2.5}>
        <Typography variant="h3">{label}</Typography>
        <TextField
          label={label}
          type="email"
          required
          placeholder={placeholder}
          value={email}
          onChange={(event) => {
            if (status !== 'idle') {
              dispatch(resetLeadCaptureState());
            }

            setEmail(event.target.value);
          }}
        />
        <Button
          type="submit"
          variant="contained"
          endIcon={<SendRoundedIcon />}
          disabled={status === 'pending'}
          sx={{ mt: 0.5 }}
        >
          {status === 'pending' ? `${submitLabel}...` : submitLabel}
        </Button>
        {lastSubmission ? (
          <Alert severity="success">
            <Box>
              <Typography fontWeight={600}>{t('successTitle')}</Typography>
              <Typography variant="body2">{lastSubmission.email}</Typography>
            </Box>
          </Alert>
        ) : null}
        {error ? <Alert severity="error">{error}</Alert> : null}
      </Stack>
    </Paper>
  );
}
