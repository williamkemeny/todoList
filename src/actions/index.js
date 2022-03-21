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
