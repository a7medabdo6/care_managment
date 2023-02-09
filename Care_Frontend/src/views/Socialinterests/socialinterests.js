
import { Deletsocial_interestsApi } from 'Hook/Social-interests/Delet-Social-interests-Hook';
import { useGetsocial_interestsApi } from 'Hook/Social-interests/Get-Social-interests-Hook';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import AddsocialAssessment from './Add-socialinterests.js/Add-socialinterests';
import Editesocial from './Edite-socialinterests.js/Edite-socialinterests';

import "./social.css"
const Socialinterests =()=>{
  const {data} =  useGetsocial_interestsApi()
  const {social_interestsData} = useSelector(state => state.GetAllsocial_interestseSlice)



  const {isLoading,mutate:SubmitDeletsocialAssesment,isError,error,refetch} =  Deletsocial_interestsApi()
  const {Deletsocial_interestsData} = useSelector(state => state.Deletsocial_interestsSlice)

  console.log(social_interestsData)

  console.log(Deletsocial_interestsData)
const [Id,setId] =useState()
  const handelDeletsocial =(id)=>{
    SubmitDeletsocialAssesment(id)
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

    const [showaddsocial, setshowaddsocial] = useState(false);

    const handleCloseaddsocial = () => setshowaddsocial(false);
    const handleShowaddsocial = () => {
        return(
            setshowaddsocial(true)
        )
    }
    return(

        
        <div className="container">
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=' titlemodel   text-center bg-info ' >Add social Assessment</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <AddsocialAssessment handleClose={handleClose}/>

             </Modal.Body>
        <Modal.Footer>
       
        </Modal.Footer>
      </Modal>




      <Modal show={showEdite} onHide={handleCloseEdite}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=' titlemodel   text-center bg-info p-1'>Edite social interests</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <Editesocial Id={Id} handleCloseEdite={handleCloseEdite}/>
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
          <Button variant="primary" onClick={()=>handelDeletsocial(Id)} >
            Delet
          </Button>
        </Modal.Footer>
      </Modal>
            <div className="text-center fw-bold m-5 fs-1">Social interests</div>
            <div>
                
          <table  className="table table-striped border mt-3 table-responsive">
  <thead >
    <tr className="bg-info bg-gradient text-center">
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      
      <th scope="col">Actions</th>

    </tr>
  </thead>
  <tbody className='text-center'>
    {
      social_interestsData?.map((item,index)=>{
        return(
          <tr key={index}>
          <td>{item.name}</td>
          <td>{item.type}</td>
      
      
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
              
            </div>
            
        </div>

    
        <ToastContainer></ToastContainer>

        </div>
    )
}

export default Socialinterests

