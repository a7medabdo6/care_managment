import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddRiskAssessment from './Add-Risk-Assessment';
import "./Assessments.css"
const Assessments =()=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showaddrisk, setshowaddrisk] = useState(false);

    const handleCloseaddrisk = () => setshowaddrisk(false);
    const handleShowaddrisk = () => {
        return(
            setshowaddrisk(true),
            handleClose()
        )
    }
    return(

        
        <div className="container">
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=' titlemodel   text-center bg-info bg-gradient'>Select Risk Assessment Type</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <div className='d-flex '>
            <label className='me-3'>Type</label>
            <select className="form-select form-select-sm  " aria-label=".form-select-sm example">
                       <option className="bg-dark-subtle" selected>Open this select menu</option>
                       <option value="1">One</option>
                        <option value="2">Two</option>
                       <option value="3">Three</option>
                    </select>
           </div>
             </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleShowaddrisk} >
            Next
          </Button>
        </Modal.Footer>
      </Modal>




      <Modal show={showaddrisk} onHide={handleCloseaddrisk}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=' titlemodel   text-center bg-info bg-gradient p-1'>Add Risk Assessment</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <AddRiskAssessment/>
             </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseaddrisk}>
            Cancel
          </Button>
          <Button variant="primary" >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
            <div className="text-center fw-bold m-5 fs-1">Assessments Medicine</div>
            <div>
                <div className="d-flex">
                    <label className="p-2 border bg-dark-subtle text-center me-2">Show</label>
                    <select className="form-select form-select-sm w-25 " aria-label=".form-select-sm example">
                       <option className="bg-dark-subtle" value="0" selected>Open this select menu</option>
                       <option value="1">One</option>
                        <option value="2">Two</option>
                       <option value="3">Three</option>
                    </select>
                </div>
          <table  className="table table-striped border mt-3 table-responsive">
  <thead >
    <tr className="bg-info bg-gradient">
      <th scope="col">Last Assessed</th>
      <th scope="col">Risk</th>
      <th scope="col">Sorce</th>
      <th scope="col">Resk Level</th>
      <th scope="col">Confected By</th>
      <th scope="col">Greated</th>
      <th scope="col">Modified</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">17 Oct 2022</th>
      <td>Covid-19</td>
      <td>13</td>
      <td>High</td>
      <td>Sam</td>
      <td>17 Oct 2022</td>
      <td>17 Oct 2022</td>
    </tr>
    <tr>
      <th scope="row">17 Oct 2022</th>
      
      <td>Covid-19</td>
      <td>13</td>
      <td>High</td>
      <td>Sam</td>
      <td>17 Oct 2022</td>
      <td>17 Oct 2022</td>
    </tr>
    <tr>
      <th scope="row">17 Oct 2022</th>
      <td>Covid-19</td>
      <td>13</td>
      <td>High</td>
      <td>Sam</td>
      <td>17 Oct 2022</td>
      <td>17 Oct 2022</td>
    </tr>
    <tr>
      <th scope="row">17 Oct 2022</th>
      <td>Covid-19</td>
      <td>13</td>
      <td>High</td>
      <td>Sam</td>
      <td>17 Oct 2022</td>
      <td>17 Oct 2022</td>
    </tr>
    <tr>
      <th scope="row">17 Oct 2022</th>
      <td>Covid-19</td>
      <td>13</td>
      <td>High</td>
      <td>Sam</td>
      <td>17 Oct 2022</td>
      <td>17 Oct 2022</td>
    </tr>
    <tr>
      <th scope="row">17 Oct 2022</th>
      <td>Covid-19</td>
      <td>13</td>
      <td>High</td>
      <td>Sam</td>
      <td>17 Oct 2022</td>
      <td>17 Oct 2022</td>
    </tr>
    <tr>
      <th scope="row">17 Oct 2022</th>
      <td>Covid-19</td>
      <td>13</td>
      <td>High</td>
      <td>Sam</td>
      <td>17 Oct 2022</td>
      <td>17 Oct 2022</td>
    </tr>
  </tbody>
</table>
        </div>
        <div className="d-flex justify-content-between flex-row-reverse">
            <div className="d-flex">
                <div className="p-3">
                <button onClick={handleShow} type="button" className="btn btn-secondary bg-info bg-gradient">
                <i className="fas fa-plus"></i>
                </button>

                
                </div>
                <div className="p-3">
                    
                    <button type="button" className="btn btn-secondary bg-info bg-gradient">Review</button>

                </div>
            </div>
            <div className="p-3">
            <i className="fas fa-trash-alt"></i>
            </div>
        </div>

        <hr/>

        <div className="text-center fw-bold m-5 fs-1">Assessments Generic</div>
            <div>
                <div className="d-flex">
                    <label className="p-2 border bg-dark-subtle text-center me-2">Show</label>
                    <select className="form-select form-select-sm w-25 " aria-label=".form-select-sm example">
                       <option className="bg-dark-subtle" selected>Open this select menu</option>
                       <option value="1">One</option>
                        <option value="2">Two</option>
                       <option value="3">Three</option>
                    </select>
                </div>
          <table className="table table-striped border mt-3">
  <thead>
    <tr>
      <th scope="col">Last Assessed</th>
      <th scope="col">Risk</th>
      <th scope="col">Sorce</th>
      <th scope="col">Resk Level</th>
      <th scope="col">Confected By</th>
      <th scope="col">Greated</th>
      <th scope="col">Modified</th>

    </tr>
  </thead>
  <tbody>
    <tr className="bg-info bg-gradient">
      <th scope="row">17 Oct 2022</th>
      <td>Covid-19</td>
      <td>13</td>
      <td>High</td>
      <td>Sam</td>
      <td>17 Oct 2022</td>
      <td>17 Oct 2022</td>
    </tr>
    <tr>
      <th scope="row">17 Oct 2022</th>
      
      <td>Covid-19</td>
      <td>13</td>
      <td>High</td>
      <td>Sam</td>
      <td>17 Oct 2022</td>
      <td>17 Oct 2022</td>
    </tr>
    <tr>
      <th scope="row">17 Oct 2022</th>
      <td>Covid-19</td>
      <td>13</td>
      <td>High</td>
      <td>Sam</td>
      <td>17 Oct 2022</td>
      <td>17 Oct 2022</td>
    </tr>
    <tr>
      <th scope="row">17 Oct 2022</th>
      <td>Covid-19</td>
      <td>13</td>
      <td>High</td>
      <td>Sam</td>
      <td>17 Oct 2022</td>
      <td>17 Oct 2022</td>
    </tr>
    <tr>
      <th scope="row">17 Oct 2022</th>
      <td>Covid-19</td>
      <td>13</td>
      <td>High</td>
      <td>Sam</td>
      <td>17 Oct 2022</td>
      <td>17 Oct 2022</td>
    </tr>
    <tr>
      <th scope="row">17 Oct 2022</th>
      <td>Covid-19</td>
      <td>13</td>
      <td>High</td>
      <td>Sam</td>
      <td>17 Oct 2022</td>
      <td>17 Oct 2022</td>
    </tr>
    <tr>
      <th scope="row">17 Oct 2022</th>
      <td>Covid-19</td>
      <td>13</td>
      <td>High</td>
      <td>Sam</td>
      <td>17 Oct 2022</td>
      <td>17 Oct 2022</td>
    </tr>
  </tbody>
</table>
        </div>
        <div className="d-flex justify-content-between flex-row-reverse">
            <div className="d-flex">
                <div className="p-3">
                <button onClick={handleShow} type="button" className="btn btn-secondary bg-info bg-gradient">
                <i className="fas fa-plus"></i>
                </button>

                
                </div>
                <div className="p-3">
                    
                    <button type="button" className="btn btn-secondary bg-info bg-gradient ">Review</button>

                </div>
            </div>
            <div className="p-3">
            <i className="fas fa-trash-alt"></i>
            </div>
        </div>

        </div>
    )
}

export default Assessments