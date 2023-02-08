import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   Deletsocial_interestsData: null,
  errors:[]
};

export const Deletsocial_interestsSlice = createSlice({
    name: 'Deletsocial_interestsSlice',
    initialState,
    reducers: {
        Deletsocial_interestsSliceInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.Deletsocial_interestsData = action.payload;
        console.log(state.Deletsocial_interestsData);
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
export const { Deletsocial_interestsSliceInfo ,errors} = Deletsocial_interestsSlice.actions;

export default Deletsocial_interestsSlice.reducer;