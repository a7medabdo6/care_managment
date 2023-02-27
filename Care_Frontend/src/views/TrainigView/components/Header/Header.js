import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import Modal from 'react-bootstrap/Modal';
import AddWorker from 'views/Add-Worker/AddWorker';
import AddTraining from '../../../AddTraining';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = props => {
  const { className,AllUserData,handleShow , ...rest } = props;
 
  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >


      <Grid
        alignItems="flex-end"
        container
        justify="space-between"
        spacing={3}
      >
        {/* <Grid item>
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
        </Grid> */}
        <Grid item>
          
          <Button
          onClick={handleShow}
            color="primary"
            variant="contained"
          >
            Add training
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
