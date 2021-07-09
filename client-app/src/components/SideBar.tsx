import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store/configStore";
import { Statistics } from "./Statistics";
import { useEffect } from "react";
import { HangmanImage } from "./HangmanImage";
import { UpdatePlayer } from "../apiCalls";

export const SideBar = () => {
  const game = useSelector((state: AppState) => state.game);
  const level = useSelector((state: AppState) => state.level);
  const player = useSelector((state: AppState) => state.player);
  const dispatch = useDispatch();

  useEffect(() => {
    UpdatePlayer(player, level.id);
  }, [game.isLevelCompleted]);

  return (
    <aside className="sidebar">
      <Statistics />
      <HangmanImage />
    </aside>
  );
};
