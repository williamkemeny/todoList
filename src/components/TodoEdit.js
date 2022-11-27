import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../actions";
import TodoDelete from "./TodoDelete.js";
import Calendar from "./Calendar.js";
import { Row, Row1, Row2, Row3 } from "./style/Row.styled";
import { Button1 } from "./style/Button1.styled";
import { TodoControls } from "./style/TodoControls.styled";
import { InputContainer1 } from "./style/InputContainer.styled";
import dayjs from "dayjs";
import DOMPurify from "dompurify";

import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const TodoEdit = (todo) => {
  todo = todo.todo;
  const dispatch = useDispatch();
  const [newText, setNewText] = useState(todo.label);
  const [newDescription, setNewDescription] = useState(todo.description);
  const [editButton, setEditButton] = useState(true);
  const [dateTime, setDateTime] = useState(dayjs(todo.due));

  const handleChange1 = (event) =>
    setNewText(DOMPurify.sanitize(event.target.value));

  const handleChange2 = (event) =>
    setNewDescription(DOMPurify.sanitize(event.target.value));

  const handleClick = () => {
    if (editButton === false) {
      dispatch(editTodo(todo.id, newText, newDescription, dateTime));
    }
    setEditButton(!editButton);
  };

  const dueDateDayjs = dayjs(todo.due);
  const dueDate = dueDateDayjs.$d + "";

  return (
    <Row1>
      {editButton ? (
        <div>
          <div>
            <p>
              <i>Label:</i> {todo.label}
            </p>
          </div>
          <div>
            <p>
              <i>Description:</i> {todo.description}
            </p>
          </div>
          <div>
            <p>
              <i>Due:</i> {dueDate}
            </p>
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
          <Row3>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="Due Date Picker"
                value={dateTime}
                onChange={(newValue) => {
                  setDateTime(newValue);
                }}
              />
            </LocalizationProvider>
          </Row3>
        </div>
      )}
      <TodoControls>
        <Row>
          <Button1 onClick={handleClick}>
            <i className="fa fa-pencil"></i>
          </Button1>
          <Calendar />
          <TodoDelete todo={todo} />
        </Row>
      </TodoControls>
    </Row1>
  );
};

export default TodoEdit;
