import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import firebase from '../firebase';
import { useSnackbar } from 'notistack';
import { FaShare } from "react-icons/fa";
import CanvasDraw from 'react-canvas-draw';
import { SliderPicker } from 'react-color';
import { Tooltip } from 'antd';
import { useParams } from 'react-router-dom';

export default function DrawbinApp() {
    document.title = "Drawbin | Shlok Zanwar";
    const canvas = useRef();

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const dontShowSnackbar = (key) =>{
        localStorage.setItem("dontShowCanvasSnack", true);
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
        if(!localStorage.getItem("dontShowCanvasSnack")){
            enqueueSnackbar("This page is recommended to be used on desktop screen.", {
                variant: 'warning',
                autoHideDuration: 5000,
                action,
            });
        }
    }, [])

    const savePath = useParams().id;
    const [brushSize, setBrushSize] = useState(3);
    const [result, setResult] = useState('');
    const [color, setColor] = useState({hex: "#52BF23"});
    const [canvasData, setCanvasData] = useState(null);

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

    const handleColorChange = color => setColor(color);

    const handleBrushSize = e => {
        if(e.target.value > 10){
            setBrushSize(10);
        }
        else{
            setBrushSize(e.target.value);
        }
    }

    const saveRecent = (path) => {
        var recentCanvas = localStorage.getItem('recentCanvas') ? JSON.parse(localStorage.getItem('recentCanvas')) : [];
        recentCanvas = [...recentCanvas].filter(canvas => canvas !== path);
        recentCanvas = [path, ...recentCanvas];
        if(recentCanvas.length > 6){
            recentCanvas.pop();
        }
        localStorage.setItem('recentCanvas', JSON.stringify(recentCanvas));
    }


    useEffect(() => {
        firebase.getCanvasData(savePath.toLowerCase()).then(setResult, saveRecent(savePath));
    }, [savePath])

    useEffect(() => {
        if(result === undefined){
            firebase.addCanvasData(savePath, {"lines":[],"width":"100%","height":"100%"});
            setCanvasData({"lines":[],"width":"100%","height":"100%"});
        }
        else{
          setCanvasData(result);
        //   console.log(result);
        }
    }, [result])


    const saveCanvas = e => {
        firebase.addCanvasData(savePath, canvas.current.getSaveData());
        console.log("Saving");
        enqueueSnackbar("Details saved successfully", {
            variant: 'success',
        });
    }
    

    return (
        <div>
            <div className="canvas-controls">
                <input 
                    id="input_box"
                    type="number" 
                    placeholder="Size" 
                    value={brushSize}
                    className="canvas-brush-size"
                    onChange={handleBrushSize}
                />

                <div style={{width:"210px", paddingRight:"10px"}}>
                    <SliderPicker color={color} onChangeComplete={handleColorChange} />
                </div>
                <button 
                    className="save-share-pastebin" 
                    onClick={() => {canvas.current.undo()}}
                >
                    &nbsp;&nbsp; Undo &nbsp;&nbsp; 
                </button>

                <button 
                    className="save-share-pastebin" 
                    onClick={() => {canvas.current.clear()}}
                >
                    &nbsp;&nbsp; Clear &nbsp;&nbsp; 
                </button>

                <button 
                    className="save-share-pastebin" 
                    onClick={saveCanvas}
                >
                    &nbsp;&nbsp; Save &nbsp;&nbsp; 
                </button>
                <Tooltip title='Share' placement='bottom' arrow>
                    <button className="save-share-pastebin" onClick={() => {copyToClipboard(window.location.href)}} >
                        <FaShare />
                    </button>
                </Tooltip>
            </div >
            <div className="canvas-div">
            {canvasData ? 
                <CanvasDraw
                    ref={canvas}
                    hideGrid
                    immediateLoading={true}
                    saveData={canvasData}
                    backgroundColor={"transparent"}
                    brushColor={color.hex}
                    brushRadius={brushSize}
                    lazyRadius={0}
                    canvasWidth={"1500px"}
                    canvasHeight={"790px"}
                /> : <div style={{color: "rgb(82, 192, 31)"}}>Loading ...</div> 
            }
            </div>
            
        </div>
    )
}

