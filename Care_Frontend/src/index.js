import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css'; 
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './store.js';
import { Provider } from 'react-redux';
import 'react-notifications/lib/notifications.css';
import "./index.css"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister(); 