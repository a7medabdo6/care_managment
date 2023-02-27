import axios from "axios"
import { useMutation, useQuery } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';
import { useInsertDataSignUp } from "Api_Requests/useInsertDataSignUp";
import SignUpSlice, { UserSignUp } from "Redux_Slices/auth/SignUpSlice";

import notify from 'Hook/useNotifaction';
import { UseGetTrainingData } from "Api_Requests/Training/Use-Get-Training-Data";
import { GetTrainingSliceInfo } from "Redux_Slices/Training/Get-Training-Slice";



export const useGetTrainingApi = formData => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useQuery("GetAllGetTrainingSliceInfo",UseGetTrainingData, {
      onSuccess: res => {
        
        
         dispatch(GetTrainingSliceInfo(res));
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



