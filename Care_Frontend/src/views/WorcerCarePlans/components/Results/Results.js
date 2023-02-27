import React, { useState } from 'react';
import { Link, Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';

import getInitials from 'utils/getInitials';
import { ReviewStars, GenericMoreButton, TableEditBar } from 'components';
import { useGetAllUserApi } from 'Hook/AllUser/Get-All-user-Hook';
import { useDispatch, useSelector } from 'react-redux';
import { GetProfileViewSliceInfo } from 'Redux_Slices/Profile/View-profile-Slice';
import useRouter from 'utils/useRouter';
import { useEffect } from 'react';
import { DeletCarePlanApi } from 'Hook/CarePlan/Get-Delet-CarePlan-Hook';
import Modal from 'react-bootstrap/Modal';
import { useEditeCarePlanApi } from 'Hook/CarePlan/Get-Edite-CarePlan-Hook';
import EditeCarePlan from 'views/Edite-Care-Plan';


const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 700
  },
  nameCell: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1)
  },
  actions: {
    padding: theme.spacing(1),
    justifyContent: 'flex-end'
  }
}));

const Results = props => {




  const [dataEdite,setdataEdite] =useState()
 const {isLoading,mutate:SubmitDeletCarePlan,isError,error,refetch} =  DeletCarePlanApi()
  const {DeletCarePlanData} = useSelector(state => state.DeletCarePlanSlice)
console.log(DeletCarePlanData)
const [Id,setId] =useState()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 

  const handelDeletCarePlan =(Id)=>{
    SubmitDeletCarePlan(Id)
    handleClose()
  }
 
  

const handelcrossDataTOedite=()=>{
  setdataEdite()
}

//   const {isLoading,mutate:SubmitDeletCarePlan,isError,error,refetch} =  DeletCarePlanApi()
//   const {DeletCarePlanData} = useSelector(state => state.DeletCarePlanSlice)
// console.log(DeletCarePlanData)


  const [showEdite, setShowEdite] = useState(false);
  const [IdEdite,setIdEdite] =useState()

const [custmerData,setcustmerData]=useState()
console.log(custmerData);
  const handleCloseEdite = () => setShowEdite(false);
  const handleShowEdite = () => setShowEdite(true); 




  const handelEditeCarePlan =(Id)=>{
    SubmitDeletCarePlan(Id)
    handleCloseEdite()  
  }
 



  const router = useRouter();


  const { className, customers,WorkerPlansData, ...rest } = props;

  const dispatch = useDispatch();

  // const handelview =(data)=>{
    

  
  //   const res = AllUserData.filter((item,index) => index === data)
    

  //   console.log(res);
  //   dispatch(GetProfileViewSliceInfo(res));
    
  //     router.history.push('/ViewProfile');
 
  //   // window.location.replace('/ViewProfile');

  // }

  const classes = useStyles();

  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSelectAll = event => {
    const selectedCustomers = event.target.checked
      ? customers.map(customer => customer.id)
      : [];

    setSelectedCustomers(selectedCustomers);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomers.indexOf(id);
    let newSelectedCustomers = [];

    if (selectedIndex === -1) {
      newSelectedCustomers = newSelectedCustomers.concat(selectedCustomers, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomers = newSelectedCustomers.concat(
        selectedCustomers.slice(1)
      );
    } else if (selectedIndex === selectedCustomers.length - 1) {
      newSelectedCustomers = newSelectedCustomers.concat(
        selectedCustomers.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomers = newSelectedCustomers.concat(
        selectedCustomers.slice(0, selectedIndex),
        selectedCustomers.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomers(newSelectedCustomers);
  };

  const handleChangePage = (event, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value);
  };
  const [IdPlan,setIdPlan]=useState()
  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >



<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=''>Alert</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <div className='d-flex '>
            Are you Sure ?
           </div>
             </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=>handelDeletCarePlan(Id)} >
            Delet
          </Button>
        </Modal.Footer>
      </Modal>



      <Modal show={showEdite} onHide={handleCloseEdite}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center '> 
          <div className=''>Edite Care Plan</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <div className='d-flex '>
           <EditeCarePlan custmerData={custmerData} handleCloseEdite={handleCloseEdite}/>
           </div>
             </Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>



      <Typography
        color="textSecondary"
        gutterBottom
        variant="body2"
      >
        {customers.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(customers.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title="All customers"
        />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    {/* <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedCustomers.length === customers.length}
                        color="primary"
                        indeterminate={
                          selectedCustomers.length > 0 &&
                          selectedCustomers.length < customers.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell> */}
                    <TableCell>Number</TableCell>
                    <TableCell>comunication</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>frequency</TableCell>
                    <TableCell>Created</TableCell>
                    
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                
              
             
              <TableBody>
                  {WorkerPlansData?.map((customer,index) =>{return (
                    customer?.plans.map((plan,index)=>(
                      <TableRow
                      hover
                      // key={customer.id}
                      // selected={selectedCustomers.indexOf(customer.id) !== -1}
                    >
                   <TableCell>{index + 1}</TableCell>

                      
                      <TableCell>{plan.comunication}</TableCell>

                      <TableCell>{plan.date}</TableCell>
                      <TableCell>
                        {
                          plan.frequency
                        }
                      </TableCell>
                      <TableCell>
                      {
                          plan.created_at
                        }
                      </TableCell>
                      
                      <TableCell align="right">


                      <Link 
                     to={{
                      pathname: "/worker/viewplans",
                      state: plan // your data array of objects
                    }}   >
                      <Button
                      
                          color="primary"
                          size="small"
                          variant="outlined"
                        >
                          View
                        </Button>
                      </Link>
                    
                    
                      


                         {/* <Button
                         className='ms-1'
                          color="primary"
                          onClick={()=>{return(setId(customer.id) ,handleShow())}}
                          size="small"
                          
                          variant="outlined"
                        >
                          <i className="fa-sharp fa-solid fa-trash p-1"></i>
                        </Button> */}
                      </TableCell>
                    </TableRow>
                    ))
 

                  
                  )} )}
                </TableBody>
             
                
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            count={customers.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBar selected={selectedCustomers} />
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired
};

Results.defaultProps = {
  customers: []
};

export default Results;
