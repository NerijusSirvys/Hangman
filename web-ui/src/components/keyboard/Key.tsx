import React from "react";
import { engine } from "../../app/services/engine";

interface KeyProps {
  letter: string;
}

const handleClick = (e: any, letter: string) => {
  engine.disableKey(e);
  engine.processGuess(letter);
};

export const Key: React.FC<KeyProps> = (props) => {
  const { letter } = props;

  return (
    <p className="key-letter button" onClick={(e) => handleClick(e, letter)}>
      {letter}
    </p>
  );
};
