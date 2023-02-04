import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';
import Modal from 'react-bootstrap/Modal';

import getInitials from 'utils/getInitials';
import { ReviewStars, GenericMoreButton, TableEditBar } from 'components';
import { useGetAllUserApi } from 'Hook/AllUser/Get-All-user-Hook';
import { useDispatch, useSelector } from 'react-redux';
import { GetProfileViewSliceInfo } from 'Redux_Slices/Profile/View-profile-Slice';
import useRouter from 'utils/useRouter';
import { useEffect } from 'react';
import { useDeletServiceUserApi } from 'Hook/Service-user/Delet-Service-User-Hook';
import { ToastContainer } from 'react-toastify';
import EditeServiceUser from 'views/EditeServiceUser';
import { ShowEditeServiceUserSliceInfo } from 'Redux_Slices/Service-User/ShowEditeServiceUserSlice';


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

  const [showEdite, setshowEdite] = useState(false);

  const handleCloseEdite = () => setshowEdite(false);
  const handleShowEdite = () => setshowEdite(true);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 const [prameter,setprameter] =useState("")
  const router = useRouter();


  const { className, customers,AllServiceUserData, ...rest } = props;

  const dispatch = useDispatch();

  // const handelview =(data)=>{
    

  
  //   const res = AllUserData.filter((item,index) => index === data)
    

  //   console.log(res);
  //   dispatch(GetProfileViewSliceInfo(res));
    
  //     router.history.push('/ViewProfile');
 
  //   // window.location.replace('/ViewProfile');

  // }

  const {ShowEditeServiceUserSliceInfoData} =useSelector(state => state.ShowEditeServiceUserSlice)
console.log(ShowEditeServiceUserSliceInfoData);
  const handelEdite =(data)=>{
    

  
    const res = AllServiceUserData.filter((item,index) => index === data)
    

    console.log(res);
    dispatch(ShowEditeServiceUserSliceInfo(res));
    
      // router.history.push('/ViewProfile');
 
    // window.location.replace('/ViewProfile');

  }
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
  const {isLoading,mutate:SubmitDeletServiceUser,isError,error,refetch} =  useDeletServiceUserApi()
  const {DeletServiceUserData} = useSelector(state => state.DeletServiceUserSlice)

 
   const handeldelet=(id)=>{
  
      SubmitDeletServiceUser(id)
      handleClose()
   }

  return (
    <div>
   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center justify-content-center d-flex align-items-center '> 
          <div className=' titlemodel   text-center bg-info bg-gradient'>Alert</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex justify-content-center align-items-center '>
           
           <h3>Are You Sure ?</h3>
          
             </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=>handeldelet(prameter)} >
            Delet
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={showEdite} onHide={handleCloseEdite}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center justify-content-center d-flex align-items-center '> 
          <div className=' titlemodel   text-center '>Edite ServiceUser</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className=''>
           
           <EditeServiceUser ShowEditeServiceUserSliceInfoData={ShowEditeServiceUserSliceInfoData} handleCloseEdite={handleCloseEdite}/>
          
             </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
      <div
      {...rest}
      className={clsx(classes.root, className)}
    >
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
                    <TableCell>initials</TableCell>
                    <TableCell>lcds</TableCell>
                    <TableCell>age_ate_refferal</TableCell>
                    <TableCell>home_address</TableCell>
                    <TableCell>school_address</TableCell>
                    <TableCell>Sex</TableCell>
                    <TableCell>start_date</TableCell>
                    <TableCell>end_date</TableCell>
                    <TableCell>qurdian_contact</TableCell>
                    <TableCell>qurdian</TableCell>
                    <TableCell>relationship</TableCell>
                    <TableCell>support_worker</TableCell>
                    <TableCell>assesment_date</TableCell>
                    <TableCell>disability</TableCell>
                    <TableCell>ethnicity</TableCell>
                    <TableCell>religion</TableCell>
                    <TableCell>compliment_of_the_household</TableCell>

                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                
              
             
              <TableBody>
                  {AllServiceUserData?.map((customer,index) => (
                    <TableRow
                      hover
                      // key={customer.id}
                      // selected={selectedCustomers.indexOf(customer.id) !== -1}
                    >
                   <TableCell>{index + 1}</TableCell>

                     
                      <TableCell>{customer.initials}</TableCell>
                      <TableCell>{customer.lcds}</TableCell>
                      <TableCell>{customer.age_ate_refferal}</TableCell>
                      <TableCell>{customer.home_address}</TableCell>
                      <TableCell>{customer.school_address}</TableCell>
                      <TableCell>{customer.sex}</TableCell>
                      <TableCell>{customer.start_date}</TableCell>
                      <TableCell>{customer.end_date}</TableCell>
                      <TableCell>{customer.qurdian_contact}</TableCell>
                      <TableCell>{customer.qurdian}</TableCell>
                      <TableCell>{customer.relationship}</TableCell>
                      <TableCell>{customer.support_worker}</TableCell>
                      <TableCell>{customer.assesment_date}</TableCell>
                      <TableCell>{customer.disability}</TableCell>
                      <TableCell>{customer.ethnicity}</TableCell>
                      <TableCell>{customer.religion}</TableCell>

                      <TableCell>{customer.compliment_of_the_household}</TableCell>
                      
                      <TableCell align="right " className='d-flex'>

                        <Button
                          color="primary"
                          
                          size="small"
                          variant="outlined"
                        >
                          View
                        </Button>

                        <Button
                          color="primary"
                          onClick={()=> {return(handelEdite(index),handleShowEdite()) }}
                          
                          className='ms-1'
                          size="small"
                          variant="outlined"
                        >
                          <i class="fa-solid fa-pen-to-square"></i>
                        </Button>
                         <Button
                         className='ms-1'
                          color="error"
                          
                          size="small"
                          onClick={() => { return (handleShow(),setprameter(customer.id))}}
                          variant="outlined"
                        >
                          <i className="fa-sharp fa-solid fa-trash p-1 text-danger" ></i>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
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

      <ToastContainer></ToastContainer>

    </div>

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
