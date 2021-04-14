import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import firebase from './firebase';
import { useSnackbar } from 'notistack';
import { FaShare } from "react-icons/fa";


function PasteBinApp() {
    const [result, setResult] = useState('');
    const [data, setData] = useState('Write and Share');
    const [savePath, setSavePath] = useState("")
    const [saved, setSaved] = useState(true);


    const copyToClipboard = (command) =>{
        var toCopy = command;

        var temp = document.createElement("textarea");
        var tempMsg = document.createTextNode(toCopy);
        temp.appendChild(tempMsg);

        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);

        var message = "Link copied to clipboard.";
        enqueueSnackbar(message, {
            variant: 'success',
        })
    }

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    document.title = "Paste Bin | Shlok Zanwar"

    const dontShowSnackbar = (key) =>{
        localStorage.setItem("dontShowPastebinSnack", true);
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


    const saveRecent = (path) => {
        var recentPasteBins = localStorage.getItem('recentPasteBins') ? JSON.parse(localStorage.getItem('recentPasteBins')) : [];
        recentPasteBins = [...recentPasteBins].filter(pasteBin => pasteBin !== path);
        recentPasteBins = [path, ...recentPasteBins];
        if(recentPasteBins.length > 6){
            recentPasteBins.pop();
        }
        localStorage.setItem('recentPasteBins', JSON.stringify(recentPasteBins));
    }


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

        if(path.length > 2){
            window.location.pathname = "/" + path[0] + "/" + path[1];
        }

        if(path[0].toLowerCase() === "pastebin"){
            setSavePath(path[1].toLowerCase());
            firebase.getData(path[1].toLowerCase()).then(setResult, saveRecent(path[1]));
        }

    }, [])


    useEffect(() => {
        if(!localStorage.getItem("dontShowPastebinSnack")){
            enqueueSnackbar("Paste bin is publically visible.\nPlease do not share private information.", {
                variant: 'info',
                autoHideDuration: 5000,
                action,
            });
        }
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


    return (
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
            <textarea 
                className="pastebin-text" 
                spellCheck="false" 
                value={data} 
                onChange={e => {setData(e.target.value); setSaved(false)}}
            >
            </textarea>
            <div className="pastebin-controls"> 
                    <button className="save-share-pastebin" onClick={() => saveData()}>
                        &nbsp;&nbsp; Save &nbsp;&nbsp; 
                    </button>
                    <button className="save-share-pastebin" onClick={() => {copyToClipboard(window.location.href)}}>
                        <FaShare /> 
                    </button>
            </div>
            
        </div>
    )
}

export default PasteBinApp
