import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  incrementCorrectGuesses,
  incrementFailedGuess,
  updateIsLevelComplete,
} from "../actions/gameActions";
import { updateHiddenSecret } from "../actions/levelActions";

import { AppState } from "../store/configStore";
import { Game } from "../types/interfaces/Game";

const updateSecret = (
  letter: string,
  letters: string,
  dispatch: any
): number => {
  let correctLetters = 0;
  for (let i = 0; i < letters.length; i++) {
    if (letters[i].toUpperCase() === letter) {
      dispatch(updateHiddenSecret(i));
      correctLetters++;
    }
  }

  return correctLetters;
};

export const Key = (props: any) => {
  const { keyLetter } = props;
  const level = useSelector((state: AppState) => state.level);
  const game = useSelector((state: AppState) => state.game);
  const dispatch = useDispatch();

  const handleClick = (letter: string) => {
    // check if guess was correct
    if (
      level.secret.toUpperCase().includes(letter) &&
      !level.hiddenSecret.toString().toUpperCase().includes(letter)
    ) {
      // updates hidden letters and returns number of how many letters guessed
      const correctLetters = updateSecret(letter, level.secret, dispatch);

      if (correctLetters > 0) {
        dispatch(incrementCorrectGuesses(correctLetters));
        dispatch(updateIsLevelComplete(level.secret.length));
      }
    } else {
      dispatch(incrementFailedGuess());
    }
  };

  return (
    <div className="key-Letter hover" onClick={() => handleClick(keyLetter)}>
      <p>{keyLetter}</p>
    </div>
  );
};
