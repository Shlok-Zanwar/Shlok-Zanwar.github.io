import './TreeCss.css';
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import MinHeap from './Components/MinHeap';


function MinHeapApp() {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    document.title = "Min Heap Visualization | Shlok Zanwar"

    const dontShowSnackbar = (key) =>{
        localStorage.setItem("dontShowTreeSnack", true);
        closeSnackbar(key);
    }

    const action = key => (
        <React.Fragment>
            <>
            <div onClick={() => { dontShowSnackbar(key) }} style={{background:"transparent", border:"none", cursor:"pointer", color:"#fc28b2", paddingRight:"8px", textDecoration:"underline", fontWeight:"bolder" }}>
                Dont show again
            </div>
            <div onClick={() => { closeSnackbar(key) }} style={{background:"transparent", border:"none", cursor:"pointer", color:"#fc28b2", textDecoration:"underline", fontWeight:"bolder" }}>
                Dismiss
            </div>
            </>
        </React.Fragment>
    );
    
    useEffect(() => {
        if(!localStorage.getItem("dontShowTreeSnack")){
            enqueueSnackbar("This page is recommended to be used on desktop screen.", {
                variant: 'warning',
                autoHideDuration: 5000,
                action,
            });
        }
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