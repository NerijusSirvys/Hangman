import React, { useState } from "react";
import { Hints } from "./Hints";
import { Keyboard } from "./Keyboard";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Loading } from "./Loading";
import { AppState } from "../store/configStore";
import { loadNewLevel } from "../actions/levelActions";

const getLevelUrl = "https://localhost:5001/api/game/newlevel";

export const Level = () => {
  const dispatch = useDispatch();
  const level = useSelector((state: AppState) => state.level);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(getLevelUrl).then((response) => {
      dispatch(loadNewLevel(response.data));

      if (response.status === 200) {
        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section className="level">
        <h3 className="clue">{level.clue}</h3>
        <h4 className="secret">{level.hiddenSecret}</h4>
        {/* <h4 className="secret">{level.failedGuesses}</h4> */}
      </section>
      <Hints />
      <Keyboard />
    </>
  );
};
