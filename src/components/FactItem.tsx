import React from "react";
import "./FactItem.css";

interface FactItemProps {
  fact: string;
  onRemove: (fact: string) => void;
}

const FactItem = (props: FactItemProps) => {
  const { fact, onRemove } = props;

  const handleRemoveClick = () => {
    onRemove(fact);
  };

  return (
    <div className="fact-item-container">
      <div className="fact-text">{fact}</div>
      <button className="remove-button" onClick={handleRemoveClick}>
        Remove
      </button>
    </div>
  );
};

export default FactItem;