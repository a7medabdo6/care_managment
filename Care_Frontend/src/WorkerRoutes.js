/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import AuthLayout from './layouts/Auth';
import ErrorLayout from './layouts/Error';
import DashboardLayout from './layouts/Dashboard';
import DashboardAnalyticsView from './views/DashboardAnalytics';
import WorkerCarePlan from './views/WorcerCarePlans';
import VieWorkerCarePlan from './views/WorcerCarePlans/View-Care-Plan';

import OverviewView from './views/Overview';
import PresentationView from './views/Presentation';

const routes = [
  {
    path: '/user',
    component: AuthLayout,
    routes: [
      {
        path: '/user/CreateProfile',
        exact: true,
        component: lazy(() => import('views/CreateProfile'))
      },
    
    
    ]
  },
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/worker/careplans" />
  },


 

  
  {
    path: '/errors',
    component: ErrorLayout,
    routes: [
      {
        path: '/errors/error-401',
        exact: true,
        component: lazy(() => import('views/Error401'))
      },
      {
        path: '/errors/error-404',
        exact: true,
        component: lazy(() => import('views/Error404'))
      },
      {
        path: '/errors/error-500',
        exact: true,
        component: lazy(() => import('views/Error500'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
     



      // {
      //   path: '/EditeCarePlan',
      //   exact: true,
      //   component: lazy(() => import('views/EditeCarePlan'))
      // },


      
      /******************************************************************************* */
      {
        path: "/worker/viewplans",
        exact: true,
        component: VieWorkerCarePlan
      },
   

      {
        path: "/worker/careplans",
        exact: true,
        component: WorkerCarePlan
      },
   


  
   
 
      {
        component: () => <Redirect to="/errors/error-404" />
      },
     


    ]
  }
];

export default routes;
