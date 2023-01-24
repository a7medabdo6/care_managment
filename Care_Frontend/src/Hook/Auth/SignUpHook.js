import axios from "axios"
import { useMutation, useQuery } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';
import { useInsertDataSignUp } from "Api_Requests/useInsertDataSignUp";
import SignUpSlice, { UserSignUp } from "Redux_Slices/auth/SignUpSlice";

import notify from 'Hook/useNotifaction';

export const useSignUpApi = data => {
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
         dispatch(UserSignUp(result.data));
        // localStorage.setItem('user', JSON.stringify(result.data));
        // localStorage.setItem('token', JSON.stringify(result.data.token));
        //  window.location.replace('/');
        // router.history.push('/');

           notify("The account has been created","success")    

 setTimeout(() => {
    router.history.push('/auth/login');
 }, 2000);
  
      },
      onError: err => {
        console.log(err.response.data.message);
        //   dispatch(errorAtLogin(err.response.data.detail));
        //  return err;
        notify(err.response.data.message,"error")      

      }
    });
  };



