import React, { useState } from 'react';
import photo from "../../../../src/images/avatar.png"
import "../ServiceUser.css"

const ServiceUserDefult  =() =>{
    const [img,setimg]= useState(photo)
    const onchangeimg=(e)=>{
     if(e.target.files && e.target.files[0])
     {
       setimg(URL.createObjectURL(e.target.files && e.target.files[0]))
   
     }
     
   
    }


    return(

        <div className='border m-5'>
                

        <div className='box mx-5'>
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
</div>


<div className='box mt-5'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">title</span>
<select class="form-select form-select-sm inputshadowGender " aria-label=".form-select-sm example">
<option selected>Title</option>
<option value="1">Mr</option>
<option value="2">Mrs</option>

</select></div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">First Name</span>
<input type="text" className="form-control inputshadow" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1"/>
</div>
</div>


<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Last Name</span>
<input type="text" className="form-control inputshadow" placeholder="LastName" aria-label="LastName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Preferred Name</span>
<input type="text" className="form-control inputshadow" placeholder="Preferred Name" aria-label="PreferredName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Date Of Birth</span>
<input type="date" name="dateofbirth" className=" inputshadow" id="dateofbirth"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Gender</span>
<select class="form-select form-select-sm inputshadowGender " aria-label=".form-select-sm example">
<option selected>Gender</option>
<option value="1">male</option>
<option value="2">femal</option>

</select>
</div>
</div>
<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Pronoun</span>
<input type="text" className="form-control inputshadow" placeholder="Pronoun" aria-label="PreferredName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">DANR/RESPECT</span>
<input type="text" className="form-control inputshadow" placeholder="DANR/RESPECT" aria-label="PreferredName" aria-describedby="basic-addon1"/>
</div>
</div>

<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Sexuality</span>
<input type="text" className="form-control inputshadow" placeholder="Sexuality" aria-label="PreferredName" aria-describedby="basic-addon1"/>
</div>
</div>
<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">Status</span>
<input type="text" className="form-control inputshadow" placeholder="Status" aria-label="PreferredName" aria-describedby="basic-addon1"/>
</div>
</div>
<div className='w-100 d-flex justify-content-end'>
<button type="button" class="btn btn-outline-primary btnsave m-2">Save</button>
</div>

</div>

    )
}

export default ServiceUserDefult