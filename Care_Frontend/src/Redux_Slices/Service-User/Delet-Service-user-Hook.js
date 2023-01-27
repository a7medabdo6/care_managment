import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   DeletServiceUserData: null,
  errors:[]
};

export const DeletServiceUserSlice = createSlice({
  name: 'DeletServiceUserSlice',
  initialState,
  reducers: {
    DeletServiceUserSliceInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.DeletServiceUserData = action.payload;
      console.log(state.DeletServiceUserData);
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
export const { DeletServiceUserSliceInfo ,errors} = DeletServiceUserSlice.actions;

export default DeletServiceUserSlice.reducer;