import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import axios from 'utils/axios';
import { Page, SearchBar } from 'components';
import { Header, Results } from './components';
import { useSelector } from 'react-redux';
import { useGetAllUserApi } from 'Hook/AllUser/Get-All-user-Hook';
import Modal from 'react-bootstrap/Modal';
import AddTraining from '../AddTraining';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  }
}));

const CustomerManagementList = ({location}) => {
  const classes = useStyles();

  const [customers, setCustomers] = useState([{},{}]);
  const state = location.state
console.log(state);
  // useEffect(() => {
  //   let mounted = true;

  //   const fetchCustomers = () => {
  //     axios.get('/api/management/customers').then(response => {
  //       if (mounted) {
  //         setCustomers(response.data.customers);
  //       }
  //     });
  //   };

  //   fetchCustomers();

  //   return () => {
  //     mounted = false;
  //   };
  // }, []);

  const handleFilter = () => {};
  const handleSearch = () => {};
  const {data}=useGetAllUserApi()

  const {AllUserData} =useSelector(state => state.GetAllUserSlice)
  console.log(AllUserData);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 
  const [id,setid] =useState()
  return (
    <Page
      className={classes.root}
      title="Customer Management List"
    >


      <Header AllUserData ={AllUserData} handleShow={handleShow} />
      <SearchBar
        onFilter={handleFilter}
        onSearch={handleSearch}
      />
      {customers && (
        <Results
          className={classes.results}
          customers={customers}
          AllUserData ={AllUserData}
          state={state}
        />
      )}
    </Page>
  );
};

export default CustomerManagementList;
