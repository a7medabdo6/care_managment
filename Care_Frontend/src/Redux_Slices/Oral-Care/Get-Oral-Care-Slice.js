import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    OralCareData: null,
  errors:[]
};

export const GetAllOralCareeSlice = createSlice({
  name: 'GetOralCareSlice',
  initialState,
  reducers: {
    GetOralCareSliceInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.OralCareData = action.payload;
      console.log(state.OralCareData);
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
export const { GetOralCareSliceInfo ,errors} = GetAllOralCareeSlice.actions;

export default GetAllOralCareeSlice.reducer;