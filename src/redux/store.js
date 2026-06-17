import { configureStore } from '@reduxjs/toolkit';

import authSlice from './slice/authSlice.js';
import profileSlice from './slice/profileSlice.js';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    profile: profileSlice,
  },
});
