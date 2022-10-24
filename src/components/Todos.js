import { useEffect } from "react";
import { useSelector } from "react-redux";
import TodoEdit from "./TodoEdit.js";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
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
          <TodoEdit todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default Todos;
