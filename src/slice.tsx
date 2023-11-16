import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  shape: 'rectangular',
}

const slice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    viewSection: (state, action: PayloadAction<string>) => {
      state.shape = action.payload;
    }
  }
});

export const { viewSection } = slice.actions;

export default slice.reducer;