import { configureStore } from '@reduxjs/toolkit';
 import userSlice from './Redux_Slices/auth/Slice';
import SignUpSlice from "./Redux_Slices/auth/SignUpSlice"
import EditeProfileData from "./Redux_Slices/Profile/EditeProfileSlice"
export const store = configureStore({
  reducer: {
    UserInfo: userSlice,
    UserSignUp:SignUpSlice,
    EditeProfileData :EditeProfileData,
    

   }
})