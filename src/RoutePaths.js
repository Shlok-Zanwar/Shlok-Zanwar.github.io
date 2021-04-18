import React, { useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import BlogTemplate from './BlogTemplates/BlogTemplate';
import Home from './HomeComponents/Home';
import MyNavbar from "./MyNavbar";
import PasteBinHome from './PasteBinComponents/PasteBinHome';
import PasteBinApp from './PasteBinComponents/PasteBinApp';
import TodoApp from "./TodoAppComponents/TodoApp"
import BSTApp from './TreeComponents/BSTApp';
import MaxHeapApp from './TreeComponents/MaxHeapApp';
import MinHeapApp from './TreeComponents/MinHeapApp';
import CanvasHome from './CanvasComponents/CanvasHome';
import CanvasApp from './CanvasComponents/CanvasApp';


function RoutePaths() {

    var forUseEffect;
    useEffect(() => {
        localStorage.removeItem("redirectTo");
    }, [forUseEffect])

    return (
        <Router>
            <MyNavbar />

            <Switch>
            
                <Route path="/blogs/toxicbot">
                    <BlogTemplate blogData={require("./BlogJsons/ToxicbotBlog.json")} />
                </Route>
                <Route path="/blogs/todo-app">
                    <BlogTemplate blogData={require("./BlogJsons/TodoBlog.json")} />
                </Route>
                <Route path="/blogs/dock-forms">
                    <BlogTemplate blogData={require("./BlogJsons/DockFormsBlog.json")} />
                </Route>
                <Route path="/blogs/hotel-managment">
                    <BlogTemplate blogData={require("./BlogJsons/HotelManagmentBlog.json")} />
                </Route>

                <Route path="/todo-app">
                    <TodoApp />
                </Route>

                <Route exact path="/pastebin">
                    <PasteBinHome />
                </Route>
                <Route path="/pastebin/">
                    <PasteBinApp />
                </Route>

                <Route exact path="/canvas">
                    <CanvasHome />
                </Route>
                <Route path="/canvas/">
                    <CanvasApp />
                </Route>

                <Route path="/bst-visualization">
                    <BSTApp />
                </Route>
                <Route path="/max-heap-visualization">
                    <MaxHeapApp />
                </Route>
                <Route path="/min-heap-visualization">
                    <MinHeapApp />
                </Route>


                <Route path="/">
                    {
                        localStorage.getItem('redirectTo') ? <Redirect to={localStorage.getItem('redirectTo')} /> 
                        : null
                        
                    }
                    <Home />
                </Route>

            </Switch>
        </Router>
    )
}

export default RoutePaths
