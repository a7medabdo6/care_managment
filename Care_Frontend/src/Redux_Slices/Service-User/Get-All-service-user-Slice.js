import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    AllServiceUserData: null,
  errors:[]
};

export const GetAllServiceUserSlice = createSlice({
  name: 'GetAllUserSlice',
  initialState,
  reducers: {
    GetAllServiceUserSliceInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.AllServiceUserData = action.payload;
      console.log(state.AllServiceUserData);
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
export const { GetAllServiceUserSliceInfo ,errors} = GetAllServiceUserSlice.actions;

export default GetAllServiceUserSlice.reducer;