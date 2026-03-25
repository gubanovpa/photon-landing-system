import { configureStore } from '@reduxjs/toolkit';
import { leadCaptureReducer } from '@features/lead-capture';

export const store = configureStore({
  reducer: {
    leadCapture: leadCaptureReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
