import React, { Dispatch, useState } from "react";
import { Hints } from "./Hints";
import { Keyboard } from "./Keyboard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Message } from "./Message";
import { AppState } from "../store/configStore";
import { Quiz } from "./Quiz";
import { LoadLevel } from "../apiCalls";

const levelUrl = "https://localhost:5001/api/game/newlevel";

export const GameBoard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    LoadLevel(dispatch, levelUrl);
  }, []);

  const level = useSelector((state: AppState) => state.level);

  const wronGuesses = useSelector((state: AppState) => state.game.wrongGuesses);

  let disableSection = "";
  wronGuesses >= 6 ? (disableSection = "disable") : (disableSection = "");

  return (
    <>
      {level.isLoading && <Message message={"Loading..."} />}
      {wronGuesses < 6 ? <Quiz /> : <Message message={"Game Over..."} />}
      <div className="secondary-screen">
        <div className={disableSection}></div>
        <Hints />
        <Keyboard />
      </div>
    </>
  );
};
