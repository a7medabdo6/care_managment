import React,{useState} from "react";
import Button from 'react-bootstrap/Button';

import "./AddPersonalCare.css"
import { useSelector } from "react-redux";
import notify from "Hook/useNotifaction";
import { useEffect } from "react";
import { CreatePersonalCaretApi } from "Hook/Personal_Care/Create-Personal_Care-Hook";
const AddPersonalCare =({handleClosePersonalCare})=>{

    const {mutate:SubmitCreatePersonalCare} =  CreatePersonalCaretApi()
    const {CreatePersonalCaretrData,errors} = useSelector(state => state.CreatePersonalCaretSlice)
    // const {isLoading,mutate:SubmitCreateRiskAssesment,isError,error,refetch} =  CreateRiskAssesmentApi()
    // const {CreateRiskAssesmentrData} = useSelector(state => state.CreateRiskAssesmentSlice)


    const [name,setname]=useState()
    const [frequency,setfrequency]=useState()
    const [dirctions,setdirctions]=useState()
    
    const [time,settime]=useState()
    
    
    const Handelfrequency=(e)=>{
      setfrequency(e.target.value)
    
    }
    
    
    const handelName=(e)=>{
        setname(e.target.value)
    }
    
    const handeltime=(e)=>{
      settime(e.target.value)
    
    }
    const handeldirctions=(e)=>{
      setdirctions(e.target.value)
    
    }
    
    const handelSave =()=>{
        const data ={
          "name": name,
          "frequency": frequency,
          "time": time,
          "dirctions": dirctions
        }
        SubmitCreatePersonalCare(data)
      
    
       
        
    }
    
    useEffect(()=>{
        if(errors){
            if(errors !== [] )
        errors.map((item)=>{return(
            notify(item,"error")
        )})
    
        }
    },[errors])
     
    
    useEffect(()=>{
        if(CreatePersonalCaretrData){
            handleClosePersonalCare()
    
        }
    },[CreatePersonalCaretrData])
 
    return(
        
   
      <div className="container" >

<div class="input-group m-2 ">
<span className="input-group-text spantxt" id="basic-addon1">Name </span>
<input type="text" className="form-control inputshadow" onChange={handelName}   placeholder="Name " aria-label="Risk Name" aria-describedby="basic-addon1"/>
</div>


<div class="input-group m-2 ">
<span className="input-group-text spantxt" id="basic-addon1">friquncy </span>
<input type="text" className="form-control inputshadow" onChange={Handelfrequency}   placeholder="friquncy " aria-label="Risk Name" aria-describedby="basic-addon1"/>
</div>



<div class="input-group m-2 ">
<span className="input-group-text spantxt" id="basic-addon1">dirctions </span>
<input type="text" className="form-control inputshadow" onChange={handeldirctions}   placeholder="dirctions " aria-label="Risk Name" aria-describedby="basic-addon1"/>
</div>
<div class="input-group m-2 ">
<span className="input-group-text spantxt" id="basic-addon1">time </span>
<input type="time" className="form-control inputshadow" onChange={handeltime}   placeholder="Name " aria-label="Risk Name" aria-describedby="basic-addon1"/>
</div>


<div className='d-flex justify-content-end p-3'>
    <button onClick={handelSave} className='p-2 saveBtn bg-info'>Save</button>
</div>

        
</div>
            
        

        
       
    )
}

export default AddPersonalCare
