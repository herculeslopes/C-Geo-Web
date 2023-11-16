import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isSidebarExpanded: false,
  shape: 'rectangular',
}

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarExpanded = !state.isSidebarExpanded;
    },

    viewSection: (state, action: PayloadAction<string>) => {
      state.shape = action.payload;
    }
  }
});

export const {
  toggleSidebar,
  viewSection
} = calculatorSlice.actions;

export default calculatorSlice.reducer;