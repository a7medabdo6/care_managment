import { DeletRiskAssesmentApi } from 'Hook/RiskAssesment/Delet-RiskAssesment-Hook';
import { useGetAllRiskAssesmentApi } from 'Hook/RiskAssesment/Get-all-Risk-Hook';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import AddRiskAssessment from './Add-Risk-Assessment';
import "./Assessments.css"
import EditeRiskAssesment from './Edite-Risk-assesment/EditeRiskAssesment';
const Assessments =()=>{
  const {data} =  useGetAllRiskAssesmentApi()
  const {AllRiskAssesmentData} = useSelector(state => state.GetRiskAssesmentSlice)



  const {isLoading,mutate:SubmitDeletRiskAssesment,isError,error,refetch} =  DeletRiskAssesmentApi()
  const {DeletRiskAssesmentrData} = useSelector(state => state.DeletRiskAssesmentSlice)

  console.log(AllRiskAssesmentData?.id)

  console.log(DeletRiskAssesmentrData)
const [Id,setId] =useState()
  const handelDeletRisk =(id)=>{
    SubmitDeletRiskAssesment(id)
    handleCloseDelet()
  }
  const [showDelet, setshowDelet] = useState(false);

    const handleCloseDelet = () => setshowDelet(false);
    const handleShowDelet = () => {setshowDelet(true)};



    const [showEdite, setshowEdite] = useState(false);

    const handleCloseEdite = () => setshowEdite(false);
    const handleShowEdite = () => setshowEdite(true);





    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showaddrisk, setshowaddrisk] = useState(false);

    const handleCloseaddrisk = () => setshowaddrisk(false);
    const handleShowaddrisk = () => {
        return(
            setshowaddrisk(true)
        )
    }
    return(

        
        <div className="container" style={{overflow:"auto"}}>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=' titlemodel   text-center bg-info ' >Add Risk Assessment</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <AddRiskAssessment handleClose={handleClose}/>

             </Modal.Body>
        <Modal.Footer>
       
        </Modal.Footer>
      </Modal>




      <Modal show={showEdite} onHide={handleCloseEdite}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=' titlemodel   text-center bg-info p-1'>Edite Risk Assessment</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditeRiskAssesment Id={Id} handleCloseEdite={handleCloseEdite}/>
             </Modal.Body>
        <Modal.Footer>
      
        </Modal.Footer>
      </Modal>


      <Modal show={showDelet} onHide={handleCloseDelet}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=' titlemodel   text-center bg-info bg-gradient p-1'>Alert</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <h3>Are You Sure ?</h3>
             </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelet}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=>handelDeletRisk(Id)} >
            Delet
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
      <th scope="col">Risk</th>
      <th scope="col">Type</th>
      <th scope="col">Resk Level</th>
      <th scope="col">Confected By</th>
      <th scope="col">Greated</th>
      <th scope="col">actions</th>

    </tr>
  </thead>
  <tbody>
    {
      AllRiskAssesmentData?.map((item,index)=>{
        return(
          <tr key={index}>
          <td>{item.name}</td>
          <td>{item.type}</td>
          <td>{item.level}</td>
          <td>Sam</td>
          <td>17 Oct 2022</td>
          <td >
          <i className=" me-5 fa-regular fa-pen-to-square" onClick={()=>(handleShowEdite(),setId(item.id))}></i>
          <i onClick={()=>(handleShowDelet(),setId(item.id))} className="fas fa-trash-alt"></i>
          </td>
          
    
        </tr>
        )
      })
    }
   
   
   

   

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
                <button onClick={handleShowaddrisk} type="button" className="btn btn-secondary bg-info bg-gradient">
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
        <ToastContainer></ToastContainer>

        </div>
    )
}

export default Assessments