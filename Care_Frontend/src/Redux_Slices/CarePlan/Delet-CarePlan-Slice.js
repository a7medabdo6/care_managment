import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   DeletCarePlanData: null,
  errors:[]
};

export const DeletCarePlanSlice = createSlice({
    name: 'DeletCarePlanSlice',
    initialState,
    reducers: {
        DeletCarePlanSliceInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.DeletCarePlanData = action.payload;
        console.log(state.DeletCarePlanData);
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
export const { DeletCarePlanSliceInfo ,errors} = DeletCarePlanSlice.actions;

export default DeletCarePlanSlice.reducer;