import React,{useState} from "react";
import Button from 'react-bootstrap/Button';

import "./Edite-socialinterests.css"
import { useSelector } from "react-redux";
import { useEditesocial_interestsApi } from "Hook/Social-interests/Edite-Social-interests-Hook";
const Editesocial =({handleCloseEdite,Id})=>{


    const {isLoading,mutate:SubmitEditesocial,isError,error,refetch} =  useEditesocial_interestsApi()
    const {Editesocial_interestsData} = useSelector(state => state.Editesocial_interestsDataSlice)

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
    const FormData ={
      data:  {
            "name": name,
            "type": type,
            "is_done": true
        },
        id:Id
        
    }
    SubmitEditesocial(FormData)
    handleCloseEdite()

   
    
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

export default Editesocial