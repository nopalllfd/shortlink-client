import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchWithAuth } from '../../utils/fetchWithAuth';
import { baseUrl } from '../../utils/env';

const initialState = {
  links: null,
  loading: false,
  error: null,
  success: false,
  isSlugExist: false,
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

export const addLinks = createAsyncThunk('link/add', async (payload, thunkAPI) => {
  try {
    const response = await fetchWithAuth(`/api/links`, { method: 'POST', body: JSON.stringify(payload) }, thunkAPI.dispatch);
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

export const checkSlug = createAsyncThunk('link/redirect', async (slug, thunkAPI) => {
  try {
    const response = await fetch(`${baseUrl}/api/links/${slug}`);
    const data = await response.json();
    console.log(data.data);
    if (data.data === false || data.data === null) {
      return thunkAPI.rejectWithValue(data?.message || 'no page');
    }

    return data.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue('no page');
  }
});

const linkSlice = createSlice({
  name: 'link',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // GET LINKS
      .addCase(getLinks.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(getLinks.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.links = action.payload.data;
      })
      .addCase(getLinks.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // ADD LINK
      .addCase(addLinks.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(addLinks.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;

        state.link = action.payload.data;
      })
      .addCase(addLinks.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // DELETE LINK
      .addCase(deleteLink.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(deleteLink.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(deleteLink.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })
      .addCase(checkSlug.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(checkSlug.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.isSlugExist = action.payload;
      })
      .addCase(checkSlug.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default linkSlice.reducer;
