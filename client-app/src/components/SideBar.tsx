import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store/configStore";

import hangman_0 from "../Images/character/hangman-0.png";
import hangman_1 from "../Images/character/hangman-1.png";
import hangman_2 from "../Images/character/hangman-2.png";
import hangman_3 from "../Images/character/hangman-3.png";
import hangman_4 from "../Images/character/hangman-4.png";
import hangman_5 from "../Images/character/hangman-5.png";
import hangman_6 from "../Images/character/hangman-6.png";
import { Message } from "./Message";
import { LoadLevel, UpdatePlayer } from "../apiCalls";
import { resetGame } from "../actions/gameActions";
import { Player } from "../types/interfaces/Player";

const hangman = [
  hangman_6,
  hangman_5,
  hangman_4,
  hangman_3,
  hangman_2,
  hangman_1,
  hangman_0,
];

const handleClick = (dispatch: any, player: Player): void => {
  const levelUrl = "https://localhost:5001/api/game/newlevel";
  dispatch(resetGame());
  UpdatePlayer(player);
  LoadLevel(dispatch, levelUrl);
};

export const SideBar = () => {
  const dispatch = useDispatch();
  const player = useSelector((state: AppState) => state.player);
  const game = useSelector((state: AppState) => state.game);
  const secretLenght = useSelector(
    (state: AppState) => state.level.hiddenSecret
  );

  return (
    <aside className="sidebar">
      <div className="statistics">
        <p>Game Score: {player.gameScore}</p>
        <p>Stars: {player.stars}</p>
        <p>Levels Completed: {player.numberOfCompleteLevels}</p>
      </div>
      <div className="victim">
        {game.correctGuesses === secretLenght.length ? (
          <div className="new-game-message">
            <Message message={"Play again?"} />
            <p onClick={() => handleClick(dispatch, player)}>Sure...</p>
          </div>
        ) : (
          <img src={hangman[game.wrongGuesses]} alt="hangman image" />
        )}
      </div>
    </aside>
  );
};
