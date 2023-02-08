import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   Editesocial_interestsData: null,
  errors:[]
};

export const Editesocial_interestsDataSlice = createSlice({
  name: 'Editesocial_interestsDataSlice',
  initialState,
  reducers: {
    Editesocial_interestsDataSliceInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.Editesocial_interestsData = action.payload;
      console.log(state.Editesocial_interestsData);
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
export const { Editesocial_interestsDataSliceInfo ,errors} = Editesocial_interestsDataSlice.actions;

export default Editesocial_interestsDataSlice.reducer;