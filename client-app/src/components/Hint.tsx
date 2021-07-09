import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { UpdateHint } from "../apiCalls";
import { AppState } from "../store/configStore";
import hint from "../types/interfaces/Hint";

export const Hint = (props: hint) => {
  const { clue, show, price, id } = props;
  const [hintIsShowing, setHintIsShowing] = useState(show);
  const player = useSelector((state: AppState) => state.player);

  const isLevelComplete = useSelector(
    (state: AppState) => state.game.isLevelCompleted
  );

  // hide hint SHOW button if player have less stars that hint const
  // of when level is complete
  const hideButton = () => {
    return player.stars < price || isLevelComplete;
  };

  console.log(hideButton());

  useEffect(() => {
    UpdateHint(id, true);
  }, [hintIsShowing]);

  if (hintIsShowing) {
    return <p>{clue}</p>;
  }

  return (
    <>
      <p>Click SHOW to reveal this clue</p>
      <p>Cost: {price} stars</p>
      <button
        className={hideButton() ? "hidden" : ""}
        onClick={() => setHintIsShowing(true)}
      >
        SHOW
      </button>
    </>
  );
};
