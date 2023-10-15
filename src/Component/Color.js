import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPrimaryColor, setSecondaryColor } from "../store/Colors/colorSlice";
import ColoredBox from "./ColoredBox";

const Color = () => {
  const colors = useSelector((state) => state.colors);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Colors</h2>
      <div>
        <label>Primary Color: </label>
        <input
          type="text"
          value={colors.primary}
          onChange={(e) => dispatch(setPrimaryColor(e.target.value))}
        />
      </div>
      <div>
        <label>Secondary Color: </label>
        <input
          type="text"
          value={colors.secondary}
          onChange={(e) => dispatch(setSecondaryColor(e.target.value))}
        />
      </div>
      <ColoredBox />
    </div>
  );
};

export default Color;
