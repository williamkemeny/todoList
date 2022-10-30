import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../actions";
import TodoDelete from "./TodoDelete.js";
import DOMPurify from "dompurify";

const TodoEdit = (todo) => {
  todo = todo.todo;
  const dispatch = useDispatch();
  const [newText, setNewText] = useState(todo.label);
  const [newDescription, setNewDescription] = useState(todo.description);
  const [editButton, setEditButton] = useState(true);

  const handleChange1 = (event) =>
    setNewText(DOMPurify.sanitize(event.target.value));

  const handleChange2 = (event) =>
    setNewDescription(DOMPurify.sanitize(event.target.value));

  const handleClick = () => {
    if (editButton === false) {
      dispatch(editTodo(todo.id, newText, newDescription));
    }
    setEditButton(!editButton);
  };

  return (
    <div className="row margin-1">
      {editButton ? (
        <div>
          <div>
            <p>Label: {todo.label}</p>
          </div>
          <div>
            <p>Description: {todo.description}</p>
          </div>
        </div>
      ) : (
        <div>
          <div className="row-2">
            <p>Label:</p>
            <input
              value={newText}
              onChange={handleChange1}
              type="text"
              size="7"
            />
          </div>
          <div className="row-2">
            <p>Description:</p>
            <input
              value={newDescription}
              onChange={handleChange2}
              type="text"
              size="7"
            />
          </div>
        </div>
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
