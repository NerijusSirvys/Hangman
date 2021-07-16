import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store/configStore";

export const Statistics = () => {
  const player = useSelector((state: AppState) => state.player);
  const levelDifficulty = useSelector(
    (state: AppState) => state.level.difficulty
  );

  return (
    <div className="statistics">
      <p>Game Score: {player.gameScore}</p>
      <p>Stars: {player.stars}</p>
      <p>Levels Completed: {player.numberOfCompleteLevels}</p>
      <p>Difficulty: {levelDifficulty}</p>
    </div>
  );
};
