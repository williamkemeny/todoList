const initialState = {
  todos: [],
  count: 0,
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
    default:
      return state;
  }
};

export default todoReducer;
