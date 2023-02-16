import notify from 'Hook/useNotifaction';
import { UseGetProfileData } from "Api_Requests/UseGetProfileData";
import axios from "axios"
import { useMutation, useQuery } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';
import { GetPersonalCareSliceInfo } from 'Redux_Slices/Personal_Care/Get-Personale-Care-Slice';
import {  UseGetPersonalCareData } from 'Api_Requests/Personal_Care/Use-Get-Personal-Care';

export const useGetAllPersonalCareApi = formData => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useQuery("GetAllPersonalCare",UseGetPersonalCareData, {
      onSuccess: res => {
        
        
         dispatch(GetPersonalCareSliceInfo(res));
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
