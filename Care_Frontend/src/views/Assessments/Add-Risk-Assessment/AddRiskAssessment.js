import React,{useState} from "react";
import Button from 'react-bootstrap/Button';

import "./AddRiskAssessment.css"
import Multiselect from 'multiselect-react-dropdown';
const AddRiskAssessment =()=>{
    const [options, setoptions] = useState([
        {name: 'Option 1️⃣', id: 1},{name: 'Option 2️⃣', id: 2}
    ]);
  const  onSelect=(selectedList, selectedItem)=> {
        
    }
    
  const  onRemove=(selectedList, selectedItem)=> {
    
        
    }
    return(
        <div>
             <div className=" container ">
            <div className="p-2 border bg-info bg-gradient w-25 rounded-3 p-2 text-center">Assessment</div>
            <div className="box border">
                <h2>Service User</h2>
                <p>mohammed</p>
                <h3>Risk</h3>
                <p>Falls Risk / Slips and Trips</p>
                <div className="d-flex flex-column mt-3">
                    <label className="mb-2">Last Assessed</label>
                    <input type="date" name="dateofbirth" className=" inputshadow" id="dateofbirth"/>

                </div>
                <div className="mt-3">
                    <label className="mb-2"> What The Risk ?</label>
                    <input type="text" className="form-control inputshadow" placeholder=""  aria-describedby="basic-addon1"/>

                </div>
                <div className=" mt-3">
                <label className="mb-2"> Risk befoor intervention</label>
<select className="form-select form-select-sm inputshadowselect  " aria-label=".form-select-sm example">
<option selected>Please Select</option>
<option value="1">option 1</option>
<option value="2">option 1</option>

</select>
</div>
                <div className="mt-3">
                    <label className="mb-2"> Who is at Risk ?</label>
                    <input type="text" className="form-control inputshadow" placeholder=""  aria-describedby="basic-addon1"/>

                </div>

                <div className=" mt-3">
                <label className="mb-2"> is the rish histourical</label>
<select className="form-select form-select-sm inputshadowselect " aria-label=".form-select-sm example">
<option selected>please Select</option>
<option value="1">option 1</option>
<option value="2">option 1</option>

</select>
</div>

<div className="mt-3">
                    <label className="mb-2"> What could happen ?</label>
                    <input style={{height:"100px"}} type="text" className="form-control inputshadow" placeholder=""  aria-describedby="basic-addon1"/>

                </div>
                <div className="mt-3">
                    <label className="mb-2"> Action to take by Staff</label>
                    <input style={{height:"100px"}} type="text" className="form-control inputshadow" placeholder=""  aria-describedby="basic-addon1"/>

                </div>

                <div className=" mt-3 mb-2">
                <label className="mb-2"> Risk Following .....</label>
<select className="form-select form-select-sm inputshadowselect " aria-label=".form-select-sm example">
<option selected>Please Select</option>
<option value="1">option 1</option>
<option value="2">option 1</option>

</select>
</div>
                
            </div>
        </div>
        <div className="container">
        <div className="p-2 mt-5 border bg-info bg-gradient w-25 rounded-3 text-center">Summery</div>
        <div className="box border">
        <div class=" mt-3">
                <label className="mb-2"> Risk Level</label>
<select className="form-select form-select-sm inputshadowselect " aria-label=".form-select-sm example">
<option selected>Please Select</option>
<option value="1">option 1</option>
<option value="2">option 1</option>

</select>
</div>

<div className="mt-3">
                    <label className="mb-2"> Total Score</label>
                    <input style={{height:"100px"}} type="text" className="form-control inputshadow" placeholder=""  aria-describedby="basic-addon1"/>

                </div>
                <label className="mb-2"> Signaturs</label>

                <Multiselect
                        className="mt-2"
                        placeholder=" staff team"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        showCheckbox = "true"
                        style={{ color: "red" }}
                    />


                <div>
                    <a style={{color:"green"}} href="#">I have read and understood those risk assessment notes . </a>

                </div>

        </div>



        </div>

        <div>
       
            
        </div>

        </div>
       
    )
}

export default AddRiskAssessment