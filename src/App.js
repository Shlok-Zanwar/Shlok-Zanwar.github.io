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
import TSDRally2 from "./TSD/TSDRally2/TSDRally2";
import TSDRally from "./TSD/TSDRally/TSDRally";


// CSS Imports
import "./App.css";
import "./TodoApp/TodoAppCSS.css";
import "./Homepage/HomepageCSS.css";
import "./AppsPage/AppsPageCSS.css";
import "./Pastebin/PastebinCSS.css";
import "./TSD/TsdCSS.css";

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
		// react GA 4
		ReactGA.send({ hitType: 'pageview', page: location.pathname });
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

					
					<Route path='tsd-rally' element={<TSDRally />} />
                	<Route path='tsd-rally-2' element={<TSDRally2 />} />

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
