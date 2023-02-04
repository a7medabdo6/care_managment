import { CreateServiceUserApi } from 'Hook/Service-user/Create-Service-User-hook';
import notify from 'Hook/useNotifaction';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import photo from "../../../src/images/avatar.png"
import "./ServiceUser.css"
import { ToastContainer } from 'react-toastify'
import { useEditeServiceUserApi } from 'Hook/Service-user/EditeServiceUser-Hook';

const EditeServiceUser  =({ShowEditeServiceUserSliceInfoData,handleCloseEdite}) =>{

    console.log(ShowEditeServiceUserSliceInfoData);

const [initials,setinitials] = useState(ShowEditeServiceUserSliceInfoData[0]?.initials)
const [lcds,setlcds] = useState(ShowEditeServiceUserSliceInfoData[0]?.lcds)
const [age_ate_refferal,setage_ate_refferal] = useState(ShowEditeServiceUserSliceInfoData[0]?.age_ate_refferal)
const [home_address,sethome_address] = useState(ShowEditeServiceUserSliceInfoData[0]?.home_address)
const [school_address,setschool_address] = useState(ShowEditeServiceUserSliceInfoData[0]?.school_address)
const [start_date,setstart_date] = useState(ShowEditeServiceUserSliceInfoData[0]?.start_date)
const [end_date,setend_date] = useState(ShowEditeServiceUserSliceInfoData[0]?.end_date)
const [sex,setsex] = useState(ShowEditeServiceUserSliceInfoData[0]?.sex)
const [qurdian,setqurdian] = useState(ShowEditeServiceUserSliceInfoData[0]?.qurdian)
const [qurdian_contact,setqurdian_contact] = useState(ShowEditeServiceUserSliceInfoData[0]?.qurdian_contact)
const [relationship,setrelationship] = useState(ShowEditeServiceUserSliceInfoData[0]?.relationship)
const [support_worker,setsupport_worker] = useState(ShowEditeServiceUserSliceInfoData[0]?.support_worker)
const [assesment_date,setassesment_date] = useState(ShowEditeServiceUserSliceInfoData[0]?.assesment_date)
const [disability,setdisability] = useState(ShowEditeServiceUserSliceInfoData[0]?.disability)
const [ethnicity,setethnicity] = useState(ShowEditeServiceUserSliceInfoData[0]?.ethnicity)
const [religion,setreligion] = useState(ShowEditeServiceUserSliceInfoData[0]?.religion)
const [compliment_of_the_household,setcompliment_of_the_household] = useState(ShowEditeServiceUserSliceInfoData[0]?.compliment_of_the_household)

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
    const {isLoading,mutate:SubmitEditeServiceUser,isError,error,refetch} =  useEditeServiceUserApi()
    const {CreateServiceUserData} = useSelector(state => state.CreateServiceUserSlice)
const onClickEdite= (e)=>{
    e.preventDefault()
   
    const FormData = {
     data :{
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
     },
     id : ShowEditeServiceUserSliceInfoData[0]?.id
       
    }
    if(initials === "" || lcds === "" || age_ate_refferal === "" || home_address === "" || school_address === "" || sex === "" ||  start_date === "" 
    || end_date === "" || qurdian === "" || qurdian_contact === "" || relationship === "" || support_worker === "" || assesment_date === "" || disability === "" 
    || ethnicity === "" || religion === "" || compliment_of_the_household === ""){
        notify("Please complete the fields","warn")    
        console.log(FormData.id);
      }else{
       
        SubmitEditeServiceUser(FormData)
        
        
      }

    
// console.log(compliment_of_the_household);
}

const {EditeServiceUserData} = useSelector(state => state.EditeServiceUserDataSlice)
console.log(EditeServiceUserData);

useEffect(()=>{
    if(EditeServiceUserData?.id){
        handleCloseEdite()
    }
},[EditeServiceUserData])
    return(

        <div className='border'>
                

  




<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">initials</span>
<input type="text" className="form-control inputshadow"  onChange={onchangeinitials}  value={initials} aria-label="First Name" aria-describedby="basic-addon1"/>
</div>
</div>


<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">lcds</span>
<input type="number" className="form-control inputshadow" value={lcds} onChange={onchangelcds}  placeholder="lcds" aria-label="LastName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">age_ate_refferal</span>
<input type="text" className="form-control inputshadow" onChange={onchangeage_ate_refferal} value={age_ate_refferal} placeholder="age_ate_refferal" aria-label="PreferredName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">home_address</span>
<input type="text" className="form-control inputshadow" onChange={onchangehome_address} value={home_address} placeholder="home_address" aria-label="PreferredName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">school_address</span>
<input type="text" className="form-control inputshadow" onChange={onchangeschool_address} value={school_address} placeholder="school_address" aria-label="PreferredName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">start_date</span>
<input type="date" name="dateofbirth" className=" inputshadow" value={start_date} onChange={onchangestart_date} id="dateofbirth"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">end_date</span>
<input type="date" name="dateofbirth" className=" inputshadow" onChange={onchangeend_date} value={end_date} id="dateofbirth"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">sex</span>
<select class="form-select form-select-sm inputshadowGender " onChange={onchangesex} value={sex} aria-label=".form-select-sm example">
<option selected>Gender</option>
<option value="male">male</option>
<option value="femal">femal</option>

</select>
</div>
</div>
<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">qurdian</span>
<input type="text" className="form-control inputshadow" onChange={onchangequrdian} value={qurdian} placeholder="qurdian" aria-label="PreferredName" aria-describedby="basic-addon1"/>
</div>
</div>


<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">qurdian_contact</span>
<input type="number" className="form-control inputshadow" value={qurdian_contact} onChange={onchangequrdian_contact}  placeholder="qurdian_contact" aria-label="PreferredName" aria-describedby="basic-addon1"/>
</div>
</div>
<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">relationship</span>
<input type="text" className="form-control inputshadow" onChange={onchangerelationship} value={relationship} placeholder="relationship" aria-label="PreferredName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">support_worker</span>
<input type="text" className="form-control inputshadow" onChange={onchangesupport_worker} value={support_worker} placeholder="support_worker" aria-label="PreferredName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">assesment_date</span>
<input type="date" name="dateofbirth" className="  inputshadow" onChange={onchangeassesment_date} value={assesment_date} id="assesment_date"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">disability</span>
<input type="text" className="form-control inputshadow" onChange={onchangedisability} value={disability} placeholder="disability" aria-label="PreferredName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">ethnicity</span>
<input type="text" className="form-control inputshadow" onChange={onchangeethnicity} value={ethnicity} placeholder="ethnicity" aria-label="PreferredName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">religion</span>
<input type="text" className="form-control inputshadow" onChange={onchangereligion} value={religion} placeholder="religion" aria-label="PreferredName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">compliment_of_the_household</span>
<input type="number" className="form-control inputshadow" value={compliment_of_the_household} onChange={onchangecompliment_of_the_household}  placeholder="compliment_of_the_household" aria-label="PreferredName" aria-describedby="basic-addon1"/>
</div>
</div>
<div className="col-12 d-flex justify-content-end">
      <button className="btn btn-primary m-2" type="submit" onClick={onClickEdite} >Update Info</button>
    </div>


<ToastContainer></ToastContainer>
</div>

    )
}

export default EditeServiceUser