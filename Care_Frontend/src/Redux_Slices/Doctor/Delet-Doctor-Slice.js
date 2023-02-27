import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   DeletDoctorsgData: null,
  errors:[]
};

export const DeletDoctorsgSlice = createSlice({
    name: 'DeletDoctorsgSlice',
    initialState,
    reducers: {
        DeletDoctorsgSliceInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.DeletDoctorsgData = action.payload;
        console.log(state.DeletDoctorsgData);
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
export const { DeletDoctorsgSliceInfo ,errors} = DeletDoctorsgSlice.actions;

export default DeletDoctorsgSlice.reducer;