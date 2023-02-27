
import { UseGetAllNoteData } from 'Api_Requests/Note/Use-Get-Note-Data';


import { CreateNotegtApi } from 'Hook/Note/Create-Note-Hook';
import { DeletNotegApi } from 'Hook/Note/Delet-Note-Hook';
import { useGetNotegApi } from 'Hook/Note/Get-Note-Hook';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import AddNote from './Add-Note';
import AddDoctor from './Add-Note';
import EditeDoctor from './Edite-Doctor/Edite-Note';


// Create styles

const Note =()=>{


  const {mutate:SubmitCreateNote} =  CreateNotegtApi()
  const {CreateNotegtrData,errors} = useSelector(state => state.CreateNotegtSlice)

  const {data} =  useGetNotegApi()
  const {NotegData} = useSelector(state => state.GetAllNoteSlice)

console.log(NotegData);

  const {isLoading,mutate:SubmitDeletNote,isError,error,refetch} =  DeletNotegApi()
  const {DeletNotegData} = useSelector(state => state.DeletNotegSlice)


const [Id,setId] =useState()
  const handelDeletDoctor =(id)=>{
    SubmitDeletNote(id)
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
          <div className=' titlemodel   text-center ' >Add Notes</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <AddNote handleClose={handleClose} errors={errors} SubmitCreateNote={SubmitCreateNote} CreateNotegtrData={CreateNotegtrData}/>

             </Modal.Body>
        <Modal.Footer>
       
        </Modal.Footer>
      </Modal>




      <Modal show={showEdite} onHide={handleCloseEdite}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=' titlemodel   text-center'>Edite Notes</div>
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
            <div className="text-center fw-bold m-5 fs-1">Daily Notes  </div>
            <div>
                
          <table  className="table table-striped border mt-3 table-responsive">
  <thead >
    <tr className="bg-info bg-gradient">
    <th scope="col  ">Type</th>
      <th scope="col  ">Text</th>
      <th scope="col ">Doc</th>
      <th scope="col ">Created At</th>
      
      <th scope="col ">Actions</th>

    </tr>
  </thead>
  <tbody>
    {
      NotegData?.map((item,index)=>{
        return(
          <tr key={index}>
                     

          <td className='' >{item.type}</td>
          <td className='' >{item.text}</td>
          <td className=''>{item.doc}</td>
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

export default Note
