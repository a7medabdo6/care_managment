import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar, colors } from '@material-ui/core';
import FolderOpenIcon from '@material-ui/icons/FolderOpenOutlined';

import { Label } from 'components';
import gradients from 'utils/gradients';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  label: {
    marginLeft: theme.spacing(1)
  },
  avatar: {
    backgroundImage: gradients.blue,
    height: 48,
    width: 48
  }
}));

const CardBox = props => {
  const {IconServiceUser,Review,Week,Tasks,Date,Staff,IconnoLate,Unassigned,TxtColor,title,number, className, ...rest  } = props;

  const classes = useStyles();

  const data = {
    value: number,
    
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div >
        <Typography
        style={{color:`${TxtColor}`}}
          component="h3"
          gutterBottom
          variant="overline"
        >
          {title}
        </Typography>
        <div  className={classes.details}>
          <Typography style={{color:`${TxtColor}`}} variant="h3">{data.value}</Typography>
          
        </div>
      </div>
      <Avatar className={classes.avatar}>
       
        {
          title === "ReviewsInTheNext7days" ? (Review) :null
        }
        {
          title === "No of late clock ins today" ? (IconnoLate) :null
        }
        {
          title === "Rota'd Hours This Week" ? (Week) :null
        }
        {
          title === "Birthday" ? (Date) :null
        }
        {
          title === "Staff" ? (Staff) :null
        }
        {
          title === "Tasks Overdue Today" ? (Tasks) :null
        }
        {
          title === "Unassigned shifts in the next 7 days" ? (Unassigned) :null
        }
        {
          title === "Service Users" ? (IconServiceUser) :null
        }
      

      </Avatar>
    </Card>
  );
};

CardBox.propTypes = {
  className: PropTypes.string
};

export default CardBox;
