import React,{useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';

import "./Add-Oral.css"
import { useSelector } from "react-redux";
import { CreateOralCaretApi } from "Hook/Oral-Care/Create-Oral-Care-Hook";
import notify from "Hook/useNotifaction";
const AddOralCare =({handleClose,SubmitCreateOral,errors,CreateOralCaretrData})=>{



const [name,setname]=useState()
const [frequency,setfrequency]=useState()
const [Time,setTime]=useState()
const [dirctions,setdirctions]=useState()
const [type,settype]=useState()




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
    const data ={
        "name": name,
        "type": type,
        "frequency": frequency,
        "time": Time,
        "dirctions": dirctions
      }


      SubmitCreateOral(data)
  

  


    
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
    if(CreateOralCaretrData){
        handleClose()

    }
},[CreateOralCaretrData])
    return(
        
   
            
        <div className="container">

<div class="input-group m-2 ">
<span className="input-group-text spantxt" id="basic-addon1" style={{width:"120px"}}>Name </span>
<input type="text" className="form-control inputshadow" onChange={handelName}   placeholder="Name " aria-label="social Name" aria-describedby="basic-addon1"/>
</div>


<div class="input-group m-2 ">
<span className="input-group-text spantxt" style={{width:"120px"}} id="basic-addon1">Type </span>
<input type="text" className="form-control inputshadow" onChange={handelType}   placeholder="type" aria-label="social Name" aria-describedby="basic-addon1"/>
</div>



<div class="input-group m-2 ">
<span className="input-group-text spantxt" style={{width:"120px"}} id="basic-addon1">frequency </span>
<input type="text" className="form-control inputshadow" onChange={handelfrequency}   placeholder="frequency " aria-label="social Name" aria-describedby="basic-addon1"/>
</div>


<div class="input-group m-2 ">
<span className="input-group-text spantxt" style={{width:"120px"}} id="basic-addon1">dirctions </span>
<input type="text" className="form-control inputshadow" onChange={handeldirctions}   placeholder="dirctions" aria-label="social Name" aria-describedby="basic-addon1"/>
</div>


<div class="input-group m-2 ">
<span className="input-group-text spantxt" style={{width:"120px"}} id="basic-addon1">Time </span>
<input type="time" className="form-control inputshadow" onChange={handelTime}   placeholder="time " aria-label="social Name" aria-describedby="basic-addon1"/>
</div>





<div className='d-flex justify-content-end p-3'>
    <button onClick={handelSave} className='p-2 saveBtn bg-info'>Save</button>
</div>

        
</div>
        
       
            
        

        
       
    )
}

export default AddOralCare