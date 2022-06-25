import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from './loginSlice';

function Login() {
  // const user = useSelector(state => state.user);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const login = () => {
    dispatch(loginUser({ username, password }));
  };
  return (
    <div>
      <input value={username} onChange={(e) => { setUsername(e.target.value); }} type="text" placeholder="Username" />
      {/* eslint-disable-next-line max-len */}
      <input value={password} onChange={(e) => { setPassword(e.target.value); }} type="password" placeholder="Password" />
      <button type="button" onClick={() => { login(); }}>Login</button>
    </div>
  );
}

export default Login;
