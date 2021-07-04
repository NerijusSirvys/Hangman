import { useSelector } from "react-redux";
import { AppState } from "../store/configStore";

import hangman_0 from "../Images/character/hangman-0.png";
import hangman_1 from "../Images/character/hangman-1.png";
import hangman_2 from "../Images/character/hangman-2.png";
import hangman_3 from "../Images/character/hangman-3.png";
import hangman_4 from "../Images/character/hangman-4.png";
import hangman_5 from "../Images/character/hangman-5.png";
import hangman_6 from "../Images/character/hangman-6.png";

const hangman = [
  hangman_6,
  hangman_5,
  hangman_4,
  hangman_3,
  hangman_2,
  hangman_1,
  hangman_0,
];

export const SideBar = () => {
  const player = useSelector((state: AppState) => state.player);
  const wrongGuesses = useSelector(
    (state: AppState) => state.game.wrongGuesses
  );
  const { gameScore, stars, numberOfCompleteLevels } = player;

  return (
    <aside className="sidebar">
      <div className="statistics">
        <p>Game Score: {gameScore}</p>
        <p>Stars: {stars}</p>
        <p>Levels Completed: {numberOfCompleteLevels}</p>
      </div>
      <div className="victim">
        <img src={hangman[wrongGuesses]} alt="hangman image" />
      </div>
    </aside>
  );
};
