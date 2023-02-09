import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   EditeOralCareData: null,
  errors:[]
};

export const EditeOralCareDataSlice = createSlice({
  name: 'EditeOralCareDataSlice',
  initialState,
  reducers: {
    EditeOralCareDataSliceInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.EditeOralCareData = action.payload;
      console.log(state.EditeOralCareData);
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
export const { EditeOralCareDataSliceInfo ,errors} = EditeOralCareDataSlice.actions;

export default EditeOralCareDataSlice.reducer;