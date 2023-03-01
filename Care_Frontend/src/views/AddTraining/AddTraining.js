import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { CreateTrainingApi } from '../../Hook/Training/Create-Training-Hook'

const AddTraining = ({idTOtraining,handleClose}) => {
    const[name,setname]=useState()
    const[proof_of_training,setproof_of_training]=useState()
    const[expiry_date,setexpiry_date]=useState()
    const[status,setstatus]=useState()
    const[comment,setcomment]=useState()
    const[workerId,setworkerId]=useState()
 const handelName=(e)=>{
    setname(e.target.value)
 }

 const handelproof_of_training=(e)=>{
     if(e.target.files && e.target.files[0]){

        setproof_of_training(e.target.files[0])

    // settraining(URL.createObjectURL(e.target.files[0]))
    // setselctedfile(e.target.files[0])

}
    // setproof_of_training(e.target.value)
 }

 const handelexpiry_date=(e)=>{
    setexpiry_date(e.target.value)
 }

 const handelstatus=(e)=>{
    setstatus(e.target.value)
 }

 const handelcomment=(e)=>{
    setcomment(e.target.value)
 }

 const handelworkerId=(e)=>{
    setworkerId(e.target.value)
 }
 const {data,mutate:SubmitCreateTRaining,isError,error:handelerror,refetch} =  CreateTrainingApi()
 const {CreateTrainingrData,error} = useSelector(state => state.CreateTrainingSlice)
const handelsave=()=>{
    const formData = new FormData();
    formData.append("name" , name)
    formData.append("proof_of_training" , proof_of_training)
    formData.append("expiry_date" , expiry_date)
    formData.append("status" , status)
    formData.append("comment" , comment)
    formData.append("workerId" , idTOtraining)

    SubmitCreateTRaining(formData)

   
}


useEffect(()=>{
  if(data){
    handleClose()
  }
},[data])
  return (
    <div>
<div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
    <input onChange={handelName} type="text" class="form-control" id="inputPassword"/>
    </div>
  </div>   

  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">expiry date</label>
    <div class="col-sm-10">
    <input onChange={handelexpiry_date} type="date" class="form-control" id="inputPassword"/>
    </div>
  </div> 
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">status</label>
    <div class="col-sm-10">
    <select onChange={handelstatus} class="form-select" aria-label="Default select example">
         <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          </select>    </div>
  </div> 
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Comment</label>
    <div class="col-sm-10">
    <input onChange={handelcomment} type="text" class="form-control" id="inputPassword"/>
    </div>
  </div> 
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">proof of training</label>
    <div class="col-sm-10">
    <input onChange={handelproof_of_training} type="file" class="form-control" id="inputPassword"/>
    </div>
  </div> 
        <div> <button onClick={handelsave} type="button" class="btn btn-primary">Create</button>
 </div>
        <ToastContainer></ToastContainer>

    </div>
  )
}

export default AddTraining
