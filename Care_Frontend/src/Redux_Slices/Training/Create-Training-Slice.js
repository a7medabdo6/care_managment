import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    CreateTrainingrData: null,
  errors:[]
};

export const CreateTrainingSlice = createSlice({
    name: 'CreateTrainingSlice',
    initialState,
    reducers: {
        CreateTrainingSliceInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.CreateTrainingrData = action.payload;
        console.log(state.CreateTrainingrData);
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
export const { CreateTrainingSliceInfo ,errors} = CreateTrainingSlice.actions;

export default CreateTrainingSlice.reducer;