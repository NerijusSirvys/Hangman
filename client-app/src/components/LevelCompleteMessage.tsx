import { useDispatch, useSelector } from "react-redux";
import { resetGame } from "../actions/gameActions";
import { loadNewLevel, removeLevel } from "../actions/levelActions";
import { getLevel, UpdatePlayer } from "../apiCalls";
import { AppState } from "../store/configStore";
import { Player } from "../types/interfaces/Player";
import { Message } from "./Message";

const levelUrl = "https://localhost:5001/api/game/newlevel";

const handleClick = (dispatch: any, player: Player): void => {
  // clear game data
  dispatch(resetGame());

  // remove old level that is showing
  dispatch(removeLevel());

  const newLevel = getLevel(levelUrl);

  // delay new level display to show loading message
  setTimeout(() => {
    newLevel.then((level) => dispatch(loadNewLevel(level)));
  }, 1500);
};

export const LevelCompleteMessage = () => {
  const dispatch = useDispatch();
  const player = useSelector((state: AppState) => state.player);

  return (
    <div className="new-game-message">
      <Message message={"Play again?"} />
      <p className="hover" onClick={() => handleClick(dispatch, player)}>
        Sure...
      </p>
    </div>
  );
};
