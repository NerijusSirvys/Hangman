import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Key } from "./Key";

export const Keyboard: React.FC = () => {
  const keyboard = useSelector((state: RootState) => state.game.keyboard);

  return (
    <section className="keyboard">
      <div className="keyboard-row">
        {keyboard.topRow.map((key) => {
          return <Key key={key.letter} letter={key.letter} isDisabled={key.isDisabled} />;
        })}
      </div>
      <div className="keyboard-row">
        {keyboard.middleRow.map((key) => {
          return <Key key={key.letter} letter={key.letter} isDisabled={key.isDisabled} />;
        })}
      </div>
      <div className="keyboard-row">
        {keyboard.bottomRow.map((key) => {
          return <Key key={key.letter} letter={key.letter} isDisabled={key.isDisabled} />;
        })}
      </div>
    </section>
  );
};
