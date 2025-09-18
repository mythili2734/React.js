import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./todolistSlice";

function Todolist() {
  var { todos } = useSelector((state) => state.todoR);
  var dispatch = useDispatch();
  return (
    <div className="border border-4 p-2 m-2 border-info">
      <h1>Todolist</h1>
      <input type="text" id="d1" />
      <button
        onClick={() => {
          dispatch(addTodo(document.getElementById("d1").value));
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((todo, i) => {
          return (
            <li>
              {todo}
              <button
                onClick={() => {
                  dispatch(deleteTodo(i));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;
