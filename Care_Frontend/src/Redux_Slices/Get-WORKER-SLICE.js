import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    OneworkerData: null,
  errors:[]
};

export const GetOneworkereSlice = createSlice({
  name: 'GetOneworkerSlice',
  initialState,
  reducers: {
    GetOneworkerSliceInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.OneworkerData = action.payload;
      console.log(state.OneworkerData);
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
export const { GetOneworkerSliceInfo ,errors} = GetOneworkereSlice.actions;

export default GetOneworkereSlice.reducer;