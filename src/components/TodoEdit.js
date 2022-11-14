import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../actions";
import TodoDelete from "./TodoDelete.js";
import { Row, Row1, Row2 } from "./style/Row.styled";
import { Button1 } from "./style/Button1.styled";
import { TodoControls } from "./style/TodoControls.styled";
import { InputContainer1 } from "./style/InputContainer.styled";
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
    <Row1>
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
          <Row2>
            <InputContainer1
              value={newText}
              onChange={handleChange1}
              type="text"
              size="7"
            />
            <label>Label</label>
          </Row2>
          <Row2>
            <InputContainer1
              value={newDescription}
              onChange={handleChange2}
              type="text"
              size="7"
            />
            <label>Description</label>
          </Row2>
        </div>
      )}
      <TodoControls>
        <Row>
          <Button1 onClick={handleClick}>
            <i className="fa fa-pencil"></i>
          </Button1>
          <TodoDelete todo={todo} />
        </Row>
      </TodoControls>
    </Row1>
  );
};

export default TodoEdit;
