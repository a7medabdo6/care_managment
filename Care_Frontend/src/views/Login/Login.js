import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  Link,
  Avatar
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';

import { Page } from 'components';
import gradients from 'utils/gradients';
import { LoginForm } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(6, 2)
  },
  card: {
    width: theme.breakpoints.values.md,
    maxWidth: '100%',
    overflow: 'unset',
    display: 'flex',
    position: 'relative',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%'
    }
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4)
  },
  media: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: theme.spacing(3),
    color: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  icon: {
    backgroundImage: gradients.green,
    color: theme.palette.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: 'absolute',
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64,
    fontSize: 32
  },
  loginForm: {
    marginTop: theme.spacing(3)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  person: {
    marginTop: theme.spacing(2),
    display: 'flex'
  },
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Login">
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <LockIcon className={classes.icon} />
          <Typography gutterBottom variant="h3">
            Sign in
          </Typography>
          <Typography variant="subtitle2">
            Sign in on the Care Managment platform
          </Typography>
          <LoginForm className={classes.loginForm} />
          <Divider className={classes.divider} />
        </CardContent>
        <CardMedia
          className={classes.media}
          image="https://www.roundsys.com/public/rockstar/public_page_banner_images/upload__Vgx8Bv.jpeg"
          title="Cover">
          <Typography color="inherit" variant="subtitle1">
            The Care Management System , Exceed Compliance , Reduce Paper ,
            Improve Care
          </Typography>
        </CardMedia>
      </Card>
    </Page>
  );
};

export default Login;
