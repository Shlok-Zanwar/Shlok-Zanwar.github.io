import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { SnackbarProvider } from "notistack";
import { BrowserRouter, HashRouter } from "react-router-dom";
import axios from "axios";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import ReactGA from "react-ga4";

ReactGA.initialize(process.env.REACT_APP_GA_4_ID);
// console.log("GA4_ID", process.env.REACT_APP_GA_4_ID);

// axios.defaults.baseURL = 'http://localhost:8000';
// axios.defaults.baseURL = 'https://shlok-m-server.herokuapp.com';
axios.defaults.baseURL = "https://3os28y.deta.dev";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
            <SnackbarProvider
                maxSnack={2}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                autoHideDuration={3000}
            >
                <App />
            </SnackbarProvider>
        </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
