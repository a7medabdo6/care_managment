import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    CreateOralCaretrData: null,
  errors:[]
};

export const CreateOralCaretSlice = createSlice({
    name: 'CreateOralCaretSlice',
    initialState,
    reducers: {
        CreateOralCaretSliceInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.CreateOralCaretrData = action.payload;
        console.log(state.CreateOralCaretrData);
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
export const { CreateOralCaretSliceInfo ,errors} = CreateOralCaretSlice.actions;

export default CreateOralCaretSlice.reducer;