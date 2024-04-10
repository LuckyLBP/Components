import React, { useState } from "react";
import "./RadioBtn.scss";

const RadioBtn = () => {
  const [color, setColor] = useState("");

  const handleClick = (e: any) => {
    const value = e.target.value;
    if (value === "radio1") {
      setColor("red");
    } else if (value === "radio2") {
      setColor("blue");
    }
  };

  return (
    <div className="container">
      <div
        className="card"
        style={{
          backgroundColor: color,
          transition: "all 3s",
        }}
      >
        <p>Select a color</p>
        <div className="radioBtns">
          <input
            type="radio"
            id="radio1"
            name="color"
            value="radio1"
            onClick={handleClick}
          />
          <label htmlFor="radio1">Red</label>
          <input
            type="radio"
            id="radio2"
            name="color"
            value="radio2"
            onClick={handleClick}
          />
          <label htmlFor="radio2">Blue</label>
        </div>
      </div>
    </div>
  );
};

export default RadioBtn;
