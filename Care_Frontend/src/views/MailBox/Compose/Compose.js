import React from "react";
import "./Compose.css"
const Compose =()=>{
    return(
        <div className="m-5">

            <div className="text-center">Compose Message</div>
            <div>
                <div>
                  <label className="mb-1 " style={{fontSize :"14px",fontWeight :"bold"}}>send to</label>
                    <select class="form-select" aria-label="Default select example">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>

                </div>
                
                <div>
                  <label className="mb-1 " style={{fontSize :"14px",fontWeight :"bold"}}>About</label>
                    <select class="form-select" aria-label="Default select example">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>

                </div>

                <div>
                <label className="mb-1 " style={{fontSize :"14px",fontWeight :"bold"}}>Subject</label>

                <input type="text" className="form-control " placeholder=""  aria-describedby="basic-addon1"/>

                </div>

                <div>
                <label className="mb-1 " style={{fontSize :"14px",fontWeight :"bold"}}>Message</label>

                <input type="text" className="form-control txtmessage " placeholder=""  aria-describedby="basic-addon1"/>

                </div>

                <div >
                <label className="mb-1 " style={{fontSize :"14px",fontWeight :"bold"}}>Message</label>
                <input type="file" className="form-control " placeholder=""  aria-describedby="basic-addon1"/>
                </div>
                <div className="text-center m-3">
                <button type="button" class="btn btn-light">Send</button>
                <button type="button" class="btn btn-light">Cancel</button>
                </div>

            </div>
   
        </div>
    )
}

export default Compose