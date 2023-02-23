import axios from "axios"
import { useMutation, useQuery } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';
import { useInsertDataSignUp } from "Api_Requests/useInsertDataSignUp";
import SignUpSlice, { UserSignUp } from "Redux_Slices/auth/SignUpSlice";

import notify from 'Hook/useNotifaction';
import { GetProfileSliceInfo } from "Redux_Slices/Profile/Get-profile-Slice";
import { UseGetProfileData } from "Api_Requests/UseGetProfileData";
import { UseGetOneNoteData } from "Api_Requests/Note/Use-Get-One-note-Data";
import { GetOneNoteSliceInfo } from "Redux_Slices/Note/Get-One-Note-Slice";



export const useGetOneNoteApi = id => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useQuery(["GetAOneNote",id],UseGetOneNoteData, {
      onSuccess: res => {
        
        
         dispatch(GetOneNoteSliceInfo(res));
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



