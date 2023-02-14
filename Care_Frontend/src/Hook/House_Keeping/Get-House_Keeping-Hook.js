import axios from "axios"
import { useMutation, useQuery } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';

import notify from 'Hook/useNotifaction';
import { GetHouseKeepingSliceInfo } from "Redux_Slices/House_Keeping/Get-House_Keeping-Slice";
import { UseGetAllHouseKeepinData } from "Api_Requests/House_Keeping/Use-Get-House_Keeping";




export const useGetHouseKeepingApi = formData => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useQuery("GetAllHouseKeeping",UseGetAllHouseKeepinData, {
      onSuccess: res => {
        
        
         dispatch(GetHouseKeepingSliceInfo(res));
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



