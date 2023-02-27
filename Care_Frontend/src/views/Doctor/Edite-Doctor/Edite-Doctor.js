import React,{useState} from "react";
import Button from 'react-bootstrap/Button';

import "./Edite-Doctor.css"

import { useSelector } from "react-redux";
import { useEditeDoctorsgApi } from "Hook/Doctor/Edite-Doctor-Hook";

const EditeDoctor =({Id,handleCloseEdite,itemData})=>{

console.log(Id);
    const {isLoading,mutate:SubmiteEditeDoctor,isError,error,refetch} =  useEditeDoctorsgApi()
    const {EditeDoctorsgData} = useSelector(state => state.EditeDoctorsgDataSlice)
console.log(EditeDoctorsgData)

const [name,setname]=useState(itemData?.name)
const [email,setemail]=useState(itemData?.email)
const [phone,setphone]=useState(itemData?.phone)
const [photo,setphoto]=useState(itemData?.photo)
const [extra,setextra]=useState(itemData?.extra)


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
const handelSave =()=>{
    const FormData ={
        data:{
            "phone": phone,
            "name": name,
            "email": email,
            "photo": photo,
            "extra": extra,
            "planId": 1
          },
        id:Id
    }
    SubmiteEditeDoctor(FormData)
  
    handleCloseEdite()

   
    
}
 
    return(
        
   
            
        <div className="container">

        <div class="input-group m-2 ">
        <span className="input-group-text spantxt" id="basic-addon1">Name </span>
        <input type="text" className="form-control inputshadow" onChange={handelName} value={name}  placeholder="Name " aria-label="Risk Name" aria-describedby="basic-addon1"/>
        </div>
        
        
        <div class="input-group m-2 ">
        <span className="input-group-text spantxt" id="basic-addon1">email</span>
        <input type="email" className="form-control inputshadow" onChange={Handelemail} value={email}  placeholder="email " aria-label="Risk Name" aria-describedby="basic-addon1"/>
        </div>
        
        
        
        
        <div class="input-group m-2 ">
        <span className="input-group-text spantxt" id="basic-addon1">phone</span>
        <input type="number" className="form-control inputshadow" onChange={Handelphone} value={phone}  placeholder="phone" aria-label="Risk Name" aria-describedby="basic-addon1"/>
        </div>
        
        <div class="input-group m-2 ">
        <span className="input-group-text spantxt" id="basic-addon1">image</span>
        <input type="text" className="form-control inputshadow" onChange={Handelphoto} value={photo}   placeholder="" aria-label="image" aria-describedby="basic-addon1"/>
        </div>
        
        <div class="input-group m-2 ">
        <span className="input-group-text spantxt" id="basic-addon1">extra</span>
        <input type="text" className="form-control inputshadow" onChange={HandelExtra} value={extra}   placeholder="" aria-label="extra" aria-describedby="basic-addon1"/>
        </div>

        <div className='d-flex justify-content-end p-3'>
            <button onClick={handelSave} className='p-2 saveBtn bg-info'>Save</button>
        </div>
        
                
        </div>
        
       
            
        

        
       
    )
}

export default EditeDoctor
