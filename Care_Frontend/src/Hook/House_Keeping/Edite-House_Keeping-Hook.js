import notify from 'Hook/useNotifaction';
import { UseGetProfileData } from "Api_Requests/UseGetProfileData";
import axios from "axios"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';
import { EditeHouseKeepingDataSliceInfo } from 'Redux_Slices/House_Keeping/Edite-House_Keeping-Slice';
import { UseHouseKeepingData } from 'Api_Requests/House_Keeping/Use-EDITE-House-Keeping';



export const useEditeHouseKeepingApi = (FormData) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const QueryClient = useQueryClient();
    return useMutation((FormData)=> (UseHouseKeepingData(FormData)), {
      onSuccess: res => {
        
        
         dispatch(EditeHouseKeepingDataSliceInfo(res));
        // localStorage.setItem('user', JSON.stringify(result.data));
        // localStorage.setItem('token', JSON.stringify(result.data.token));
        //  window.location.replace('/');
        // router.history.push('/');
        QueryClient.invalidateQueries('GetAllHouseKeeping');

        notify("The House Keeping  has been Edite","success")    


  
      },
      onError: err => {
        // console.log(err.response.data.message);
        //   dispatch(errorAtLogin(err.response.data.detail));
        //  return err;
        notify(err?.response?.data?.message,"error")      

      }
    });
  };
