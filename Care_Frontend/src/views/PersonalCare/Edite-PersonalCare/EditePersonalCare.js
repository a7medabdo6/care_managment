import React,{useState} from "react";
import Button from 'react-bootstrap/Button';

import Multiselect from 'multiselect-react-dropdown';
import { useSelector } from "react-redux";
import notify from "Hook/useNotifaction";
import { useEffect } from "react";
import { useEditePersonalCareApi } from "Hook/Personal_Care/Edite-Personal_Care-Hook";
const EditePersonalCare =({Id,handleCloseEdite,itemData})=>{

console.log(itemData);
    const {mutate:SubmiteEditePersonal} =  useEditePersonalCareApi()
    const {EditePersonalCareData,errors} = useSelector(state => state.EditePersonalCareDataSlice)
console.log(EditePersonalCareData)


const [name,setname]=useState(itemData?.name)
const [frequency,setfrequency]=useState(itemData?.frequency)
const [dirctions,setdirctions]=useState(itemData?.dirctions)

const [time,settime]=useState(itemData?.time)


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
  const FormData={
    data :{
      "name": name,
      "frequency": frequency,
      "time": time,
      "dirctions": dirctions
    },
    id:Id

  }
    console.log(FormData);
    SubmiteEditePersonal(FormData)
  
    handleCloseEdite()

   
    
}



 
    return(
        
   
            
      <div className="container" >

      <div class="input-group m-2 ">
      <span className="input-group-text spantxt" id="basic-addon1">Name </span>
      <input type="text" className="form-control inputshadow" onChange={handelName} value={name}  placeholder="Name " aria-label="Risk Name" aria-describedby="basic-addon1"/>
      </div>
      
      
      <div class="input-group m-2 ">
      <span className="input-group-text spantxt" id="basic-addon1">frequency </span>
      <input type="text" className="form-control inputshadow" onChange={Handelfrequency} value={frequency}  placeholder="friquncy " aria-label="Risk Name" aria-describedby="basic-addon1"/>
      </div>
      
      
      
      <div class="input-group m-2 ">
      <span className="input-group-text spantxt" id="basic-addon1">dirctions </span>
      <input type="text" className="form-control inputshadow" onChange={handeldirctions} value={dirctions}   placeholder="dirctions " aria-label="Risk Name" aria-describedby="basic-addon1"/>
      </div>
      <div class="input-group m-2 ">
      <span className="input-group-text spantxt" id="basic-addon1">time </span>
      <input type="time" className="form-control inputshadow" onChange={handeltime} value={time}  placeholder="Name " aria-label="Risk Name" aria-describedby="basic-addon1"/>
      </div>
      
      
      <div className='d-flex justify-content-end p-3'>
          <button onClick={handelSave} className='p-2 saveBtn bg-info'>Save</button>
      </div>
      
              
      </div>
                  
       
            
        

        
       
    )
}

export default EditePersonalCare
