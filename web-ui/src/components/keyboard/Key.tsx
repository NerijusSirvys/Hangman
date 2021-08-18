import React from "react";
import { DisableKey } from "./DisableKey.logic";
import { ProcessGuess } from "./ProcessGuess.logic";

interface KeyProps {
  letter: string;
}

const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, letter: string) => {
  DisableKey(e);
  ProcessGuess(letter);
};

const Key: React.FC<KeyProps> = (props) => {
  const { letter } = props;

  return (
    <div className="key-letter hover" onClick={(e) => handleClick(e, letter)}>
      <p>{letter}</p>
    </div>
  );
};

export { Key };
