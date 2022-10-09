import { useEffect } from "react";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import ReactGA from 'react-ga4';

import Homepage from "./Homepage/Homepage";
import MyNavbar from "./MyNavbar";
import TodoApp from "./TodoApp/TodoApp";
import BSTApp from "./TreeVisulizations/BSTApp";
import MinHeapApp from "./TreeVisulizations/MinHeapApp";
import MaxHeapApp from "./TreeVisulizations/MaxHeapApp";
import AppsPage from "./AppsPage/AppsPage";
import ExpenseTracker from "./ExpenseTracker/ExpenseTracker";
import ExpenseTrackerById from "./ExpenseTracker/ExpenseTrackerById";
import PastebinHome from "./Pastebin/PastebinHome";
import PasteBinApp from "./Pastebin/PastebinApp";
import DrawbinApp from "./Pastebin/DrawbinApp";
import DrawbinHome from "./Pastebin/DrawbinHome";


// CSS Imports
import "./App.css";
import "./TodoApp/TodoAppCSS.css";
import "./Homepage/HomepageCSS.css";
import "./AppsPage/AppsPageCSS.css";
import "./Pastebin/PastebinCSS.css";

// Animate on Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



function App() {
    useEffect(() => {
        setTimeout(() => {
            localStorage.removeItem("redirectTo");
        }, 200);
    }, []);

	const location = useLocation();
	useEffect(() => {
		// console.log('location', location.pathname);
        ReactGA.pageview(location.pathname);
	}, [location.pathname])


    return (
		<Routes>
			<Route 
				path="*"
				element={
					<>
						<MyNavbar />
						<Outlet />
						<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
					</>
				} 
			>
				<Route path='apps' element={ <Outlet /> } >
					<Route path='todo-app' element={ <TodoApp /> } />
					<Route path='bst-visualization' element={<BSTApp />} />
					<Route path='max-heap-visualization' element={<MaxHeapApp />} />
					<Route path='min-heap-visualization' element={<MinHeapApp />} />

					<Route path='expense-tracker' element={<Outlet />}>
						<Route path=':id' element={<ExpenseTrackerById />} />
						<Route path='' element={<ExpenseTracker />} />
					</Route>

					<Route path='pastebin' element={<Outlet />} >
						<Route path=':id' element={<PasteBinApp />} />
						<Route path='' element={<PastebinHome />} />
					</Route>
					
					<Route path='drawbin' element={<Outlet />} >
						<Route path=':id' element={<DrawbinApp />} />
						<Route path='' element={<DrawbinHome />} />
					</Route>


					<Route path='' element={ <AppsPage /> } />
				</Route>
				<Route path='*' element={ 
						localStorage.getItem('redirectTo')  
						? <Navigate to={localStorage.getItem('redirectTo')} />
						: <Homepage /> 
					} 
				/>
			</Route>
		</Routes>
    );
}

export default App;
