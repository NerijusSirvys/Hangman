import React, { Dispatch, useRef, useState } from "react";
import { Hints } from "./Hints";
import { Keyboard } from "./Keyboard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Message } from "./Message";
import { AppState } from "../store/configStore";
import { Quiz } from "./Quiz";
import { GetLevel } from "../apiCalls";
import { loadNewLevel } from "../actions/levelActions";

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
        <Message message={"Loading..."} />
      </>
    );
  }

  return (
    <>
      {wrongGuesses < 6 ? <Quiz /> : <Message message={"Game Over..."} />}
      <div className="wrapper">
        <div className={wrongGuesses >= 6 ? "scribble" : ""}></div>
        <Hints />
        <Keyboard />
      </div>
    </>
  );
};
