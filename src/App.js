import { useEffect } from "react";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import ReactGA from 'react-ga4';

import Intro from "./Intro/Intro";
import Homepage from "./Homepage/Homepage";
import MyNavbar from "./MyNavbar";

// CSS Imports
import "./App.css";
import "./Homepage/HomepageCSS.css";

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
				<Route path='test' element={ <Homepage /> } />
				<Route path='*' element={ 
						localStorage.getItem('redirectTo')  
						? <Navigate to={localStorage.getItem('redirectTo')} />
						: <Intro /> 
					} 
				/>
			</Route>
		</Routes>
    );
}

export default App;
