import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   EditeTrainingData: null,
  errors:[]
};

export const EditeTrainingDataSlice = createSlice({
  name: 'EditeTrainingDataSlice',
  initialState,
  reducers: {
    EditeTrainingDataSliceInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.EditeTrainingData = action.payload;
      console.log(state.EditeTrainingData);
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
export const { EditeTrainingDataSliceInfo ,errors} = EditeTrainingDataSlice.actions;

export default EditeTrainingDataSlice.reducer;