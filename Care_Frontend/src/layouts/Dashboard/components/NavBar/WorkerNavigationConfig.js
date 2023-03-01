/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import { colors } from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import MailIcon from '@material-ui/icons/MailOutlined';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import DetailsOutlinedIcon from '@material-ui/icons/DetailsOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import CropLandscapeIcon from '@material-ui/icons/CropLandscape';
import AllInclusiveOutlinedIcon from '@material-ui/icons/AllInclusiveOutlined';import { Label } from 'components';
 const userdata =JSON.parse(localStorage.getItem("user")) 
 
export default [
  {
    title: 'Pages',
    pages: [
      // {
      //   title: 'Dashboards',
      //   href: '/dashboards',
      //   icon: DashboardIcon,
      //   children: [
      //     {
      //       title: 'Default',
      //       href: '/dashboards/default'
      //     },
      //     // {
      //     //   title: 'Analytics',
      //     //   href: '/dashboards/analytics'
      //     // }
      //   ]
      // },
      // {
      //   title: 'Overview',
      //   href: '/overview',
      //   icon: HomeIcon
      // },
             /**************************************** */
            //  {
            //   title: 'Risk Assessments',
            //   href: '/Assessments',
            //   icon: ReportProblemOutlinedIcon,
             
            // },

            // {
            //   title: 'Social interests',
            //   href: '/socialinterests',
            //   icon: AllInclusiveOutlinedIcon,
             
            // },

            // {
            //   title: 'Oral Care',
            //   href: '/oralcare',
            //   icon: ReportProblemOutlinedIcon,
             
            // },

            // {
            //   title: 'House Keeping',
            //   href: '/housekeeping',
            //   icon: ReportProblemOutlinedIcon,
             
            // },
            // {
            //   title: 'Personal Care',
            //   href: '/PersonalCare',
            //   icon: ReportProblemOutlinedIcon,
             
            // },
            
            // {
            //   title: 'Daily Notes',
            //   href: '/DailyNotes',
            //   icon: EventNoteOutlinedIcon,
             
            // },

            {
              title: 'Care Plan',
              href: '/worker/careplans',
              icon: CropLandscapeIcon,
             
            },
      
            {
              title: 'Rota',
              href: '/Rota',
              icon: CropLandscapeIcon,
             
            },
            // {
            //   title: 'DashBoard',
            //   href: '/Profile/user',
            //   icon: PeopleIcon
            // },

            // {
            //   title: 'Daily Tasks',
            //   href: '/service/user',
            //   icon: FormatListBulletedOutlinedIcon
            // },
           
           
      
            

            // {
            //   title: 'SetUp',
            //   href: '/dashboards',
            //   icon: DashboardIcon,
            //   children: [
            //     {
            //       title: 'Care Plan',
            //       href: '/dashboards/default',
            //       icon: DetailsOutlinedIcon,
            //       children :[
            //         {
            //           title: 'Current Care Plan',
            //           href: '/management/customers',
                      
            //         }
            //       ]
            //     },
            //     // {
            //     //   title: 'Analytics',
            //     //   href: '/dashboards/analytics'
            //     // }
            //   ]
            // },
      
            /***************************************************** */
       /**************************************** */
    

      // {
      //   title: 'Profile',
      //   href: '/Profile/user',
      //   icon: ContactMailOutlinedIcon
      // },
      /***************************************************** */
     
// {
//         title: 'House keeping',
//         href: '/overview',
//         icon: HomeIcon
//       },
    
      // {
      //   title: 'Management',
      //   href: '/management',
      //   icon: BarChartIcon,
      //   children: [
         
      //     userdata?.role == 1 && {
      //       title: 'All Workers',
      //       href: '/workers',
      //       icon: FormatListBulletedOutlinedIcon
      //     },

      //     userdata?.role == 1 && {
      //       title: 'All ServiceUser',
      //       href: '/AllServiceUser',
      //       icon: FormatListBulletedOutlinedIcon
      //     },
      //     // {
      //     //   title: 'Customer Details',
      //     //   href: '/management/customers/1/summary'
      //     // },
      //     // {
      //     //   title: 'Projects',
      //     //   href: '/management/projects'
      //     // },
      //     // {
      //     //   title: 'Orders',
      //     //   href: '/management/orders'
      //     // },
      //     // {
      //     //   title: 'Order Details',
      //     //   href: '/management/orders/1'
      //     // }
      //   ]
      // },


      
     
      // {
      //   title: 'Social Feed',
      //   href: '/social-feed',
      //   icon: PeopleIcon
      // },
     
      // {
      //   title: 'Profile',
      //   href: '/profile',
      //   icon: PersonIcon,
      //   children: [
      //     {
      //       title: 'Timeline',
      //       href: '/profile/1/timeline'
      //     },
      //     {
      //       title: 'Connections',
      //       href: '/profile/1/connections'
      //     },
      //     {
      //       title: 'Projects',
      //       href: '/profile/1/projects'
      //     },
      //     {
      //       title: 'Reviews',
      //       href: '/profile/1/reviews'
      //     },
       
      //   ]
      // },
      // {
      //   title: 'Project',
      //   href: '/projects',
      //   icon: FolderIcon,
      //   children: [
      //     {
      //       title: 'Browse',
      //       href: '/projects'
      //     },
      //     {
      //       title: 'Create',
      //       href: '/projects/create'
      //     },
      //     {
      //       title: 'Overview',
      //       href: '/projects/1/overview'
      //     },
      //     {
      //       title: 'Files',
      //       href: '/projects/1/files'
      //     },
      //     {
      //       title: 'Activity',
      //       href: '/projects/1/activity'
      //     },
      //     {
      //       title: 'Subscribers',
      //       href: '/projects/1/subscribers'
      //     }
      //   ]
      // },
      // {
      //   title: 'Invoice',
      //   href: '/invoices/1',
      //   icon: ReceiptIcon
      // },
      // {
      //   title: 'Kanban Board',
      //   href: '/kanban-board',
      //   icon: ListAltIcon
      // },
      // {
      //   title: 'Mail',
      //   href: '/mail',
      //   icon: MailIcon,
      //   label: () => (
      //     <Label
      //       color={colors.red[500]}
      //       shape="rounded"
      //     >
      //       2
      //     </Label>
      //   )
      // },
      // {
      //   title: 'Chat',
      //   href: '/chat',
      //   icon: ChatIcon,
      //   label: () => (
      //     <Label
      //       color={colors.red[500]}
      //       shape="rounded"
      //     >
      //       4
      //     </Label>
      //   )
      // },
      // {
      //   title: 'Calendar',
      //   href: '/calendar',
      //   icon: CalendarTodayIcon,
      //   label: () => <Label color={colors.green[500]}>New</Label>
      // },
      // {
      //   title: 'Settings',
      //   href: '/settings',
      //   icon: SettingsIcon,
      //   children: [
      //     {
      //       title: 'General',
      //       href: '/settings/general'
      //     },
      //     {
      //       title: 'Subscription',
      //       href: '/settings/subscription'
      //     },
      //     {
      //       title: 'Notifications',
      //       href: '/settings/notifications'
      //     },
      //     {
      //       title: 'Security',
      //       href: '/settings/security'
      //     }
      //   ]
      // },
      // {
      //   title: 'Authentication',
      //   href: '/auth',
      //   icon: LockOpenIcon,
      //   children: [
      //     {
      //       title: 'Login',
      //       href: '/auth/login'
      //     },
      //     {
      //       title: 'Register',
      //       href: '/auth/register'
      //     }
      //   ]
      // },
      // {
      //   title: 'Errors',
      //   href: '/errors',
      //   icon: ErrorIcon,
      //   children: [
      //     {
      //       title: 'Error 401',
      //       href: '/errors/error-401'
      //     },
      //     {
      //       title: 'Error 404',
      //       href: '/errors/error-404'
      //     },
      //     {
      //       title: 'Error 500',
      //       href: '/errors/error-500'
      //     }
      //   ]
      // }
    ]
  },
  // {
  //   title: 'Support',
  //   pages: [
  //     {
  //       title: 'Presentation',
  //       href: '/presentation',
  //       icon: PresentToAllIcon
  //     },
  //     {
  //       title: 'Getting started',
  //       href: '/getting-started',
  //       icon: CodeIcon
  //     },
  //     {
  //       title: 'Changelog',
  //       href: '/changelog',
  //       icon: ViewModuleIcon,
  //       label: () => <Label color={colors.blue['500']}>v1.2.0</Label>
  //     }
  //   ]
  // }
];
