import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  incrementFailedGuess,
  updateHiddenSecret,
} from "../actions/levelActions";
import { AppState } from "../store/configStore";

const updateSecret = (letter: string, letters: string, dispatch: any) => {
  for (let i = 0; i < letters.length; i++) {
    if (letters[i].toUpperCase() === letter) {
      dispatch(updateHiddenSecret(i));
    }
  }
};

export const Key = (props: any) => {
  const { keyLetter } = props;
  const level = useSelector((state: AppState) => state.level);
  const dispatch = useDispatch();

  const handleClick = (letter: string) => {
    // check if guess was correct
    if (level.secret.toUpperCase().includes(letter)) {
      updateSecret(letter, level.secret, dispatch);
    } else {
      dispatch(incrementFailedGuess());
    }
  };

  return (
    <div className="key-Letter" onClick={() => handleClick(keyLetter)}>
      <p className="js-keyLetter">{keyLetter}</p>
    </div>
  );
};
