import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   EditeNotegData: null,
  errors:[]
};

export const EditeNotegDataSlice = createSlice({
  name: 'EditeNotegDataSlice',
  initialState,
  reducers: {
    EditeNotegDataSliceInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.EditeNotegData = action.payload;
      console.log(state.EditeNotegData);
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
export const { EditeNotegDataSliceInfo ,errors} = EditeNotegDataSlice.actions;

export default EditeNotegDataSlice.reducer;