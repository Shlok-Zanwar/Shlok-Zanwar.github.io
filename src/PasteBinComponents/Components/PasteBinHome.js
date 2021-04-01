import React, { useEffect, useRef, useState } from 'react'

function PasteBinHome() {
    const [url, setUrl] = useState('');
    const inputRef = useRef(null);

    const generateNewURL = () => {
        let r = Math.random().toString(36).substring(4);
        window.location.pathname += "/" + r;
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
                window.location.pathname += "/" + path[0];
            }
        }
        else{
            if(path[0] === "pastebin"){
                if(path[1] !== ""){
                    window.location.pathname += "/" + path[1];
                }
            }
        }
        // console.log(path);

    }

    useEffect(() => {
        if(window.innerWidth >= 1350){
            inputRef.current.focus()
        }
    })

    return (
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
            {/* <br /> */}
            <div className="redirect-button" style={{maxWidth:"230px"}} onClick={() => generateNewURL()} >Generate random URL</div>
            
        </div>
    )
}

export default PasteBinHome
