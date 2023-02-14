import React,{useState} from "react";
import Button from 'react-bootstrap/Button';

import "./AddRiskAssessment.css"
import Multiselect from 'multiselect-react-dropdown';
import { CreateRiskAssesmentApi } from "Hook/RiskAssesment/Create-Risk-Assesment-Hook";
import { useSelector } from "react-redux";
import notify from "Hook/useNotifaction";
import { useEffect } from "react";
const AddRiskAssessment =({handleClose,SubmitCreateRiskAssesment,CreateRiskAssesmentrData,errors})=>{


    // const {isLoading,mutate:SubmitCreateRiskAssesment,isError,error,refetch} =  CreateRiskAssesmentApi()
    // const {CreateRiskAssesmentrData} = useSelector(state => state.CreateRiskAssesmentSlice)

const [name,setname]=useState()
const [level,setlevel]=useState()

const [type,settype]=useState()


const HandelLevel=(e)=>{
    setlevel(e.target.value)

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
        "level": level
    }
    SubmitCreateRiskAssesment(data)
  

   
    
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
    if(CreateRiskAssesmentrData){
        handleClose()

    }
},[CreateRiskAssesmentrData])
 
    return(
        
   
            
        <div className="container">

<div class="input-group m-2 ">
<span className="input-group-text spantxt" id="basic-addon1">Risk Name </span>
<input type="text" className="form-control inputshadow" onChange={handelName}   placeholder="Risk Name " aria-label="Risk Name" aria-describedby="basic-addon1"/>
</div>


<div class="input-group m-2">
<span className="input-group-text spantxt" style={{height:"38px"}} id="basic-addon1">Type Risk</span>
<select class="form-select form-select-sm inputshadowselect " onChange={handelType}  aria-label=".form-select-sm example">
<option selected>Type Risk</option>
<option value="medication">medication</option>
<option value="Generic">Generic</option>


</select>
</div>




<div class="input-group m-2">
<span className="input-group-text spantxt" style={{height:"38px"}} id="basic-addon1">Risk level</span>
<select class="form-select form-select-sm inputshadowselect " onChange={HandelLevel}  aria-label=".form-select-sm example">
<option selected>Risk level</option>
<option value="heigh">heigh</option>
<option value="medium">medium</option>
<option value="low">low</option>

</select>
</div>


<div className='d-flex justify-content-end p-3'>
    <button onClick={handelSave} className='p-2 saveBtn bg-info'>Save</button>
</div>

        
</div>
        
       
            
        

        
       
    )
}

export default AddRiskAssessment