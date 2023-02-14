import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   DeletHouseKeepingData: null,
  errors:[]
};

export const DeletHouseKeepingSlice = createSlice({
    name: 'DeletHouseKeepingSlice',
    initialState,
    reducers: {
        DeletHouseKeepingSliceInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.DeletHouseKeepingData = action.payload;
        console.log(state.DeletHouseKeepingData);
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
export const { DeletHouseKeepingSliceInfo ,errors} = DeletHouseKeepingSlice.actions;

export default DeletHouseKeepingSlice.reducer;