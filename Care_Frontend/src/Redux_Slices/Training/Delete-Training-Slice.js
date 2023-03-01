



import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   DelettrainingData: null,
  errors:[]
};

export const DeletTrainingSlice = createSlice({
    name: 'DelettrainingSlice',
    initialState,
    reducers: {
        DelettrainingSliceInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.DelettrainingData = action.payload;
        console.log(state.DelettrainingData);
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
export const { DelettrainingSliceInfo ,errors} = DeletTrainingSlice.actions;

export default DeletTrainingSlice.reducer;
