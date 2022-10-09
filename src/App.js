import React, { Suspense, useEffect } from "react";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import ReactGA from 'react-ga4';
// import GlobalSearch from "react-global-search/dist/GlobalSearch";
// import { GrDocumentText } from "react-icons/gr";

import Homepage from "./Homepage/Homepage";
// import MyNavbar from "./MyNavbar";
// import TodoApp from "./TodoApp/TodoApp";
// import BSTApp from "./TreeVisulizations/BSTApp";
// import MinHeapApp from "./TreeVisulizations/MinHeapApp";
// import MaxHeapApp from "./TreeVisulizations/MaxHeapApp";
// import AppsPage from "./AppsPage/AppsPage";
// import ExpenseTracker from "./ExpenseTracker/ExpenseTracker";
// import ExpenseTrackerById from "./ExpenseTracker/ExpenseTrackerById";
// import PastebinHome from "./Pastebin/PastebinHome";
// import PasteBinApp from "./Pastebin/PastebinApp";
// import DrawbinApp from "./Pastebin/DrawbinApp";
// import DrawbinHome from "./Pastebin/DrawbinHome";
// import TSDRally2 from "./TSD/TSDRally2/TSDRally2";
// import TSDRally from "./TSD/TSDRally/TSDRally";
// import BlogsPage from "./AppsPage/BlogsPage";
// import BlogTemplate from "./BlogTemplates/BlogTemplate";
// import MineSweeper from "./MineSweeper/MineSweeper";

// CSS Imports
import "./App.css";
import "./TodoApp/TodoAppCSS.css";
import "./Homepage/HomepageCSS.css";
import "./AppsPage/AppsPageCSS.css";
import "./Pastebin/PastebinCSS.css";
import "./TSD/TsdCSS.css";
import "./BlogTemplates/BlogCSS.css";
import "./MineSweeper/MineSweeperCSS.css";

// Animate on Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SemipolarLoading } from "react-loadingg";
AOS.init();

// const Homepage = React.lazy(() => import("./Homepage/Homepage"));
const MyNavbar = React.lazy(() => import("./MyNavbar"));
const TodoApp = React.lazy(() => import("./TodoApp/TodoApp"));
const BSTApp = React.lazy(() => import("./TreeVisulizations/BSTApp"));
const MinHeapApp = React.lazy(() => import("./TreeVisulizations/MinHeapApp"));
const MaxHeapApp = React.lazy(() => import("./TreeVisulizations/MaxHeapApp"));
const AppsPage = React.lazy(() => import("./AppsPage/AppsPage"));
const ExpenseTracker = React.lazy(() => import("./ExpenseTracker/ExpenseTracker"));
const ExpenseTrackerById = React.lazy(() => import("./ExpenseTracker/ExpenseTrackerById"));
const PastebinHome = React.lazy(() => import("./Pastebin/PastebinHome"));
const PasteBinApp = React.lazy(() => import("./Pastebin/PastebinApp"));
const DrawbinApp = React.lazy(() => import("./Pastebin/DrawbinApp"));
const DrawbinHome = React.lazy(() => import("./Pastebin/DrawbinHome"));
const TSDRally2 = React.lazy(() => import("./TSD/TSDRally2/TSDRally2"));
const TSDRally = React.lazy(() => import("./TSD/TSDRally/TSDRally"));
const BlogsPage = React.lazy(() => import("./AppsPage/BlogsPage"));
const BlogTemplate = React.lazy(() => import("./BlogTemplates/BlogTemplate"));
const MineSweeper = React.lazy(() => import("./MineSweeper/MineSweeper"));


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

	// const searchItems = [
	// 	...(require("./AppsPage/Apps.json").map((item) => {
	// 		var icon = <GrDocumentText />
	// 		if (item.type === "App") {
	// 			icon = <GrDocumentText />
	// 		}
	// 		else if (item.type === "Game") {
	// 			icon = <GrDocumentText />
	// 		}
	// 		else if (item.type === "Blog") {
	// 			icon = <GrDocumentText />
	// 		}

	// 		return {
	// 			name: item.title,
	// 			// description: item.description,
	// 			icon: icon,
	// 			pathname: item.url,
	// 			search: item.title,
	// 		}
	// 	}))
	// ];

	const loadingComponent = (
		<SemipolarLoading   size="large" color="rgb(251, 255, 3)" />
	);

    return (
		<>
		<Routes>
			<Route 
				path="*"
				element={
					<>
						<MyNavbar />
						{/* <GlobalSearch
							items={searchItems}
							displayButton={false}
						/> */}
						<Outlet />
						<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
					</>
				} 
			>
				<Route path='apps' element={ <Outlet /> } >
					<Route 
						path='todo-app' 
						element={ 
							<Suspense fallback={loadingComponent}>
								<TodoApp /> 
							</Suspense>
						} 
					/>
					<Route
						path='bst-visualization'
						element={
							<Suspense fallback={loadingComponent}>
								<BSTApp />
							</Suspense>
						}
					/>
					<Route
						path='max-heap-visualization'
						element={
							<Suspense fallback={loadingComponent}>
								<MaxHeapApp />
							</Suspense>
						}
					/>
					<Route
						path='min-heap-visualization'
						element={
							<Suspense fallback={loadingComponent}>
								<MinHeapApp />
							</Suspense>
						}
					/>

					<Route path='expense-tracker' element={<Outlet />}>
						<Route
							path=':id'
							element={
								<Suspense fallback={loadingComponent}>
									<ExpenseTrackerById />
								</Suspense>
							}
						/>
						<Route
							path=''
							element={
								<Suspense fallback={loadingComponent}>
									<ExpenseTracker />
								</Suspense>
							}
						/>
					</Route>

					<Route path='pastebin' element={<Outlet />}>
						<Route
							path=':id'
							element={
								<Suspense fallback={loadingComponent}>
									<PasteBinApp />
								</Suspense>
							}
						/>
						<Route
							path=''
							element={
								<Suspense fallback={loadingComponent}>
									<PastebinHome />
								</Suspense>
							}
						/>
					</Route>

					<Route path='drawbin' element={<Outlet />}>
						<Route
							path=':id'
							element={
								<Suspense fallback={loadingComponent}>
									<DrawbinApp />
								</Suspense>
							}
						/>
						<Route
							path=''
							element={
								<Suspense fallback={loadingComponent}>
									<DrawbinHome />
								</Suspense>
							}
						/>
					</Route>

					<Route
						path='tsd-rally'
						element={
							<Suspense fallback={loadingComponent}>
								<TSDRally />
							</Suspense>
						}
					/>
					<Route
						path='tsd-rally-2'
						element={
							<Suspense fallback={loadingComponent}>
								<TSDRally2 />
							</Suspense>
						}
					/>

					<Route
						path=''
						element={
							<Suspense fallback={loadingComponent}>
								<AppsPage />
							</Suspense>
						}
					/>
					
				</Route>

				<Route path='games' element={<Outlet />}>
					<Route path='minesweeper' element={
						<Suspense fallback={loadingComponent}>
							<MineSweeper />
						</Suspense>
					} />
				</Route>


				<Route path='blogs' element={ <Outlet /> } >
					{/* <Route path=':id' element={ <BlogTemplate /> } />
					<Route path='' element={ <BlogsPage /> } /> */}

					<Route path=':id' element={
						<Suspense fallback={loadingComponent}>
							<BlogTemplate />
						</Suspense>
					} />
					<Route path='' element={
						<Suspense fallback={loadingComponent}>
							<BlogsPage />
						</Suspense>
					} />
				</Route>

				<Route path='*' element={ 
						localStorage.getItem('redirectTo')  
						? <Navigate to={localStorage.getItem('redirectTo')} />
						: <Homepage /> 
					} 
				/>
			</Route>
		</Routes>
		
		</>
    );
}

export default App;
