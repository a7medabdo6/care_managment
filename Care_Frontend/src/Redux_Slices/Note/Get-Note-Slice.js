import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    NotegData: null,
  errors:[]
};

export const GetAllNoteSlice = createSlice({
  name: 'GetNotegSlice',
  initialState,
  reducers: {
    GetNotegSliceInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.NotegData = action.payload;
      console.log(state.NotegData);
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
export const { GetNotegSliceInfo ,errors} = GetAllNoteSlice.actions;

export default GetAllNoteSlice.reducer;