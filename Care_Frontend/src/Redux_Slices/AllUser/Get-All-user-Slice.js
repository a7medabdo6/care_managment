import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    AllUserData: null,
    ProfileDataView : null,
  errors:[]
};

export const GetAllUserSlice = createSlice({
  name: 'GetAllUserSlice',
  initialState,
  reducers: {
    GetAllUserSliceInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.AllUserData = action.payload;
      console.log(state.AllUserData);
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
export const { GetAllUserSliceInfo,GetProfileViewSliceInfo ,errors} = GetAllUserSlice.actions;

export default GetAllUserSlice.reducer;