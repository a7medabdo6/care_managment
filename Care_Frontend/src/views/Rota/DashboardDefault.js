import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { Page } from 'components';
import {
  Header,
  LatestProjects,
  NewProjects,
  RealTime,
  RoiPerCustomer,
  TeamTasks,
  TodaysMoney,
  SystemHealth,
  
  
} from './components';
import CardBox from "./components/CardBox/CardBox"
import { useSelector } from 'react-redux';
import { useGetWorkerPlansApi } from 'Hook/Worker/Use-Get-Worker-Plans-Hook';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const colors =["#f50057","#43a047","#d50000","#6a1b9a","#FFD3E8","#4527a0"];

const IconServiceUser = <i class="fas fa-users"></i>
const IconnoLate = <i class="far fa-clock"></i>
const Staff = <i class="fas fa-chalkboard-teacher"></i>
const Tasks = <i class="fas fa-tasks"></i>
const Unassigned = <i class="fas fa-user-md"></i>
const Week = <i class="fas fa-calendar-week"></i>
const Date = <i class="fas fa-calendar"></i>
const Review = <i class="far fa-file-pdf"></i>
const DashboardDefault = () => {
  const classes = useStyles();
  const {userData} = useSelector(state => state.UserInfo)

  useEffect(() => {
    // console.log(name);
  
  
    
  }, []) 

  const WorkeriD = JSON.parse(localStorage.getItem("user"))
  const [IdWorker,setIdWorker]=useState(WorkeriD?.id)
  const [IdPlan,setIdPlan]=useState(WorkeriD?.id)
  const {data}=useGetWorkerPlansApi(IdWorker)

  const {WorkerPlansData} =useSelector(state => state.GetWorkerPlanseSlice)
  const [plans,setplans]=useState(WorkerPlansData)
  return (
    <Page
      className={classes.root}
      title="Default Dashboard"
    >
      <Header />
      <Grid
        className={classes.container}
        container
        spacing={3}
      >
        {
          WorkerPlansData?.map((item)=>{return(
            item?.plans?.map(()=>{return(
          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
          >
            <CardBox title ="Unassigned shifts in the next 7 days" number ="114" TxtColor={colors[Math.floor(Math.random() * 5) + 1]} Unassigned={Unassigned}/>
          </Grid>
            )})
            
          )})
        }
       
        {/* <Grid
          item
          lg={3}
          sm={6}
          xs={12}
        >
          <CardBox title ="No of late clock ins today" number ="0" TxtColor={colors[Math.floor(Math.random() * 5) + 1]} IconnoLate={IconnoLate}/>
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xs={12}
        >
          <CardBox title ="Tasks Overdue Today" number ="100%" TxtColor={colors[Math.floor(Math.random() * 5) + 1]} Tasks={Tasks}/>
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xs={12}
        >
          <CardBox title ="Birthday" number ="0" TxtColor={colors[Math.floor(Math.random() * 5) + 1]} Date={Date}/>
        </Grid>
      
        <Grid
          item
          lg={3}
          sm={6}
          xs={12}
        >
          <CardBox title ="ReviewsInTheNext7days" number ="33" TxtColor={colors[Math.floor(Math.random() * 5) + 1]} Review={Review}/>
        </Grid>
      
        <Grid
          item
          lg={3}
          sm={6}
          xs={12}
        >
          <CardBox title ="Rota'd Hours This Week" number ="318" TxtColor={colors[Math.floor(Math.random() * 5) + 1]} Week={Week}/>
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xs={12}
        >
          <CardBox title ="Staff" number ="15" TxtColor={colors[Math.floor(Math.random() * 5) + 1]} Staff={Staff}/>
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xs={12}
        >
          <CardBox title ="Service Users" number ="13" TxtColor={colors[Math.floor(Math.random() * 5) + 1]} IconServiceUser = {IconServiceUser}/>
        </Grid> */}
        
      </Grid>
    </Page>
  );
};

export default DashboardDefault;
