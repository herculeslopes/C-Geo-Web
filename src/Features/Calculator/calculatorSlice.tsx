import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ShapeIndex } from './shapeIndex';

const initialState = {
  isSidebarExpanded: false,
  shape: ShapeIndex.RECTANGULAR,
}

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarExpanded = !state.isSidebarExpanded;
    },
    displayShape: (state, action: PayloadAction<ShapeIndex>) => {
      state.shape = action.payload;
    },
    solveSection: (state, action: PayloadAction<string>) => {
      
    }
  }
});

export const {
  toggleSidebar,
  displayShape,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;