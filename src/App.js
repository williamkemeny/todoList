import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./actions";
import "./App.css";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const handleClick = (id) => dispatch(deleteTodo(id));

  if (!todos || !todos.length) {
    return <p>No todos</p>;
  }
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <button className="btn" onClick={() => handleClick(todo.id)}>
            <i className="fa fa-close"></i>
          </button>
          {todo.label}
        </li>
      ))}
    </ul>
  );
};

const TodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const count = useSelector((state) => state.count);
  const handleChange = (event) => setNewTodo(event.target.value);
  const handleClick = () => (dispatch(addTodo(newTodo)), setNewTodo(""));
  return (
    <div>
      <input value={newTodo} onChange={handleChange} type="text" />
      <button onClick={handleClick}>Add Todo</button>
      <h2>Completed: {count}</h2>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Todos />
      <TodoInput />
    </div>
  );
}

export default App;
