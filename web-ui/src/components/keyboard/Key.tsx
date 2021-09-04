import React from "react";
import { engine } from "../../app/services/engine";

interface KeyProps {
  letter: string;
  isDisabled: boolean;
}

const handleClick = (e: any, letter: string) => {
  engine.disableKey(e);
  engine.processGuess(letter);
};

export const Key: React.FC<KeyProps> = (props) => {
  const { letter, isDisabled } = props;

  const classes = `key-letter button ${!isDisabled && "used"}`;

  return (
    <p className={classes} onClick={(e) => handleClick(e, letter)}>
      {letter}
    </p>
  );
};
