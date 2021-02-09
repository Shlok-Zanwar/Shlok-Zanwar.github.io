import './TodoApp.css';
import TodoList from './components/TodoList';
import { Link } from "react-router-dom";

function App() {

  return (
    <>
    <div>
      <Link to="blogs/todo-app">
        <h1>To-Do App</h1>
      </Link>
      <TodoList />
    </div>
    </>
  );
}

export default App;
