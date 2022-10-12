import Todos from "./components/Todos.js";
import Count from "./components/Count.js";
import TodoInput from "./components/TodoInput.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="topOfApp">
        <h1>
          Todo List <i className="fa fa-plus"></i>
        </h1>
      </div>
      <Todos />
      <TodoInput />
      <Count />
    </div>
  );
}

export default App;
