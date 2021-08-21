import React from "react";
import { engine } from "../../app/services/engine";

const handleClick = () => {
  engine.loadNewLevel();
};

interface MessageProps {
  message: string;
  button?: boolean;
}

export const Message: React.FC<MessageProps> = (props) => {
  return (
    <div className="message">
      <h2 className="title">{props.message}</h2>
      {props.button && (
        <p className="button" onClick={handleClick}>
          Click to continue
        </p>
      )}
    </div>
  );
};
