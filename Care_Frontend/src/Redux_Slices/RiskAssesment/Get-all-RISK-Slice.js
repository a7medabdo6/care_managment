import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    AllRiskAssesmentData: null,
  errors:[]
};

export const GetRiskAssesmentSlice = createSlice({
  name: 'GetRiskAssesmentSlice',
  initialState,
  reducers: {
    GetAllGetRiskAssesmentSliceInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.AllRiskAssesmentData = action.payload;
      console.log(state.AllRiskAssesmentData);
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
export const { GetAllGetRiskAssesmentSliceInfo ,errors} = GetRiskAssesmentSlice.actions;

export default GetRiskAssesmentSlice.reducer;