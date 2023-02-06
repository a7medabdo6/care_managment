import axios from "axios"
import { useMutation, useQuery } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';
import { useInsertDataSignUp } from "Api_Requests/useInsertDataSignUp";
import SignUpSlice, { UserSignUp } from "Redux_Slices/auth/SignUpSlice";

import notify from 'Hook/useNotifaction';
import { GetProfileSliceInfo } from "Redux_Slices/Profile/Get-profile-Slice";
import { UseGetProfileData } from "Api_Requests/UseGetProfileData";
import { UseGetAllCarePlanData } from "Api_Requests/CarePlan/UseGetCarePlanData";
import { GetCarePlanSliceInfo } from "Redux_Slices/CarePlan/Get-CarePlane-Slice";

export const useGetCarePlanApi = formData => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useQuery("GetAllCarePlan",UseGetAllCarePlanData, {
      onSuccess: res => {
        
        
         dispatch(GetCarePlanSliceInfo(res));
        // localStorage.setItem('user', JSON.stringify(result.data));
        // localStorage.setItem('token', JSON.stringify(result.data.token));
        //  window.location.replace('/');
        // router.history.push('/');



  
      },
      onError: err => {
        // console.log(err.response.data.message);
        //   dispatch(errorAtLogin(err.response.data.detail));
        //  return err;
        notify(err.response.data.message,"error")      

      }
    });
  };



