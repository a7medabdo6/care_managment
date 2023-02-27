import notify from 'Hook/useNotifaction';
import { UseGetProfileData } from "Api_Requests/UseGetProfileData";
import axios from "axios"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';
import { useEditeTrainingData } from 'Api_Requests/Training/Use-Edite-Training-Data';
import { EditeTrainingDataSliceInfo } from 'Redux_Slices/Training/Edite-Training-Slice';




export const useEditeTrainingApi = (FormData) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const QueryClient = useQueryClient();
    return useMutation((FormData)=> (useEditeTrainingData(FormData)), {
      onSuccess: res => {
        
        
         dispatch(EditeTrainingDataSliceInfo(res));
        // localStorage.setItem('user', JSON.stringify(result.data));
        // localStorage.setItem('token', JSON.stringify(result.data.token));
        //  window.location.replace('/');
        // router.history.push('/');
        QueryClient.invalidateQueries('GetAllTraining');

        notify("The Trainig  has been Edite","success")    


  
      },
      onError: err => {
        // console.log(err.response.data.message);
        //   dispatch(errorAtLogin(err.response.data.detail));
        //  return err;
        notify(err?.response?.data?.message,"error")      

      }
    });
  };
