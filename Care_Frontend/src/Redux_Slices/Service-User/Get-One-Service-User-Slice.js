import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    oNEServiceUserData: null,
  errors:[]
};

export const GetOneServiceUserSlice = createSlice({
  name: 'GetoNEUserSlice',
  initialState,
  reducers: {
    GetOneServiceUserINFO: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.oNEServiceUserData = action.payload;
      console.log(state.oNEServiceUserData);
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
export const { GetOneServiceUserINFO ,errors} = GetOneServiceUserSlice.actions;

export default GetOneServiceUserSlice.reducer;
