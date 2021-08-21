import React from "react";
import { engine } from "../../app/services/engine";

const handleClick = () => {
  engine.loadNewLevel();
};

export const LevelCompleteMessage: React.FC = () => {
  return (
    <div className="message">
      <h2 className="title">Level complete...</h2>
      <p className="button" onClick={handleClick}>
        Click to continue
      </p>
    </div>
  );
};
