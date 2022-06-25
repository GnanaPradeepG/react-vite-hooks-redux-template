import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../features/Home/homeSlice";
import loginReducer from "../features/Login/loginSlice";

const store = configureStore({
  reducer: {
    home: homeReducer,
    login: loginReducer
  }
});

export default store;
