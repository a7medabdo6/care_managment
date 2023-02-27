import axios from "axios"
import { useMutation, useQuery } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';
import { useInsertDataSignUp } from "Api_Requests/useInsertDataSignUp";
import SignUpSlice, { UserSignUp } from "Redux_Slices/auth/SignUpSlice";

import notify from 'Hook/useNotifaction';

import { GetOneworkerSliceInfo } from "../Redux_Slices/Get-WORKER-SLICE";
import { UseGetOneworkerData } from "../Api_Requests/Use-Get-One-workerAPI";



export const useGetOneworkerApi = id => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useQuery(["GetAOneworker",id],UseGetOneworkerData, {
      onSuccess: res => {
        
        
         dispatch(GetOneworkerSliceInfo(res));
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



