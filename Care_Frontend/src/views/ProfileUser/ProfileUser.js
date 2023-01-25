import { useGetProfileApi } from "Hook/Profile-Hook/Get-profile-Details-Hook";
import React from "react";
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


const ProfileUser =()=>{

 

  const {data}=useGetProfileApi()

  const {ProfileDetails} =useSelector(state => state.GetProfileSlice)
  console.log(ProfileDetails);


  
 
  
  if(!ProfileDetails || !ProfileDetails.worker){
return <div>looading</div>
  }
  return (
    <div>
      <section style={{backgroundColor: "#eee"}}>
  <div class="container py-5">
    <div class="row">
      <div class="col">
        <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">User</a></li>
            <li class="breadcrumb-item active" aria-current="page">User Profile</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4">
        <div class="card mb-4">
          <div class="card-body text-center">
            {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
              class="rounded-circle img-fluid" style={{width: "150px"}}/> */}

<img src={`http://localhost:5000/public/${ ProfileDetails?.worker.training}`} alt="avatar"
              class="rounded-circle img-fluid" style={{width: "150px"}}/>
            <h5 class="my-3">John Smith</h5>
            <p class="text-muted mb-1">Full Stack Developer</p>
            <p class="text-muted mb-4">Bay Area, San Francisco, CA</p>
            <div class="d-flex justify-content-center mb-2">
              {/* <button type="button" class="btn btn-primary">Follow</button>
              <button type="button" class="btn btn-outline-primary ms-1">Message</button> */}
              <div className="mt-2" style={{width: "8px",height : "8px",backgroundColor:"green",border:"1px,solid,green",borderRadius:"50%"}}></div>
              <p>Active</p>
            </div>
            <Link to="/edite/profile">
            <button type="button" className="btn btn-primary">Edite Profile</button>

          </Link>
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
                <p class="text-muted mb-0">{ProfileDetails.username}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Ni_Number</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{ProfileDetails.worker.Ni_Number}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Phone</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{ProfileDetails.worker.phone}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">next_of_kin</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{ProfileDetails.worker.next_of_kin}</p>
              </div>
            </div>
            <hr/>

            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">next_of_kin_Contact</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{ProfileDetails.worker.next_of_kin_Contact}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Address</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{ProfileDetails.worker.Adress}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Sex</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{ProfileDetails.worker.sex}</p>
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

export default ProfileUser