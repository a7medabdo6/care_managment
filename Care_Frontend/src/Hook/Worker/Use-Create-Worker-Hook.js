import axios from "axios"
import { useMutation, useQuery } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';
import { useInsertDataSignUp } from "Api_Requests/useInsertDataSignUp";

import notify from 'Hook/useNotifaction';
import { errors, WorkerUserSignUp } from "Redux_Slices/Worker/WorkerSignUpSlice";

export const useSignUpWorkerApi = data => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useMutation(useInsertDataSignUp, {
      onSuccess: res => {
        const result = {
          status: res.status + '-' + res.statusText,
          headers: res.headers,
          data: res.data
        };
        console.log(result,"result");
         dispatch(WorkerUserSignUp(result.data));
        // localStorage.setItem('user', JSON.stringify(result.data));
        // localStorage.setItem('token', JSON.stringify(result.data.token));
        //  window.location.replace('/');
        // router.history.push('/');

           notify("The account has been created","success")    


  
      },
      onError: err => {
        const result = {
          status: err.status + '-' + err.statusText,
          headers: err.headers,
          data: err?.response?.data?.message
        };
        dispatch(errors(result.data));

        console.log(err.response.data.message);
        //   dispatch(errorAtLogin(err.response.data.detail));
        //  return err;
        notify(err?.response?.data?.message,"error")       

      }
    });
  };



