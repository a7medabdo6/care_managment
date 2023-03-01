import { useGetProfileApi } from "Hook/Profile-Hook/Get-profile-Details-Hook";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Hidden,
  Input,
  colors,
  Popper,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ClickAwayListener
} from '@material-ui/core';
import { Link, Link as RouterLink, useLocation } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

import avatar from "../../images/avatar.png"
import AddTraining from "../AddTraining";
import { useGetOneworkerApi } from "../../Hook/Get-WorkerHook";
import { ToastContainer } from "react-toastify";
import { DelettrainingApi } from "Hook/Training/Delete-Training-Hook";
import EditeTraining from "views/EditeTraining";
const ViewProfile =({location})=>{
  const state = location.state
  console.log(state);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 


  const [showEdite, setshowEdite] = useState(false);

  const handleCloseshowEdite = () => setshowEdite(false);
  const handlewShoshowEdite = () => setshowEdite(true); 

  const [showDelet, setshowDelet] = useState(false);

  const handleCloseDelet = () => setshowDelet(false);
  const handleShowDelet = () => setshowDelet(true); 
  // const [idTOtraining,setidTOtraining] =useState()

  const {isLoading,mutate:SubmitDelet,data:deletdata,error,refetch} =  DelettrainingApi()
  const {DelettrainingData} = useSelector(state => state.DeletTrainingSlice)
  useEffect(()=>{
    if(deletdata){
      handleCloseDelet()
    }
  },[deletdata])
  console.log(DelettrainingData);
  const [id,setid]=useState()
console.log(id);
  const {ProfileDataView} =useSelector(state => state.ViewProfileSlice)
  console.log(ProfileDataView);
const idTOtraining =ProfileDataView[0]?.worker?.id


const {data}=useGetOneworkerApi(state?.worker?.id)

const {OneworkerData} =useSelector(state => state.GetOneworkereSlice)
  console.log(OneworkerData);
  if(!ProfileDataView){
return <div>looading</div>
  }
 const handelDelet =(id)=>{

  SubmitDelet(id)
 }

 
const handelSetId=(id)=>{
  setid(id)
}


  return (
    <div>


<Modal show={showEdite} onHide={handleCloseshowEdite}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=''>   Edite Training</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditeTraining handleCloseshowEdite={handleCloseshowEdite} idTOtraining={state?.worker?.id}/>
             </Modal.Body>
        <Modal.Footer>
       

         
        </Modal.Footer>
      </Modal>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=''>   Add Training</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddTraining handleClose={handleClose} idTOtraining={state?.worker?.id}/>
             </Modal.Body>
        <Modal.Footer>
       

         
        </Modal.Footer>
      </Modal>





      <Modal show={showDelet} onHide={handleCloseDelet}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=''>  Alert </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Are You Sure ?</h3>
             </Modal.Body>
        <Modal.Footer>
        <button onClick={()=>{return(handleCloseDelet())}} type="button" className="btn btn-primary">Cancel</button>
        <button onClick={()=>{return(handelDelet(id))}} type="button" className="btn btn-danger">delet</button>
        </Modal.Footer>
      </Modal>
      <section style={{backgroundColor: "#eee"}}>
  <div class="container py-5">
    {/* <div class="row">
      <div class="col">
        <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">User</a></li>
            <li class="breadcrumb-item active" aria-current="page">User Profile</li>
          </ol>
        </nav>
      </div>
    </div> */}

    <div class="row">
      <div class="col-lg-4">
        <div class="card mb-4">
          <div class="card-body text-center">
            {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
              class="rounded-circle img-fluid" style={{width: "150px"}}/> */}

<img src={avatar} alt="avatar"
              class="rounded-circle img-fluid" style={{width: "150px"}}/>
            <h5 class="my-3">John Smith</h5>
            <p class="text-muted mb-1">Full Stack Developer</p>
            <p class="text-muted mb-4">Bay Area, San Francisco, CA</p>
            <div class="d-flex justify-content-center mb-2">
            {/* <Link to={{
    pathname: `/training/`,
    state: idTOtraining // your data array of objects
  }} >
              <button type="button" class="btn btn-outline-primary ms-1">training</button>

              </Link>    */}
              
              <button onClick={handleShow} type="button" class="btn btn-outline-primary ms-1">Add training</button>

      
            </div>
           
          </div>
        </div>
   
      </div>
      <div class="col-lg-8">
        <div class="card mb-4">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Full Name</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{state?.username}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Ni_Number</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{state?.worker?.Ni_Number}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Phone</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{state?.worker?.phone}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">next_of_kin</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{state?.worker?.next_of_kin}</p>
              </div>
            </div>
            <hr/>

            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">next_of_kin_Contact</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{state?.worker?.next_of_kin_Contact}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Address</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{state?.worker?.Adress}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Sex</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{state?.worker?.sex}</p>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <div class="col-lg-12">
        <div class="card mb-4">
          <div class="card-body">
          <table  className="table table-striped border mt-3 table-responsive">
              <thead >
                <tr className="bg-info bg-gradient text-center">
                  <th scope="col">Name</th>
                  <th scope="col">Expiry Date</th>
                  <th scope="col">Comment</th>
                  <th scope="col">Status</th>
                  <th scope="col">Proof Of Training</th>
            
                  <th scope="col">Actions</th>
            
                </tr>
              </thead>
              <tbody className='text-center'>
              {data?.training?.map(((item,index)=>{
              return    <tr key={index}>
              <td>{item?.name}</td>
              <td>{item?.expiry_date}</td>
              <td>{item?.comment}</td>
              <td>{item?.status}</td>
              <td>{item?.proof_of_training}</td>
    
              <td >
              <i className=" me-5 fa-regular fa-pen-to-square" ></i>
              <i onClick={()=>{return(handleShowDelet(),handelSetId(item?.id))}} className="fas fa-trash-alt"></i>
              </td>
              
        
            </tr>
            
            }))}

               
               
               
               
            
               
            
              </tbody>
            </table>
         
        
          
            
          
          </div>
        </div>
       
      </div>
    </div>
  </div>
</section>
<ToastContainer></ToastContainer>

    </div>
  )
}

export default ViewProfile
