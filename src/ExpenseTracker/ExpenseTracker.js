import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom';

export default function ExpenseTracker() {
    const [url, setUrl] = useState('');
    const inputRef = useRef(null);
    let navigate = useNavigate();
    document.title = "Expense tracker | Shlok Zanwar";

    useEffect(() => {
        if(localStorage.getItem('lastUsedExpenseTracker')){
            navigate("/expense-tracker/" + localStorage.getItem('lastUsedExpenseTracker'));
        }
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        var path = url;
        if(url[0] === "/"){
            path = path.substring(1, path.length);
        }
        path = path.split("/");
        if(path.length === 1){
            if(path[0] !== ""){
                navigate("/expense-tracker/" + path[0]);
            }
        }
        else{
            if(path[0] === "expense-tracker"){
                if(path[1] !== ""){
                    navigate("/expense-tracker/" + path[1]);
                }
            }
        }

    }

    return  ( 
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
                <div className="blog-title">Expense Tracker</div>
                <div className="blog-para" style={{textAlign:"center", marginTop: 10}}>An Application for tracking, categorizing and anlyzing your day-to-day expenses. </div>
                <div className="blog-para" style={{textAlign:"center", marginTop: 10}}>Go to some URl like "/expense-tracker/any" and Create your Expenses.</div>
                <div className="blog-para" style={{textAlign:"center", marginTop: 10}}>Password Protect the route if you want to !</div>
                <div className="blog-para" style={{textAlign:"center", marginTop: 10}}>Login from any other device with the same url and password ! All your expenses would be synced. </div>
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
                {/* <div className="redirect-button" style={{maxWidth:"230px"}} onClick={() => generateNewURL()} >Generate random URL</div> */}
                
                
            </div>
        </div>
    )
}
