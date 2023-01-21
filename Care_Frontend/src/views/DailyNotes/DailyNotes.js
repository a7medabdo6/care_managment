import React from "react";
import "./DailyNotes.css"
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import { jsPDF } from "jspdf";
const DailyNotes = ()=>{
    const doc = new jsPDF();

    const ref = React.createRef();
    doc.text("Hello world!", 10, 10);
    doc.save("a4.pdf");
    return(
        <div className="container">
            <div>
                <h2>RoundSys</h2>
            </div>
            <div className="d-flex border box">

            <div className="m-2">
            <div className=" mt-3 mb-2 me-3 d-flex justify-content-between">
                <label style={{width : "150px"}} className="mb-2  text-nowrap me-1 "> Service User</label>
                <select className="form-select form-select-sm inputshadowselect " aria-label=".form-select-sm example">
               <option selected>Please Select</option>
               <option value="1">option 1</option>
             <option value="2">option 1</option>

            </select>
            </div>

            <div className=" mt-3 mb-2 me-3 d-flex justify-content-between">
                <label style={{width : "150px"}} className="mb-2  text-nowrap me-1"> Daily Types</label>
                <select className="form-select form-select-sm inputshadowselect " aria-label=".form-select-sm example">
               <option selected>Please Select</option>
               <option value="1">option 1</option>
             <option value="2">option 1</option>

            </select>
            </div>

            <div className="mt-3 d-flex justify-content-between" >
                    <label style={{width : "150px"}} className="  text-nowrap "> Keyword</label>
                    <input  type="text" className="form-control inputshadow" placeholder=""  aria-describedby="basic-addon1"/>

                </div>
            </div>

            <div className="m-2">
            <div className=" mt-3  me-3 d-flex justify-content-between">
                <label style={{width : "150px"}} className="mb-2  text-nowrap me-1"> Date</label>
                <select className="form-select form-select-sm inputshadowselect " aria-label=".form-select-sm example">
               <option selected>Please Select</option>
               <option value="1">option 1</option>
             <option value="2">option 1</option>

            </select>
            </div>

            <div className=" mt-3  me-3 d-flex justify-content-between">
                <label style={{width : "150px"}} className="mb-2  text-nowrap me-1"> Reviewed</label>
                <select className="form-select form-select-sm inputshadowselect " aria-label=".form-select-sm example">
               <option selected>Please Select</option>
               <option value="1">option 1</option>
             <option value="2">option 1</option>

            </select>
            </div>
            </div>

            </div>
            <div ref={ref}>
            <table  className="table table-striped border mt-3 table-responsive">
  <thead className="tablehead " >
    <tr className="bg-info tablehead ">
      <th scope="col" className="w-25">Date</th>
      <th scope="col" className="w-75">Notes</th>
      

    </tr>
  </thead>
  <tbody>
    <tr className="text-nowrap">
      <th scope="row" >17 Oct 2022</th>
      <td>Covid-19</td>
      
    </tr>
    <tr>
      <th scope="row">17 Oct 2022</th>
      
      <td>Covid-19</td>
      
    </tr>
    <tr>
      <th scope="row">17 Oct 2022</th>
      <td>Covid-19</td>
      
    </tr>
    <tr>
      <th scope="row">17 Oct 2022</th>
      <td>Covid-19</td>
     
    </tr>
    <tr>
      <th scope="row">17 Oct 2022</th>
      <td>Covid-19</td>
      
    </tr>
    <tr>
      <th scope="row">17 Oct 2022</th>
      <td>Covid-19</td>
    
    </tr>
    <tr>
      <th scope="row">17 Oct 2022</th>
      <td>Covid-19</td>
     
    </tr>
  </tbody>
</table>
            </div>
          
         
          
      <Pdf  targetRef={ref} filename="daily-notes.pdf" >
        {({ toPdf }) =>   <button onClick={toPdf} type="button" className="btn btn-secondary">Export PDF</button>}
      </Pdf>


            
        </div>
    )
}

export default DailyNotes