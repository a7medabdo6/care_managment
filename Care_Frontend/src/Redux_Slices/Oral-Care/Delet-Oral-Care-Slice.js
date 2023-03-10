import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   DeletOralCareData: null,
  errors:[]
};

export const DeletOralCareSlice = createSlice({
    name: 'DeletOralCareSlice',
    initialState,
    reducers: {
        DeletOralCareSliceInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.DeletOralCareData = action.payload;
        console.log(state.DeletOralCareData);
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
export const { DeletOralCareSliceInfo ,errors} = DeletOralCareSlice.actions;

export default DeletOralCareSlice.reducer;