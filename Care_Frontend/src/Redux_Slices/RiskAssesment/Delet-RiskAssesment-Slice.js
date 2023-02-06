import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   DeletRiskAssesmentrData: null,
  errors:[]
};

export const DeletRiskAssesmentSlice = createSlice({
    name: 'DeletRiskAssesmentSlice',
    initialState,
    reducers: {
        DeletRiskAssesmentSliceInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.DeletRiskAssesmentrData = action.payload;
        console.log(state.DeletRiskAssesmentrData);
      },
      errors: (state, action) => {
          // Redux Toolkit allows us to write "mutating" logic in reducers. It
          // doesn't actually mutate the state because it uses the Immer library,
          // which detects changes to a "draft state" and produces a brand new
          // immutable state based off those changes
          state.errors = action.payload;
        },
    
    }
  });

  // Action creators are generated for each case reducer function
export const { DeletRiskAssesmentSliceInfo ,errors} = DeletRiskAssesmentSlice.actions;

export default DeletRiskAssesmentSlice.reducer;