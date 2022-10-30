import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";
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
    console.log(m / 10);
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
  const handleClick = () => (
    dispatch(addTodo(newTodo, newDescription, dateNow())),
    setNewTodo(""),
    setNewDescription("")
  );
  return (
    <div>
      <div className="row-2 input-container">
        <input value={newTodo} onChange={handleChange_1} type="text" />
        <label>Label</label>
      </div>
      <div className="row-2 input-container">
        <input value={newDescription} onChange={handleChange_2} type="text" />
        <label>Description </label>
      </div>
      <button className="button-1" onClick={handleClick}>
        <i className="fa fa-plus"></i>
      </button>
    </div>
  );
};

export default TodoInput;
