import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    ProfileDetails: null,
  errors:[]
};

export const GetProfileSlice = createSlice({
  name: 'GetProfileSlice',
  initialState,
  reducers: {
    GetProfileSliceInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.ProfileDetails = action.payload;
      console.log(state.ProfileDetails);
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
export const { GetProfileSliceInfo ,errors} = GetProfileSlice.actions;

export default GetProfileSlice.reducer;