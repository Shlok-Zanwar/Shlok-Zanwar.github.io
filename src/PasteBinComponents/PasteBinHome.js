import React, { useEffect, useRef, useState } from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { Tooltip } from 'antd'
import { Helmet } from 'react-helmet';
import { useHistory } from "react-router-dom";

function PasteBinHome() {
    const [url, setUrl] = useState('');
    const [recentBins, setRecentBins] =  useState(localStorage.getItem('recentPasteBins') ? JSON.parse(localStorage.getItem('recentPasteBins')) : []);
    const inputRef = useRef(null);
    let history = useHistory();
    document.title = "Paste Bin | Shlok Zanwar"

    const generateNewURL = () => {
        let r = Math.random().toString(36).substring(4);
        history.push("/pastebin/" + r);
    }

    const handleSubmit = e => {
        e.preventDefault();
        var path = url;
        if(url[0] === "/"){
            path = path.substring(1, path.length);
        }
        path = path.split("/");
        if(path.length === 1){
            if(path[0] !== ""){
                history.push("/pastebin/" + path[0]);
            }
        }
        else{
            if(path[0] === "pastebin"){
                if(path[1] !== ""){
                    history.push("/pastebin/" + path[1]);
                }
            }
        }
        // console.log(path);

    }

    
    const removeRecent = (pasteBin) => {
        const removeArr = [...recentBins].filter(bin => bin !== pasteBin);
        setRecentBins(removeArr);
        localStorage.setItem('recentPasteBins', JSON.stringify(removeArr))
    }

    
    const gotoRecent = (pasteBin) => {
        history.push("/pastebin/" + pasteBin);
    }


    const loadRecentPasteBins = recentBins.map(index => {
            return (
                <div style={{display:"inline-table"}} >
                    <div className="recent-pastebin">
                        <div style={{cursor:"pointer"}} onClick={() => gotoRecent(index)}>
                            {"/" + index}
                        </div>
                        <div className="icons">
                            <Tooltip title='Delete' placement='bottom' arrow>
                                <span>
                                    <RiDeleteBin5Line 
                                        onClick={() => removeRecent(index)}
                                    />
                                </span>
                            </Tooltip>

                        </div>
                    </div>
                </div>
            )
    })
    

    useEffect(() => {
        if(window.innerWidth >= 1350){
            inputRef.current.focus()
        }
    })

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
            <div className="main-blog-di">
                <div className="blog-title">Paste Bin</div>
                <div className="blog-para" style={{textAlign:"center"}}>A pastebin for sharing data without any authentication.</div>
                <div className="blog-para" style={{textAlign:"center"}}>Go to some URl like "/pastebin/any"</div>
                <div className="blog-para" style={{textAlign:"center"}}>Write anything</div>
                <div className="blog-para" style={{textAlign:"center"}}>Save</div>
                <div className="blog-para" style={{textAlign:"center"}}>Share the URL with anyone</div>
                <br />
                <form className="todo-form" onSubmit={handleSubmit} style={{marginBottom:"6px"}}>
                    <div className="edit-form" >
                            <input 
                                type="text" 
                                placeholder="Type any url" 
                                value={url}
                                className="todo-input"
                                onChange={e => setUrl(e.target.value)}
                                ref={inputRef}
                                style={{maxWidth:"275px"}}
                            />
                            <button className="todo-button edit">Go</button>
                    </div>
                </form>
                <div className="blog-para" style={{textAlign:"center"}} >OR</div> 
                <div className="redirect-button" style={{maxWidth:"230px"}} onClick={() => generateNewURL()} >Generate random URL</div>
                {recentBins.length > 0 ?
                    <>
                        <br />
                        <div className="blog-para" style={{textAlign:"center"}}>Recent Paste Bins</div>
                        <div className="recent-pastebin-outer" style={{maxWidth:"500px"}}>
                            {loadRecentPasteBins}
                        </div>
                    </>
                    : null
                }
                
            </div>
        </div>
    )
}

export default PasteBinHome
