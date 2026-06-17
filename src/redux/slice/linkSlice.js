import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchWithAuth } from '../../utils/fetchWithAuth';

const initialState = {
  link: null,
  loading: false,
  error: null,
  success: false,
};

export const getLinks = createAsyncThunk('link/get', async (payload, thunkAPI) => {
  try {
    const response = await fetchWithAuth(`/api/links`, thunkAPI.dispatch);
    const data = await response.json();
    if (!response.ok) {
      return thunkAPI.rejectWithValue(data?.message || 'get links failed');
    }
    console.log(data.data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteLink = createAsyncThunk('link/delete', async (id, thunkAPI) => {
  try {
    const response = await fetchWithAuth(
      `/api/links/${id}`,
      {
        method: 'DELETE',
      },
      thunkAPI.dispatch,
    );
    const data = await response.json();
    if (!response.ok) {
      return thunkAPI.rejectWithValue(data?.message || 'delete links failed');
    }
    console.log(data.data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const linkSlice = createSlice({
  name: 'link',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addAsyncThunk(getLinks, {
      pending: (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      },
      fulfilled: (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.links = action.payload.data;
      },
      rejected: (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      },
    });
  },
});

export default linkSlice.reducer;
