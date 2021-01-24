import React from 'react'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogTemplate from './BlogTemplates/BlogTemplate';
import Home from './HomeComponents/Home';
import MyNavbar from "./MyNavbar";
import TodoApp from "./TodoAppComponents/TodoApp"

function RoutePaths() {
    return (
        <Router>
            <MyNavbar />

            <Switch>
            
                <Route path="/blogs/toxicbot">
                    <BlogTemplate blogData={require("./BlogJsons/ToxicbotBlog.json")} />
                </Route>
                <Route path="/blogs/todo">
                    <BlogTemplate blogData={require("./BlogJsons/TodoBlog.json")} />
                </Route>
                <Route path="/todo-app">
                    <TodoApp />
                </Route>
                <Route path="/">
                    <Home />
                </Route>

            </Switch>
        </Router>
    )
}

export default RoutePaths
