import notify from 'Hook/useNotifaction';
import { UseGetProfileData } from "Api_Requests/UseGetProfileData";
import axios from "axios"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';
import { useInsertDataSignUp } from "Api_Requests/useInsertDataSignUp";
import SignUpSlice, { UserSignUp } from "Redux_Slices/auth/SignUpSlice";
import { UseGetAllUserData } from 'Api_Requests/UseGetAllUser';
import { GetAllUserSliceInfo } from 'Redux_Slices/AllUser/Get-All-user-Slice';
import { Editesocial_interestsDataSliceInfo } from 'Redux_Slices/Social-interests/Edite-Social-interests-Slice';
import { UseEditesocial_interestsDataToken } from 'Api_Requests/Social-interests/Use-Edite-Social-interests';




export const useEditesocial_interestsApi = (FormData) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const QueryClient = useQueryClient();
    return useMutation((FormData)=> (UseEditesocial_interestsDataToken(FormData)), {
      onSuccess: res => {
        
        
         dispatch(Editesocial_interestsDataSliceInfo(res));
        // localStorage.setItem('user', JSON.stringify(result.data));
        // localStorage.setItem('token', JSON.stringify(result.data.token));
        //  window.location.replace('/');
        // router.history.push('/');
        QueryClient.invalidateQueries('GetAllsocial_interests');

        notify("The social interests  has been Edite","success")    


  
      },
      onError: err => {
        // console.log(err.response.data.message);
        //   dispatch(errorAtLogin(err.response.data.detail));
        //  return err;
        notify(err?.response?.data?.message,"error")      

      }
    });
  };
