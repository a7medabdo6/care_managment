import React,{useState} from "react";
import Button from 'react-bootstrap/Button';

import "./EditeRiskAssesment.css"
import Multiselect from 'multiselect-react-dropdown';
import { CreateRiskAssesmentApi } from "Hook/RiskAssesment/Create-Risk-Assesment-Hook";
import { useSelector } from "react-redux";
import { useEditeRiskAssesmrntApi } from "Hook/RiskAssesment/Edite-Risk-Assesment-Hook";
const EditeRiskAssesment =({Id,handleCloseEdite})=>{


    const {isLoading,mutate:SubmiteEditeRiskAsesment,isError,error,refetch} =  useEditeRiskAssesmrntApi()
    const {EditeRiskAssesmentData} = useSelector(state => state.EditeRiskAssesmentDataSlice)
console.log(EditeRiskAssesmentData)

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
    const FormData ={
        data:{
            "name": name,
        "type": type,
        "level": level
        },
        id:Id
    }
    SubmiteEditeRiskAsesment(FormData)
  
    handleCloseEdite()

   
    
}
 
    return(
        
   
            
        <div className="container">

<div class="input-group m-2 ">
<span className="input-group-text spantxt" id="basic-addon1">Risk Name </span>
<input type="text" className="form-control inputshadow" onChange={handelName}   placeholder="Risk Name " aria-label="Risk Name" aria-describedby="basic-addon1"/>
</div>


<div class="input-group m-2">
<span className="input-group-text spantxt" style={{height:"38px"}} id="basic-addon1">Type Risk</span>
<select class="form-select form-select-sm inputshadowselect " onChange={handelType}  aria-label=".form-select-sm example">
<option value="medication">medication</option>
<option value="Generic">Generic</option>


</select>
</div>




<div class="input-group m-2">
<span className="input-group-text spantxt" style={{height:"38px"}} id="basic-addon1">Risk level</span>
<select class="form-select form-select-sm inputshadowselect " onChange={HandelLevel}  aria-label=".form-select-sm example">
<option value="heigh">heigh</option>
<option value="medium">medium</option>
<option value="low">low</option>

</select>
</div>


<div className='d-flex justify-content-end '>
    <button onClick={handelSave} className='p-2 saveBtn bg-info'>Save</button>
</div>

        
</div>
        
       
            
        

        
       
    )
}

export default EditeRiskAssesment