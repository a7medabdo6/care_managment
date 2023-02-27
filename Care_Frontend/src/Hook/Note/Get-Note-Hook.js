import axios from "axios"
import { useMutation, useQuery } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';

import notify from 'Hook/useNotifaction';
import { UseGetAllNoteData } from "Api_Requests/Note/Use-Get-Note-Data";
import { GetNotegSliceInfo } from "Redux_Slices/Note/Get-Note-Slice";




export const useGetNotegApi = formData => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useQuery("GetAllNoteg",UseGetAllNoteData, {
      onSuccess: res => {
        
        
         dispatch(GetNotegSliceInfo(res));
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



