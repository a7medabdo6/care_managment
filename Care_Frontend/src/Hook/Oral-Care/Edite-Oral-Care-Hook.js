import notify from 'Hook/useNotifaction';
import { UseGetProfileData } from "Api_Requests/UseGetProfileData";
import axios from "axios"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';
import { UseEditeOralCareDataToken } from 'Api_Requests/Oral-Care/Use-Edite-Oral-Care';
import { EditeOralCareDataSliceInfo } from 'Redux_Slices/Oral-Care/Edite-Oral-Care-Slice';




export const useEditeOralCareApi = (FormData) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const QueryClient = useQueryClient();
    return useMutation((FormData)=> (UseEditeOralCareDataToken(FormData)), {
      onSuccess: res => {
        
        
         dispatch(EditeOralCareDataSliceInfo(res));
        // localStorage.setItem('user', JSON.stringify(result.data));
        // localStorage.setItem('token', JSON.stringify(result.data.token));
        //  window.location.replace('/');
        // router.history.push('/');
        QueryClient.invalidateQueries('GetAllOralCare');

        notify("The OralCare  has been Edite","success")    


  
      },
      onError: err => {
        // console.log(err.response.data.message);
        //   dispatch(errorAtLogin(err.response.data.detail));
        //  return err;
        notify(err?.response?.data?.message,"error")      

      }
    });
  };
