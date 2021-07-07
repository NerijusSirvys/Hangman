import React, { Dispatch, useState } from "react";
import { Hints } from "./Hints";
import { Keyboard } from "./Keyboard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Message } from "./Message";
import { AppState } from "../store/configStore";
import { Quiz } from "./Quiz";
import { getLevel } from "../apiCalls";
import { loadNewLevel } from "../actions/levelActions";

const levelUrl = "https://localhost:5001/api/game/newlevel";

export const GameBoard = () => {
  const dispatch = useDispatch();

  let newLevel = getLevel(levelUrl);

  useEffect(() => {
    // delay level loading to display loading message
    setTimeout(() => {
      newLevel.then((level) => dispatch(loadNewLevel(level)));
    }, 2000);
  }, []);

  const level = useSelector((state: AppState) => state.level);
  const wronGuesses = useSelector((state: AppState) => state.game.wrongGuesses);

  let disableSection = "";
  wronGuesses >= 6 ? (disableSection = "disable") : (disableSection = "");

  if (level.isLoading) {
    return (
      <>
        <Message message={"Loading..."} />
        <div className="pos-relative">
          <div className={disableSection}></div>
          <Hints />
          <Keyboard />
        </div>
      </>
    );
  }

  return (
    <>
      {/* {level.isLoading && <Message message={"Loading..."} />} */}
      {wronGuesses < 6 ? <Quiz /> : <Message message={"Game Over..."} />}
      <div className="pos-relative">
        <div className={disableSection}></div>
        <Hints />
        <Keyboard />
      </div>
    </>
  );
};
