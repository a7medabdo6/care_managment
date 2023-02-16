import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    HouseKeepingData: null,
  errors:[]
};

export const GetAllHouseKeepingeSlice = createSlice({
  name: 'GetHouseKeepingSlice',
  initialState,
  reducers: {
    GetHouseKeepingSliceInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.HouseKeepingData = action.payload;
      console.log(state.HouseKeepingData);
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
export const { GetHouseKeepingSliceInfo ,errors} = GetAllHouseKeepingeSlice.actions;

export default GetAllHouseKeepingeSlice.reducer;