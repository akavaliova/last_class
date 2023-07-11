import React from "react";
import "./FactItem.css";

interface FactItemProps {
  fact: string;
  onRemove: (fact: string) => void;
}

const FactItem: React.FC<FactItemProps> = (props) => {
  const { fact, onRemove } = props;

  const handleRemoveClick = () => {
    onRemove(fact);
  };

  return (
    <div className="fact-item-container">
      <div className="fact-item">
        <div className="fact-text">{fact}</div>
        <button className="remove-button" onClick={handleRemoveClick}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default FactItem;