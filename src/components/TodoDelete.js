import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../actions";

const TodoDelete = (todo) => {
  todo = todo.todo;

  const dispatch = useDispatch();
  const handleClick = (id) => dispatch(deleteTodo(id));
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todo]);

  return (
    <div className="row">
      <button className="button-1" onClick={() => handleClick(todo.id)}>
        <i className="fa fa-close"></i>
      </button>
    </div>
  );
};

export default TodoDelete;
