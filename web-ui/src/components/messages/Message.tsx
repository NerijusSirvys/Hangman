import React from "react";
import { levelService } from "../../app/services/levelService";

const handleClick = () => {
  levelService.loadLevel(true);
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
