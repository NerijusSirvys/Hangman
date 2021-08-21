import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

export const Statistics: React.FC = () => {
  const player = useSelector((state: RootState) => state.player);
  const difficulty = useSelector((state: RootState) => state.level.difficulty);

  return (
    <div className="statistics">
      <p>Game Score: {player.gameScore}</p>
      <p>Stars: {player.stars}</p>
      <p>Levels Completed: {player.completeLevels}</p>
      <p>Difficulty: {difficulty}</p>
    </div>
  );
};
