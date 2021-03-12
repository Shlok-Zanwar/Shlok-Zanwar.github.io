import './BSTApp.css';
import BST from './Components/BST';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import Helmet from 'react-helmet';


function BSTApp() {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    
    useEffect(() => {
        enqueueSnackbar("This page is recommended to be used on desktop screen.", {
            variant: 'warning',
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
