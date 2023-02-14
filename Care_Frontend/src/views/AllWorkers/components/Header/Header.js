import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import Modal from 'react-bootstrap/Modal';
import AddWorker from 'views/Add-Worker/AddWorker';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = props => {
  const { className,AllUserData , ...rest } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 
  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=''>   Add Worker</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddWorker handleClose={handleClose}/>
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
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Management
          </Typography>
          <Typography
            component="h1"
            variant="h3"
          >
           Workers({AllUserData?.length})
          </Typography>
        </Grid>
        <Grid item>
          
          <Button
          onClick={handleShow}
            color="primary"
            variant="contained"
          >
            Add Worker
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
