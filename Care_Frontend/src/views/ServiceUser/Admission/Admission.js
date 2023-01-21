import React, { useState } from 'react';
import photo from "../../../../src/images/avatar.png"
import "./Admission.css"

const Admission  =() =>{
    


    return(

        <div className='border m-5'>
                

                <div className='box mt-3'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Advanced Care Plan</span>
<input type="file" className="form-control inputshadow" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1"/>
</div>
</div>


<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Admission</span>
<input type="date" name="dateofbirth" className=" inputshadow" id="dateofbirth"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Banding</span>
<input type="number" className="form-control inputshadow" placeholder="Banding" aria-label="First Name" aria-describedby="basic-addon1"/>
</div>
</div>


<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Authority Category</span>
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

export default Admission