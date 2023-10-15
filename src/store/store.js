import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter/counterSlice";
import userReducer from "./User/userSlice";
import colorReducer from "./Colors/colorSlice";
import todosReducer from "./Todo/todosSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    colors: colorReducer,
    todos: todosReducer,
  },
});

export default store;
