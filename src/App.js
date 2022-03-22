import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, countZero } from "./actions";
import DOMPurify from "dompurify";
import "./App.css";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const handleClick = (id) => dispatch(deleteTodo(id));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  if (!todos || !todos.length) {
    return <p>No todos</p>;
  }
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <hr />
          <div className="row">
            <button onClick={() => handleClick(todo.id)}>
              <i className="fa fa-close"></i>
            </button>
            {todo.label}
          </div>
        </li>
      ))}
    </ul>
  );
};

const TodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const handleChange = (event) =>
    setNewTodo(DOMPurify.sanitize(event.target.value));
  const handleClick = () => (dispatch(addTodo(newTodo)), setNewTodo(""));
  return (
    <div>
      <input value={newTodo} onChange={handleChange} type="text" />
      <button onClick={handleClick}>Add Todo</button>
    </div>
  );
};

const Count = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
  const handleClick = () => dispatch(countZero());
  return (
    <div>
      <h2>Completed: {count}</h2>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>
        Todo List <i className="fa fa-plus"></i>
      </h1>
      <TodoInput />
      <Todos />
      <Count />
    </div>
  );
}

export default App;
