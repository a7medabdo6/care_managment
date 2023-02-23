import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    DoctorsgData: null,
  errors:[]
};

export const GetAllDoctorsSlice = createSlice({
  name: 'GetDoctorsgSlice',
  initialState,
  reducers: {
    GetDoctorsgSliceInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.DoctorsgData = action.payload;
      console.log(state.DoctorsgData);
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
export const { GetDoctorsgSliceInfo ,errors} = GetAllDoctorsSlice.actions;

export default GetAllDoctorsSlice.reducer;