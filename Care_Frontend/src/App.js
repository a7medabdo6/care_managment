import React,{useState} from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MomentUtils from '@date-io/moment';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { renderRoutes } from 'react-router-config';
import 'bootstrap/dist/css/bootstrap.min.css';

import theme from './theme';
import { configureStore } from './store';
import routes from './routes';

import RoutesProdect from "./RoutesProtect"
import {
  ScrollReset,
  GoogleAnalytics,
  CookiesNotification
} from './components';
import './mixins/chartjs';
import './mixins/moment';
import './mixins/validate';
import './mixins/prismjs';
import './mock';
import './assets/scss/index.css';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import WorkerRoutes from 'WorkerRoutes';
const queryClient = new QueryClient()

const history = createBrowserHistory();

const App = () => {
  const [checkRoutes, setcheckRoutes] = useState(false)
  // if(localStorage.getItem("user")){
  //   setcheckRoutes(true)
  // }

  return (
    <QueryClientProvider client={queryClient} >
          <Router history={history}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
      
            {/* <ScrollReset /> */}
            {/* <GoogleAnalytics /> */}
            {/* <CookiesNotification /> */}
            {/* {localStorage.getItem("user") ? renderRoutes(RoutesProdect):renderRoutes(routes)} */}

            {localStorage.getItem("user") ?(JSON.parse(localStorage.getItem("user")).role !== 1 ?renderRoutes(WorkerRoutes): renderRoutes(RoutesProdect)) :renderRoutes(routes)}
          
        </MuiPickersUtilsProvider>
      </ThemeProvider>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
