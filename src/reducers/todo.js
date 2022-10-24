const todoFromLocalStorage = JSON.parse(localStorage.getItem("todos") || "[]");
const countFromLocalStorage = JSON.parse(localStorage.getItem("count") || "0");
const initialState = {
  todos: todoFromLocalStorage,
  count: countFromLocalStorage,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload],
        count: state.count,
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        count: state.count + 1,
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        count: state.count,
      };
    case "COUNT_ZERO":
      return {
        todos: state.todos,
        count: 0,
      };
    default:
      return state;
  }
};

export default todoReducer;
