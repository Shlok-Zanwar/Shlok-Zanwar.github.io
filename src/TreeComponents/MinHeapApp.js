import './TreeCss.css';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import MinHeap from './Components/MinHeap';


function MinHeapApp() {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    document.title = "Min Heap Visualization | Shlok Zanwar"

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
            <MinHeap />
        </div>
    );
}

export default MinHeapApp;