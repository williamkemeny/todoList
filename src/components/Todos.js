import { useEffect } from "react";
import { useSelector } from "react-redux";
import TodoEdit from "./TodoEdit.js";
import { List } from "./style/List.styled";
import { UnorderedList } from "./style/UnorderedList.styled";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  if (!todos || !todos.length) {
    return <p>No todos</p>;
  }
  return (
    <UnorderedList>
      {todos.map((todo) => (
        <List key={todo.id}>
          <b>{todo.day}</b>
          <TodoEdit todo={todo} />
        </List>
      ))}
    </UnorderedList>
  );
};

export default Todos;
