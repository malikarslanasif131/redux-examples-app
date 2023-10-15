import React from "react";
import { useSelector } from "react-redux";

const ColoredBox = () => {
  const { primary, secondary } = useSelector((state) => state.colors);

  const boxStyle = {
    width: "50px",
    height: "50px",
    backgroundColor: primary,
    border: `10px solid ${secondary}`,
    margin: "auto",
  };

  return <div style={boxStyle}></div>;
};

export default ColoredBox;
