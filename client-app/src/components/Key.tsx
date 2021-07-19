import React, { SyntheticEvent } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateHiddenSecret } from "../actions/levelActions";
import { AppState } from "../store/configStore";
import {
  incrementCorrectGuesses,
  incrementFailedGuess,
  updateIsLevelComplete,
} from "../actions/gameActions";
import { Level } from "../types/interfaces/Level";
import { addStars } from "../actions/playerActions";

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

// disables keyboard key once it used
const disableKey = (e: any) => {
  if (e.target.parentNode.classList.contains("key-letter")) {
    e.target.parentNode.classList.add("used");
  } else {
    e.target.classList.add("used");
  }
};

const handleClick = (letter: string, level: Level, dispatch: any, e: any) => {
  disableKey(e);
  // check if guess was correct
  if (
    level.secret.toUpperCase().includes(letter) &&
    !level.hiddenSecret.toString().toUpperCase().includes(letter)
  ) {
    // updates hidden letters and returns number of how many letters guessed
    const correctLetters = updateSecret(letter, level.secret, dispatch);

    if (correctLetters > 0) {
      dispatch(incrementCorrectGuesses(correctLetters));

      dispatch(addStars(level.starAward));

      // if number of correct guesses is equal to number of characters in secret
      // set levelIsComplete to TRUE
      dispatch(updateIsLevelComplete(level.secret.length));
    }
  } else {
    dispatch(incrementFailedGuess());
  }
};

export const Key = (props: any) => {
  const { keyLetter } = props;
  const level = useSelector((state: AppState) => state.level);
  const dispatch = useDispatch();

  return (
    <div
      className="key-letter hover"
      onClick={(e) => handleClick(keyLetter, level, dispatch, e)}
    >
      <p>{keyLetter}</p>
    </div>
  );
};
