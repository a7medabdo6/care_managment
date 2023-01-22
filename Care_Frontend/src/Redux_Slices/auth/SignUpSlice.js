import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userSigbUpData: null,
  errors:[]
};

export const SignUpSlice = createSlice({
  name: 'SignUp',
  initialState,
  reducers: {
    UserSignUp: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.userSigbUpData = action.payload;
      console.log(state.userSigbUpData);
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
export const { UserSignUp ,errors} = SignUpSlice.actions;

export default SignUpSlice.reducer;