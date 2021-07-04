import { useSelector } from "react-redux";
import { AppState } from "../store/configStore";
import img from "../Images/character/hangman-0.png";

export const SideBar = () => {
  const player = useSelector((state: AppState) => state.player);
  const { gameScore, stars, numberOfCompleteLevels } = player;

  return (
    <aside className="sidebar">
      <div className="statistics">
        <p>Game Score: {gameScore}</p>
        <p>Stars: {stars}</p>
        <p>Levels Completed: {numberOfCompleteLevels}</p>
      </div>
      <div className="victim">
        <img src={img} alt="hangman figure" />
      </div>
    </aside>
  );
};
