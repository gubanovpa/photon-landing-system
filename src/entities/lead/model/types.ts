export type LeadSubmission = {
  email: string;
  submittedAt: string;
};

export type LeadCaptureStatus = 'idle' | 'pending' | 'succeeded' | 'failed';

export type LeadCaptureState = {
  status: LeadCaptureStatus;
  lastSubmission: LeadSubmission | null;
  error: string | null;
};
