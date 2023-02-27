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
import { Link, Link as RouterLink } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

import avatar from "../../images/avatar.png"
import AddTraining from "../AddTraining";
import { useGetOneworkerApi } from "../../Hook/Get-WorkerHook";
const ViewProfile =({location})=>{
  const state = location.state
  console.log(state);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 
  // const [idTOtraining,setidTOtraining] =useState()

 

  const {ProfileDataView} =useSelector(state => state.ViewProfileSlice)
  console.log(ProfileDataView);
const idTOtraining =ProfileDataView[0]?.id


const {data}=useGetOneworkerApi(1)

const {OneworkerData} =useSelector(state => state.GetOneworkereSlice)
  console.log(OneworkerData);
  if(!ProfileDataView){
return <div>looading</div>
  }

 
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=''>   Add Training</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddTraining handleClose={handleClose} idTOtraining={idTOtraining}/>
             </Modal.Body>
        <Modal.Footer>
         
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
            <Link to={{
    pathname: `/training/`,
    state: idTOtraining // your data array of objects
  }} >
              <button type="button" class="btn btn-outline-primary ms-1">training</button>

              </Link>   
              
              <button onClick={()=>{return(handleShow())}} type="button" class="btn btn-outline-primary ms-1">Add training</button>

      
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
                <p class="text-muted mb-0">{ProfileDataView[0]?.username}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Ni_Number</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{ProfileDataView[0]?.worker?.Ni_Number}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Phone</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{ProfileDataView[0]?.worker?.phone}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">next_of_kin</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{ProfileDataView[0]?.worker?.next_of_kin}</p>
              </div>
            </div>
            <hr/>

            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">next_of_kin_Contact</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{ProfileDataView[0]?.worker?.next_of_kin_Contact}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Address</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{ProfileDataView[0]?.worker?.Adress}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Sex</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{ProfileDataView[0]?.worker?.sex}</p>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default ViewProfile