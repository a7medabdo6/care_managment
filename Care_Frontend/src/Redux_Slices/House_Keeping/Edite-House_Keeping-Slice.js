import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   EditeHouseKeepingData: null,
  errors:[]
};

export const EditeHouseKeepingDataSlice = createSlice({
  name: 'EditeHouseKeepingDataSlice',
  initialState,
  reducers: {
    EditeHouseKeepingDataSliceInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.EditeHouseKeepingData = action.payload;
      console.log(state.EditeHouseKeepingData);
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
export const { EditeHouseKeepingDataSliceInfo ,errors} = EditeHouseKeepingDataSlice.actions;

export default EditeHouseKeepingDataSlice.reducer;