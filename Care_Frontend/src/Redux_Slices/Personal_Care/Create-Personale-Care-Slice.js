import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    CreatePersonalCaretrData: null,
  errors:[]
};

export const CreatePersonalCaretSlice = createSlice({
    name: 'CreatePersonalCaretSlice',
    initialState,
    reducers: {
        CreatePersonalCaretSliceInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.CreatePersonalCaretrData = action.payload;
        console.log(state.CreatePersonalCaretrData);
      },
      errors: (state, action) => {
        console.log(state.errors);
          // Redux Toolkit allows us to write "mutating" logic in reducers. It
          // doesn't actually mutate the state because it uses the Immer library,
          // which detects changes to a "draft state" and produces a brand new
          // immutable state based off those changes
          state.errors = action.payload;
        },
    
    }
  });

  // Action creators are generated for each case reducer function
export const { CreatePersonalCaretSliceInfo ,errors} = CreatePersonalCaretSlice.actions;

export default CreatePersonalCaretSlice.reducer;
