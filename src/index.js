import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import ReactGA from "react-ga4";

// axios.defaults.baseURL = 'http://localhost:8000';
// axios.defaults.baseURL = 'https://shlok-m-server.herokuapp.com';
axios.defaults.baseURL = 'https://3os28y.deta.dev';

ReactGA.initialize("G-CNF32VVWZE");



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackbarProvider
        maxSnack={2}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        autoHideDuration={3000}
      >
        <App />
      </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();