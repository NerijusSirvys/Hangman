import React from "react";
import { ProcessGuess } from "./ProcessGuess.logic";

interface KeyProps {
  letter: string;
}

const handleClick = (e: any, letter: string) => {
  // disable clicked letter
  e.target.classList.add("used");
  ProcessGuess(letter);
};

export const Key: React.FC<KeyProps> = (props) => {
  const { letter } = props;

  return (
    <p className="key-letter button" onClick={(e) => handleClick(e, letter)}>
      {letter}
    </p>
  );
};
