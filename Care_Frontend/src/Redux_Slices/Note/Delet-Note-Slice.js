import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   DeletNotegData: null,
  errors:[]
};

export const DeletNotegSlice = createSlice({
    name: 'DeletNotegSlice',
    initialState,
    reducers: {
        DeletNotegSliceInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.DeletNotegData = action.payload;
        console.log(state.DeletNotegData);
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
export const { DeletNotegSliceInfo ,errors} = DeletNotegSlice.actions;

export default DeletNotegSlice.reducer;