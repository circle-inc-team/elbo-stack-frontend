import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: number = 0;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      return state + 1;
    },
    decrement(state) {
      return state - 1;
    },
    resetCounter() {
      return initialState;
    },
  },
});

export const { increment, decrement, resetCounter } = counterSlice.actions;

export const selectCounter = (state: RootState) => state.counter;

export default counterSlice.reducer;
