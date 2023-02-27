import axios from "axios"
import { useMutation, useQuery } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';
import { useInsertDataSignUp } from "Api_Requests/useInsertDataSignUp";
import SignUpSlice, { UserSignUp } from "Redux_Slices/auth/SignUpSlice";

import notify from 'Hook/useNotifaction';

import { UseGetOneTrainingData } from "../../Api_Requests/Training/Use-Get-Training-Data";
import { GetOneTrainingSliceInfo } from "../../Redux_Slices/Training/Get-One-Training-Slice";



export const useGetOneTrainingApi = id => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useQuery(["GetAOneTraining",id],UseGetOneTrainingData, {
      onSuccess: res => {
        
        
         dispatch(GetOneTrainingSliceInfo(res));
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



