import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    CarePlanData: null,
  errors:[]
};

export const GetAllCAREplaneSlice = createSlice({
  name: 'GetCarePlanSlice',
  initialState,
  reducers: {
    GetCarePlanSliceInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.CarePlanData = action.payload;
      console.log(state.CarePlanData);
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
export const { GetCarePlanSliceInfo ,errors} = GetAllCAREplaneSlice.actions;

export default GetAllCAREplaneSlice.reducer;