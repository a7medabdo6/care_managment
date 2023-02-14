import { CreateRiskAssesmentApi } from 'Hook/RiskAssesment/Create-Risk-Assesment-Hook';
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


  const {mutate:SubmitCreateRiskAssesment} =  CreateRiskAssesmentApi()
  const {CreateRiskAssesmentrData,errors} = useSelector(state => state.CreateRiskAssesmentSlice)

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

        
        <div className="container" style={{height:"100%"}}>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=' titlemodel   text-center ' >Add Risk Assessment</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <AddRiskAssessment handleClose={handleClose} errors={errors} SubmitCreateRiskAssesment={SubmitCreateRiskAssesment} CreateRiskAssesmentrData={CreateRiskAssesmentrData}/>

             </Modal.Body>
        <Modal.Footer>
       
        </Modal.Footer>
      </Modal>




      <Modal show={showEdite} onHide={handleCloseEdite}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=' titlemodel   text-center'>Edite Risk Assessment</div>
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
          <div className=' titlemodel   text-center '>Alert</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <h3>Are You Sure ?</h3>
             </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelet}>
            Cancel
          </Button>
          <button type="button" onClick={()=>handelDeletRisk(Id)} className="btn btn-danger">Delet</button>

          {/* <Button variant="Danger" onClick={()=>handelDeletRisk(Id)} >
            Delet
          </Button> */}
        </Modal.Footer>
      </Modal>
            <div className="text-center fw-bold m-5 fs-1">Risk Assessments </div>
            <div>
                
          <table  className="table table-striped border mt-3 table-responsive">
  <thead >
    <tr className="bg-info bg-gradient">
      <th scope="col  ">Risk</th>
      <th scope="col ">Type</th>
      <th scope="col ">Risk Level</th>
      <th scope="col  ">Created</th>
      <th scope="col ">Actions</th>

    </tr>
  </thead>
  <tbody>
    {
      AllRiskAssesmentData?.map((item,index)=>{
        return(
          <tr key={index}>
          <td className='' >{item.name}</td>
          <td className='' >{item.type}</td>
          <td className=''>{item.level}</td>
          <td className=''>{item.created_at}</td>
          <td className='' >
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
           
            </div>
           
        </div>

  
        <ToastContainer></ToastContainer>

        </div>
    )
}

export default Assessments