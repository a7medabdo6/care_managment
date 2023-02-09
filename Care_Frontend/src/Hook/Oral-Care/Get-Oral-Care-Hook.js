import axios from "axios"
import { useMutation, useQuery } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';

import notify from 'Hook/useNotifaction';
import { UseGetAllOralCareData } from "Api_Requests/Oral-Care/Use-GeT-Oral-Care";
import { GetOralCareSliceInfo } from "Redux_Slices/Oral-Care/Get-Oral-Care-Slice";



export const useGetOralCareApi = formData => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useQuery("GetAllOralCare",UseGetAllOralCareData, {
      onSuccess: res => {
        
        
         dispatch(GetOralCareSliceInfo(res));
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



