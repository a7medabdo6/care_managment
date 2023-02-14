import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = props => {
  const { className,CarePlanData , ...rest } = props;

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
            Currnt Care Plan({CarePlanData?.length})
          </Typography> */}
        </Grid>
        <Grid item>
          <Link to="/addCarePlan">
          <Button
            color="primary"
            variant="contained"
          >
            Add carePlan
          </Button>
          </Link>
         
        </Grid>
      </Grid>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
