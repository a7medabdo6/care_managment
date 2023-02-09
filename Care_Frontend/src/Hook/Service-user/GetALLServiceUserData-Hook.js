import notify from 'Hook/useNotifaction';
import { UseGetProfileData } from "Api_Requests/UseGetProfileData";
import axios from "axios"
import { useMutation, useQuery } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';
import { useInsertDataSignUp } from "Api_Requests/useInsertDataSignUp";
import SignUpSlice, { UserSignUp } from "Redux_Slices/auth/SignUpSlice";
import { UseGetAllUserData } from 'Api_Requests/UseGetAllUser';
import { GetAllUserSliceInfo } from 'Redux_Slices/AllUser/Get-All-user-Slice';
import { GetAllServiceUserSliceInfo } from 'Redux_Slices/Service-User/Get-All-service-user-Slice';
import { UseGetAllServiceUserData } from 'Api_Requests/Service-user/Get-All-Service-UserData';
export const useGetAllServiceUserApi = formData => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useQuery("GetAllServiceUser",UseGetAllServiceUserData, {
      onSuccess: res => {
        
        
         dispatch(GetAllServiceUserSliceInfo(res));
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
