import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './homeSlice';

function HomeView() {
  const { count } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{count}</div>
      <button type="button" onClick={() => dispatch(increment())}>Add</button>
      <button type="button" onClick={() => dispatch(decrement())}>Sub</button>
    </div>
  );
}

export default HomeView;
