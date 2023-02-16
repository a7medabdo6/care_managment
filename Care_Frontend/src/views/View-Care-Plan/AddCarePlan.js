import { CreateServiceUserApi } from 'Hook/Service-user/Create-Service-User-hook';
import React, { useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';

import { useSelector } from 'react-redux';
import "./AddCarePlan.css"
import { ToastContainer } from 'react-toastify'
import { CreateCarePlantApi } from 'Hook/CarePlan/Get-Create-CarePlan-Hook';
import { useGetAllUserApi } from 'Hook/AllUser/Get-All-user-Hook';
import Modal from 'react-bootstrap/Modal';
import { useGetsocial_interestsApi } from 'Hook/Social-interests/Get-Social-interests-Hook';
import AddsocialAssessment from './Add-socialinterests.js/Add-socialinterests';
import { useGetOralCareApi } from 'Hook/Oral-Care/Get-Oral-Care-Hook';
import AddOralCare from './Add-Oral-.js/Add-Oral';
import { useGetAllServiceUserApi } from 'Hook/Service-user/GetALLServiceUserData-Hook';
import { useGetAllRiskAssesmentApi } from 'Hook/RiskAssesment/Get-all-Risk-Hook';
import AddRiskAssessment from './Add-Risk-Assessment';
import { useEffect } from 'react';
import notify from 'Hook/useNotifaction';
import AddHouseKeeping from './Add-House-keeping';
import { useGetHouseKeepingApi } from 'Hook/House_Keeping/Get-House_Keeping-Hook';
import AddPersonalCare from './Add-PersonalCare';
import { useGetAllPersonalCareApi } from 'Hook/Personal_Care/Get-Personal_Care-Hook';

const CarePlan  =() =>{

  const {data:socialData} =  useGetsocial_interestsApi()
  const {social_interestsData} = useSelector(state => state.GetAllsocial_interestseSlice)

  const {data:HouseData} =  useGetHouseKeepingApi()
  const {HouseKeepingData} = useSelector(state => state.GetAllHouseKeepingeSlice)



  const {data:personalCareData} =  useGetAllPersonalCareApi()
  const {PersonalCareData} = useSelector(state => state.GetAllPersonalCareeSlice)

  const[itemOral,setitemOral]= useState()

  const {data:OralData} =  useGetOralCareApi()
  const {OralCareData} = useSelector(state => state.GetAllOralCareeSlice)
console.log(OralCareData)
/* start modle code  */
const [showOralCare, setshowOralCare] = useState(false);

const handleCloseshowOralCare = () => setshowOralCare(false);
const handleShowshowOralCare = () => setshowOralCare(true);



const [showPersonalCare, setShowPersonalCare] = useState(false);

const handleClosePersonalCare = () => setShowPersonalCare(false);
const handleShowPersonalCare = () => setShowPersonalCare(true);


const [showsocial, setShowsocial] = useState(false);

const handleCloseShowsocial = () => setShowsocial(false);
const handleShowShowsocial = () => setShowsocial(true);


const [showSkinCare, setShowSkinCare] = useState(false);

const handleCloseSkinCare = () => setShowSkinCare(false);
const handleShowSkinCare = () => setShowSkinCare(true);



const [showHealthCare, setShowHealthCare] = useState(false);

const handleCloseHealthCare = () => setShowHealthCare(false);
const handleShowHealthCare = () => setShowHealthCare(true);



const [showcontinenceCare, setShowcontinenceCare] = useState(false);

const handleClosecontinenceCare = () => setShowcontinenceCare(false);
const handleShowcontinenceCare = () => setShowcontinenceCare(true);




const [showRisks, setShowRisks] = useState(false);

const handleCloseRisks = () => setShowRisks(false);
const handleShowRisks = () => setShowRisks(true);



const [showhousekeeping, setshowhousekeeping] = useState(false);

const handleClosehousekeeping = () => setshowhousekeeping(false);
const handleShowhousekeeping = () => setshowhousekeeping(true);


const [showmedication, setShowmedication] = useState(false);

const handleClosemedication = () => setShowmedication(false);
const handleShowmedication = () => setShowmedication(true);



const [shownutrition, setShownutrition] = useState(false);

const handleClosenutrition = () => setShownutrition(false);
const handleShownutrition = () => setShownutrition(true);
/* end modle code  */




    const {isLoading,mutate:SubmitCreateCarePlant,isError,error:handelerror,refetch} =  CreateCarePlantApi()
    const {CreateCarePlantrData,error} = useSelector(state => state.CreateCarePlantSlice)
    console.log(CreateCarePlantrData);
    useEffect(()=>{
      if(error !== [] && error !== "Internal server error"){
        error.map((item)=>{return(
          notify(item,"error")       
  
        )})
  
      }
    },[error])
  
    useEffect(()=>{
       if(error === "Internal server error"){
     
        notify("Complete the fields","error")       

     

    }
  },[error])
console.log(error)
   
const {data:AllSEVICE}=useGetAllServiceUserApi()
const {AllServiceUserData} =useSelector(state => state.GetAllServiceUserSlice )
console.log(AllServiceUserData);




const {data:RiskAssesmentData} =  useGetAllRiskAssesmentApi()
const {AllRiskAssesmentData} = useSelector(state => state.GetRiskAssesmentSlice)
const [clientId,setclientId]=useState()

    const [lcds,setlcds]=useState()
    const [date,setdate]=useState()
    const [level_of_understand,setlevel_of_understand]=useState()
    const [mobility,setmobility]=useState()
    const [personal_care,setpersonal_care]=useState([])
    const [continence_care,setcontinence_care]=useState()
    const [comunication,setcomunication]=useState()
    const [oral_care,setoral_care]=useState([])
    const [nutrition_and_hydration,setnutrition_and_hydration]=useState()
    const [skin_care,setskin_care]=useState()
    const [social_intersts,setsocial_intersts]=useState([])
    const [night_time_support,setnight_time_support]=useState()
    const [emotional_support,setemotional_support]=useState()
    const [expressing_sexuality,setexpressing_sexuality]=useState()
        const [health_care,sethealth_care]=useState()
        const [house_keeping,sethouse_keeping]=useState([])
    const [medication_managment,setmedication_managment]=useState()
    const [mental_health,setmental_health]=useState()
    const [end_og_life_preference,setend_og_life_preference]=useState()
    const [breathing,setbreathing]=useState()
    const [frequency,setfrequency]=useState()
    const [spiritual_and_culture_wellbeing,setspiritual_and_culture_wellbeing]=useState()
    const [userId,setuserId]=useState()
    const [risks,setrisks]=useState([])



const handel_clientId=(e)=>{
        setclientId(e.target.value)

    }
    const handel_lcds=(e)=>{
        setlcds(e.target.value)

    }
    const handel_level_of_understand=(e)=>{
        setlevel_of_understand(e.target.value)

    }
    const handel_data=(e)=>{
        setdate(e.target.value)

    }
    const handel_mobility=(e)=>{
        setmobility(e.target.value)

    }

    const handel_house_keeping=(e)=>{

      let value =e.target.value

      if(e.target.checked === true){
        
        sethouse_keeping((oldORAL)=>[...oldORAL,value] )

        // risks.concat(e.target.value)
      }else{
        const newArr2=oral_care.filter((item)=>item!=e?.target?.value)
        sethouse_keeping(newArr2 )

      }

  }

    const handel_personal_care=(e)=>{
      let value =e.target.value

      if(e.target.checked === true){
        
        setpersonal_care((oldORAL)=>[...oldORAL,value] )

        // risks.concat(e.target.value)
      }else{
        const newArr2=oral_care.filter((item)=>item!=e?.target?.value)
        setpersonal_care(newArr2 )

      }

    }
    const handel_continence_care=(e)=>{
        setcontinence_care(e.target.value)

    }
    const handel_comunication=(e)=>{
        setcomunication(e.target.value)

    }
    const handel_oral_care=(e)=>{
      let value =e.target.value

      if(e.target.checked === true){
        
        setoral_care((oldORAL)=>[...oldORAL,value] )
        console.log(oral_care,"oraladd");

        // risks.concat(e.target.value)
      }else{
        const newArr2=oral_care.filter((item)=>item!=e?.target?.value)
        setoral_care(newArr2 )
        console.log(oral_care,"oraldelet");

      }
    }
    const handel_nutrition_and_hydration=(e)=>{
        setnutrition_and_hydration(e.target.value)

    }
    const handel_skin_care=(e)=>{
        setskin_care(e.target.value)

    }
    const handel_social_intersts=(e)=>{
      let value =e.target.value


      if(e.target.checked === true){
        setsocial_intersts((oldsocial)=>[...oldsocial,value] )

        // risks.concat(e.target.value)
      }else{
        const newArr2=social_intersts.filter((item)=>item!=e?.target?.value)
        setsocial_intersts(newArr2 )

      }
        

    }
    console.log(social_intersts,"social");

    const handel_night_time_support=(e)=>{
        setnight_time_support(e.target.value)

    }
    const handel_emotional_support=(e)=>{
        setemotional_support(e.target.value)

    }
    const handel_expressing_sexuality=(e)=>{
        setexpressing_sexuality(e.target.value)

    }
    const handel_health_care=(e)=>{
        sethealth_care(e.target.value)

    }
    const handel_medication_managment=(e)=>{
        setmedication_managment(e.target.value)

    }
    const handel_mental_health=(e)=>{
        setmental_health(e.target.value)

    }
    const handel_end_og_life_preference=(e)=>{
        setend_og_life_preference(e.target.value)

    }
    const handel_breathing=(e)=>{
        setbreathing(e.target.value)

    }
    const handel_frequency=(e)=>{
        setfrequency(e.target.value)

    }
    const handel_spiritual_and_culture_wellbeing=(e)=>{
        setspiritual_and_culture_wellbeing(e.target.value)

    }
    const handel_userId=(e)=>{
        setuserId(e.target.value)

    }

    const handel_risks=(e)=>{

     
      if(e.target.checked === true){
        let value =e.target.value
          setrisks((oldrisks)=>[...oldrisks,value] )
        // risks.concat(e.target.value)
      }else{
        const newArr=risks.filter((item)=>item!=e?.target?.value)
         setrisks(newArr )

      }
        

    }
    const {data}=useGetAllUserApi()

    const {AllUserData} =useSelector(state => state.GetAllUserSlice)

    const handelSave =()=>{
        const data = {
            "clientId":+clientId,

            "service_user_lcds_number": lcds,
            "date": date,
            "level_of_understand": level_of_understand,
            "mobility": mobility,
            "personal_care": personal_care,
            "continence_care": continence_care,
            "comunication": comunication,
            "oral_care": oral_care,
            "nutrition_and_hydration": nutrition_and_hydration,
            "skin_care": skin_care,
            "socialInterests": social_intersts,
            "night_time_support": night_time_support,
            "emotional_support": emotional_support,
            "expressing_sexuality": expressing_sexuality,
            "health_care": health_care,
            "medication_managment": medication_managment,
            "mental_health": mental_health,
            "end_og_life_preference": end_og_life_preference,
            "breathing": breathing,
            "frequency": frequency,
            "house_keeping":house_keeping,
            "spiritual_and_culture_wellbeing": spiritual_and_culture_wellbeing,
            "userId": +userId,
            "risks": risks
          }
        SubmitCreateCarePlant(data)
    }


    return(

        <div className='container' >


<Modal show={showOralCare} onHide={handleCloseshowOralCare}>
        <Modal.Header closeButton>
          <Modal.Title className='d-flex justify-content-center align-items-center '> 
          <div className=' ' >Add Oral Care</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <AddOralCare handleCloseshowOralCare={handleCloseshowOralCare} itemOral={itemOral}/>

             </Modal.Body>
        <Modal.Footer>
       
        </Modal.Footer>
      </Modal>

      <Modal show={showPersonalCare} onHide={handleClosePersonalCare}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=' titlemodel    ' >Add Personal Care</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddPersonalCare handleClosePersonalCare={handleClosePersonalCare}/>

             </Modal.Body>
        <Modal.Footer>
       
        </Modal.Footer>
      </Modal>


      <Modal show={showSkinCare} onHide={handleCloseSkinCare}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=' titlemodel    ' >Add Skin Care</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

             </Modal.Body>
        <Modal.Footer>
       
        </Modal.Footer>
      </Modal>

      <Modal show={showsocial} onHide={handleCloseShowsocial}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=' titlemodel    ' >Add social intersts Care</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddsocialAssessment handleCloseShowsocial={handleCloseShowsocial} />

             </Modal.Body>
        <Modal.Footer>
       
        </Modal.Footer>
      </Modal>


      <Modal show={showHealthCare} onHide={handleCloseHealthCare}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=' titlemodel   ' >Add Health Care</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

             </Modal.Body>
        <Modal.Footer>
       
        </Modal.Footer>
      </Modal>



      <Modal show={shownutrition} onHide={handleClosenutrition}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=' titlemodel   text-center bg-info ' >Add continence Care</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

             </Modal.Body>
        <Modal.Footer>
       
        </Modal.Footer>
      </Modal>


      <Modal show={showhousekeeping} onHide={handleClosehousekeeping}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=' titlemodel   ' >Add house keeping </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddHouseKeeping handleClosehousekeeping={handleClosehousekeeping}/>

             </Modal.Body>
        <Modal.Footer>
       
        </Modal.Footer>
      </Modal>



      <Modal show={showcontinenceCare} onHide={handleClosecontinenceCare}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=' titlemodel    ' >Add continence Care</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

             </Modal.Body>
        <Modal.Footer>
       
        </Modal.Footer>
      </Modal>




      <Modal show={showRisks} onHide={handleCloseRisks}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=' titlemodel   text-center  ' >Add Risks Care</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddRiskAssessment handleCloseRisks={handleCloseRisks}/>

             </Modal.Body>
        <Modal.Footer>
       
        </Modal.Footer>
      </Modal>


      <Modal show={showmedication} onHide={handleClosemedication}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=' titlemodel    ' >Add medication managment</div>
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
<span className="input-group-text spantxt" id="basic-addon1">Client Name</span>
<select class="form-select form-select-sm inputshadowGender " onChange={handel_clientId}  aria-label=".form-select-sm example">
<option selected>Client Name</option>
{
  AllServiceUserData?.map((item,index)=>{return(
<option key={index} value={item?.id}>mohammed</option>
  )})
}



</select>
</div>


<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">Worker</span>
<select class="form-select form-select-sm inputshadowGender " onChange={handel_userId}  aria-label=".form-select-sm example">
<option selected>Worker Name</option>

{
AllUserData?.map((item,index)=>{return (
<option key={index} value={item.id}>{item.username}</option>
)})
}


</select>
</div>



<div class="input-group m-2 ">
<span className="input-group-text spantxt" id="basic-addon1">lcds </span>
<input type="number" className="form-control inputshadow" onChange={handel_lcds}   placeholder="lcds " aria-label="First Name" aria-describedby="basic-addon1"/>
</div>

<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">Date</span>
<input type="date" name="dateofbirth" className="form-control inputshadow" onChange={handel_data} id="dateofbirth"/>
</div>


<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">Night Time Support</span>
<input type="date" name="dateofbirth" className="form-control inputshadow" onChange={handel_night_time_support} id="dateofbirth"/>
</div>






<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">level of understand</span>
<input type="text" name="dateofbirth" className="form-control inputshadow" onChange={handel_level_of_understand} placeholder="level of understand " id="dateofbirth"/>


</div>


<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">comunication</span>
<input type="text" name="dateofbirth" className="form-control inputshadow" onChange={handel_comunication} placeholder="comunication " id="dateofbirth"/>


</div>


<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">emotional support</span>
<input type="text" name="dateofbirth" className="form-control inputshadow" onChange={handel_emotional_support} placeholder="emotional support" id="dateofbirth"/>


</div>


<div class="input-group m-2 ">
<span className="input-group-text spantxt" id="basic-addon1">expressing sexuality</span>

<input type="text" className="form-control inputshadow" onChange={handel_expressing_sexuality}  placeholder="expressing_sexuality" aria-label="First Name" aria-describedby="basic-addon1"/>
</div>







<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">breathing</span>
<input type="text" name="dateofbirth" className="form-control inputshadow" onChange={handel_breathing} placeholder="breathing" id="dateofbirth"/>


</div>





<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">mental health</span>
<input type="text" name="dateofbirth" className="form-control inputshadow" onChange={handel_mental_health} placeholder="mental health" id="dateofbirth"/>


</div>


<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">SCW</span>

<input type="text" name="dateofbirth" className="form-control inputshadow" onChange={handel_spiritual_and_culture_wellbeing} placeholder="spiritual and culture wellbeing" id="dateofbirth"/>


</div>


<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">mobility</span>

<input type="text" name="dateofbirth" className="form-control inputshadow" onChange={handel_mobility} placeholder="mobility" id="dateofbirth"/>


</div>


<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">frequency</span>
<input type="text" name="dateofbirth" className="form-control inputshadow" onChange={handel_frequency} placeholder="frequency" id="dateofbirth"/>


</div>


<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">end of life preference</span>
<input type="text" name="dateofbirth" className="form-control inputshadow" onChange={handel_end_og_life_preference} placeholder="end of life preference" id="dateofbirth"/>


</div>

</div>


</div>


   


<div className='d-flex justify-content-center align-items-center flex-column'>

<div className='itembox mt-3'>

<div className='d-flex justify-content-between align-items-center'>
<div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
<h5 className='p-2'>Oral Care</h5>
</div>
<div class="p-3"><button onClick={handleShowshowOralCare} type="button" class="btn btn-secondary "><i class="fas fa-plus"></i></button></div>
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
  OralCareData?.map((item,index)=>{return(

    <tr>
      <div className='checkboxstyle  checkshadow d-flex justify-content-start align-items-center' style={{}}>
      <input className='ms-1 me-1' onChange={(e)=>{return(handel_oral_care(e))}} type="checkbox" id="vehicle1s" name="vehicle1s" value={item?.name}/>
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


<div className='itembox mt-3'>
<div className='d-flex justify-content-between align-items-center'>
<div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
<h5 className='p-2'>Personal Care</h5>
</div>
<div class="p-3"><button type="button" onClick={handleShowPersonalCare} class="btn btn-secondary "><i class="fas fa-plus"></i></button></div>
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
  PersonalCareData?.map((item,index)=>{return(

    <tr>
      <div className='checkboxstyle  checkshadow d-flex justify-content-start align-items-center' style={{}}>
      <input className='ms-1 me-1' onChange={handel_personal_care} type="checkbox" id="vehicle1s" name="vehicle1s" value={item?.name}/>
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


<div className='itembox mt-3'>

<div className='d-flex justify-content-between align-items-center'>
<div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
<h5 className='p-2'>skin care</h5>
</div>
<div class="p-3"><button type="button" onClick={handleShowSkinCare} class="btn btn-secondary "><i class="fas fa-plus"></i></button></div>
</div>
<div class="input-group ms-2 mb-3   ">
{/* <span className="input-group-text spantxtMultiSelect" id="basic-addon1">risks</span> */}
<form className='containerBox p-1' style={{width:"100%"}}>
<div className='checkboxstyle  checkshadow' style={{}}>
<input onChange={handel_skin_care}  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
</div>


<div className='checkboxstyle  checkshadow' style={{}}>
<input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
</div>


<div className='checkboxstyle  checkshadow' style={{}}>
<input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
</div>

<div className='checkboxstyle  checkshadow' style={{}}>
<input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
</div>

<div className='checkboxstyle  checkshadow' style={{}}>
<input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
</div>


</form>
{/* <Multiselect
                className=" "
                placeholder=" Select"
                options={options}
                onSelect={onSelect}
                onRemove={onRemove}
                showCheckbox = {true}
                displayValue="name"
                style={{ color: "red"  }}
            /> */}
            
            </div>





</div>


<div className='itembox mt-3'>

<div className='d-flex justify-content-between align-items-center'>
<div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
<h5 className='p-2'>health care</h5>
</div>
<div class="p-3"><button type="button" onClick={handleShowHealthCare} class="btn btn-secondary "><i class="fas fa-plus"></i></button></div>
</div>
<div class="input-group ms-2 mb-3   ">
{/* <span className="input-group-text spantxtMultiSelect" id="basic-addon1">risks</span> */}
<form className='containerBox p-1' style={{width:"100%"}}>
<div className='checkboxstyle  checkshadow' style={{}}>
<input onChange={handel_health_care} type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
</div>


<div className='checkboxstyle  checkshadow' style={{}}>
<input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
</div>


<div className='checkboxstyle  checkshadow' style={{}}>
<input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
</div>

<div className='checkboxstyle  checkshadow' style={{}}>
<input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
</div>

<div className='checkboxstyle  checkshadow' style={{}}>
<input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
</div>


</form>
{/* <Multiselect
                className=" "
                placeholder=" Select"
                options={options}
                onSelect={onSelect}
                onRemove={onRemove}
                showCheckbox = {true}
                displayValue="name"
                style={{ color: "red"  }}
            /> */}
            
            </div>





</div>




<div className='itembox mt-3'>
<div className='d-flex justify-content-between align-items-center'>
<div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
<h5 className='p-2'>social intersts</h5>
</div>
<div class="p-3"><button type="button" onClick={handleShowShowsocial} class="btn btn-secondary "><i class="fas fa-plus"></i></button></div>
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
  social_interestsData?.map((item,index)=>{return(

    <tr>
      <div className='checkboxstyle  checkshadow d-flex justify-content-start align-items-center' style={{}}>
      <input className='ms-1 me-1' onChange={handel_social_intersts} type="checkbox" id="vehicle1s" name="vehicle1s" value={item?.name}/>
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






<div className='itembox mt-3'>
<div className='d-flex justify-content-between align-items-center'>
<div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
<h5 className='p-2'>house keeping</h5>
</div>
<div class="p-3"><button type="button" onClick={handleShowhousekeeping} class="btn btn-secondary "><i class="fas fa-plus"></i></button></div>
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
  HouseKeepingData?.map((item,index)=>{return(

    <tr>
      <div className='checkboxstyle  checkshadow d-flex justify-content-start align-items-center' style={{}}>
      <input className='ms-1 me-1' onChange={handel_house_keeping} type="checkbox" id="vehicle1s" name="vehicle1s" value={item?.name}/>
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



<div className='itembox mt-3'>

<div className='d-flex justify-content-between align-items-center'>
<div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
<h5 className='p-2'>continence care</h5>
</div>
<div class="p-3"><button type="button" onClick={handleShowcontinenceCare} class="btn btn-secondary "><i class="fas fa-plus"></i></button></div>
</div>


<div class="input-group ms-2 mb-3   ">
{/* <span className="input-group-text spantxtMultiSelect" id="basic-addon1">risks</span> */}
<form className='containerBox p-1' style={{width:"100%"}}>
<div className='checkboxstyle  checkshadow' style={{}}>
<input onChange={handel_continence_care}  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
</div>


<div className='checkboxstyle  checkshadow' style={{}}>
<input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
</div>


<div className='checkboxstyle  checkshadow' style={{}}>
<input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
</div>

<div className='checkboxstyle  checkshadow' style={{}}>
<input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
</div>

<div className='checkboxstyle  checkshadow' style={{}}>
<input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
</div>


</form>
{/* <Multiselect
                className=" "
                placeholder=" Select"
                options={options}
                onSelect={onSelect}
                onRemove={onRemove}
                showCheckbox = {true}
                displayValue="name"
                style={{ color: "red"  }}
            /> */}
            
            </div>





</div>



<div className='itembox mt-3'>
<div className='d-flex justify-content-between align-items-center'>
<div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
<h5 className='p-2'>nutrition and hydration</h5>
</div>
<div class="p-3"><button type="button" onClick={handleShownutrition} class="btn btn-secondary "><i class="fas fa-plus"></i></button></div>
</div>



<div class="input-group ms-2 mb-3   ">
{/* <span className="input-group-text spantxtMultiSelect" id="basic-addon1">risks</span> */}
<form className='containerBox p-1' style={{width:"100%"}}>
<div className='checkboxstyle  checkshadow' style={{}}>
<input onChange={handel_nutrition_and_hydration}  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
</div>


<div className='checkboxstyle  checkshadow' style={{}}>
<input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
</div>


<div className='checkboxstyle  checkshadow' style={{}}>
<input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
</div>

<div className='checkboxstyle  checkshadow' style={{}}>
<input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
</div>

<div className='checkboxstyle  checkshadow' style={{}}>
<input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
</div>


</form>
{/* <Multiselect
                className=" "
                placeholder=" Select"
                options={options}
                onSelect={onSelect}
                onRemove={onRemove}
                showCheckbox = {true}
                displayValue="name"
                style={{ color: "red"  }}
            /> */}
            
            </div>





</div>


<div className='itembox mt-3'>

<div className='d-flex justify-content-between align-items-center'>
<div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
<h5 className='p-2'>Risks</h5>
</div>
<div class="p-3"><button type="button" onClick={handleShowRisks} class="btn btn-secondary "><i class="fas fa-plus"></i></button></div>
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
  AllRiskAssesmentData?.map((item,index)=>{return(

    <tr>
      <div className='checkboxstyle  checkshadow d-flex justify-content-start align-items-center' style={{}}>
      <input className='ms-1 me-1' onChange={handel_risks} type="checkbox" id="vehicle1s" name="vehicle1s" value={item?.name}/>
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









<div className='itembox mt-3'>

<div className='d-flex justify-content-between align-items-center'>
<div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
<h5 className='p-2'>medication managment</h5>
</div>
<div class="p-3"><button type="button" onClick={handleShowmedication} class="btn btn-secondary "><i class="fas fa-plus"></i></button></div>
</div>
<div class="input-group ms-2 mb-3   ">
{/* <span className="input-group-text spantxtMultiSelect" id="basic-addon1">risks</span> */}
<form className='containerBox p-1' style={{width:"100%"}}>
<div className='checkboxstyle  checkshadow' style={{}}>
<input onChange={handel_medication_managment} type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
</div>


<div className='checkboxstyle  checkshadow' style={{}}>
<input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
</div>


<div className='checkboxstyle  checkshadow' style={{}}>
<input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
</div>

<div className='checkboxstyle  checkshadow' style={{}}>
<input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
</div>

<div className='checkboxstyle  checkshadow' style={{}}>
<input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
</div>


</form>
{/* <Multiselect
                className=" "
                placeholder=" Select"
                options={options}
                onSelect={onSelect}
                onRemove={onRemove}
                showCheckbox = {true}
                displayValue="name"
                style={{ color: "red"  }}
            /> */}
            
            </div>





</div>


</div>



</div>

 





<div className='d-flex justify-content-end p-3'>
    <button onClick={handelSave} className='p-2 saveBtn'>Save</button>
</div>
<ToastContainer></ToastContainer>
</div>

    )
}

export default CarePlan
