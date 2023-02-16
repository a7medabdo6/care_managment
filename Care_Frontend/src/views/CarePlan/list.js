import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import axios from 'utils/axios';
import { Page, SearchBar } from 'components';
import { Header, Results } from './components';
import { useSelector } from 'react-redux';
import { useGetAllUserApi } from 'Hook/AllUser/Get-All-user-Hook';
import { useGetCarePlanApi } from 'Hook/CarePlan/Get-AllCarePlan-Hook';
import { DeletCarePlanApi } from 'Hook/CarePlan/Get-Delet-CarePlan-Hook';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  }
}));

const CustomerManagementList = () => {

  const {isLoading,mutate:SubmitDeletCarePlan,isError,error,refetch} =  DeletCarePlanApi()
  const {DeletCarePlanData} = useSelector(state => state.DeletCarePlanSlice)
console.log(DeletCarePlanData)
const [Id,setId] =useState()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 

  const handelDeletCarePlan =(id)=>{
    SubmitDeletCarePlan(id)
    handleClose()
  }
 

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
  const {data}=useGetCarePlanApi()

  const {CarePlanData} =useSelector(state => state.GetAllCAREplaneSlice)
  console.log(CarePlanData);

  return (
    <Page
      className={classes.root}
      title="Customer Management List"
    >
      <Header CarePlanData ={CarePlanData} handelDeletCarePlan={handelDeletCarePlan} />
      <SearchBar
        onFilter={handleFilter}
        onSearch={handleSearch}
      />
      {customers && (
        <Results
        Id={Id}
        setId={setId}
        handelDeletCarePlan={handelDeletCarePlan}
        handleShow={handleShow}
        handleClose={handleClose}
        show={show}
          className={classes.results}
          customers={customers}
          CarePlanData ={CarePlanData}
        />
      )}
    </Page>
  );
};

export default CustomerManagementList;
