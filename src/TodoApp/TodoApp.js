import "./TodoApp.css";
import TodoList from "./components/TodoList";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function TodoApp() {
    document.title = "To-Do App | Shlok Zanwar";
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="main-outer-todo-div" data-aos="fade-up">
                <Link to="blogs/todo-app">
                    <h1 className="todo-heading">To-Do App</h1>
                </Link>
                <TodoList />
            </div>
        </>
    );
}
