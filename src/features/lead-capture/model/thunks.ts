import { createAsyncThunk } from '@reduxjs/toolkit';
import { submitLeadEmail } from '@features/lead-capture/api/submitLead';
import type { LeadSubmission } from '@entities/lead';

export const submitLeadCapture = createAsyncThunk<LeadSubmission, string>(
  'leadCapture/submitLeadCapture',
  async (email, thunkApi) => {
    try {
      return await submitLeadEmail(email);
    } catch (error) {
      return thunkApi.rejectWithValue(
        error instanceof Error ? error.message : 'Unexpected submit error.',
      ) as never;
    }
  },
);
