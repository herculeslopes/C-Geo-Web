import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ShapeIndex } from './shapeIndex';
import Rectangular, { rectangularFormConfig } from './Formulas/rectangular';
import { formConfigMapping } from './formConfigMapping';

const initialState = {
  isSidebarExpanded: false,
  shape: ShapeIndex.RECTANGULAR,
  dimensions: {},
  section: new Rectangular(),
  formConfig: rectangularFormConfig,
  formInterval: null,
}

initialState.section.setDimensions(3, 3);

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarExpanded = !state.isSidebarExpanded;
    },
    displayShape: (state, action: PayloadAction<ShapeIndex>) => {
      state.shape = action.payload;

      state.formConfig = formConfigMapping[action.payload]
      // switch (action.payload) {
      //   case ShapeIndex.RECTANGULAR:
      //     state.formConfig = rectangularFormConfig;
      //     break;

      //   default:
      //     break;
      // }

    },
    solveSection: (state, action: PayloadAction<string>) => {

    },
    updateForm: (state, action: PayloadAction<{ name: string, value: number }>) => {
      const fieldId = state.formConfig.fields.findIndex(field => field.name === action.payload.name)
      state.formConfig.fields[fieldId] = { ...state.formConfig.fields[fieldId], value: action.payload.value }
    },

    updateDimension: (state) => {
      // console.log(state.formConfig.fields.map(field => ({ [field.name]: field.value })));
      state.dimensions = state.formConfig.fields.reduce((result, item) => {
        result[item.name] = item.value;
        return result;
      }, {})
    }
  }
});

export const {
  toggleSidebar,
  displayShape,
  updateForm,
  updateDimension,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;