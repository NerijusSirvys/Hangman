import { useSelector } from "react-redux";
import { AppState } from "../store/configStore";
import { Key } from "./Key";

const topRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const middleRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const bottomRow = ["Z", "X", "C", "V", "B", "N", "M"];

export const Keyboard = () => {
  const isLevelComplete = useSelector(
    (state: AppState) => state.game.isLevelCompleted
  );

  return (
    <section className={isLevelComplete ? "keyboard disable" : "keyboard"}>
      <div className="key-row">
        {topRow.map((key) => {
          return <Key key={key} keyLetter={key} />;
        })}
      </div>
      <div className="key-row">
        {middleRow.map((key) => {
          return <Key key={key} keyLetter={key} />;
        })}
      </div>
      <div className="key-row">
        {bottomRow.map((key) => {
          return <Key key={key} keyLetter={key} />;
        })}
      </div>
    </section>
  );
};
