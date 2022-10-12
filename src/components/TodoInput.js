import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";
import DOMPurify from "dompurify";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const dateNow = () => {
    let d = new Date();
    let x =
      d.getFullYear() +
      "-" +
      (d.getMonth() + 1) +
      "-" +
      d.getDate() +
      " " +
      (d.getHours() > 12
        ? d.getHours() - 12 + ":" + d.getMinutes() + " PM"
        : d.getHours() + ":" + d.getMinutes() + " AM");
    return x;
  };

  const handleChange = (event) =>
    setNewTodo(DOMPurify.sanitize(event.target.value));
  const handleClick = () => (
    dispatch(addTodo(newTodo, dateNow())), setNewTodo("")
  );
  return (
    <div>
      <input value={newTodo} onChange={handleChange} type="text" />
      <button className="button-1" onClick={handleClick}>
        <i className="fa fa-plus"></i>
      </button>
    </div>
  );
};

export default TodoInput;
