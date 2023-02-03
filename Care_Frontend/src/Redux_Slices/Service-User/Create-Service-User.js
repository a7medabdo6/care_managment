import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    CreateServiceUserData: null,
  errors:[]
};

export const CreateServiceUserSlice = createSlice({
    name: 'CreateServiceUserSlice',
    initialState,
    reducers: {
        CreateServiceUserSliceInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.CreateServiceUserData = action.payload;
        console.log(state.CreateServiceUserData);
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
export const { CreateServiceUserSliceInfo ,errors} = CreateServiceUserSlice.actions;

export default CreateServiceUserSlice.reducer;