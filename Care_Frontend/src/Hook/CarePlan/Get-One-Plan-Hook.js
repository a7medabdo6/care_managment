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
import { UseGetOnePlanData } from "Api_Requests/CarePlan/Use-Get-One-Plan-Data";
import { GetOnePlanSliceInfo } from "Redux_Slices/CarePlan/Get-One-Plan-Slice";


export const useGetOnePlanApi = id => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useQuery(["GetAOnePlan",id],UseGetOnePlanData, {
      onSuccess: res => {
        
        
         dispatch(GetOnePlanSliceInfo(res));
        // localStorage.setItem('user', JSON.stringify(result.data));
        // localStorage.setItem('token', JSON.stringify(result.data.token));
        //  window.location.replace('/');
        // router.history.push('/');



  
      },
      onError: err => {
        // console.log(err.response.data.message);
        //   dispatch(errorAtLogin(err.response.data.detail));
        //  return err;
        notify(err?.response?.data?.message,"error")       

      }
    });
  };



