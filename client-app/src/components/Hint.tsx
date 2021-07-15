import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showHint } from "../actions/levelActions";
import { removeStars } from "../actions/playerActions";
import { UpdateHint, UpdatePlayerStars } from "../apiCalls";
import { AppState } from "../store/configStore";
import hint from "../types/interfaces/Hint";

const handleClick = (dispatch: any, price: number, id: string) => {
  dispatch(removeStars(price));
  dispatch(showHint(id));
};

export const Hint = (props: hint) => {
  const { clue, show, price, id } = props;

  const player = useSelector((state: AppState) => state.player);
  const isLevelComplete = useSelector(
    (state: AppState) => state.game.isLevelCompleted
  );

  const dispatch = useDispatch();

  // hide hint SHOW button if player have less stars that hint const
  // of when level is complete
  const hideButton = () => {
    return player.stars < price || isLevelComplete;
  };

  useEffect(() => {
    UpdateHint(id, true);
    UpdatePlayerStars(player.stars);
  }, [show]);

  if (show) {
    return <p>{clue}</p>;
  }

  return (
    <>
      <p>Click SHOW to reveal this clue</p>
      <p>Cost: {price} stars</p>
      <button
        className={hideButton() ? "hidden" : ""}
        onClick={() => handleClick(dispatch, price, id)}
      >
        SHOW
      </button>
    </>
  );
};
