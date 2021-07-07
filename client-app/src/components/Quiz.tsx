import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store/configStore";

export const Quiz = () => {
  const level = useSelector((state: AppState) => state.level);

  return (
    <section className="level">
      <h3 className="clue">{level.clue}</h3>
      <h4 className="secret">{level.hiddenSecret}</h4>
    </section>
  );
};
