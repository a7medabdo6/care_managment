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
import ShowEditeServiceUserSlice from "./Redux_Slices/Service-User/ShowEditeServiceUserSlice"
import EditeServiceUserDataSlice from "./Redux_Slices/Service-User/Edite-Service-User-Slice"
import GetRiskAssesmentSlice from "./Redux_Slices/RiskAssesment/Get-all-RISK-Slice"
import CreateRiskAssesmentSlice from "./Redux_Slices/RiskAssesment/Create-RiskAssesment-Slice"
import DeletRiskAssesmentSlice from "./Redux_Slices/RiskAssesment/Delet-RiskAssesment-Slice.js"
import GetAllCAREplaneSlice from "./Redux_Slices/CarePlan/Get-CarePlane-Slice"
import DeletCarePlanSlice from "./Redux_Slices/CarePlan/Delet-CarePlan-Slice"
import CreateCarePlantSlice from "./Redux_Slices/CarePlan/Create-CarePlan-Slice"
import EditeCarePlanDataSlice from "./Redux_Slices/CarePlan/Edite-CarePlan-Hook-Slice"
import EditeRiskAssesmentDataSlice from "./Redux_Slices/RiskAssesment/Edite-Risk-Assesment-Slice"
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
    ShowEditeServiceUserSlice:ShowEditeServiceUserSlice,
    EditeServiceUserDataSlice:EditeServiceUserDataSlice,
    GetRiskAssesmentSlice:GetRiskAssesmentSlice,
    CreateRiskAssesmentSlice:CreateRiskAssesmentSlice,
    DeletRiskAssesmentSlice:DeletRiskAssesmentSlice,
    GetAllCAREplaneSlice:GetAllCAREplaneSlice,
    DeletCarePlanSlice:DeletCarePlanSlice,
    CreateCarePlantSlice:CreateCarePlantSlice,
    EditeCarePlanDataSlice:EditeCarePlanDataSlice,
    EditeRiskAssesmentDataSlice:EditeRiskAssesmentDataSlice


   }
})