import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../actions";
import TodoDelete from "./TodoDelete.js";
import DOMPurify from "dompurify";

const TodoEdit = (todo) => {
  todo = todo.todo;
  const dispatch = useDispatch();
  const submitClick = (id) => dispatch(editTodo(id));
  const [editTodo, setEditTodo] = useState(todo.label);
  const [editButton, setEditButton] = useState(true);

  const handleChange = (event) =>
    setEditTodo(DOMPurify.sanitize(event.target.value));

  return (
    <div className="row margin-1">
      {editButton ? (
        todo.label
      ) : (
        <input value={editTodo} onChange={handleChange} type="text" />
      )}
      <div className="todocontrols">
        <div className="row">
          <button
            className="button-1"
            onClick={() => setEditButton(!editButton)}
          >
            <i className="fa fa-pencil"></i>
          </button>
          <TodoDelete todo={todo} />
        </div>
      </div>
    </div>
  );
};

export default TodoEdit;
