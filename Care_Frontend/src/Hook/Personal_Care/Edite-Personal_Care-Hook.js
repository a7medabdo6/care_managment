import notify from 'Hook/useNotifaction';
import { UseGetProfileData } from "Api_Requests/UseGetProfileData";
import axios from "axios"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';
import { UseEditePersonalCareDataToken } from 'Api_Requests/Personal_Care/Use-Edite-Personal_Care';
import { EditePersonalCareDataSliceInfo } from 'Redux_Slices/Personal_Care/Edite-Personale-Care-Slice';





export const useEditePersonalCareApi = FormData => {
    const dispatch = useDispatch();
    const router = useRouter();
    const QueryClient = useQueryClient();
    return useMutation((FormData)=> (UseEditePersonalCareDataToken(FormData)), {
      onSuccess: res => {
        
        const result = {
          status: res.status + '-' + res.statusText,
          headers: res.headers,
          data: res.data
        };
        console.log(result?.data,"result");
         dispatch(EditePersonalCareDataSliceInfo(res.data));
        // localStorage.setItem('user', JSON.stringify(result.data));
        // localStorage.setItem('token', JSON.stringify(result.data.token));
        //  window.location.replace('/');
        // router.history.push('/');
        QueryClient.invalidateQueries('GetAllPersonalCare');

        notify("The personal care has been Edite","success")    


  
      },
      onError: err => {
        // console.log(err.response.data.message);
        //   dispatch(errorAtLogin(err.response.data.detail));
        //  return err;
        notify(err?.response?.data?.message,"error")      

      }
    });
  };
