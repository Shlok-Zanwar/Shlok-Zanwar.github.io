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
import WordsApp from './GREWords/WordsApp';
// import ImageModel from './ModelApps/ImageModel';


function RoutePaths() {

    var forUseEffect;
    useEffect(() => {
        localStorage.removeItem("redirectTo");
    }, [forUseEffect])

    return (
        <Router>
            <MyNavbar />

            <Switch>

                <Route path="/blogs/">
                    <BlogTemplate />
                </Route>

                {/* <Route path="/models/10animals">
                    <ImageModel modelInfo={require("./ModelApps/ModelDetails/10Animals.json")} />
                </Route> */}

                <Route path="/todo-app">
                    <TodoApp />
                </Route>

                <Route path="/gre-words">
                    <WordsApp />
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
