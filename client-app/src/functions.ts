import { resetGame } from "./actions/gameActions";
import { loadNewLevel, removeLevel } from "./actions/levelActions";
import { GetLevel } from "./apiCalls";

const getLevelUrl = "https://localhost:5001/api/game/newlevel";

export const reload = (dispatch: any) => {
  // clear game data
  dispatch(resetGame());

  // remove old level that is showing
  dispatch(removeLevel());

  const newLevel = GetLevel(getLevelUrl);

  // delay new level display to show loading message
  setTimeout(() => {
    newLevel.then((level) => dispatch(loadNewLevel(level)));
  }, 1500);
};
