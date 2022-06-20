import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './homeSlice'

const homeView = () => {
  const {count} = useSelector((state) => state.home);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{count}</div>
      <button  onClick={() => dispatch(increment())}>Add</button>
      <button onClick={() => dispatch(decrement())} >Sub</button>
    </div>
  )
}

export default homeView
