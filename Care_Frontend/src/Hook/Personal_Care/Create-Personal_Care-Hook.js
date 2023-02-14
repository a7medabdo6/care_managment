import React from 'react'

import { useMutation, useQuery, useQueryClient } from "react-query"

import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';



import notify from 'Hook/useNotifaction';
import { UseCreatePersonalCareData } from 'Api_Requests/Personal_Care/Use-Create-Personal_Care';
import { CreatePersonalCaretSliceInfo, errors } from 'Redux_Slices/Personal_Care/Create-Personale-Care-Slice';



export const CreatePersonalCaretApi = data =>{
    const dispatch = useDispatch();
    const router = useRouter();
    const QueryClient = useQueryClient();

    return(useMutation((data)=>{return (UseCreatePersonalCareData(data))},{
        onSuccess: res => {
          const result = {
            status: res.status + '-' + res.statusText,
            headers: res.headers,
            data: res.data
          };
          console.log(result,"result");
           dispatch(CreatePersonalCaretSliceInfo(result.data));
          // localStorage.setItem('user', JSON.stringify(result.data));
          // localStorage.setItem('token', JSON.stringify(result.data.token));
          //  window.location.replace('/');
          // router.history.push('/');
          QueryClient.invalidateQueries('GetAllPersonalCare');

             notify("The personal care  has been created","success")    
  
//    setTimeout(() => {
//       router.history.push('/');
//    }, 2000);
    
        },
        onError: err => {
          const result = {
            status: err.status + '-' + err.statusText,
            headers: err.headers,
            data: err?.response?.data?.message
          };

          console.log(result.data);
          dispatch(errors(result?.data));
          // console.log(err.response.data.message);
          //   dispatch(errorAtLogin(err.response.data.detail));
          //  return err;
          notify(err?.response?.data?.message,"error")       
  
        }
      }))

} 
