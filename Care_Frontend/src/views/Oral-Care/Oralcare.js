

import { DeletOralCareApi } from 'Hook/Oral-Care/Delet-Oral-Care-Hook';
import { useGetOralCareApi } from 'Hook/Oral-Care/Get-Oral-Care-Hook';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import AddOralCare from './Add-Oral-.js/Add-Oral';
import EditeOralCare from './Edite-Oral.js/Edite-Oral';


import "./Oralcare.css"
const Socialinterests =()=>{
  const {data} =  useGetOralCareApi()
  const {OralCareData} = useSelector(state => state.GetAllOralCareeSlice)



  const {isLoading,mutate:SubmitDeletOralCre,isError,error,refetch} =  DeletOralCareApi()
  const {DeletOralCareData} = useSelector(state => state.DeletOralCareSlice)

  console.log(OralCareData)

  console.log(DeletOralCareData)
const [Id,setId] =useState()
  const handelDeletsocial =(id)=>{
    SubmitDeletOralCre(id)
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
console.log(OralCareData)
    const [itemdata,setitemdata]= useState()
    return(

        
        <div className="container">
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=' titlemodel   text-center bg-info ' >Add OralCare</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <AddOralCare handleClose={handleClose}/>

             </Modal.Body>
        <Modal.Footer>
       
        </Modal.Footer>
      </Modal>




      <Modal show={showEdite} onHide={handleCloseEdite}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=' titlemodel   text-center bg-info p-1'>Edite OralCare</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <EditeOralCare Id={Id} handleCloseEdite={handleCloseEdite} itemdata={itemdata}/>
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
            <div className="text-center fw-bold m-5 fs-1">Oral Care</div>
            <div>
                
          <table  className="table table-striped border mt-3 table-responsive">
  <thead >
    <tr className="bg-info bg-gradient text-center">
      <th scope="col">Name</th>
      <th scope="col">Frequency</th>
      <th scope="col">Created</th>
      <th scope="col">time</th>
      <th scope="col">Modified</th>

      <th scope="col">Actions</th>

    </tr>
  </thead>
  <tbody className='text-center'>
    {
      OralCareData?.map((item,index)=>{
        return(
          <tr key={index}>
          <td>{item?.name}</td>
          <td>{item?.frequency}</td>
          <td>{item?.created_at}</td>
          <td>{item?.time}</td>
          <td>{item?.time}</td>

          <td >
          <i className=" me-5 fa-regular fa-pen-to-square" onClick={()=>(handleShowEdite(),setId(item.id),setitemdata(item))}></i>
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

