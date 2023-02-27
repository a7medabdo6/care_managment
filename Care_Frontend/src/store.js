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
import GetAllsocial_interestseSlice from "./Redux_Slices/Social-interests/Get-Social-interests-Slice"
import Createsocial_intereststSlice from "./Redux_Slices/Social-interests/Create-Social-interests-Slice"
import Deletsocial_interestsSlice from "./Redux_Slices/Social-interests/Delet-Social-interests-Slice"
import Editesocial_interestsDataSlice from "./Redux_Slices/Social-interests/Edite-Social-interests-Slice"
import CreateOralCaretSlice from "./Redux_Slices/Oral-Care/Create-Oral-Care-Slice"
import EditeOralCareDataSlice from "./Redux_Slices/Oral-Care/Edite-Oral-Care-Slice"
import DeletOralCareSlice from "./Redux_Slices/Oral-Care/Delet-Oral-Care-Slice"
import GetAllOralCareeSlice from "./Redux_Slices/Oral-Care/Get-Oral-Care-Slice"
import CreateHouseKeepingtSlice from "./Redux_Slices/House_Keeping/Create-House_Keeping-Slice"
import DeletHouseKeepingSlice from "./Redux_Slices/House_Keeping/Delet-House_Keeping-Slice"
import EditeHouseKeepingDataSlice from "./Redux_Slices/House_Keeping/Edite-House_Keeping-Slice"
import GetAllHouseKeepingeSlice from "./Redux_Slices/House_Keeping/Get-House_Keeping-Slice"
import CreatePersonalCaretSlice from "./Redux_Slices/Personal_Care/Create-Personale-Care-Slice.js"
import DeletPersonalCareSlice from "./Redux_Slices/Personal_Care/Delet-Personale-Care-Slice"
import EditePersonalCareDataSlice from "./Redux_Slices/Personal_Care/Edite-Personale-Care-Slice"
import GetOneServiceUserSlice  from "./Redux_Slices/Service-User/Get-One-Service-User-Slice"
import GetAllPersonalCareeSlice from "./Redux_Slices/Personal_Care/Get-Personale-Care-Slice"
import WorkerSignUpSlice from "./Redux_Slices/Worker/WorkerSignUpSlice"
import GetWorkerPlanseSlice from "./Redux_Slices/Worker/Get-Worker-Plans-Slice"
import GetOneplaneSlice from  "./Redux_Slices/CarePlan/Get-One-Plan-Slice"
import DeletDoctorsgSlice from "./Redux_Slices/Doctor/Delet-Doctor-Slice"
import EditeDoctorsgDataSlice from "./Redux_Slices/Doctor/Edite-Doctor-Slice"
import GetAllDoctorsSlice from "./Redux_Slices/Doctor/Get-Doctor-Slice"
import CreateDoctorsgtSlice from "./Redux_Slices/Doctor/Create-Doctor-Slice"
import GetAllNoteSlice from "./Redux_Slices/Note/Get-Note-Slice"
import EditeNotegDataSlice from "./Redux_Slices/Note/Edite-Note-Slice"
import DeletNotegSlice from "./Redux_Slices/Note/Delet-Note-Slice"
import CreateNotegtSlice from "./Redux_Slices/Note/Create-Note-Slice"
import GetOneNoteeSlice from "./Redux_Slices/Note/Get-One-Note-Slice"
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
    EditeRiskAssesmentDataSlice:EditeRiskAssesmentDataSlice,
    GetAllsocial_interestseSlice:GetAllsocial_interestseSlice,
    Createsocial_intereststSlice:Createsocial_intereststSlice,
    Deletsocial_interestsSlice:Deletsocial_interestsSlice,
    Editesocial_interestsDataSlice:Editesocial_interestsDataSlice,
    CreateOralCaretSlice:CreateOralCaretSlice,
    DeletOralCareSlice:DeletOralCareSlice,
    EditeOralCareDataSlice:EditeOralCareDataSlice,
    GetAllOralCareeSlice:GetAllOralCareeSlice,
    CreateHouseKeepingtSlice:CreateHouseKeepingtSlice,
    EditeHouseKeepingDataSlice:EditeHouseKeepingDataSlice,
    GetAllHouseKeepingeSlice:GetAllHouseKeepingeSlice,
    DeletHouseKeepingSlice:DeletHouseKeepingSlice,
    EditePersonalCareDataSlice:EditePersonalCareDataSlice,
    DeletPersonalCareSlice:DeletPersonalCareSlice,
    CreatePersonalCaretSlice:CreatePersonalCaretSlice,
    GetAllPersonalCareeSlice:GetAllPersonalCareeSlice,
    GetOneServiceUserSlice:GetOneServiceUserSlice,
    WorkerSignUpSlice:WorkerSignUpSlice,
    GetWorkerPlanseSlice:GetWorkerPlanseSlice,
    GetOneplaneSlice:GetOneplaneSlice,
    DeletDoctorsgSlice:DeletDoctorsgSlice,
    EditeDoctorsgDataSlice:EditeDoctorsgDataSlice,
    GetAllDoctorsSlice:GetAllDoctorsSlice,
    CreateDoctorsgtSlice:CreateDoctorsgtSlice,
    GetAllNoteSlice:GetAllNoteSlice,
    EditeNotegDataSlice:EditeNotegDataSlice,
    DeletNotegSlice:DeletNotegSlice,
    CreateNotegtSlice:CreateNotegtSlice,
    GetOneNoteeSlice:GetOneNoteeSlice
   }
})
