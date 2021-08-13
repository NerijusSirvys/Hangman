import React from "react";
import { gameEngine } from "../../app/services/gameEngine";

enum MessageType {
  Loading,
  LevelComplete,
  GameOver,
}

interface MessageProps {
  type: MessageType;
}

const handleClick = () => {
  gameEngine.loadNewLevel();
};

const Message: React.FC<MessageProps> = (props) => {
  switch (props.type) {
    case MessageType.Loading:
      return (
        <div className="message">
          <h2>Loading...</h2>
        </div>
      );
    case MessageType.LevelComplete:
      return (
        <div className="message">
          <h2>Level Complete...</h2>
          <p className="hover" onClick={handleClick}>
            Click to continue
          </p>
        </div>
      );
    case MessageType.GameOver:
      return (
        <div className="message">
          <h2>Game Over</h2>
        </div>
      );
  }
};

export { MessageType, Message };
