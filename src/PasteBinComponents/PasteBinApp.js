import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import firebase from './firebase';
import { useSnackbar } from 'notistack';
import PasteBinHome from './Components/PasteBinHome';


function PasteBinApp() {
    const [showApp, setShowApp] = useState(false);
    const [result, setResult] = useState('');
    const [data, setData] = useState('Write and Share');
    const [savePath, setSavePath] = useState("")
    const [saved, setSaved] = useState(true);


    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    document.title = "Paste Bin | Shlok Zanwar"

    const action = key => (
        <React.Fragment>
            <div onClick={() => { closeSnackbar(key) }} style={{background:"transparent", border:"none", cursor:"pointer", color:"red" }}>
                Dismiss
            </div>
        </React.Fragment>
    );


    useEffect(() => {
        // console.log(window.location.pathname);
        var path = window.location.pathname;
        // console.log(path[path.length - 1]);

        if(path[path.length - 1] === "/"){
            path = path.substring(0, path.length - 1);
            window.location.pathname = path;
        }
        path = path.substring(1, path.length);
        // console.log(path)
        path = path.split("/");
        // console.log(path)

        if(path.length === 1){
            setShowApp(true)
        }
        else{
            setShowApp(false);
            if(path.length > 2){
                window.location.pathname = "/" + path[0] + "/" + path[1];
            }
    
            if(path[0].toLowerCase() === "pastebin"){
                setSavePath(path[1].toLowerCase());
                firebase.getData(path[1].toLowerCase()).then(setResult);
            }
        }

    }, [])


    useEffect(() => {
        enqueueSnackbar("Paste bin is publically visible.\nPlease do not share private information.", {
            variant: 'info',
            autoHideDuration: 5000,
            action,
        });
    }, [])


    useEffect(() => {
        if(result === undefined){
            firebase.addData(savePath, "Write and Share");
            setData("Write and Share");
        }
        else{
          setData(result);
        }
    }, [result])


    const saveData = () => {
        if(!saved){
            firebase.addData(savePath, data);
            setSaved(true);
            console.log("Saving");
        }
        enqueueSnackbar("Details saved successfully", {
            variant: 'success',
        });
    }


    return showApp ?  
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
            <PasteBinHome />
        </div>
    : (
        <div style={{display:"flex", position:"relative"}}>
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
            <textarea className="pastebin-text" spellCheck="false" value={data} onChange={e => {setData(e.target.value); setSaved(false)}} >
            </textarea>
            <div className="save-pastebin" onClick={() => saveData()}> &nbsp;&nbsp; Save &nbsp;&nbsp; </div>
            
        </div>
    )
}

export default PasteBinApp
