import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   DeletTrainingData: null,
  errors:[]
};

export const DeletTrainingSlice = createSlice({
    name: 'DeletTrainingSlice',
    initialState,
    reducers: {
        DeletTrainingSliceInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.DeletTrainingData = action.payload;
        console.log(state.DeletTrainingData);
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
export const { DeletTrainingSliceInfo ,errors} = DeletTrainingSlice.actions;

export default DeletTrainingSlice.reducer;