import axios from "axios"
import { useMutation, useQuery } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';

import notify from 'Hook/useNotifaction';
import { UseGetAllDoctorsData } from "Api_Requests/Doctor/Use-Get-Doctor-Data";
import { GetDoctorsgSliceInfo } from "Redux_Slices/Doctor/Get-Doctor-Slice";




export const useGetDoctorsgApi = formData => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useQuery("GetAllDoctorsg",UseGetAllDoctorsData, {
      onSuccess: res => {
        
        
         dispatch(GetDoctorsgSliceInfo(res));
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



