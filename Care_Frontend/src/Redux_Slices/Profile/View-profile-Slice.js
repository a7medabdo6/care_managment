import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    ProfileDataView : "jkhkjfdsaf",
  errors:[]
};

export const ViewProfileSlice = createSlice({
  name: 'ViewProfileSlice',
  initialState,
  reducers: {
    
    
      GetProfileViewSliceInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.ProfileDataView = action.payload;
        console.log(state.ProfileDataView);
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
export const { GetProfileViewSliceInfo ,errors} = ViewProfileSlice.actions;

export default ViewProfileSlice.reducer;