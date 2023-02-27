import React, { useState } from 'react'

const AddTraining = () => {
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
    setproof_of_training(e.target.value)
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
//  const {isLoading,mutate:SubmitCreateCarePlant,isError,error:handelerror,refetch} =  CreateCarePlantApi()
//  const {CreateCarePlantrData,error} = useSelector(state => state.CreateCarePlantSlice)
const handelsave=()=>{
    const data={
        "name": name,
        "proof_of_training": proof_of_training,
        "expiry_date": expiry_date,
        "status": status,
        "comment": comment,
        "worker":24
      }
}


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
        <div> <button type="button" class="btn btn-primary">Create</button>
 </div>

    </div>
  )
}

export default AddTraining