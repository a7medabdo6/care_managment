import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    CreateDoctorsgtrData: null,
  errors:[]
};

export const CreateDoctorsgtSlice = createSlice({
    name: 'CreateDoctorsgtSlice',
    initialState,
    reducers: {
        CreateDoctorsgtSliceInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.CreateDoctorsgtrData = action.payload;
        console.log(state.CreateDoctorsgtrData);
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
export const { CreateDoctorsgtSliceInfo ,errors} = CreateDoctorsgtSlice.actions;

export default CreateDoctorsgtSlice.reducer;