import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    CreateRiskAssesmentrData: null,
  errors:[]
};

export const CreateRiskAssesmentSlice = createSlice({
    name: 'CreateRiskAssesmentSlice',
    initialState,
    reducers: {
        CreateRiskAssesmentSliceInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.CreateRiskAssesmentrData = action.payload;
        console.log(state.CreateRiskAssesmentrData);
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
export const { CreateRiskAssesmentSliceInfo ,errors} = CreateRiskAssesmentSlice.actions;

export default CreateRiskAssesmentSlice.reducer;