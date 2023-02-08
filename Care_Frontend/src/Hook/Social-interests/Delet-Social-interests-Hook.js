import React from 'react'

import { useMutation, useQuery, useQueryClient } from "react-query"

import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';



import notify from 'Hook/useNotifaction';
import { UseCreateRiskAssesmentData } from 'Api_Requests/RiskAssisment/Use-Create-Risk-assisment';
import { CreateRiskAssesmentSliceInfo } from 'Redux_Slices/RiskAssesment/Create-RiskAssesment-Slice';
import { DeletRiskAssesmentSliceInfo } from 'Redux_Slices/RiskAssesment/Delet-RiskAssesment-Slice';
import { UseDeletRiskAssesmentData } from 'Api_Requests/RiskAssisment/Use-delet-RiskAssesment';
import { UseDeletsocial_interestsData } from 'Api_Requests/Social-interests/Use-Delet-Social-interests';
import { Deletsocial_interestsSliceInfo } from 'Redux_Slices/Social-interests/Delet-Social-interests-Slice';



export const Deletsocial_interestsApi = (id) =>{
    const dispatch = useDispatch();
    const router = useRouter();
    const QueryClient = useQueryClient();

    return(useMutation((id)=>(UseDeletsocial_interestsData(id)),{
        onSuccess: res => {
          const result = {
            status: res.status + '-' + res.statusText,
            headers: res.headers,
            data: res.data
          };
          console.log(result,"result");
           dispatch(Deletsocial_interestsSliceInfo(result.data));
          // localStorage.setItem('user', JSON.stringify(result.data));
          // localStorage.setItem('token', JSON.stringify(result.data.token));
          //  window.location.replace('/');
          // router.history.push('/');
          QueryClient.invalidateQueries('GetAllsocial_interests');

             notify("The social_interests  has been Deleted","success")    
  
//    setTimeout(() => {
//       router.history.push('/');
//    }, 2000);
    
        },
        onError: err => {
          // console.log(err.response.data.message);
          //   dispatch(errorAtLogin(err.response.data.detail));
          //  return err;
          notify(err.response.data.message,"error")      
  
        }
      }))

} 