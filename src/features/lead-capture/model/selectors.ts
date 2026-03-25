import type { RootState } from '@app/store';

export const selectLeadCaptureState = (state: RootState) => state.leadCapture;
export const selectLeadCaptureStatus = (state: RootState) => state.leadCapture.status;
export const selectLeadCaptureError = (state: RootState) => state.leadCapture.error;
export const selectLeadCaptureLastSubmission = (state: RootState) => state.leadCapture.lastSubmission;
