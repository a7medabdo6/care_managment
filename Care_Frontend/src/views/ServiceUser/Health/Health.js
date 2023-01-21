import React, { useState } from 'react';
import photo from "../../../../src/images/avatar.png"
import "./Health.css"

const Health  =() =>{
    


    return(

        <div className='border m-5'>
                

                

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Height (m)</span>
<input type="number" className="form-control inputshadow" placeholder="" aria-label="First Name" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Weight (k)</span>
<input type="number" className="form-control inputshadow" placeholder="" aria-label="First Name" aria-describedby="basic-addon1"/>
</div>
</div>


<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Medical History</span>
<input type="text" className="form-control inputshadow" placeholder="" aria-label="LastName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box '>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Funeral Arrangements</span>
<select class="form-select form-select-sm inputshadowGender " aria-label=".form-select-sm example">
<option selected>Plrase Select</option>
<option value="1">option 1</option>
<option value="2">option 1</option>

</select></div>
</div>



<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Authority Category</span>
<input type="text" className="form-control inputshadow" placeholder="" aria-label="LastName" aria-describedby="basic-addon1"/>
</div>
</div>


<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Funeral Directore</span>
<input type="text" className="form-control inputshadow" placeholder="" aria-label="LastName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box '>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Team</span>
<select class="form-select form-select-sm inputshadowGender " aria-label=".form-select-sm example">
<option selected>Unassigned</option>
<option value="1">Team 1</option>
<option value="2">Team 1</option>

</select></div>
</div>

<div className='box '>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Team</span>
<select class="form-select form-select-sm inputshadowGender " aria-label=".form-select-sm example">
<option selected>Unassigned</option>
<option value="1">Unassigned</option>
<option value="2">Unassigned</option>

</select></div>
</div>

<div className='w-100 d-flex justify-content-end'>
<button type="button" class="btn btn-outline-primary btnsave m-2">Save</button>
</div>

</div>

    )
}

export default Health