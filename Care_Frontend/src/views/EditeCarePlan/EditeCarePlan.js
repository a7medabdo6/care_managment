import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import "./EditeCarePlan.css"
import { ToastContainer } from 'react-toastify'
import { CreateCarePlantApi } from 'Hook/CarePlan/Get-Create-CarePlan-Hook';
import { useGetAllUserApi } from 'Hook/AllUser/Get-All-user-Hook';
import { useEditeCarePlanApi } from 'Hook/CarePlan/Get-Edite-CarePlan-Hook';

const EditeCarePlan  =({custmerData,handleCloseEdite}) =>{

   

  const {isLoading,mutate:SubmitEditeCarePlan,isError,error,refetch} =  useEditeCarePlanApi()
  const {EditeCarePlanData} = useSelector(state => state.EditeCarePlanDataSlice)
console.log(isLoading)




const [clientId,setclientId]=useState()

    const [lcds,setlcds]=useState()
    const [date,setdate]=useState()
    const [level_of_understand,setlevel_of_understand]=useState()
    const [mobility,setmobility]=useState()
    const [personal_care,setpersonal_care]=useState()
    const [continence_care,setcontinence_care]=useState()
    const [comunication,setcomunication]=useState()
    const [oral_care,setoral_care]=useState()
    const [nutrition_and_hydration,setnutrition_and_hydration]=useState()
    const [skin_care,setskin_care]=useState()
    const [social_intersts,setsocial_intersts]=useState()
    const [night_time_support,setnight_time_support]=useState()
    const [emotional_support,setemotional_support]=useState()
    const [expressing_sexuality,setexpressing_sexuality]=useState()
        const [health_care,sethealth_care]=useState()

    const [medication_managment,setmedication_managment]=useState()
    const [mental_health,setmental_health]=useState()
    const [end_og_life_preference,setend_og_life_preference]=useState()
    const [breathing,setbreathing]=useState()
    const [frequency,setfrequency]=useState()
    const [spiritual_and_culture_wellbeing,setspiritual_and_culture_wellbeing]=useState()
    const [userId,setuserId]=useState()
    const [risks,setrisks]=useState([])

console.log(emotional_support);


const handel_clientId=(e)=>{
        setclientId(6)

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
    const handel_personal_care=(e)=>{
        setpersonal_care(e.target.value)

    }
    const handel_continence_care=(e)=>{
        setcontinence_care(e.target.value)

    }
    const handel_comunication=(e)=>{
        setcomunication(e.target.value)

    }
    const handel_oral_care=(e)=>{
        setoral_care(e.target.value)

    }
    const handel_nutrition_and_hydration=(e)=>{
        setnutrition_and_hydration(e.target.value)

    }
    const handel_skin_care=(e)=>{
        setskin_care(e.target.value)

    }
    const handel_social_intersts=(e)=>{
        setsocial_intersts(e.target.value)

    }
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

      console.log(e.target.checked)
      if(e.target.checked === true){
        setrisks(risks.concat(e.target.value) )
      }
        

    }
    const {data}=useGetAllUserApi()

    const {AllUserData} =useSelector(state => state.GetAllUserSlice)
    console.log(risks);

    const handelSave =()=>{
        const FormData = {
            data:{
                "clientId":6,

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
            "social_intersts": social_intersts,
            "night_time_support": night_time_support,
            "emotional_support": emotional_support,
            "expressing_sexuality": expressing_sexuality,
            "health_care": health_care,
            "medication_managment": medication_managment,
            "mental_health": mental_health,
            "end_og_life_preference": end_og_life_preference,
            "breathing": breathing,
            "frequency": frequency,
            "spiritual_and_culture_wellbeing": spiritual_and_culture_wellbeing,
            "userId": +userId,
            "risks": risks,
            },
            id:custmerData?.id
          }
          SubmitEditeCarePlan(FormData)
          if(EditeCarePlanData !== null){
            handleCloseEdite()
          }
    }

    console.log();
    return(

        <div className='border'>
 
<div className='box'>
    <div className=' title d-flex justify-content-start text-center mt-2 '>
        <h5 className='p-2'>basics</h5>
    </div>
    <div className='border '>

    <div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">Client Name</span>
<select class="form-select form-select-sm inputshadowGender " onChange={handel_clientId}  aria-label=".form-select-sm example">
<option selected>Client Name</option>
<option value="9">heigh</option>
<option value="medium">medium</option>
<option value="low">low</option>

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
<input type="date" name="dateofbirth" className=" inputshadow" onChange={handel_data} id="dateofbirth"/>
</div>


<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">Night Time Support</span>
<input type="date" name="dateofbirth" className=" inputshadow" onChange={handel_night_time_support} id="dateofbirth"/>
</div>






<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">level of understand</span>
<select class="form-select form-select-sm inputshadowGender " onChange={handel_level_of_understand}  aria-label=".form-select-sm example">
<option selected>level of understand</option>
<option value="heigh">heigh</option>
<option value="medium">medium</option>
<option value="low">low</option>

</select>
</div>


<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">comunication</span>
<select class="form-select form-select-sm inputshadowGender " onChange={handel_comunication}  aria-label=".form-select-sm example">
<option selected>level of handel_comunication</option>
<option value="heigh">heigh</option>
<option value="medium">medium</option>
<option value="low">low</option>

</select>
</div>


<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">emotional support</span>
<select class="form-select form-select-sm inputshadowGender " onChange={handel_emotional_support} aria-label=".form-select-sm example">
<option selected>emotional_support</option>
<option value="heigh">heigh</option>
<option value="medium">medium</option>
<option value="low">low</option>

</select>
</div>


<div class="input-group m-2 ">
<span className="input-group-text spantxt" id="basic-addon1">expressing sexuality</span>
<input type="text" className="form-control inputshadow" onChange={handel_expressing_sexuality}  placeholder="expressing_sexuality" aria-label="First Name" aria-describedby="basic-addon1"/>
</div>







<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">breathing</span>
<select class="form-select form-select-sm inputshadowGender " onChange={handel_breathing}  aria-label=".form-select-sm example">
<option selected>breathing</option>
<option value="heigh">heigh</option>
<option value="medium">medium</option>
<option value="low">low</option>

</select>
</div>





<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">mental health</span>
<select class="form-select form-select-sm inputshadowGender " onChange={handel_mental_health} aria-label=".form-select-sm example">
<option selected>mental_health</option>
<option value="heigh">heigh</option>
<option value="medium">medium</option>
<option value="low">low</option>

</select>
</div>


<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">SCW</span>
<select class="form-select form-select-sm inputshadowGender " onChange={handel_spiritual_and_culture_wellbeing}  aria-label=".form-select-sm example">
<option selected>spiritual_and_culture_wellbeing</option>
<option value="heigh">heigh</option>
<option value="medium">medium</option>
<option value="low">low</option>

</select>
</div>


<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">mobility</span>
<select class="form-select form-select-sm inputshadowGender " onChange={handel_mobility} aria-label=".form-select-sm example">
<option selected>mobility</option>
<option value="heigh">Yes</option>
<option value="medium">No</option>

</select>
</div>


<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">frequency</span>
<select class="form-select form-select-sm inputshadowGender " onChange={handel_frequency}  aria-label=".form-select-sm example">
<option selected>frequency</option>
<option value="heigh">Yes</option>
<option value="medium">No</option>

</select>
</div>


<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">end og life preference</span>
<select class="form-select form-select-sm inputshadowGender " onChange={handel_end_og_life_preference} aria-label=".form-select-sm example">
<option selected>end og life preference</option>
<option value="heigh">Yes</option>
<option value="medium">No</option>

</select>
</div>

    </div>




    <div className='border mt-3'>

    <div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
        <h5 className='p-2'>oral care</h5>
    </div>


    <div class="input-group ms-2 mb-3   ">
{/* <span className="input-group-text spantxtMultiSelect" id="basic-addon1">risks</span> */}
<form className='container p-1' style={{width:"100%"}}>
    <div className='checkboxstyle  checkshadow' style={{}}>
    <input onChange={handel_oral_care}  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
    </div>


    <div className='checkboxstyle  checkshadow' style={{}}>
    <input  type="checkbox"  id="vehicle1" name="vehicle1" value="Bike2"/>
  <label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
    </div>


    <div className='checkboxstyle  checkshadow' style={{}}>
    <input   type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
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


<div className='border mt-3'>

<div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
    <h5 className='p-2'>personal care</h5>
</div>
<div class="input-group ms-2 mb-3   ">
{/* <span className="input-group-text spantxtMultiSelect" id="basic-addon1">risks</span> */}
<form className='container p-1' style={{width:"100%"}}>
    <div className='checkboxstyle  checkshadow' style={{}}>
    <input onChange={handel_personal_care}  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
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


<div className='border mt-3'>

<div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
    <h5 className='p-2'>skin care</h5>
</div>
<div class="input-group ms-2 mb-3   ">
{/* <span className="input-group-text spantxtMultiSelect" id="basic-addon1">risks</span> */}
<form className='container p-1' style={{width:"100%"}}>
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


<div className='border mt-3'>

<div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
    <h5 className='p-2'>health care</h5>
</div>
<div class="input-group ms-2 mb-3   ">
{/* <span className="input-group-text spantxtMultiSelect" id="basic-addon1">risks</span> */}
<form className='container p-1' style={{width:"100%"}}>
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




<div className='border mt-3'>

<div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
    <h5 className='p-2'>social intersts</h5>
</div>
<div class="input-group ms-2 mb-3   ">
{/* <span className="input-group-text spantxtMultiSelect" id="basic-addon1">risks</span> */}
<form className='container p-1' style={{width:"100%"}}>
    <div className='checkboxstyle  checkshadow' style={{}}>
    <input onChange={handel_social_intersts} type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
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



<div className='border mt-3'>

<div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
    <h5 className='p-2'>continence care</h5>
</div>
<div class="input-group ms-2 mb-3   ">
{/* <span className="input-group-text spantxtMultiSelect" id="basic-addon1">risks</span> */}
<form className='container p-1' style={{width:"100%"}}>
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



<div className='border mt-3'>

<div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
    <h5 className='p-2'>nutrition and hydration</h5>
</div>
<div class="input-group ms-2 mb-3   ">
{/* <span className="input-group-text spantxtMultiSelect" id="basic-addon1">risks</span> */}
<form className='container p-1' style={{width:"100%"}}>
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


<div className='border mt-3'>

<div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
    <h5 className='p-2'>risks</h5>
</div>
<div class="input-group ms-2 mb-3   ">
{/* <span className="input-group-text spantxtMultiSelect" id="basic-addon1">risks</span> */}
<form className='container p-1' style={{width:"100%"}}>
    <div className='checkboxstyle  checkshadow' style={{}}>
    <input onChange={handel_risks} type="checkbox" id="vehicle1" name="vehicle1" value="Bike1"/>
  <label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
    </div>


    <div className='checkboxstyle  checkshadow' style={{}}>
    <input  type="checkbox" onChange={handel_risks} id="vehicle1" name="vehicle1" value="Bike2"/>
  <label className='ms-1' for="vehicle1 "> I have a bike</label><br/>
    </div>


    <div className='checkboxstyle  checkshadow' style={{}}>
    <input  type="checkbox" onChange={handel_risks} id="vehicle1" name="vehicle1" value="Bike3"/>
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









<div className='border mt-3'>

<div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
    <h5 className='p-2'>medication managment</h5>
</div>
<div class="input-group ms-2 mb-3   ">
{/* <span className="input-group-text spantxtMultiSelect" id="basic-addon1">risks</span> */}
<form className='container p-1' style={{width:"100%"}}>
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







<div className='d-flex justify-content-end p-3'>
    <button onClick={handelSave} className='p-2 saveBtn'>Save</button>
</div>
<ToastContainer></ToastContainer>
</div>

    )
}

export default EditeCarePlan