import { createSlice } from "@reduxjs/toolkit";
//data // logic
const initialState = {
  count: 0,
};
export const counterSlice = createSlice({
  name: "CounterSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});
export var { increment, decrement } = counterSlice.actions;
var counterReducer = counterSlice.reducer;
export default counterReducer;
