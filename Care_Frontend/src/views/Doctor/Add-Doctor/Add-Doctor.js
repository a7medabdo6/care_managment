import React,{useState} from "react";
import Button from 'react-bootstrap/Button';

import "./Add-Doctor.css"
import Multiselect from 'multiselect-react-dropdown';
import { useSelector } from "react-redux";
import notify from "Hook/useNotifaction";
import { useEffect } from "react";
import { CreateDoctorsgtApi } from "Hook/Doctor/Create-Doctor-Hook";
import { useGetCarePlanApi } from "Hook/CarePlan/Get-AllCarePlan-Hook";
const AddDoctor =({handleClose,SubmitCreateHouseKeeping,CreateHouseKeepingtrData,errors})=>{

    const {data}=useGetCarePlanApi()

    const {CarePlanData} =useSelector(state => state.GetAllCAREplaneSlice)
    // const {isLoading,mutate:SubmitCreateRiskAssesment,isError,error,refetch} =  CreateHouseKeepingtApi()
    // const {CreateRiskAssesmentrData} = useSelector(state => state.CreateRiskAssesmentSlice)
    
    const {isLoading,mutate:SubmiteAddDoctor,isError,error,refetch} =  CreateDoctorsgtApi()
    const {CreateDoctorsgtrData} = useSelector(state => state.CreateDoctorsgtSlice)
console.log(CarePlanData)

const [name,setname]=useState()
const [email,setemail]=useState()
const [phone,setphone]=useState()
const [photo,setphoto]=useState()
const [extra,setextra]=useState()
const [plan,setplan]=useState()

console.log(name);
const Handelemail=(e)=>{
    setemail(e.target.value)

}


const handelName=(e)=>{
    setname(e.target.value)
}

const Handelphoto=(e)=>{
    setphoto(e.target.value)

}

const Handelphone=(e)=>{
    setphone(e.target.value)
}


const HandelExtra=(e)=>{
    setextra(e.target.value)
}

const handelCarePlan=(e)=>{
    setplan(e.target.value)
}
const handelSave =()=>{
    
    const   data={
            "phone": phone,
            "name": name,
            "email": email,
            "photo": photo,
            "extra": extra,
            "planId": +plan
          }
       
   
    SubmiteAddDoctor(data)
  
    handleClose()

   
    
}
 
    return(
        
   
            
        <div className="container">

        <div class="input-group m-2 ">
        <span className="input-group-text spantxt" id="basic-addon1">Name </span>
        <input type="text" className="form-control inputshadow" onChange={handelName} value={name}  placeholder="Name " aria-label="Risk Name" aria-describedby="basic-addon1"/>
        </div>
        
        
        <div class="input-group m-2 ">
        <span className="input-group-text spantxt" id="basic-addon1">email</span>
        <input type="text" className="form-control inputshadow" onChange={Handelemail} value={email}  placeholder="email " aria-label="Risk Name" aria-describedby="basic-addon1"/>
        </div>
        
        
        
        
        <div class="input-group m-2 ">
        <span className="input-group-text spantxt" id="basic-addon1">phone</span>
        <input type="text" className="form-control inputshadow" onChange={Handelphone} value={phone}  placeholder="phone" aria-label="Risk Name" aria-describedby="basic-addon1"/>
        </div>
        
        <div class="input-group m-2 ">
        <span className="input-group-text spantxt" id="basic-addon1">image</span>
        <input type="text" className="form-control inputshadow" onChange={Handelphoto} value={photo}   placeholder="" aria-label="image" aria-describedby="basic-addon1"/>
        </div>
        
        <div class="input-group m-2 ">
        <span className="input-group-text spantxt" id="basic-addon1">extra</span>
        <input type="text" className="form-control inputshadow" onChange={HandelExtra} value={extra}   placeholder="" aria-label="extra" aria-describedby="basic-addon1"/>
        </div>

        <div class="input-group m-2">
<span className="input-group-text spantxt" style={{height:"38px"}} id="basic-addon1">CarePlan</span>
<select class="form-select form-select-sm inputshadow " onChange={handelCarePlan}  aria-label=".form-select-sm example">
    {
        CarePlanData?.map((item,index)=>{return(
            <option key={index} value={item.id}>{item.id}</option>

        )})
    }


</select>
</div>

        <div className='d-flex justify-content-end p-3'>
            <button onClick={handelSave} className='p-2 saveBtn bg-info'>Save</button>
        </div>
        
                
        </div>
        
       
            
        

        
       
    )
}

export default AddDoctor
