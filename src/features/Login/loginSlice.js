import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from '../../assets/services/http';

const initialState = {
  user: {},
  isLoggedIn: false,
  error: ''
};

export const loginUser = createAsyncThunk('login/loginUser', (body) => http.post('/login', body));

const loginSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    });
  }
});

export default loginSlice.reducer;
