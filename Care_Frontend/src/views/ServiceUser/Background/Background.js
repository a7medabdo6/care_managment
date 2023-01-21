import React, { useState } from 'react';
import photo from "../../../../src/images/avatar.png"
import "./Background.css"

const Admission  =() =>{
    


    return(

        <div className='border m-5'>
                

                <div className='box mt-2'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Marital status</span>
<select class="form-select form-select-sm inputshadowGender " aria-label=".form-select-sm example">
<option selected>Plrase Select</option>
<option value="1">singal</option>
<option value="2">option 1</option>

</select></div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Religion</span>
<input type="text" className="form-control inputshadow" placeholder="Muslim" aria-label="First Name" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Ethnicity</span>
<input type="text" className="form-control inputshadow" placeholder="English" aria-label="First Name" aria-describedby="basic-addon1"/>
</div>
</div>


<div className='box '>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Communication Preferance</span>
<select class="form-select form-select-sm inputshadowGender " aria-label=".form-select-sm example">
<option selected>Please Select</option>
<option value="1">singal</option>
<option value="2">option 1</option>

</select></div>
</div>

<div className='box '>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Emergency Rating</span>
<select class="form-select form-select-sm inputshadowGender " aria-label=".form-select-sm example">
<option selected>Please Select</option>
<option value="1">option 1</option>
<option value="2">option 1</option>

</select></div>
</div>



<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt spantxtadress" id="basic-addon1">Adress</span>
<input type="text" className="form-control inputshadow inputadress" placeholder="" aria-label="LastName" aria-describedby="basic-addon1"/>
</div>
</div>





<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Postal Code</span>
<input type="text" className="form-control inputshadow" placeholder="124563" aria-label="LastName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Region</span>
<input type="text" className="form-control inputshadow" placeholder="" aria-label="LastName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className=' m-2 line'></div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Key Safe Code</span>
<input type="number" className="form-control inputshadow" placeholder="5461" aria-label="LastName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Access Details</span>
<input type="text" className="form-control inputshadow" placeholder="" aria-label="LastName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Telephhone</span>
<input type="number" className="form-control inputshadow" placeholder="" aria-label="LastName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Email</span>
<input type="email" className="form-control inputshadow" placeholder="" aria-label="LastName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Mobile</span>
<input type="number" className="form-control inputshadow" placeholder="" aria-label="LastName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='w-100 d-flex justify-content-end'>
<button type="button" class="btn btn-outline-primary btnsave m-2">Save</button>
</div>

</div>

    )
}

export default Admission