 export const addTodo = (state = "", action) => {
    switch (action.type) {
      case 'Add':
        return action.payload;
      default:
        return state;
    }
  };
