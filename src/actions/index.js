export const addTodo = (newTodo, date) => {
  return {
    type: "ADD_TODO",
    payload: {
      label: newTodo,
      id: Date.now(),
      day: date,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};

export const editTodo = (id, newText) => {
  return {
    type: "EDIT_TODO",
    payload: {
      id: id,
      newText: newText,
    },
  };
};

export const countZero = () => {
  return {
    type: "COUNT_ZERO",
  };
};
