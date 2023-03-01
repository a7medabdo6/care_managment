import React from 'react'
import axios from "axios"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';
import { useInsertDataSignUp } from "Api_Requests/useInsertDataSignUp";
import SignUpSlice, { UserSignUp } from "Redux_Slices/auth/SignUpSlice";

import notify from 'Hook/useNotifaction';
import { useInsertDataEditeProfile } from "Api_Requests/UseInsertDataEditeProfile";
import { EditeProfileSliceInfo } from "Redux_Slices/Profile/EditeProfileSlice";
import { UseGreateProfileData } from 'Api_Requests/UseGreateProfileData';
import { GreateProfileSliceInfo } from 'Redux_Slices/Profile/GreateProfileSlice';


export const GreateProfileApi = FormData =>{
    const dispatch = useDispatch();
    const router = useRouter();
    const QueryClient = useQueryClient();

    return(useMutation(UseGreateProfileData,{
        onSuccess: res => {
          const result = {
            status: res.status + '-' + res.statusText,
            headers: res.headers,
            data: res.data
          };
          console.log(result,"result");
           dispatch(GreateProfileSliceInfo(result.data));
          // localStorage.setItem('user', JSON.stringify(result.data));
          // localStorage.setItem('token', JSON.stringify(result.data.token));
          //  window.location.replace('/');
          // router.history.push('/');
          QueryClient.invalidateQueries('getworker');

             notify("The Profile Edite has been created","success")    
  
  //  setTimeout(() => {
  //     router.history.push('/');
  //  }, 2000);
    
        },
        onError: err => {
          // console.log(err.response.data.message);
          //   dispatch(errorAtLogin(err.response.data.detail));
          //  return err;
          notify(err?.response?.data?.message,"error")       
  
        }
      }))

} 
