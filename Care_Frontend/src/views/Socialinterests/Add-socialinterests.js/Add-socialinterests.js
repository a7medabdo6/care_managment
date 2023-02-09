import React,{useState} from "react";
import Button from 'react-bootstrap/Button';

import "./Add-socialinterests.css"
import { useSelector } from "react-redux";
import { Createsocial_intereststApi } from "Hook/Social-interests/Create-Social-interests-Hook";
const AddsocialAssessment =({handleClose})=>{


    const {isLoading,mutate:SubmitCreatesocial,isError,error,refetch} =  Createsocial_intereststApi()
    const {Createsocial_intereststrData} = useSelector(state => state.Createsocial_intereststSlice)

const [name,setname]=useState()
const [IsDone,setIsDone]=useState(true)

const [type,settype]=useState()
console.log(IsDone)

const HandelIsDone=(e)=>{
    setIsDone(e.target.value)

}


const handelName=(e)=>{
    setname(e.target.value)
}

const handelType=(e)=>{
    settype(e.target.value)

}
const handelSave =()=>{
    const data ={
        "name": name,
        "type": type,
        "is_done": true
    }
    SubmitCreatesocial(data)
    handleClose()

   
    
}
 
    return(
        
   
            
        <div className="container">

<div class="input-group m-2 ">
<span className="input-group-text spantxt" id="basic-addon1" style={{width:"120px"}}>Name </span>
<input type="text" className="form-control inputshadow" onChange={handelName}   placeholder="social Name " aria-label="social Name" aria-describedby="basic-addon1"/>
</div>


<div class="input-group m-2 ">
<span className="input-group-text spantxt" style={{width:"120px"}} id="basic-addon1">Type </span>
<input type="text" className="form-control inputshadow" onChange={handelType}   placeholder="social Name " aria-label="social Name" aria-describedby="basic-addon1"/>
</div>







<div className='d-flex justify-content-end p-3'>
    <button onClick={handelSave} className='p-2 saveBtn bg-info'>Save</button>
</div>

        
</div>
        
       
            
        

        
       
    )
}

export default AddsocialAssessment