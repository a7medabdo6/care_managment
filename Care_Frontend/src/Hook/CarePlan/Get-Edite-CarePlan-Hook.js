import notify from 'Hook/useNotifaction';
import { UseGetProfileData } from "Api_Requests/UseGetProfileData";
import axios from "axios"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';
import { UseEditeCarePlanDataToken } from 'Api_Requests/CarePlan/UseEditeCarePlane';
import { EditeCarePlanDataSliceInfo } from 'Redux_Slices/CarePlan/Edite-CarePlan-Hook-Slice';




export const useEditeCarePlanApi = (FormData) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const QueryClient = useQueryClient();
    return useMutation((FormData)=> (UseEditeCarePlanDataToken(FormData)), {
      onSuccess: res => {
        
        
         dispatch(EditeCarePlanDataSliceInfo(res));
        // localStorage.setItem('user', JSON.stringify(result.data));
        // localStorage.setItem('token', JSON.stringify(result.data.token));
        //  window.location.replace('/');
        // router.history.push('/');
        QueryClient.invalidateQueries('GetAllCarePlan');

        notify("The CarePlan  has been Edite","success")    


  
      },
      onError: err => {
        
        // console.log(err.response.data.message);
        //   dispatch(errorAtLogin(err.response.data.detail));
        //  return err;
        notify(err?.response?.data?.message,"error")      

      }
    });
  };
