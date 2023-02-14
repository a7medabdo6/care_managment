
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import AddPersonalCare from './Add-PersonalCare';
import { CreatePersonalCaretApi } from 'Hook/Personal_Care/Create-Personal_Care-Hook';
import { useGetAllPersonalCareApi } from 'Hook/Personal_Care/Get-Personal_Care-Hook';
import { DeletPersonalCareApi } from 'Hook/Personal_Care/Delet-Personal_Care-Hook';
import EditePersonalCare from './Edite-PersonalCare/EditePersonalCare';
const PersonalCare =()=>{


  const {mutate:SubmitCreatePersonalCare} =  CreatePersonalCaretApi()
  const {CreatePersonalCaretrData,errors} = useSelector(state => state.CreatePersonalCaretSlice)

  const {data} =  useGetAllPersonalCareApi()
  const {PersonalCareData} = useSelector(state => state.GetAllPersonalCareeSlice)



  const {isLoading,mutate:SubmitDeletPersonalCare,isError,error,refetch} =  DeletPersonalCareApi()
  const {DeletPersonalCareData} = useSelector(state => state.DeletPersonalCareSlice)

  console.log(CreatePersonalCaretrData)

const [Id,setId] =useState()
  const handelDeletPersonal =(Id)=>{
    SubmitDeletPersonalCare(Id)
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

    const [itemData,setitemData]=useState()

    console.log(itemData);
    
    return(

        
        <div className="container" style={{height:"100%"}}>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=' titlemodel   text-center ' >Add Personal Care</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <AddPersonalCare handleClose={handleClose} errors={errors} SubmitCreatePersonalCare={SubmitCreatePersonalCare} CreatePersonalCaretrData={CreatePersonalCaretrData}/>

             </Modal.Body>
        <Modal.Footer>
       
        </Modal.Footer>
      </Modal>




      <Modal show={showEdite} onHide={handleCloseEdite}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=' titlemodel   text-center'>Edite Personal Care</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditePersonalCare Id={Id} handleCloseEdite={handleCloseEdite} itemData={itemData}/>
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
          <button type="button" onClick={()=>handelDeletPersonal(Id)} className="btn btn-danger">Delet</button>

          {/* <Button variant="Danger" onClick={()=>handelDeletRisk(Id)} >
            Delet
          </Button> */}
        </Modal.Footer>
      </Modal>
            <div className="text-center fw-bold m-5 fs-1">Personal Care </div>
            <div>
                
            <table  className="table table-striped border mt-3 table-responsive">
  <thead >
    <tr className="bg-info bg-gradient">
      <th scope="col  ">Name</th>
      <th scope="col ">Frequency</th>
      <th scope="col ">dirctions</th>
      <th scope="col  ">Time</th>
      <th scope="col ">Actions</th>

    </tr>
  </thead>
  <tbody>
    {
      PersonalCareData?.map((item,index)=>{
        return(
          <tr key={index}>
          <td className='' >{item.name}</td>
          <td className='' >{item.frequency}</td>
          <td className=''>{item.dirctions}</td>
          <td className=''>{item.created_at}</td>
          <td className='' >
          <i className=" me-5 fa-regular fa-pen-to-square" onClick={()=>(handleShowEdite(),setId(item.id),setitemData(item))}></i>
          <i onClick={()=>{return(handleShowDelet(),setId(item.id))} } className="fas fa-trash-alt"></i>
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

export default PersonalCare
