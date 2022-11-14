import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";
import { Row2 } from "./style/Row.styled";
import { Button1 } from "./style/Button1.styled";
import { InputContainer } from "./style/InputContainer.styled";
import DOMPurify from "dompurify";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const dateNow = () => {
    let d = new Date();
    let m = d.getMinutes();
    if (m / 10 < 1) {
      m = "0" + m;
    }
    let x =
      d.getFullYear() +
      "-" +
      (d.getMonth() + 1) +
      "-" +
      d.getDate() +
      " " +
      (d.getHours() > 12
        ? d.getHours() - 12 + ":" + m + " PM"
        : d.getHours() + ":" + m + " AM");
    return x;
  };

  const handleChange_1 = (event) =>
    setNewTodo(DOMPurify.sanitize(event.target.value));
  const handleChange_2 = (event) =>
    setNewDescription(DOMPurify.sanitize(event.target.value));

  const handleClick = () => {
    if (newTodo !== "" && newDescription !== "") {
      dispatch(addTodo(newTodo, newDescription, dateNow()));
      setNewTodo("");
      setNewDescription("");
    }
  };

  return (
    <div>
      <Row2>
        <InputContainer>
          <input
            value={newTodo}
            onChange={handleChange_1}
            type="text"
            placeholder="Label"
          />
          <label>Label</label>
        </InputContainer>
      </Row2>
      <Row2>
        <InputContainer>
          <input
            value={newDescription}
            onChange={handleChange_2}
            type="text"
            placeholder="Description"
          />
          <label>Description </label>
        </InputContainer>
      </Row2>
      <Button1 onClick={handleClick}>
        <i className="fa fa-plus"></i>
      </Button1>
    </div>
  );
};

export default TodoInput;
