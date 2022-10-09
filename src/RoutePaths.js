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
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import ExpenseTracker from './ExpenseTracker/ExpenseTracker';
import ExpenseTrackerById from './ExpenseTracker/TrackerById/ExpenseTrackerById';
// import ImageModel from './ModelApps/ImageModel';
import ReactGA from 'react-ga4';

function RoutePaths() {

    useEffect(() => {
        setTimeout(() => {
            localStorage.removeItem("redirectTo");
        }, 200);
    }, [])

    const location = useLocation();
	useEffect(() => {
		console.log('React GA 4');
        ReactGA.send("pageview");
	}, [location.pathname])


    return (
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
                <Route path='pastebin' element={<Outlet />} >
                    <Route path=':id' element={<PasteBinApp />} />
                    <Route path='' element={<PasteBinHome />} />
                </Route>
                <Route path='canvas' element={<Outlet />} >
                    <Route path=':id' element={<CanvasApp />} />
                    <Route path='' element={<CanvasHome />} />
                </Route>
                <Route path='bst-visualization' element={<BSTApp />} />
                <Route path='max-heap-visualization' element={<MaxHeapApp />} />
                <Route path='min-heap-visualization' element={<MinHeapApp />} />
                <Route path='tsd-rally' element={<TSDRally />} />
                <Route path='tsd-rally-2' element={<TSDRally2 />} />
                <Route path='apps' element={<Home />} />
                <Route path='expense-tracker' element={<Outlet />}>
                    <Route path=':id' element={<ExpenseTrackerById />} />
                    <Route path='' element={<ExpenseTracker />} />
                </Route>
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
