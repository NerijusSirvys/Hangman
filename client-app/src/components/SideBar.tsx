import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../store/configStore";
import { Statistics } from "./Statistics";
import { useEffect } from "react";
import { HangmanImage } from "./HangmanImage";
import { UpdatePlayer } from "../apiCalls";
import { addGameScore, incrementCompleteLevel } from "../actions/playerActions";

export const SideBar = () => {
  const dispatch = useDispatch();
  const game = useSelector((state: AppState) => state.game);
  const level = useSelector((state: AppState) => state.level);
  const player = useSelector((state: AppState) => state.player);

  useEffect(() => {
    if (game.isLevelCompleted) {
      dispatch(addGameScore(level.gameScoreAward));
      dispatch(incrementCompleteLevel());
      UpdatePlayer(player, level.id);
    }
  }, [game.isLevelCompleted]);

  return (
    <aside className="sidebar">
      <Statistics />
      <HangmanImage />
    </aside>
  );
};
