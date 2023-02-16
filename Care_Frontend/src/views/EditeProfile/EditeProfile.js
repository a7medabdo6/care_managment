import { useEditeProfileApi } from 'Hook/Profile-Hook/EditeProfileHook'
import { useGetProfileApi } from 'Hook/Profile-Hook/Get-profile-Details-Hook'
import notify from 'Hook/useNotifaction'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import useRouter from 'utils/useRouter'
 import avatar from "../../images/avatar.png"
const EditeProfile = () => {
  const {data}=useGetProfileApi()

  const {ProfileDetails} =useSelector(state => state.GetProfileSlice)
  console.log(ProfileDetails);

  const [image,setimage] = useState(`http://localhost:5000/public/${ProfileDetails?.worker?.training}`)
  const onImageChange = (e) => {
    if(e.target.files && e.target.files[0]){
        setimage(URL.createObjectURL(e.target.files[0]))
        

    }

}



 
  

if(ProfileDetails){
  console.log(ProfileDetails.worker.training);
}


const [bod,setbod] = useState(ProfileDetails?.worker?.BOD)
const [NI_Number,setNI_Number] = useState(ProfileDetails?.worker?.Ni_Number)
const [Adress,setAdress] = useState(ProfileDetails?.worker?.Adress)
const [Phone,setPhone] = useState(ProfileDetails?.worker?.phone)
const [NEXT_OF_KIN,setNEXT_OF_KIN] = useState(ProfileDetails?.worker?.next_of_kin)
const [NEXT_OF_KIN_CONTACT,setNEXT_OF_KIN_CONTACT] = useState(ProfileDetails?.worker?.next_of_kin_Contact)
const [SEX,setSEX] = useState(ProfileDetails?.worker?.sex)
const [Application,setApplication] = useState()
const [USER,setUSER] = useState()
const [training,settraining] = useState()


const router = useRouter();

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

// let data ={}
//     if(localStorage.getItem("user")){
      
//       data = JSON.parse(localStorage.getItem("user"))
  
    
//      console.log(data.id);
//     }

const {isLoading,mutate:SubmitEditeProfile,isError,error,refetch} =  useEditeProfileApi()
const {EditeProfileData} = useSelector(state => state.EditeProfileData)

const handelSubmit = (e) => {
  e.preventDefault()
 
     

      if(bod === "" || Application === "" || NI_Number === "" || SEX === "" || Adress === "" || NEXT_OF_KIN_CONTACT === "" ||  NEXT_OF_KIN === "" || Phone === "" || training === "" ){
        notify("Please complete the fields","warn")    

      }else{
        const formData = new FormData();
        formData.append("Ni_Number" , NI_Number)
        formData.append("BOD" , bod)
        // formData.append("user" , data.id)
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


  return (
    <div>
      <div className='m-5'>
        <h2 className='bold'>Edite Profile</h2>
      </div>
      <form className="row g-3 bg-white needs-validation container" style={{height:"100%"}} novalidate>
    <div className="col-md-6">
      <label for="validationCustom01" className="form-label fw-bold">BOD</label>
      <input type="text" onChange={onchangebod} className="form-control"value={bod} id="validationCustom01" placeholder={ProfileDetails?.worker?.BOD}  required/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-md-6">
      <label for="validationCustom02" className="form-label fw-bold">NI Number</label>
      <input type="number" onChange={onchangeNI_Number} value={NI_Number} className="form-control" id="validationCustom02"  placeholder={ProfileDetails?.worker?.Ni_Number
}  required/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-md-6">
    <label for="validationCustom01" className="form-label fw-bold">Adress</label>
      <input type="text" onChange={onchangeAdress} className="form-control" value={Adress} id="validationCustom01" placeholder={ProfileDetails?.worker?.Adress}  required/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-md-6">
    <label for="validationCustom01" className="form-label fw-bold">Phone</label>
      <input type="number" onChange={onchangePhone} className="form-control" value={Phone} id="validationCustom01" placeholder={ProfileDetails?.worker?.phone}  required/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-md-6">
    <label for="validationCustom01" className="form-label fw-bold">NEXT OF KIN</label>
      <input type="text" onChange={onchangeNEXT_OF_KIN} value={NEXT_OF_KIN} className="form-control" id="validationCustom01" placeholder={ProfileDetails?.worker?.next_of_kin}  required/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-md-6">
    <label for="validationCustom01" className="form-label fw-bold">SEX</label>
      <input type="text" onChange={onchangeSEX} className="form-control" value={SEX} id="validationCustom01" placeholder={ProfileDetails?.worker?.sex} required/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>

    <div className="col-md-6">
    <label for="validationCustom01" className="form-label fw-bold">NEXT OF KIN CONTACT</label>
      <input type="text" onChange={onchangeNEXT_OF_KIN_CONTACT} value={NEXT_OF_KIN_CONTACT} className="form-control" id="validationCustom01" placeholder={ProfileDetails?.worker?.next_of_kin_Contact} required/>
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



    <div>
                    <label for ="upload-photo">
                        <img 
                        src={image}
                        alt="hgffh"
                        height="100px"
                        width="100px"
                        style={{cursor:"pointer"}}

                        
                        />
                    </label>
                    <input
                    type="file"
                    name = "photo"
                    onChange={onImageChange}
                    id="upload-photo"
                    
                    />
                    </div>  

    {/* <div className="col-md-12">
    <label for="validationCustom01" className="form-label fw-bold">training</label>
    <input className="form-control" onChange={onchangetraining} type="file" id="validationCustom01" value={ProfileDetails?.worker?.training}  required/>

      
      <div className="valid-feedback">
        Looks good!
      </div>
    </div> */}
    
    <div className="col-12">
      <button className="btn btn-primary" type="submit" onClick={handelSubmit} >Update Info</button>
    </div>
  </form>
  <ToastContainer></ToastContainer>

  </div>
  )
}

export default EditeProfile