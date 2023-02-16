import React,{useState} from "react";
import Button from 'react-bootstrap/Button';

import "./Edite-Oral.css"
import { useSelector } from "react-redux";
import { useEditeOralCareApi } from "Hook/Oral-Care/Edite-Oral-Care-Hook";
const EditeOralCare =({handleCloseEdite,Id,itemdata})=>{


    const {isLoading,mutate:SubmitEditeOral,isError,error,refetch} =  useEditeOralCareApi()
    const {EditeOralCareData} = useSelector(state => state.EditeOralCareDataSlice)

    const [name,setname]=useState(itemdata?.name)
    const [frequency,setfrequency]=useState(itemdata?.frequency)
    const [Time,setTime]=useState(itemdata?.time)
    const [dirctions,setdirctions]=useState(itemdata?.dirctions)
    const [type,settype]=useState(itemdata?.type)

    
    const handelName=(e)=>{
        setname(e.target.value)
    }
    
    const handelType=(e)=>{
        settype(e.target.value)
    
    }
    
    
    const handelfrequency=(e)=>{
        setfrequency(e.target.value)
    
    }
    
    
    const handeldirctions=(e)=>{
        setdirctions(e.target.value)
    
    }
    
    
    const handelTime=(e)=>{
        setTime(e.target.value)
    
    }
    const handelSave =()=>{
        const formData={
            data :{
                "name": name,
                "type": type,
                "frequency": frequency,
                "time": Time,
                "dirctions": dirctions
              },
              id:Id
        }
        
          SubmitEditeOral(formData)
          handleCloseEdite()
    
       
        
    }
    console.log(itemdata)
    return(
        
   
        <div className="container">

        <div class="input-group m-2 ">
        <span className="input-group-text spantxt" id="basic-addon1" style={{width:"120px"}}>Name </span>
        <input type="text" className="form-control inputshadow" onChange={handelName}   value={name} aria-label="social Name" aria-describedby="basic-addon1"/>
        </div>
        
        
        <div class="input-group m-2 ">
        <span className="input-group-text spantxt" style={{width:"120px"}} id="basic-addon1">Type </span>
        <input type="text" className="form-control inputshadow" onChange={handelType}   value={type} aria-label="social Name" aria-describedby="basic-addon1"/>
        </div>
        
        
        
        <div class="input-group m-2 ">
        <span className="input-group-text spantxt" style={{width:"120px"}} id="basic-addon1">frequency </span>
        <input type="text" className="form-control inputshadow" onChange={handelfrequency}   value={frequency} aria-label="social Name" aria-describedby="basic-addon1"/>
        </div>
        
        
        <div class="input-group m-2 ">
        <span className="input-group-text spantxt" style={{width:"120px"}} id="basic-addon1">dirctions </span>
        <input type="text" className="form-control inputshadow" onChange={handeldirctions}   value={dirctions} aria-label="social Name" aria-describedby="basic-addon1"/>
        </div>
        
        
        <div class="input-group m-2 ">
        <span className="input-group-text spantxt" style={{width:"120px"}} id="basic-addon1">Time </span>
        <input type="time" className="form-control inputshadow" onChange={handelTime}   value={Time} aria-label="social Name" aria-describedby="basic-addon1"/>
        </div>
        
        
        
        
        
        <div className='d-flex justify-content-end p-3'>
            <button onClick={handelSave} className='p-2 saveBtn bg-info'>Save</button>
        </div>
        
                
        </div>
        
       
            
        

        
       
    )
}

export default EditeOralCare