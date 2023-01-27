import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import axios from 'utils/axios';
import { Page, SearchBar } from 'components';
import { Header, Results } from './components';
import { useSelector } from 'react-redux';
import { useGetAllUserApi } from 'Hook/AllUser/Get-All-user-Hook';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  }
}));

const CustomerManagementList = () => {
  const classes = useStyles();

  const [customers, setCustomers] = useState([{},{}]);

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

  return (
    <Page
      className={classes.root}
      title="Customer Management List"
    >
      <Header AllUserData ={AllUserData} />
      <SearchBar
        onFilter={handleFilter}
        onSearch={handleSearch}
      />
      {customers && (
        <Results
          className={classes.results}
          customers={customers}
          AllUserData ={AllUserData}
        />
      )}
    </Page>
  );
};

export default CustomerManagementList;
