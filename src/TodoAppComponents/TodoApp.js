import './TodoApp.css';
import TodoList from './components/TodoList';
import { Link } from "react-router-dom";

function App() {

  document.title = "To-Do App | Shlok Zanwar"

  return (
    <>
    <div className="main-outer-todo-div">
      <Link to="blogs/todo-app">
        <h1>To-Do App</h1>
      </Link>
      <TodoList />
    </div>
    </>
  );
}

export default App;
