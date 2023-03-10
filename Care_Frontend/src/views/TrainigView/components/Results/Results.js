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

import getInitials from 'utils/getInitials';
import { ReviewStars, GenericMoreButton, TableEditBar } from 'components';
import { useGetAllUserApi } from 'Hook/AllUser/Get-All-user-Hook';
import { useDispatch, useSelector } from 'react-redux';
import { GetProfileViewSliceInfo } from 'Redux_Slices/Profile/View-profile-Slice';
import useRouter from 'utils/useRouter';
import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import GreateProfileAdminWorker from 'views/GreateProfileAdminWorker';
import AddTraining from '../../../AddTraining';
import { CreateTrainingApi } from '../../../../Hook/Training/Create-Training-Hook';
import { useGetOneTrainingApi, useGetTrainingApi } from '../../../../Hook/Training/Get-Training-Hook';


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

  const [showModl, setshowModl] = useState(false);

  const handleCloseMODL = () => setshowModl(false);
  const handleShowModl = () => setshowModl(true);
 const [id,setid]=useState()
  const router = useRouter();


  const { className, customers,AllUserData,state, ...rest } = props;

  const dispatch = useDispatch();

  const handelview =(data)=>{
    

  
    const res = AllUserData.filter((item,index) => index === data)
    
  
    console.log(res);
    dispatch(GetProfileViewSliceInfo(res));
    
      router.history.push('/ViewProfile');
 
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 
  const [idTOtraining,setidTOtraining] =useState()
  const {data}=CreateTrainingApi(id)
  const {data:getOneTraining}=useGetOneTrainingApi(state)

  
  const {OneTrainingData} =useSelector(state => state.GetOneTrainingeSlice)
  console.log(OneTrainingData);
  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >

<Modal show={showModl} onHide={handleCloseMODL}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center justify-content-center d-flex align-items-center '> 
          <div className=' titlemodel   text-center '>Alert</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex justify-content-center align-items-center '>
           
           <GreateProfileAdminWorker id={id}/>
          
             </Modal.Body>
      
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
          title="Training"
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
                    <TableCell>Name</TableCell>
                    <TableCell>expiry date</TableCell>
                    <TableCell>status</TableCell>
                    <TableCell>Cooment</TableCell>
                    
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                
              
             
              <TableBody>
                  {OneTrainingData?.map((customer,index) => (
                    
                    <TableRow
                      hover
                      // key={customer.id}
                      // selected={selectedCustomers.indexOf(customer.id) !== -1}
                    >

                      
                      <TableCell>{customer.name}</TableCell>
                      <TableCell>
                      {customer.expiry_date}
                      </TableCell>
                      <TableCell>
                      {customer.status}

                      </TableCell>
                      <TableCell>
                      {customer.comment}

                      </TableCell>
                      <TableCell align="right">

                       


                         <Button
                         className='ms-1'
                          color="primary"
                          
                          size="small"
                          
                          variant="outlined"
                        >
                          <i className="fa-sharp fa-solid fa-trash p-1"></i>
                        </Button>

                        <Button
                          color="primary"
                          
                          size="small"
                          variant="outlined"
                        >
                          Edite
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
