import { configureStore } from '@reduxjs/toolkit';
 import userSlice from './Redux_Slices/auth/Slice';
import SignUpSlice from "./Redux_Slices/auth/SignUpSlice"

export const store = configureStore({
  reducer: {
    UserInfo: userSlice,
    UserSignUp:SignUpSlice,
    

   }
})