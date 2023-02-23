import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    CreateNotegtrData: null,
  errors:[]
};

export const CreateNotegtSlice = createSlice({
    name: 'CreateNotegtSlice',
    initialState,
    reducers: {
        CreateNotegtSliceInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.CreateNotegtrData = action.payload;
        console.log(state.CreateNotegtrData);
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
export const { CreateNotegtSliceInfo ,errors} = CreateNotegtSlice.actions;

export default CreateNotegtSlice.reducer;