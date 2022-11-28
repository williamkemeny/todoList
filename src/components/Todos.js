import { useEffect } from "react";
import { useSelector } from "react-redux";
import TodoEdit from "./TodoEdit.js";
import { List } from "./style/List.styled";
import { UnorderedList } from "./style/UnorderedList.styled";
import { ImportantText } from "./style/ImportantText.styled";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  if (!todos || !todos.length) {
    return <ImportantText>No todos</ImportantText>;
  }
  return (
    <UnorderedList>
      {todos.map((todo) => (
        <List key={todo.id}>
          <TodoEdit todo={todo} />
        </List>
      ))}
    </UnorderedList>
  );
};

export default Todos;
