import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    EditeProfileData: null,
  errors:[]
};

export const EditeProfileSlice = createSlice({
  name: 'EditeProfileSlice',
  initialState,
  reducers: {
    EditeProfileSliceInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.EditeProfileData = action.payload;
      console.log(state.EditeProfileData);
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
export const { EditeProfileSliceInfo ,errors} = EditeProfileSlice.actions;

export default EditeProfileSlice.reducer;