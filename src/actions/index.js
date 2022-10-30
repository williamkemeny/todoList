export const addTodo = (newTodo, newDescription, date) => {
  return {
    type: "ADD_TODO",
    payload: {
      label: newTodo,
      description: newDescription,
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

export const editTodo = (id, newText, newDescription) => {
  return {
    type: "EDIT_TODO",
    payload: {
      id: id,
      newText: newText,
      newDescription: newDescription,
    },
  };
};

export const countZero = () => {
  return {
    type: "COUNT_ZERO",
  };
};
