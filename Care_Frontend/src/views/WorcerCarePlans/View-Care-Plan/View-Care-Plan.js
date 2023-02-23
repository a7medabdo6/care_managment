import { useGetAllUserApi } from 'Hook/AllUser/Get-All-user-Hook'
import { useGetOnePlanApi } from 'Hook/CarePlan/Get-One-Plan-Hook'
import { useGetHouseKeepingApi } from 'Hook/House_Keeping/Get-House_Keeping-Hook'
import { CreateNotegtApi } from 'Hook/Note/Create-Note-Hook'
import { useGetOralCareApi } from 'Hook/Oral-Care/Get-Oral-Care-Hook'
import { useGetAllPersonalCareApi } from 'Hook/Personal_Care/Get-Personal_Care-Hook'
import { useGetAllRiskAssesmentApi } from 'Hook/RiskAssesment/Get-all-Risk-Hook'
import { useGetAllServiceUserApi } from 'Hook/Service-user/GetALLServiceUserData-Hook'
import { useGetsocial_interestsApi } from 'Hook/Social-interests/Get-Social-interests-Hook'
import React from 'react'
import Modal from 'react-bootstrap/Modal';

import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import "./View-Care-Plan.css"
import AddNote from '../Add-Note'
import { useGetOneNoteApi } from 'Hook/Note/Get-One-Note-Hook'
const ViewCarePlan = ({location}) => {
  const {mutate:SubmitCreateNote} =  CreateNotegtApi()
  const {CreateNotegtrData,errors} = useSelector(state => state.CreateNotegtSlice)
  // const {data:AllSEVICE}=useGetAllServiceUserApi()
  // const {AllServiceUserData} =useSelector(state => state.GetAllServiceUserSlice )
  // console.log(AllServiceUserData);
  const state = location.state
  console.log(state);
  const {data:socialData} =  useGetsocial_interestsApi()
  const {social_interestsData} = useSelector(state => state.GetAllsocial_interestseSlice)

  const {data:HouseData} =  useGetHouseKeepingApi()
  const {HouseKeepingData} = useSelector(state => state.GetAllHouseKeepingeSlice)

  // const {data:datauser}=useGetAllUserApi()

  // const {AllUserData} =useSelector(state => state.GetAllUserSlice)
  const {data:GetOneNoteData} =  useGetOneNoteApi(state?.id)
  const {OneNoteData} = useSelector(state => state.GetOneNoteeSlice)

  console.log(OneNoteData);
  const {data:personalCareData} =  useGetAllPersonalCareApi()
  const {PersonalCareData} = useSelector(state => state.GetAllPersonalCareeSlice)


  const {data:OralData} =  useGetOralCareApi()
  const {OralCareData} = useSelector(state => state.GetAllOralCareeSlice)
  
  const {data:RiskAssesmentData} =  useGetAllRiskAssesmentApi()
  const {AllRiskAssesmentData} = useSelector(state => state.GetRiskAssesmentSlice)
 
  const [id,setid] =useState(state?.id)
console.log(state?.id);
  const {data}=useGetOnePlanApi(id)

  const {OnePlanData} =useSelector(state => state.GetOneplaneSlice)

  const [oral_care,setoral_care] = useState()
  const [house_keeping,sethouse_keeping] = useState()
  const [riskAssesments,setriskAssesments] = useState()
  const [socialInterests,setsocialInterests] = useState()
  const [personal_care,setpersonal_care] = useState()
    console.log(OnePlanData);
useEffect(()=>{
  if(OnePlanData){
    setoral_care(OnePlanData?.oral_care)
    sethouse_keeping(OnePlanData?.house_keeping)
    setriskAssesments(OnePlanData?.riskAssesments)
    setsocialInterests(OnePlanData?.socialInterests)
    setpersonal_care(OnePlanData?.personal_care)
  }
 
},[OnePlanData])

    
const [showEdite, setshowEdite] = useState(false);

const handleCloseEdite = () => setshowEdite(false);
const handleShowEdite = () => setshowEdite(true);





const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  return (
    <div className='container' >


<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=' titlemodel   text-center ' >Add Notes</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <AddNote handleClose={handleClose} errors={errors} SubmitCreateNote={SubmitCreateNote} CreateNotegtrData={CreateNotegtrData} id={id}/>

             </Modal.Body>
        <Modal.Footer>
       
        </Modal.Footer>
      </Modal>




      <Modal show={showEdite} onHide={handleCloseEdite}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=' titlemodel   text-center'>Edite Notes</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
             </Modal.Body>
        <Modal.Footer>
      
        </Modal.Footer>
      </Modal>
     
    <div className='box ' style={{marginRight:"150px",marginLeft:"150px"}}>
        <div className=' title mt-5 d-flex justify-content-start text-center m-2 '>
            <h5 className='p-2 mt-2'>basics</h5>
        </div>
    
    <div className='d-flex justify-content-center align-items-center flex-column'>
    <div className='itembox  ' >
    
    <div class="input-group m-2">
    <span className="input-group-text spantxt" id="basic-addon1" style={{width:"200px"}}>Client Name</span>
    <input type="text" name="dateofbirth" className="form-control inputshadowGender"  placeholder="Client Name" id="dateofbirth"/>

    </div>
    
    
    <div class="input-group m-2">
    <span className="input-group-text spantxt" id="basic-addon1" style={{width:"200px"}}>Worker</span>
    <input type="text" name="dateofbirth" className="form-control inputshadowGender"  placeholder="Worker" id="dateofbirth"/>

    </div>
    
    
    
    <div class="input-group m-2 ">
    <span className="input-group-text spantxt" id="basic-addon1" style={{width:"200px"}}>lcds </span>
    <input type="number" className="form-control inputshadowGender"   disabled  placeholder={OnePlanData?.service_user_lcds_number}  aria-label="First Name" aria-describedby="basic-addon1"/>
    </div>
    
    <div class="input-group m-2">
    <span className="input-group-text spantxt" id="basic-addon1" style={{width:"200px"}}>Date</span>
    <input type="text" name="dateofbirth" className="form-control inputshadowGender" disabled  placeholder={OnePlanData?.date}  id="dateofbirth"/>
    </div>
    
    
    <div class="input-group m-2">
    <span className="input-group-text spantxt" id="basic-addon1" style={{width:"200px"}}>Night Time Support</span>
    <input type="text" name="dateofbirth" className="form-control inputshadowGender"  disabled  placeholder={OnePlanData?.night_time_support} id="dateofbirth"/>
    </div>
    
    
    
    
    
    
    <div class="input-group m-2">
    <span className="input-group-text spantxt" id="basic-addon1" style={{width:"200px"}}>level of understand</span>
    <input type="text" name="dateofbirth" className="form-control inputshadowGender" disabled  placeholder={OnePlanData?.level_of_understand} id="dateofbirth"/>
    
    
    </div>
    
    
    <div class="input-group m-2">
    <span className="input-group-text spantxt" id="basic-addon1" style={{width:"200px"}}>comunication</span>
    <input type="text" name="dateofbirth" className="form-control inputshadowGender" disabled  placeholder={OnePlanData?.comunication}   id="dateofbirth"/>
    
    
    </div>
    
    
    
    <div class="input-group m-2">
    <span className="input-group-text spantxt" id="basic-addon1" style={{width:"200px"}}>medication managment</span>
    <input type="text" name="dateofbirth" className="form-control inputshadowGender" disabled  placeholder={OnePlanData?.medication_managment}   id="dateofbirth"/>
    
    
    </div>
    
    
    <div class="input-group m-2">
    <span className="input-group-text spantxt" id="basic-addon1" style={{width:"200px"}}>continence Care</span>
    <input type="text" name="dateofbirth" className="form-control inputshadowGender" disabled  placeholder={OnePlanData?.continence_care}   id="dateofbirth"/>
    
    
    </div>
    
    <div class="input-group m-2">
    <span className="input-group-text spantxt" id="basic-addon1" style={{width:"200px"}}>emotional support</span>
    <input type="text" name="dateofbirth" className="form-control inputshadowGender" disabled  placeholder={OnePlanData?.emotional_support}   id="dateofbirth"/>
    
    
    </div>
    
    
    <div class="input-group m-2 ">
    <span className="input-group-text spantxt" id="basic-addon1" style={{width:"200px"}}>expressing sexuality</span>
    
    <input type="text" className="form-control inputshadowGender"   disabled  placeholder={OnePlanData?.expressing_sexuality} aria-label="First Name" aria-describedby="basic-addon1"/>
    </div>
    
    
    
    <div class="input-group m-2 ">
    <span className="input-group-text spantxt" id="basic-addon1" style={{width:"200px"}}>Skin Care</span>
    
    <input type="text" className="form-control inputshadowGender"  disabled  placeholder={OnePlanData?.skin_care} aria-label="First Name" aria-describedby="basic-addon1"/>
    </div>
    
    <div class="input-group m-2 ">
    <span className="input-group-text spantxt" id="basic-addon1" style={{width:"200px"}}>Health Care</span>
    
    <input type="text" className="form-control inputshadowGender"   disabled  placeholder={OnePlanData?.health_care} aria-label="First Name" aria-describedby="basic-addon1"/>
    </div>
    
    
    
    <div class="input-group m-2 ">
    <span className="input-group-text spantxt" id="basic-addon1" style={{width:"200px"}}>nutrition and hydration</span>
    
    <input type="text" className="form-control inputshadowGender"  disabled  placeholder={OnePlanData?.nutrition_and_hydration} aria-label="First Name" aria-describedby="basic-addon1"/>
    </div>
    
    <div class="input-group m-2">
    <span className="input-group-text spantxt" id="basic-addon1" style={{width:"200px"}}>breathing</span>
    <input type="text" name="dateofbirth" className="form-control inputshadowGender"  disabled  placeholder={OnePlanData?.breathing} id="dateofbirth"/>
    
    
    </div>
    
    
    
    
    
    <div class="input-group m-2">
    <span className="input-group-text spantxt" id="basic-addon1" style={{width:"200px"}}>mental health</span>
    <input type="text" name="dateofbirth" className="form-control inputshadowGender"  disabled  placeholder={OnePlanData?.mental_health} id="dateofbirth"/>
    
    
    </div>
    
    
    <div class="input-group m-2">
    <span className="input-group-text spantxt" id="basic-addon1" style={{width:"200px"}}>SCW</span>
    
    <input type="text" name="dateofbirth" className="form-control inputshadowGender"  disabled  placeholder={OnePlanData?.spiritual_and_culture_wellbeing} id="dateofbirth"/>
    
    
    </div>
    
    
    <div class="input-group m-2">
    <span className="input-group-text spantxt" id="basic-addon1" style={{width:"200px"}}>mobility</span>
    
    <input type="text" name="dateofbirth" className="form-control inputshadowGender"  disabled  placeholder={OnePlanData?.mobility} id="dateofbirth"/>
    
    
    </div>
    
    
    <div class="input-group m-2">
    <span className="input-group-text spantxt" id="basic-addon1" style={{width:"200px"}}>frequency</span>
    <input type="text" name="dateofbirth" className="form-control inputshadowGender"  disabled  placeholder={OnePlanData?.frequency} id="dateofbirth"/>
    
    
    </div>
    
    
    <div class="input-group m-2">
    <span className="input-group-text spantxt" id="basic-addon1" style={{width:"200px"}}>end of life preference</span>
    <input type="text" name="dateofbirth" className="form-control inputshadowGender"  disabled  placeholder={OnePlanData?.end_og_life_preference} id="dateofbirth"/>
    
    
    </div>
    
    </div>
    
    
    </div>
    
    
       
    
    
    <div className='d-flex justify-content-center align-items-center flex-column'>




    <div className='itembox mt-3'>
    
    <div className='d-flex justify-content-between align-items-center'>
    <div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
    <h5 className='p-2'>Doctors</h5>
    </div>
    
    </div>
    
    
    <div class="input-group ms-2 mb-3   " style={{height:"191px" ,overflowY:"scroll"}}>
    <table class="table table-bordered" style={{height:"40px"}}>
      <thead className='inputshadow'>
        <tr>
        <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">photo</th>
          <th scope="col">extra</th>
        
    
        </tr>
      </thead>
      <tbody className='inputshadow'>
      {
      OnePlanData?.doctors?.map((item,index)=>{return(
    
        <tr>
          <div className='checkboxstyle  checkshadow d-flex justify-content-start align-items-center' style={{}}>
          <input className='ms-1 me-1'  type="checkbox" id="vehicle1s" name="vehicle1s" value={item?.id}/>
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.name}</td>
          </div>
         
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.phone}</td>
    
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.email}</td>
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.photo}</td>
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.extra}</td>
        
    
      </tr>
      )})
    }
     
      </tbody>
    </table>
    
    
    
                
                </div>
    
    
    
    
    
    </div>



    
    <div className='itembox mt-3'>
    
    <div className='d-flex justify-content-between align-items-center'>
    <div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
    <h5 className='p-2'>Oral Care</h5>
    </div>
    
    </div>
    
    
    <div class="input-group ms-2 mb-3   " style={{height:"191px" ,overflowY:"scroll"}}>
    <table class="table table-bordered" style={{height:"40px"}}>
      <thead className='inputshadow'>
        <tr>
        <th scope="col">Name</th>
          <th scope="col">Time</th>
          <th scope="col">frequency</th>
          <th scope="col">dirctions</th>
          <th scope="col">Type</th>
          <th scope="col">Created</th>
          <th scope="col">Mofified</th>
    
        </tr>
      </thead>
      <tbody className='inputshadow'>
      {
      oral_care?.map((item,index)=>{return(
    
        <tr>
          <div className='checkboxstyle  checkshadow d-flex justify-content-start align-items-center' style={{}}>
          <input className='ms-1 me-1'  type="checkbox" id="vehicle1s" name="vehicle1s" value={item?.id}/>
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.name}</td>
          </div>
         
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.time}</td>
    
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.frequency}</td>
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.dirctions}</td>
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.type}</td>
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.created_at}</td>
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.updated_at}</td>
    
      </tr>
      )})
    }
     
      </tbody>
    </table>
    
    
    
                
                </div>
    
    
    
    
    
    </div>
    
    
    <div className='itembox mt-3'>
    <div className='d-flex justify-content-between align-items-center'>
    <div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
    <h5 className='p-2'>Personal Care</h5>
    </div>
  
    </div>
    
    
    <div class="input-group ms-2 mb-3   " style={{height:"191px" ,overflowY:"scroll"}}>
    <table class="table table-bordered" style={{height:"40px"}}>
      <thead className='inputshadow'>
        <tr>
        <th scope="col">Name</th>
          <th scope="col">frequency</th>
          <th scope="col">dirctions</th>
    
          <th scope="col">Created</th>
          <th scope="col">Mofified</th>
    
        </tr>
      </thead>
      <tbody className='inputshadow'>
      {
      personal_care?.map((item,index)=>{return(
    
        <tr>
          <div className='checkboxstyle  checkshadow d-flex justify-content-start align-items-center' style={{}}>
          <input className='ms-1 me-1'  type="checkbox" id="vehicle1s" name="vehicle1s" value={item?.id}/>
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.name}</td>
          </div>
         
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.frequency}</td>
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.dirctions}</td>
    
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.created_at}</td>
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.updated_at}</td>
    
      </tr>
      )})
    }
     
      </tbody>
    </table>
    

    
                
                </div>
    
    
    
    
    
    
    </div>
    
    
    
    
    
    
    
    
    
    
    <div className='itembox mt-3'>
    <div className='d-flex justify-content-between align-items-center'>
    <div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
    <h5 className='p-2'>social intersts</h5>
    </div>

    </div>
    
    
    <div class="input-group ms-2 mb-3   " style={{height:"191px" ,overflowY:"scroll"}}>
    <table class="table table-bordered" style={{height:"40px"}}>
      <thead className='inputshadow'>
        <tr>
        <th scope="col">Name</th>
          <th scope="col">Type</th>
          <th scope="col">Created</th>
          <th scope="col">Mofified</th>
    
        </tr>
      </thead>
      <tbody className='inputshadow'>
      {
      socialInterests?.map((item,index)=>{return(
    
        <tr>
          <div className='checkboxstyle  checkshadow d-flex justify-content-start align-items-center' style={{}}>
          <input className='ms-1 me-1'  type="checkbox" id="vehicle1s" name="vehicle1s" value={item?.id}/>
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.name}</td>
          </div>
         
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.type}</td>
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.created_at}</td>
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.updated_at}</td>
    
      </tr>
      )})
    }
     
      </tbody>
    </table>
    

    
                
                </div>
    
    
    
    
    
    
    </div>
    
    
    
    
    
    
    <div className='itembox mt-3'>
    <div className='d-flex justify-content-between align-items-center'>
    <div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
    <h5 className='p-2'>house keeping</h5>
    </div>
    
    </div>
    
    
    <div class="input-group ms-2 mb-3   " style={{height:"191px" ,overflowY:"scroll"}}>
    <table class="table table-bordered" style={{height:"40px"}}>
      <thead className='inputshadow'>
        <tr>
        <th scope="col">Name</th>
          <th scope="col">Type</th>
          <th scope="col">Created</th>
          <th scope="col">Mofified</th>
    
        </tr>
      </thead>
      <tbody className='inputshadow'>
      {
      house_keeping?.map((item,index)=>{return(
    
        <tr>
          <div className='checkboxstyle  checkshadow d-flex justify-content-start align-items-center' style={{}}>
          <input className='ms-1 me-1'  type="checkbox" id="vehicle1s" name="vehicle1s" value={item?.id}/>
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.name}</td>
          </div>
         
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.type}</td>
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.created_at}</td>
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.updated_at}</td>
    
      </tr>
      )})
    }
     
      </tbody>
    </table>
    
   
    
                
                </div>
    
    
    
    
    
    
    </div>
    
    
    
    
    
    
    
    
    
    
    <div className='itembox mt-3'>
    
    <div className='d-flex justify-content-between align-items-center'>
    <div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
    <h5 className='p-2'>Risks</h5>
    </div>
 
    </div>
    
    
    <div class="input-group ms-2 mb-3   " style={{height:"191px" ,overflowY:"scroll"}}>
    <table class="table table-bordered" style={{height:"40px"}}>
      <thead className='inputshadow'>
        <tr>
        <th scope="col">Name</th>
          <th scope="col">Type</th>
          <th scope="col">Created</th>
          <th scope="col">Level</th>
    
        </tr>
      </thead>
      <tbody className='inputshadow'>
      {
      riskAssesments?.map((item,index)=>{return(
    
        <tr>
          <div className='checkboxstyle  checkshadow d-flex justify-content-start align-items-center' style={{}}>
          <input className='ms-1 me-1'  type="checkbox" id="vehicle1s" name="vehicle1s" value={item?.id}/>
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.name}</td>
          </div>
         
    
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.type}</td>
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.created_at}</td>
        <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.level}</td>
    
      </tr>
      )})
    }
     
      </tbody>
    </table>
    
  
    
                
                </div>
    
    
    
    
    
    
    </div>
    
    
    <div className='itembox mt-3'>

<div className='d-flex justify-content-between align-items-center'>
<div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
<h5 className='p-2'>Notes</h5>
</div>
<div class="p-3"><button onClick={handleShow} type="button" class="btn btn-secondary "><i class="fas fa-plus"></i></button></div>
</div>


<div class="input-group ms-2 mb-3   " style={{height:"191px" ,overflowY:"scroll"}}>
<table class="table table-bordered" style={{height:"40px"}}>
  <thead className='inputshadow'>
    <tr>
    <th scope="col">type</th>
      <th scope="col">text</th>
      <th scope="col">doce</th>
    
      <th scope="col">Created</th>
      <th scope="col">Mofified</th>

    </tr>
  </thead>
  <tbody className='inputshadow'>
  {
  OnePlanData?.notes?.map((item,index)=>{return(

    <tr>
      <div className='checkboxstyle  checkshadow d-flex justify-content-start align-items-center' style={{}}>
    <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.type}</td>
      </div>
     
    <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.text}</td>

    <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.doc}</td>
   
    <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.created_at}</td>
    <td style={{fontSize:"11px",fontWeight:"BOLD"}}>{item?.updated_at}</td>

  </tr>
  )})
}
 
  </tbody>
</table>

{/* <form className='containerBox p-1' style={{width:"100%"}}>
{
  OralCareData?.map((item,index)=>{return(
<div className='checkboxstyle  checkshadow' style={{}}>
<input onChange={handel_oral_care} type="checkbox" id="vehicle1s" name="vehicle1s" value={item?.name}/>
<label className='ms-1' for="vehicle1s ">  {<div>{item?.name} | {item?.type} | {item?.time}| {item?.frequency} | {item?.dirctions} | {item?.created_at}</div>}</label><br/>
</div>
  )})
}



</form> */}

            
            </div>





</div>

   


    </div>
    
    
    
    </div>
    
     
    
   
    
    
    
    {/* <div className='d-flex justify-content-end p-3'>
        <button onClick={handelSave} className='p-2 saveBtn'>Save</button>
    </div> */}
    <ToastContainer></ToastContainer>
    </div>
    
  )
}

export default ViewCarePlan