import { levelService } from "../../app/services/levelService";
import { game_reset } from "../../app/state/gameSlice";
import store from "../../app/store";

const handleClick = () => {
  store.dispatch(game_reset());
  levelService.restartLevel();
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
