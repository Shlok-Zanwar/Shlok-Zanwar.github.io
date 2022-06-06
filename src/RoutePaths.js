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
import TicTacToe from './TicTacToe/TicTacToe';
import MineSweeper from './MineSweeper/MineSweeper';
import TSDRally from './TSDRally/TSDRally';
import TSDRally2 from './TSDRally2/TSDRally2';
import { Document } from 'react-pdf';
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
                
                <Route path="/tictactoe">
                    <TicTacToe />
                </Route>
                <Route path="/minesweeper">
                    <MineSweeper />
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

                <Route path="/tsd-rally">
                    <TSDRally />
                </Route>
                <Route path="/tsd-rally-2">
                    <TSDRally2 />
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
