import React, { useState } from 'react';
import photo from "../../../../src/images/avatar.png"
import "./Adentification.css"
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

const Admission  =() =>{
    const [qr,setqr] = useState(false)

const onclickQR=()=>{
    setqr(true)
}
    return(

        <div className='border m-5'>
                



<div className='box mt-3'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">NHS No</span>
<input type="number" className="form-control inputshadow" placeholder="123456789" aria-label="First Name" aria-describedby="basic-addon1"/>
</div>
</div>


<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">National Insurance Number</span>
<input type="text" className="form-control inputshadow" placeholder="ZH123456" aria-label="LastName" aria-describedby="basic-addon1"/>
</div>
</div>




<div className='box'>
<div class="input-group mb-3">
<span className="input-group-text spantxt" id="basic-addon1">PERSON iD</span>
<input type="text" className="form-control inputshadow" placeholder="ZH123456" aria-label="LastName" aria-describedby="basic-addon1"/>
</div>
</div>



<div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>

    {
        qr === true ? (
            <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value="KEY"
    viewBox={`0 0 256 256`}
    className="ms-0"
    />

        ) : null
    }
  
    <button  onClick={onclickQR} type="button" class="btn btn-secondary btn-sm mt-2">QR Code</button>

</div>

<div className='w-100 d-flex justify-content-end'>
<button type="button" class="btn btn-outline-primary btnsave m-2 ">Save</button>
</div>

</div>

    )
}

export default Admission