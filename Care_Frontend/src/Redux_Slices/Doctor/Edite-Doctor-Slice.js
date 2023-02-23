import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   EditeDoctorsgData: null,
  errors:[]
};

export const EditeDoctorsgDataSlice = createSlice({
  name: 'EditeDoctorsgDataSlice',
  initialState,
  reducers: {
    EditeDoctorsgDataSliceInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.EditeDoctorsgData = action.payload;
      console.log(state.EditeDoctorsgData);
    },
    errors: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.errors = action.payload;
      },
    
  },

  


});

// Action creators are generated for each case reducer function
export const { EditeDoctorsgDataSliceInfo ,errors} = EditeDoctorsgDataSlice.actions;

export default EditeDoctorsgDataSlice.reducer;