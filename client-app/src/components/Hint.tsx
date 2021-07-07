import React, { useState, useEffect } from "react";

export const Hint = (props: any) => {
  const { clue, show, price } = props;
  const [hintIsShowing, setHintIsShowing] = useState(show);

  useEffect(() => {
    //==============================
    // TODO:push data to API to save
    //==============================
  }, [hintIsShowing]);

  if (hintIsShowing) {
    return <p>{clue}</p>;
  }

  return (
    <>
      <p>Click SHOW to reveal this clue</p>
      <p>Cost: {price} stars</p>
      <button onClick={() => setHintIsShowing(true)}>SHOW</button>
    </>
  );
};
