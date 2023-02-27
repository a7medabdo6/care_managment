
import React from 'react'

import { useSignUpApi } from 'Hook/Auth/SignUpHook'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useSignUpWorkerApi } from 'Hook/Worker/Use-Create-Worker-Hook'
import { useEffect } from 'react'
import notify from 'Hook/useNotifaction'
import { ToastContainer } from 'react-toastify'

import GreateProfileAdminWorker from 'views/GreateProfileAdminWorker'
import { DataUsageOutlined } from '@material-ui/icons'
const AddWorker = ({handleClose}) => {
    
 

    const[email,setemail]=useState()
    const[password,setpassword]=useState("")
    const[username,setusername]=useState("")
    const[role,setrole]=useState(0)
console.log(email);
    const handelEmail=(e)=>{
       
        setemail(e.target.value)

    }

    const handel_PassWord=(e)=>{
        setpassword(e.target.value)
    }


   const handel_UserName =(e)=>{
    console.log(e.target.value);

    setusername(e.target.value)
   }
   
    

    const handel_Role =(e)=>{
        setrole(e.target.value)

    }
        
    const formdata ={
    
        "email": email,
        "password": password,
        "username": username,
        "role": +role
      
    }
    
    const {isLoading,mutate:SubmitSignUp,data,error,refetch} =  useSignUpWorkerApi()
    
    
    const {WorkerUserSignUpData,errors} = useSelector(state => state.WorkerSignUpSlice)
console.log(errors);
    const handleSubmit = async event => {
        if (email === ""|| password === ""||username === "" || role === ""){
            notify("Complete the fields","error")   

        }else{
            SubmitSignUp(formdata)

        }
      
        // if(userSigbUpData.id){
        //   notify("The account has been created","success")      
  
        // }
  
        // history.push('/');
      };


      useEffect(()=>{
        if(data){
            handleClose()
            notify("The account has been created","success") 

        }

      },[data])


      useEffect(()=>{
        if(errors){
            if(errors === "email in use"){
                notify("email in use","error")
            }else if (error !== []){
                errors.map((item)=>notify(item,"error"))
            }

          
        }

      },[errors])
  return (
    <div>
 
 

<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1" style={{width:"200px"}}>UserName</span>

<input type="text" name="dateofbirth" className="form-control inputshadowGender" onChange={handel_UserName}  placeholder="UserName" id="dateofbirth"/>


</div>






<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1" style={{width:"200px"}}>Email</span>

<input type="text" name="dateofbirth" className="form-control inputshadowGender" onChange={handelEmail} placeholder="Email" id="dateofbirth"/>


</div>


<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1" style={{width:"200px"}}>PassWord</span>

<input type="text" name="dateofbirth" className="form-control inputshadowGender" onChange={handel_PassWord} placeholder="PassWord" id="dateofbirth"/>


</div>



<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1" style={{width:"200px"}}>Role</span>

<input type="number" name="dateofbirth" className="form-control inputshadowGender" onChange={handel_Role} placeholder="Role" id="dateofbirth"/>


</div>

<div className='d-flex justify-content-end p-3'>
    <button onClick={handleSubmit} className='p-2 saveBtn'>Save</button>
</div>
<ToastContainer></ToastContainer>

    </div>
  )
}

export default AddWorker