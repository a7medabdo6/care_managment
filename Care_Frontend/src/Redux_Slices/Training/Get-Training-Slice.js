import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    TrainingData: null,
  errors:[]
};

export const GetAllTrainingeSlice = createSlice({
  name: 'GetTrainingSlice',
  initialState,
  reducers: {
    GetTrainingSliceInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.TrainingData = action.payload;
      console.log(state.TrainingData);
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
export const { GetTrainingSliceInfo ,errors} = GetAllTrainingeSlice.actions;

export default GetAllTrainingeSlice.reducer;