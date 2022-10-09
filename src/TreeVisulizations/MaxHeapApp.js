import './TreeCss.css';
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import MaxHeap from './Components/MaxHeap';


function MaxHeapApp() {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    document.title = "Max Heap Visualization | Shlok Zanwar"

    const isMobile = window.matchMedia("only screen and (max-width: 1920px)").matches;
    useEffect(() => {
        // This is for the viewport
        // If its a mobile device, then set the viewport to 800px
        const currentMeta = document.getElementsByTagName('meta')['viewport'].content;

        if(isMobile){ 
            document.getElementsByTagName('meta')['viewport'].content='width=1920;';
        }
        else{
            document.getElementsByTagName('meta')['viewport'].content='width=device-width, initial-scale=1';
        }

        return () => {
            document.getElementsByTagName('meta')['viewport'].content = currentMeta;
        }
    }, []);


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
        <MaxHeap />
    );
}

export default MaxHeapApp;