import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser, clearUser } from "../store/User/userSlice";

const User = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button
        onClick={() =>
          dispatch(setUser({ name: "John Doe", email: "john@example.com" }))
        }
      >
        Set User
      </button>
      <button onClick={() => dispatch(clearUser())}>Clear User</button>
    </div>
  );
};

export default User;
