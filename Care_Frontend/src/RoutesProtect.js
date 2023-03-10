/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import AuthLayout from './layouts/Auth';
import ErrorLayout from './layouts/Error';
import DashboardLayout from './layouts/Dashboard';
import DashboardAnalyticsView from './views/DashboardAnalytics';
import DashboardDefaultView from './views/DashboardDefault';
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
    component: () => <Redirect to="/dashboards/default" />
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
     
      {
        path: '/calendar',
        exact: true,
        component: lazy(() => import('views/Calendar'))
      },
      /******************************************************************************* */

      {
        path: '/service/user',
        exact: true,
        component: lazy(() => import('views/ServiceUser'))
      },
      {
        path: '/EditeServiceUser',
        exact: true,
        component: lazy(() => import('views/EditeServiceUser'))
      },
      {
        path: '/Profile/user',
        exact: true,
        component: lazy(() => import('views/ProfileUser'))
      },
      {
        path: '/Note',
        exact: true,
        component: lazy(() => import('views/Note'))
      },
    
      {
        path: '/ViewProfile',
        exact: true,
        component: lazy(() => import('views/ViewProfile'))
      },
      {
        path: '/training',
        exact: true,
        component: lazy(() => import('views/TrainigView'))
      },
      {
        path: '/viewplans',
        exact: true,
        component: lazy(() => import('views/AllCarePlan/View-Care-Plan'))
      },
      {
        path: '/ProfilWorker',
        exact: true,
        component: lazy(() => import('views/GreateProfileAdminWorker'))
      },
      {
        path: '/workers',
        exact: true,
        component: lazy(() => import('views/AllWorkers'))
      },
      {
        path: '/Doctors',
        exact: true,
        component: lazy(() => import('views/Doctor'))
      },

      {
        path: '/addCarePlan',
        exact: true,
        component: lazy(() => import('views/AddCarePlan'))
      },

      // {
      //   path: '/EditeCarePlan',
      //   exact: true,
      //   component: lazy(() => import('views/EditeCarePlan'))
      // },

      {
        path: '/CarePlan',
        exact: true,
        component: lazy(() => import('views/AllCarePlan'))
      },

      {
        path: '/socialinterests',
        exact: true,
        component: lazy(() => import('views/Socialinterests'))
      },

         {
        path: '/oralcare',
        exact: true,
        component: lazy(() => import('views/Oral-Care'))
      },
      {
        path: '/housekeeping',
        exact: true,
        component: lazy(() => import('views/HouseKeeping'))
      },
      {
        path: '/PersonalCare',
        exact: true,
        component: lazy(() => import('views/PersonalCare'))
      },
      
      /******************************************************************************* */
      {
        path: '/Assessments',
        exact: true,
        component: lazy(() => import('views/Assessments'))
      },
      {
        path: '/DailyNotes',
        exact: true,
        component: lazy(() => import('views/DailyNotes'))
      },
     
      {
        path: '/viewServiceUser/:id',
        exact: true,
        component: lazy(() => import('views/AllServiceUser/View-serviceUser'))
      },
      {
        path: '/AllServiceUser',
        exact: true,
        component: lazy(() => import('views/AllServiceUser'))
      },
      {
        path: '/Profile/user',
        exact: true,
        component: lazy(() => import('views/ProfileUser'))
      },
      {
        path: '/edite/profile',
        exact: true,
        component: lazy(() => import('views/EditeProfile'))
      },
      {
        path: '/user/mail',
        exact: true,
        component: lazy(() => import('views/MailBox'))
      },
      {
        path: '/user/mailCompose',
        exact: true,
        component: lazy(() => import('views/MailBox/Compose'))
      },
      {
        path: '/viewServiceUser',
        exact: true,
        component: lazy(() => import('views/AllServiceUser/View-serviceUser'))
      },

      
      /************************************************************** */
      {
        path: '/changelog',
        exact: true,
        component: lazy(() => import('views/Changelog'))
      },
      {
        path: '/chat',
        exact: true,
        component: lazy(() => import('views/Chat'))
      },
      {
        path: '/chat/:id',
        exact: true,
        component: lazy(() => import('views/Chat'))
      },
      {
        path: '/dashboards/analytics',
        exact: true,
        component: DashboardAnalyticsView
      },
      {
        path: '/dashboards/default',
        exact: true,
        component: DashboardDefaultView
      },
      {
        path: '/invoices/:id',
        exact: true,
        component: lazy(() => import('views/InvoiceDetails'))
      },
      {
        path: '/kanban-board',
        exact: true,
        component: lazy(() => import('views/KanbanBoard'))
      },
      {
        path: '/mail',
        exact: true,
        component: lazy(() => import('views/Mail'))
      },
      {
        path: '/management/customers',
        exact: true,
        component: lazy(() => import('views/CustomerManagementList'))
      },
      {
        path: '/management/customers/:id',
        exact: true,
        component: lazy(() => import('views/CustomerManagementDetails'))
      },
      {
        path: '/management/customers/:id/:tab',
        exact: true,
        component: lazy(() => import('views/CustomerManagementDetails'))
      },
      {
        path: '/management/projects',
        exact: true,
        component: lazy(() => import('views/ProjectManagementList'))
      },
      {
        path: '/management/orders',
        exact: true,
        component: lazy(() => import('views/OrderManagementList'))
      },
      {
        path: '/management/orders/:id',
        exact: true,
        component: lazy(() => import('views/OrderManagementDetails'))
      },
      {
        path: '/overview',
        exact: true,
        component: OverviewView
      },
      {
        path: '/presentation',
        exact: true,
        component: PresentationView
      },
      {
        path: '/profile/:id',
        exact: true,
        component: lazy(() => import('views/Profile'))
      },
      {
        path: '/profile/:id/:tab',
        exact: true,
        component: lazy(() => import('views/Profile'))
      },
      {
        path: '/projects/create',
        exact: true,
        component: lazy(() => import('views/ProjectCreate'))
      },
      {
        path: '/projects/:id',
        exact: true,
        component: lazy(() => import('views/ProjectDetails'))
      },
      {
        path: '/projects/:id/:tab',
        exact: true,
        component: lazy(() => import('views/ProjectDetails'))
      },
      {
        path: '/projects',
        exact: true,
        component: lazy(() => import('views/ProjectList'))
      },
      {
        path: '/settings',
        exact: true,
        component: lazy(() => import('views/Settings'))
      },
      {
        path: '/settings/:tab',
        exact: true,
        component: lazy(() => import('views/Settings'))
      },
      {
        path: '/social-feed',
        exact: true,
        component: lazy(() => import('views/SocialFeed'))
      },
      {
        path: '/getting-started',
        exact: true,
        component: lazy(() => import('views/GettingStarted'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      },
     


    ]
  }
];

export default routes;
