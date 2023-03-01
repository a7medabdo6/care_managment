import { useEditeProfileApi } from 'Hook/Profile-Hook/EditeProfileHook'
import { GreateProfileApi } from 'Hook/Profile-Hook/GreateProfileHook'
import notify from 'Hook/useNotifaction'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import useRouter from 'utils/useRouter'

const GreateProfile = () => {
const [bod,setbod] = useState("")
const [NI_Number,setNI_Number] = useState("")
const [Adress,setAdress] = useState("")
const [Phone,setPhone] = useState("")
const [NEXT_OF_KIN,setNEXT_OF_KIN] = useState("")
const [NEXT_OF_KIN_CONTACT,setNEXT_OF_KIN_CONTACT] = useState("")
const [SEX,setSEX] = useState("")
const [Application,setApplication] = useState("")
const [USER,setUSER] = useState("")
const [training,settraining] = useState("")



const onchangebod =(e)=>{
  
  setbod(e.target.value)
}
const onchangeNI_Number =(e)=>{
  
  setNI_Number(e.target.value)
}
const onchangeAdress =(e)=>{
  
  setAdress(e.target.value)
}
const onchangePhone =(e)=>{
  
  setPhone(e.target.value)
}

const onchangeNEXT_OF_KIN =(e)=>{
  setNEXT_OF_KIN(e.target.value)

}
const onchangeNEXT_OF_KIN_CONTACT =(e)=>{
  setNEXT_OF_KIN_CONTACT(e.target.value)

}
const onchangeApplication =(e)=>{
  if(e.target.files && e.target.files[0]){


    
    setApplication(e.target.files[0])
    // setselctedfile(e.target.files[0])

}
  // setApplication(e.target.value)

}
const onchangeSEX =(e)=>{
  
  setSEX(e.target.value)
}
const onchangeUSER =(e)=>{
  setUSER(e.target.value)
}
const onchangetraining =(e)=>{

  if(e.target.files && e.target.files[0]){

    settraining(e.target.files[0])

    // settraining(URL.createObjectURL(e.target.files[0]))
    // setselctedfile(e.target.files[0])

}
  // settraining(e.target.value)

}
const router = useRouter();

let data ={}
    if(localStorage.getItem("user")){
      
      data = JSON.parse(localStorage.getItem("user"))
  
    
     console.log(data.id);
    }

const {isLoading,mutate:SubmitEditeProfile,data:craeteData,error,refetch} =  GreateProfileApi()
const {GreateProfileData} = useSelector(state => state.GreateProfileSlice)

const handelSubmit = (e) => {
  e.preventDefault()
 
     

      if(bod === "" || Application === "" || NI_Number === "" || SEX === "" || Adress === "" || NEXT_OF_KIN_CONTACT === "" ||  NEXT_OF_KIN === "" || Phone === "" || training === "" ){
        notify("Please complete the fields","warn")    

      }else{
        const formData = new FormData();
        formData.append("Ni_Number" , NI_Number)
        formData.append("BOD" , bod)
        formData.append("user" , data.id)
        formData.append("sex" , SEX)
        formData.append("Adress" , Adress)
        formData.append("next_of_kin_Contact" , NEXT_OF_KIN_CONTACT)
        formData.append("next_of_kin" , NEXT_OF_KIN)
        formData.append("phone" , Phone)
        formData.append("training" , training)
        formData.append("Application" , Application)
  
        
        SubmitEditeProfile(formData)
      }

      
  

}

useEffect(()=>{
  if(craeteData){
    router.history.push('/');

  }
},[craeteData])
console.log(GreateProfileData);
  return (
    <div className='text-center'>
      <div className='m-5'>
        <h2 className='bold'>Greate Profile</h2>
      </div>
      <form className="row g-3 bg-white needs-validation m-5" novalidate>
    <div className="col-md-6">
      <label for="validationCustom01" className="form-label fw-bold">BOD</label>
      <input type="text" onChange={onchangebod} className="form-control" id="validationCustom01"  required/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-md-6">
      <label for="validationCustom02" className="form-label fw-bold">NI_Number</label>
      <input type="text" onChange={onchangeNI_Number} className="form-control" id="validationCustom02"  required/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-md-6">
    <label for="validationCustom01" className="form-label fw-bold">Adress</label>
      <input type="text" onChange={onchangeAdress} className="form-control" id="validationCustom01"  required/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-md-6">
    <label for="validationCustom01" className="form-label fw-bold">Phone</label>
      <input type="text" onChange={onchangePhone} className="form-control" id="validationCustom01"  required/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-md-6">
    <label for="validationCustom01" className="form-label fw-bold">NEXT_OF_KIN</label>
      <input type="text" onChange={onchangeNEXT_OF_KIN} className="form-control" id="validationCustom01"  required/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-md-6">
    <label for="validationCustom01" className="form-label fw-bold">SEX</label>
      <input type="text" onChange={onchangeSEX} className="form-control" id="validationCustom01"  required/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>

    <div className="col-md-6">
    <label for="validationCustom01" className="form-label fw-bold">NEXT_OF_KIN_CONTACT</label>
      <input type="text" onChange={onchangeNEXT_OF_KIN_CONTACT} className="form-control" id="validationCustom01"  required/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>

    

    <div className="col-md-6">
    <label for="validationCustom01" className="form-label fw-bold">Application</label>
    <input className="form-control" onChange={onchangeApplication} type="file" id="validationCustom01"  required/>

      <div className="valid-feedback">
        Looks good!
      </div>
    </div>

    <div className="col-md-12">
    <label for="validationCustom01" className="form-label fw-bold">training</label>
    <input className="form-control" onChange={onchangetraining} type="file" id="validationCustom01"  required/>

      
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    
    <div className="col-12">
      <button className="btn btn-primary" type="submit" onClick={handelSubmit} >Greate</button>
    </div>
  </form>
  <ToastContainer></ToastContainer>

  </div>
  )
}

export default GreateProfile