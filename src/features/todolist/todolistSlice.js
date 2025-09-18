import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: ["get veggies", "goto goa", "pickup parcel", "play table tennis"],
};

export const todolistSlice = createSlice({
  name: "TodolistSlice",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
    },
  },
});
export const { addTodo, deleteTodo } = todolistSlice.actions;
var todoReducer = todolistSlice.reducer;
export default todoReducer;
