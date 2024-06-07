import React from "react";

const ConnectionLevel = ({ level, setLevel }) => {
  const incrementLevel = () => {
    if (level < 3) setLevel(level + 1);
  };

  const decrementLevel = () => {
    if (level > 1) setLevel(level - 1);
  };

  return (
    <div className="connection-level">
      <button className="level-btn decrement" onClick={decrementLevel}>
        -
      </button>
      <h1>Connection Level: {level}</h1>
      <button className="level-btn increment" onClick={incrementLevel}>
        +
      </button>
    </div>
  );
};

export default ConnectionLevel;
