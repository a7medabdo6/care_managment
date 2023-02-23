
import { DeletDoctorsgApi } from 'Hook/Doctor/Delet-Doctor-Hook';
import { useGetDoctorsgApi } from 'Hook/Doctor/Get-Doctor-Hook';
import { CreateHouseKeepingtApi } from 'Hook/House_Keeping/Create-House_Keeping-Hook';
import { DeletHouseKeepingApi } from 'Hook/House_Keeping/Delet-House_Keeping-Hook';
import { useGetHouseKeepingApi } from 'Hook/House_Keeping/Get-House_Keeping-Hook';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import AddDoctor from './Add-Doctor';
import EditeDoctor from './Edite-Doctor/Edite-Doctor';



const HouseKeeping =()=>{


  const {mutate:SubmitCreateHouseKeeping} =  CreateHouseKeepingtApi()
  const {CreateHouseKeepingtrData,errors} = useSelector(state => state.CreateHouseKeepingtSlice)

  const {data} =  useGetDoctorsgApi()
  const {DoctorsgData} = useSelector(state => state.GetAllDoctorsSlice)



  const {isLoading,mutate:SubmitDeletDoctor,isError,error,refetch} =  DeletDoctorsgApi()
  const {DeletDoctorsgData} = useSelector(state => state.DeletDoctorsgSlice)


const [Id,setId] =useState()
  const handelDeletDoctor =(id)=>{
    SubmitDeletDoctor(id)
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
        <AddDoctor handleClose={handleClose} errors={errors} SubmitCreateHouseKeeping={SubmitCreateHouseKeeping} CreateHouseKeepingtrData={CreateHouseKeepingtrData}/>

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
          <EditeDoctor Id={Id} handleCloseEdite={handleCloseEdite} itemData={itemData}/>
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
          <button type="button" onClick={()=>handelDeletDoctor(Id)} className="btn btn-danger">Delet</button>

          {/* <Button variant="Danger" onClick={()=>handelDeletHouseKeeping(Id)} >
            Delet
          </Button> */}
        </Modal.Footer>
      </Modal>
            <div className="text-center fw-bold m-5 fs-1">Doctors  </div>
            <div>
                
          <table  className="table table-striped border mt-3 table-responsive">
  <thead >
    <tr className="bg-info bg-gradient">
    <th scope="col  ">image</th>
      <th scope="col  ">Name</th>
      <th scope="col ">email</th>
      <th scope="col ">phone</th>
      <th scope="col  ">plan</th>
      <th scope="col ">Actions</th>

    </tr>
  </thead>
  <tbody>
    {
      DoctorsgData?.map((item,index)=>{
        return(
          <tr key={index}>
                      <td className='' >
                        <div>
              <img style={{width:"50px",height:"50px"}} src='../../images/avatar.png'/>
            </div>
            </td>

          <td className='' >{item.name}</td>
          <td className='' >{item.email}</td>
          <td className=''>{item.photo}</td>
          <td className=''>{item.plan}</td>
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
