import React,{useState} from "react";
import Button from 'react-bootstrap/Button';

import "./EditeHouseKeeping.css"

import { useSelector } from "react-redux";
import { useEditeHouseKeepingApi } from "Hook/House_Keeping/Edite-House_Keeping-Hook";
const EditeHouseKeeping =({Id,handleCloseEdite,itemData})=>{

console.log(itemData);
    const {isLoading,mutate:SubmiteEditehouseKeeping,isError,error,refetch} =  useEditeHouseKeepingApi()
    const {EditeHouseKeepingData} = useSelector(state => state.EditeHouseKeepingDataSlice)
console.log(EditeHouseKeepingData)

const [name,setname]=useState(itemData?.name)
const [frequency,setfrequency]=useState(itemData?.frequency)
const [time,settime]=useState(itemData?.time)
const [dirctions,setdirctions]=useState(itemData?.dirctions)


const HandelFrequncy=(e)=>{
    setfrequency(e.target.value)

}


const handelName=(e)=>{
    setname(e.target.value)
}

const Handeltime=(e)=>{
    settime(e.target.value)

}

const Handeldirctions=(e)=>{
    setdirctions(e.target.value)
}
const handelSave =()=>{
    const FormData ={
        data:{
            "name": name,
            "frequency": frequency,
            "time": time,
            "dirctions": dirctions
          },
        id:Id
    }
    SubmiteEditehouseKeeping(FormData)
  
    handleCloseEdite()

   
    
}
 
    return(
        
   
            
        <div className="container">

        <div class="input-group m-2 ">
        <span className="input-group-text spantxt" id="basic-addon1">Name </span>
        <input type="text" className="form-control inputshadow" onChange={handelName} value={name}  placeholder="Name " aria-label="Risk Name" aria-describedby="basic-addon1"/>
        </div>
        
        
        <div class="input-group m-2 ">
        <span className="input-group-text spantxt" id="basic-addon1">frequency</span>
        <input type="text" className="form-control inputshadow" onChange={HandelFrequncy} value={frequency}  placeholder="frequency " aria-label="Risk Name" aria-describedby="basic-addon1"/>
        </div>
        
        
        
        
        <div class="input-group m-2 ">
        <span className="input-group-text spantxt" id="basic-addon1">dirctions</span>
        <input type="text" className="form-control inputshadow" onChange={Handeldirctions} value={dirctions}  placeholder="dirctions" aria-label="Risk Name" aria-describedby="basic-addon1"/>
        </div>
        
        <div class="input-group m-2 ">
        <span className="input-group-text spantxt" id="basic-addon1">Time</span>
        <input type="time" className="form-control inputshadow" onChange={Handeltime} value={time}   placeholder="" aria-label="Risk Name" aria-describedby="basic-addon1"/>
        </div>
        
        
        <div className='d-flex justify-content-end p-3'>
            <button onClick={handelSave} className='p-2 saveBtn bg-info'>Save</button>
        </div>
        
                
        </div>
        
       
            
        

        
       
    )
}

export default EditeHouseKeeping
