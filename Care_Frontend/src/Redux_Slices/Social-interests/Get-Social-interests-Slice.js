import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    social_interestsData: null,
  errors:[]
};

export const GetAllsocial_interestseSlice = createSlice({
  name: 'Getsocial_interestsSlice',
  initialState,
  reducers: {
    Getsocial_interestsSliceInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.social_interestsData = action.payload;
      console.log(state.social_interestsData);
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
export const { Getsocial_interestsSliceInfo ,errors} = GetAllsocial_interestseSlice.actions;

export default GetAllsocial_interestseSlice.reducer;