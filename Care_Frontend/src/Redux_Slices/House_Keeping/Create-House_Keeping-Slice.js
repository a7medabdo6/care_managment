import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    CreateHouseKeepingtrData: null,
  errors:[]
};

export const CreateHouseKeepingtSlice = createSlice({
    name: 'CreateHouseKeepingtSlice',
    initialState,
    reducers: {
        CreateHouseKeepingtSliceInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.CreateHouseKeepingtrData = action.payload;
        console.log(state.CreateHouseKeepingtrData);
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
export const { CreateHouseKeepingtSliceInfo ,errors} = CreateHouseKeepingtSlice.actions;

export default CreateHouseKeepingtSlice.reducer;