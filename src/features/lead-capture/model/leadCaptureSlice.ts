import { createSlice } from '@reduxjs/toolkit';
import { submitLeadCapture } from '@features/lead-capture/model/thunks';
import type { LeadCaptureState } from '@entities/lead';

const initialState: LeadCaptureState = {
  status: 'idle',
  lastSubmission: null,
  error: null,
};

const leadCaptureSlice = createSlice({
  name: 'leadCapture',
  initialState,
  reducers: {
    resetLeadCaptureState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitLeadCapture.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(submitLeadCapture.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.lastSubmission = action.payload;
        state.error = null;
      })
      .addCase(submitLeadCapture.rejected, (state, action) => {
        state.status = 'failed';
        state.error =
          typeof action.payload === 'string' ? action.payload : 'Failed to submit email.';
      });
  },
});

export const { resetLeadCaptureState } = leadCaptureSlice.actions;
export const leadCaptureReducer = leadCaptureSlice.reducer;
