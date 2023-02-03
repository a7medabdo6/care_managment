import { configureStore } from '@reduxjs/toolkit';
 import userSlice from './Redux_Slices/auth/Slice';
import SignUpSlice from "./Redux_Slices/auth/SignUpSlice"
import EditeProfileData from "./Redux_Slices/Profile/EditeProfileSlice"
import GetProfileSlice from "./Redux_Slices/Profile/Get-profile-Slice"
import GreateProfileSlice from "./Redux_Slices/Profile/GreateProfileSlice"
import GetAllUserSlice from "./Redux_Slices/AllUser/Get-All-user-Slice"
import ViewProfileSlice from "./Redux_Slices/Profile/View-profile-Slice"
import CreateServiceUserSlice from "./Redux_Slices/Service-User/Create-Service-User"
import GetAllServiceUserSlice from "./Redux_Slices/Service-User/Get-All-service-user-Slice"
import DeletServiceUserSlice from "./Redux_Slices/Service-User/Delet-Service-user-Hook"
export const store = configureStore({
  reducer: {
    UserInfo: userSlice,
    UserSignUp:SignUpSlice,
    EditeProfileData :EditeProfileData,
    GetProfileSlice :GetProfileSlice,
    GreateProfileSlice :GreateProfileSlice,
    GetAllUserSlice : GetAllUserSlice,
    ViewProfileSlice : ViewProfileSlice,
    CreateServiceUserSlice : CreateServiceUserSlice,
    GetAllServiceUserSlice :GetAllServiceUserSlice,
    DeletServiceUserSlice:DeletServiceUserSlice,

   }
})