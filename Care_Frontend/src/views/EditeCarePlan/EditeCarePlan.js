import { CreateServiceUserApi } from 'Hook/Service-user/Create-Service-User-hook';
import notify from 'Hook/useNotifaction';
import React, { useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';

import { useSelector } from 'react-redux';
import "./EditeCarePlan.css"
import { ToastContainer } from 'react-toastify'

const EditeCarePlan  =({custmerData}) =>{
  
    const [options,setoptions] = useState(
        [{name: 'Option 1️⃣', id: 1},{name: 'Option 2️⃣', id: 2}]
    )

console.log(custmerData)

    const onSelect =(selectedList, selectedItem)=>{

    }
  
    const onRemove =(selectedList, selectedItem)=>{

    }
  
    
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
    const [risks,setrisks]=useState()

console.log(emotional_support);
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
        setrisks(e.target.value)

    }

    return(

        <div className='border'>
 
<div className='box'>
    <div className=' title d-flex justify-content-start text-center mt-2 '>
        <h5 className='p-2'>basics</h5>
    </div>
    <div className='border '>


    <div class="input-group m-2 ">
<span className="input-group-text spantxt" id="basic-addon1">lcds </span>
<input type="number" className="form-control inputshadow" onChange={handel_lcds}   placeholder="lcds " aria-label="First Name" aria-describedby="basic-addon1"/>
</div>

<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">Date</span>
<input  type="date" name="dateofbirth" onChange={handel_data} className=" inputshadow"  id="dateofbirth"/>
</div>


<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">Night Time Support</span>
<input type="date" name="dateofbirth" onChange={handel_night_time_support} className=" inputshadow"  id="dateofbirth"/>
</div>






<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">level of understand</span>
<select class="form-select form-select-sm inputshadowGender " onChange={handel_level_of_understand} aria-label=".form-select-sm example">
<option selected>level of understand</option>
<option value="heigh">heigh</option>
<option value="medium">medium</option>
<option value="low">low</option>

</select>
</div>


<div class="input-group m-2 ">
<span className="input-group-text spantxt" id="basic-addon1">social_intersts</span>
<input type="text" onChange={handel_social_intersts} className="form-control inputshadow"   placeholder="social_intersts" aria-label="First Name" aria-describedby="basic-addon1"/>
</div>


<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">emotional_support</span>
<select class="form-select form-select-sm inputshadowGender " onChange={handel_emotional_support}  aria-label=".form-select-sm example">
<option selected>emotional_support</option>
<option value="heigh">heigh</option>
<option value="medium">medium</option>
<option value="low">low</option>

</select>
</div>


<div class="input-group m-2 ">
<span className="input-group-text spantxt" id="basic-addon1">expressing_sexuality</span>
<input type="text" onChange={handel_expressing_sexuality} className="form-control inputshadow"   placeholder="expressing_sexuality" aria-label="First Name" aria-describedby="basic-addon1"/>
</div>





<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">level of understand</span>
<select class="form-select form-select-sm inputshadowGender " aria-label=".form-select-sm example">
<option selected>level of understand</option>
<option value="heigh">heigh</option>
<option value="medium">medium</option>
<option value="low">low</option>

</select>
</div>


<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">breathing</span>
<select class="form-select form-select-sm inputshadowGender " onChange={handel_breathing} aria-label=".form-select-sm example">
<option selected>breathing</option>
<option value="heigh">heigh</option>
<option value="medium">medium</option>
<option value="low">low</option>

</select>
</div>





<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">mental_health</span>
<select class="form-select form-select-sm inputshadowGender " onChange={handel_mental_health}  aria-label=".form-select-sm example">
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
<select class="form-select form-select-sm inputshadowGender " onChange={handel_mobility}  aria-label=".form-select-sm example">
<option selected>mobility</option>
<option value="yes">Yes</option>
<option value="no">No</option>

</select>
</div>


<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">frequency</span>
<select class="form-select form-select-sm inputshadowGender " onChange={handel_frequency} aria-label=".form-select-sm example">
<option selected>frequency</option>
<option value="yes">Yes</option>
<option value="no">No</option>

</select>
</div>


<div class="input-group m-2">
<span className="input-group-text spantxt" id="basic-addon1">end og life preference</span>
<select class="form-select form-select-sm inputshadowGender " onChange={handel_end_og_life_preference}  aria-label=".form-select-sm example">
<option selected>end og life preference</option>
<option value="yes">Yes</option>
<option value="no">No</option>

</select>
</div>

    </div>




    <div className='border mt-3'>

    <div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
        <h5 className='p-2'>oral_care</h5>
    </div>


<div class="input-group ms-2 mb-3   ">
<span className="input-group-text spantxtMultiSelect" id="basic-addon1">oral_care</span>
<Multiselect
                        className=" "
                        placeholder=" Select"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        showCheckbox = {true}
                        displayValue="name"
                        style={{ color: "red"  }}
                    /></div>





</div>


<div className='border mt-3'>

<div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
    <h5 className='p-2'>personal_care</h5>
</div>
<div class="input-group ms-2 mb-3   ">
<span className="input-group-text spantxtMultiSelect" id="basic-addon1">personal_care</span>
<Multiselect
                    className=" "
                    placeholder=" Select"
                    options={options}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    showCheckbox = {true}
                    displayValue="name"
                    style={{ color: "red"  }}
                /></div>





</div>


<div className='border mt-3'>

<div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
    <h5 className='p-2'>skin_care</h5>
</div>
<div class="input-group ms-2 mb-3   ">
<span className="input-group-text spantxtMultiSelect" id="basic-addon1">skin_care</span>
<Multiselect
                    className=" "
                    placeholder=" Select"
                    options={options}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    showCheckbox = {true}
                    displayValue="name"
                    style={{ color: "red"  }}
                /></div>





</div>


<div className='border mt-3'>

<div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
    <h5 className='p-2'>health_care</h5>
</div>
<div class="input-group ms-2 mb-3   ">
<span className="input-group-text spantxtMultiSelect" id="basic-addon1">health_care</span>
<Multiselect
                    className=" "
                    placeholder=" Select"
                    options={options}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    showCheckbox = {true}
                    displayValue="name"
                    style={{ color: "red"  }}
                /></div>





</div>




<div className='border mt-3'>

<div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
    <h5 className='p-2'>social_intersts</h5>
</div>
<div class="input-group ms-2 mb-3   ">
<span className="input-group-text spantxtMultiSelect" id="basic-addon1">social_intersts</span>
<Multiselect
                    className=" "
                    placeholder=" Select"
                    options={options}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    showCheckbox = {true}
                    displayValue="name"
                    style={{ color: "red"  }}
                /></div>





</div>



<div className='border mt-3'>

<div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
    <h5 className='p-2'>continence_care</h5>
</div>
<div class="input-group ms-2 mb-3   ">
<span className="input-group-text spantxtMultiSelect" id="basic-addon1">continence_care</span>
<Multiselect
                    className=" "
                    placeholder=" Select"
                    options={options}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    showCheckbox = {true}
                    displayValue="name"
                    style={{ color: "red"  }}
                /></div>





</div>



<div className='border mt-3'>

<div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
    <h5 className='p-2'>nutrition_and_hydration</h5>
</div>
<div class="input-group ms-2 mb-3   ">
<span className="input-group-text spantxtMultiSelect" id="basic-addon1">nutrition_and_hydration</span>
<Multiselect
                    className=" "
                    placeholder=" Select"
                    options={options}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    showCheckbox = {true}
                    displayValue="name"
                    style={{ color: "red"  }}
                /></div>





</div>


<div className='border mt-3'>

<div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
    <h5 className='p-2'>risks</h5>
</div>
<div class="input-group ms-2 mb-3   ">
<span className="input-group-text spantxtMultiSelect" id="basic-addon1">risks</span>
<Multiselect
                    className=" "
                    placeholder=" Select"
                    options={options}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    showCheckbox = {true}
                    displayValue="name"
                    style={{ color: "red"  }}
                /></div>





</div>



<div className='border mt-3'>

<div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
    <h5 className='p-2'>Worker</h5>
</div>
<div class="input-group ms-2 mb-3   ">
<span className="input-group-text spantxtMultiSelect" id="basic-addon1">Worker</span>
<Multiselect
                    className=" "
                    placeholder=" Select"
                    options={options}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    showCheckbox = {true}
                    displayValue="name"
                    style={{ color: "red"  }}
                /></div>





</div>





<div className='border mt-3'>

<div className=' title d-flex justify-content-start text-center ms-2 mt-2 '>
    <h5 className='p-2'>medication_managment</h5>
</div>
<div class="input-group ms-2 mb-3   ">
<span className="input-group-text spantxtMultiSelect" id="basic-addon1">medication_managment</span>
<Multiselect
                    className=" "
                    placeholder=" Select"
                    options={options}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    showCheckbox = {true}
                    displayValue="name"
                    style={{ color: "red"  }}
                /></div>





</div>


</div>







<div className='d-flex justify-content-end p-3'>
    <button className='p-2 saveBtn'>Save</button>
</div>
<ToastContainer></ToastContainer>
</div>

    )
}

export default EditeCarePlan