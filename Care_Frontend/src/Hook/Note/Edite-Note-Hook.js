import notify from 'Hook/useNotifaction';
import { UseGetProfileData } from "Api_Requests/UseGetProfileData";
import axios from "axios"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';
import { UseNotegData } from 'Api_Requests/Note/Use-Edite-Note-Data';
import { EditeNotegDataSliceInfo } from 'Redux_Slices/Note/Edite-Note-Slice';




export const useEditeNotegApi = (FormData) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const QueryClient = useQueryClient();
    return useMutation((FormData)=> (UseNotegData(FormData)), {
      onSuccess: res => {
        
        
         dispatch(EditeNotegDataSliceInfo(res));
        // localStorage.setItem('user', JSON.stringify(result.data));
        // localStorage.setItem('token', JSON.stringify(result.data.token));
        //  window.location.replace('/');
        // router.history.push('/');
        QueryClient.invalidateQueries('GetAllNoteg');

        notify("The Note  has been Edite","success")    


  
      },
      onError: err => {
        // console.log(err.response.data.message);
        //   dispatch(errorAtLogin(err.response.data.detail));
        //  return err;
        notify(err?.response?.data?.message,"error")      

      }
    });
  };
