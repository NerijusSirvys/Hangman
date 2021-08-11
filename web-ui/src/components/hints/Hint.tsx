import React from "react";
import { useSelector } from "react-redux";
import { gameEngine } from "../../app/services/gameEngine";
import { RootState } from "../../app/store";

interface HintProps {
  id: string;
  clue: string;
  price: number;
  show: boolean;
}

const Hint: React.FC<HintProps> = (props) => {
  const { id, clue, price, show } = props;

  const playerStars = useSelector((state: RootState) => state.player.stars);

  const hideButton = () => {
    return playerStars < price;
  };

  // check if player have enough stars to pay for the hint
  // this protects from trying to cheat by removing class from the button that dissables it
  const handleClick = () => {
    if (playerStars >= price) {
      gameEngine.purchaseHint(id, price);
    }
  };

  if (show) {
    return <p>{clue}</p>;
  }

  return (
    <>
      <p>Click SHOW to reveal this clue</p>
      <p>Cost: {price} stars</p>

      <button
        className={hideButton() ? "disabled" : ""}
        onClick={() => handleClick()}
      >
        SHOW
      </button>
    </>
  );
};

export { Hint };
