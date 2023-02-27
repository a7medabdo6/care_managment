import React,{useState} from "react";
import Button from 'react-bootstrap/Button';

import "./Edite-Note.css"

import { useSelector } from "react-redux";
import { useEditeDoctorsgApi } from "Hook/Doctor/Edite-Doctor-Hook";
import { useEditeNotegApi } from "Hook/Note/Edite-Note-Hook";
import { useGetCarePlanApi } from "Hook/CarePlan/Get-AllCarePlan-Hook";

const EditeDoctor =({Id,handleCloseEdite,itemData})=>{
    const {data}=useGetCarePlanApi()

    const {CarePlanData} =useSelector(state => state.GetAllCAREplaneSlice)
console.log(Id);
    const {isLoading,mutate:SubmiteEditeNote,isError,error,refetch} =  useEditeNotegApi()
    const {EditeNotegData} = useSelector(state => state.EditeNotegDataSlice)
console.log(EditeNotegData)

const [type,settype]=useState()
const [text,settext]=useState()
const [doc,setdoc]=useState()

const [plan,setplan]=useState()



const Handeltype=(e)=>{
    settype(e.target.value)

}


const Handeldoc=(e)=>{
    setdoc(e.target.value)

}

const Handeltext=(e)=>{
    settext(e.target.value)
}

const handelCarePlan=(e)=>{
    setplan(e.target.value)
}
const handelSave =()=>{
    
    const   data={
        "type": type,
        "text": text,
        "doc": doc,
        "planId": plan
      }
       
   
      SubmiteEditeNote(data)
  
      handleCloseEdite()

   
    
}
 
    return(
        
   
            
        <div className="container">

        <div class="input-group m-2 ">
        <span className="input-group-text spantxt" id="basic-addon1">Type </span>
        <input type="text" className="form-control inputshadow" onChange={Handeltype} value={type}  placeholder="type " aria-label="Risk Name" aria-describedby="basic-addon1"/>
        </div>
        
        
        <div class="input-group m-2 ">
        <span style={{height:"100px"}} className="input-group-text spantxt" id="basic-addon1">text</span>
        <input  style={{height:"100px"}} type="text" className="form-control inputshadow" onChange={Handeltext} value={text}  placeholder="text " aria-label="Risk Name" aria-describedby="basic-addon1"/>
        </div>
        
        
        
        
        <div class="input-group m-2 ">
        <span className="input-group-text spantxt" id="basic-addon1">doc</span>
        <input type="file" className="form-control inputshadow" onChange={Handeldoc} value={doc}  placeholder="phone" aria-label="Risk Name" aria-describedby="basic-addon1"/>
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

export default EditeDoctor
