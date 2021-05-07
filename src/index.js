import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SnackbarProvider } from 'notistack';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.baseURL = 'https://shlok-m-server.herokuapp.com/';


ReactDOM.render(
  <React.StrictMode>
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
  </React.StrictMode>,
  document.getElementById('root')
);

