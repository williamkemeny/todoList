import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../actions";
import TodoDelete from "./TodoDelete.js";
import DOMPurify from "dompurify";

const TodoEdit = (todo) => {
  todo = todo.todo;
  const dispatch = useDispatch();
  const [newText, setNewText] = useState(todo.label);
  const [editButton, setEditButton] = useState(true);

  const handleChange = (event) =>
    setNewText(DOMPurify.sanitize(event.target.value));

  const handleClick = () => {
    if (editButton === false) {
      dispatch(editTodo(todo.id, newText));
    }
    setEditButton(!editButton);
  };

  return (
    <div className="row margin-1">
      {editButton ? (
        todo.label
      ) : (
        <input value={newText} onChange={handleChange} type="text" size="7" />
      )}
      <div className="todocontrols">
        <div className="row">
          <button className="button-1" onClick={handleClick}>
            <i className="fa fa-pencil"></i>
          </button>
          <TodoDelete todo={todo} />
        </div>
      </div>
    </div>
  );
};

export default TodoEdit;
