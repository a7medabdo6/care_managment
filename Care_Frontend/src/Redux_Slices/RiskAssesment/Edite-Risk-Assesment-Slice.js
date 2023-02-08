import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   EditeRiskAssesmentData: null,
  errors:[]
};

export const EditeRiskAssesmentDataSlice = createSlice({
  name: 'EditeRiskAssesmentDataSlice',
  initialState,
  reducers: {
    EditeRiskAssesmentDataSliceInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.EditeRiskAssesmentData = action.payload;
      console.log(state.EditeRiskAssesmentData);
    },
    errors: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.errors = action.payload;
      },
    
  },

  


});

// Action creators are generated for each case reducer function
export const { EditeRiskAssesmentDataSliceInfo ,errors} = EditeRiskAssesmentDataSlice.actions;

export default EditeRiskAssesmentDataSlice.reducer;