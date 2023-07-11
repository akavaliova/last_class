import React from "react";
import "./Button.css";

interface ButtonProps {
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  const { onClick } = props;

  return (
    <button className="center-button" onClick={onClick}>
      Click to get facts
    </button>
  );
};

export default Button;