import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../actions";

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
          <b>{todo.day}</b>
          <div className="row">
            {todo.label}
            <button className="button-1" onClick={() => handleClick(todo.id)}>
              <i className="fa fa-close"></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Todos;
