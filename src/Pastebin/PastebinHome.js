import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { RiDeleteBin5Line } from 'react-icons/ri'
import { Tooltip } from 'antd'

export default function PastebinHome() {
    const [url, setUrl] = useState('');
    const [recentBins, setRecentBins] =  useState(localStorage.getItem('recentPasteBins') ? JSON.parse(localStorage.getItem('recentPasteBins')) : []);
    let navigate = useNavigate();

    document.title = "Pastebin | Shlok Zanwar"



    const paraInfo = [
        { text: "A pastebin for sharing data without any authentication." },
        { text: "Go to some URl like 'apps/pastebin/`any`'" },
        { text: "Write anything, Save" },
        { text: "Share the URL with anyone, they can view the data." },
    ]

    const removeRecent = (pasteBin) => {
        const removeArr = [...recentBins].filter(bin => bin !== pasteBin);
        setRecentBins(removeArr);
        localStorage.setItem('recentPasteBins', JSON.stringify(removeArr))
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
                navigate(path[0]);
            }
        }
        else{
            if(path[0] === "pastebin"){
                if(path[1] !== ""){
                    navigate(path[1]);
                }
            }
        }
    }    

    const generateNewURL = () => {
        let r = Math.random().toString(36).substring(4);
        navigate(r);
    }

    const m = 50;

    return (
        <div className="my-info-outer-div" data-aos="fade-up">
            <div className="my-info-heading">Paste Bin</div>
            <div className="my-info-text-outer">
                {
                    paraInfo.map((para, index) => {
                        return (
                            <div className="my-info-text-para" data-aos="fade-up" data-aos-delay={index * m}>
                                {para.text}
                            </div>
                        );
                    })
                }
            </div>

            <form onSubmit={handleSubmit} style={{ marginTop: "16px", display: "inline-flex" }} data-aos="fade-up" data-aos-delay={4*m}>
                <input 
                    type="text" 
                    placeholder="Type any url" 
                    value={url}
                    className="todo-input"
                    onChange={e => setUrl(e.target.value)}
                    autoFocus={window.innerWidth >= 1350}
                    style={{ width: "70%", minWidth: "200px", maxWidth: "375px" }}
                />
                <button className="todo-button edit">Go</button>
            </form>

            <div className="my-info-text-para" style={{textAlign:"center"}} data-aos="fade-up" data-aos-delay={5*m}>
                OR
            </div> 
            <div className="redirect-button" style={{maxWidth:"230px"}} onClick={() => generateNewURL()} data-aos="fade-up" data-aos-delay={6*m}>
                Generate random URL
            </div>

            <div className="my-info-text-para" style={{textAlign:"center"}} data-aos="fade-up" data-aos-delay={7*m}>
                Recent Pastebins
            </div>
            <div className="recent-pastebin-outer" style={{maxWidth:"500px"}} data-aos="fade-up" data-aos-delay={8*m}>
                {recentBins.map(index => {
                    return (
                        <Link className='recent-pastebin' to={index}>
                            <div style={{cursor:"pointer"}} onClick={() =>(index)}>
                                {"/" + index}
                            </div>
                            <div >
                                <Tooltip title='Delete' placement='bottom' arrow>
                                    <span>
                                        <RiDeleteBin5Line 
                                            onClick={() => removeRecent(index)}
                                        />
                                    </span>
                                </Tooltip>

                            </div>
                        </Link>
                    )
                })}
            </div>
        
        </div>
    )
}
