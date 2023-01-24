import { configureStore } from '@reduxjs/toolkit';
 import userSlice from './Redux_Slices/auth/Slice';
import SignUpSlice from "./Redux_Slices/auth/SignUpSlice"
import EditeProfileData from "./Redux_Slices/Profile/EditeProfileSlice"
import GetProfileSlice from "./Redux_Slices/Profile/Get-profile-Slice"
export const store = configureStore({
  reducer: {
    UserInfo: userSlice,
    UserSignUp:SignUpSlice,
    EditeProfileData :EditeProfileData,
    GetProfileSlice :GetProfileSlice,

   }
})