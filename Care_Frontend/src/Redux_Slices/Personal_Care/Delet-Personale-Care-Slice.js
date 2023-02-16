import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   DeletPersonalCareData: null,
  errors:[]
};

export const DeletPersonalCareSlice = createSlice({
    name: 'DeletPersonalCareSlice',
    initialState,
    reducers: {
        DeletPersonalCareSliceInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.DeletPersonalCareData = action.payload;
        console.log(state.DeletPersonalCareData);
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
export const { DeletPersonalCareSliceInfo ,errors} = DeletPersonalCareSlice.actions;

export default DeletPersonalCareSlice.reducer;
