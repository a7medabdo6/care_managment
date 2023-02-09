import React from 'react'

import { useMutation, useQuery, useQueryClient } from "react-query"

import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';



import notify from 'Hook/useNotifaction';
import { UseDeletOralCareData } from 'Api_Requests/Oral-Care/Use-Delet-Oral-Care';
import { DeletOralCareSliceInfo } from 'Redux_Slices/Oral-Care/Delet-Oral-Care-Slice';




export const DeletOralCareApi = (id) =>{
    const dispatch = useDispatch();
    const router = useRouter();
    const QueryClient = useQueryClient();

    return(useMutation((id)=>(UseDeletOralCareData(id)),{
        onSuccess: res => {
          const result = {
            status: res.status + '-' + res.statusText,
            headers: res.headers,
            data: res.data
          };
          console.log(result,"result");
           dispatch(DeletOralCareSliceInfo(result.data));
          // localStorage.setItem('user', JSON.stringify(result.data));
          // localStorage.setItem('token', JSON.stringify(result.data.token));
          //  window.location.replace('/');
          // router.history.push('/');
          QueryClient.invalidateQueries('GetAllOralCare');

             notify("The OralCare  has been Deleted","success")    
  
//    setTimeout(() => {
//       router.history.push('/');
//    }, 2000);
    
        },
        onError: err => {
          // console.log(err.response.data.message);
          //   dispatch(errorAtLogin(err.response.data.detail));
          //  return err;
          notify(err?.response?.data?.message,"error")       
  
        }
      }))

} 