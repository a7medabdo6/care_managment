import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    PersonalCareData: null,
  errors:[]
};

export const GetAllPersonalCareeSlice = createSlice({
  name: 'GetPersonalCareSlice',
  initialState,
  reducers: {
    GetPersonalCareSliceInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.PersonalCareData = action.payload;
      console.log(state.PersonalCareData);
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
export const { GetPersonalCareSliceInfo ,errors} = GetAllPersonalCareeSlice.actions;

export default GetAllPersonalCareeSlice.reducer;