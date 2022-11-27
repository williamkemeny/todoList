export const addTodo = (newTodo, newDescription, dueDate, date) => {
  return {
    type: "ADD_TODO",
    payload: {
      label: newTodo,
      description: newDescription,
      id: Date.now(),
      due: dueDate,
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

export const editTodo = (id, newText, newDescription, dueDate) => {
  return {
    type: "EDIT_TODO",
    payload: {
      id: id,
      newText: newText,
      newDescription: newDescription,
      dueDate: dueDate,
    },
  };
};

export const countZero = () => {
  return {
    type: "COUNT_ZERO",
  };
};
