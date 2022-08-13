import React, { useEffect } from 'react'
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
import Intro from './Intro/Intro';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
// import ImageModel from './ModelApps/ImageModel';

function RoutePaths() {

    useEffect(() => {
        setTimeout(() => {
            localStorage.removeItem("redirectTo");
        }, 200);
    }, [])

    return (
        // <Router>
        //     <MyNavbar />

        //     <Switch>

        //         <Route path="/blogs/">
        //             <BlogTemplate />
        //         </Route>

        //         {/* <Route path="/models/10animals">
        //             <ImageModel modelInfo={require("./ModelApps/ModelDetails/10Animals.json")} />
        //         </Route> */}
                
        //         <Route path="/tictactoe">
        //             <TicTacToe />
        //         </Route>
        //         <Route path="/minesweeper">
        //             <MineSweeper />
        //         </Route>

        //         <Route path="/todo-app">
        //             <TodoApp />
        //         </Route>

        //         <Route exact path="/pastebin">
        //             <PasteBinHome />
        //         </Route>
        //         <Route path="/pastebin/">
        //             <PasteBinApp />
        //         </Route>

        //         <Route exact path="/canvas">
        //             <CanvasHome />
        //         </Route>
        //         <Route path="/canvas/">
        //             <CanvasApp />
        //         </Route>

        //         <Route path="/bst-visualization">
        //             <BSTApp />
        //         </Route>
        //         <Route path="/max-heap-visualization">
        //             <MaxHeapApp />
        //         </Route>
        //         <Route path="/min-heap-visualization">
        //             <MinHeapApp />
        //         </Route>

        //         <Route path="/tsd-rally">
        //             <TSDRally />
        //         </Route>
        //         <Route path="/tsd-rally-2">
        //             <TSDRally2 />
        //         </Route>

        //         <Route path="/apps">
        //             <Home />
        //         </Route>

        //         <Route path="/">
        //             {
        //                 localStorage.getItem('redirectTo') ? <Redirect to={localStorage.getItem('redirectTo')} /> 
        //                 : null
                        
        //             }
        //             <Intro />
        //         </Route>


        //     </Switch>
        // </Router>
        <Routes>
            <Route 
                path="*"
                element={
                    <>
                        <MyNavbar />
                        <Outlet />
                    </>
                } 
            >
                <Route path="blogs/:id" element={<BlogTemplate />} />
                <Route path='tictactoe' element={<TicTacToe />} />
                <Route path='minesweeper' element={<MineSweeper />} />
                <Route path='todo-app' element={<TodoApp />} />
                <Route path='pastebin' element={<PasteBinHome />} />
                <Route path='pastebin/' element={<PasteBinApp />} />
                <Route path='canvas' element={<CanvasHome />} />
                <Route path='canvas/' element={<CanvasApp />} />
                <Route path='bst-visualization' element={<BSTApp />} />
                <Route path='max-heap-visualization' element={<MaxHeapApp />} />
                <Route path='min-heap-visualization' element={<MinHeapApp />} />
                <Route path='tsd-rally' element={<TSDRally />} />
                <Route path='tsd-rally-2' element={<TSDRally2 />} />
                <Route path='apps' element={<Home />} />
                <Route 
                    path='*' 
                    element={
                        localStorage.getItem('redirectTo')  
                        ? <Navigate to={localStorage.getItem('redirectTo')} />
                        : <Intro />
                    }
                />
            </Route>
        </Routes>
    )
}

export default RoutePaths
