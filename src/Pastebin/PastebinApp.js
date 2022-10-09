import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import firebase from '../firebase';
import { useSnackbar } from 'notistack';
import { FaShare } from "react-icons/fa";
import { Tooltip } from 'antd';
import { useParams } from 'react-router-dom';


function PasteBinApp() {
    document.title = "Pastebin | Shlok Zanwar"
    const savePath = useParams().id;

    const [result, setResult] = useState('');
    const [data, setData] = useState('Write and Share');
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
        firebase.getPasteBinData(savePath.toLowerCase()).then(setResult, saveRecent(savePath));
    }, [savePath])


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
            firebase.addPasteBinData(savePath, "Write and Share");
            setData("Write and Share");
        }
        else{
          setData(result);
        }
    }, [result])


    const saveData = () => {
        if(!saved){
            firebase.addPasteBinData(savePath, data);
            setSaved(true);
            console.log("Saving");
        }
        enqueueSnackbar("Details saved successfully", {
            variant: 'success',
        });
    }


    return (
        <div style={{display:"flex", position:"relative"}}>
            <textarea 
                className="pastebin-text-area" 
                spellCheck="false" 
                value={data} 
                onChange={e => {setData(e.target.value); setSaved(false)}}
            >
            </textarea>
            <div className="pastebin-controls"> 
                    <button className="save-share-pastebin" onClick={() => saveData()}>
                        &nbsp;&nbsp; Save &nbsp;&nbsp; 
                    </button>
                    <Tooltip title='Share' placement='top'>
                        <button className="save-share-pastebin" onClick={() => {copyToClipboard(window.location.href)}}>
                            <FaShare />
                        </button>
                    </Tooltip>
            </div>
            
        </div>
    )
}

export default PasteBinApp
