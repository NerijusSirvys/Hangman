import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store/configStore";
import { Hint } from "../components/Hint";

export const Hints = () => {
  const hints = useSelector((state: AppState) => state.level.hints);
  // const { hints } = props;

  return (
    <ul className="hints">
      {hints.map((hint: any) => {
        return (
          <li key={hint.id} className="hint">
            <Hint {...hint} />
          </li>
        );
      })}
    </ul>
  );
};
