import { css } from '@emotion/react';
import {
  decrement,
  increment,
  resetCounter,
  selectCounter
} from '../redux/slices/couterSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';

const Counter = () => {
  const counter = useAppSelector(selectCounter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1
        css={css`
          color: red;
        `}
      >
        {counter}
      </h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispatch(resetCounter());
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Counter;
