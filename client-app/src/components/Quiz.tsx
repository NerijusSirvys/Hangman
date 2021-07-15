import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store/configStore";
import { ReactComponent as CircleQuestionMark } from "../Images/question-circle.svg";

export const Quiz = () => {
  const level = useSelector((state: AppState) => state.level);

  return (
    <section className="quiz">
      <h3 className="clue">{level.clue}</h3>
      <div className="answer">
        {level.hiddenSecret.map((letter) => {
          return letter === "#" ? (
            <div className="letter">
              <CircleQuestionMark />
            </div>
          ) : (
            <div className="letter">
              <p>{letter}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
