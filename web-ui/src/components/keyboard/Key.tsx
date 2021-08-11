import React from "react";
import { useSelector } from "react-redux";
import { gameEngine } from "../../app/services/gameEngine";
import { RootState } from "../../app/store";
import { Level } from "../../interfaces/Level";

interface KeyProps {
  letter: string;
}

const handleClick = (e: any, letter: string, level: Level) => {
  gameEngine.disableKey(e);
  gameEngine.processGuess(letter, level);
};

const Key: React.FC<KeyProps> = (props) => {
  const { letter } = props;
  const level = useSelector((state: RootState) => state.level);

  return (
    <div
      className="key-letter hover"
      onClick={(e) => handleClick(e, letter, level)}
    >
      <p>{letter}</p>
    </div>
  );
};

export { Key };
