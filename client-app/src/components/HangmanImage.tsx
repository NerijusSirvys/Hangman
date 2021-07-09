import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store/configStore";
import { LevelCompleteMessage } from "./LevelCompleteMessage";

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

export const HangmanImage = () => {
  const game = useSelector((state: AppState) => state.game);
  return (
    <section className="hangman">
      {game.isLevelCompleted ? (
        <LevelCompleteMessage />
      ) : (
        <img src={hangman[game.wrongGuesses]} alt="hangman image" />
      )}
    </section>
  );
};
