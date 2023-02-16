import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import ServiceUserDefult from 'views/AllServiceUser/Add-serviceUser/ServiceUserDefult';
import { CreateServiceUserApi } from 'Hook/Service-user/Create-Service-User-hook';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = props => {

  const { className,AllServiceUserData , ...rest } = props;


  const {isLoading,mutate:SubmitCreateServiceUser,isError,error,refetch} =  CreateServiceUserApi()
  const {CreateServiceUserData,errors} = useSelector(state => state.CreateServiceUserSlice)
  const classes = useStyles();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >


<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='d-flex justify-content-center align-items-center  '> 
          <div className=' titlemodel   text-center  ' >Add Service User</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ServiceUserDefult handleClose={handleClose} errors={errors} CreateServiceUserData={CreateServiceUserData} SubmitCreateServiceUser={SubmitCreateServiceUser}/>

             </Modal.Body>
        <Modal.Footer>
       
        </Modal.Footer>
      </Modal>



      <Grid
        alignItems="flex-end"
        container
        justify="space-between"
        spacing={3}
      >
        <Grid item>
          {/* <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Management
          </Typography> */}
          {/* <Typography
            component="h1"
            variant="h3"
          >
            Currnt Care Plan({AllServiceUserData?.length})
          </Typography> */}
        </Grid>
        <Grid item>
        
          <Button
            color="primary"
            variant="contained"
            onClick={handleShow}
          >
            Add Service User
          </Button>

         
        
        </Grid>
      </Grid>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
