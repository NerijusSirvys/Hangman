import React from "react";
import { Hints } from "./Hints";
import { Keyboard } from "./Keyboard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppState } from "../store/configStore";
import { Quiz } from "./Quiz";
import { GetLevel } from "../apiCalls";
import { loadNewLevel } from "../actions/levelActions";
import { GameOverMessage } from "./GameOverMessage";
import { LoadingMessage } from "./LoadingMessage";

const levelUrl = "https://localhost:5001/api/game/newlevel";
const newLevel = GetLevel(levelUrl);

export const GameBoard = () => {
  const level = useSelector((state: AppState) => state.level);
  const dispatch = useDispatch();

  const wrongGuesses = useSelector(
    (state: AppState) => state.game.wrongGuesses
  );

  useEffect(() => {
    // delay level loading to display loading message
    setTimeout(() => {
      newLevel.then((level) => dispatch(loadNewLevel(level)));
    }, 2000);
  }, []);

  // show loading message
  if (level.isLoading) {
    return (
      <>
        <LoadingMessage />
      </>
    );
  }

  return (
    <>
      {wrongGuesses < 6 ? <Quiz /> : <GameOverMessage />}
      <div className="wrapper">
        <div className={wrongGuesses >= 6 ? "scribble" : ""}></div>
        <Hints />
        <Keyboard />
      </div>
    </>
  );
};
