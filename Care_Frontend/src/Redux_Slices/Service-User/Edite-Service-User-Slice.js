import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   EditeServiceUserData: null,
  errors:[]
};

export const EditeServiceUserDataSlice = createSlice({
  name: 'EditeServiceUserDataSlice',
  initialState,
  reducers: {
    EditeServiceUserDataSliceInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.EditeServiceUserData = action.payload;
      console.log(state.EditeServiceUserData);
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
export const { EditeServiceUserDataSliceInfo ,errors} = EditeServiceUserDataSlice.actions;

export default EditeServiceUserDataSlice.reducer;