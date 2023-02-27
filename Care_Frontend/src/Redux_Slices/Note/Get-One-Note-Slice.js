import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    OneNoteData: null,
  errors:[]
};

export const GetOneNoteeSlice = createSlice({
  name: 'GetOneNoteSlice',
  initialState,
  reducers: {
    GetOneNoteSliceInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.OneNoteData = action.payload;
      console.log(state.OneNoteData);
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
export const { GetOneNoteSliceInfo ,errors} = GetOneNoteeSlice.actions;

export default GetOneNoteeSlice.reducer;