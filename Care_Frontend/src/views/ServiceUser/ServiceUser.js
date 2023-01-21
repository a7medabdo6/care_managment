import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import "./ServiceUser.css"
import photo from "../../../src/images/avatar.png"

import ServiceUserDefult from "./ServiceUser1/ServiceUserDefult"
import Admission from './Admission/Admission';
import Adentification from './Adentification/Adentification';
import Council from './Council/Council';
import Background from './Background/Background';
import Health from './Health/Health';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [img,setimg]= useState(photo)
 const onchangeimg=(e)=>{
  if(e.target.files && e.target.files[0])
  {
    setimg(URL.createObjectURL(e.target.files && e.target.files[0]))

  }
  

 }
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Service User" {...a11yProps(0)} />
          <Tab label="Admission" {...a11yProps(1)} />
          <Tab label="Adentification" {...a11yProps(2)} />
          <Tab label="Council" {...a11yProps(3)} />
          <Tab label="Background" {...a11yProps(4)} />
          <Tab label="Health" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} />
          <Tab label="Item 8" {...a11yProps(7)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className="bigBox">
        <ServiceUserDefult/>




      </TabPanel>
      <TabPanel value={value} index={1}>
       <Admission/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Adentification />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Council/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Background/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Health/>
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={7}>
        Item 8
      </TabPanel>
    </div>
  );
}
