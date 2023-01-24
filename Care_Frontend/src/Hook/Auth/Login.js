import axios from "axios"
import { useMutation, useQuery } from "react-query"
import {useInsertData} from "../../Api_Requests/UseInsertData"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserInfo } from "Redux_Slices/auth/Slice";

import useRouter from 'utils/useRouter';


export const useLoginApi = data => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useMutation(useInsertData, {
      onSuccess: res => {
        const result = {
          status: res.status + '-' + res.statusText,
          headers: res.headers,
          data: res.data
        };
        console.log(result);
         dispatch(UserInfo(result.data));
        localStorage.setItem('user', JSON.stringify(result.data));
        localStorage.setItem('token', result.data.Token);
        // localStorage.setItem('token', JSON.stringify(result.data.token));
        window.location.replace('/');
        // router.history.push('/');

      
  
        return result.data;
      },
      onError: err => {
        console.log(err);
        //   dispatch(errorAtLogin(err.response.data.detail));
        //  return err;
      }
    });
  };



