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
                <div>
                    <Link className="todo-heading" to="/blogs/todo-app">
                        To-Do App
                    </Link>
                </div>
                <TodoList />
            </div>
        </>
    );
}
