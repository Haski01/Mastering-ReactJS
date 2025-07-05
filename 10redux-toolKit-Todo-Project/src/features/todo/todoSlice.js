import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "hello world",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (individualTodo) => individualTodo.id !== action.payload
      );
    },
    // updateTodo: (state, action) => {
    //   state.todos = state.todos.map((individualTodo) =>
    //     individualTodo.id === action.payload.id
    //       ? { ...individualTodo, text: action.payload.text }
    //       : individualTodo
    //   );
    // },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
