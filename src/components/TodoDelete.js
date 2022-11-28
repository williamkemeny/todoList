import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../actions";
import { Row } from "./style/Row.styled";
import { Button1 } from "./style/Button1.styled";

const TodoDelete = (todo) => {
  todo = todo.todo;

  const dispatch = useDispatch();
  const handleClick = (id) => dispatch(deleteTodo(id));
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    // eslint-disable-next-line
  }, [todo]);

  return (
    <Row>
      <Button1 onClick={() => handleClick(todo.id)}>
        <i className="fa fa-close"></i>
      </Button1>
    </Row>
  );
};

export default TodoDelete;
