import './BSTApp.css';
import BST from './Components/BST';
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import Helmet from 'react-helmet';


function BSTApp() {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    document.title = "BST Visualization | Shlok Zanwar"

    const action = key => (
        <React.Fragment>
            <div onClick={() => { closeSnackbar(key) }} style={{background:"transparent", border:"none", cursor:"pointer", color:"red" }}>
                Dismiss
            </div>
        </React.Fragment>
    );
    
    useEffect(() => {
        enqueueSnackbar("This page is recommended to be used on desktop screen.", {
            variant: 'warning',
            autoHideDuration: 5000,
            action,
        });
    }, [])

    return (
        <div>
        <Helmet>
            <style>
            {`            
                body {
                text-align: center;
                background-color: #161a2b;
                background-image: none;
            }
            `}
            </style>
        </Helmet>
        <BST />
        </div>
    );
}

export default BSTApp;
