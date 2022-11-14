import Todos from "./components/Todos.js";
import Count from "./components/Count.js";
import TodoInput from "./components/TodoInput.js";
import { AppStyled } from "./components/style/App.styled";
import { TopOfApp } from "./components/style/TopOfApp.styled";
import { Header } from "./components/style/Header.styled";

function App() {
  return (
    <AppStyled>
      <TopOfApp>
        <Header>
          Todo List <i className="fa fa-plus"></i>
        </Header>
      </TopOfApp>
      <Todos />
      <TodoInput />
      <Count />
    </AppStyled>
  );
}

export default App;
