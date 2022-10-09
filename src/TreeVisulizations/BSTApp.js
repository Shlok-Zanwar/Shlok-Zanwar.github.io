import './TreeCss.css';
import BST from './Components/BST';
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import Helmet from 'react-helmet';


function BSTApp() {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    document.title = "BST Visualization | Shlok Zanwar"

    const dontShowSnackbar = (key) =>{
        localStorage.setItem("dontShowTreeSnack", true);
        closeSnackbar(key);
    }

    const action = (key) => (
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

    const isMobile = window.matchMedia("only screen and (max-width: 1920px)").matches;
    useEffect(() => {
        // This is for the viewport
        // If its a mobile device, then set the viewport to 800px
        if(isMobile){ 
            document.getElementsByTagName('meta')['viewport'].content='width=1080;';
        }
        else{
            document.getElementsByTagName('meta')['viewport'].content='width=device-width, initial-scale=1';
        }
    }, []);

    
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
        <div >
            <BST />
        </div>
    );
}

export default BSTApp;
