import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    ShowEditeServiceUserSliceInfoData: null,
  errors:[]
};

export const ShowEditeServiceUserSlice = createSlice({
    name: 'ShowEditeServiceUserSlice',
    initialState,
    reducers: {
        ShowEditeServiceUserSliceInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.ShowEditeServiceUserSliceInfoData = action.payload;
        console.log(state.ShowEditeServiceUserSliceInfoData);
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
export const { ShowEditeServiceUserSliceInfo ,errors} = ShowEditeServiceUserSlice.actions;

export default ShowEditeServiceUserSlice.reducer;