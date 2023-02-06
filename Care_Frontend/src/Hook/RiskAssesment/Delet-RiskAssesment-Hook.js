import React from 'react'

import { useMutation, useQuery, useQueryClient } from "react-query"

import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';



import notify from 'Hook/useNotifaction';
import { UseCreateRiskAssesmentData } from 'Api_Requests/RiskAssisment/Use-Create-Risk-assisment';
import { CreateRiskAssesmentSliceInfo } from 'Redux_Slices/RiskAssesment/Create-RiskAssesment-Slice';
import { DeletRiskAssesmentSliceInfo } from 'Redux_Slices/RiskAssesment/Delet-RiskAssesment-Slice';
import { UseDeletRiskAssesmentData } from 'Api_Requests/RiskAssisment/Use-delet-RiskAssesment';


export const DeletRiskAssesmentApi = (id) =>{
    const dispatch = useDispatch();
    const router = useRouter();
    const QueryClient = useQueryClient();

    return(useMutation((id)=>(UseDeletRiskAssesmentData(id)),{
        onSuccess: res => {
          const result = {
            status: res.status + '-' + res.statusText,
            headers: res.headers,
            data: res.data
          };
          console.log(result,"result");
           dispatch(DeletRiskAssesmentSliceInfo(result.data));
          // localStorage.setItem('user', JSON.stringify(result.data));
          // localStorage.setItem('token', JSON.stringify(result.data.token));
          //  window.location.replace('/');
          // router.history.push('/');
          QueryClient.invalidateQueries('GetAllRiskAssesment');

             notify("The Risk  has been Deleted","success")    
  
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