import { configureStore } from '@reduxjs/toolkit';

import authSlice from './slice/authSlice.js';
import profileSlice from './slice/profileSlice.js';
import linkSlice from './slice/linkSlice.js';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    profile: profileSlice,
    link: linkSlice,
  },
});
