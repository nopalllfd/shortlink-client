import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchWithAuth } from '../../utils/fetchWithAuth';

const initialState = {
  profile: null,
  loading: false,
  error: null,
  success: false,
};

export const getProfile = createAsyncThunk('profile/get', async (payload, thunkAPI) => {
  try {
    const response = await fetchWithAuth(`/api/profiles`, thunkAPI.dispatch);
    const data = await response.json();
    if (!response.ok) {
      return thunkAPI.rejectWithValue(data?.message || 'Get profile failed');
    }
    console.log(data.data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addAsyncThunk(getProfile, {
      pending: (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      },
      fulfilled: (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.profile = action.payload.data;
      },
      rejected: (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      },
    });
  },
});

export default profileSlice.reducer;
