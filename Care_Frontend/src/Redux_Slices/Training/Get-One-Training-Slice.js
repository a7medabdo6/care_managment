import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    OneTrainingData: null,
  errors:[]
};

export const GetOneTrainingeSlice = createSlice({
  name: 'GetOneTrainingSlice',
  initialState,
  reducers: {
    GetOneTrainingSliceInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.OneTrainingData = action.payload;
      console.log(state.OneTrainingData);
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
export const { GetOneTrainingSliceInfo ,errors} = GetOneTrainingeSlice.actions;

export default GetOneTrainingeSlice.reducer;