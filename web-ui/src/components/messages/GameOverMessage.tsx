import { engine } from "../../app/services/engine";

const handleClick = () => {
  engine.restart();
};

export const GameOverMessage: React.FC = () => {
  return (
    <div className="message">
      <h2 className="title">Game Over...</h2>
      <p className="button" onClick={handleClick}>
        Click to restart
      </p>
    </div>
  );
};
