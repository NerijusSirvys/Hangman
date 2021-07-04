import React, { useState } from "react";
import { Hints } from "./Hints";
import { Keyboard } from "./Keyboard";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Message } from "./Message";
import { AppState } from "../store/configStore";
import { loadNewLevel, setIsLoading } from "../actions/levelActions";
import { Quiz } from "./Quiz";
import { Level } from "../types/interfaces/Level";

const getLevelUrl = "https://localhost:5001/api/game/newlevel";

export const GameBoard = () => {
  const dispatch = useDispatch();
  const level = useSelector((state: AppState) => state.level);

  useEffect(() => {
    axios.get<Level>(getLevelUrl).then((response) => {
      dispatch(loadNewLevel(response.data));

      if (response.status === 200) {
        dispatch(setIsLoading(false));
      }
    });
  }, []);

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
