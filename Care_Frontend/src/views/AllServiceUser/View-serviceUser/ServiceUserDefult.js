import { CreateServiceUserApi } from 'Hook/Service-user/Create-Service-User-hook';
import notify from 'Hook/useNotifaction';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import photo from "../../../../src/images/avatar.png" 
import "./ServiceUser.css"
import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react';
import useRouter from 'utils/useRouter';
import { useGetOneServiceUserApi } from 'Hook/Service-user/Get-oNE-Service-User';
import { useLocation } from 'react-router';
 
 
const ServiceUserDefult  =({handleClose,errors,CreateServiceUserData,SubmitCreateServiceUser,location}) =>{
  const state =location.state
console.log(state,"filter");
  


const [initials,setinitials] = useState()
const [lcds,setlcds] = useState()
const [age_ate_refferal,setage_ate_refferal] = useState()
const [home_address,sethome_address] = useState()
const [school_address,setschool_address] = useState()
const [start_date,setstart_date] = useState()
const [end_date,setend_date] = useState()
const [sex,setsex] = useState()
const [qurdian,setqurdian] = useState()
const [qurdian_contact,setqurdian_contact] = useState()
const [relationship,setrelationship] = useState()
const [support_worker,setsupport_worker] = useState()
const [assesment_date,setassesment_date] = useState()
const [disability,setdisability] = useState()
const [ethnicity,setethnicity] = useState()
const [religion,setreligion] = useState()
const [compliment_of_the_household,setcompliment_of_the_household] = useState()

const onchangeinitials =(e)=>{
    
        setinitials(e.target.value)
        console.log(initials);
    
}

const onchangelcds =(e)=>{
    let num = parseInt(e.target.value)
    setlcds(num)
    console.log(lcds);
}

const onchangeage_ate_refferal =(e)=>{
    setage_ate_refferal(e.target.value)
}
const onchangehome_address =(e)=>{
    sethome_address(e.target.value)
}
const onchangeschool_address =(e)=>{
    setschool_address(e.target.value)
}
const onchangestart_date =(e)=>{
    setstart_date(e.target.value)
}
const onchangeend_date =(e)=>{
    setend_date(e.target.value)
}
const onchangesex =(e)=>{
    setsex(e.target.value)
    console.log(sex);
}
const onchangequrdian =(e)=>{
    setqurdian(e.target.value)
}
const onchangequrdian_contact =(e)=>{
    let num = parseInt(e.target.value)

    setqurdian_contact(num)
    console.log(e.target.value);
}
const onchangerelationship =(e)=>{
    setrelationship(e.target.value)
}
const onchangesupport_worker =(e)=>{
    setsupport_worker(e.target.value)
    console.log(e.target.value);
}
const onchangeassesment_date =(e)=>{
    setassesment_date(e.target.value)
    console.log(e.target.value);
}
const onchangedisability =(e)=>{
    setdisability(e.target.value)
}
const onchangeethnicity =(e)=>{
    setethnicity(e.target.value)
}
const onchangereligion =(e)=>{
    setreligion(e.target.value)
}
const onchangecompliment_of_the_household =(e)=>{
    let num = parseInt(e.target.value)
    setcompliment_of_the_household(num)
    console.log(compliment_of_the_household);
}

    const [img,setimg]= useState(photo)
    const onchangeimg=(e)=>{
     if(e.target.files && e.target.files[0])
     {
       setimg(URL.createObjectURL(e.target.files && e.target.files[0]))
   
     }
     
   
    }
    // const {isLoading,mutate:SubmitCreateServiceUser,isError,error,refetch} =  CreateServiceUserApi()
    // const {CreateServiceUserData} = useSelector(state => state.CreateServiceUserSlice)
const onClickSave= (e)=>{
    e.preventDefault()
   
    const data = {
     
        "initials": initials,
"lcds": lcds,
"age_ate_refferal": age_ate_refferal,
"home_address": home_address,
"school_address": school_address,
"sex": sex,
"start_date": start_date,
"end_date": end_date,
"qurdian": qurdian,
"qurdian_contact": qurdian_contact,
"relationship": relationship,
"support_worker": support_worker,
"assesment_date": assesment_date,
"disability": disability,
"ethnicity": ethnicity,
"religion": religion,
"compliment_of_the_household": compliment_of_the_household
    }
    
   
        SubmitCreateServiceUser(data)
        
      

    
// console.log(compliment_of_the_household);
}

useEffect(()=>{
    if(errors){
        if(errors !== [] )
    errors.map((item)=>{return(
        notify(item,"error")
    )})

    }
},[errors])
 

useEffect(()=>{
    if(CreateServiceUserData){
        handleClose()

    }
},[CreateServiceUserData])
    return(
<div style={{backgroundColor:"white"}} >
<div className='viewservice text-center' style={{backgroundColor:"#F4F6F8"}}>
          <h3 className='mt-5'>View Service User</h3>
                

        {/* <div className='box mx-5'>
<div class="input-group ms-5 mb-3">
<span className="input-group-text spantxt mt-5 me-3" id="basic-addon1">Photo</span>
<div>
            <label for="upload-photo">
                <img
                    src={img}
                    alt="fzx"
                    height="100px"
                    width="120px"
                    style={{ cursor: "pointer" }}
                    className="upload-image"
                />
            </label>
            <input
                type="file"
                name="photo"
                onChange={onchangeimg}
                id="upload-photo"
                className='upload-photo'
            />
        </div>
</div>
</div> */}


<div className='box mt-5'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">title</span>
<select class="form-select form-select-sm inputshadowGender " aria-label=".form-select-sm example">
<option value="1">Mr</option>
<option value="2">Mrs</option>

</select></div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">initials</span>
<input type="text" className="form-control inputshadow" value={state.initials} disabled onChange={onchangeinitials} placeholder="initials" aria-label="First Name" aria-describedby="basic-addon1" />
</div>
</div>


<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">lcds</span>
<input type="number" className="form-control inputshadow" value={state.lcds} disabled   onChange={onchangelcds} placeholder="lcds" aria-label="LastName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">age ate refferal</span>
<input type="text" className="form-control inputshadow" value={state.age_ate_refferal} disabled  onChange={onchangeage_ate_refferal} placeholder="age ate refferal" aria-label="PreferredName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">home address</span>
<input type="text" className="form-control inputshadow" value={state.home_address} disabled  onChange={onchangehome_address} placeholder="home address" aria-label="PreferredName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">school address</span>
<input type="text" className="form-control inputshadow" value={state.school_address} disabled  onChange={onchangeschool_address} placeholder="school address" aria-label="PreferredName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">start date</span>
<input type="date" name="dateofbirth" className="   inputshadow" value={state.start_date} disabled onChange={onchangestart_date} id="dateofbirth"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">end date</span>
<input type="date" name="dateofbirth" className=" inputshadow"value={state.end_date} disabled   onChange={onchangeend_date} id="dateofbirth"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">sex</span>
<select class="form-select form-select-sm inputshadowGender " value={state.sex} disabled  onChange={onchangesex} aria-label=".form-select-sm example">
<option value="male">male</option>
<option value="femal">femal</option>

</select>
</div>
</div>
<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">qurdian</span>
<input type="text" className="form-control inputshadow" value={state.qurdian} disabled  onChange={onchangequrdian} placeholder="qurdian" aria-label="PreferredName" aria-describedby="basic-addon1"/>
</div>
</div>


<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">qurdian contact</span>
<input type="number" className="form-control inputshadow"   value={state.qurdian_contact} disabled  onChange={onchangequrdian_contact} placeholder="qurdian contact" aria-label="PreferredName" aria-describedby="basic-addon1"/>
</div>
</div>
<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">relationship</span>
<input type="text" className="form-control inputshadow" value={state.relationship} disabled  onChange={onchangerelationship} placeholder="relationship" aria-label="PreferredName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">support worker</span>
<input type="text" className="form-control inputshadow" value={state.support_worker} disabled  onChange={onchangesupport_worker} placeholder="support worker" aria-label="PreferredName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">assesment date</span>
<input type="date" name="dateofbirth" className="    inputshadow" value={state.assesment_date} disabled onChange={onchangeassesment_date} id="assesment date"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">disability</span>
<input type="text" className="form-control inputshadow" value={state.disability} disabled  onChange={onchangedisability} placeholder="disability" aria-label="PreferredName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">ethnicity</span>
<input type="text" className="form-control inputshadow" value={state.ethnicity} disabled  onChange={onchangeethnicity} placeholder="ethnicity" aria-label="PreferredName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">religion</span>
<input type="text" className="form-control inputshadow" value={state.religion} disabled  onChange={onchangereligion} placeholder="religion" aria-label="PreferredName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">COTH</span>
<input type="number" className="form-control inputshadow" value={state.compliment_of_the_household} disabled   onChange={onchangecompliment_of_the_household} placeholder="compliment of the household" aria-label="PreferredName" aria-describedby="basic-addon1"/>
</div>
</div>


<div className='w-100 d-flex justify-content-end'>
<button onClick={onClickSave} type="button" class="btn btn-outline-primary btnsave m-2">Save</button>
</div>
<ToastContainer></ToastContainer>
</div>

</div>
 

    )
}

export default ServiceUserDefult
