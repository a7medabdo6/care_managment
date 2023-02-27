import React,{useState} from "react";
import Button from 'react-bootstrap/Button';

import "./Add-Note.css"
import Multiselect from 'multiselect-react-dropdown';
import { useSelector } from "react-redux";
import notify from "Hook/useNotifaction";
import { useEffect } from "react";
import { CreateDoctorsgtApi } from "Hook/Doctor/Create-Doctor-Hook";
import { useGetCarePlanApi } from "Hook/CarePlan/Get-AllCarePlan-Hook";
import { CreateNotegtApi } from "Hook/Note/Create-Note-Hook";
const AddNote =({handleClose,SubmitCreateHouseKeeping,CreateHouseKeepingtrData,errors,id})=>{

    const {data}=useGetCarePlanApi()

    const {CarePlanData} =useSelector(state => state.GetAllCAREplaneSlice)
    // const {isLoading,mutate:SubmitCreateRiskAssesment,isError,error,refetch} =  CreateHouseKeepingtApi()
    // const {CreateRiskAssesmentrData} = useSelector(state => state.CreateRiskAssesmentSlice)
    
    const {isLoading,mutate:SubmiteAddNote,isError,error,refetch} =  CreateNotegtApi()
    const {CreateNotegtrData} = useSelector(state => state.CreateNotegtSlice)
console.log(CarePlanData)

const [type,settype]=useState("")
const [text,settext]=useState("")
const [doc,setdoc]=useState("")

const [plan,setplan]=useState()

console.log(doc);

const Handeltype=(e)=>{
    settype(e.target.value)

}


const Handeldoc=(e)=>{
    if(e.target.files && e.target.files[0]){

        setdoc(e.target.files[0])
    
        // settraining(URL.createObjectURL(e.target.files[0]))
        // setselctedfile(e.target.files[0])
    
    }
    

}

const Handeltext=(e)=>{
    settext(e.target.value)
}

const handelCarePlan=(e)=>{
    setplan(e.target.value)
}
const handelSave =()=>{
    const formData = new FormData()
    formData.append("type",type)
    formData.append("text",text)
    formData.append("doc",doc)
    formData.append("planId",id)

    const   data={
        "type": type,
        "text": text,
        "doc": doc,
        "planId": plan
      }
       
   
          SubmiteAddNote(formData)
  
    handleClose()

   
    
}
 
    return(
        
   
            
        <div className="container">

        <div class="input-group m-2 ">
        <span className="input-group-text spantxt" id="basic-addon1">Type </span>
<select class="form-select form-select-sm inputshadow " onChange={Handeltype}  aria-label=".form-select-sm example">
<option selected value="doctor">doctor</option>
<option value="worker">worker</option>
   


</select>       </div>
        
        
        <div class="input-group m-2 ">
        <span style={{height:"100px"}} className="input-group-text spantxt" id="basic-addon1">text</span>
        <textarea style={{height:"100px"}} className="form-control inputshadow" onChange={Handeltext} value={text}  placeholder="text " id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        
        
        
        
        <div class="input-group m-2 ">
        <span className="input-group-text spantxt" id="basic-addon1">doc</span>
        <input type="file" className="form-control inputshadow" onChange={Handeldoc}   placeholder="phone" aria-label="Risk Name" aria-describedby="basic-addon1"/>
        </div>
        
       

        <div class="input-group m-2">
<span className="input-group-text spantxt" style={{height:"38px"}} id="basic-addon1">CarePlan</span>
<input type="text" className="form-control inputshadow" onChange={handelCarePlan} disabled  placeholder={id} aria-label="Risk Name" aria-describedby="basic-addon1"/>
{/* <select class="form-select form-select-sm inputshadow " onChange={handelCarePlan}  aria-label=".form-select-sm example">
    {
        CarePlanData?.map((item,index)=>{return(
            <option key={index} value={item.id}>{item.id}</option>

        )})
    }


</select> */}
</div>

        <div className='d-flex justify-content-end p-3'>
            <button onClick={handelSave} className='p-2 saveBtn bg-info'>Save</button>
        </div>
        
                
        </div>
        
       
            
        

        
       
    )
}

export default AddNote
