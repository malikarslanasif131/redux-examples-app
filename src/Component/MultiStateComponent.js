import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/Counter/counterSlice";
import { setUser } from "../store/User/userSlice";

const MultiStateComponent = () => {
  const [localState, setLocalState] = useState({
    name: "",
    email: "", // Add email to local state
  });
  const count = useSelector((state) => state.counter);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleSetUser = () => {
    dispatch(setUser(localState));
    setLocalState({ name: "", email: "" }); // Clear the local state
  };

  return (
    <div>
      <h2>Multi-State Component</h2>
      <p>Counter: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <p>User Name: {user.name}</p>
      <p>User Email: {user.email}</p>
      <input
        type="text"
        placeholder="Enter a name"
        value={localState.name}
        onChange={(e) => setLocalState({ ...localState, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter an email"
        value={localState.email}
        onChange={(e) =>
          setLocalState({ ...localState, email: e.target.value })
        }
      />
      <button onClick={handleSetUser}>Set User</button>
    </div>
  );
};

export default MultiStateComponent;
