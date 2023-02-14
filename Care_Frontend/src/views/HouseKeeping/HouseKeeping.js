
import { CreateHouseKeepingtApi } from 'Hook/House_Keeping/Create-House_Keeping-Hook';
import { DeletHouseKeepingApi } from 'Hook/House_Keeping/Delet-House_Keeping-Hook';
import { useGetHouseKeepingApi } from 'Hook/House_Keeping/Get-House_Keeping-Hook';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import AddHouseKeeping from './Add-HouseKeeping';
import EditeHouseKeeping from './Edite-HouseKeeping/EditeHouseKeeping';


const HouseKeeping =()=>{


  const {mutate:SubmitCreateHouseKeeping} =  CreateHouseKeepingtApi()
  const {CreateHouseKeepingtrData,errors} = useSelector(state => state.CreateHouseKeepingtSlice)

  const {data} =  useGetHouseKeepingApi()
  const {HouseKeepingData} = useSelector(state => state.GetAllHouseKeepingeSlice)



  const {isLoading,mutate:SubmitDeletHouseKeeping,isError,error,refetch} =  DeletHouseKeepingApi()
  const {DeletHouseKeepingData} = useSelector(state => state.DeletHouseKeepingSlice)


const [Id,setId] =useState()
  const handelDeletHouseKeeping =(id)=>{
    SubmitDeletHouseKeeping(id)
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

    const [showaddHouseKeeping, setshowaddHouseKeeping] = useState(false);

    const handleCloseaddHouseKeeping = () => setshowaddHouseKeeping(false);
    const handleShowaddHouseKeeping = () => {
        return(
            setshowaddHouseKeeping(true)
        )
    }

    const [itemData,setitemData]=useState()

    
    return(

        
        <div className="container" style={{height:"100%"}}>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=' titlemodel   text-center ' >Add HouseKeeping</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <AddHouseKeeping handleClose={handleClose} errors={errors} SubmitCreateHouseKeeping={SubmitCreateHouseKeeping} CreateHouseKeepingtrData={CreateHouseKeepingtrData}/>

             </Modal.Body>
        <Modal.Footer>
       
        </Modal.Footer>
      </Modal>




      <Modal show={showEdite} onHide={handleCloseEdite}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=' titlemodel   text-center'>Edite HouseKeeping</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditeHouseKeeping Id={Id} handleCloseEdite={handleCloseEdite} itemData={itemData}/>
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
          <button type="button" onClick={()=>handelDeletHouseKeeping(Id)} className="btn btn-danger">Delet</button>

          {/* <Button variant="Danger" onClick={()=>handelDeletHouseKeeping(Id)} >
            Delet
          </Button> */}
        </Modal.Footer>
      </Modal>
            <div className="text-center fw-bold m-5 fs-1">HouseKeeping  </div>
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
      HouseKeepingData?.map((item,index)=>{
        return(
          <tr key={index}>
          <td className='' >{item.name}</td>
          <td className='' >{item.frequency}</td>
          <td className=''>{item.dirctions}</td>
          <td className=''>{item.created_at}</td>
          <td className='' >
          <i className=" me-5 fa-regular fa-pen-to-square" onClick={()=>(handleShowEdite(),setId(item.id),setitemData(item))}></i>
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

export default HouseKeeping
