import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    CreateCarePlantrData: null,
  errors:[]
};

export const CreateCarePlantSlice = createSlice({
    name: 'CreateCarePlantSlice',
    initialState,
    reducers: {
        CreateCarePlantSliceInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.CreateCarePlantrData = action.payload;
        console.log(state.CreateCarePlantrData);
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
export const { CreateCarePlantSliceInfo ,errors} = CreateCarePlantSlice.actions;

export default CreateCarePlantSlice.reducer;