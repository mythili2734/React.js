import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

function Counter() {
  var { count } = useSelector((state) => state.cntR);
  var dispatch = useDispatch();
  return (
    <div className="border border-4 p-2 m-2 border-danger">
      <h1>Counter:{count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
