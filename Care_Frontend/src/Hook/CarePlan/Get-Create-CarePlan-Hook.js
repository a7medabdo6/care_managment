import React from 'react'

import { useMutation, useQuery } from "react-query"

import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';



import notify from 'Hook/useNotifaction';
import { UseCreateCarePlantData } from 'Api_Requests/CarePlan/UseCreatCarePlan';
import { CreateCarePlantSliceInfo, errors } from 'Redux_Slices/CarePlan/Create-CarePlan-Slice';


export const CreateCarePlantApi = data =>{
    const dispatch = useDispatch();
    const router = useRouter();

    return(useMutation((data)=>{return (UseCreateCarePlantData(data))},{
        onSuccess: res => {
          const result = {
            status: res.status + '-' + res.statusText,
            headers: res.headers,
            data: res.data
          };
          console.log(result,"result");
           dispatch(CreateCarePlantSliceInfo(result.data));
          // localStorage.setItem('user', JSON.stringify(result.data));
          // localStorage.setItem('token', JSON.stringify(result.data.token));
          //  window.location.replace('/');
          notify("The CarePlan  has been created","success")    

          setTimeout(()=>{ router.history.push('/CarePlan');
        },2000)
  
  
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
          // console.log(result,"eroorrrrrrrr");

          console.log(result.data);
          dispatch(errors(result?.data));

          //   dispatch(errorAtLogin(err.response.data.detail));
          //  return err;
         
          notify(result.data,"error")       
  
        }
      }))

} 