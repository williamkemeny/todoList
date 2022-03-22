export const addTodo = (newTodo) => {
  return {
    type: "ADD_TODO",
    payload: {
      label: newTodo,
      id: Date.now(),
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};

export const countZero = () => {
  return {
    type: "COUNT_ZERO",
  };
};
