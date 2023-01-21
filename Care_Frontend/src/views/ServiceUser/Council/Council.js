import React, { useState } from 'react';
import photo from "../../../../src/images/avatar.png"
import "./Council.css"
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

const Council  =() =>{
   
    return(

        <div className='border m-5'>
                



<div className='box mt-3'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Council :Service User iD</span>
<input type="number" className="form-control inputshadow" placeholder="123456789" aria-label="First Name" aria-describedby="basic-addon1"/>
</div>
</div>


<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Council : Care Provider ID</span>
<input type="text" className="form-control inputshadow" placeholder="ZH123456" aria-label="LastName" aria-describedby="basic-addon1"/>
</div>
</div>




<div className='box '>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Service Type</span>
<select class="form-select form-select-sm inputshadowGender " aria-label=".form-select-sm example">
<option selected>Plrase Select</option>
<option value="1">option 1</option>
<option value="2">option 1</option>

</select></div>
</div>


<div className='box '>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Service Level</span>
<select class="form-select form-select-sm inputshadowGender " aria-label=".form-select-sm example">
<option selected>Plrase Select</option>
<option value="1">option 1</option>
<option value="2">option 1</option>

</select></div>
</div>





<div className='w-100 d-flex justify-content-end'>
<button type="button" class="btn btn-outline-primary btnsave m-2 ">Save</button>
</div>

</div>

    )
}

export default Council